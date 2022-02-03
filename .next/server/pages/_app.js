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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__]);\n([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n__webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\n__webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\nconst App = ({ Component , pageProps  })=>{\n    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'\n    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork.Devnet;\n    // custom RPC endpoint\n    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.clusterApiUrl)(network)\n    , [\n        network\n    ]);\n    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --\n    // Only the wallets you configure here will be compiled into your application, and only the dependencies\n    // of wallets that your users connect to will be loaded\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.PhantomWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SlopeWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SolflareWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.TorusWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.LedgerWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SolletWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SolletExtensionWalletAdapter({\n                network\n            }), \n        ]\n    , [\n        network\n    ]);\n    // The WalletProvider & WalletModalProvider components ensure that the moment you reach the website, asked to connect wallet\n    // if remove them, then login would only occur via the buttons \n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.ConnectionProvider, {\n        endpoint: endpoint,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.WalletProvider, {\n            wallets: wallets,\n            autoConnect: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__.WalletModalProvider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/_app.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/_app.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/_app.tsx\",\n                lineNumber: 61,\n                columnNumber: 15\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/_app.tsx\",\n            lineNumber: 60,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/_app.tsx\",\n        lineNumber: 59,\n        columnNumber: 7\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDM0I7QUFDd0I7QUFHYjtBQUNOO0FBU1I7QUFPdkNjLG1CQUFPLENBQUMsNkdBQTRDO0FBQ3BEQSxtQkFBTyxDQUFDLG1EQUF1QjtBQUsvQixLQUFLLENBQUNDLEdBQUcsSUFBa0IsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUt2RCxFQUF1RDtJQUN2RCxLQUFLLENBQUNDLE9BQU8sR0FBR2Ysb0ZBQTJCO0lBRTNDLEVBQXNCO0lBQ3RCLEtBQUssQ0FBQ2lCLFFBQVEsR0FBR2xCLDhDQUFPLEtBQU9JLDhEQUFhLENBQUNZLE9BQU87TUFBRyxDQUFDQTtRQUFBQSxPQUFPO0lBQUEsQ0FBQztJQUVoRSxFQUF5RztJQUN6RyxFQUF3RztJQUN4RyxFQUF1RDtJQUN2RCxLQUFLLENBQUNHLE9BQU8sR0FBR25CLDhDQUFPLEtBQ2IsQ0FBQztZQUNILEdBQUcsQ0FBQ00sZ0ZBQW9CO1lBQ3hCLEdBQUcsQ0FBQ0MsOEVBQWtCO1lBQ3RCLEdBQUcsQ0FBQ0MsaUZBQXFCO1lBQ3pCLEdBQUcsQ0FBQ0csOEVBQWtCO1lBQ3RCLEdBQUcsQ0FBQ04sK0VBQW1CO1lBQ3ZCLEdBQUcsQ0FBQ0ssK0VBQW1CLENBQUMsQ0FBQztnQkFBQ00sT0FBTztZQUFDLENBQUM7WUFDbkMsR0FBRyxDQUFDUCx3RkFBNEIsQ0FBQyxDQUFDO2dCQUFDTyxPQUFPO1lBQUMsQ0FBQztRQUNoRCxDQUFDO01BQ0QsQ0FBQ0E7UUFBQUEsT0FBTztJQUFBLENBQUM7SUFHYixFQUE0SDtJQUM1SCxFQUErRDtJQUMvRCxNQUFNLDZFQUNEZCw0RUFBa0I7UUFBQ2dCLFFBQVEsRUFBRUEsUUFBUTs4RkFDakNmLHdFQUFjO1lBQUNnQixPQUFPLEVBQUVBLE9BQU87WUFBRUMsV0FBVztrR0FDeEN0QixnRkFBbUI7O2dHQUNmZ0IsU0FBUzsyQkFBS0MsU0FBUzs7Ozs7O2dHQUN2Qk0sQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3RCLENBQUM7QUFFRCxpRUFBZVIsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdDEvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdhbGxldE1vZGFsUHJvdmlkZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldEFkYXB0ZXJOZXR3b3JrIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlJztcbmltcG9ydCB7XG4gIENvbm5lY3Rpb25Qcm92aWRlcixcbiAgV2FsbGV0UHJvdmlkZXJ9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IHsgY2x1c3RlckFwaVVybCB9IGZyb20gXCJAc29sYW5hL3dlYjMuanNcIjtcbmltcG9ydCB7XG4gIExlZGdlcldhbGxldEFkYXB0ZXIsXG4gIFBoYW50b21XYWxsZXRBZGFwdGVyLFxuICBTbG9wZVdhbGxldEFkYXB0ZXIsXG4gIFNvbGZsYXJlV2FsbGV0QWRhcHRlcixcbiAgU29sbGV0RXh0ZW5zaW9uV2FsbGV0QWRhcHRlcixcbiAgU29sbGV0V2FsbGV0QWRhcHRlcixcbiAgVG9ydXNXYWxsZXRBZGFwdGVyLFxufSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMnO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5cbmltcG9ydCBVbml0eSwgeyBVbml0eUNvbnRleHQgfSBmcm9tIFwicmVhY3QtdW5pdHktd2ViZ2xcIjtcblxuXG5cbnJlcXVpcmUoJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvc3R5bGVzLmNzcycpO1xucmVxdWlyZSgnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJyk7XG5cblxuXG5cbmNvbnN0IEFwcDogRkM8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuXG4gIFxuICBcblxuICAvLyBDYW4gYmUgc2V0IHRvICdkZXZuZXQnLCAndGVzdG5ldCcsIG9yICdtYWlubmV0LWJldGEnXG4gIGNvbnN0IG5ldHdvcmsgPSBXYWxsZXRBZGFwdGVyTmV0d29yay5EZXZuZXQ7XG5cbiAgLy8gY3VzdG9tIFJQQyBlbmRwb2ludFxuICBjb25zdCBlbmRwb2ludCA9IHVzZU1lbW8oKCkgPT4gY2x1c3RlckFwaVVybChuZXR3b3JrKSwgW25ldHdvcmtdKTtcblxuICAvLyBAc29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMgaW5jbHVkZXMgYWxsIHRoZSBhZGFwdGVycyBidXQgc3VwcG9ydHMgdHJlZSBzaGFraW5nIGFuZCBsYXp5IGxvYWRpbmcgLS1cbiAgLy8gT25seSB0aGUgd2FsbGV0cyB5b3UgY29uZmlndXJlIGhlcmUgd2lsbCBiZSBjb21waWxlZCBpbnRvIHlvdXIgYXBwbGljYXRpb24sIGFuZCBvbmx5IHRoZSBkZXBlbmRlbmNpZXNcbiAgLy8gb2Ygd2FsbGV0cyB0aGF0IHlvdXIgdXNlcnMgY29ubmVjdCB0byB3aWxsIGJlIGxvYWRlZFxuICBjb25zdCB3YWxsZXRzID0gdXNlTWVtbyhcbiAgICAgICgpID0+IFtcbiAgICAgICAgICBuZXcgUGhhbnRvbVdhbGxldEFkYXB0ZXIoKSxcbiAgICAgICAgICBuZXcgU2xvcGVXYWxsZXRBZGFwdGVyKCksXG4gICAgICAgICAgbmV3IFNvbGZsYXJlV2FsbGV0QWRhcHRlcigpLFxuICAgICAgICAgIG5ldyBUb3J1c1dhbGxldEFkYXB0ZXIoKSxcbiAgICAgICAgICBuZXcgTGVkZ2VyV2FsbGV0QWRhcHRlcigpLFxuICAgICAgICAgIG5ldyBTb2xsZXRXYWxsZXRBZGFwdGVyKHsgbmV0d29yayB9KSxcbiAgICAgICAgICBuZXcgU29sbGV0RXh0ZW5zaW9uV2FsbGV0QWRhcHRlcih7IG5ldHdvcmsgfSksXG4gICAgICBdLFxuICAgICAgW25ldHdvcmtdXG4gICk7XG4gIFxuICAvLyBUaGUgV2FsbGV0UHJvdmlkZXIgJiBXYWxsZXRNb2RhbFByb3ZpZGVyIGNvbXBvbmVudHMgZW5zdXJlIHRoYXQgdGhlIG1vbWVudCB5b3UgcmVhY2ggdGhlIHdlYnNpdGUsIGFza2VkIHRvIGNvbm5lY3Qgd2FsbGV0XG4gIC8vIGlmIHJlbW92ZSB0aGVtLCB0aGVuIGxvZ2luIHdvdWxkIG9ubHkgb2NjdXIgdmlhIHRoZSBidXR0b25zIFxuICByZXR1cm4gKFxuICAgICAgPENvbm5lY3Rpb25Qcm92aWRlciBlbmRwb2ludD17ZW5kcG9pbnR9PlxuICAgICAgICAgIDxXYWxsZXRQcm92aWRlciB3YWxsZXRzPXt3YWxsZXRzfSBhdXRvQ29ubmVjdD5cbiAgICAgICAgICAgICAgPFdhbGxldE1vZGFsUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9XYWxsZXRNb2RhbFByb3ZpZGVyPlxuICAgICAgICAgIDwvV2FsbGV0UHJvdmlkZXI+XG4gICAgICA8L0Nvbm5lY3Rpb25Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiV2FsbGV0TW9kYWxQcm92aWRlciIsIlJlYWN0IiwidXNlTWVtbyIsIldhbGxldEFkYXB0ZXJOZXR3b3JrIiwiQ29ubmVjdGlvblByb3ZpZGVyIiwiV2FsbGV0UHJvdmlkZXIiLCJjbHVzdGVyQXBpVXJsIiwiTGVkZ2VyV2FsbGV0QWRhcHRlciIsIlBoYW50b21XYWxsZXRBZGFwdGVyIiwiU2xvcGVXYWxsZXRBZGFwdGVyIiwiU29sZmxhcmVXYWxsZXRBZGFwdGVyIiwiU29sbGV0RXh0ZW5zaW9uV2FsbGV0QWRhcHRlciIsIlNvbGxldFdhbGxldEFkYXB0ZXIiLCJUb3J1c1dhbGxldEFkYXB0ZXIiLCJyZXF1aXJlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibmV0d29yayIsIkRldm5ldCIsImVuZHBvaW50Iiwid2FsbGV0cyIsImF1dG9Db25uZWN0IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/styles.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

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

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();