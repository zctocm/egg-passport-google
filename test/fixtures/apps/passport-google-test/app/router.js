'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.passportGoogle.name;
  });

  const googleAuth = app.passport.authenticate('google', { scope: ['profile'] })
  app.get('/passport/google', googleAuth);
  app.get('/passport/google/callback', googleAuth)
};
