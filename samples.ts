// Exposure to Manual
fetch("http://192.168.1.123/cmdparse", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  "referrer": "http://192.168.1.123/video_parameters_self4k.html",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={\"Cmd\":\"ReqSetVideoParam\",\"wCmdId\":40001090,\"Content\":{\"ChanNum\":0,\"VideoParam\":{\"eExposureMode\":1}}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

// Exposure to 1/50
fetch("http://192.168.1.123/cmdparse", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  "referrer": "http://192.168.1.123/video_parameters_self4k.html",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={\"Cmd\":\"ReqSetVideoParam\",\"wCmdId\":40001090,\"Content\":{\"ChanNum\":0,\"VideoParam\":{\"uiMShutterSpeed\":30}}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

// Vertical Flip On
fetch("http://192.168.1.123/cmdparse", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  "referrer": "http://192.168.1.123/video_parameters_self4k.html",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={\"Cmd\":\"ReqSetVideoParam\",\"wCmdId\":40001090,\"Content\":{\"ChanNum\":0,\"VideoParam\":{\"bVertInvert\":1}}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

// Get Presets
fetch("http://192.168.1.123/cmdparse", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  "referrer": "http://192.168.1.123/realPlay.html?randomnumber=98159",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={\"Cmd\":\"ReqGetPreset\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

// Invoke Preset
fetch("http://192.168.1.123/cmdparse", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  "referrer": "http://192.168.1.123/realPlay.html?randomnumber=98159",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={\"Cmd\":\"ReqPresetCtrl\",\"Content\":{\"PresetCmd\":\"Call\",\"PresetID\":1,\"PresetName\":\"Wide_Shot\"}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

// PTZ Down
// Change "Down" string to Left, Right, Up, and swap ParamV for ParamH if moving horizontally
fetch("http://192.168.1.123/cmdparse", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  "referrer": "http://192.168.1.123/realPlay.html?randomnumber=98159",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={\"Cmd\":\"ReqPtzCtrl\",\"Content\":{\"PtzCmd\":\"Down\",\"ParamH\":0,\"ParamV\":26}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

// PTZ Stop
fetch("http://192.168.1.123/cmdparse", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  "referrer": "http://192.168.1.123/realPlay.html?randomnumber=98159",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={\"Cmd\":\"ReqPtzCtrl\",\"Content\":{\"PtzCmd\":\"Stop\",\"ParamH\":0,\"ParamV\":0}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

// Zoom Out
fetch("http://192.168.1.123/cmdparse", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  "referrer": "http://192.168.1.123/realPlay.html?randomnumber=98159",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={\"Cmd\":\"ReqPtzCtrl\",\"Content\":{\"PtzCmd\":\"ZoomWide\",\"ParamH\":5,\"ParamV\":5}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

// Zoom in
fetch("http://192.168.1.123/cmdparse", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  "referrer": "http://192.168.1.123/realPlay.html?randomnumber=98159",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={\"Cmd\":\"ReqPtzCtrl\",\"Content\":{\"PtzCmd\":\"ZoomTele\",\"ParamH\":5,\"ParamV\":5}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

// Zoom Stop
fetch("http://192.168.1.123/cmdparse", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  "referrer": "http://192.168.1.123/realPlay.html?randomnumber=98159",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={\"Cmd\":\"ReqPtzCtrl\",\"Content\":{\"PtzCmd\":\"ZoomStop\",\"ParamH\":0,\"ParamV\":0}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});