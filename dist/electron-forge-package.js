"use strict";

var _core = require("@electron-forge/core");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _commander = _interopRequireDefault(require("commander"));

require("./util/terminate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

_asyncToGenerator(function* () {
  let dir = process.cwd();

  _commander.default.version(require('../package.json').version).arguments('[cwd]').option('-a, --arch [arch]', 'Target architecture').option('-p, --platform [platform]', 'Target build platform').action(cwd => {
    if (!cwd) return;

    if (_path.default.isAbsolute(cwd) && _fsExtra.default.existsSync(cwd)) {
      dir = cwd;
    } else if (_fsExtra.default.existsSync(_path.default.resolve(dir, cwd))) {
      dir = _path.default.resolve(dir, cwd);
    }
  }).parse(process.argv);

  const packageOpts = {
    dir,
    interactive: true
  };
  if (_commander.default.arch) packageOpts.arch = _commander.default.arch;
  if (_commander.default.platform) packageOpts.platform = _commander.default.platform;
  yield (0, _core.package)(packageOpts);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVjdHJvbi1mb3JnZS1wYWNrYWdlLmpzIl0sIm5hbWVzIjpbImRpciIsInByb2Nlc3MiLCJjd2QiLCJ2ZXJzaW9uIiwicmVxdWlyZSIsImFyZ3VtZW50cyIsIm9wdGlvbiIsImFjdGlvbiIsImlzQWJzb2x1dGUiLCJleGlzdHNTeW5jIiwicmVzb2x2ZSIsInBhcnNlIiwiYXJndiIsInBhY2thZ2VPcHRzIiwiaW50ZXJhY3RpdmUiLCJhcmNoIiwicGxhdGZvcm0iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLGtCQUFDLGFBQVk7QUFDWCxNQUFJQSxNQUFNQyxRQUFRQyxHQUFSLEVBQVY7O0FBRUEscUJBQ0dDLE9BREgsQ0FDV0MsUUFBUSxpQkFBUixFQUEyQkQsT0FEdEMsRUFFR0UsU0FGSCxDQUVhLE9BRmIsRUFHR0MsTUFISCxDQUdVLG1CQUhWLEVBRytCLHFCQUgvQixFQUlHQSxNQUpILENBSVUsMkJBSlYsRUFJdUMsdUJBSnZDLEVBS0dDLE1BTEgsQ0FLV0wsR0FBRCxJQUFTO0FBQ2YsUUFBSSxDQUFDQSxHQUFMLEVBQVU7O0FBQ1YsUUFBSSxjQUFLTSxVQUFMLENBQWdCTixHQUFoQixLQUF3QixpQkFBR08sVUFBSCxDQUFjUCxHQUFkLENBQTVCLEVBQWdEO0FBQzlDRixZQUFNRSxHQUFOO0FBQ0QsS0FGRCxNQUVPLElBQUksaUJBQUdPLFVBQUgsQ0FBYyxjQUFLQyxPQUFMLENBQWFWLEdBQWIsRUFBa0JFLEdBQWxCLENBQWQsQ0FBSixFQUEyQztBQUNoREYsWUFBTSxjQUFLVSxPQUFMLENBQWFWLEdBQWIsRUFBa0JFLEdBQWxCLENBQU47QUFDRDtBQUNGLEdBWkgsRUFhR1MsS0FiSCxDQWFTVixRQUFRVyxJQWJqQjs7QUFlQSxRQUFNQyxjQUFjO0FBQ2xCYixPQURrQjtBQUVsQmMsaUJBQWE7QUFGSyxHQUFwQjtBQUlBLE1BQUksbUJBQVFDLElBQVosRUFBa0JGLFlBQVlFLElBQVosR0FBbUIsbUJBQVFBLElBQTNCO0FBQ2xCLE1BQUksbUJBQVFDLFFBQVosRUFBc0JILFlBQVlHLFFBQVosR0FBdUIsbUJBQVFBLFFBQS9CO0FBRXRCLFFBQU0sbUJBQVdILFdBQVgsQ0FBTjtBQUNELENBMUJEIiwiZmlsZSI6ImVsZWN0cm9uLWZvcmdlLXBhY2thZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYWNrYWdlIGFzIHBhY2thZ2VBUEkgfSBmcm9tICdAZWxlY3Ryb24tZm9yZ2UvY29yZSc7XG5cbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBwcm9ncmFtIGZyb20gJ2NvbW1hbmRlcic7XG5cbmltcG9ydCAnLi91dGlsL3Rlcm1pbmF0ZSc7XG5cbihhc3luYyAoKSA9PiB7XG4gIGxldCBkaXIgPSBwcm9jZXNzLmN3ZCgpO1xuXG4gIHByb2dyYW1cbiAgICAudmVyc2lvbihyZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uKVxuICAgIC5hcmd1bWVudHMoJ1tjd2RdJylcbiAgICAub3B0aW9uKCctYSwgLS1hcmNoIFthcmNoXScsICdUYXJnZXQgYXJjaGl0ZWN0dXJlJylcbiAgICAub3B0aW9uKCctcCwgLS1wbGF0Zm9ybSBbcGxhdGZvcm1dJywgJ1RhcmdldCBidWlsZCBwbGF0Zm9ybScpXG4gICAgLmFjdGlvbigoY3dkKSA9PiB7XG4gICAgICBpZiAoIWN3ZCkgcmV0dXJuO1xuICAgICAgaWYgKHBhdGguaXNBYnNvbHV0ZShjd2QpICYmIGZzLmV4aXN0c1N5bmMoY3dkKSkge1xuICAgICAgICBkaXIgPSBjd2Q7XG4gICAgICB9IGVsc2UgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5yZXNvbHZlKGRpciwgY3dkKSkpIHtcbiAgICAgICAgZGlyID0gcGF0aC5yZXNvbHZlKGRpciwgY3dkKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5wYXJzZShwcm9jZXNzLmFyZ3YpO1xuXG4gIGNvbnN0IHBhY2thZ2VPcHRzID0ge1xuICAgIGRpcixcbiAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgfTtcbiAgaWYgKHByb2dyYW0uYXJjaCkgcGFja2FnZU9wdHMuYXJjaCA9IHByb2dyYW0uYXJjaDtcbiAgaWYgKHByb2dyYW0ucGxhdGZvcm0pIHBhY2thZ2VPcHRzLnBsYXRmb3JtID0gcHJvZ3JhbS5wbGF0Zm9ybTtcblxuICBhd2FpdCBwYWNrYWdlQVBJKHBhY2thZ2VPcHRzKTtcbn0pKCk7XG4iXX0=