const defaultState = {
  requests: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_REQUESTS':
      return {
        ...state,
        requests: action.error ? null : action.requests.results
      }
    case 'LOGOUT':
      return {
        ...state,
        requests: null
      }
    default:
      return state;
  }
}