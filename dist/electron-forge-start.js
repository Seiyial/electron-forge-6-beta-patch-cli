"use strict";

var _core = require("@electron-forge/core");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _commander = _interopRequireDefault(require("commander"));

require("./util/terminate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

_asyncToGenerator(function* () {
  let commandArgs = process.argv;
  let appArgs;
  const doubleDashIndex = process.argv.indexOf('--');

  if (doubleDashIndex !== -1) {
    commandArgs = process.argv.slice(0, doubleDashIndex);
    appArgs = process.argv.slice(doubleDashIndex + 1);
  }

  let dir = process.cwd();

  _commander.default.version(require('../package.json').version).arguments('[cwd]').option('-p, --app-path <path>', "Override the path to the Electron app to launch (defaults to '.')").option('-l, --enable-logging', 'Enable advanced logging.  This will log internal Electron things').option('-n, --run-as-node', 'Run the Electron app as a Node.JS script').option('--vscode', 'Used to enable arg transformation for debugging Electron through VSCode.  Do not use yourself.').option('-i, --inspect-electron', 'Triggers inspect mode on Electron to allow debugging the main process.  Electron >1.7 only').action(cwd => {
    if (!cwd) return;

    if (_path.default.isAbsolute(cwd) && _fsExtra.default.existsSync(cwd)) {
      dir = cwd;
    } else if (_fsExtra.default.existsSync(_path.default.resolve(dir, cwd))) {
      dir = _path.default.resolve(dir, cwd);
    }
  }).parse(commandArgs);

  _commander.default.on('--help', () => {
    console.log("  Any arguments found after '--' will be passed to the Electron app, e.g.");
    console.log('');
    console.log('    $ electron-forge /path/to/project -l -- -d -f foo.txt');
    console.log('');
    console.log("  will pass the arguments '-d -f foo.txt' to the Electron app");
  });

  const opts = {
    dir,
    interactive: true,
    enableLogging: !!_commander.default.enableLogging,
    runAsNode: !!_commander.default.runAsNode,
    inspect: !!_commander.default.inspectElectron
  };

  if (_commander.default.vscode && appArgs) {
    // Args are in the format ~arg~ so we need to strip the "~"
    appArgs = appArgs.map(arg => arg.substr(1, arg.length - 2)).filter(arg => arg.length > 0);
  }

  if (_commander.default.appPath) opts.appPath = _commander.default.appPath;
  if (appArgs) opts.args = appArgs;
  const spawned = yield (0, _core.start)(opts);
  yield new Promise(resolve => {
    spawned.on('exit', code => {
      if (code !== 0) {
        process.exit(code);
      }

      resolve();
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVjdHJvbi1mb3JnZS1zdGFydC5qcyJdLCJuYW1lcyI6WyJjb21tYW5kQXJncyIsInByb2Nlc3MiLCJhcmd2IiwiYXBwQXJncyIsImRvdWJsZURhc2hJbmRleCIsImluZGV4T2YiLCJzbGljZSIsImRpciIsImN3ZCIsInZlcnNpb24iLCJyZXF1aXJlIiwiYXJndW1lbnRzIiwib3B0aW9uIiwiYWN0aW9uIiwiaXNBYnNvbHV0ZSIsImV4aXN0c1N5bmMiLCJyZXNvbHZlIiwicGFyc2UiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJvcHRzIiwiaW50ZXJhY3RpdmUiLCJlbmFibGVMb2dnaW5nIiwicnVuQXNOb2RlIiwiaW5zcGVjdCIsImluc3BlY3RFbGVjdHJvbiIsInZzY29kZSIsIm1hcCIsImFyZyIsInN1YnN0ciIsImxlbmd0aCIsImZpbHRlciIsImFwcFBhdGgiLCJhcmdzIiwic3Bhd25lZCIsIlByb21pc2UiLCJjb2RlIiwiZXhpdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsa0JBQUMsYUFBWTtBQUNYLE1BQUlBLGNBQWNDLFFBQVFDLElBQTFCO0FBQ0EsTUFBSUMsT0FBSjtBQUVBLFFBQU1DLGtCQUFrQkgsUUFBUUMsSUFBUixDQUFhRyxPQUFiLENBQXFCLElBQXJCLENBQXhCOztBQUNBLE1BQUlELG9CQUFvQixDQUFDLENBQXpCLEVBQTRCO0FBQzFCSixrQkFBY0MsUUFBUUMsSUFBUixDQUFhSSxLQUFiLENBQW1CLENBQW5CLEVBQXNCRixlQUF0QixDQUFkO0FBQ0FELGNBQVVGLFFBQVFDLElBQVIsQ0FBYUksS0FBYixDQUFtQkYsa0JBQWtCLENBQXJDLENBQVY7QUFDRDs7QUFFRCxNQUFJRyxNQUFNTixRQUFRTyxHQUFSLEVBQVY7O0FBQ0EscUJBQ0dDLE9BREgsQ0FDV0MsUUFBUSxpQkFBUixFQUEyQkQsT0FEdEMsRUFFR0UsU0FGSCxDQUVhLE9BRmIsRUFHR0MsTUFISCxDQUdVLHVCQUhWLEVBR21DLG1FQUhuQyxFQUlHQSxNQUpILENBSVUsc0JBSlYsRUFJa0Msa0VBSmxDLEVBS0dBLE1BTEgsQ0FLVSxtQkFMVixFQUsrQiwwQ0FML0IsRUFNR0EsTUFOSCxDQU1VLFVBTlYsRUFNc0IsZ0dBTnRCLEVBT0dBLE1BUEgsQ0FPVSx3QkFQVixFQU9vQyw0RkFQcEMsRUFRR0MsTUFSSCxDQVFXTCxHQUFELElBQVM7QUFDZixRQUFJLENBQUNBLEdBQUwsRUFBVTs7QUFDVixRQUFJLGNBQUtNLFVBQUwsQ0FBZ0JOLEdBQWhCLEtBQXdCLGlCQUFHTyxVQUFILENBQWNQLEdBQWQsQ0FBNUIsRUFBZ0Q7QUFDOUNELFlBQU1DLEdBQU47QUFDRCxLQUZELE1BRU8sSUFBSSxpQkFBR08sVUFBSCxDQUFjLGNBQUtDLE9BQUwsQ0FBYVQsR0FBYixFQUFrQkMsR0FBbEIsQ0FBZCxDQUFKLEVBQTJDO0FBQ2hERCxZQUFNLGNBQUtTLE9BQUwsQ0FBYVQsR0FBYixFQUFrQkMsR0FBbEIsQ0FBTjtBQUNEO0FBQ0YsR0FmSCxFQWdCR1MsS0FoQkgsQ0FnQlNqQixXQWhCVDs7QUFrQkEscUJBQVFrQixFQUFSLENBQVcsUUFBWCxFQUFxQixNQUFNO0FBQ3pCQyxZQUFRQyxHQUFSLENBQVksMkVBQVo7QUFDQUQsWUFBUUMsR0FBUixDQUFZLEVBQVo7QUFDQUQsWUFBUUMsR0FBUixDQUFZLDJEQUFaO0FBQ0FELFlBQVFDLEdBQVIsQ0FBWSxFQUFaO0FBQ0FELFlBQVFDLEdBQVIsQ0FBWSwrREFBWjtBQUNELEdBTkQ7O0FBUUEsUUFBTUMsT0FBTztBQUNYZCxPQURXO0FBRVhlLGlCQUFhLElBRkY7QUFHWEMsbUJBQWUsQ0FBQyxDQUFDLG1CQUFRQSxhQUhkO0FBSVhDLGVBQVcsQ0FBQyxDQUFDLG1CQUFRQSxTQUpWO0FBS1hDLGFBQVMsQ0FBQyxDQUFDLG1CQUFRQztBQUxSLEdBQWI7O0FBUUEsTUFBSSxtQkFBUUMsTUFBUixJQUFrQnhCLE9BQXRCLEVBQStCO0FBQzdCO0FBQ0FBLGNBQVVBLFFBQ1B5QixHQURPLENBQ0hDLE9BQU9BLElBQUlDLE1BQUosQ0FBVyxDQUFYLEVBQWNELElBQUlFLE1BQUosR0FBYSxDQUEzQixDQURKLEVBRVBDLE1BRk8sQ0FFQUgsT0FBT0EsSUFBSUUsTUFBSixHQUFhLENBRnBCLENBQVY7QUFHRDs7QUFFRCxNQUFJLG1CQUFRRSxPQUFaLEVBQXFCWixLQUFLWSxPQUFMLEdBQWUsbUJBQVFBLE9BQXZCO0FBQ3JCLE1BQUk5QixPQUFKLEVBQWFrQixLQUFLYSxJQUFMLEdBQVkvQixPQUFaO0FBRWIsUUFBTWdDLGdCQUFnQixpQkFBTWQsSUFBTixDQUF0QjtBQUVBLFFBQU0sSUFBSWUsT0FBSixDQUFhcEIsT0FBRCxJQUFhO0FBQzdCbUIsWUFBUWpCLEVBQVIsQ0FBVyxNQUFYLEVBQW9CbUIsSUFBRCxJQUFVO0FBQzNCLFVBQUlBLFNBQVMsQ0FBYixFQUFnQjtBQUNkcEMsZ0JBQVFxQyxJQUFSLENBQWFELElBQWI7QUFDRDs7QUFDRHJCO0FBQ0QsS0FMRDtBQU1ELEdBUEssQ0FBTjtBQVFELENBakVEIiwiZmlsZSI6ImVsZWN0cm9uLWZvcmdlLXN0YXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RhcnQgfSBmcm9tICdAZWxlY3Ryb24tZm9yZ2UvY29yZSc7XG5cbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBwcm9ncmFtIGZyb20gJ2NvbW1hbmRlcic7XG5cbmltcG9ydCAnLi91dGlsL3Rlcm1pbmF0ZSc7XG5cbihhc3luYyAoKSA9PiB7XG4gIGxldCBjb21tYW5kQXJncyA9IHByb2Nlc3MuYXJndjtcbiAgbGV0IGFwcEFyZ3M7XG5cbiAgY29uc3QgZG91YmxlRGFzaEluZGV4ID0gcHJvY2Vzcy5hcmd2LmluZGV4T2YoJy0tJyk7XG4gIGlmIChkb3VibGVEYXNoSW5kZXggIT09IC0xKSB7XG4gICAgY29tbWFuZEFyZ3MgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMCwgZG91YmxlRGFzaEluZGV4KTtcbiAgICBhcHBBcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKGRvdWJsZURhc2hJbmRleCArIDEpO1xuICB9XG5cbiAgbGV0IGRpciA9IHByb2Nlc3MuY3dkKCk7XG4gIHByb2dyYW1cbiAgICAudmVyc2lvbihyZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uKVxuICAgIC5hcmd1bWVudHMoJ1tjd2RdJylcbiAgICAub3B0aW9uKCctcCwgLS1hcHAtcGF0aCA8cGF0aD4nLCBcIk92ZXJyaWRlIHRoZSBwYXRoIHRvIHRoZSBFbGVjdHJvbiBhcHAgdG8gbGF1bmNoIChkZWZhdWx0cyB0byAnLicpXCIpXG4gICAgLm9wdGlvbignLWwsIC0tZW5hYmxlLWxvZ2dpbmcnLCAnRW5hYmxlIGFkdmFuY2VkIGxvZ2dpbmcuICBUaGlzIHdpbGwgbG9nIGludGVybmFsIEVsZWN0cm9uIHRoaW5ncycpXG4gICAgLm9wdGlvbignLW4sIC0tcnVuLWFzLW5vZGUnLCAnUnVuIHRoZSBFbGVjdHJvbiBhcHAgYXMgYSBOb2RlLkpTIHNjcmlwdCcpXG4gICAgLm9wdGlvbignLS12c2NvZGUnLCAnVXNlZCB0byBlbmFibGUgYXJnIHRyYW5zZm9ybWF0aW9uIGZvciBkZWJ1Z2dpbmcgRWxlY3Ryb24gdGhyb3VnaCBWU0NvZGUuICBEbyBub3QgdXNlIHlvdXJzZWxmLicpXG4gICAgLm9wdGlvbignLWksIC0taW5zcGVjdC1lbGVjdHJvbicsICdUcmlnZ2VycyBpbnNwZWN0IG1vZGUgb24gRWxlY3Ryb24gdG8gYWxsb3cgZGVidWdnaW5nIHRoZSBtYWluIHByb2Nlc3MuICBFbGVjdHJvbiA+MS43IG9ubHknKVxuICAgIC5hY3Rpb24oKGN3ZCkgPT4ge1xuICAgICAgaWYgKCFjd2QpIHJldHVybjtcbiAgICAgIGlmIChwYXRoLmlzQWJzb2x1dGUoY3dkKSAmJiBmcy5leGlzdHNTeW5jKGN3ZCkpIHtcbiAgICAgICAgZGlyID0gY3dkO1xuICAgICAgfSBlbHNlIGlmIChmcy5leGlzdHNTeW5jKHBhdGgucmVzb2x2ZShkaXIsIGN3ZCkpKSB7XG4gICAgICAgIGRpciA9IHBhdGgucmVzb2x2ZShkaXIsIGN3ZCk7XG4gICAgICB9XG4gICAgfSlcbiAgICAucGFyc2UoY29tbWFuZEFyZ3MpO1xuXG4gIHByb2dyYW0ub24oJy0taGVscCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIiAgQW55IGFyZ3VtZW50cyBmb3VuZCBhZnRlciAnLS0nIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBFbGVjdHJvbiBhcHAsIGUuZy5cIik7XG4gICAgY29uc29sZS5sb2coJycpO1xuICAgIGNvbnNvbGUubG9nKCcgICAgJCBlbGVjdHJvbi1mb3JnZSAvcGF0aC90by9wcm9qZWN0IC1sIC0tIC1kIC1mIGZvby50eHQnKTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgY29uc29sZS5sb2coXCIgIHdpbGwgcGFzcyB0aGUgYXJndW1lbnRzICctZCAtZiBmb28udHh0JyB0byB0aGUgRWxlY3Ryb24gYXBwXCIpO1xuICB9KTtcblxuICBjb25zdCBvcHRzID0ge1xuICAgIGRpcixcbiAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICBlbmFibGVMb2dnaW5nOiAhIXByb2dyYW0uZW5hYmxlTG9nZ2luZyxcbiAgICBydW5Bc05vZGU6ICEhcHJvZ3JhbS5ydW5Bc05vZGUsXG4gICAgaW5zcGVjdDogISFwcm9ncmFtLmluc3BlY3RFbGVjdHJvbixcbiAgfTtcblxuICBpZiAocHJvZ3JhbS52c2NvZGUgJiYgYXBwQXJncykge1xuICAgIC8vIEFyZ3MgYXJlIGluIHRoZSBmb3JtYXQgfmFyZ34gc28gd2UgbmVlZCB0byBzdHJpcCB0aGUgXCJ+XCJcbiAgICBhcHBBcmdzID0gYXBwQXJnc1xuICAgICAgLm1hcChhcmcgPT4gYXJnLnN1YnN0cigxLCBhcmcubGVuZ3RoIC0gMikpXG4gICAgICAuZmlsdGVyKGFyZyA9PiBhcmcubGVuZ3RoID4gMCk7XG4gIH1cblxuICBpZiAocHJvZ3JhbS5hcHBQYXRoKSBvcHRzLmFwcFBhdGggPSBwcm9ncmFtLmFwcFBhdGg7XG4gIGlmIChhcHBBcmdzKSBvcHRzLmFyZ3MgPSBhcHBBcmdzO1xuXG4gIGNvbnN0IHNwYXduZWQgPSBhd2FpdCBzdGFydChvcHRzKTtcblxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNwYXduZWQub24oJ2V4aXQnLCAoY29kZSkgPT4ge1xuICAgICAgaWYgKGNvZGUgIT09IDApIHtcbiAgICAgICAgcHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn0pKCk7XG4iXX0=