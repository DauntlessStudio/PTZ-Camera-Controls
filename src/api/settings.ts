import { fetch } from '@tauri-apps/plugin-http';
import { URL } from './consts';

export const reqSetExposureManual = () => {
    fetch(URL, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        "body": "ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={\"Cmd\":\"ReqSetVideoParam\",\"wCmdId\":40001090,\"Content\":{\"ChanNum\":0,\"VideoParam\":{\"eExposureMode\":1}}}",
        "method": "POST"
    });
}

export const reqSetExposureShutter = (level: number) => {
    fetch(URL, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        "body": `ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={"Cmd":"ReqSetVideoParam","wCmdId":40001090,"Content":{"ChanNum":0,"VideoParam":{"uiMShutterSpeed":${level}}}}`,
        "method": "POST"
    });
}

export const reqSetVerticalFlip = () => {
    fetch(URL, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        "body": "ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={\"Cmd\":\"ReqSetVideoParam\",\"wCmdId\":40001090,\"Content\":{\"ChanNum\":0,\"VideoParam\":{\"bVertInvert\":1}}}",
        "method": "POST"
    });
}