/** @type {Map<String, Number>} */
const throttle = new Map();
export function clearSoundCache() {
  throttle.clear();
}

export class Sound {
  /**
   * Playable sound using standard Audio API.
   * @param {String} id
   * @param {String} url
   * @param {boolean} [preload]
   */
  constructor(id, url, preload = true) {
    if (throttle.has(id)) throw new Error("Duplicate sound ID: " + id);

    this.id = id;
    this.url = url;
    this.delay = 0;
    this._playing = false;

    // Use the first URL if an array is provided
    this.sound = new Audio(url);

    // Set up event listeners to track playing state
    this.sound.addEventListener("playing", () => {
      this._playing = true;
    });
    this.sound.addEventListener("pause", () => {
      this._playing = false;
    });
    this.sound.addEventListener("ended", () => {
      this._playing = false;
    });

    if (preload) {
      this.sound.preload = "auto";
      this.load();
    }

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
    return this._playing;
  }

  isLoaded() {
    return this.sound.readyState >= 3; // HAVE_FUTURE_DATA or HAVE_ENOUGH_DATA
  }

  load() {
    this.sound.load();
    return this;
  }

  playNow() {
    this.sound.currentTime = 0;
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
    this.sound.pause();
    this.sound.currentTime = 0;
    return this;
  }

  reset() {
    this.sound.currentTime = 0;
    return this;
  }

  /**
   * @param {number} n
   */
  seek(n) {
    this.sound.currentTime = n;
    return this;
  }

  /**
   * @param {number} n
   */
  volume(n) {
    this.sound.volume = n;
    return this;
  }

  unload() {
    throttle.delete(this.id);
    this.sound.src = "";
    this.sound.remove();
    return true;
  }
}
