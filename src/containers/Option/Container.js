import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvote, updateScore } from '../../actions';

class Container extends Component {
  componentDidMount() {
    const { socket, dispatch } = this.props;
    socket.on('updateScore', (data) => dispatch(updateScore(data)));
  }

  handleUpvote = ({ name, points }) => {
    this.props.dispatch(upvote({ name, points }))
  }

  render() {
    const { children, dispatch, score, name } = this.props;
    const points = score[name];
    return children({
      handleUpvote: this.handleUpvote,
      points,
    });
  }
}

function mapStateToProps(state) {
  return {
    socket: state.sockets.socket,
    score: state.score,
  };
}

export default connect(mapStateToProps)(Container);
