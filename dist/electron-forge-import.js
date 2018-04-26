"use strict";

var _core = require("@electron-forge/core");

var _path = _interopRequireDefault(require("path"));

var _commander = _interopRequireDefault(require("commander"));

require("./util/terminate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

_asyncToGenerator(function* () {
  let dir = process.cwd();

  _commander.default.version(require('../package.json').version).arguments('[name]').action(name => {
    if (!name) return;

    if (_path.default.isAbsolute(name)) {
      dir = name;
    } else {
      dir = _path.default.resolve(dir, name);
    }
  }).parse(process.argv);

  yield (0, _core.import)({
    dir,
    interactive: true
  });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVjdHJvbi1mb3JnZS1pbXBvcnQuanMiXSwibmFtZXMiOlsiZGlyIiwicHJvY2VzcyIsImN3ZCIsInZlcnNpb24iLCJyZXF1aXJlIiwiYXJndW1lbnRzIiwiYWN0aW9uIiwibmFtZSIsImlzQWJzb2x1dGUiLCJyZXNvbHZlIiwicGFyc2UiLCJhcmd2IiwiaW50ZXJhY3RpdmUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLGtCQUFDLGFBQVk7QUFDWCxNQUFJQSxNQUFNQyxRQUFRQyxHQUFSLEVBQVY7O0FBQ0EscUJBQ0dDLE9BREgsQ0FDV0MsUUFBUSxpQkFBUixFQUEyQkQsT0FEdEMsRUFFR0UsU0FGSCxDQUVhLFFBRmIsRUFHR0MsTUFISCxDQUdXQyxJQUFELElBQVU7QUFDaEIsUUFBSSxDQUFDQSxJQUFMLEVBQVc7O0FBQ1gsUUFBSSxjQUFLQyxVQUFMLENBQWdCRCxJQUFoQixDQUFKLEVBQTJCO0FBQ3pCUCxZQUFNTyxJQUFOO0FBQ0QsS0FGRCxNQUVPO0FBQ0xQLFlBQU0sY0FBS1MsT0FBTCxDQUFhVCxHQUFiLEVBQWtCTyxJQUFsQixDQUFOO0FBQ0Q7QUFDRixHQVZILEVBV0dHLEtBWEgsQ0FXU1QsUUFBUVUsSUFYakI7O0FBYUEsUUFBTSxrQkFBVTtBQUNkWCxPQURjO0FBRWRZLGlCQUFhO0FBRkMsR0FBVixDQUFOO0FBSUQsQ0FuQkQiLCJmaWxlIjoiZWxlY3Ryb24tZm9yZ2UtaW1wb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW1wb3J0IGFzIGltcG9ydEFQSSB9IGZyb20gJ0BlbGVjdHJvbi1mb3JnZS9jb3JlJztcblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcHJvZ3JhbSBmcm9tICdjb21tYW5kZXInO1xuXG5pbXBvcnQgJy4vdXRpbC90ZXJtaW5hdGUnO1xuXG4oYXN5bmMgKCkgPT4ge1xuICBsZXQgZGlyID0gcHJvY2Vzcy5jd2QoKTtcbiAgcHJvZ3JhbVxuICAgIC52ZXJzaW9uKHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24pXG4gICAgLmFyZ3VtZW50cygnW25hbWVdJylcbiAgICAuYWN0aW9uKChuYW1lKSA9PiB7XG4gICAgICBpZiAoIW5hbWUpIHJldHVybjtcbiAgICAgIGlmIChwYXRoLmlzQWJzb2x1dGUobmFtZSkpIHtcbiAgICAgICAgZGlyID0gbmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpciA9IHBhdGgucmVzb2x2ZShkaXIsIG5hbWUpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnBhcnNlKHByb2Nlc3MuYXJndik7XG5cbiAgYXdhaXQgaW1wb3J0QVBJKHtcbiAgICBkaXIsXG4gICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gIH0pO1xufSkoKTtcbiJdfQ==