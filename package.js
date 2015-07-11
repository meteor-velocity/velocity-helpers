'use strict';

Package.describe({
  name: 'velocity:helpers',
  summary: 'Testing helpers for Meteor apps',
  version: '0.1.0',
  git: 'https://github.com/meteor-velocity/velocity-helpers.git',
  debugOnly: true
});

Package.onUse(function (api) {

  api.versionsFrom('METEOR@1.1.0.2');

  api.use('underscore');
  api.use('grigio:babel@0.1.4');


});

Package.onTest(function(api) {
  api.use('sanjo:jasmine@0.14.0');
  api.use('velocity:helpers');


});
