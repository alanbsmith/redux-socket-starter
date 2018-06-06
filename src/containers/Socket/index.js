import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { connectSocket, disconnectSocket } from '../../actions';

class Socket extends Component {

  componentWillMount() {
    this.props.dispatch(connectSocket());
  }

  componentWillUnmount() {
    this.props.dispatch(disconnectSocket());
  }

  render() {
    const { children, connected, socket } = this.props;
    return children({ connected });
  }
}

function mapStateToProps(state) {
  return {
    connected: state.sockets.connected,
    socket: state.sockets.socket,
  };
}

export default connect(mapStateToProps)(Socket);
