const path = require("path");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 8080;

// webpack config
if (process.env.NODE_ENV !== "production") {
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpack = require("webpack");
  const config = require("./webpack.config");
  const compiler = webpack(config);

  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler, { reload: true, autoConnect: true }));
}

// express routing
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

// socket.io config
io.on("connection", function(client) {
  client.on("join", function() {
    console.log("client has joined!");
  });

  client.on("upvote", function({ name, points }) {
    io.sockets.emit("updateScore", { name, points: points + 1 });
  });
});

// express server
server.listen(
  PORT,
  error =>
    error
      ? console.error(error)
      : console.info(
          `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
        )
);
