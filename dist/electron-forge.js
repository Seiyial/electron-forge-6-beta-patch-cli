#!/usr/bin/env node
"use strict";

require("colors");

var _asyncOra = require("@electron-forge/async-ora");

var _commander = _interopRequireDefault(require("commander"));

require("./util/terminate");

var _checkSystem = _interopRequireDefault(require("./util/check-system"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

const originalSC = _commander.default.executeSubCommand.bind(_commander.default);

_commander.default.executeSubCommand = (argv, args, unknown) => {
  let indexOfDoubleDash = process.argv.indexOf('--');
  indexOfDoubleDash = indexOfDoubleDash < 0 ? process.argv.length + 1 : indexOfDoubleDash;
  const passThroughArgs = args.filter(arg => process.argv.indexOf(arg) > indexOfDoubleDash);
  const normalArgs = args.filter(arg => process.argv.indexOf(arg) <= indexOfDoubleDash);
  let newArgs = args;
  let newUnknown = unknown;

  if (passThroughArgs.length > 0) {
    newArgs = normalArgs.concat(unknown).concat('--').concat(passThroughArgs);
    newUnknown = [];
  }

  return originalSC(argv, newArgs, newUnknown);
};

_commander.default.version(require('../package.json').version).option('--verbose', 'Enables verbose mode').command('init', 'Initialize a new Electron application').command('import', 'Attempts to navigate you through the process of importing an existing project to "electron-forge"').command('lint', 'Lints the current Electron application').command('package', 'Package the current Electron application').command('make', 'Generate distributables for the current Electron application').command('start', 'Start the current Electron application').command('publish', 'Publish the current Electron application to GitHub').command('install', 'Install an Electron application from GitHub');

_asyncToGenerator(function* () {
  let goodSystem;
  yield (0, _asyncOra.asyncOra)('Checking your system',
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(function* (ora) {
      goodSystem = yield (0, _checkSystem.default)(ora);
    });

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());

  if (!goodSystem) {
    console.error(('It looks like you are missing some dependencies you need to get Electron running.\n' + 'Make sure you have git installed and Node.js version 6.0.0+').red);
    process.exit(1);
  }

  _commander.default.parse(process.argv);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVjdHJvbi1mb3JnZS5qcyJdLCJuYW1lcyI6WyJvcmlnaW5hbFNDIiwiZXhlY3V0ZVN1YkNvbW1hbmQiLCJiaW5kIiwiYXJndiIsImFyZ3MiLCJ1bmtub3duIiwiaW5kZXhPZkRvdWJsZURhc2giLCJwcm9jZXNzIiwiaW5kZXhPZiIsImxlbmd0aCIsInBhc3NUaHJvdWdoQXJncyIsImZpbHRlciIsImFyZyIsIm5vcm1hbEFyZ3MiLCJuZXdBcmdzIiwibmV3VW5rbm93biIsImNvbmNhdCIsInZlcnNpb24iLCJyZXF1aXJlIiwib3B0aW9uIiwiY29tbWFuZCIsImdvb2RTeXN0ZW0iLCJvcmEiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWQiLCJleGl0IiwicGFyc2UiXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7OztBQUVBLE1BQU1BLGFBQWEsbUJBQVFDLGlCQUFSLENBQTBCQyxJQUExQixvQkFBbkI7O0FBQ0EsbUJBQVFELGlCQUFSLEdBQTRCLENBQUNFLElBQUQsRUFBT0MsSUFBUCxFQUFhQyxPQUFiLEtBQXlCO0FBQ25ELE1BQUlDLG9CQUFvQkMsUUFBUUosSUFBUixDQUFhSyxPQUFiLENBQXFCLElBQXJCLENBQXhCO0FBQ0FGLHNCQUFvQkEsb0JBQW9CLENBQXBCLEdBQXdCQyxRQUFRSixJQUFSLENBQWFNLE1BQWIsR0FBc0IsQ0FBOUMsR0FBa0RILGlCQUF0RTtBQUVBLFFBQU1JLGtCQUFrQk4sS0FBS08sTUFBTCxDQUFZQyxPQUFPTCxRQUFRSixJQUFSLENBQWFLLE9BQWIsQ0FBcUJJLEdBQXJCLElBQTRCTixpQkFBL0MsQ0FBeEI7QUFDQSxRQUFNTyxhQUFhVCxLQUFLTyxNQUFMLENBQVlDLE9BQU9MLFFBQVFKLElBQVIsQ0FBYUssT0FBYixDQUFxQkksR0FBckIsS0FBNkJOLGlCQUFoRCxDQUFuQjtBQUVBLE1BQUlRLFVBQVVWLElBQWQ7QUFDQSxNQUFJVyxhQUFhVixPQUFqQjs7QUFDQSxNQUFJSyxnQkFBZ0JELE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQzlCSyxjQUFVRCxXQUFXRyxNQUFYLENBQWtCWCxPQUFsQixFQUEyQlcsTUFBM0IsQ0FBa0MsSUFBbEMsRUFBd0NBLE1BQXhDLENBQStDTixlQUEvQyxDQUFWO0FBQ0FLLGlCQUFhLEVBQWI7QUFDRDs7QUFDRCxTQUFPZixXQUFXRyxJQUFYLEVBQWlCVyxPQUFqQixFQUEwQkMsVUFBMUIsQ0FBUDtBQUNELENBZEQ7O0FBZ0JBLG1CQUNHRSxPQURILENBQ1dDLFFBQVEsaUJBQVIsRUFBMkJELE9BRHRDLEVBRUdFLE1BRkgsQ0FFVSxXQUZWLEVBRXVCLHNCQUZ2QixFQUdHQyxPQUhILENBR1csTUFIWCxFQUdtQix1Q0FIbkIsRUFJR0EsT0FKSCxDQUlXLFFBSlgsRUFJcUIsbUdBSnJCLEVBS0dBLE9BTEgsQ0FLVyxNQUxYLEVBS21CLHdDQUxuQixFQU1HQSxPQU5ILENBTVcsU0FOWCxFQU1zQiwwQ0FOdEIsRUFPR0EsT0FQSCxDQU9XLE1BUFgsRUFPbUIsOERBUG5CLEVBUUdBLE9BUkgsQ0FRVyxPQVJYLEVBUW9CLHdDQVJwQixFQVNHQSxPQVRILENBU1csU0FUWCxFQVNzQixvREFUdEIsRUFVR0EsT0FWSCxDQVVXLFNBVlgsRUFVc0IsNkNBVnRCOztBQVlBLGtCQUFDLGFBQVk7QUFDWCxNQUFJQyxVQUFKO0FBQ0EsUUFBTSx3QkFBUyxzQkFBVDtBQUFBO0FBQUE7QUFBQSxrQ0FBaUMsV0FBT0MsR0FBUCxFQUFlO0FBQ3BERCx5QkFBbUIsMEJBQVlDLEdBQVosQ0FBbkI7QUFDRCxLQUZLOztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47O0FBSUEsTUFBSSxDQUFDRCxVQUFMLEVBQWlCO0FBQ2ZFLFlBQVFDLEtBQVIsQ0FBYyxDQUFDLHdGQUNELDZEQURBLEVBQytEQyxHQUQ3RTtBQUVBbEIsWUFBUW1CLElBQVIsQ0FBYSxDQUFiO0FBQ0Q7O0FBRUQscUJBQVFDLEtBQVIsQ0FBY3BCLFFBQVFKLElBQXRCO0FBQ0QsQ0FiRCIsImZpbGUiOiJlbGVjdHJvbi1mb3JnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICdjb2xvcnMnO1xuaW1wb3J0IHsgYXN5bmNPcmEgfSBmcm9tICdAZWxlY3Ryb24tZm9yZ2UvYXN5bmMtb3JhJztcbmltcG9ydCBwcm9ncmFtIGZyb20gJ2NvbW1hbmRlcic7XG5cbmltcG9ydCAnLi91dGlsL3Rlcm1pbmF0ZSc7XG5cbmltcG9ydCBjaGVja1N5c3RlbSBmcm9tICcuL3V0aWwvY2hlY2stc3lzdGVtJztcblxuY29uc3Qgb3JpZ2luYWxTQyA9IHByb2dyYW0uZXhlY3V0ZVN1YkNvbW1hbmQuYmluZChwcm9ncmFtKTtcbnByb2dyYW0uZXhlY3V0ZVN1YkNvbW1hbmQgPSAoYXJndiwgYXJncywgdW5rbm93bikgPT4ge1xuICBsZXQgaW5kZXhPZkRvdWJsZURhc2ggPSBwcm9jZXNzLmFyZ3YuaW5kZXhPZignLS0nKTtcbiAgaW5kZXhPZkRvdWJsZURhc2ggPSBpbmRleE9mRG91YmxlRGFzaCA8IDAgPyBwcm9jZXNzLmFyZ3YubGVuZ3RoICsgMSA6IGluZGV4T2ZEb3VibGVEYXNoO1xuXG4gIGNvbnN0IHBhc3NUaHJvdWdoQXJncyA9IGFyZ3MuZmlsdGVyKGFyZyA9PiBwcm9jZXNzLmFyZ3YuaW5kZXhPZihhcmcpID4gaW5kZXhPZkRvdWJsZURhc2gpO1xuICBjb25zdCBub3JtYWxBcmdzID0gYXJncy5maWx0ZXIoYXJnID0+IHByb2Nlc3MuYXJndi5pbmRleE9mKGFyZykgPD0gaW5kZXhPZkRvdWJsZURhc2gpO1xuXG4gIGxldCBuZXdBcmdzID0gYXJncztcbiAgbGV0IG5ld1Vua25vd24gPSB1bmtub3duO1xuICBpZiAocGFzc1Rocm91Z2hBcmdzLmxlbmd0aCA+IDApIHtcbiAgICBuZXdBcmdzID0gbm9ybWFsQXJncy5jb25jYXQodW5rbm93bikuY29uY2F0KCctLScpLmNvbmNhdChwYXNzVGhyb3VnaEFyZ3MpO1xuICAgIG5ld1Vua25vd24gPSBbXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luYWxTQyhhcmd2LCBuZXdBcmdzLCBuZXdVbmtub3duKTtcbn07XG5cbnByb2dyYW1cbiAgLnZlcnNpb24ocmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbilcbiAgLm9wdGlvbignLS12ZXJib3NlJywgJ0VuYWJsZXMgdmVyYm9zZSBtb2RlJylcbiAgLmNvbW1hbmQoJ2luaXQnLCAnSW5pdGlhbGl6ZSBhIG5ldyBFbGVjdHJvbiBhcHBsaWNhdGlvbicpXG4gIC5jb21tYW5kKCdpbXBvcnQnLCAnQXR0ZW1wdHMgdG8gbmF2aWdhdGUgeW91IHRocm91Z2ggdGhlIHByb2Nlc3Mgb2YgaW1wb3J0aW5nIGFuIGV4aXN0aW5nIHByb2plY3QgdG8gXCJlbGVjdHJvbi1mb3JnZVwiJylcbiAgLmNvbW1hbmQoJ2xpbnQnLCAnTGludHMgdGhlIGN1cnJlbnQgRWxlY3Ryb24gYXBwbGljYXRpb24nKVxuICAuY29tbWFuZCgncGFja2FnZScsICdQYWNrYWdlIHRoZSBjdXJyZW50IEVsZWN0cm9uIGFwcGxpY2F0aW9uJylcbiAgLmNvbW1hbmQoJ21ha2UnLCAnR2VuZXJhdGUgZGlzdHJpYnV0YWJsZXMgZm9yIHRoZSBjdXJyZW50IEVsZWN0cm9uIGFwcGxpY2F0aW9uJylcbiAgLmNvbW1hbmQoJ3N0YXJ0JywgJ1N0YXJ0IHRoZSBjdXJyZW50IEVsZWN0cm9uIGFwcGxpY2F0aW9uJylcbiAgLmNvbW1hbmQoJ3B1Ymxpc2gnLCAnUHVibGlzaCB0aGUgY3VycmVudCBFbGVjdHJvbiBhcHBsaWNhdGlvbiB0byBHaXRIdWInKVxuICAuY29tbWFuZCgnaW5zdGFsbCcsICdJbnN0YWxsIGFuIEVsZWN0cm9uIGFwcGxpY2F0aW9uIGZyb20gR2l0SHViJyk7XG5cbihhc3luYyAoKSA9PiB7XG4gIGxldCBnb29kU3lzdGVtO1xuICBhd2FpdCBhc3luY09yYSgnQ2hlY2tpbmcgeW91ciBzeXN0ZW0nLCBhc3luYyAob3JhKSA9PiB7XG4gICAgZ29vZFN5c3RlbSA9IGF3YWl0IGNoZWNrU3lzdGVtKG9yYSk7XG4gIH0pO1xuXG4gIGlmICghZ29vZFN5c3RlbSkge1xuICAgIGNvbnNvbGUuZXJyb3IoKCdJdCBsb29rcyBsaWtlIHlvdSBhcmUgbWlzc2luZyBzb21lIGRlcGVuZGVuY2llcyB5b3UgbmVlZCB0byBnZXQgRWxlY3Ryb24gcnVubmluZy5cXG4nICtcbiAgICAgICAgICAgICAgICAgICdNYWtlIHN1cmUgeW91IGhhdmUgZ2l0IGluc3RhbGxlZCBhbmQgTm9kZS5qcyB2ZXJzaW9uIDYuMC4wKycpLnJlZCk7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9XG5cbiAgcHJvZ3JhbS5wYXJzZShwcm9jZXNzLmFyZ3YpO1xufSkoKTtcbiJdfQ==