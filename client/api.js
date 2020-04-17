import request from 'superagent'

export const getMadlibs = () => {
  return (
    request
      .get('/api/v1/madlibs')
      // optional below
      .then(() => {})
  )
}

export const getImage = (imageName) => {
  return (
    request
      .get('/api/v1/image')
      .query({ image: imageName })
      // optional below
      .then(imgSrc => {
        return imgSrc.body
      })
  )
}

export const generateWord = (type) => {
  return request
    .get('/api/v1/words')
    .query({ word: type })
}
