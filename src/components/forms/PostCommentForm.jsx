import React, { Component } from 'react';

class PostCommentForm extends Component {
  state = { body: "", isNotFilled: true }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ body: event.target.value, isNotFilled: (value) ? false : true })
  }

  submitComment = (event) => {
    event.preventDefault();
    const { article_id, username, addComment } = this.props;
    const { body } = this.state;

    addComment(article_id, username, body);

  }

  render() {
    const { username } = this.props;
    const { body, isNotFilled } = this.state;

    return (<React.Fragment>
      {
        (username) ?
          <form>
            <div className="form-group container-fluid mt-5">
              <label for="comments" className="small">{`Post Comment as ${username}`}</label>
              <textarea id="comments" className="form-control" rows="3" onChange={this.handleChange} value={body} placeholder="Please write a comment before submitting." />

              <div className="text-right">
                <button className="btn btn-outline-secondary btn-sm cursor-pointer small ml-2 mt-2" onClick={this.submitComment} disabled={isNotFilled} > Comment</button>
              </div>
            </div>
          </form> : <p className="mt-3 ml-4">You can't post a comment because you are not logged in.</p>
      }
    </React.Fragment>);
  };

}

export default PostCommentForm;