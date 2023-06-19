"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createQuestionRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _uuid = require("uuid");
var _database = require("../../database");
var createQuestionRoute = {
  method: 'POST',
  path: '/api/question/create',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var id, _req$payload, _req$payload$quiz_id, quiz_id, _req$payload$question, question, _req$payload$answer, answer, _req$payload$category, category, _req$payload$type_id, type_id, _req$payload$fake_ans, fake_answer_1, _req$payload$fake_ans2, fake_answer_2, _req$payload$fake_ans3, fake_answer_3;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            id = (0, _uuid.v4)();
            _req$payload = req.payload, _req$payload$quiz_id = _req$payload.quiz_id, quiz_id = _req$payload$quiz_id === void 0 ? '' : _req$payload$quiz_id, _req$payload$question = _req$payload.question, question = _req$payload$question === void 0 ? '' : _req$payload$question, _req$payload$answer = _req$payload.answer, answer = _req$payload$answer === void 0 ? '' : _req$payload$answer, _req$payload$category = _req$payload.category, category = _req$payload$category === void 0 ? '' : _req$payload$category, _req$payload$type_id = _req$payload.type_id, type_id = _req$payload$type_id === void 0 ? '' : _req$payload$type_id, _req$payload$fake_ans = _req$payload.fake_answer_1, fake_answer_1 = _req$payload$fake_ans === void 0 ? '' : _req$payload$fake_ans, _req$payload$fake_ans2 = _req$payload.fake_answer_2, fake_answer_2 = _req$payload$fake_ans2 === void 0 ? '' : _req$payload$fake_ans2, _req$payload$fake_ans3 = _req$payload.fake_answer_3, fake_answer_3 = _req$payload$fake_ans3 === void 0 ? '' : _req$payload$fake_ans3;
            _context.next = 4;
            return _database.db.query("\n                INSERT INTO questions (id, question, answer, category, quiz_id, type_id, fake_answer_1, fake_answer_2, fake_answer_3)\n                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)\n            ", [id, question, answer, category, quiz_id, type_id, fake_answer_1, fake_answer_2, fake_answer_3]);
          case 4:
            return _context.abrupt("return", {
              id: id,
              question: question,
              answer: answer,
              category: category,
              quiz_id: quiz_id,
              type_id: type_id,
              fake_answer_1: fake_answer_1,
              fake_answer_2: fake_answer_2,
              fake_answer_3: fake_answer_3
            });
          case 5:
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
exports.createQuestionRoute = createQuestionRoute;