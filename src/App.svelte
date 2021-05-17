<script>
  import Router from "svelte-spa-router";
  import { routes } from "./routes";
</script>

<main>
  <Router {routes} />
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background: #1c1c1c;
  }
</style>
