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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/AuthContext.tsx":
/*!*************************************!*\
  !*** ./src/context/AuthContext.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_2__]);\n_utils_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction AuthProvider({ children  }) {\n    const [authState, setAuthState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: null,\n        token: null,\n        isAuthenticated: false\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initAuth = async ()=>{\n            try {\n                const token = localStorage.getItem(\"token\");\n                const storedUser = localStorage.getItem(\"user\");\n                if (token && storedUser) {\n                    // Set default authorization header\n                    _utils_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common.Authorization = `Bearer ${token}`;\n                    // Verify token is still valid\n                    const response = await _utils_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/auth/verify\");\n                    if (response.data.valid) {\n                        setAuthState({\n                            token,\n                            user: JSON.parse(storedUser),\n                            isAuthenticated: true\n                        });\n                    } else {\n                        // Token is invalid, clear storage\n                        localStorage.removeItem(\"token\");\n                        localStorage.removeItem(\"user\");\n                    }\n                }\n            } catch (error) {\n                // Handle error silently and clear storage\n                localStorage.removeItem(\"token\");\n                localStorage.removeItem(\"user\");\n            } finally{\n                setLoading(false);\n            }\n        };\n        initAuth();\n    }, []);\n    const login = (token, user)=>{\n        localStorage.setItem(\"token\", token);\n        localStorage.setItem(\"user\", JSON.stringify(user));\n        _utils_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common.Authorization = `Bearer ${token}`;\n        setAuthState({\n            token,\n            user,\n            isAuthenticated: true\n        });\n    };\n    const logout = ()=>{\n        localStorage.removeItem(\"token\");\n        localStorage.removeItem(\"user\");\n        delete _utils_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common.Authorization;\n        setAuthState({\n            token: null,\n            user: null,\n            isAuthenticated: false\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            ...authState,\n            login,\n            logout,\n            loading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\context\\\\AuthContext.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\nfunction useAuth() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (context === undefined) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    return context;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFNZTtBQUVlO0FBUTlCLE1BQU1LLDRCQUFjTCxvREFBYUEsQ0FBOEJNO0FBRXhELFNBQVNDLGFBQWEsRUFBRUMsU0FBUSxFQUEyQixFQUFFO0lBQ2xFLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBWTtRQUNwRFMsTUFBTSxJQUFJO1FBQ1ZDLE9BQU8sSUFBSTtRQUNYQyxpQkFBaUIsS0FBSztJQUN4QjtJQUNBLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWEsV0FBVyxVQUFZO1lBQzNCLElBQUk7Z0JBQ0YsTUFBTUosUUFBUUssYUFBYUMsT0FBTyxDQUFDO2dCQUNuQyxNQUFNQyxhQUFhRixhQUFhQyxPQUFPLENBQUM7Z0JBRXhDLElBQUlOLFNBQVNPLFlBQVk7b0JBQ3ZCLG1DQUFtQztvQkFDbkNmLHdGQUE0QyxHQUFHLENBQUMsT0FBTyxFQUFFUSxNQUFNLENBQUM7b0JBRWhFLDhCQUE4QjtvQkFDOUIsTUFBTVcsV0FBVyxNQUFNbkIsc0RBQU8sQ0FBQztvQkFDL0IsSUFBSW1CLFNBQVNFLElBQUksQ0FBQ0MsS0FBSyxFQUFFO3dCQUN2QmhCLGFBQWE7NEJBQ1hFOzRCQUNBRCxNQUFNZ0IsS0FBS0MsS0FBSyxDQUFDVDs0QkFDakJOLGlCQUFpQixJQUFJO3dCQUN2QjtvQkFDRixPQUFPO3dCQUNMLGtDQUFrQzt3QkFDbENJLGFBQWFZLFVBQVUsQ0FBQzt3QkFDeEJaLGFBQWFZLFVBQVUsQ0FBQztvQkFDMUIsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsRUFBRSxPQUFPQyxPQUFPO2dCQUNkLDBDQUEwQztnQkFDMUNiLGFBQWFZLFVBQVUsQ0FBQztnQkFDeEJaLGFBQWFZLFVBQVUsQ0FBQztZQUMxQixTQUFVO2dCQUNSZCxXQUFXLEtBQUs7WUFDbEI7UUFDRjtRQUVBQztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1lLFFBQVEsQ0FBQ25CLE9BQWVELE9BQWU7UUFDM0NNLGFBQWFlLE9BQU8sQ0FBQyxTQUFTcEI7UUFDOUJLLGFBQWFlLE9BQU8sQ0FBQyxRQUFRTCxLQUFLTSxTQUFTLENBQUN0QjtRQUM1Q1Asd0ZBQTRDLEdBQUcsQ0FBQyxPQUFPLEVBQUVRLE1BQU0sQ0FBQztRQUNoRUYsYUFBYTtZQUNYRTtZQUNBRDtZQUNBRSxpQkFBaUIsSUFBSTtRQUN2QjtJQUNGO0lBRUEsTUFBTXFCLFNBQVMsSUFBTTtRQUNuQmpCLGFBQWFZLFVBQVUsQ0FBQztRQUN4QlosYUFBYVksVUFBVSxDQUFDO1FBQ3hCLE9BQU96Qix3RkFBNEM7UUFDbkRNLGFBQWE7WUFDWEUsT0FBTyxJQUFJO1lBQ1hELE1BQU0sSUFBSTtZQUNWRSxpQkFBaUIsS0FBSztRQUN4QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNSLFlBQVk4QixRQUFRO1FBQUNDLE9BQU87WUFBRSxHQUFHM0IsU0FBUztZQUFFc0I7WUFBT0c7WUFBUXBCO1FBQVE7a0JBQ2pFTjs7Ozs7O0FBR1AsQ0FBQztBQUVNLFNBQVM2QixVQUFVO0lBQ3hCLE1BQU1DLFVBQVVyQyxpREFBVUEsQ0FBQ0k7SUFDM0IsSUFBSWlDLFlBQVloQyxXQUFXO1FBQ3pCLE1BQU0sSUFBSWlDLE1BQU0sK0NBQStDO0lBQ2pFLENBQUM7SUFDRCxPQUFPRDtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLW1hbmFnZW1lbnQtZnJvbnRlbmQvLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dC50c3g/NmVlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGNyZWF0ZUNvbnRleHQsXHJcbiAgdXNlQ29udGV4dCxcclxuICB1c2VTdGF0ZSxcclxuICB1c2VFZmZlY3QsXHJcbiAgUmVhY3ROb2RlLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyLCBBdXRoU3RhdGUgfSBmcm9tIFwiQC90eXBlc1wiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCJAL3V0aWxzL2FwaVwiO1xyXG5cclxuaW50ZXJmYWNlIEF1dGhDb250ZXh0VHlwZSBleHRlbmRzIEF1dGhTdGF0ZSB7XHJcbiAgbG9naW46ICh0b2tlbjogc3RyaW5nLCB1c2VyOiBVc2VyKSA9PiB2b2lkO1xyXG4gIGxvZ291dDogKCkgPT4gdm9pZDtcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XHJcbiAgY29uc3QgW2F1dGhTdGF0ZSwgc2V0QXV0aFN0YXRlXSA9IHVzZVN0YXRlPEF1dGhTdGF0ZT4oe1xyXG4gICAgdXNlcjogbnVsbCxcclxuICAgIHRva2VuOiBudWxsLFxyXG4gICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICB9KTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGluaXRBdXRoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBjb25zdCBzdG9yZWRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4gJiYgc3RvcmVkVXNlcikge1xyXG4gICAgICAgICAgLy8gU2V0IGRlZmF1bHQgYXV0aG9yaXphdGlvbiBoZWFkZXJcclxuICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuXHJcbiAgICAgICAgICAvLyBWZXJpZnkgdG9rZW4gaXMgc3RpbGwgdmFsaWRcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChcIi9hdXRoL3ZlcmlmeVwiKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHNldEF1dGhTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgICAgICAgdXNlcjogSlNPTi5wYXJzZShzdG9yZWRVc2VyKSxcclxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVG9rZW4gaXMgaW52YWxpZCwgY2xlYXIgc3RvcmFnZVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvciBzaWxlbnRseSBhbmQgY2xlYXIgc3RvcmFnZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRBdXRoKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2dpbiA9ICh0b2tlbjogc3RyaW5nLCB1c2VyOiBVc2VyKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHRva2VuKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICBzZXRBdXRoU3RhdGUoe1xyXG4gICAgICB0b2tlbixcclxuICAgICAgdXNlcixcclxuICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgIGRlbGV0ZSBhcGkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdO1xyXG4gICAgc2V0QXV0aFN0YXRlKHtcclxuICAgICAgdG9rZW46IG51bGwsXHJcbiAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLmF1dGhTdGF0ZSwgbG9naW4sIGxvZ291dCwgbG9hZGluZyB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQXV0aCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhcGkiLCJBdXRoQ29udGV4dCIsInVuZGVmaW5lZCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiYXV0aFN0YXRlIiwic2V0QXV0aFN0YXRlIiwidXNlciIsInRva2VuIiwiaXNBdXRoZW50aWNhdGVkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpbml0QXV0aCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRVc2VyIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwidmFsaWQiLCJKU09OIiwicGFyc2UiLCJyZW1vdmVJdGVtIiwiZXJyb3IiLCJsb2dpbiIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJsb2dvdXQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/AuthContext */ \"./src/context/AuthContext.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);\n([_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {\n                position: \"top-right\"\n            }, void 0, false, {\n                fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\REACT\\\\BLOG_MANAGEMENT\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFdUI7QUFDWDtBQUUzQixTQUFTRSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQscUJBQ0UsOERBQUNKLDhEQUFZQTs7MEJBQ1gsOERBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNILG9EQUFPQTtnQkFBQ0ksVUFBUzs7Ozs7Ozs7Ozs7O0FBR3hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLW1hbmFnZW1lbnQtZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvQXV0aENvbnRleHRcIjtcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPFRvYXN0ZXIgcG9zaXRpb249XCJ0b3AtcmlnaHRcIiAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiVG9hc3RlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://localhost:5000/api\" || 0,\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\n// Add request interceptor to include JWT token\napi.interceptors.request.use((config)=>{\n    if (false) {}\n    return config;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLE1BQU1ELG9EQUFZLENBQUM7SUFDdkJHLFNBQVNDLDJCQUErQixJQUFJLENBQTJCO0lBQ3ZFRyxTQUFTO1FBQ1AsZ0JBQWdCO0lBQ2xCO0FBQ0Y7QUFFQSwrQ0FBK0M7QUFDL0NOLElBQUlPLFlBQVksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsU0FBVztJQUN2QyxJQUFJLEtBQTZCLEVBQUUsRUFLbEM7SUFDRCxPQUFPQTtBQUNUO0FBRUEsaUVBQWVWLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLW1hbmFnZW1lbnQtZnJvbnRlbmQvLi9zcmMvdXRpbHMvYXBpLnRzP2I5NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaVwiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8gQWRkIHJlcXVlc3QgaW50ZXJjZXB0b3IgdG8gaW5jbHVkZSBKV1QgdG9rZW5cclxuYXBpLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgoY29uZmlnKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjb25maWc7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJoZWFkZXJzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkF1dGhvcml6YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/api.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();