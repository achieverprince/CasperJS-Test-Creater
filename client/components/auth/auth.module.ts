'use strict';

angular.module('casperJsTestCreatorApp.auth', [
  'casperJsTestCreatorApp.constants',
  'casperJsTestCreatorApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
