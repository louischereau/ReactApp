"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_markusjungnickel_Desktop_Local_Solana_UI_reactapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_markusjungnickel_Desktop_Local_Solana_UI_reactapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_markusjungnickel_Desktop_Local_Solana_UI_reactapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"./node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_unity_webgl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-unity-webgl */ \"./node_modules/react-unity-webgl/distribution/index.js\");\n/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @project-serum/anchor */ \"./node_modules/@project-serum/anchor/dist/browser/index.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var _components_candy_machine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/candy-machine */ \"./components/candy-machine.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\n/* This function returns the layout of the hompage, including two buttons to connect and disconnect the wallet*/ var Home = function() {\n    var timeout = /*\n  useEffect(function(){\n    unityContext.on(\"Mint\", function(){\n      console.log(\"Test\")\n    });\n  })\n*/ function timeout(delay) {\n        return new Promise(function(res) {\n            return setTimeout(res, delay);\n        });\n    };\n    var handleOnClickFullscreen = function handleOnClickFullscreen() {\n        unityContext.setFullscreen(true);\n    };\n    _s();\n    // call to useWallet function to get the info about connected wallet, like the public key\n    var wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet)();\n    var anchorWallet = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function() {\n        if (!wallet || !wallet.publicKey || !wallet.signAllTransactions || !wallet.signTransaction) {\n            console.log(\"Wallet Not Connected\");\n            return;\n        }\n        return {\n            publicKey: wallet.publicKey,\n            signAllTransactions: wallet.signAllTransactions,\n            signTransaction: wallet.signTransaction\n        };\n    }, [\n        wallet\n    ]);\n    //function declaration -> the setCandyMachine function determines the candyMachine variable\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), candyMachine = ref[0], setCandyMachine = ref[1];\n    // takes the wallet variable initialised above and creates an anchorWallet i.e. a Wallet usable by Anchor client\n    // set the host to Devnet\n    var rpcHost = 'https://api.devnet.solana.com';\n    // establish a new connection to the solana devnet\n    var connection = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_6__.web3.Connection(rpcHost ? rpcHost : _project_serum_anchor__WEBPACK_IMPORTED_MODULE_6__.web3.clusterApiUrl('devnet'));\n    var Mint = function() {\n        var _ref = _asyncToGenerator(_Users_markusjungnickel_Desktop_Local_Solana_UI_reactapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var getCandyMachineId, candyMachineId1, cndy;\n            return _Users_markusjungnickel_Desktop_Local_Solana_UI_reactapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        getCandyMachineId = function() {\n                            try {\n                                var candyMachineId = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_6__.web3.PublicKey(\"8aYkMCQRGWdHos3SiDBN5KX8pWZU5uUqVjdVZ4GxvFkY\");\n                                return candyMachineId; // returns the candyMachineID\n                            } catch (e) {\n                                console.log('Failed to construct CandyMachineId', e);\n                                return undefined;\n                            }\n                        };\n                        candyMachineId1 = getCandyMachineId();\n                        if (!(anchorWallet && candyMachineId1)) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        _ctx.next = 5;\n                        return (0,_components_candy_machine__WEBPACK_IMPORTED_MODULE_8__.getCandyMachineState)(anchorWallet, candyMachineId1, connection);\n                    case 5:\n                        cndy = _ctx.sent;\n                        setCandyMachine(cndy);\n                    case 7:\n                        if (!(wallet.connected && (candyMachine === null || candyMachine === void 0 ? void 0 : candyMachine.program) && wallet.publicKey)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        _ctx.next = 10;\n                        return (0,_components_candy_machine__WEBPACK_IMPORTED_MODULE_8__.mintOneToken)(candyMachine, wallet.publicKey);\n                    case 10:\n                        console.log(\"minted\");\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function Mint() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // here the minting function defined above is called\n    //Minting()\n    var unityContext = new react_unity_webgl__WEBPACK_IMPORTED_MODULE_5__.UnityContext({\n        loaderUrl: \"unitybuild/AnotherTestApp.loader.js\",\n        dataUrl: \"unitybuild/AnotherTestApp.data\",\n        frameworkUrl: \"unitybuild/AnotherTestApp.framework.js\",\n        codeUrl: \"unitybuild/AnotherTestApp.wasm\"\n    });\n    unityContext.on(\"Mint\", _asyncToGenerator(_Users_markusjungnickel_Desktop_Local_Solana_UI_reactapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _Users_markusjungnickel_Desktop_Local_Solana_UI_reactapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return Mint();\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"NFT Games\"\n                }, void 0, false, {\n                    fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/index.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/index.tsx\",\n                lineNumber: 128,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"NFT GAMES\"\n            }, void 0, false, {\n                fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/index.tsx\",\n                lineNumber: 131,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().walletButtons),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__.WalletMultiButton, {}, void 0, false, {\n                                fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/index.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 10\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__.WalletDisconnectButton, {}, void 0, false, {\n                                fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/index.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 10\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/index.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 8\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_unity_webgl__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        unityContext: unityContext,\n                        style: {\n                            height: \"100%\",\n                            width: 950,\n                            border: \"2px solid black\",\n                            background: \"grey\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/index.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 8\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/index.tsx\",\n                lineNumber: 134,\n                columnNumber: 6\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/markusjungnickel/Desktop/Local_Solana/UI/reactapp/pages/index.tsx\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"bG239aZR5Xwuycv5tGlO1UKLcJA=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); /*\n <div className={styles.title}>\n           <Head>\n             <title>NFT Games</title>\n           </Head>\n            <main className={styles.main}>  \n              <div className={styles.walletButtons}>    \n                <WalletMultiButton />\n                <WalletDisconnectButton />\n              </div>\n              <div className={styles.buttons}>\n                <MintButton/>\n              </div>\n       </main>\n        </div>\n\n\n*/ \nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO0FBb0lWLCtEQUFlQSxJQUFJLEVBRW5CLENBaUJFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IFdhbGxldERpc2Nvbm5lY3RCdXR0b24sIFdhbGxldE11bHRpQnV0dG9uIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmltcG9ydCBVbml0eSwgeyBVbml0eUNvbnRleHQgfSBmcm9tIFwicmVhY3QtdW5pdHktd2ViZ2xcIjtcblxuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBhbmNob3IgZnJvbSAnQHByb2plY3Qtc2VydW0vYW5jaG9yJ1xuaW1wb3J0IHtcbiAgdXNlV2FsbGV0XG59IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IHtcbiAgICBDYW5keU1hY2hpbmVBY2NvdW50LFxuICAgIGdldENhbmR5TWFjaGluZVN0YXRlLFxuICAgIG1pbnRPbmVUb2tlbixcbiAgfSBmcm9tICcuLi9jb21wb25lbnRzL2NhbmR5LW1hY2hpbmUnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5cbi8qIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgbGF5b3V0IG9mIHRoZSBob21wYWdlLCBpbmNsdWRpbmcgdHdvIGJ1dHRvbnMgdG8gY29ubmVjdCBhbmQgZGlzY29ubmVjdCB0aGUgd2FsbGV0Ki9cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4geyAgIFxuICBcbiAgLy8gY2FsbCB0byB1c2VXYWxsZXQgZnVuY3Rpb24gdG8gZ2V0IHRoZSBpbmZvIGFib3V0IGNvbm5lY3RlZCB3YWxsZXQsIGxpa2UgdGhlIHB1YmxpYyBrZXlcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7IFxuICBcbiAgY29uc3QgYW5jaG9yV2FsbGV0ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgIXdhbGxldCB8fFxuICAgICAgIXdhbGxldC5wdWJsaWNLZXkgfHxcbiAgICAgICF3YWxsZXQuc2lnbkFsbFRyYW5zYWN0aW9ucyB8fFxuICAgICAgIXdhbGxldC5zaWduVHJhbnNhY3Rpb25cbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IE5vdCBDb25uZWN0ZWRcIilcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHB1YmxpY0tleTogd2FsbGV0LnB1YmxpY0tleSxcbiAgICAgIHNpZ25BbGxUcmFuc2FjdGlvbnM6IHdhbGxldC5zaWduQWxsVHJhbnNhY3Rpb25zLFxuICAgICAgc2lnblRyYW5zYWN0aW9uOiB3YWxsZXQuc2lnblRyYW5zYWN0aW9uLFxuICAgIH0gYXMgdHlwZW9mIGFuY2hvci5XYWxsZXQ7XG4gIH0sIFt3YWxsZXRdKTtcbiAgIFxuICAgIFxuICAgIC8vZnVuY3Rpb24gZGVjbGFyYXRpb24gLT4gdGhlIHNldENhbmR5TWFjaGluZSBmdW5jdGlvbiBkZXRlcm1pbmVzIHRoZSBjYW5keU1hY2hpbmUgdmFyaWFibGVcbiAgICBjb25zdCBbY2FuZHlNYWNoaW5lLCBzZXRDYW5keU1hY2hpbmVdID0gdXNlU3RhdGU8Q2FuZHlNYWNoaW5lQWNjb3VudD4oKTtcbiAgICAgXG4gICAgLy8gdGFrZXMgdGhlIHdhbGxldCB2YXJpYWJsZSBpbml0aWFsaXNlZCBhYm92ZSBhbmQgY3JlYXRlcyBhbiBhbmNob3JXYWxsZXQgaS5lLiBhIFdhbGxldCB1c2FibGUgYnkgQW5jaG9yIGNsaWVudFxuICAgIFxuICAgIC8vIHNldCB0aGUgaG9zdCB0byBEZXZuZXRcbiAgICBjb25zdCBycGNIb3N0ID0gJ2h0dHBzOi8vYXBpLmRldm5ldC5zb2xhbmEuY29tJ1xuICAgICBcbiAgICAvLyBlc3RhYmxpc2ggYSBuZXcgY29ubmVjdGlvbiB0byB0aGUgc29sYW5hIGRldm5ldFxuICAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IGFuY2hvci53ZWIzLkNvbm5lY3Rpb24ocnBjSG9zdFxuICAgICAgPyBycGNIb3N0XG4gICAgICA6IGFuY2hvci53ZWIzLmNsdXN0ZXJBcGlVcmwoJ2Rldm5ldCcpKTsgXG5cbiAgY29uc3QgTWludCA9IGFzeW5jKCkgPT4ge1xuICAgICBcbiAgICAgXG4gICAgLy8gdHVybmVzIHRoZSBwdWJsaWMga2V5IHN0cmluZyBiZWxvdyBpbnRvIGEgcHVibGljIGtleSBvYmplY3QgKHJlcXVpcmVkIGZvciB0aGUgbmV4dCBmdW5jdGlvbnMpXG4gICAgY29uc3QgZ2V0Q2FuZHlNYWNoaW5lSWQgPSAoKTogYW5jaG9yLndlYjMuUHVibGljS2V5IHwgdW5kZWZpbmVkID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNhbmR5TWFjaGluZUlkID0gbmV3IGFuY2hvci53ZWIzLlB1YmxpY0tleShcbiAgICAgICAgICBcIjhhWWtNQ1FSR1dkSG9zM1NpREJONUtYOHBXWlU1dVVxVmpkVlo0R3h2RmtZXCJcbiAgICAgICAgKTsgXG4gICAgICAgIHJldHVybiBjYW5keU1hY2hpbmVJZDsgLy8gcmV0dXJucyB0aGUgY2FuZHlNYWNoaW5lSURcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjb25zdHJ1Y3QgQ2FuZHlNYWNoaW5lSWQnLCBlKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIGNhbGxzIHRoZSBhYm92ZSBmdW5jdGlvbiB0byBjb25zdHJ1Y3QgdGhlIHB1YmxpYyBrZXkgb2JqZWN0XG4gICAgY29uc3QgY2FuZHlNYWNoaW5lSWQgPSBnZXRDYW5keU1hY2hpbmVJZCgpXG5cbiAgIFxuICAgICAgXG4gICAgICAvLyBnZXRzIHRoZSBzdGF0ZSBvZiB0aGUgY2FuZHkgbWFjaGluZSBvbiB0aGUgYmxvY2tjaGFpbiBhbmQgc3RvcmVzIHRoaXMgd2l0aCBzZXRDYW5keU1hY2hpbmUgXG4gICAgICAvLyBpbiB0aGUgY2FuZHlNYWNoaW5lIHZhcmlhYmxlIGRlY2xhcmVkIGFib3ZlXG4gICAgICBpZihhbmNob3JXYWxsZXQgJiYgY2FuZHlNYWNoaW5lSWQpe1xuICAgICAgICBjb25zdCBjbmR5ID0gYXdhaXQgZ2V0Q2FuZHlNYWNoaW5lU3RhdGUoXG4gICAgICAgICBhbmNob3JXYWxsZXQsXG4gICAgICAgICBjYW5keU1hY2hpbmVJZCxcbiAgICAgICAgIGNvbm5lY3Rpb24sXG4gICAgICAgICk7XG4gICAgICAgIHNldENhbmR5TWFjaGluZShjbmR5KTtcbiAgICAgIH0gXG4gICAgXG4gICAgLy8gaWYgdGhlIHdhbGxldCBpcyBjb25uZWN0ZWQgYW5kIGJvdGggdGhlIGNhbmR5TWFjaGluZSBhbmQgd2FsbGV0IFB1YktleSBhcmUgbm90IE5VTEwsIHRoZW4gbWludFxuICAgIC8vIHVzaW5nIHRoZSBjYW5keSBtYWNoaW5lIHN0b3JlZCBpbiB0aGUgY2FuZHlNYWNoaW5lIHZhcmlhYmxlIGFuZCB0aGUgd2FsbGV0IFB1YmxpYyBrZXkgb2YgdGhlIHVzZXJcbiAgICBpZiAod2FsbGV0LmNvbm5lY3RlZCAmJiBjYW5keU1hY2hpbmU/LnByb2dyYW0gJiYgd2FsbGV0LnB1YmxpY0tleSl7XG4gICAgICAgICAgYXdhaXQgbWludE9uZVRva2VuKGNhbmR5TWFjaGluZSwgd2FsbGV0LnB1YmxpY0tleSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm1pbnRlZFwiKVxuICAgICAgICB9XG4gIFxuICB9XG4gIC8vIGhlcmUgdGhlIG1pbnRpbmcgZnVuY3Rpb24gZGVmaW5lZCBhYm92ZSBpcyBjYWxsZWRcbiAgLy9NaW50aW5nKClcbiAgXG4gIFxuICBjb25zdCB1bml0eUNvbnRleHQgPSBuZXcgVW5pdHlDb250ZXh0KHtcbiAgICBsb2FkZXJVcmw6IFwidW5pdHlidWlsZC9Bbm90aGVyVGVzdEFwcC5sb2FkZXIuanNcIixcbiAgICBkYXRhVXJsOiBcInVuaXR5YnVpbGQvQW5vdGhlclRlc3RBcHAuZGF0YVwiLFxuICAgIGZyYW1ld29ya1VybDogXCJ1bml0eWJ1aWxkL0Fub3RoZXJUZXN0QXBwLmZyYW1ld29yay5qc1wiLFxuICAgIGNvZGVVcmw6IFwidW5pdHlidWlsZC9Bbm90aGVyVGVzdEFwcC53YXNtXCIsXG4gIH0pO1xuLypcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uKCl7XG4gICAgdW5pdHlDb250ZXh0Lm9uKFwiTWludFwiLCBmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2coXCJUZXN0XCIpXG4gICAgfSk7XG4gIH0pXG4qL1xuXG5mdW5jdGlvbiB0aW1lb3V0KGRlbGF5OiBudW1iZXIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKCByZXMgPT4gc2V0VGltZW91dChyZXMsIGRlbGF5KSApO1xufVxuICB1bml0eUNvbnRleHQub24oXCJNaW50XCIsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBNaW50KCl9KTtcbiAgXG4gIGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2tGdWxsc2NyZWVuKCkge1xuICAgIHVuaXR5Q29udGV4dC5zZXRGdWxsc2NyZWVuKHRydWUpO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPk5GVCBHYW1lczwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIDxoMT5cbiAgICAgIE5GVCBHQU1FU1xuICAgIDwvaDE+XG4gICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PiAgXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53YWxsZXRCdXR0b25zfT4gICAgXG4gICAgICAgICA8V2FsbGV0TXVsdGlCdXR0b24gLz5cbiAgICAgICAgIDxXYWxsZXREaXNjb25uZWN0QnV0dG9uIC8+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPFVuaXR5XG4gICAgICAgICAgdW5pdHlDb250ZXh0PXt1bml0eUNvbnRleHR9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICB3aWR0aDogOTUwLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJncmV5XCIsXG4gICAgICB9fS8+XG4gICAgPC9tYWluPlxuIDwvZGl2PlxuICApO1xuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbi8qXG4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgIDx0aXRsZT5ORlQgR2FtZXM8L3RpdGxlPlxuICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT4gIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndhbGxldEJ1dHRvbnN9PiAgICBcbiAgICAgICAgICAgICAgICA8V2FsbGV0TXVsdGlCdXR0b24gLz5cbiAgICAgICAgICAgICAgICA8V2FsbGV0RGlzY29ubmVjdEJ1dHRvbiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICAgICAgICA8TWludEJ1dHRvbi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG5cblxuKi8iXSwibmFtZXMiOlsiV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiIsIldhbGxldE11bHRpQnV0dG9uIiwiUmVhY3QiLCJIZWFkIiwic3R5bGVzIiwiVW5pdHkiLCJVbml0eUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJhbmNob3IiLCJ1c2VXYWxsZXQiLCJnZXRDYW5keU1hY2hpbmVTdGF0ZSIsIm1pbnRPbmVUb2tlbiIsIkhvbWUiLCJ0aW1lb3V0IiwiZGVsYXkiLCJQcm9taXNlIiwicmVzIiwic2V0VGltZW91dCIsImhhbmRsZU9uQ2xpY2tGdWxsc2NyZWVuIiwidW5pdHlDb250ZXh0Iiwic2V0RnVsbHNjcmVlbiIsIndhbGxldCIsImFuY2hvcldhbGxldCIsInB1YmxpY0tleSIsInNpZ25BbGxUcmFuc2FjdGlvbnMiLCJzaWduVHJhbnNhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiY2FuZHlNYWNoaW5lIiwic2V0Q2FuZHlNYWNoaW5lIiwicnBjSG9zdCIsImNvbm5lY3Rpb24iLCJ3ZWIzIiwiQ29ubmVjdGlvbiIsImNsdXN0ZXJBcGlVcmwiLCJNaW50IiwiZ2V0Q2FuZHlNYWNoaW5lSWQiLCJjYW5keU1hY2hpbmVJZCIsImNuZHkiLCJQdWJsaWNLZXkiLCJlIiwidW5kZWZpbmVkIiwiY29ubmVjdGVkIiwicHJvZ3JhbSIsImxvYWRlclVybCIsImRhdGFVcmwiLCJmcmFtZXdvcmtVcmwiLCJjb2RlVXJsIiwib24iLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImgxIiwibWFpbiIsIndhbGxldEJ1dHRvbnMiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyIiwiYmFja2dyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});