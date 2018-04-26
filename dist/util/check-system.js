"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validPackageManagerVersion = validPackageManagerVersion;
exports.default = _default;

var _child_process = require("child_process");

var _debug = _interopRequireDefault(require("debug"));

var _semver = _interopRequireDefault(require("semver"));

var _yarnOrNpm = require("@electron-forge/core/dist/util/yarn-or-npm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

const d = (0, _debug.default)('electron-forge:check-system');

function checkGitExists() {
  return _checkGitExists.apply(this, arguments);
}

function _checkGitExists() {
  _checkGitExists = _asyncToGenerator(function* () {
    return new Promise(resolve => {
      (0, _child_process.exec)('git --version', err => {
        if (err) return resolve(false);
        resolve(true);
      });
    });
  });
  return _checkGitExists.apply(this, arguments);
}

function checkNodeVersion() {
  return _checkNodeVersion.apply(this, arguments);
}

function _checkNodeVersion() {
  _checkNodeVersion = _asyncToGenerator(function* () {
    return Promise.resolve(_semver.default.gt(process.versions.node, '6.0.0'));
  });
  return _checkNodeVersion.apply(this, arguments);
}

const NPM_WHITELISTED_VERSIONS = {
  all: '^3.0.0 || ^4.0.0 || ~5.1.0 || ~5.2.0 || >= 5.4.2',
  darwin: '>= 5.4.0',
  linux: '>= 5.4.0'
};
const YARN_WHITELISTED_VERSIONS = {
  all: '0.23.3 || 0.24.6 || >= 1.0.0',
  darwin: '0.27.5',
  linux: '0.27.5'
};

function validPackageManagerVersion(packageManager, version, whitelistedVersions, ora) {
  try {
    return _semver.default.satisfies(version, whitelistedVersions);
  } catch (e) {
    ora.warn(`Could not check ${packageManager} version "${version}", assuming incompatible`);
    d(`Exception while checking version: ${e}`);
    return false;
  }
}

function warnIfPackageManagerIsntAKnownGoodVersion(packageManager, version, whitelistedVersions, ora) {
  const osVersions = whitelistedVersions[process.platform];
  const versions = osVersions ? `${whitelistedVersions.all} || ${osVersions}` : whitelistedVersions.all;
  const versionString = version.toString();

  if (!validPackageManagerVersion(packageManager, versionString, versions, ora)) {
    ora.warn(`You are using ${packageManager}, but not a known good version.\n` + `The known versions that work with Electron Forge are: ${versions}`);
  }
}

function checkPackageManagerVersion(_x) {
  return _checkPackageManagerVersion.apply(this, arguments);
}

function _checkPackageManagerVersion() {
  _checkPackageManagerVersion = _asyncToGenerator(function* (ora) {
    return (0, _yarnOrNpm.yarnOrNpmSpawn)(['--version']).then(version => {
      if ((0, _yarnOrNpm.hasYarn)()) {
        warnIfPackageManagerIsntAKnownGoodVersion('Yarn', version, YARN_WHITELISTED_VERSIONS, ora);
      } else {
        warnIfPackageManagerIsntAKnownGoodVersion('NPM', version, NPM_WHITELISTED_VERSIONS, ora);
      }

      return true;
    });
  });
  return _checkPackageManagerVersion.apply(this, arguments);
}

function _default(_x2) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator(function* (ora) {
    return (yield Promise.all([checkGitExists(ora), checkNodeVersion(ora), checkPackageManagerVersion(ora)])).every(check => check);
  });
  return _ref.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2NoZWNrLXN5c3RlbS5qcyJdLCJuYW1lcyI6WyJkIiwiY2hlY2tHaXRFeGlzdHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImVyciIsImNoZWNrTm9kZVZlcnNpb24iLCJndCIsInByb2Nlc3MiLCJ2ZXJzaW9ucyIsIm5vZGUiLCJOUE1fV0hJVEVMSVNURURfVkVSU0lPTlMiLCJhbGwiLCJkYXJ3aW4iLCJsaW51eCIsIllBUk5fV0hJVEVMSVNURURfVkVSU0lPTlMiLCJ2YWxpZFBhY2thZ2VNYW5hZ2VyVmVyc2lvbiIsInBhY2thZ2VNYW5hZ2VyIiwidmVyc2lvbiIsIndoaXRlbGlzdGVkVmVyc2lvbnMiLCJvcmEiLCJzYXRpc2ZpZXMiLCJlIiwid2FybiIsIndhcm5JZlBhY2thZ2VNYW5hZ2VySXNudEFLbm93bkdvb2RWZXJzaW9uIiwib3NWZXJzaW9ucyIsInBsYXRmb3JtIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwiY2hlY2tQYWNrYWdlTWFuYWdlclZlcnNpb24iLCJ0aGVuIiwiZXZlcnkiLCJjaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTUEsSUFBSSxvQkFBTSw2QkFBTixDQUFWOztTQUVlQyxjOzs7OztzQ0FBZixhQUFnQztBQUM5QixXQUFPLElBQUlDLE9BQUosQ0FBYUMsT0FBRCxJQUFhO0FBQzlCLCtCQUFLLGVBQUwsRUFBdUJDLEdBQUQsSUFBUztBQUM3QixZQUFJQSxHQUFKLEVBQVMsT0FBT0QsUUFBUSxLQUFSLENBQVA7QUFDVEEsZ0JBQVEsSUFBUjtBQUNELE9BSEQ7QUFJRCxLQUxNLENBQVA7QUFNRCxHOzs7O1NBRWNFLGdCOzs7Ozt3Q0FBZixhQUFrQztBQUNoQyxXQUFPSCxRQUFRQyxPQUFSLENBQWdCLGdCQUFPRyxFQUFQLENBQVVDLFFBQVFDLFFBQVIsQ0FBaUJDLElBQTNCLEVBQWlDLE9BQWpDLENBQWhCLENBQVA7QUFDRCxHOzs7O0FBRUQsTUFBTUMsMkJBQTJCO0FBQy9CQyxPQUFLLGtEQUQwQjtBQUUvQkMsVUFBUSxVQUZ1QjtBQUcvQkMsU0FBTztBQUh3QixDQUFqQztBQUtBLE1BQU1DLDRCQUE0QjtBQUNoQ0gsT0FBSyw4QkFEMkI7QUFFaENDLFVBQVEsUUFGd0I7QUFHaENDLFNBQU87QUFIeUIsQ0FBbEM7O0FBTU8sU0FBU0UsMEJBQVQsQ0FBb0NDLGNBQXBDLEVBQW9EQyxPQUFwRCxFQUE2REMsbUJBQTdELEVBQWtGQyxHQUFsRixFQUF1RjtBQUM1RixNQUFJO0FBQ0YsV0FBTyxnQkFBT0MsU0FBUCxDQUFpQkgsT0FBakIsRUFBMEJDLG1CQUExQixDQUFQO0FBQ0QsR0FGRCxDQUVFLE9BQU9HLENBQVAsRUFBVTtBQUNWRixRQUFJRyxJQUFKLENBQVUsbUJBQWtCTixjQUFlLGFBQVlDLE9BQVEsMEJBQS9EO0FBQ0FqQixNQUFHLHFDQUFvQ3FCLENBQUUsRUFBekM7QUFDQSxXQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQVNFLHlDQUFULENBQW1EUCxjQUFuRCxFQUFtRUMsT0FBbkUsRUFBNEVDLG1CQUE1RSxFQUFpR0MsR0FBakcsRUFBc0c7QUFDcEcsUUFBTUssYUFBYU4sb0JBQW9CWCxRQUFRa0IsUUFBNUIsQ0FBbkI7QUFDQSxRQUFNakIsV0FBV2dCLGFBQWMsR0FBRU4sb0JBQW9CUCxHQUFJLE9BQU1hLFVBQVcsRUFBekQsR0FBNkROLG9CQUFvQlAsR0FBbEc7QUFDQSxRQUFNZSxnQkFBZ0JULFFBQVFVLFFBQVIsRUFBdEI7O0FBQ0EsTUFBSSxDQUFDWiwyQkFBMkJDLGNBQTNCLEVBQTJDVSxhQUEzQyxFQUEwRGxCLFFBQTFELEVBQW9FVyxHQUFwRSxDQUFMLEVBQStFO0FBQzdFQSxRQUFJRyxJQUFKLENBQ0csaUJBQWdCTixjQUFlLG1DQUFoQyxHQUNDLHlEQUF3RFIsUUFBUyxFQUZwRTtBQUlEO0FBQ0Y7O1NBRWNvQiwwQjs7Ozs7a0RBQWYsV0FBMENULEdBQTFDLEVBQStDO0FBQzdDLFdBQU8sK0JBQWUsQ0FBQyxXQUFELENBQWYsRUFDSlUsSUFESSxDQUNFWixPQUFELElBQWE7QUFDakIsVUFBSSx5QkFBSixFQUFlO0FBQ2JNLGtEQUEwQyxNQUExQyxFQUFrRE4sT0FBbEQsRUFBMkRILHlCQUEzRCxFQUFzRkssR0FBdEY7QUFDRCxPQUZELE1BRU87QUFDTEksa0RBQTBDLEtBQTFDLEVBQWlETixPQUFqRCxFQUEwRFAsd0JBQTFELEVBQW9GUyxHQUFwRjtBQUNEOztBQUVELGFBQU8sSUFBUDtBQUNELEtBVEksQ0FBUDtBQVVELEc7Ozs7Ozs7OzsyQkFFYyxXQUFnQkEsR0FBaEIsRUFBcUI7QUFDbEMsV0FBTyxPQUFPakIsUUFBUVMsR0FBUixDQUFZLENBQUNWLGVBQWVrQixHQUFmLENBQUQsRUFBc0JkLGlCQUFpQmMsR0FBakIsQ0FBdEIsRUFBNkNTLDJCQUEyQlQsR0FBM0IsQ0FBN0MsQ0FBWixDQUFQLEVBQ0pXLEtBREksQ0FDRUMsU0FBU0EsS0FEWCxDQUFQO0FBRUQsRyIsImZpbGUiOiJjaGVjay1zeXN0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInO1xuXG5pbXBvcnQgeyBoYXNZYXJuLCB5YXJuT3JOcG1TcGF3biB9IGZyb20gJ0BlbGVjdHJvbi1mb3JnZS9jb3JlL2Rpc3QvdXRpbC95YXJuLW9yLW5wbSc7XG5cbmNvbnN0IGQgPSBkZWJ1ZygnZWxlY3Ryb24tZm9yZ2U6Y2hlY2stc3lzdGVtJyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrR2l0RXhpc3RzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBleGVjKCdnaXQgLS12ZXJzaW9uJywgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrTm9kZVZlcnNpb24oKSB7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VtdmVyLmd0KHByb2Nlc3MudmVyc2lvbnMubm9kZSwgJzYuMC4wJykpO1xufVxuXG5jb25zdCBOUE1fV0hJVEVMSVNURURfVkVSU0lPTlMgPSB7XG4gIGFsbDogJ14zLjAuMCB8fCBeNC4wLjAgfHwgfjUuMS4wIHx8IH41LjIuMCB8fCA+PSA1LjQuMicsXG4gIGRhcndpbjogJz49IDUuNC4wJyxcbiAgbGludXg6ICc+PSA1LjQuMCcsXG59O1xuY29uc3QgWUFSTl9XSElURUxJU1RFRF9WRVJTSU9OUyA9IHtcbiAgYWxsOiAnMC4yMy4zIHx8IDAuMjQuNiB8fCA+PSAxLjAuMCcsXG4gIGRhcndpbjogJzAuMjcuNScsXG4gIGxpbnV4OiAnMC4yNy41Jyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZFBhY2thZ2VNYW5hZ2VyVmVyc2lvbihwYWNrYWdlTWFuYWdlciwgdmVyc2lvbiwgd2hpdGVsaXN0ZWRWZXJzaW9ucywgb3JhKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHNlbXZlci5zYXRpc2ZpZXModmVyc2lvbiwgd2hpdGVsaXN0ZWRWZXJzaW9ucyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBvcmEud2FybihgQ291bGQgbm90IGNoZWNrICR7cGFja2FnZU1hbmFnZXJ9IHZlcnNpb24gXCIke3ZlcnNpb259XCIsIGFzc3VtaW5nIGluY29tcGF0aWJsZWApO1xuICAgIGQoYEV4Y2VwdGlvbiB3aGlsZSBjaGVja2luZyB2ZXJzaW9uOiAke2V9YCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlBhY2thZ2VNYW5hZ2VySXNudEFLbm93bkdvb2RWZXJzaW9uKHBhY2thZ2VNYW5hZ2VyLCB2ZXJzaW9uLCB3aGl0ZWxpc3RlZFZlcnNpb25zLCBvcmEpIHtcbiAgY29uc3Qgb3NWZXJzaW9ucyA9IHdoaXRlbGlzdGVkVmVyc2lvbnNbcHJvY2Vzcy5wbGF0Zm9ybV07XG4gIGNvbnN0IHZlcnNpb25zID0gb3NWZXJzaW9ucyA/IGAke3doaXRlbGlzdGVkVmVyc2lvbnMuYWxsfSB8fCAke29zVmVyc2lvbnN9YCA6IHdoaXRlbGlzdGVkVmVyc2lvbnMuYWxsO1xuICBjb25zdCB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpO1xuICBpZiAoIXZhbGlkUGFja2FnZU1hbmFnZXJWZXJzaW9uKHBhY2thZ2VNYW5hZ2VyLCB2ZXJzaW9uU3RyaW5nLCB2ZXJzaW9ucywgb3JhKSkge1xuICAgIG9yYS53YXJuKFxuICAgICAgYFlvdSBhcmUgdXNpbmcgJHtwYWNrYWdlTWFuYWdlcn0sIGJ1dCBub3QgYSBrbm93biBnb29kIHZlcnNpb24uXFxuYCArXG4gICAgICBgVGhlIGtub3duIHZlcnNpb25zIHRoYXQgd29yayB3aXRoIEVsZWN0cm9uIEZvcmdlIGFyZTogJHt2ZXJzaW9uc31gXG4gICAgKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja1BhY2thZ2VNYW5hZ2VyVmVyc2lvbihvcmEpIHtcbiAgcmV0dXJuIHlhcm5Pck5wbVNwYXduKFsnLS12ZXJzaW9uJ10pXG4gICAgLnRoZW4oKHZlcnNpb24pID0+IHtcbiAgICAgIGlmIChoYXNZYXJuKCkpIHtcbiAgICAgICAgd2FybklmUGFja2FnZU1hbmFnZXJJc250QUtub3duR29vZFZlcnNpb24oJ1lhcm4nLCB2ZXJzaW9uLCBZQVJOX1dISVRFTElTVEVEX1ZFUlNJT05TLCBvcmEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybklmUGFja2FnZU1hbmFnZXJJc250QUtub3duR29vZFZlcnNpb24oJ05QTScsIHZlcnNpb24sIE5QTV9XSElURUxJU1RFRF9WRVJTSU9OUywgb3JhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChvcmEpIHtcbiAgcmV0dXJuIChhd2FpdCBQcm9taXNlLmFsbChbY2hlY2tHaXRFeGlzdHMob3JhKSwgY2hlY2tOb2RlVmVyc2lvbihvcmEpLCBjaGVja1BhY2thZ2VNYW5hZ2VyVmVyc2lvbihvcmEpXSkpXG4gICAgLmV2ZXJ5KGNoZWNrID0+IGNoZWNrKTtcbn1cbiJdfQ==