"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps() {\n        const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://random.dog/woof.json?filter=mp4,webm\");\n        const data = await res.json();\n        return {\n            imageURL: data.url\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"homepage-wrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Welcome to Protest Plots!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"zipcode-input\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Enter your zipcode: \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                            lineNumber: 21,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            for: \"zipcode\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                            lineNumber: 22,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"zipcode\",\n                            name: \"zipcode\",\n                            maxLength: \"5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                    lineNumber: 20,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: \"about-us\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"What is Protest Plots?\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"ProtestPlots is a centralized hub of information for people to gather information about protests nearby.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\jonat\\\\ProtestPlots\\\\pages\\\\index.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDRjtBQUl0QyxpRUFBZSxjQUFjQyw0Q0FBU0E7SUFDbEMsYUFBYUUsa0JBQWtCO1FBQzNCLE1BQU1DLE1BQU0sTUFBTUYseURBQUtBLENBQUM7UUFDeEIsTUFBTUcsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBRTNCLE9BQU87WUFDSEMsVUFBVUYsS0FBS0csR0FBRztRQUN0QjtJQUNKO0lBQ0FDLFNBQVU7UUFDTixxQkFFSSw4REFBQ0M7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0EsOERBQUNGO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0U7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7NEJBQU1DLEtBQUk7Ozs7OztzQ0FDZiw4REFBQ0M7NEJBQU1DLE1BQUs7NEJBQU9DLElBQUc7NEJBQVVDLE1BQUs7NEJBQVVDLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFHN0QsOERBQUNDO29CQUFRVixXQUFVOztzQ0FDZiw4REFBQ1c7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUluQjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10ZXN0Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9yYW5kb20uZG9nL3dvb2YuanNvbj9maWx0ZXI9bXA0LHdlYm1cIilcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbWFnZVVSTDogZGF0YS51cmxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlLXdyYXBwZXJcIj4gIFxyXG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gUHJvdGVzdCBQbG90cyE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiemlwY29kZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RW50ZXIgeW91ciB6aXBjb2RlOiA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiemlwY29kZVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ6aXBjb2RlXCIgbmFtZT1cInppcGNvZGVcIiBtYXhMZW5ndGg9XCI1XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImFib3V0LXVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPldoYXQgaXMgUHJvdGVzdCBQbG90cz88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlByb3Rlc3RQbG90cyBpcyBhIGNlbnRyYWxpemVkIGh1YiBvZiBpbmZvcm1hdGlvbiBmb3IgcGVvcGxlIHRvIGdhdGhlciBpbmZvcm1hdGlvbiBhYm91dCBwcm90ZXN0cyBuZWFyYnkuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJmZXRjaCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImRhdGEiLCJqc29uIiwiaW1hZ2VVUkwiLCJ1cmwiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJtYXhMZW5ndGgiLCJhcnRpY2xlIiwiaDMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();