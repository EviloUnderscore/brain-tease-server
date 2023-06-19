"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateQuizByIdRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../../database");
var updateQuizByIdRoute = {
  method: 'POST',
  path: '/api/quizzes/update/{id}',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var id, _req$payload, name, description, category_id, _yield$db$query, results;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _req$payload = req.payload, name = _req$payload.name, description = _req$payload.description, category_id = _req$payload.category_id;
            _context.next = 4;
            return _database.db.query("\n                UPDATE quizzes\n                    SET name=?, description=?, category_id=?\n                    WHERE id=?\n            ", [name, description, category_id, id]);
          case 4:
            _context.next = 6;
            return _database.db.query('SELECT * FROM quizzes WHERE id=?', [id]);
          case 6:
            _yield$db$query = _context.sent;
            results = _yield$db$query.results;
            return _context.abrupt("return", results[0]);
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
exports.updateQuizByIdRoute = updateQuizByIdRoute;