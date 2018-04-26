"use strict";

var _core = require("@electron-forge/core");

var _path = _interopRequireDefault(require("path"));

var _commander = _interopRequireDefault(require("commander"));

require("./util/terminate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

_asyncToGenerator(function* () {
  let dir = process.cwd();

  _commander.default.version(require('../package.json').version).arguments('[name]').option('-t, --template [name]', 'Name of the forge template to use').option('-c, --copy-ci-files', 'Whether to copy the templated CI files (defaults to false)', false).action(name => {
    if (!name) return;

    if (_path.default.isAbsolute(name)) {
      dir = name;
    } else {
      dir = _path.default.resolve(dir, name);
    }
  }).parse(process.argv);

  const initOpts = {
    dir,
    interactive: true,
    copyCIFiles: !!_commander.default.copyCiFiles
  };
  if (_commander.default.template) initOpts.template = _commander.default.template;
  yield (0, _core.init)(initOpts);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVjdHJvbi1mb3JnZS1pbml0LmpzIl0sIm5hbWVzIjpbImRpciIsInByb2Nlc3MiLCJjd2QiLCJ2ZXJzaW9uIiwicmVxdWlyZSIsImFyZ3VtZW50cyIsIm9wdGlvbiIsImFjdGlvbiIsIm5hbWUiLCJpc0Fic29sdXRlIiwicmVzb2x2ZSIsInBhcnNlIiwiYXJndiIsImluaXRPcHRzIiwiaW50ZXJhY3RpdmUiLCJjb3B5Q0lGaWxlcyIsImNvcHlDaUZpbGVzIiwidGVtcGxhdGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLGtCQUFDLGFBQVk7QUFDWCxNQUFJQSxNQUFNQyxRQUFRQyxHQUFSLEVBQVY7O0FBQ0EscUJBQ0dDLE9BREgsQ0FDV0MsUUFBUSxpQkFBUixFQUEyQkQsT0FEdEMsRUFFR0UsU0FGSCxDQUVhLFFBRmIsRUFHR0MsTUFISCxDQUdVLHVCQUhWLEVBR21DLG1DQUhuQyxFQUlHQSxNQUpILENBSVUscUJBSlYsRUFJaUMsNERBSmpDLEVBSStGLEtBSi9GLEVBS0dDLE1BTEgsQ0FLV0MsSUFBRCxJQUFVO0FBQ2hCLFFBQUksQ0FBQ0EsSUFBTCxFQUFXOztBQUNYLFFBQUksY0FBS0MsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBSixFQUEyQjtBQUN6QlIsWUFBTVEsSUFBTjtBQUNELEtBRkQsTUFFTztBQUNMUixZQUFNLGNBQUtVLE9BQUwsQ0FBYVYsR0FBYixFQUFrQlEsSUFBbEIsQ0FBTjtBQUNEO0FBQ0YsR0FaSCxFQWFHRyxLQWJILENBYVNWLFFBQVFXLElBYmpCOztBQWVBLFFBQU1DLFdBQVc7QUFDZmIsT0FEZTtBQUVmYyxpQkFBYSxJQUZFO0FBR2ZDLGlCQUFhLENBQUMsQ0FBQyxtQkFBUUM7QUFIUixHQUFqQjtBQUtBLE1BQUksbUJBQVFDLFFBQVosRUFBc0JKLFNBQVNJLFFBQVQsR0FBb0IsbUJBQVFBLFFBQTVCO0FBRXRCLFFBQU0sZ0JBQUtKLFFBQUwsQ0FBTjtBQUNELENBekJEIiwiZmlsZSI6ImVsZWN0cm9uLWZvcmdlLWluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0IH0gZnJvbSAnQGVsZWN0cm9uLWZvcmdlL2NvcmUnO1xuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBwcm9ncmFtIGZyb20gJ2NvbW1hbmRlcic7XG5cbmltcG9ydCAnLi91dGlsL3Rlcm1pbmF0ZSc7XG5cbihhc3luYyAoKSA9PiB7XG4gIGxldCBkaXIgPSBwcm9jZXNzLmN3ZCgpO1xuICBwcm9ncmFtXG4gICAgLnZlcnNpb24ocmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbilcbiAgICAuYXJndW1lbnRzKCdbbmFtZV0nKVxuICAgIC5vcHRpb24oJy10LCAtLXRlbXBsYXRlIFtuYW1lXScsICdOYW1lIG9mIHRoZSBmb3JnZSB0ZW1wbGF0ZSB0byB1c2UnKVxuICAgIC5vcHRpb24oJy1jLCAtLWNvcHktY2ktZmlsZXMnLCAnV2hldGhlciB0byBjb3B5IHRoZSB0ZW1wbGF0ZWQgQ0kgZmlsZXMgKGRlZmF1bHRzIHRvIGZhbHNlKScsIGZhbHNlKVxuICAgIC5hY3Rpb24oKG5hbWUpID0+IHtcbiAgICAgIGlmICghbmFtZSkgcmV0dXJuO1xuICAgICAgaWYgKHBhdGguaXNBYnNvbHV0ZShuYW1lKSkge1xuICAgICAgICBkaXIgPSBuYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlyID0gcGF0aC5yZXNvbHZlKGRpciwgbmFtZSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAucGFyc2UocHJvY2Vzcy5hcmd2KTtcblxuICBjb25zdCBpbml0T3B0cyA9IHtcbiAgICBkaXIsXG4gICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgY29weUNJRmlsZXM6ICEhcHJvZ3JhbS5jb3B5Q2lGaWxlcyxcbiAgfTtcbiAgaWYgKHByb2dyYW0udGVtcGxhdGUpIGluaXRPcHRzLnRlbXBsYXRlID0gcHJvZ3JhbS50ZW1wbGF0ZTtcblxuICBhd2FpdCBpbml0KGluaXRPcHRzKTtcbn0pKCk7XG4iXX0=