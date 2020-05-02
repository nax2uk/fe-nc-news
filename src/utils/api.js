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

export const getArticleById = (article_id) => {
  return axios
    .get(`https://nc--news-server.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    })
}

export const getComments = (article_id) => {
  return axios
    .get(`https://nc--news-server.herokuapp.com/api/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    })

}

export const getSortedArticles = ({ sort_by, order, topic }) => {
  return axios
    .get(`https://nc--news-server.herokuapp.com/api/articles`, {
      params: {
        sort_by: sort_by,
        order: order,
        topic: topic
      }
    })
    .then(({ data: { articles } }) => {
      console.log({
        sort_by: sort_by,
        order: order,
        topic: topic
      })
      return articles;
    })

}
