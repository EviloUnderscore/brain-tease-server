"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _getAllCategories = require("./categories/getAllCategories");
var _getCategoryById = require("./categories/getCategoryById");
var _files = require("./files");
var _createHistory = require("./histories/createHistory");
var _deleteHistoriesByQuizId = require("./histories/deleteHistoriesByQuizId");
var _getAllHistories = require("./histories/getAllHistories");
var _getHistoriesByUser = require("./histories/getHistoriesByUser");
var _countByQuiz = require("./questions/countByQuiz");
var _createQuestion = require("./questions/createQuestion");
var _deleteByQuizId = require("./questions/deleteByQuizId");
var _deleteQuestionById = require("./questions/deleteQuestionById");
var _getQuestionsByQuizId = require("./questions/getQuestionsByQuizId");
var _updateQuestion = require("./questions/updateQuestion");
var _createQuiz = require("./quizzes/createQuiz");
var _deleteQuizById = require("./quizzes/deleteQuizById");
var _getAllQuizzes = require("./quizzes/getAllQuizzes");
var _getQuizById = require("./quizzes/getQuizById");
var _getQuizzesByUser = require("./quizzes/getQuizzesByUser");
var _updateQuizById = require("./quizzes/updateQuizById");
var _getAllUsers = require("./users/getAllUsers");
var _getUserById = require("./users/getUserById");
var _default = [_createQuiz.createQuizRoute, _deleteQuizById.deleteQuizByIdRoute, _getAllQuizzes.getAllQuizzesRoutes, _getQuizById.getQuizByIdRoute, _updateQuizById.updateQuizByIdRoute, _getAllUsers.getAllUsersRoutes, _getUserById.getUserByIdRoutes, _getAllCategories.getAllCategoriesRoutes, _getCategoryById.getCategoryByIdRoutes, _countByQuiz.countByQuizRoutes, _deleteByQuizId.deleteByQuizIdRoute, _getQuizzesByUser.getQuizzesByUserRoutes, _getQuestionsByQuizId.getQuestionsByQuizIdRoute, _createQuestion.createQuestionRoute, _updateQuestion.updateQuestionByIdRoute, _deleteQuestionById.deleteQuestionByIdRoute, _createHistory.createHistoryRoute, _getAllHistories.getAllHistoriesRoutes, _getHistoriesByUser.getHistoriesByUserRoutes, _deleteHistoriesByQuizId.deleteHistoriesByQuizIdRoute, _files.staticFilesRoute].concat((0, _toConsumableArray2["default"])(_files.filesRoutes));
exports["default"] = _default;