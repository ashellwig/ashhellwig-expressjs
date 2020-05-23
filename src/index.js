// --- Import Libraries ---
// Polyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime.js'

// Command line argument parser
import * as argv from 'yargs'

argv.count('verbose').alias('v', 'verbose')

const VERBOSE_LEVEL = argv.verbose

function WARN () { VERBOSE_LEVEL >= 0 && console.log.apply(console, arguments) }
function INFO () { VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments) }
function DEBUG () { VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments) }
