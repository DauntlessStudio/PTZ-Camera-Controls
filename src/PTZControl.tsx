import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import * as api from "./api/index.ts";

export default function PTZControl() {
  const presets = useSignal<api.Preset[]>();
  const selectedPreset = useSignal<number>(0);

  // Fetch presets on mount
  useEffect(() => {
    // api.reqSetExposureManual();
    // api.reqSetExposureShutter();
    // api.reqSetVerticalFlip();

    api.reqGetPresets()
    .then(data => {
      presets.value = data;
      if (presets.value.length) {
        selectPreset(presets.value[0].PresetID);
      }
    });
  }, []);

  function selectPreset(idx: number) {
    if (presets.value && presets.value.length) {
      const preset = presets.value.find(p => p.PresetID === idx);

      if (preset) {
        api.reqSetPreset(preset);
        selectedPreset.value = preset.PresetID;
      }
    }
  }

  // Home button
  function goHome() {
    if (selectedPreset.value !== null) {
      selectPreset(selectedPreset.value);
    }
  }

  return (
    <div class="flex flex-col items-center justify-center w-full text-black">
      {/* Controls Section */}
      <div class="w-full flex flex-col items-center mb-8">
        <div class="text-xl font-semibold mb-2">Controls</div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <div class="flex flex-row items-center gap-8">
          {/* Arrow grid */}
          <div class="grid grid-cols-3 grid-rows-3 gap-2">
            <div></div>
            <button
              type="button"
              class="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow hover:bg-green-100 text-black"
              onMouseDown={() => api.reqSetPTZ("Up")}
              onMouseUp={() => api.reqSetPTZ("Stop")}
              onMouseLeave={() => api.reqSetPTZ("Stop")}
            >
              <i class="fa-solid fa-arrow-up fa-lg text-black"></i>
            </button>
            <div></div>
            <button
              type="button"
              class="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow hover:bg-green-100 text-black"
              onMouseDown={() => api.reqSetPTZ("Left")}
              onMouseUp={() => api.reqSetPTZ("Stop")}
              onMouseLeave={() => api.reqSetPTZ("Stop")}
            >
              <i class="fa-solid fa-arrow-left fa-lg text-black"></i>
            </button>
            <button
              type="button"
              class="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow border-2 border-blue-400 hover:bg-blue-100 text-black"
              onClick={goHome}
            >
              <i class="fa-solid fa-house fa-lg text-black"></i>
            </button>
            <button
              type="button"
              class="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow hover:bg-green-100 text-black"
              onMouseDown={() => api.reqSetPTZ("Right")}
              onMouseUp={() => api.reqSetPTZ("Stop")}
              onMouseLeave={() => api.reqSetPTZ("Stop")}
            >
              <i class="fa-solid fa-arrow-right fa-lg text-black"></i>
            </button>
            <div></div>
            <button
              type="button"
              class="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow hover:bg-green-100 text-black"
              onMouseDown={() => api.reqSetPTZ("Down")}
              onMouseUp={() => api.reqSetPTZ("Stop")}
              onMouseLeave={() => api.reqSetPTZ("Stop")}
            >
              <i class="fa-solid fa-arrow-down fa-lg text-black"></i>
            </button>
            <div></div>
          </div>
          {/* Zoom controls */}
          <div class="flex flex-col gap-4">
            <button
              type="button"
              class="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow hover:bg-green-100 text-2xl text-black"
              onMouseDown={() => api.reqSetZoom("ZoomTele")}
              onMouseUp={() => api.reqSetZoom("ZoomStop")}
              onMouseLeave={() => api.reqSetZoom("ZoomStop")}
            >
              <i class="fa-solid fa-plus fa-lg text-black"></i>
            </button>
            <button
              type="button"
              class="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow hover:bg-green-100 text-2xl text-black"
              onMouseDown={() => api.reqSetZoom("ZoomWide")}
              onMouseUp={() => api.reqSetZoom("ZoomStop")}
              onMouseLeave={() => api.reqSetZoom("ZoomStop")}
            >
              <i class="fa-solid fa-minus fa-lg text-black"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Presets Section */}
      <div class="w-full flex flex-col items-center">
        <div class="text-xl font-semibold mb-2">Presets</div>
        <div class="grid grid-cols-4 gap-4 w-full max-w-xl">
          {presets.value?.map(preset => (
            <div key={preset.PresetName} class="flex flex-col items-center gap-1">
              <span class="text-base font-medium mb-1 text-center truncate w-full max-w-[6.0rem] text-black" title={preset.PresetName}>{preset.PresetName}</span>
              <button
                type="button"
                class={`rounded-lg w-14 h-14 flex items-center justify-center text-xl font-bold shadow-lg transition-all border-2 text-black
                  ${selectedPreset.value === preset.PresetID ? "border-green-500 bg-green-200 shadow-green-400/60" : "border-red-400 bg-red-100 shadow-red-400/40"}`}
                onClick={() => selectPreset(preset.PresetID)}
              >
                {preset.PresetName}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
