"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AuthContext */ \"./src/context/AuthContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Layout(param) {\n    let { children  } = param;\n    _s();\n    const { isAuthenticated , user , logout  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLogout = ()=>{\n        logout();\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-primary shadow-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center h-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                className: \"text-2xl font-bold text-white hover:text-accent transition-colors\",\n                                children: \"Blog Management\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-4\",\n                                children: isAuthenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: [\n                                                \"Welcome, \",\n                                                user === null || user === void 0 ? void 0 : user.username,\n                                                \"!\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/dashboard\",\n                                            className: \"px-4 py-2 rounded-lg bg-secondary text-primary hover:bg-accent transition-all duration-200 font-medium\",\n                                            children: \"Dashboard\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleLogout,\n                                            className: \"px-4 py-2 rounded-lg bg-highlight text-white hover:bg-opacity-90 transition-all duration-200\",\n                                            children: \"Logout\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/login\",\n                                            className: \"px-4 py-2 rounded-lg bg-secondary text-primary hover:bg-accent transition-all duration-200 font-medium\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/register\",\n                                            className: \"px-4 py-2 rounded-lg bg-highlight text-white hover:bg-opacity-90 transition-all duration-200\",\n                                            children: \"Register\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow bg-background\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-primary mt-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white\",\n                                children: [\n                                    \"\\xa9 \",\n                                    new Date().getFullYear(),\n                                    \" Blog Management. All rights reserved.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/about\",\n                                        className: \"text-white hover:text-accent transition-colors\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/privacy\",\n                                        className: \"text-white hover:text-accent transition-colors\",\n                                        children: \"Privacy\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/terms\",\n                                        className: \"text-white hover:text-accent transition-colors\",\n                                        children: \"Terms\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\components\\\\Layout.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"CyCfrtkfKmOgKGqxt+u5/KKx0bY=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDbkI7QUFDVztBQUV6QixTQUFTRyxPQUFPLEtBQTJDLEVBQUU7UUFBN0MsRUFBRUMsU0FBUSxFQUFpQyxHQUEzQzs7SUFDN0IsTUFBTSxFQUFFQyxnQkFBZSxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBRSxHQUFHUCw2REFBT0E7SUFDakQsTUFBTVEsU0FBU04sc0RBQVNBO0lBRXhCLE1BQU1PLGVBQWUsSUFBTTtRQUN6QkY7UUFDQUMsT0FBT0UsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDWCxrREFBSUE7Z0NBQ0hhLE1BQUs7Z0NBQ0xGLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1pQLGdDQUNDOztzREFDRSw4REFBQ1U7NENBQUtILFdBQVU7O2dEQUFhO2dEQUFVTixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1VLFFBQVE7Z0RBQUM7Ozs7Ozs7c0RBQ3RELDhEQUFDZixrREFBSUE7NENBQ0hhLE1BQUs7NENBQ0xGLFdBQVU7c0RBQ1g7Ozs7OztzREFHRCw4REFBQ0s7NENBQ0NDLFNBQVNUOzRDQUNURyxXQUFVO3NEQUNYOzs7Ozs7O2lFQUtIOztzREFDRSw4REFBQ1gsa0RBQUlBOzRDQUNIYSxNQUFLOzRDQUNMRixXQUFVO3NEQUNYOzs7Ozs7c0RBR0QsOERBQUNYLGtEQUFJQTs0Q0FDSGEsTUFBSzs0Q0FDTEYsV0FBVTtzREFDWDs7Ozs7OztnREFJSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNVCw4REFBQ087Z0JBQUtQLFdBQVU7MEJBQ2QsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNaUjs7Ozs7Ozs7Ozs7MEJBSUwsOERBQUNnQjtnQkFBT1IsV0FBVTswQkFDaEIsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNTO2dDQUFFVCxXQUFVOztvQ0FBYTtvQ0FDckIsSUFBSVUsT0FBT0MsV0FBVztvQ0FBRzs7Ozs7OzswQ0FFOUIsOERBQUNaO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1gsa0RBQUlBO3dDQUNIYSxNQUFLO3dDQUNMRixXQUFVO2tEQUNYOzs7Ozs7a0RBR0QsOERBQUNYLGtEQUFJQTt3Q0FDSGEsTUFBSzt3Q0FDTEYsV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDWCxrREFBSUE7d0NBQ0hhLE1BQUs7d0NBQ0xGLFdBQVU7a0RBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZixDQUFDO0dBL0Z1QlQ7O1FBQ29CSCx5REFBT0E7UUFDbENFLGtEQUFTQTs7O0tBRkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC50c3g/ZGU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIkAvY29udGV4dC9BdXRoQ29udGV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcclxuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCwgdXNlciwgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvZ291dCgpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGgtMTZcIj5cclxuICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9cIiBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWFjY2VudCB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCbG9nIE1hbmFnZW1lbnRcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgIHtpc0F1dGhlbnRpY2F0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+V2VsY29tZSwge3VzZXI/LnVzZXJuYW1lfSE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9kYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLWxnIGJnLXNlY29uZGFyeSB0ZXh0LXByaW1hcnkgaG92ZXI6YmctYWNjZW50IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLWxnIGJnLWhpZ2hsaWdodCB0ZXh0LXdoaXRlIGhvdmVyOmJnLW9wYWNpdHktOTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvbG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLWxnIGJnLXNlY29uZGFyeSB0ZXh0LXByaW1hcnkgaG92ZXI6YmctYWNjZW50IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQtbGcgYmctaGlnaGxpZ2h0IHRleHQtd2hpdGUgaG92ZXI6Ymctb3BhY2l0eS05MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgYmctYmFja2dyb3VuZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggcHktOFwiPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgbXQtYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggcHktNlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgc3BhY2UteS00IG1kOnNwYWNlLXktMFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgwqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQmxvZyBNYW5hZ2VtZW50LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTZcIj5cclxuICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvYWJvdXRcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1hY2NlbnQgdHJhbnNpdGlvbi1jb2xvcnNcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9wcml2YWN5XCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYWNjZW50IHRyYW5zaXRpb24tY29sb3JzXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBQcml2YWN5XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi90ZXJtc1wiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWFjY2VudCB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVGVybXNcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlQXV0aCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJsb2dvdXQiLCJyb3V0ZXIiLCJoYW5kbGVMb2dvdXQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwiaHJlZiIsInNwYW4iLCJ1c2VybmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYWluIiwiZm9vdGVyIiwicCIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout.tsx\n"));

/***/ })

});