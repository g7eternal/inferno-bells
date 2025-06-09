<script>
  import { ModeWatcher } from "mode-watcher";
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="apple-touch-icon" sizes="112x112" href="/favicon.png" />
  <link rel="shortcut icon" href="/favicon.png" />
  <title>Inferno Bells 🔔</title>
  <meta
    name="description"
    content="An interactive web application where you can play and experiment with CS2 Inferno Bells"
  />
  <meta name="keywords" content="bells, sound, playground, interactive, music, audio" />
  <meta name="author" content="G7Eternal" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Inferno Bells 🔔" />
  <meta
    property="og:description"
    content="An interactive web application where you can play and experiment with CS2 Inferno Bells"
  />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Inferno Bells 🔔" />
  <meta
    name="twitter:description"
    content="Play and experiment with different bell sounds in this interactive web application."
  />
</svelte:head>

<ModeWatcher defaultMode="dark" />

{@render children()}
