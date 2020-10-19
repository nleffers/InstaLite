import { useState, useEffect } from 'react';

export default httpClient => {
  const { request, response } = httpClient.interceptors
  const [error, setError] = useState(null)

  const reqInterceptor = request.use(req => {
    setError(null)
    return req;
  })
  const respInterceptor = response.use(
    resp => resp,
    err => {
      setError(err)
      return Promise.reject(err)
    }
  );

  useEffect(() => {
    return () => {
      request.eject(reqInterceptor);
      response.eject(respInterceptor);
    }
  }, [
    reqInterceptor,
    respInterceptor,
    request,
    response
  ])

  const errorConfirmedHandler = () => {
    setError(null);
  }

  return [error, errorConfirmedHandler]
}

