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
      var handler, _handler, response, data;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0dXBQYWdlIiwiYWRkTWVldHVwSGFuZGxlciIsImVudGVyZWRNZWV0dXBEYXRhIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY29uc29sZSIsImxvZyIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImNsaWVudCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwicmVzdWx0IiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImZldGNoIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsInJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkI7QUFEdUIsV0FHUkMsZ0JBSFE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbVlBR3ZCLGtCQUFnQ0MsaUJBQWhDO0FBQUEsVUFDaUJDLE9BRGpCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzWUFDRSxpQkFBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQ01ELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BRHJCO0FBQUE7QUFBQTtBQUFBOztBQUVXQywrQkFGWCxHQUVrQkgsR0FBRyxDQUFDSSxJQUZ0QjtBQUdLQyxpQ0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFITDtBQUFBLGlDQUkwQkksV0FBVyxDQUFDQyxPQUFaLENBQ2xCLDhHQURrQixDQUoxQjs7QUFBQTtBQUlXQyxnQ0FKWDtBQVFTQyw0QkFSVCxHQVFjRCxNQUFNLENBQUNDLEVBQVAsRUFSZDtBQVVTQywyQ0FWVCxHQVU2QkQsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQVY3QjtBQUFBO0FBQUEsaUNBWXdCRCxpQkFBaUIsQ0FBQ0UsU0FBbEIsQ0FBNEJWLEtBQTVCLENBWnhCOztBQUFBO0FBWVNXLGdDQVpUO0FBY0dULGlDQUFPLENBQUNDLEdBQVIsQ0FBWVEsTUFBWjtBQUVBTCxnQ0FBTSxDQUFDTSxLQUFQO0FBRUFkLDZCQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxtQ0FBTyxFQUFFO0FBQVgsMkJBQXJCOztBQWxCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7O0FBQ2lCbkIscUJBRGpCO0FBQUE7QUFBQTs7QUFzQkVNLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVIsaUJBQVo7QUF0QkY7QUFBQSxxQkF1QnlCcUIsS0FBSyxDQUFDLGlCQUFELEVBQW9CO0FBQzlDakIsc0JBQU0sRUFBRSxNQURzQztBQUU5Q0Usb0JBQUksRUFBRWdCLElBQUksQ0FBQ0MsU0FBTCxDQUFldkIsaUJBQWYsQ0FGd0M7QUFHOUN3Qix1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFIcUMsZUFBcEIsQ0F2QjlCOztBQUFBO0FBdUJRQyxzQkF2QlI7QUFBQTtBQUFBLHFCQStCcUJBLFFBQVEsQ0FBQ04sSUFBVCxFQS9CckI7O0FBQUE7QUErQlFkLGtCQS9CUjtBQWlDRUUscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBRUFxQixvQkFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjs7QUFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIdUI7QUFBQTtBQUFBOztBQXlDdkIsc0JBQU8scUVBQUMseUVBQUQ7QUFBZSxlQUFXLEVBQUU1QjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7S0ExQ1FELGE7QUE0Q01BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ldy1tZWV0dXAuYjkwNGRhNDFhZjNmNmE5Y2YyYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG91ci1kb21haW4uY29tL25ldy1tZWV0dXBcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IE5ld01lZXR1cEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0nO1xuXG5mdW5jdGlvbiBOZXdNZWV0dXBQYWdlKCkge1xuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBhc3luYyBmdW5jdGlvbiBhZGRNZWV0dXBIYW5kbGVyKGVudGVyZWRNZWV0dXBEYXRhKSB7XG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgICAgICAgXCJtb25nb2RiK3NydjovL1p1cmllbDpYdkl1eEtEQVBydHJiYzh0QGNsdXN0ZXIwLjdsb3FhLm1vbmdvZGIubmV0L215Rmlyc3REYXRhYmFzZT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICAgICAgICAgICAgKTtcbiAgIFxuICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gICBcbiAgICAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcbiAgIFxuICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcbiAgIFxuICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICBcbiAgICAgICBjbGllbnQuY2xvc2UoKTtcbiAgIFxuICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ01lZXR1cCBpbnNlcnRlZCEnIH0pO1xuICAgICB9XG4gICB9XG4gICAgY29uc29sZS5sb2coZW50ZXJlZE1lZXR1cERhdGEpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbmV3LW1lZXR1cCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZW50ZXJlZE1lZXR1cERhdGEpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICByb3V0ZXIucHVzaCgnLycpO1xuICB9XG5cbiAgcmV0dXJuIDxOZXdNZWV0dXBGb3JtIG9uQWRkTWVldHVwPXthZGRNZWV0dXBIYW5kbGVyfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdNZWV0dXBQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=