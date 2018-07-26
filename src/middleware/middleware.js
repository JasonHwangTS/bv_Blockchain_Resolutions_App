// Middleware for handling promises from API calls
// promiseMiddleware will capture action.payload if payload is a promise and return promise response value
const promiseMiddleware = store => next => action => {
    if (isPromise(action.payload)) {
      store.dispatch({ type: 'ASYNC_START', subtype: action.type });
      action.payload.then(
        res => {
          action.payload = res;
          store.dispatch(action);
        },
        error => {
          action.error = true;
          if (typeof error.response !== 'undefined')
            action.payload = error.response.body;
          store.dispatch(action);
        }
      );
      return;
    }
    next(action);
  };
  // function determines if payload is a promise
  function isPromise(v) {
    return v && typeof v.then === 'function';
  };
  
  // Store parameters 'ext_id', 'token', and 'expires_at' for future login
  const localStorageMiddleware = store => next => action => {
    if (action.type === 'LOGIN' && localStorage.getItem('ext_id') === null) {
      localStorage.setItem('ext_id', action.ext_id.toString());
      localStorage.setItem('access_token', action.accessToken);
      localStorage.setItem('expires_at', JSON.stringify(action.expiresAt));
    }
    if (action.type === 'LOGOUT') {
      localStorage.removeItem('ext_id');
      localStorage.removeItem('access_token');
      localStorage.removeItem('expires_at');
    }
    next(action);
  };
  
  export {
    localStorageMiddleware,
    promiseMiddleware
  };