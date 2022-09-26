import axios from 'axios'

const ImageAPI = axios.create({
  baseURL: 'https://api.unsplash.com/'
})

async function getRandomImage () {
  const { data } = await ImageAPI.get('search/photos/?client_id=z7g0EDpzmWCt8R-ku7Px9Ipqe8QwgEkbt1sK2Ko5F_c&page=1&query=weather', {
  }).catch((error) => {
    console.log('Rejected: ', error)
  })
  const randomNumber = Math.floor(Math.random() * 10)

  return data.results[randomNumber].urls.regular
}

export default {
  getRandomImage
}
