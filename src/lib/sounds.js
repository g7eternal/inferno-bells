import { Howl, Howler } from "howler";

// attempted fix for "interact for sound" browser behavior:
Howler.autoUnlock = true;

/** @type {Map<String, Number>} */
const throttle = new Map();
export function clearSoundCache() {
  throttle.clear();
}

export class Sound {
  /**
   * Playable sound, Howler wrapper. Exposes Howler object as "sound" property.
   * @param {String} id
   * @param {String|Array<String>} url
   * @param {boolean} [preload]
   */
  constructor(id, url, preload = true) {
    if (throttle.has(id)) throw new Error("Duplicate sound ID: " + id);

    this.id = id;
    this.url = url;
    this.delay = 0;

    this.sound = new Howl({
      src: Array.isArray(url) ? url : [url],
      preload,
    });
    throttle.set(this.id, Date.now());
  }

  /**
   * @param {number} n
   */
  setDelay(n) {
    this.delay = n;
    return this;
  }

  isPlaying() {
    return this.sound.playing();
  }
  isLoaded() {
    return this.sound.state() === "loaded";
  }

  load() {
    this.sound.load();
    return this;
  }
  playNow() {
    this.sound.play();
    return this;
  }
  play() {
    const nextAllowed = throttle.get(this.id);
    if (nextAllowed <= Date.now()) {
      throttle.set(this.id, Date.now() + this.delay);
      return this.playNow();
    }

    return this;
  }
  pause() {
    this.sound.pause();
    return this;
  }
  stop() {
    this.sound.stop();
    return this;
  }
  reset() {
    this.sound.seek(0);
    return this;
  }
  /**
   * @param {number} n
   */
  seek(n) {
    this.sound.seek(n);
    return this;
  }
  /**
   * @param {number} n
   */
  volume(n) {
    this.sound.volume(n);
    return this;
  }
  unload() {
    throttle.delete(this.id);
    return this.sound.unload();
  }
}
