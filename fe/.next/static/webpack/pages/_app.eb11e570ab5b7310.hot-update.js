"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/utils/getEnv.ts":
/*!*****************************!*\
  !*** ./src/utils/getEnv.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getChainIdFromEnv; },\n/* harmony export */   \"flipCoinAddress\": function() { return /* binding */ flipCoinAddress; },\n/* harmony export */   \"getApiEndpoint\": function() { return /* binding */ getApiEndpoint; },\n/* harmony export */   \"getExplorerUrl\": function() { return /* binding */ getExplorerUrl; },\n/* harmony export */   \"getRPC\": function() { return /* binding */ getRPC; }\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./src/types/index.ts\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\nfunction getChainIdFromEnv() {\n    var env = \"1001\";\n    if (!env) {\n        return 1001;\n    }\n    return parseInt(env);\n};\nvar getApiEndpoint = function() {\n    return process.env.NEXT_PUBLIC_API_ENDPOINT || \"\";\n};\nvar getRPC = function() {\n    if (getChainIdFromEnv() === _types__WEBPACK_IMPORTED_MODULE_0__.CHAIN_ID.MAINNET) return process.env.NEXT_PUBLIC_RPC_MAINNET;\n    return \"https://api.baobab.klaytn.net:8651\";\n};\nvar getExplorerUrl = function() {\n    return \"https://baobab.scope.klaytn.com/tx/\";\n};\nvar flipCoinAddress = function() {\n    return process.env.FLIPCOIN_ADDRESS || \"\";\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZ2V0RW52LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0M7QUFFckIsU0FBU0MsaUJBQWlCLEdBQVc7SUFDbEQsSUFBTUMsR0FBRyxHQUFHQyxNQUFnQztJQUM1QyxJQUFJLENBQUNELEdBQUcsRUFBRTtRQUNSLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxPQUFPRyxRQUFRLENBQUNILEdBQUcsQ0FBQyxDQUFDO0NBQ3RCO0FBRU0sSUFBTUksY0FBYyxHQUFHLFdBQWM7SUFDMUMsT0FBT0gsT0FBTyxDQUFDRCxHQUFHLENBQUNLLHdCQUF3QixJQUFJLEVBQUUsQ0FBQztDQUNuRCxDQUFDO0FBRUssSUFBTUMsTUFBTSxHQUFHLFdBQU07SUFDMUIsSUFBSVAsaUJBQWlCLEVBQUUsS0FBS0Qsb0RBQWdCLEVBQzFDLE9BQU9HLE9BQU8sQ0FBQ0QsR0FBRyxDQUFDUSx1QkFBdUIsQ0FBQztJQUM3QyxPQUFPUCxvQ0FBbUMsQ0FBQztDQUM1QyxDQUFDO0FBRUssSUFBTVMsY0FBYyxHQUFHLFdBQU07SUFDbEMsT0FBT1QscUNBQWdDLENBQUM7Q0FDekMsQ0FBQztBQUNLLElBQU1XLGVBQWUsR0FBRyxXQUFNO0lBQ25DLE9BQU9YLE9BQU8sQ0FBQ0QsR0FBRyxDQUFDYSxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7Q0FDM0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvZ2V0RW52LnRzPzlkODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ0hBSU5fSUQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2hhaW5JZEZyb21FbnYoKTogbnVtYmVyIHtcbiAgY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hBSU5fSUQ7XG4gIGlmICghZW52KSB7XG4gICAgcmV0dXJuIDEwMDE7XG4gIH1cbiAgcmV0dXJuIHBhcnNlSW50KGVudik7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRBcGlFbmRwb2ludCA9ICgpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UIHx8IFwiXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UlBDID0gKCkgPT4ge1xuICBpZiAoZ2V0Q2hhaW5JZEZyb21FbnYoKSA9PT0gQ0hBSU5fSUQuTUFJTk5FVClcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUlBDX01BSU5ORVQ7XG4gIHJldHVybiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SUENfVEVTVE5FVDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFeHBsb3JlclVybCA9ICgpID0+IHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VYUExPUkVSO1xufTtcbmV4cG9ydCBjb25zdCBmbGlwQ29pbkFkZHJlc3MgPSAoKSA9PiB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5GTElQQ09JTl9BRERSRVNTIHx8IFwiXCI7XG59O1xuIl0sIm5hbWVzIjpbIkNIQUlOX0lEIiwiZ2V0Q2hhaW5JZEZyb21FbnYiLCJlbnYiLCJwcm9jZXNzIiwiTkVYVF9QVUJMSUNfQ0hBSU5fSUQiLCJwYXJzZUludCIsImdldEFwaUVuZHBvaW50IiwiTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UIiwiZ2V0UlBDIiwiTUFJTk5FVCIsIk5FWFRfUFVCTElDX1JQQ19NQUlOTkVUIiwiTkVYVF9QVUJMSUNfUlBDX1RFU1RORVQiLCJnZXRFeHBsb3JlclVybCIsIk5FWFRfUFVCTElDX0VYUExPUkVSIiwiZmxpcENvaW5BZGRyZXNzIiwiRkxJUENPSU5fQUREUkVTUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/getEnv.ts\n");

/***/ })

});