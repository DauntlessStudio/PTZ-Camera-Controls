import { fetch } from '@tauri-apps/plugin-http';
import { URL } from './consts';

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

    fetch(URL, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        "body": `ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={"Cmd":"ReqPtzCtrl","Content":{"PtzCmd":"${direction}","ParamH":"${ParamH}","ParamV":"${ParamV}"}}}`,
        "method": "POST"
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

    fetch(URL, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        "body": `ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={"Cmd":"ReqPtzCtrl","Content":{"PtzCmd":"${zoom}","ParamH":"${ParamH}","ParamV":"${ParamV}"}}}`,
        "method": "POST"
    });
}