<script>
  import { toggleMode } from "mode-watcher";
  import { CircleOffIcon, CrosshairIcon, GithubIcon, MoonIcon, SunIcon, Volume1Icon } from "lucide-svelte";
  import { settings } from "$lib/settings.svelte.js";

  /**
   * @param {Event} event
   */
  function setVolume(event) {
    settings.volume = event.target.value;
  }

  function toggleShots() {
    settings.shots = !settings.shots;
  }
</script>

<div
  class="absolute top-0 left-0 z-10 flex flex-row gap-4 rounded-br-lg border-r-2 border-b-2 border-double border-stone-400 bg-stone-200 p-2 dark:bg-stone-800"
>
  <div class="flex flex-row items-center" title="Sound volume">
    <Volume1Icon />
    <input type="range" min="0" max="100" value={settings?.volume || 0} class="w-32" oninput={setVolume} />
  </div>

  <div>
    <button onclick={toggleMode} class="relative flex text-nowrap" title="Toggle color mode">
      <SunIcon class="ml-1 !size-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <MoonIcon class="absolute ml-1 !size-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </button>
  </div>

  <div>
    <button onclick={toggleShots} title="Toggle shots sound">
      {#if settings.shots}
        <CrosshairIcon />
      {:else}
        <CircleOffIcon />
      {/if}
    </button>
  </div>

  <div>
    <a href="https://github.com/g7eternal/inferno-bells" target="_blank" title="Visit this project's repo on GitHub">
      <GithubIcon />
    </a>
  </div>
</div>
