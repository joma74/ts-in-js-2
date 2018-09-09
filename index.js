/// <reference types="ts-in-js-1/types/global" />

/**
 * @typedef {import("ts-in-js-1").Clazz1a} Clazz1a
 */

var tsinjs1 = require("ts-in-js-1")

var clazz1a = require("ts-in-js-1/clazz1a")
var clazz1b = require("ts-in-js-1/clazz1b")

var clazz1aInstance = new clazz1a();
var clazz1bInstance = new clazz1b(clazz1aInstance);

global.clazz1bGlobalVar= clazz1bInstance

var resultTsInJs1 = tsinjs1.clazz1bInstance.getExtensionFor("text/html");

var resultTsInJs2 = clazz1bInstance.getExtensionFor("text/html");

module.exports={resultTsInJs1, resultTsInJs2}