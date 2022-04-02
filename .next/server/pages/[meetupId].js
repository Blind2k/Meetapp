module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ "./components/meetups/MeetupDetail.module.css");
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Blind2k\\Development\\Udemy\\Learn React-udemy\\316.Next.js\\NextJsBasicModal\\components\\meetups\\MeetupDetail.js";


const meetupDetail = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (meetupDetail);

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__C_8IT"
};


/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: default, getStaticPaths, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Blind2k\\Development\\Udemy\\Learn React-udemy\\316.Next.js\\NextJsBasicModal\\pages\\[meetupId]\\index.js";





const meetupId = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Meetup with meetapp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: props.meetupId.title,
        content: props.meetupId.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: props.meetupId.image,
      title: props.meetupId.title,
      address: props.meetupId.address,
      description: props.meetupId.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (meetupId); // GET THE PATH AKA URL

async function getStaticPaths() {
  try {
    const uri = "mongodb+srv://Zuriel:NgxSFumgpjuV5rb2@cluster0.7loqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__["MongoClient"].connect(uri);
    const database = client.db();
    const colectionDatabase = database.collection("meetups");
    const meetups = await colectionDatabase.find({}, {
      _id: 1
    }).toArray();
    client.close();
    return {
      fallback: true,
      //AKA "blocking". will not give 404
      paths: meetups.map(meetup => ({
        params: {
          meetupId: meetup._id.toString()
        }
      })) // [
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
} // GET THE PROPS FROM THE PATH

async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const uri = "mongodb+srv://Zuriel:NgxSFumgpjuV5rb2@cluster0.7loqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__["MongoClient"].connect(uri);
  const database = client.db();
  const colectionDatabase = database.collection("meetups");
  const selectedMeetups = await colectionDatabase.findOne({
    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_1__["ObjectId"])(meetupId)
  });
  return {
    props: {
      meetupId: {
        id: selectedMeetups._id.toString(),
        title: selectedMeetups.title,
        image: selectedMeetups.image,
        description: selectedMeetups.description
      }
    },
    revalidate: 100
  };
}

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJtZWV0dXBEZXRhaWwiLCJwcm9wcyIsImNsYXNzZXMiLCJkZXRhaWwiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJhZGRyZXNzIiwibWVldHVwSWQiLCJnZXRTdGF0aWNQYXRocyIsInVyaSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRhdGFiYXNlIiwiZGIiLCJjb2xlY3Rpb25EYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJtZWV0dXBzIiwiZmluZCIsIl9pZCIsInRvQXJyYXkiLCJjbG9zZSIsImZhbGxiYWNrIiwicGF0aHMiLCJtYXAiLCJtZWV0dXAiLCJwYXJhbXMiLCJ0b1N0cmluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInNlbGVjdGVkTWVldHVwcyIsImZpbmRPbmUiLCJPYmplY3RJZCIsImlkIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztR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LGVBQWUsQ0FBQzlCLEtBSGhCO0FBSVBDLG1CQUFXLEVBQUU2QixlQUFlLENBQUM3QjtBQUp0QjtBQUROLEtBREg7QUFTSmlDLGNBQVUsRUFBRTtBQVRSLEdBQVA7QUFXRixDOzs7Ozs7Ozs7OztBQ3hFRCxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9bbWVldHVwSWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3NcIlxuXG5jb25zdCBtZWV0dXBEZXRhaWwgPSAocHJvcHMpID0+IHtcbiAgIHJldHVybihcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxuICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLmRlc2NyaXB0aW9ufS8+XG4gICAgICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVldHVwRGV0YWlsOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iLCJpbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgbWVldHVwSWQgPSBwcm9wcyA9PiB7XG4gICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+TWVldHVwIHdpdGggbWVldGFwcDwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPXtwcm9wcy5tZWV0dXBJZC50aXRsZX0gY29udGVudD17cHJvcHMubWVldHVwSWQuZGVzY3JpcHRpb259IC8+XG4gICAgICAgICA8L0hlYWQ+XG4gICAgICAgICA8TWVldHVwRGV0YWlsIGltYWdlPXtwcm9wcy5tZWV0dXBJZC5pbWFnZX0gdGl0bGU9e3Byb3BzLm1lZXR1cElkLnRpdGxlfSBhZGRyZXNzPXtwcm9wcy5tZWV0dXBJZC5hZGRyZXNzfSBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwSWQuZGVzY3JpcHRpb259IC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lZXR1cElkO1xuXG4vLyBHRVQgVEhFIFBBVEggQUtBIFVSTFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVyaSA9IFwibW9uZ29kYitzcnY6Ly9adXJpZWw6Tmd4U0Z1bWdwanVWNXJiMkBjbHVzdGVyMC43bG9xYS5tb25nb2RiLm5ldC9teUZpcnN0RGF0YWJhc2U/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVyaSk7XG4gICAgICBjb25zdCBkYXRhYmFzZSA9IGNsaWVudC5kYigpO1xuICAgICAgY29uc3QgY29sZWN0aW9uRGF0YWJhc2UgPSBkYXRhYmFzZS5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcbiAgICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBjb2xlY3Rpb25EYXRhYmFzZS5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XG4gICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgIGZhbGxiYWNrOiB0cnVlLCAvL0FLQSBcImJsb2NraW5nXCIuIHdpbGwgbm90IGdpdmUgNDA0XG4gICAgICAgICBwYXRoczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7XG4gICAgICAgICAgICBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9LFxuICAgICAgICAgfSkpLFxuICAgXG4gICAgICAgICAvLyBbXG4gICAgICAgICAvLyAgICB7XG4gICAgICAgICAvLyAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgIC8vICAgICAgICAgIG1lZXR1cElkOiBcIm0xXCIsXG4gICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgLy8gICAgfSxcbiAgICAgICAgIC8vICAgIHtcbiAgICAgICAgIC8vICAgICAgIHBhcmFtczoge1xuICAgICAgICAgLy8gICAgICAgICAgbWVldHVwSWQ6IFwibTJcIixcbiAgICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgICAvLyAgICB9LFxuICAgICAgICAgLy8gXSxcbiAgICAgIH07XG4gICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgfVxufVxuLy8gR0VUIFRIRSBQUk9QUyBGUk9NIFRIRSBQQVRIXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcbiAgIGNvbnN0IHVyaSA9IFwibW9uZ29kYitzcnY6Ly9adXJpZWw6Tmd4U0Z1bWdwanVWNXJiMkBjbHVzdGVyMC43bG9xYS5tb25nb2RiLm5ldC9teUZpcnN0RGF0YWJhc2U/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XG4gICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVyaSk7XG4gICBjb25zdCBkYXRhYmFzZSA9IGNsaWVudC5kYigpO1xuICAgY29uc3QgY29sZWN0aW9uRGF0YWJhc2UgPSBkYXRhYmFzZS5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcbiAgIGNvbnN0IHNlbGVjdGVkTWVldHVwcyA9IGF3YWl0IGNvbGVjdGlvbkRhdGFiYXNlLmZpbmRPbmUoeyBfaWQ6IE9iamVjdElkKG1lZXR1cElkKSB9KTtcblxuICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgICBtZWV0dXBJZDoge1xuICAgICAgICAgICAgaWQ6IHNlbGVjdGVkTWVldHVwcy5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRpdGxlOiBzZWxlY3RlZE1lZXR1cHMudGl0bGUsXG4gICAgICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXBzLmltYWdlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwcy5kZXNjcmlwdGlvbixcbiAgICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcmV2YWxpZGF0ZTogMTAwLFxuICAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9