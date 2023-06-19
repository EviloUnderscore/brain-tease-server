"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createQuizRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _uuid = require("uuid");
var _database = require("../../database");
var admin = _interopRequireWildcard(require("firebase-admin"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var createQuizRoute = {
  method: 'POST',
  path: '/api/quizzes/create',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var id, _req$payload, _req$payload$name, name, _req$payload$descript, description, _req$payload$category, category_id, token, user, user_id, authorName, createDate;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            id = (0, _uuid.v4)();
            _req$payload = req.payload, _req$payload$name = _req$payload.name, name = _req$payload$name === void 0 ? '' : _req$payload$name, _req$payload$descript = _req$payload.description, description = _req$payload$descript === void 0 ? '' : _req$payload$descript, _req$payload$category = _req$payload.category_id, category_id = _req$payload$category === void 0 ? '' : _req$payload$category;
            token = req.headers.authtoken;
            _context.next = 5;
            return admin.auth().verifyIdToken(token);
          case 5:
            user = _context.sent;
            user_id = user.user_id;
            authorName = user.name;
            createDate = new Date();
            _context.next = 11;
            return _database.db.query("\n                INSERT INTO quizzes (id, name, description, category_id, user_id, authorName, created_at)\n                VALUES (?, ?, ?, ?, ?, ?, ?)\n            ", [id, name, description, category_id, user_id, authorName, createDate]);
          case 11:
            return _context.abrupt("return", {
              id: id,
              name: name,
              description: description,
              category_id: category_id,
              user_id: user_id,
              authorName: authorName
            });
          case 12:
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
exports.createQuizRoute = createQuizRoute;