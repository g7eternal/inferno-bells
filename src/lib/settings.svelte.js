import { browser } from "$app/environment";

const LS_KEY = "inferno-bell-settings";

export const settings = $state({
  volume: 50,
  shots: true,
});

if (browser) {
  try {
    const data = JSON.parse(localStorage.getItem(LS_KEY));
    Object.keys(settings).forEach((k) => {
      if (k in data) settings[k] = data[k];
    });
  } catch (e) {
    console.warn("Failed to load settings", e);
  }

  // auto-save settings:
  $effect.root(() => {
    $effect(() => {
      localStorage.setItem(LS_KEY, JSON.stringify(settings));
    });
  });
}
