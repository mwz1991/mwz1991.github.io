/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';

// Put variables in global scope to make them available to the browser console.
var video = document.querySelector('video');
var canvas = window.canvas = document.querySelector('canvas');
canvas.width = 480;
canvas.height = 360;

var button = document.querySelector('button');
button.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').
    drawImage(video, 0, 0, canvas.width, canvas.height);
};

var constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console

  video.srcObject = stream;
}

function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}


if (navigator.getUserMedia)
{
    /*//qq浏览器不支持
    if (navigator.userAgent.indexOf('MQQBrowser') > -1) {
        alert('对不起，您的浏览器不支持拍照功能，请使用其他浏览器', '提示');
        return false;
    }*/
    navigator.getUserMedia(videoObj, function (stream) {
        console.log(stream);
        video.src = stream;
        video.play();
    }, MediaErr);
}
else if(navigator.webkitGetUserMedia)
{
    navigator.webkitGetUserMedia(videoObj, function (stream)
    {
        console.log(stream);
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
    }, MediaErr);
}
else if (navigator.mozGetUserMedia)
{
    navigator.mozGetUserMedia(videoObj, function (stream) {
        console.log(stream);
        video.src = window.URL.createObjectURL(stream);
        video.play();
    }, MediaErr);
}
else if (navigator.msGetUserMedia)
{
    navigator.msGetUserMedia(videoObj, function (stream) {
        console.log(stream);
        $(document).scrollTop($(window).height());
        video.src = window.URL.createObjectURL(stream);
        video.play();
    }, MediaErr);
}else{
    alert('对不起，您的浏览器不支持拍照功能，请使用其他浏览器');

}
/*navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);*/
