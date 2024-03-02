(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 579:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__nLjiQ"
};


/***/ }),

/***/ 947:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "InstructionsComponent_container__degeh",
	"header_container": "InstructionsComponent_header_container__P_NJp",
	"buttons_container": "InstructionsComponent_buttons_container__5_Jls",
	"button": "InstructionsComponent_button___Je9w",
	"footer": "InstructionsComponent_footer__NWvJE",
	"icons_container": "InstructionsComponent_icons_container__7T0Ss"
};


/***/ }),

/***/ 769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(579);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./styles/InstructionsComponent.module.css
var InstructionsComponent_module = __webpack_require__(947);
var InstructionsComponent_module_default = /*#__PURE__*/__webpack_require__.n(InstructionsComponent_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./components/InstructionsComponent.jsx



function InstructionsComponent() {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (InstructionsComponent_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                className: (InstructionsComponent_module_default()).header_container,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: "YieldForge Protocol"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        children: [
                            "Start exploring our strategies",
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (InstructionsComponent_module_default()).buttons_container,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "/staking",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (InstructionsComponent_module_default()).button,
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: "Staking"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "/liquidity-management",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (InstructionsComponent_module_default()).button,
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: "Liquidity Management"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "/quant_strategies",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (InstructionsComponent_module_default()).button,
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: "Quantitative Strategies"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (InstructionsComponent_module_default()).footer,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "https://github.com/Armand-Morin/YieldForge",
                            target: "_blank",
                            children: "Hosted By Franklin Templeton"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (InstructionsComponent_module_default()).icons_container,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "https://github.com/Armand-Morin/YieldForge",
                                    target: "_blank",
                                    children: "Leave a star on Github"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "https://github.com/Armand-Morin/YieldForge",
                                    target: "_blank",
                                    children: "Follow us on Twitter"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/index.js



function Home() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime.jsx("main", {
            className: (Home_module_default()).main,
            children: /*#__PURE__*/ jsx_runtime.jsx(InstructionsComponent, {})
        })
    });
}


/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(769)));
module.exports = __webpack_exports__;

})();