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
exports.id = "pages/api/leaderboard";
exports.ids = ["pages/api/leaderboard"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/leaderboard.ts":
/*!**************************************!*\
  !*** ./src/pages/api/leaderboard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"json\");\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(jsonDirectory + \"/data.json\", \"utf8\");\n    res.status(200).json(JSON.parse(fileContents));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xlYWRlcmJvYXJkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ29DO0FBQ1o7QUFjVCxlQUFlRyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBOEIsRUFDOUI7SUFDQSxNQUFNQyxhQUFhLEdBQUdKLGdEQUFTLENBQUNNLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDO0lBQ3RELE1BQU1DLFlBQVksR0FBRyxNQUFNVCxpREFBVyxDQUFDSyxhQUFhLEdBQUcsWUFBWSxFQUFFLE1BQU0sQ0FBQztJQUM1RUQsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNMLFlBQVksQ0FBQyxDQUFDO0NBQy9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVmZXJyYWwtZnJpZW5kLWZlLy4vc3JjL3BhZ2VzL2FwaS9sZWFkZXJib2FyZC50cz82MGMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuXG50eXBlIFBsYXllciA9IHtcbiAgcGxheWVyOiBzdHJpbmc7XG4gIGJldDogbnVtYmVyO1xuICBiZXRBbW91bnQ6IG51bWJlcjtcbiAgcmVxdWVzdElkOiBudW1iZXI7XG4gIHJlc3VsdDogbnVtYmVyO1xuICB0cmFuc2FjdGlvbl9pZD86IHN0cmluZztcbiAgcGxheUF0OiBudW1iZXJcbiAgaXNXaW46IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFBsYXllcltdPlxuKSB7XG4gIGNvbnN0IGpzb25EaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2pzb24nKTtcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgZnMucmVhZEZpbGUoanNvbkRpcmVjdG9yeSArICcvZGF0YS5qc29uJywgJ3V0ZjgnKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oSlNPTi5wYXJzZShmaWxlQ29udGVudHMpKVxufVxuIl0sIm5hbWVzIjpbInByb21pc2VzIiwiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImpzb25EaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVDb250ZW50cyIsInJlYWRGaWxlIiwic3RhdHVzIiwianNvbiIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/leaderboard.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/leaderboard.ts"));
module.exports = __webpack_exports__;

})();