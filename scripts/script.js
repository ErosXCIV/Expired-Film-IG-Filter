/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// Spark AR Studio extension for VS Code - https://fb.me/spark-vscode-plugin
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const CameraInfo = require('CameraInfo');


var booleanRecording = new Boolean(false);

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

function print(a){
    Diagnostics.log(a);
}


// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

(async function () {  // Enables async/await in JS [part 1]
    const [plane] = await Promise.all([
        Scene.root.findFirst('light leak')
    ]);

    const [planeOFF] = await Promise.all([
        Scene.root.findFirst('light leak OFF')
    ]);

    const isRecordingVideo = CameraInfo.isRecordingVideo;

    const hidePlane = isRecordingVideo;
    var hidePlaneTo = planeOFF.hidden;

   if (planeOFF.hidden === true){
       hidePlaneTo = true;
   }

    plane.hidden = hidePlane.or(hidePlaneTo);

})(); // Enables async/await in JS [part 2]
