import { fetch } from '@tauri-apps/plugin-http';
import { URL } from './consts';

export interface Preset {
    PresetID: number;
    PresetName: string;
}

export const reqGetPresets = async () => {
    const request = await fetch(URL, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        "body": "ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={\"Cmd\":\"ReqGetPreset\"}",
        "method": "POST",
    });

    const result = await request.json();

    return result.Content.PresetInfo as Preset[];
}

export const reqSetPreset = (preset: Preset) => {
    return fetch(URL, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        "body": `ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={"Cmd":"ReqPresetCtrl","Content":{"PresetCmd":"Call","PresetID":"${preset.PresetID}","PresetName":"${preset.PresetName}"}}}`,
        "method": "POST",
    });
}