import request from 'superagent'

export const getMadlibs = () => {
  return (
    request
      .get('/api/v1/madlibs')
      //optional below
      .then(() => {})
  )
}
