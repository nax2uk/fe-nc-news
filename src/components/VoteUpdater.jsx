import React, { Component } from 'react';
import * as api from '../utils/api'

class VoteUpdater extends Component {
  state = { voteDifference: 0 }

  updateVote(voteChange) {
    this.setState(currState => {
      return { voteDifference: currState.voteDifference + voteChange }
    })

    const { article_id } = this.props.article;
    api.updateArticleVotes(article_id, voteChange).catch(() => {
      this.setState(currState => {
        return { voteDifference: currState.voteDifference - voteChange }
      })
    })
  }

  render() {
    const { votes } = this.props.article;
    const { voteDifference } = this.state;
    return (
      <React.Fragment>
        <span className="votes"><i className="icon fas fa-vote-yea"></i> {`${votes + voteDifference} votes`}</span>

        <button type="button" className="btn btn-light px-1" onClick={() => { this.updateVote(1) }}>
          <i className="icon far fa-thumbs-up"></i>
        </button>
        <button type="button" className="btn btn-light px-0" onClick={() => { this.updateVote(-1) }}>
          <i className="icon far fa-thumbs-down"></i>
        </button>
      </React.Fragment>
    );
  }
}

export default VoteUpdater;