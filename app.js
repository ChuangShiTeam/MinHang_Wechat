const io = require("./util/socket.io.js");
const constant = require("./util/constant.js");
const wechat = require("./util/wechat.js");

App({
  onLaunch: function () {
    const socket = io("ws://api.nowui.com:2998");

    socket.on('connect', function (response) {
      socket.emit('login', {
        id: 'wechat'
      }, function (response) {
        console.log(response);
      });
    });

    socket.on('receiveMessage', function (message) {
      console.log(message);
    });
  },
  globalData: {
    userInfo: null
  }
})