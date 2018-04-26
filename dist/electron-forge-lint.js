"use strict";

var _core = require("@electron-forge/core");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _commander = _interopRequireDefault(require("commander"));

require("./util/terminate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

_asyncToGenerator(function* () {
  let dir = process.cwd();

  _commander.default.version(require('../package.json').version).arguments('[cwd]').action(cwd => {
    if (!cwd) return;

    if (_path.default.isAbsolute(cwd) && _fs.default.existsSync(cwd)) {
      dir = cwd;
    } else if (_fs.default.existsSync(_path.default.resolve(dir, cwd))) {
      dir = _path.default.resolve(dir, cwd);
    }
  }).parse(process.argv);

  yield (0, _core.lint)({
    dir,
    interactive: true
  });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVjdHJvbi1mb3JnZS1saW50LmpzIl0sIm5hbWVzIjpbImRpciIsInByb2Nlc3MiLCJjd2QiLCJ2ZXJzaW9uIiwicmVxdWlyZSIsImFyZ3VtZW50cyIsImFjdGlvbiIsImlzQWJzb2x1dGUiLCJleGlzdHNTeW5jIiwicmVzb2x2ZSIsInBhcnNlIiwiYXJndiIsImludGVyYWN0aXZlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7QUFFQSxrQkFBQyxhQUFZO0FBQ1gsTUFBSUEsTUFBTUMsUUFBUUMsR0FBUixFQUFWOztBQUNBLHFCQUNHQyxPQURILENBQ1dDLFFBQVEsaUJBQVIsRUFBMkJELE9BRHRDLEVBRUdFLFNBRkgsQ0FFYSxPQUZiLEVBR0dDLE1BSEgsQ0FHV0osR0FBRCxJQUFTO0FBQ2YsUUFBSSxDQUFDQSxHQUFMLEVBQVU7O0FBQ1YsUUFBSSxjQUFLSyxVQUFMLENBQWdCTCxHQUFoQixLQUF3QixZQUFHTSxVQUFILENBQWNOLEdBQWQsQ0FBNUIsRUFBZ0Q7QUFDOUNGLFlBQU1FLEdBQU47QUFDRCxLQUZELE1BRU8sSUFBSSxZQUFHTSxVQUFILENBQWMsY0FBS0MsT0FBTCxDQUFhVCxHQUFiLEVBQWtCRSxHQUFsQixDQUFkLENBQUosRUFBMkM7QUFDaERGLFlBQU0sY0FBS1MsT0FBTCxDQUFhVCxHQUFiLEVBQWtCRSxHQUFsQixDQUFOO0FBQ0Q7QUFDRixHQVZILEVBV0dRLEtBWEgsQ0FXU1QsUUFBUVUsSUFYakI7O0FBYUEsUUFBTSxnQkFBSztBQUNUWCxPQURTO0FBRVRZLGlCQUFhO0FBRkosR0FBTCxDQUFOO0FBSUQsQ0FuQkQiLCJmaWxlIjoiZWxlY3Ryb24tZm9yZ2UtbGludC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpbnQgfSBmcm9tICdAZWxlY3Ryb24tZm9yZ2UvY29yZSc7XG5cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBwcm9ncmFtIGZyb20gJ2NvbW1hbmRlcic7XG5cbmltcG9ydCAnLi91dGlsL3Rlcm1pbmF0ZSc7XG5cbihhc3luYyAoKSA9PiB7XG4gIGxldCBkaXIgPSBwcm9jZXNzLmN3ZCgpO1xuICBwcm9ncmFtXG4gICAgLnZlcnNpb24ocmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbilcbiAgICAuYXJndW1lbnRzKCdbY3dkXScpXG4gICAgLmFjdGlvbigoY3dkKSA9PiB7XG4gICAgICBpZiAoIWN3ZCkgcmV0dXJuO1xuICAgICAgaWYgKHBhdGguaXNBYnNvbHV0ZShjd2QpICYmIGZzLmV4aXN0c1N5bmMoY3dkKSkge1xuICAgICAgICBkaXIgPSBjd2Q7XG4gICAgICB9IGVsc2UgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5yZXNvbHZlKGRpciwgY3dkKSkpIHtcbiAgICAgICAgZGlyID0gcGF0aC5yZXNvbHZlKGRpciwgY3dkKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5wYXJzZShwcm9jZXNzLmFyZ3YpO1xuXG4gIGF3YWl0IGxpbnQoe1xuICAgIGRpcixcbiAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgfSk7XG59KSgpO1xuIl19