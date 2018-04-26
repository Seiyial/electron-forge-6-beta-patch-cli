"use strict";

var _core = require("@electron-forge/core");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _commander = _interopRequireDefault(require("commander"));

require("./util/terminate");

var _electronForgeMake = require("./electron-forge-make");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

_asyncToGenerator(function* () {
  let dir = process.cwd();

  _commander.default.version(require('../package.json').version).arguments('[cwd]').option('--tag', 'The tag to publish to on GitHub').option('--target [target[,target...]]', 'The comma-separated deployment targets, defaults to "github"').option('--dry-run', 'Triggers a publish dry run which saves state and doesn\'t upload anything').option('--from-dry-run', 'Attempts to publish artifacts from the last saved dry run').allowUnknownOption(true).action(cwd => {
    if (!cwd) return;

    if (_path.default.isAbsolute(cwd) && _fsExtra.default.existsSync(cwd)) {
      dir = cwd;
    } else if (_fsExtra.default.existsSync(_path.default.resolve(dir, cwd))) {
      dir = _path.default.resolve(dir, cwd);
    }
  }).parse(process.argv);

  const publishOpts = {
    dir,
    interactive: true,
    authToken: _commander.default.authToken,
    tag: _commander.default.tag,
    dryRun: _commander.default.dryRun,
    dryRunResume: _commander.default.fromDryRun
  };
  if (_commander.default.target) publishOpts.publishTargets = _commander.default.target.split(',');
  publishOpts.makeOptions = (0, _electronForgeMake.getMakeOptions)();
  yield (0, _core.publish)(publishOpts);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVjdHJvbi1mb3JnZS1wdWJsaXNoLmpzIl0sIm5hbWVzIjpbImRpciIsInByb2Nlc3MiLCJjd2QiLCJ2ZXJzaW9uIiwicmVxdWlyZSIsImFyZ3VtZW50cyIsIm9wdGlvbiIsImFsbG93VW5rbm93bk9wdGlvbiIsImFjdGlvbiIsImlzQWJzb2x1dGUiLCJleGlzdHNTeW5jIiwicmVzb2x2ZSIsInBhcnNlIiwiYXJndiIsInB1Ymxpc2hPcHRzIiwiaW50ZXJhY3RpdmUiLCJhdXRoVG9rZW4iLCJ0YWciLCJkcnlSdW4iLCJkcnlSdW5SZXN1bWUiLCJmcm9tRHJ5UnVuIiwidGFyZ2V0IiwicHVibGlzaFRhcmdldHMiLCJzcGxpdCIsIm1ha2VPcHRpb25zIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFFQSxrQkFBQyxhQUFZO0FBQ1gsTUFBSUEsTUFBTUMsUUFBUUMsR0FBUixFQUFWOztBQUNBLHFCQUNHQyxPQURILENBQ1dDLFFBQVEsaUJBQVIsRUFBMkJELE9BRHRDLEVBRUdFLFNBRkgsQ0FFYSxPQUZiLEVBR0dDLE1BSEgsQ0FHVSxPQUhWLEVBR21CLGlDQUhuQixFQUlHQSxNQUpILENBSVUsK0JBSlYsRUFJMkMsOERBSjNDLEVBS0dBLE1BTEgsQ0FLVSxXQUxWLEVBS3VCLDJFQUx2QixFQU1HQSxNQU5ILENBTVUsZ0JBTlYsRUFNNEIsMkRBTjVCLEVBT0dDLGtCQVBILENBT3NCLElBUHRCLEVBUUdDLE1BUkgsQ0FRV04sR0FBRCxJQUFTO0FBQ2YsUUFBSSxDQUFDQSxHQUFMLEVBQVU7O0FBQ1YsUUFBSSxjQUFLTyxVQUFMLENBQWdCUCxHQUFoQixLQUF3QixpQkFBR1EsVUFBSCxDQUFjUixHQUFkLENBQTVCLEVBQWdEO0FBQzlDRixZQUFNRSxHQUFOO0FBQ0QsS0FGRCxNQUVPLElBQUksaUJBQUdRLFVBQUgsQ0FBYyxjQUFLQyxPQUFMLENBQWFYLEdBQWIsRUFBa0JFLEdBQWxCLENBQWQsQ0FBSixFQUEyQztBQUNoREYsWUFBTSxjQUFLVyxPQUFMLENBQWFYLEdBQWIsRUFBa0JFLEdBQWxCLENBQU47QUFDRDtBQUNGLEdBZkgsRUFnQkdVLEtBaEJILENBZ0JTWCxRQUFRWSxJQWhCakI7O0FBa0JBLFFBQU1DLGNBQWM7QUFDbEJkLE9BRGtCO0FBRWxCZSxpQkFBYSxJQUZLO0FBR2xCQyxlQUFXLG1CQUFRQSxTQUhEO0FBSWxCQyxTQUFLLG1CQUFRQSxHQUpLO0FBS2xCQyxZQUFRLG1CQUFRQSxNQUxFO0FBTWxCQyxrQkFBYyxtQkFBUUM7QUFOSixHQUFwQjtBQVFBLE1BQUksbUJBQVFDLE1BQVosRUFBb0JQLFlBQVlRLGNBQVosR0FBNkIsbUJBQVFELE1BQVIsQ0FBZUUsS0FBZixDQUFxQixHQUFyQixDQUE3QjtBQUVwQlQsY0FBWVUsV0FBWixHQUEwQix3Q0FBMUI7QUFFQSxRQUFNLG1CQUFRVixXQUFSLENBQU47QUFDRCxDQWpDRCIsImZpbGUiOiJlbGVjdHJvbi1mb3JnZS1wdWJsaXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gJ0BlbGVjdHJvbi1mb3JnZS9jb3JlJztcblxuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHByb2dyYW0gZnJvbSAnY29tbWFuZGVyJztcblxuaW1wb3J0ICcuL3V0aWwvdGVybWluYXRlJztcbmltcG9ydCB7IGdldE1ha2VPcHRpb25zIH0gZnJvbSAnLi9lbGVjdHJvbi1mb3JnZS1tYWtlJztcblxuKGFzeW5jICgpID0+IHtcbiAgbGV0IGRpciA9IHByb2Nlc3MuY3dkKCk7XG4gIHByb2dyYW1cbiAgICAudmVyc2lvbihyZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uKVxuICAgIC5hcmd1bWVudHMoJ1tjd2RdJylcbiAgICAub3B0aW9uKCctLXRhZycsICdUaGUgdGFnIHRvIHB1Ymxpc2ggdG8gb24gR2l0SHViJylcbiAgICAub3B0aW9uKCctLXRhcmdldCBbdGFyZ2V0Wyx0YXJnZXQuLi5dXScsICdUaGUgY29tbWEtc2VwYXJhdGVkIGRlcGxveW1lbnQgdGFyZ2V0cywgZGVmYXVsdHMgdG8gXCJnaXRodWJcIicpXG4gICAgLm9wdGlvbignLS1kcnktcnVuJywgJ1RyaWdnZXJzIGEgcHVibGlzaCBkcnkgcnVuIHdoaWNoIHNhdmVzIHN0YXRlIGFuZCBkb2VzblxcJ3QgdXBsb2FkIGFueXRoaW5nJylcbiAgICAub3B0aW9uKCctLWZyb20tZHJ5LXJ1bicsICdBdHRlbXB0cyB0byBwdWJsaXNoIGFydGlmYWN0cyBmcm9tIHRoZSBsYXN0IHNhdmVkIGRyeSBydW4nKVxuICAgIC5hbGxvd1Vua25vd25PcHRpb24odHJ1ZSlcbiAgICAuYWN0aW9uKChjd2QpID0+IHtcbiAgICAgIGlmICghY3dkKSByZXR1cm47XG4gICAgICBpZiAocGF0aC5pc0Fic29sdXRlKGN3ZCkgJiYgZnMuZXhpc3RzU3luYyhjd2QpKSB7XG4gICAgICAgIGRpciA9IGN3ZDtcbiAgICAgIH0gZWxzZSBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLnJlc29sdmUoZGlyLCBjd2QpKSkge1xuICAgICAgICBkaXIgPSBwYXRoLnJlc29sdmUoZGlyLCBjd2QpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnBhcnNlKHByb2Nlc3MuYXJndik7XG5cbiAgY29uc3QgcHVibGlzaE9wdHMgPSB7XG4gICAgZGlyLFxuICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgIGF1dGhUb2tlbjogcHJvZ3JhbS5hdXRoVG9rZW4sXG4gICAgdGFnOiBwcm9ncmFtLnRhZyxcbiAgICBkcnlSdW46IHByb2dyYW0uZHJ5UnVuLFxuICAgIGRyeVJ1blJlc3VtZTogcHJvZ3JhbS5mcm9tRHJ5UnVuLFxuICB9O1xuICBpZiAocHJvZ3JhbS50YXJnZXQpIHB1Ymxpc2hPcHRzLnB1Ymxpc2hUYXJnZXRzID0gcHJvZ3JhbS50YXJnZXQuc3BsaXQoJywnKTtcblxuICBwdWJsaXNoT3B0cy5tYWtlT3B0aW9ucyA9IGdldE1ha2VPcHRpb25zKCk7XG5cbiAgYXdhaXQgcHVibGlzaChwdWJsaXNoT3B0cyk7XG59KSgpO1xuIl19