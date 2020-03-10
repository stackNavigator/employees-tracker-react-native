import { put } from 'redux-saga/effects'

import { authStart, authSuccess, authFail } from '../actions'

const baseUrl = 'http://localhost:3502/api'

export function* auth({ formData }) {
  yield put(authStart())
  const response = yield fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  const { status } = response
  if (status === 404)
    return yield put(authFail('User was not found'))
  if (status === 401)
    return yield put(authFail('Incorrect username and/or password'))
  if (status === 400) {
    const [{ dataPath, message }] = JSON.parse((yield response.json()).message)
    return yield put(authFail(`${dataPath.slice(1)} ${message}`))
  }
  if (status === 200) {
    const res = yield response.json()
    const { token, role } = res
    return yield put(authSuccess(token, role))
  }
  const { message } = yield response.json()
  return yield put(authFail(message))
}