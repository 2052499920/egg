/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1613985926889_7174';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: false
  }

  // 链接数据库
  config.mongoose = {
    url: 'mongodb://localhost:27017/shop'
  }
// 跨域
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
    origin: '*',  // 允许的请求来源（* 表示允许所有的IP的请求 ）
  }
  config.jwt = {
    secret: "username"
  }
//   config.session={
//     key:'SESSION_ID',
//     maxAge:864000,
//     httpOnly: true,
//     encrypt: true,
//     renew: true //延长会话有效期
// }

  return {
    ...config,
    ...userConfig,
  };
};
