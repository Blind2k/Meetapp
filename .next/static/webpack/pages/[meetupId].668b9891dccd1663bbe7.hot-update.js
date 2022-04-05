webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Blind2k\\Development\\Udemy\\Learn React-udemy\\316.Next.js\\meetingapp\\pages\\[meetupId]\\index.js",
    _this = undefined;





var meetupId = function meetupId(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Meetup with meetapp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: props.meetupId.title,
        content: props.meetupId.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: props.meetupId.image,
      title: props.meetupId.title,
      address: props.meetupId.address,
      description: props.meetupId.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, _this);
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (meetupId); // GET THE PATH AKA URL

/*
// GET THE PATH AKA URL
export async function getStaticPaths() {
   try {
      const uri = "mongodb+srv://Zuriel:NgxSFumgpjuV5rb2@cluster0.7loqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
      const client = await MongoClient.connect(uri);
      const database = client.db();
      const colectionDatabase = database.collection("meetups");
      const meetups = await colectionDatabase.find({}, { _id: 1 }).toArray();
      client.close();
      
      return {
         fallback: "blocking", //AKA true. will not give 404
         paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() },
         })),
   
         // [
         //    {
         //       params: {
         //          meetupId: "m1",
         //       },
         //    },
         //    {
         //       params: {
         //          meetupId: "m2",
         //       },
         //    },
         // ],
      };
   } catch (error) {
      console.log(error);
   }
}
*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJtZWV0dXBJZCIsInByb3BzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUssRUFBSTtBQUN2QixzQkFDRyxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNHLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESCxlQUVHO0FBQU0sWUFBSSxFQUFFQSxLQUFLLENBQUNELFFBQU4sQ0FBZUUsS0FBM0I7QUFBa0MsZUFBTyxFQUFFRCxLQUFLLENBQUNELFFBQU4sQ0FBZUc7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILGVBS0cscUVBQUMsd0VBQUQ7QUFBYyxXQUFLLEVBQUVGLEtBQUssQ0FBQ0QsUUFBTixDQUFlSSxLQUFwQztBQUEyQyxXQUFLLEVBQUVILEtBQUssQ0FBQ0QsUUFBTixDQUFlRSxLQUFqRTtBQUF3RSxhQUFPLEVBQUVELEtBQUssQ0FBQ0QsUUFBTixDQUFlSyxPQUFoRztBQUF5RyxpQkFBVyxFQUFFSixLQUFLLENBQUNELFFBQU4sQ0FBZUc7QUFBckk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURIO0FBU0YsQ0FWRDs7O0FBWWVILHVFQUFmLEUsQ0FFQTs7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldHVwSWRdLjY2OGI5ODkxZGNjZDE2NjNiYmU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgbWVldHVwSWQgPSBwcm9wcyA9PiB7XG4gICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+TWVldHVwIHdpdGggbWVldGFwcDwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPXtwcm9wcy5tZWV0dXBJZC50aXRsZX0gY29udGVudD17cHJvcHMubWVldHVwSWQuZGVzY3JpcHRpb259IC8+XG4gICAgICAgICA8L0hlYWQ+XG4gICAgICAgICA8TWVldHVwRGV0YWlsIGltYWdlPXtwcm9wcy5tZWV0dXBJZC5pbWFnZX0gdGl0bGU9e3Byb3BzLm1lZXR1cElkLnRpdGxlfSBhZGRyZXNzPXtwcm9wcy5tZWV0dXBJZC5hZGRyZXNzfSBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwSWQuZGVzY3JpcHRpb259IC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lZXR1cElkO1xuXG4vLyBHRVQgVEhFIFBBVEggQUtBIFVSTFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dldC1tZWV0dXBzXCIpO1xuICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAgZmFsbGJhY2s6IFwiYmxvY2tpbmdcIiwgLy9BS0EgdHJ1ZS4gd2lsbCBub3QgZ2l2ZSA0MDRcbiAgICAgICAgIHBhdGhzOiBkYXRhMS5tYXAobWVldHVwID0+ICh7XG4gICAgICAgICAgICBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9LFxuICAgICAgICAgfSkpLFxuXG4gICAgICB9O1xuICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgIH1cbn1cbi8vIEdFVCBUSEUgUFJPUFMgRlJPTSBUSEUgUEFUSFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XG4gICBjb25zdCB1cmkgPSBcIm1vbmdvZGIrc3J2Oi8vWnVyaWVsOk5neFNGdW1ncGp1VjVyYjJAY2x1c3RlcjAuN2xvcWEubW9uZ29kYi5uZXQvbXlGaXJzdERhdGFiYXNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiO1xuICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCh1cmkpO1xuICAgY29uc3QgZGF0YWJhc2UgPSBjbGllbnQuZGIoKTtcbiAgIGNvbnN0IGNvbGVjdGlvbkRhdGFiYXNlID0gZGF0YWJhc2UuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XG4gICBjb25zdCBzZWxlY3RlZE1lZXR1cHMgPSBhd2FpdCBjb2xlY3Rpb25EYXRhYmFzZS5maW5kT25lKHsgX2lkOiBPYmplY3RJZChtZWV0dXBJZCkgfSk7XG5cbiAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICAgbWVldHVwSWQ6IHtcbiAgICAgICAgICAgIGlkOiBzZWxlY3RlZE1lZXR1cHMuX2lkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0dXBzLnRpdGxlLFxuICAgICAgICAgICAgaW1hZ2U6IHNlbGVjdGVkTWVldHVwcy5pbWFnZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZE1lZXR1cHMuZGVzY3JpcHRpb24sXG4gICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJldmFsaWRhdGU6IDEwMCxcbiAgIH07XG59XG5cbi8qXG4vLyBHRVQgVEhFIFBBVEggQUtBIFVSTFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVyaSA9IFwibW9uZ29kYitzcnY6Ly9adXJpZWw6Tmd4U0Z1bWdwanVWNXJiMkBjbHVzdGVyMC43bG9xYS5tb25nb2RiLm5ldC9teUZpcnN0RGF0YWJhc2U/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVyaSk7XG4gICAgICBjb25zdCBkYXRhYmFzZSA9IGNsaWVudC5kYigpO1xuICAgICAgY29uc3QgY29sZWN0aW9uRGF0YWJhc2UgPSBkYXRhYmFzZS5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcbiAgICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBjb2xlY3Rpb25EYXRhYmFzZS5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XG4gICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsIC8vQUtBIHRydWUuIHdpbGwgbm90IGdpdmUgNDA0XG4gICAgICAgICBwYXRoczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7XG4gICAgICAgICAgICBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9LFxuICAgICAgICAgfSkpLFxuICAgXG4gICAgICAgICAvLyBbXG4gICAgICAgICAvLyAgICB7XG4gICAgICAgICAvLyAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgIC8vICAgICAgICAgIG1lZXR1cElkOiBcIm0xXCIsXG4gICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgLy8gICAgfSxcbiAgICAgICAgIC8vICAgIHtcbiAgICAgICAgIC8vICAgICAgIHBhcmFtczoge1xuICAgICAgICAgLy8gICAgICAgICAgbWVldHVwSWQ6IFwibTJcIixcbiAgICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgICAvLyAgICB9LFxuICAgICAgICAgLy8gXSxcbiAgICAgIH07XG4gICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgfVxufVxuKi8iXSwic291cmNlUm9vdCI6IiJ9