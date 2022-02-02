(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(847);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(364);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(280);
/* harmony import */ var _components_Mint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(939);
/* harmony import */ var react_unity_webgl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(688);
/* harmony import */ var react_unity_webgl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_unity_webgl__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Mint__WEBPACK_IMPORTED_MODULE_7__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Mint__WEBPACK_IMPORTED_MODULE_7__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










__webpack_require__(121);
__webpack_require__(764);
const App = ({ Component , pageProps  })=>{
    const unityContext = new react_unity_webgl__WEBPACK_IMPORTED_MODULE_8__.UnityContext({
        loaderUrl: "unitybuild/AnotherTestApp.loader.js",
        dataUrl: "unitybuild/AnotherTestApp.data",
        frameworkUrl: "unitybuild/AnotherTestApp.framework.js",
        codeUrl: "unitybuild/AnotherTestApp.wasm"
    });
    unityContext.on("Mint", async ()=>{
        (0,_components_Mint__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    });
    function handleOnClickFullscreen() {
        unityContext.setFullscreen(true);
    }
    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork.Devnet;
    // custom RPC endpoint
    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.clusterApiUrl)(network)
    , [
        network
    ]);
    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded
    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.PhantomWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SlopeWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SolflareWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.TorusWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.LedgerWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SolletWalletAdapter({
                network
            }),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SolletExtensionWalletAdapter({
                network
            }), 
        ]
    , [
        network
    ]);
    // The WalletProvider & WalletModalProvider components ensure that the moment you reach the website, asked to connect wallet
    // if remove them, then login would only occur via the buttons 
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.ConnectionProvider, {
        endpoint: endpoint,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.WalletProvider, {
            wallets: wallets,
            autoConnect: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__.WalletModalProvider, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Mint__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>handleOnClickFullscreen()
                                ,
                                children: "Fullscreen"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_unity_webgl__WEBPACK_IMPORTED_MODULE_8___default()), {
                                unityContext: unityContext
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

});

/***/ }),

/***/ 121:
/***/ (() => {



/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 24:
/***/ ((module) => {

"use strict";
module.exports = require("@project-serum/anchor");

/***/ }),

/***/ 874:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/spl-token");

/***/ }),

/***/ 831:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ 369:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 688:
/***/ ((module) => {

"use strict";
module.exports = require("react-unity-webgl");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 364:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ 247:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 847:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 280:
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
var __webpack_exports__ = __webpack_require__.X(0, [939], () => (__webpack_exec__(656)));
module.exports = __webpack_exports__;

})();