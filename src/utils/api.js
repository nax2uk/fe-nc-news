import axios from 'axios'

export const getTopics = () => {
  return axios
    .get('https://nc--news-server.herokuapp.com/api/topics')
    .then(({ data: { topics } }) => {
      return topics;
    })
}

