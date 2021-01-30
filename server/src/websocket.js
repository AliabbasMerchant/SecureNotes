IO = null;

function init(io) {
  IO = io;
  io.on("connection", (socket) => {
    // TODO: Sockets part here
  });
}

export default init;
