const socketMiddleware = store => next => action => {
  const { socket } = store.getState().sockets;
  const { data, type } = action;

  if (type === 'CONNECT') {
    socket.connect();
    socket.emit('join');
  }

  if (type === 'UPVOTE') {
    socket.emit('upvote', data);
    // you could set some loading or requesting state here
    // to wait until the socket response returns
  }

  return next(action);
}

export default socketMiddleware;
