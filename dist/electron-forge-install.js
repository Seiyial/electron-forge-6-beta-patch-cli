"use strict";

var _core = require("@electron-forge/core");

var _commander = _interopRequireDefault(require("commander"));

require("./util/terminate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

_asyncToGenerator(function* () {
  let repo;

  _commander.default.version(require('../package.json').version).arguments('[repository]').option('--prerelease', 'Fetch prerelease versions').action(repository => {
    repo = repository;
  }).parse(process.argv);

  yield (0, _core.install)({
    repo,
    interactive: true,
    prerelease: _commander.default.prerelease
  });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVjdHJvbi1mb3JnZS1pbnN0YWxsLmpzIl0sIm5hbWVzIjpbInJlcG8iLCJ2ZXJzaW9uIiwicmVxdWlyZSIsImFyZ3VtZW50cyIsIm9wdGlvbiIsImFjdGlvbiIsInJlcG9zaXRvcnkiLCJwYXJzZSIsInByb2Nlc3MiLCJhcmd2IiwiaW50ZXJhY3RpdmUiLCJwcmVyZWxlYXNlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOztBQUVBOzs7Ozs7QUFFQSxrQkFBQyxhQUFZO0FBQ1gsTUFBSUEsSUFBSjs7QUFFQSxxQkFDR0MsT0FESCxDQUNXQyxRQUFRLGlCQUFSLEVBQTJCRCxPQUR0QyxFQUVHRSxTQUZILENBRWEsY0FGYixFQUdHQyxNQUhILENBR1UsY0FIVixFQUcwQiwyQkFIMUIsRUFJR0MsTUFKSCxDQUlXQyxVQUFELElBQWdCO0FBQ3RCTixXQUFPTSxVQUFQO0FBQ0QsR0FOSCxFQU9HQyxLQVBILENBT1NDLFFBQVFDLElBUGpCOztBQVNBLFFBQU0sbUJBQVE7QUFDWlQsUUFEWTtBQUVaVSxpQkFBYSxJQUZEO0FBR1pDLGdCQUFZLG1CQUFRQTtBQUhSLEdBQVIsQ0FBTjtBQUtELENBakJEIiwiZmlsZSI6ImVsZWN0cm9uLWZvcmdlLWluc3RhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbnN0YWxsIH0gZnJvbSAnQGVsZWN0cm9uLWZvcmdlL2NvcmUnO1xuXG5pbXBvcnQgcHJvZ3JhbSBmcm9tICdjb21tYW5kZXInO1xuXG5pbXBvcnQgJy4vdXRpbC90ZXJtaW5hdGUnO1xuXG4oYXN5bmMgKCkgPT4ge1xuICBsZXQgcmVwbztcblxuICBwcm9ncmFtXG4gICAgLnZlcnNpb24ocmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbilcbiAgICAuYXJndW1lbnRzKCdbcmVwb3NpdG9yeV0nKVxuICAgIC5vcHRpb24oJy0tcHJlcmVsZWFzZScsICdGZXRjaCBwcmVyZWxlYXNlIHZlcnNpb25zJylcbiAgICAuYWN0aW9uKChyZXBvc2l0b3J5KSA9PiB7XG4gICAgICByZXBvID0gcmVwb3NpdG9yeTtcbiAgICB9KVxuICAgIC5wYXJzZShwcm9jZXNzLmFyZ3YpO1xuXG4gIGF3YWl0IGluc3RhbGwoe1xuICAgIHJlcG8sXG4gICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgcHJlcmVsZWFzZTogcHJvZ3JhbS5wcmVyZWxlYXNlLFxuICB9KTtcbn0pKCk7XG4iXX0=