import { put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'

import { baseUrl } from './constants'
import { requestStart, requestSuccess, requestFail } from '../actions'

export function* employeeAdd({ formData }) {
  yield put(requestStart())
  const response = yield fetch(`${baseUrl}/employees`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${yield AsyncStorage.getItem('@employeesTracker:token')}`
    },
    body: formData
  })
  const { status } = response
  if (status === 401)
    return yield put(requestFail({ unauthorized: true, message: 'PLease, log in again to proceed.' }))
  if (status === 400) {
    const [{ dataPath, message }] = JSON.parse((yield response.json()).message)
    return yield put(requestFail({ message: `${dataPath.slice(1)} ${message}` }))
  }
  if (status === 200) {
    const res = yield response.json()
    console.log(res)
    return yield put(requestSuccess({ res }))
  }
  const { message } = yield response.json()
  return yield put(requestFail({ message }))
}