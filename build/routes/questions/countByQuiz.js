"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countByQuizRoutes = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../../database");
var countByQuizRoutes = {
  method: "GET",
  path: "/api/questions/count",
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var query, _yield$db$query, results, counts;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            query = "\n                SELECT qz.id, COUNT(*) AS question_count\n                FROM quizzes qz\n                JOIN questions qs ON qz.id = qs.quiz_id\n                GROUP BY qz.id;\n            ";
            _context.next = 4;
            return _database.db.query(query);
          case 4:
            _yield$db$query = _context.sent;
            results = _yield$db$query.results;
            counts = results.map(function (row) {
              return {
                id: row.id,
                question_count: row.question_count
              };
            });
            return _context.abrupt("return", counts);
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            return _context.abrupt("return", h.response("Error occurred").code(500));
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }
    return handler;
  }()
};
exports.countByQuizRoutes = countByQuizRoutes;