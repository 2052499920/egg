'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,middleware } = app;   
  // router.get('/', controller.home.index);
  router.post('/login',controller.user.login )
  router.get('/auth',controller.util.getcode )  //发送验证码

  router.post('/sing',controller.user.sing)
  router.delete('/del',controller.user.del)
  router.get('/carousel',middleware.jwt(app.config.jwt),controller.home.carousel)
  // router.put('/user/put',controller.user.put)
  //后台
  router.post('/logina',controller.rear.login)
  router.post('/singa',controller.rear.sing)
};
