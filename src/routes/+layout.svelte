<script>
  import { ModeWatcher } from "mode-watcher";
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="apple-touch-icon" sizes="112x112" href="/favicon.png" />
  <link rel="shortcut icon" href="/favicon.png" />
  <title>Inferno Bells 🔔</title>
</svelte:head>

<ModeWatcher defaultMode="dark" />

{@render children()}
