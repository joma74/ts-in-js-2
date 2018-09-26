/// <reference types="ts-in-js-1/types/std-global" />
/// <reference types="ts-in-js-1/types/node-global" />

/**
 * @typedef {import("ts-in-js-1").Clazz1a} Clazz1a
 */

var tsinjs1 = require("ts-in-js-1")

var clazz1a = require("ts-in-js-1/clazz1a")
var clazz1b = require("ts-in-js-1/clazz1b")

var clazz1aInstance = new clazz1a();
var clazz1bInstance = new clazz1b(clazz1aInstance);

var globalstring=aglobalstringFromTsInJs2

/**
 * ISSUE 
 * 1. Only on <reference types="ts-in-js-1/types/global" getErrorAsString and clazz1bGlobalVar are available for code completion
 * 2. On global.getErrorAsString... , everything is fine with code completion; no error
 * 3. But as soon as global.clazz1bGlobalVar is defined, global.getErrorAsString is marked as "...does not exist on type 'typeof global'"
 * 4. After that, one can assign anything to clazz1bGlobalVar, even a string
 */
global.getErrorAsString(new Error("abc"))
global.clazz1bGlobalVar=clazz1bInstance

var resultTsInJs1 = tsinjs1.member1bClazz1a.getExtensionFor("text/html");

tsinjs1.getErrorAsString(new Error("abc"))

var resultTsInJs2 = clazz1bInstance.getExtensionFor("text/html");

clazz1bInstance.getErrorAsString(new Error("abc"))

module.exports={resultTsInJs1, resultTsInJs2}