import axios from 'axios'

export const getTopics = () => {
  return axios
    .get('https://nc--news-server.herokuapp.com/api/topics')
    .then(({ data: { topics } }) => {
      return topics;
    })
}

export const getArticles = ({ sort_by, topic }) => {
  return axios
    .get('https://nc--news-server.herokuapp.com/api/articles', {
      params: {
        sort_by: sort_by,
        topic: topic
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    })

}

