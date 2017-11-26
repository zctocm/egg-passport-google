'use strict';

const debug = require('debug')('egg-passport-google');
const assert = require('assert');
const Strategy = require('passport-google-oauth20').Strategy;

module.exports = app => {
  const config = app.config.passportGoogle;
  config.passReqToCallback = true;
  assert(config.key, '[egg-passport-google] config.passportGoogle.key required');
  assert(config.secret, '[egg-passport-google] config.passportGoogle.secret required');
  config.clientID = config.key;
  config.clientSecret = config.secret;

  // must require `req` params
  app.passport.use('google', new Strategy(config, (req, accessToken, refreshToken, params, profile, done) => {
    // format user
    const user = {
      provider: 'google',
      id: profile.id,
      email: profile.emails && profile.emails[0] && profile.emails[0].value,
      givenName: profile.name.givenName,
      familyName: profile.name.familyName,
      displayName: profile.displayName,
      photo: profile.photos && profile.photos[0] && profile.photos[0].value,
      accessToken,
      refreshToken,
      params,
      profile,
    };
    debug('%s %s get user: %j', req.method, req.url, user);

    // let passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }));
};
