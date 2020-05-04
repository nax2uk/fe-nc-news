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

export const getUser = (user) => {
  return axios
    .get(`https://nc--news-server.herokuapp.com/api/users/${user}`)
    .then(({ data: { user } }) => {
      return user;
    })
}

export const updateArticleVotes = (article_id, voteChange) => {

  return axios
    .patch(`https://nc--news-server.herokuapp.com/api/articles/${article_id}`, { inc_votes: voteChange })
}

export const postComment = (article_id, username, body) => {
  return axios
    .post(`https://nc--news-server.herokuapp.com/api/articles/${article_id}/comments`, {
      username: username,
      body: body
    })
    .then(({ data: { comment } }) => {
      console.log(comment)
      return comment;
    })
}

export const deleteComment = (comment_id) => {
  return axios
    .delete(`https://nc--news-server.herokuapp.com/api/comments/${comment_id}`);
}