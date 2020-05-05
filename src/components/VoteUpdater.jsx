import React, { Component } from 'react';
import * as api from '../utils/api'

class VoteUpdater extends Component {
  state = { voteDifference: 0, voted: false }

  updateVote(voteChange) {
    this.setState(currState => {
      return { voteDifference: currState.voteDifference + voteChange, voted: true }
    })

    const { dir, id } = this.props;
    api.updateVoteByDir(dir, id, voteChange).catch(() => {
      this.setState(currState => {
        return { voteDifference: currState.voteDifference - voteChange }
      })
    })
  }

  render() {
    const { votes } = this.props;
    const { voteDifference } = this.state;
    return (
      <React.Fragment>
        <span className="votes"><i className="icon fas fa-vote-yea"></i> {`${votes + voteDifference} votes`}</span>

        <button type="button" className="btn btn-light px-1" onClick={() => { this.updateVote(1) }} disabled={voteDifference === 1}>
          <i className="icon far fa-thumbs-up"></i>
        </button>
        <button type="button" className="btn btn-light px-0" onClick={() => { this.updateVote(-1) }} disabled={voteDifference === -1}>
          <i className="icon far fa-thumbs-down"></i>
        </button>
      </React.Fragment>
    );
  }
}

export default VoteUpdater;