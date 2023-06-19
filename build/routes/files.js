"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticFilesRoute = exports.filesRoutes = void 0;
var angularRoutePaths = ['/', '/home', '/my-quizzes', '/my-quizzes/create', '/my-quizzes/edit/{id}', '/play/{id}'];
var filesRoutes = angularRoutePaths.map(function (path) {
  return {
    method: 'GET',
    path: path,
    handler: function handler(req, h) {
      return h.file('dist/tfe/index.html');
    }
  };
});
exports.filesRoutes = filesRoutes;
var staticFilesRoute = {
  method: "GET",
  path: "/{params*}",
  handler: {
    directory: {
      path: 'dist/tfe'
    }
  }
};
exports.staticFilesRoute = staticFilesRoute;