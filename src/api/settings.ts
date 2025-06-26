import { fetch } from '@tauri-apps/plugin-http';

export const reqSetExposureManual = () => {
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
}

export const reqSetExposureShutter = () => {
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
}

export const reqSetVerticalFlip = () => {
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
}