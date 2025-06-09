<script>
  import { hit } from "$lib/player.js";

  let { children } = $props();

  /**
   * Test function
   * @param {Event} event
   */
  function playIndexedSound(event) {
    const index = event.target.dataset.index;
    hit(index);
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_missing_attribute -->
<a role="button" tabindex="0" onclick={playIndexedSound}>
  {@render children?.()}
</a>
