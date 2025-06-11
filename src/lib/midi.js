import { hit, shoot } from "$lib/player.js";
import { WebMidi } from "webmidi";

const PROGRESSION = ["C", "D", "E", "F", "G"].reverse();

let started = false;

/**
 * Starts MIDI and adds listeners
 * @returns {boolean} true if MIDI was enabled
 */
export async function startMidi() {
  try {
    await WebMidi.enable();
    await startMidiListeners();

    started = true;
    return true;
  } catch (err) {
    console.error("Failed to start MIDI", err);
    started = false;
    return false;
  }
}

export function isMidiEnabled() {
  return started;
}

function startMidiListeners() {
  WebMidi.inputs.forEach((input) => console.log("Input:", input.manufacturer, input.name));
  WebMidi.outputs.forEach((output) => console.log("Output:", output.manufacturer, output.name));

  // assign notes:
  WebMidi.inputs.forEach((input) => {
    input.addListener("noteon", "all", (e) => {
      //console.log("noteon", e.note.name, e.note.octave, e.velocity);
      shoot();

      const keyIndex = 1 + PROGRESSION.indexOf(e.note.name);
      if (keyIndex > 0) {
        hit(String(keyIndex));
      }
    });
  });
}
