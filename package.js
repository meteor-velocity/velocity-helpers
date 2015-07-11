Package.describe({
  name: 'velocity:helpers',
  summary: 'Testing helpers for Meteor apps',
  version: '0.1.0',
  git: 'https://github.com/meteor-velocity/velocity-helpers.git',
  debugOnly: true
})

Package.onUse(function (api) {

  api.export('VelocityHelpers')

  api.versionsFrom('METEOR@1.1.0.2')

  api.use('underscore')
  api.use('grigio:babel@0.1.4')

  api.addFiles([
    'lib/export.es6',

    'lib/getMethods.es6',
    'lib/spyOnMethod.es6'
  ])
})

Package.onTest(function(api) {
  api.use('grigio:babel@0.1.4')
  api.use('sanjo:jasmine@0.14.0')
  api.use('velocity:helpers')

  api.addFiles([
    'specs/helpers/methods.es6',

    'specs/getMethodsSpec.es6',
    'specs/spyOnMethodSpec.es6'
  ])
})