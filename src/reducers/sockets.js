import io from "socket.io-client";

const socket = io();

const initialSocketState = {
  connected: false,
  socket,
};

function sockets(state = initialSocketState, action)  {
  switch(action.type) {
    case 'CONNECT':
      return { ...state, connected: true };
    case 'DISCONNECT':
      return { ...state, connected: false };
    default:
      return state;
  }
}

export default sockets;
