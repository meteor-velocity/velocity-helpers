Package.describe({
  name: 'velocity:helpers',
  summary: 'Testing helpers for Meteor apps',
  version: '0.3.0',
  git: 'https://github.com/meteor-velocity/velocity-helpers.git',
  debugOnly: true
})

Package.onUse(function (api) {

  api.export('VelocityHelpers')

  api.versionsFrom('METEOR@1.1.0.2')

  api.use('underscore')
  api.use('jquery')
  api.use('ecmascript')

  api.addFiles([
    'lib/export.js',

    'lib/exportGlobals.js',
    'lib/getElement.js',
    'lib/getMethod.js',
    'lib/getMethods.js',
    'lib/spyOnMethod.js',
    'lib/waitFor.js'
  ])
})

Package.onTest(function(api) {
  api.use('underscore')
  api.use('ecmascript')
  api.use('sanjo:jasmine@0.16.4')
  api.use('velocity:helpers')

  api.addFiles([
    'specs/helpers/exportGlobals.js',
    'specs/helpers/methods.js',

    'specs/getElementSpec.js',
    'specs/getMethodSpec.js',
    'specs/getMethodsSpec.js',
    'specs/spyOnMethodSpec.js',
    'specs/waitForSpec.js'
  ])
})
