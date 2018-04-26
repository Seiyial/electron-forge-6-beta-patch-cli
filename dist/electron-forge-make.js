"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMakeOptions = void 0;

var _core = require("@electron-forge/core");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _commander = _interopRequireDefault(require("commander"));

require("./util/terminate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

// eslint-disable-next-line import/prefer-default-export
const getMakeOptions = () => {
  let dir = process.cwd();

  _commander.default.version(require('../package.json').version).arguments('[cwd]').option('--skip-package', 'Assume the app is already packaged').option('-a, --arch [arch]', 'Target architecture').option('-p, --platform [platform]', 'Target build platform').option('--targets [targets]', 'Override your make targets for this run').allowUnknownOption(true).action(cwd => {
    if (!cwd) return;

    if (_path.default.isAbsolute(cwd) && _fsExtra.default.existsSync(cwd)) {
      dir = cwd;
    } else if (_fsExtra.default.existsSync(_path.default.resolve(dir, cwd))) {
      dir = _path.default.resolve(dir, cwd);
    }
  }).parse(process.argv);

  const makeOpts = {
    dir,
    interactive: true,
    skipPackage: _commander.default.skipPackage
  };
  if (_commander.default.targets) makeOpts.overrideTargets = _commander.default.targets.split(',');
  if (_commander.default.arch) makeOpts.arch = _commander.default.arch;
  if (_commander.default.platform) makeOpts.platform = _commander.default.platform;
  return makeOpts;
};

exports.getMakeOptions = getMakeOptions;

if (process.mainModule === module || global.__LINKED_FORGE__) {
  _asyncToGenerator(function* () {
    const makeOpts = getMakeOptions();
    yield (0, _core.make)(makeOpts);
  })();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVjdHJvbi1mb3JnZS1tYWtlLmpzIl0sIm5hbWVzIjpbImdldE1ha2VPcHRpb25zIiwiZGlyIiwicHJvY2VzcyIsImN3ZCIsInZlcnNpb24iLCJyZXF1aXJlIiwiYXJndW1lbnRzIiwib3B0aW9uIiwiYWxsb3dVbmtub3duT3B0aW9uIiwiYWN0aW9uIiwiaXNBYnNvbHV0ZSIsImV4aXN0c1N5bmMiLCJyZXNvbHZlIiwicGFyc2UiLCJhcmd2IiwibWFrZU9wdHMiLCJpbnRlcmFjdGl2ZSIsInNraXBQYWNrYWdlIiwidGFyZ2V0cyIsIm92ZXJyaWRlVGFyZ2V0cyIsInNwbGl0IiwiYXJjaCIsInBsYXRmb3JtIiwibWFpbk1vZHVsZSIsIm1vZHVsZSIsImdsb2JhbCIsIl9fTElOS0VEX0ZPUkdFX18iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUE7QUFDTyxNQUFNQSxpQkFBaUIsTUFBTTtBQUNsQyxNQUFJQyxNQUFNQyxRQUFRQyxHQUFSLEVBQVY7O0FBQ0EscUJBQ0dDLE9BREgsQ0FDV0MsUUFBUSxpQkFBUixFQUEyQkQsT0FEdEMsRUFFR0UsU0FGSCxDQUVhLE9BRmIsRUFHR0MsTUFISCxDQUdVLGdCQUhWLEVBRzRCLG9DQUg1QixFQUlHQSxNQUpILENBSVUsbUJBSlYsRUFJK0IscUJBSi9CLEVBS0dBLE1BTEgsQ0FLVSwyQkFMVixFQUt1Qyx1QkFMdkMsRUFNR0EsTUFOSCxDQU1VLHFCQU5WLEVBTWlDLHlDQU5qQyxFQU9HQyxrQkFQSCxDQU9zQixJQVB0QixFQVFHQyxNQVJILENBUVdOLEdBQUQsSUFBUztBQUNmLFFBQUksQ0FBQ0EsR0FBTCxFQUFVOztBQUNWLFFBQUksY0FBS08sVUFBTCxDQUFnQlAsR0FBaEIsS0FBd0IsaUJBQUdRLFVBQUgsQ0FBY1IsR0FBZCxDQUE1QixFQUFnRDtBQUM5Q0YsWUFBTUUsR0FBTjtBQUNELEtBRkQsTUFFTyxJQUFJLGlCQUFHUSxVQUFILENBQWMsY0FBS0MsT0FBTCxDQUFhWCxHQUFiLEVBQWtCRSxHQUFsQixDQUFkLENBQUosRUFBMkM7QUFDaERGLFlBQU0sY0FBS1csT0FBTCxDQUFhWCxHQUFiLEVBQWtCRSxHQUFsQixDQUFOO0FBQ0Q7QUFDRixHQWZILEVBZ0JHVSxLQWhCSCxDQWdCU1gsUUFBUVksSUFoQmpCOztBQWtCQSxRQUFNQyxXQUFXO0FBQ2ZkLE9BRGU7QUFFZmUsaUJBQWEsSUFGRTtBQUdmQyxpQkFBYSxtQkFBUUE7QUFITixHQUFqQjtBQUtBLE1BQUksbUJBQVFDLE9BQVosRUFBcUJILFNBQVNJLGVBQVQsR0FBMkIsbUJBQVFELE9BQVIsQ0FBZ0JFLEtBQWhCLENBQXNCLEdBQXRCLENBQTNCO0FBQ3JCLE1BQUksbUJBQVFDLElBQVosRUFBa0JOLFNBQVNNLElBQVQsR0FBZ0IsbUJBQVFBLElBQXhCO0FBQ2xCLE1BQUksbUJBQVFDLFFBQVosRUFBc0JQLFNBQVNPLFFBQVQsR0FBb0IsbUJBQVFBLFFBQTVCO0FBRXRCLFNBQU9QLFFBQVA7QUFDRCxDQTlCTTs7OztBQWdDUCxJQUFJYixRQUFRcUIsVUFBUixLQUF1QkMsTUFBdkIsSUFBaUNDLE9BQU9DLGdCQUE1QyxFQUE4RDtBQUM1RCxvQkFBQyxhQUFZO0FBQ1gsVUFBTVgsV0FBV2YsZ0JBQWpCO0FBRUEsVUFBTSxnQkFBS2UsUUFBTCxDQUFOO0FBQ0QsR0FKRDtBQUtEIiwiZmlsZSI6ImVsZWN0cm9uLWZvcmdlLW1ha2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlIH0gZnJvbSAnQGVsZWN0cm9uLWZvcmdlL2NvcmUnO1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcHJvZ3JhbSBmcm9tICdjb21tYW5kZXInO1xuXG5pbXBvcnQgJy4vdXRpbC90ZXJtaW5hdGUnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IGdldE1ha2VPcHRpb25zID0gKCkgPT4ge1xuICBsZXQgZGlyID0gcHJvY2Vzcy5jd2QoKTtcbiAgcHJvZ3JhbVxuICAgIC52ZXJzaW9uKHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24pXG4gICAgLmFyZ3VtZW50cygnW2N3ZF0nKVxuICAgIC5vcHRpb24oJy0tc2tpcC1wYWNrYWdlJywgJ0Fzc3VtZSB0aGUgYXBwIGlzIGFscmVhZHkgcGFja2FnZWQnKVxuICAgIC5vcHRpb24oJy1hLCAtLWFyY2ggW2FyY2hdJywgJ1RhcmdldCBhcmNoaXRlY3R1cmUnKVxuICAgIC5vcHRpb24oJy1wLCAtLXBsYXRmb3JtIFtwbGF0Zm9ybV0nLCAnVGFyZ2V0IGJ1aWxkIHBsYXRmb3JtJylcbiAgICAub3B0aW9uKCctLXRhcmdldHMgW3RhcmdldHNdJywgJ092ZXJyaWRlIHlvdXIgbWFrZSB0YXJnZXRzIGZvciB0aGlzIHJ1bicpXG4gICAgLmFsbG93VW5rbm93bk9wdGlvbih0cnVlKVxuICAgIC5hY3Rpb24oKGN3ZCkgPT4ge1xuICAgICAgaWYgKCFjd2QpIHJldHVybjtcbiAgICAgIGlmIChwYXRoLmlzQWJzb2x1dGUoY3dkKSAmJiBmcy5leGlzdHNTeW5jKGN3ZCkpIHtcbiAgICAgICAgZGlyID0gY3dkO1xuICAgICAgfSBlbHNlIGlmIChmcy5leGlzdHNTeW5jKHBhdGgucmVzb2x2ZShkaXIsIGN3ZCkpKSB7XG4gICAgICAgIGRpciA9IHBhdGgucmVzb2x2ZShkaXIsIGN3ZCk7XG4gICAgICB9XG4gICAgfSlcbiAgICAucGFyc2UocHJvY2Vzcy5hcmd2KTtcblxuICBjb25zdCBtYWtlT3B0cyA9IHtcbiAgICBkaXIsXG4gICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgc2tpcFBhY2thZ2U6IHByb2dyYW0uc2tpcFBhY2thZ2UsXG4gIH07XG4gIGlmIChwcm9ncmFtLnRhcmdldHMpIG1ha2VPcHRzLm92ZXJyaWRlVGFyZ2V0cyA9IHByb2dyYW0udGFyZ2V0cy5zcGxpdCgnLCcpO1xuICBpZiAocHJvZ3JhbS5hcmNoKSBtYWtlT3B0cy5hcmNoID0gcHJvZ3JhbS5hcmNoO1xuICBpZiAocHJvZ3JhbS5wbGF0Zm9ybSkgbWFrZU9wdHMucGxhdGZvcm0gPSBwcm9ncmFtLnBsYXRmb3JtO1xuXG4gIHJldHVybiBtYWtlT3B0cztcbn07XG5cbmlmIChwcm9jZXNzLm1haW5Nb2R1bGUgPT09IG1vZHVsZSB8fCBnbG9iYWwuX19MSU5LRURfRk9SR0VfXykge1xuICAoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1ha2VPcHRzID0gZ2V0TWFrZU9wdGlvbnMoKTtcblxuICAgIGF3YWl0IG1ha2UobWFrZU9wdHMpO1xuICB9KSgpO1xufVxuIl19