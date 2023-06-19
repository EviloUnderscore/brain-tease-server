"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuizByIdRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
var _database = require("../../database");
var getQuizByIdRoute = {
  method: "GET",
  path: "/api/quizzes/{id}",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var id, _yield$db$query, results, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return _database.db.query('SELECT * FROM quizzes WHERE id=?', [id]);
          case 3:
            _yield$db$query = _context.sent;
            results = _yield$db$query.results;
            data = results[0];
            if (data) {
              _context.next = 8;
              break;
            }
            throw _boom["default"].notFound("Quiz doesn't exist with id ".concat(id));
          case 8:
            return _context.abrupt("return", data);
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};
exports.getQuizByIdRoute = getQuizByIdRoute;