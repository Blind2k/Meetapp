webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Blind2k_Development_Udemy_Learn_React_udemy_316_Next_js_NextJsBasicModal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Blind2k_Development_Udemy_Learn_React_udemy_316_Next_js_NextJsBasicModal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Blind2k_Development_Udemy_Learn_React_udemy_316_Next_js_NextJsBasicModal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Blind2k_Development_Udemy_Learn_React_udemy_316_Next_js_NextJsBasicModal_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");



var _jsxFileName = "C:\\Users\\Blind2k\\Development\\Udemy\\Learn React-udemy\\316.Next.js\\NextJsBasicModal\\pages\\new-meetup\\index.js";
// our-domain.com/new-meetup



function NewMeetupPage() {
  // const router = useRouter();
  function addMeetupHandler(_x) {
    return _addMeetupHandler.apply(this, arguments);
  }

  function _addMeetupHandler() {
    _addMeetupHandler = Object(C_Users_Blind2k_Development_Udemy_Learn_React_udemy_316_Next_js_NextJsBasicModal_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Blind2k_Development_Udemy_Learn_React_udemy_316_Next_js_NextJsBasicModal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(enteredMeetupData) {
      var response, handler, _handler, data;

      return C_Users_Blind2k_Development_Udemy_Learn_React_udemy_316_Next_js_NextJsBasicModal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _handler = function _handler3() {
                _handler = Object(C_Users_Blind2k_Development_Udemy_Learn_React_udemy_316_Next_js_NextJsBasicModal_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Blind2k_Development_Udemy_Learn_React_udemy_316_Next_js_NextJsBasicModal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
                  var _data, client, db, meetupsCollection, result;

                  return C_Users_Blind2k_Development_Udemy_Learn_React_udemy_316_Next_js_NextJsBasicModal_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!(req.method === 'POST')) {
                            _context.next = 14;
                            break;
                          }

                          _data = req.body;
                          console.log(_data);
                          _context.next = 5;
                          return MongoClient.connect("mongodb+srv://Zuriel:XvIuxKDAPrtrbc8t@cluster0.7loqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

                        case 5:
                          client = _context.sent;
                          db = client.db();
                          meetupsCollection = db.collection('meetups');
                          _context.next = 10;
                          return meetupsCollection.insertOne(_data);

                        case 10:
                          result = _context.sent;
                          console.log(result);
                          client.close();
                          res.status(201).json({
                            message: 'Meetup inserted!'
                          });

                        case 14:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));
                return _handler.apply(this, arguments);
              };

              handler = function _handler2(_x2, _x3) {
                return _handler.apply(this, arguments);
              };

              console.log(enteredMeetupData);
              _context2.next = 5;
              return fetch('/api/new-meetup', {
                method: 'POST',
                body: JSON.stringify(enteredMeetupData),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response.json();

            case 8:
              data = _context2.sent;
              console.log(data);
              router.push('/');

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _addMeetupHandler.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onAddMeetup: addMeetupHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 10
  }, this);
}

_c = NewMeetupPage;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetupPage);

var _c;

$RefreshReg$(_c, "NewMeetupPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0dXBQYWdlIiwiYWRkTWVldHVwSGFuZGxlciIsImVudGVyZWRNZWV0dXBEYXRhIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY29uc29sZSIsImxvZyIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImNsaWVudCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwicmVzdWx0IiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImZldGNoIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsInJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkI7QUFEdUIsV0FHUkMsZ0JBSFE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbVlBR3ZCLGtCQUFnQ0MsaUJBQWhDO0FBQUEsb0JBVWlCQyxPQVZqQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc1lBVUUsaUJBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUNNRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQURyQjtBQUFBO0FBQUE7QUFBQTs7QUFFV0MsK0JBRlgsR0FFa0JILEdBQUcsQ0FBQ0ksSUFGdEI7QUFHS0MsaUNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBSEw7QUFBQSxpQ0FJMEJJLFdBQVcsQ0FBQ0MsT0FBWixDQUNsQiw4R0FEa0IsQ0FKMUI7O0FBQUE7QUFJV0MsZ0NBSlg7QUFRU0MsNEJBUlQsR0FRY0QsTUFBTSxDQUFDQyxFQUFQLEVBUmQ7QUFVU0MsMkNBVlQsR0FVNkJELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FWN0I7QUFBQTtBQUFBLGlDQVl3QkQsaUJBQWlCLENBQUNFLFNBQWxCLENBQTRCVixLQUE1QixDQVp4Qjs7QUFBQTtBQVlTVyxnQ0FaVDtBQWNHVCxpQ0FBTyxDQUFDQyxHQUFSLENBQVlRLE1BQVo7QUFFQUwsZ0NBQU0sQ0FBQ00sS0FBUDtBQUVBZCw2QkFBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsbUNBQU8sRUFBRTtBQUFYLDJCQUFyQjs7QUFsQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQTtBQUFBOztBQVVpQm5CLHFCQVZqQjtBQUFBO0FBQUE7O0FBRUVNLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVIsaUJBQVo7QUFGRjtBQUFBLHFCQUd5QnFCLEtBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUM5Q2pCLHNCQUFNLEVBQUUsTUFEc0M7QUFFOUNFLG9CQUFJLEVBQUVnQixJQUFJLENBQUNDLFNBQUwsQ0FBZXZCLGlCQUFmLENBRndDO0FBRzlDd0IsdUJBQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURUO0FBSHFDLGVBQXBCLENBSDlCOztBQUFBO0FBR1FDLHNCQUhSO0FBQUE7QUFBQSxxQkErQnFCQSxRQUFRLENBQUNOLElBQVQsRUEvQnJCOztBQUFBO0FBK0JRZCxrQkEvQlI7QUFpQ0VFLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUVBcUIsb0JBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7O0FBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSHVCO0FBQUE7QUFBQTs7QUF5Q3ZCLHNCQUFPLHFFQUFDLHlFQUFEO0FBQWUsZUFBVyxFQUFFNUI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0tBMUNRRCxhO0FBNENNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXctbWVldHVwLjZlMWI1NGRhMmMyZWJiMzdmMjA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBvdXItZG9tYWluLmNvbS9uZXctbWVldHVwXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBOZXdNZWV0dXBGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9OZXdNZWV0dXBGb3JtJztcblxuZnVuY3Rpb24gTmV3TWVldHVwUGFnZSgpIHtcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkTWVldHVwSGFuZGxlcihlbnRlcmVkTWVldHVwRGF0YSkge1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGVudGVyZWRNZWV0dXBEYXRhKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL25ldy1tZWV0dXAnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGVyZWRNZWV0dXBEYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAgICAgICAgIFwibW9uZ29kYitzcnY6Ly9adXJpZWw6WHZJdXhLREFQcnRyYmM4dEBjbHVzdGVyMC43bG9xYS5tb25nb2RiLm5ldC9teUZpcnN0RGF0YWJhc2U/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgICAgICAgICAgICk7XG4gICBcbiAgICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICAgXG4gICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG4gICBcbiAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XG4gICBcbiAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgXG4gICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICBcbiAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdNZWV0dXAgaW5zZXJ0ZWQhJyB9KTtcbiAgICAgfVxuICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gIH1cblxuICByZXR1cm4gPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e2FkZE1lZXR1cEhhbmRsZXJ9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==