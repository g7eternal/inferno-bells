import { browser, dev } from "$app/environment";
import { settings } from "$lib/settings.svelte.js";
import { Sound } from "$lib/sounds.js";

const SHOT_SND_COOLDOWN = 90;
const HIT_SND_COOLDOWN = 150;

const sndFileNames = [
  "brass_bell_g.mp3",
  "brass_bell_f.mp3",
  "brass_bell_e.mp3",
  "brass_bell_d.mp3",
  "brass_bell_c.mp3",
];

const shotSound = new Sound("shot", "/sounds/glock_02.mp3", true).setDelay(SHOT_SND_COOLDOWN);

/** @type {Map<String, Sound>} */
const sounds = new Map();

/**
 * Play sound of hitting a bell
 * @param {String} key
 */
export function hit(key) {
  sounds
    .get(key)
    ?.volume(settings.volume / 100)
    .play();
}

/**
 * Play sound of a shot.
 */
export function shoot() {
  if (settings.shots) shotSound.volume(settings.volume / 100).play();
}

// automatic init:
if (browser) {
  sounds.clear();

  sndFileNames.forEach((file, i) => {
    const key = String(i + 1);
    const snd = new Sound(key, "/sounds/" + file, true).setDelay(HIT_SND_COOLDOWN);
    sounds.set(key, snd.load());
  });

  if (dev) console.log(`Done loading ${sounds.size} sounds:`, sounds);
}
