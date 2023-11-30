function info(...params) {
   return console.log(...params);
};

function error(...params) {
   return console.info(...params);
};

module.exports = {
 info, error
}
