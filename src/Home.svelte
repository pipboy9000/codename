<script>
  import Board from "./Board.svelte";

  export let params;
</script>

<Board hash={params.hash} />

<style>
  /* your styles go here */
</style>
