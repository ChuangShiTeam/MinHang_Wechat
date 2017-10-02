const constant = require("../../util/constant.js");
const storage = require("../../util/storage.js");
const http = require("../../util/http.js");
const wechat = require("../../util/wechat.js");

Page({
    data: {
        is_load: false,
    },
    onUnload: function () {

    },
    onLoad: function () {
        this.handleLoad();
    },
    onReady: function () {

    },
    onShow: function () {
        this.handleLoad();
    },
    onHide: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },
    handleLoad: function () {
        
    }
});
