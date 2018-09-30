App({

  /**
   * 
   * @param {String} path 打开小程序路径
   * @param {Object} query 打开小程序的query
   * @param {Number} scene 打开时场景值，主要应对，从不同场景下进入小程序，处理对应的事件，比如扫码，比如买单，比如关注等等，
   * @param {Object} referrerInfo 另一个小程序或公众号打开时
   * @param {String} referrerInfo.appId 来源的appId
   * @param {Object} referrerInfo.extraData 来源携带的payload scene=1037/1038
   * https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html
   */
  onlaunch ({ path, query, scene, shareTicket, referrerInfo}) {
    // 初始化
  },
  onShow() {
    // 启动，或从后台进入前台
  },
  onHide() {
    // 前台都后台
  },
  onError() {
    // 脚本错误，api调用失败时触发
  },

  onPageNotFound({ path, query, isEntryPage }) {
    // 打开不存在页面时，可以做重定向，但必须同步处理
  },
  // 其他属性可以通过this访问
  aaa: {},
  bbb: {}
})