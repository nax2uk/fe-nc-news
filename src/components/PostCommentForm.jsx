import React, { Component } from 'react';

class PostCommentForm extends Component {
  state = { body: "" }

  handleChange = (event) => {
    this.setState({ body: event.target.value })
  }

  submitComment = (event) => {
    event.preventDefault();
    const { article_id, username, addComment } = this.props;
    const { body } = this.state;

    addComment(article_id, username, body);

  }

  render() {
    const { username } = this.props;
    const { body } = this.state;
    return (<React.Fragment>
      {
        (username === "") ? <p className="ml-2">You can't post a comment because you are not logged in.</p> :
          <form>
            <div className="form-group container-fluid">
              <label>{`Post Comment as ${username}`} </label>
              <textarea className="form-control" rows="3" onChange={this.handleChange} value={body}></textarea>
              <div className="text-right">
                <button className="btn btn-outline-secondary btn-sm small ml-2 mt-2" onClick={this.submitComment}>Comment</button>
              </div>
            </div>
          </form>
      }
    </React.Fragment>);
  };

}

export default PostCommentForm;