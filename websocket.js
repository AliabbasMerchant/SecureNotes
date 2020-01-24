IO = null;

function init(io) {
    IO = io;
    io.on('connection', (socket) => {
        
    });
}

module.exports = {
    init,
};
