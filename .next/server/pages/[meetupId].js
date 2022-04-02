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
  const uri = "mongodb+srv://Zuriel:NgxSFumgpjuV5rb2@cluster0.7loqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__["MongoClient"].connect(uri);
  const database = client.db();
  const colectionDatabase = database.collection("meetups");
  const meetups = await colectionDatabase.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    fallback: "blocking",
    //AKA true. will not give 404
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJtZWV0dXBEZXRhaWwiLCJwcm9wcyIsImNsYXNzZXMiLCJkZXRhaWwiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJhZGRyZXNzIiwibWVldHVwSWQiLCJnZXRTdGF0aWNQYXRocyIsInVyaSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRhdGFiYXNlIiwiZGIiLCJjb2xlY3Rpb25EYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJtZWV0dXBzIiwiZmluZCIsIl9pZCIsInRvQXJyYXkiLCJjbG9zZSIsImZhbGxiYWNrIiwicGF0aHMiLCJtYXAiLCJtZWV0dXAiLCJwYXJhbXMiLCJ0b1N0cmluZyIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInNlbGVjdGVkTWVldHVwcyIsImZpbmRPbmUiLCJPYmplY3RJZCIsImlkIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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Ozs7QUNwRUQsb0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvW21lZXR1cElkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01lZXR1cERldGFpbC5tb2R1bGUuY3NzXCJcblxuY29uc3QgbWVldHVwRGV0YWlsID0gKHByb3BzKSA9PiB7XG4gICByZXR1cm4oXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cbiAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy5kZXNjcmlwdGlvbn0vPlxuICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgPGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lZXR1cERldGFpbDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkZXRhaWxcIjogXCJNZWV0dXBEZXRhaWxfZGV0YWlsX19DXzhJVFwiXG59O1xuIiwiaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IG1lZXR1cElkID0gcHJvcHMgPT4ge1xuICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPk1lZXR1cCB3aXRoIG1lZXRhcHA8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT17cHJvcHMubWVldHVwSWQudGl0bGV9IGNvbnRlbnQ9e3Byb3BzLm1lZXR1cElkLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgPE1lZXR1cERldGFpbCBpbWFnZT17cHJvcHMubWVldHVwSWQuaW1hZ2V9IHRpdGxlPXtwcm9wcy5tZWV0dXBJZC50aXRsZX0gYWRkcmVzcz17cHJvcHMubWVldHVwSWQuYWRkcmVzc30gZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cElkLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZWV0dXBJZDtcblxuLy8gR0VUIFRIRSBQQVRIIEFLQSBVUkxcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgIGNvbnN0IHVyaSA9IFwibW9uZ29kYitzcnY6Ly9adXJpZWw6Tmd4U0Z1bWdwanVWNXJiMkBjbHVzdGVyMC43bG9xYS5tb25nb2RiLm5ldC9teUZpcnN0RGF0YWJhc2U/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XG4gICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVyaSk7XG4gICBjb25zdCBkYXRhYmFzZSA9IGNsaWVudC5kYigpO1xuICAgY29uc3QgY29sZWN0aW9uRGF0YWJhc2UgPSBkYXRhYmFzZS5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcbiAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBjb2xlY3Rpb25EYXRhYmFzZS5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XG5cbiAgIGNsaWVudC5jbG9zZSgpO1xuICAgcmV0dXJuIHtcbiAgICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsIC8vQUtBIHRydWUuIHdpbGwgbm90IGdpdmUgNDA0XG4gICAgICBwYXRoczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7XG4gICAgICAgICBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9LFxuICAgICAgfSkpLFxuXG4gICAgICAvLyBbXG4gICAgICAvLyAgICB7XG4gICAgICAvLyAgICAgICBwYXJhbXM6IHtcbiAgICAgIC8vICAgICAgICAgIG1lZXR1cElkOiBcIm0xXCIsXG4gICAgICAvLyAgICAgICB9LFxuICAgICAgLy8gICAgfSxcbiAgICAgIC8vICAgIHtcbiAgICAgIC8vICAgICAgIHBhcmFtczoge1xuICAgICAgLy8gICAgICAgICAgbWVldHVwSWQ6IFwibTJcIixcbiAgICAgIC8vICAgICAgIH0sXG4gICAgICAvLyAgICB9LFxuICAgICAgLy8gXSxcbiAgIH07XG59XG4vLyBHRVQgVEhFIFBST1BTIEZST00gVEhFIFBBVEhcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xuICAgY29uc3QgdXJpID0gXCJtb25nb2RiK3NydjovL1p1cmllbDpOZ3hTRnVtZ3BqdVY1cmIyQGNsdXN0ZXIwLjdsb3FhLm1vbmdvZGIubmV0L215Rmlyc3REYXRhYmFzZT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIjtcbiAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJpKTtcbiAgIGNvbnN0IGRhdGFiYXNlID0gY2xpZW50LmRiKCk7XG4gICBjb25zdCBjb2xlY3Rpb25EYXRhYmFzZSA9IGRhdGFiYXNlLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xuICAgY29uc3Qgc2VsZWN0ZWRNZWV0dXBzID0gYXdhaXQgY29sZWN0aW9uRGF0YWJhc2UuZmluZE9uZSh7IF9pZDogT2JqZWN0SWQobWVldHVwSWQpIH0pO1xuXG4gICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgIG1lZXR1cElkOiB7XG4gICAgICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXBzLl9pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgdGl0bGU6IHNlbGVjdGVkTWVldHVwcy50aXRsZSxcbiAgICAgICAgICAgIGltYWdlOiBzZWxlY3RlZE1lZXR1cHMuaW1hZ2UsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRNZWV0dXBzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByZXZhbGlkYXRlOiAxMDAsXG4gICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=