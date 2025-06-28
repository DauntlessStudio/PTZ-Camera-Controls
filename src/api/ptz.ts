import { fetch } from '@tauri-apps/plugin-http';

type Direction = "Up"|"Down"|"Left"|"Right"|"Stop";

export const reqSetPTZ = (direction: Direction) => {
    let ParamH = 0;
    let ParamV = 0;

    switch (direction)
    {
        case "Left":
        case "Right":
            ParamH = 26;
            break;
        case "Down":
        case "Up":
            ParamV: 26;
            break;
    }

    fetch("http://192.168.1.123/cmdparse", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        "referrer": "http://192.168.1.123/realPlay.html",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={"Cmd":"ReqPtzCtrl","Content":{"PtzCmd":${direction},"ParamH":${ParamH},"ParamV":${ParamV}}}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
}

type Zoom = "ZoomTele"|"ZoomWide"|"ZoomStop";

export const reqSetZoom = (zoom: Zoom) => {
    let ParamH = 0;
    let ParamV = 0;

    if (zoom !== "ZoomStop") {
        ParamH = 5;
        ParamV = 5;
    }

    fetch("http://192.168.1.123/cmdparse", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        "referrer": "http://192.168.1.123/realPlay.html",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={"Cmd":"ReqPtzCtrl","Content":{"PtzCmd":${zoom},"ParamH":${ParamH},"ParamV":${ParamV}}}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
}