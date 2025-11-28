module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/descriptionInputs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DamDescriptionContainer",
    ()=>DamDescriptionContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SelectionInput({ name, options, value, onValueChange, suppressName = undefined }) {
    const optionsJSX = [];
    let maxSize = 0;
    const displayName = suppressName ? "" : name;
    for(let i = 0; i < options.length; i++){
        maxSize = options[i].length > maxSize ? options[i].length : maxSize;
        optionsJSX.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: options[i],
            children: options[i]
        }, options[i], false, {
            fileName: "[project]/components/descriptionInputs.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: name,
                name: name,
                className: "text-center bg-slate-700 hover:bg-slate-600 rounded-xl pl-2 text-2xl",
                value: value,
                onChange: (e)=>onValueChange(e.target.value),
                children: optionsJSX
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "text-2xl w-1/4",
                children: " " + displayName
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function DamDescriptionContainer({ peakFlowEquationName, onPeakFlowEquationChange, timeToFailureEquationName, onTimeToFailureEquationChange, failureMode, onFailureModeChange, erodibility, onErodibilityChange, damType, onDamTypeChange, originalOrRecalibratedQ, onRecalibratedQChange, originalOrRecalibratedT, onRecalibratedTChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dam-description pb-4 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl",
                children: "For the "
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectionInput, {
                name: "failure",
                options: [
                    "overtopping",
                    "piping"
                ],
                value: failureMode,
                onValueChange: onFailureModeChange
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl",
                children: " of a "
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectionInput, {
                name: "erodibility",
                options: [
                    "low",
                    "medium",
                    "high"
                ],
                value: erodibility,
                onValueChange: onErodibilityChange
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl",
                children: " "
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectionInput, {
                name: "dam",
                options: [
                    "homogenous-fill",
                    "core-wall"
                ],
                value: damType,
                onValueChange: onDamTypeChange
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl",
                children: ", "
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl",
                children: "calculate the peak flow using the "
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectionInput, {
                name: "recalibrated",
                suppressName: true,
                options: [
                    "original",
                    "recalibrated"
                ],
                value: originalOrRecalibratedQ,
                onValueChange: onRecalibratedQChange
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectionInput, {
                name: "peak flow equation",
                options: [
                    "Froehlich (1995a)",
                    "Webby (1996)",
                    "Xu and Zhang (2009)",
                    "Hooshyaripor et al. (2014)",
                    "Azimi et al. (2015)",
                    "Froehlich (2016)",
                    "Zhong et al. (2020)",
                    "Yassin et al. (2025)"
                ],
                value: peakFlowEquationName,
                onValueChange: onPeakFlowEquationChange
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl",
                children: " and the time to failure using the "
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectionInput, {
                name: "recalibrated",
                suppressName: true,
                options: [
                    "original",
                    "recalibrated"
                ],
                value: originalOrRecalibratedT,
                onValueChange: onRecalibratedTChange
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectionInput, {
                name: "time to failure equation",
                options: [
                    "Froehlich (1995b)",
                    "Froehlich (2008)",
                    "Xu and Zhang (2009)",
                    "Zhong et al. (2020)"
                ],
                value: timeToFailureEquationName,
                onValueChange: onTimeToFailureEquationChange
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl",
                children: ":"
            }, void 0, false, {
                fileName: "[project]/components/descriptionInputs.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/descriptionInputs.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/numericalInputs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NumericalInputContainer",
    ()=>NumericalInputContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function NumericalInput({ variableName, description, units, value = undefined, onValueChange, required }) {
    const splitVariableName = variableName.split("_");
    const baseLetter = splitVariableName[0];
    const subscript = splitVariableName[1];
    const starJSX = !required ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-orange-500",
        children: "*"
    }, void 0, false, {
        fileName: "[project]/components/numericalInputs.tsx",
        lineNumber: 24,
        columnNumber: 39
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex items-center p-1 grid grid-cols-5 gap-x-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: variableName,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "italic text-4xl font-serif text-shadow-lg/30 text-shadow-slate-600 p-1 col-span-2 text-left",
                        children: [
                            baseLetter,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sub", {
                                children: subscript
                            }, void 0, false, {
                                fileName: "[project]/components/numericalInputs.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            starJSX
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/numericalInputs.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/numericalInputs.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "col-start-3 col-span-2 text-3xl font-serif rounded-xl bg-slate-700 " + "[appearance:textfield] text-right pr-2 " + "invalid:border-b-2 invalid:border-orange-500 invalid:text-orange-600 " + "hover:bg-slate-600",
                    type: "text",
                    id: variableName,
                    name: variableName,
                    value: value,
                    onChange: (e)=>onValueChange(e.target.value),
                    min: 0,
                    required: required,
                    step: "any"
                }, void 0, false, {
                    fileName: "[project]/components/numericalInputs.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-3xl font-serif text-left col-5",
                    children: units
                }, void 0, false, {
                    fileName: "[project]/components/numericalInputs.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/numericalInputs.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "italic text-s text-left inline-block align-text-bottom col-span-full border-b border-stone-300 border-dashed",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/components/numericalInputs.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/numericalInputs.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
function NumericalInputContainer({ heightOfWater, volumeOfWater, depthOfBreach, heightOfDam, averageWidth, onHeightOfWaterChange, onVolumeOfWaterChange, onDepthOfBreachChange, onHeightOfDamChange, onAverageWidthChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NumericalInput, {
                variableName: "H_w",
                description: "Height of water above the breach bottom",
                value: heightOfWater,
                units: "m",
                required: true,
                onValueChange: onHeightOfWaterChange
            }, void 0, false, {
                fileName: "[project]/components/numericalInputs.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NumericalInput, {
                variableName: "V_w",
                description: "Volume of water above the breach bottom",
                units: "m³",
                required: true,
                value: volumeOfWater,
                onValueChange: onVolumeOfWaterChange
            }, void 0, false, {
                fileName: "[project]/components/numericalInputs.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NumericalInput, {
                variableName: "H_b",
                description: "Depth of breach from the crest to the breach bottom",
                units: "m",
                required: false,
                value: depthOfBreach,
                onValueChange: onDepthOfBreachChange
            }, void 0, false, {
                fileName: "[project]/components/numericalInputs.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NumericalInput, {
                variableName: "H_d",
                description: "Height of dam from foundation to crest",
                units: "m",
                required: false,
                value: heightOfDam,
                onValueChange: onHeightOfDamChange
            }, void 0, false, {
                fileName: "[project]/components/numericalInputs.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NumericalInput, {
                variableName: "W_avg",
                description: "Average embankment width (in the direction parallel to flow)",
                units: "m",
                required: false,
                value: averageWidth,
                onValueChange: onAverageWidthChange
            }, void 0, false, {
                fileName: "[project]/components/numericalInputs.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/numericalInputs.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/eqnList.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EquationList",
    ()=>EquationList
]);
;
const EquationList = {
    "Froehlich (1995a)-Q": {
        name: "Froehlich (1995a)",
        description: "An early equation that introduced multi-linear regression to this problem, \
outperforming earlier methods which used only simple linear regression. Prone to \
overestimating the peak flow.",
        mean: 0.2558,
        stdev: 0.4828,
        reMean: -0.0831,
        reStdev: 0.438,
        func: (dam)=>0.607 * dam.v_w ** 0.295 * dam.h_w ** 1.24,
        reFunc: (dam)=>0.04 * dam.v_w ** 0.46 * dam.h_w ** 1.11
    },
    "Webby (1996)-Q": {
        name: "Webby (1996)",
        description: "A simple, dimensionally homogenous equation that uses only height and \
volume of water, calibrated using simple linear regression. The form of this \
equation became the basis for subsequent models.",
        mean: 0.1738,
        stdev: 0.4483,
        reMean: -0.0132,
        reStdev: 0.438,
        func: (dam)=>0.0443 * 9.81 ** 0.5 * dam.v_w ** 0.365 * dam.h_w ** 1.4,
        reFunc: (dam)=>0.015 * 9.81 ** 0.5 * dam.v_w ** 0.46 * dam.h_w ** 1.11
    },
    "Xu and Zhang (2009)-Q": {
        name: "Xu and Zhang (2009)",
        description: "A dimensionally homogenous equation that includes discrete variables \
as well as continuous variables, allowing the model to account for the effect of \
dam erodibility and failure mode of the dam. This is one of the only equations that \
includes an indication of the erodibility of the dam, which is a key factor in \
accurately predicting the peak flow.",
        mean: 0.2136,
        stdev: 0.4268,
        reMean: -0.007,
        reStdev: 0.3633,
        func: (dam)=>{
            let k_e = dam.erodibility === "high" ? 1.51 : 1.0; // Erodibility factor
            k_e = dam.erodibility === "low" ? 0.39 : k_e;
            const k_m = dam.mode === "overtopping" ? 1.56 : 1.0; // Mode factor
            return k_e * k_m * 0.024 * 9.81 ** 0.5 * dam.h_w ** 1.28 * dam.v_w ** 0.41;
        },
        reFunc: (dam)=>{
            const k_m = dam.mode === "overtopping" ? 0.92 : 1.0; // Mode factor
            let k_e = dam.erodibility === "low" ? 1.0 : 1.0;
            k_e = dam.erodibility === "high" ? 3.8 : k_e;
            return 0.012 * k_m * k_e * 9.81 ** 0.5 * dam.h_w ** 1.11 * dam.v_w ** 0.46;
        }
    },
    "Hooshyaripor et al. (2014)-Q": {
        name: "Hooshyaripor et al. (2014)",
        description: "A simple, dimensionally homogenous equation that uses only height and \
volume of water. This equation uses a 3-dimensional Gaussian copula to generate \
synthetic data to assist in the calibration of the model, but Yassin et al. (2025) \
found that the effect of the copula on the model performance is negligible.",
        mean: -0.0551,
        stdev: 0.4381,
        reMean: -0.0155,
        reStdev: 0.4382,
        func: (dam)=>0.0454 * dam.h_w ** 1.156 * dam.v_w ** 0.448,
        reFunc: (dam)=>0.016 * 9.81 ** 0.5 * dam.v_w ** 0.45 * dam.h_w ** 1.14
    },
    "Azimi et al. (2015)-Q": {
        name: "Azimi et al. (2015)",
        description: "A simple, dimensionally homogenous equation that uses only height and \
volume of water. This equation was developed using a large dataset of dam failures \
and used cross-validation to ensure that the model performance is robust. Yassin et \
al. (2025) found that this is one of the most accurate models available, but it can \
still produce large errors.",
        mean: 0.1602,
        stdev: 0.4393,
        reMean: -0.0132,
        reStdev: 0.438,
        func: (dam)=>16.553 * (9.81 * dam.v_w / 1000000) ** 0.5 * dam.h_w,
        reFunc: (dam)=>0.015 * 9.81 ** 0.5 * dam.v_w ** 0.46 * dam.h_w ** 1.11
    },
    "Froehlich (2016)-Q": {
        name: "Froehlich (2016)",
        description: "A more complicated equation that accounts for the mode of failure, as \
well as the depth of the breach and the average embankment width. This equation \
also includes a height factor that adjusts the peak flow for dams larger than 6.1 m, \
making this the only equation to treat smaller and larger dams differently. Despite \
this, Yassin et al. (2025) found that none of these innovations significantly \
improved the model performance compared to simpler models.",
        mean: 0.2234,
        stdev: 0.4517,
        reMean: 0.0318,
        reStdev: 0.4274,
        func: (dam)=>{
            const k_m = dam.mode === "overtopping" ? 1.85 : 1;
            const k_h = dam.h_w >= 6.1 ? (dam.h_w / 6.1) ** (1 / 8.0) : 1.0;
            return 0.0175 * k_m * k_h * (9.81 * dam.v_w * dam.h_w * dam.h_b ** 2 / dam.w_avg) ** 0.5;
        },
        reFunc: (dam)=>{
            const k_m = dam.mode === "overtopping" ? 1.01 : 1;
            const k_h = dam.h_w >= 4.6 ? (dam.h_w / 4.6) ** 0.2 : 1.0; // should be h_b
            return 0.012 * 9.81 ** 0.5 * k_m * k_h * dam.h_w ** 0.31 * dam.v_w ** 0.46 * dam.h_b ** 0.76 * dam.w_avg ** 0.067;
        }
    },
    "Zhong et al. (2020)-Q": {
        name: "Zhong et al. (2020)",
        description: "This equation separates homogenous-fill and core-wall dams in its \
calibration, which allows it to account for the different properties of these two \
types of dams. However, this does not significantly improve the model performance \
compared to simpler models (Yassin et al., 2025).",
        mean: 0.0927,
        stdev: 0.4504,
        reMean: 0.0318,
        reStdev: 0.4274,
        func: (dam)=>{
            const c = dam.type == "core-wall" ? [
                -1.51,
                -1.09,
                -0.12,
                -3.61
            ] : [
                -1.58,
                -0.76,
                0.1,
                -4.55
            ];
            return 9.81 ** 0.5 * dam.v_w * dam.h_w ** -0.5 * (dam.v_w ** (1 / 3) / dam.h_w) ** c[0] * (dam.h_w / dam.h_b) ** c[1] * dam.h_d ** c[2] * Math.exp(c[3]);
        },
        reFunc: (dam)=>{
            const c = dam.type == "core-wall" ? [
                0.019,
                -0.16,
                0.4,
                1.45,
                0.08
            ] : [
                0.018,
                0.4,
                0.44,
                0.78,
                -0.04
            ];
            return c[0] * 9.81 ** 0.5 * dam.h_w ** c[1] * dam.v_w ** c[2] * dam.h_b ** c[3] * dam.h_d ** c[4];
        }
    },
    "Yassin et al. (2025)-Q": {
        name: "Yassin et al. (2025)",
        description: "This equation is a simple equation that uses height and volume of water, but \
also includes a 'high erodibility' adjustment factor. It is the most robust and \
accurate of the models, but it is still prone to large errors in some cases.",
        mean: -0.0174,
        stdev: 0.3635,
        reMean: -0.0174,
        reStdev: 0.3635,
        func: (dam)=>{
            const k_e = dam.erodibility === "high" ? 3.8 : 1.0; // Erodibility factor
            return 0.011 * k_e * 9.81 ** 0.5 * dam.h_w ** 1.11 * dam.v_w ** 0.46;
        },
        reFunc: (dam)=>{
            // same as above
            const k_e = dam.erodibility === "high" ? 3.8 : 1.0; // Erodibility factor
            return 0.011 * k_e * 9.81 ** 0.5 * dam.h_w ** 1.11 * dam.v_w ** 0.46;
        }
    },
    // TIME TO FAILURE FUNCTIONS
    "Froehlich (1995b)-T": {
        name: "Froehlich (1995b)",
        description: `Placeholder for Froehlich (1995) equation for time to failure.`,
        mean: -0.0997,
        stdev: 0.3562,
        reMean: -0.0079,
        reStdev: 0.3235,
        func: (dam)=>3.84 * (dam.v_w / 10 ** 6) ** 0.53 * dam.h_b ** -0.9,
        reFunc: (dam)=>0.026 * dam.v_w ** 0.37 * dam.h_b ** -0.78
    },
    "Froehlich (2008)-T": {
        name: "Froehlich (2008)",
        description: `Placeholder for Froehlich (2008) equation for time to failure.`,
        mean: -0.0684,
        stdev: 0.341,
        reMean: -0.0185,
        reStdev: 0.3273,
        func: (dam)=>63.2 * (dam.v_w / 9.81 / dam.h_b ** 2) ** 0.5 / 3600,
        reFunc: (dam)=>0.045 * 9.81 ** -0.5 * dam.v_w ** 0.39 * dam.h_b ** -0.68
    },
    "Xu and Zhang (2009)-T": {
        name: "Xu and Zhang (2009)",
        description: `Placeholder for Xu and Zhang (2009) equation for time to failure.`,
        mean: 0.1456,
        stdev: 0.3495,
        reMean: 0.0192,
        reStdev: 0.3194,
        func: (dam)=>{
            let k_e = dam.erodibility === "high" ? 0.58 : 1.0; // Erodibility factor
            k_e = dam.erodibility === "low" ? 3.11 : k_e;
            return 0.01122 * k_e * dam.h_d ** 0.654 * dam.v_w ** 0.415 * dam.h_w ** -1.246;
        },
        reFunc: (dam)=>{
            let k_e = dam.erodibility === "high" ? 0.78 : 1.0; // Erodibility factor
            k_e = dam.erodibility === "low" ? 3.3 : k_e;
            return 0.043 * k_e * dam.h_d ** 0.35 * dam.v_w ** 0.29 * dam.h_w ** -0.86;
        }
    },
    "Zhong et al. (2020)-T": {
        name: "Zhong et al. (2020)",
        description: `Placeholder for Zhong et al. (2020) equation for time to failure.`,
        mean: 0.1088,
        stdev: 1.8251,
        reMean: 0.0232,
        reStdev: 0.3075,
        func: (dam)=>{
            const c = dam.type == "core-wall" ? [
                1.52,
                -11.36,
                -0.43,
                Math.exp(-1.57)
            ] : [
                0.56,
                -0.85,
                -0.32,
                Math.exp(-0.2)
            ];
            return (dam.v_w ** (1 / 3) / dam.h_w) ** c[0] * (dam.h_w / dam.h_b) ** c[1] * dam.h_d ** c[2] * c[3];
        },
        reFunc: (dam)=>{
            const c = dam.type === "core-wall" ? [
                0.0086,
                0.45,
                -0.11,
                -1.24,
                0.47
            ] : [
                0.025,
                0.36,
                -0.22,
                0.4,
                0.4
            ];
            return c[0] * dam.v_w ** c[1] * dam.h_w ** c[2] * dam.h_b ** c[3] * dam.h_d ** c[4];
        }
    }
};
}),
"[project]/components/empiricalEqn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BreachWidthEquation",
    ()=>BreachWidthEquation,
    "PeakFlowEquation",
    ()=>PeakFlowEquation,
    "TimeToFailureEquation",
    ()=>TimeToFailureEquation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eqnList$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eqnList.ts [app-ssr] (ecmascript)");
;
class EmpiricalEquation {
    shortName;
    name;
    description;
    mean;
    stdev;
    reMean;
    reStdev;
    ogPredict;
    rePredict;
    constructor(shortName){
        const eqn = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eqnList$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EquationList"][shortName];
        this.shortName = shortName;
        this.name = eqn.name;
        this.description = eqn.description;
        this.mean = eqn.mean;
        this.stdev = eqn.stdev;
        this.reMean = eqn.reMean;
        this.reStdev = eqn.reStdev;
        this.ogPredict = eqn.func;
        this.rePredict = eqn.reFunc;
    }
    getUpperBoundRatio(useRecalibrated) {
        // Note: the mean is negative because these means are pred/obs and we want obs/pred
        if (useRecalibrated) {
            return 10 ** (-1 * this.reMean + 1.645 * this.reStdev); // one-sided 95% confidence interval
        } else {
            return 10 ** (-1 * this.mean + 1.645 * this.stdev);
        }
    }
    getLowerBoundRatio(useRecalibrated) {
        // Note: the mean is negative because these means are pred/obs and we want obs/pred
        if (useRecalibrated) {
            return 10 ** (-1 * this.reMean - 1.645 * this.reStdev); // one-sided 95% confidence interval
        } else {
            return 10 ** (-1 * this.mean - 1.645 * this.stdev);
        }
    }
    predict(dam, useRecalibrated) {
        if (useRecalibrated) {
            return this.rePredict(dam);
        } else {
            return this.ogPredict(dam);
        }
    }
}
class PeakFlowEquation extends EmpiricalEquation {
    units = "m³/s";
    constructor(name){
        super(name + "-Q");
    }
}
class TimeToFailureEquation extends EmpiricalEquation {
    units = "h";
    constructor(name){
        super(name + "-T");
    }
}
class BreachWidthEquation extends EmpiricalEquation {
    units = "m";
    constructor(name){
        super(name + "-B");
    }
} /*const q_eqn_map = new Map();
q_eqn_map.set("Fr95", fr95_q);
q_eqn_map.set("We96", we96_q);
q_eqn_map.set("Xu09", xu09_q);
q_eqn_map.set("Ho14", ho14_q);
q_eqn_map.set("Az15", az15_q);
q_eqn_map.set("Fr16", fr16_q);
q_eqn_map.set("Zh20", zh20_q);
q_eqn_map.set("Ya25", ya25_q);*/  /*const t_eqn_map = new Map();
t_eqn_map.set("Fr95", fr95_t);
t_eqn_map.set("Fr08", fr08_t);
t_eqn_map.set("Xu09", xu09_t);
t_eqn_map.set("Zh20", zh20_t);*/ 
}),
"[project]/components/utils/formatting.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeStringFormat",
    ()=>timeStringFormat
]);
function timeStringFormat(timeValueHours) {
    const timeValue = Number(timeValueHours);
    const hours = Math.floor(timeValue);
    const minutes = Math.floor((timeValue - hours) * 60);
    let hoursImprecise = hours;
    let minutesImprecise = parseFloat(((timeValue - hours) * 60).toPrecision(1));
    const seconds = Math.floor(((timeValue - hours) * 60 - minutes) * 60);
    let secondsImprecise = parseFloat((((timeValue - hours) * 60 - minutes) * 60).toPrecision(1));
    if (secondsImprecise === 60) {
        secondsImprecise = 0;
        minutesImprecise++;
    }
    if (minutesImprecise === 60) {
        minutesImprecise = 0;
        hoursImprecise++;
    }
    if (hours > 10) {
        return `${Math.round(hours)}h`;
    } else if (hours > 0) {
        return `${hoursImprecise}h ${minutesImprecise}min`;
    } else if (minutes > 0) {
        return `${minutesImprecise}min ${secondsImprecise}s`;
    } else {
        return `${seconds}s`;
    }
}
}),
"[project]/components/results.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResultContainer",
    ()=>ResultContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$empiricalEqn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/empiricalEqn.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$formatting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/formatting.ts [app-ssr] (ecmascript)");
;
;
;
function ResultContainer({ peakFlowEquationName, timeToFailureEquationName, originalOrRecalibratedQ, originalOrRecalibratedT, heightOfWater, volumeOfWater, depthOfBreach, heightOfDam, averageWidth, failureMode, erodibility, damType }) {
    const peakFlowEquation = new __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$empiricalEqn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PeakFlowEquation"](peakFlowEquationName);
    const timeToFailureEquation = new __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$empiricalEqn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimeToFailureEquation"](timeToFailureEquationName);
    const h_w = Number(heightOfWater?.replace(/,/g, ""));
    const v_w = Number(volumeOfWater?.replace(/,/g, ""));
    let h_b = Number(depthOfBreach?.replace(/,/g, ""));
    let h_d = Number(heightOfDam?.replace(/,/g, ""));
    let w_avg = Number(averageWidth?.replace(/,/g, ""));
    const useRecalibratedQ = originalOrRecalibratedQ === "recalibrated";
    const useRecalibratedT = originalOrRecalibratedT === "recalibrated";
    if (!h_w || !v_w) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "result-container text-center border-1 border-white rounded-xl p-5 place-content-center text-orange-600 text-2xl",
            children: "There's a problem with the input."
        }, void 0, false, {
            fileName: "[project]/components/results.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    if (!h_b) {
        h_b = h_w;
    }
    if (!h_d) {
        h_d = h_w;
    }
    if (!w_avg) {
        w_avg = h_d * 2.6;
    }
    const inputDam = {
        h_w: h_w,
        v_w: v_w,
        h_d: h_d,
        h_b: h_b,
        w_avg: w_avg,
        erodibility: erodibility,
        mode: failureMode,
        type: damType
    };
    const peakFlowPrediction = peakFlowEquation.predict(inputDam, useRecalibratedQ);
    const peakFlowUpperBound = peakFlowEquation.getUpperBoundRatio(useRecalibratedQ) * peakFlowPrediction;
    const peakFlowFormatted = parseFloat(peakFlowPrediction.toPrecision(2)).toLocaleString();
    const peakFlowUpperBoundFormatted = parseFloat(peakFlowUpperBound.toPrecision(2)).toLocaleString();
    const timeToFailurePrediction = timeToFailureEquation.predict(inputDam, useRecalibratedT);
    const timeToFailureUpperBound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$formatting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeStringFormat"])(Number(timeToFailureEquation.getLowerBoundRatio(useRecalibratedT) * timeToFailurePrediction).toPrecision(2));
    const timeToFailureFormatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$formatting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeStringFormat"])(timeToFailurePrediction);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "result-container text-center border rounded-xl p-5 grid grid-col-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "place-content-center text-lg",
                children: [
                    "The estimated peak flow is",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl font-bold",
                        children: [
                            peakFlowFormatted,
                            " m³/s,"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    "with 95% confidence that the true peak flow is less than",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl font-bold",
                        children: [
                            peakFlowUpperBoundFormatted,
                            " m³/s."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "place-content-center text-lg",
                children: [
                    "The estimated time to failure is",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl font-bold",
                        children: [
                            timeToFailureFormatted,
                            ","
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    "with 95% confidence that the true time to failure is larger than",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl font-bold",
                        children: [
                            timeToFailureUpperBound,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/results.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/results.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/results.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/utils/canvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Canvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function Canvas({ height, width, draw, dependencyArray }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (canvasRef.current) {
            const context = canvasRef.current.getContext("2d");
            if (context) {
                // context.canvas.height = height;
                // context.canvas.width = width;
                frameRef.current = requestAnimationFrame(()=>draw(context));
            }
        }
        return ()=>cancelAnimationFrame(frameRef.current);
    }, [
        height,
        width,
        draw,
        ...dependencyArray
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        width: 300,
        height: 300,
        className: "min-h-0 max-w-1/1",
        ref: canvasRef
    }, void 0, false, {
        fileName: "[project]/components/utils/canvas.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/schematic.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DamSchematic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$canvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils/canvas.tsx [app-ssr] (ecmascript)");
;
;
function DamSchematic({ heightOfWater, depthOfBreach, heightOfDam, averageWidth }) {
    const draw = (ctx)=>{
        let h_w = Number(heightOfWater?.replace(/,/g, ""));
        let h_b = Number(depthOfBreach?.replace(/,/g, ""));
        let h_d = Number(heightOfDam?.replace(/,/g, ""));
        let w_avg = Number(averageWidth?.replace(/,/g, ""));
        let assumedHb = false;
        let assumedHd = false;
        let assumedWavg = false;
        if (!h_w) {
            h_w = 1;
        }
        if (!h_d) {
            h_d = h_b ? h_b : h_w;
            assumedHd = true;
        }
        if (!h_b) {
            h_b = h_d;
            assumedHb = true;
        }
        if (!w_avg) {
            w_avg = h_d * 2.6;
            assumedWavg = true;
        }
        if (ctx) {
            const wMax = ctx.canvas.width;
            const hMax = ctx.canvas.height;
            const verticalExaggeration = 2;
            // Calculate maximum unit sizes for the figure
            let hBUnitLimit = hMax / 4 * h_d / (h_b - h_d);
            let hWUnitLimit = (3 / 4 * hMax - 16) * h_d / (h_d - h_b + h_w);
            // Ensure non-negative upper limits
            hBUnitLimit = hBUnitLimit > 0 ? hBUnitLimit : Infinity;
            hWUnitLimit = hWUnitLimit > 0 ? hWUnitLimit : Infinity;
            // Choose the largest unit size that satisfies all upper limits
            const unit = Math.min(1 / 2 * hMax, hBUnitLimit, hWUnitLimit, (wMax / 2 - 30) * 8 * h_d * verticalExaggeration / (3 * h_d * verticalExaggeration + 8 * w_avg));
            // Set up dam dimensions based on "unit" length, defined above
            const wCrest = w_avg > h_d * 3 / 4 ? unit * 3 / 4 : w_avg / h_d * unit;
            const baseY = hMax * 3 / 4;
            const crestY = baseY - unit;
            const breachY = crestY + h_b / h_d * unit;
            const waterY = breachY - h_w / h_d * unit;
            const leftCrestX = wMax / 2 - wCrest / 2;
            const rightCrestX = wMax / 2 + wCrest / 2;
            const slope = (w_avg / h_d * unit - wCrest) / unit;
            const leftToeX = leftCrestX - unit * slope / verticalExaggeration;
            const rightToeX = rightCrestX + unit * slope / verticalExaggeration;
            // 2D dam shape
            ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            ctx.moveTo(0, baseY);
            ctx.lineTo(leftToeX, baseY);
            ctx.lineTo(leftCrestX, crestY);
            ctx.lineTo(rightCrestX, crestY);
            ctx.lineTo(rightToeX, baseY);
            ctx.lineTo(wMax, baseY);
            ctx.stroke();
            // Add 3D effect
            ctx.lineWidth = 1;
            const length3d = 50;
            const ratio3d = 6;
            ctx.beginPath();
            ctx.moveTo(leftCrestX, crestY);
            ctx.lineTo(leftCrestX + length3d * ratio3d, crestY - length3d);
            ctx.moveTo(rightCrestX, crestY);
            ctx.lineTo(rightCrestX + length3d * ratio3d, crestY - length3d);
            ctx.moveTo(rightToeX, baseY);
            ctx.lineTo(rightToeX + length3d * ratio3d, baseY - length3d);
            ctx.stroke();
            // Mark crest height and dam foundation
            ctx.setLineDash([
                5,
                5
            ]);
            ctx.beginPath();
            ctx.moveTo(0, crestY);
            ctx.lineTo(leftCrestX, crestY);
            ctx.stroke();
            if (Math.abs(breachY - baseY) > 10) {
                // Draw dam foundation
                ctx.setLineDash([]);
                ctx.beginPath();
                ctx.moveTo(0, baseY);
                ctx.lineTo(wMax, baseY);
                ctx.stroke();
            }
            // Breach depth
            ctx.setLineDash([
                10,
                10
            ]);
            ctx.strokeStyle = "#ff6900";
            ctx.beginPath();
            ctx.moveTo(0, breachY);
            ctx.lineTo(wMax, breachY);
            ctx.stroke();
            ctx.font = "italic 16px serif";
            ctx.fillStyle = "#ff6900";
            ctx.textAlign = "right";
            ctx.fillText("breach depth", wMax - 3, breachY - 4);
            // Water height
            ctx.setLineDash([]);
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, waterY);
            const waterLineX = Math.min(leftCrestX - slope * (waterY - crestY) / 2, wMax / 2);
            ctx.lineTo(waterLineX, waterY);
            ctx.stroke();
            ctx.textAlign = "left";
            ctx.fillText("water level", 3, waterY - 4);
            // Add dimensions
            ctx.lineWidth = 2;
            ctx.strokeStyle = "white";
            if (!assumedHd) {
                drawDimension(ctx, h_d, 30, baseY, 30, crestY, [
                    9,
                    0
                ], assumedHd, true);
            }
            if (!assumedHb) {
                drawDimension(ctx, h_b, 10, breachY, 10, crestY, [
                    9,
                    0
                ], assumedHb, true);
            }
            drawDimension(ctx, h_w, 50, breachY, 50, waterY, [
                9,
                0
            ], false, true);
            drawDimension(ctx, assumedWavg ? Math.round(w_avg) : w_avg, (leftToeX + leftCrestX) / 2, hMax - 1 / 4 * unit, (rightToeX + rightCrestX) / 2, hMax - 1 / 4 * unit, [
                0,
                -9
            ], assumedWavg);
            // leader lines from width dimension
            ctx.setLineDash([
                5,
                5
            ]);
            ctx.lineWidth = 1;
            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.moveTo((leftToeX + leftCrestX) / 2, (baseY + crestY) / 2 + 7);
            ctx.lineTo((leftToeX + leftCrestX) / 2, hMax - 1 / 4 * unit + 7);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo((rightToeX + rightCrestX) / 2, (baseY + crestY) / 2 + 7);
            ctx.lineTo((rightToeX + rightCrestX) / 2, hMax - 1 / 4 * unit + 7);
            ctx.stroke();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$canvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            width: 400,
            height: 300,
            draw: draw,
            dependencyArray: [
                heightOfDam,
                heightOfWater,
                depthOfBreach,
                averageWidth
            ]
        }, void 0, false, {
            fileName: "[project]/components/schematic.tsx",
            lineNumber: 194,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/schematic.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
function drawDoubleArrow(ctx, x1, y1, x2, y2) {
    const tipLength = 7;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const tipRatio = tipLength / (dx ** 2 + dy ** 2) ** 0.5;
    const arrowTipDir1 = [
        dx * 3 ** 0.5 / 2 + dy / 2,
        dx * -1 / 2 + dy * 3 ** 0.5 / 2
    ];
    const arrowTipDir2 = [
        dx * 3 ** 0.5 / 2 - dy / 2,
        dx / 2 + dy * 3 ** 0.5 / 2
    ];
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + arrowTipDir1[0] * tipRatio, y1 + arrowTipDir1[1] * tipRatio);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + arrowTipDir2[0] * tipRatio, y1 + arrowTipDir2[1] * tipRatio);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2 - arrowTipDir1[0] * tipRatio, y2 - arrowTipDir1[1] * tipRatio);
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - arrowTipDir2[0] * tipRatio, y2 - arrowTipDir2[1] * tipRatio);
    ctx.stroke();
}
function drawDimension(ctx, dimensionValue, x1, y1, x2, y2, offset, assumed, rotate) {
    let displayValue = assumed ? "~" : "";
    displayValue += dimensionValue.toLocaleString();
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = "bold 16px serif";
    ctx.fillStyle = assumed ? "#cfcfcfff" : "white";
    ctx.translate((x1 + x2) / 2 + offset[0], (y1 + y2) / 2 + offset[1]);
    if (rotate) {
        ctx.rotate(Math.PI / 2);
    }
    ctx.fillText(displayValue, 0, 0);
    ctx.resetTransform();
    return drawDoubleArrow(ctx, x1, y1, x2, y2);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$descriptionInputs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/descriptionInputs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$numericalInputs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/numericalInputs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/results.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$schematic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/schematic.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ToolContainer() {
    const [heightOfWater, setHeightOfWater] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("5.0");
    const [volumeOfWater, setVolumeOfWater] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("30,000");
    const [depthOfBreach, setDepthOfBreach] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [heightOfDam, setHeightOfDam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [averageWidth, setAverageWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [failureMode, setFailureMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("overtopping");
    const [erodibility, setErodibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("medium");
    const [damType, setDamType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("homogenous-fill");
    const [originalOrRecalibratedQ, setRecalibratedQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("original");
    const [originalOrRecalibratedT, setRecalibratedT] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("original");
    const [peakFlowEquationName, setPeakFlowEquation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Froehlich (1995a)");
    const [timeToFailureEquationName, setTimeToFailureEquation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Froehlich (1995b)");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl mx-auto bg-slate-900 max-w-9/10 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-x-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "canvasWrapper self-stretch flex justify-center min-h-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$schematic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            heightOfWater: heightOfWater,
                            depthOfBreach: depthOfBreach,
                            heightOfDam: heightOfDam,
                            averageWidth: averageWidth
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$descriptionInputs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DamDescriptionContainer"], {
                        peakFlowEquationName: peakFlowEquationName,
                        onPeakFlowEquationChange: setPeakFlowEquation,
                        timeToFailureEquationName: timeToFailureEquationName,
                        onTimeToFailureEquationChange: setTimeToFailureEquation,
                        failureMode: failureMode,
                        onFailureModeChange: setFailureMode,
                        erodibility: erodibility,
                        onErodibilityChange: setErodibility,
                        damType: damType,
                        onDamTypeChange: setDamType,
                        originalOrRecalibratedQ: originalOrRecalibratedQ,
                        onRecalibratedQChange: setRecalibratedQ,
                        originalOrRecalibratedT: originalOrRecalibratedT,
                        onRecalibratedTChange: setRecalibratedT
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-x-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$numericalInputs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumericalInputContainer"], {
                        heightOfWater: heightOfWater,
                        onHeightOfWaterChange: setHeightOfWater,
                        volumeOfWater: volumeOfWater,
                        onVolumeOfWaterChange: setVolumeOfWater,
                        depthOfBreach: depthOfBreach,
                        onDepthOfBreachChange: setDepthOfBreach,
                        heightOfDam: heightOfDam,
                        onHeightOfDamChange: setHeightOfDam,
                        averageWidth: averageWidth,
                        onAverageWidthChange: setAverageWidth
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$results$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResultContainer"], {
                        peakFlowEquationName: peakFlowEquationName,
                        timeToFailureEquationName: timeToFailureEquationName,
                        originalOrRecalibratedQ: originalOrRecalibratedQ,
                        originalOrRecalibratedT: originalOrRecalibratedT,
                        heightOfWater: heightOfWater,
                        volumeOfWater: volumeOfWater,
                        depthOfBreach: depthOfBreach,
                        heightOfDam: heightOfDam,
                        averageWidth: averageWidth,
                        erodibility: erodibility,
                        damType: damType,
                        failureMode: failureMode
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrapper-masthead",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "masthead",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "site-name",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "site-name text-4xl ml-30 mt-10 font-bold font-serif",
                                children: "Dam Breach Characteristics Tool"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "main",
                role: "main",
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "page mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl pb-4 font-light text-stone-200",
                            children: "Using empirical equations to predict embankment dam breach characteristics."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg",
                            children: [
                                "This tool uses empirical equations for dam breach characteristics as well as findings from the Yassin et al. (2025) study evaluating and recalibrating these equations to produce estimates for the",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "peak flow"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                ",",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: " time to failure"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 30
                                }, this),
                                ", and ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: " breach width"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 59
                                }, this),
                                " ",
                                "of an embankment dam failure."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg",
                            children: "To use the tool, enter the required parameters below. See the schematic below for information about each parameter."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto flex max-w-7/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/dimension_schematic.png",
                                alt: "Schematic of an embankment dam with labelled dimensions for the height of water, the height of the dam, the depth of the breach, and the live storage volume.",
                                className: "schematic invert p-5",
                                width: 600,
                                height: 400
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolContainer, {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                    id: "peak-flow-plot"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                className: "text-lg",
                                children: "The reliability and accuracy of any results obtained from this tool should be carefully examined by experienced engineers. In no event shall the creator of this tool be liable for lost profits or any special, incidental or consequential damages arising out of or in connection with use of this tool regardless of cause."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrapper-footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "footer",
                        children: "Copyright © 2025."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__18d4a8d2._.js.map