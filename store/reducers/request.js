import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAIL } from '../actions/action-types'

const initState = {
  error: null,
  loading: false
}

export default (state = initState, { type, ...payload }) => {
  switch (type) {
    case REQUEST_START:
      return { ...state, loading: true, error: null }
    case REQUEST_SUCCESS:
      const { token, role } = payload
      return { ...state, loading: false, token, role }
    case REQUEST_FAIL:
      const { error } = payload
      return { ...state, loading: false, error }
    default:
      return state
  }
}