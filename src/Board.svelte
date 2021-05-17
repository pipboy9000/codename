<script>
  import { vocab } from "./vocab";
  import { base64_to_base10 } from "./utils.js";
  import Card from "./Card.svelte";

  export let hash;

  let words = [];
  let colors = [];
  let board = [];

  let wordsHash = null;
  let colorsHash = null;

  $: {
    wordsHash = hash.length >= 5 ? hash.substring(0, 5) : null; //get first part of the hash
    wordsHash = wordsHash ? base64_to_base10(wordsHash) : null; //convert to decimal number
    colorsHash = hash.length == 10 ? hash.substring(5, 10) : null; //get first part of the hash
    colorsHash = colorsHash ? base64_to_base10(colorsHash) : null; //convert to decimal number

    //select words by words hash
    if (wordsHash) {
      words = [];
      let vocabCopy = [...vocab];
      while (words.length < 25) {
        let idx = vocabCopy.length > 1 ? wordsHash % (vocabCopy.length - 1) : 0;
        words.push(vocabCopy[idx]);
        vocabCopy[idx] = vocabCopy[vocabCopy.length - 1];
        vocabCopy.pop();
      }
    }

    //colors
    if (colorsHash) {
      colors = [];
      let colorsCopy = [
        "red",
        "red",
        "red",
        "red",
        "red",
        "red",
        "red",
        "red",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "bomb",
      ];
      while (colors.length < 25) {
        let idx =
          colorsCopy.length > 1 ? colorsHash % (colorsCopy.length - 1) : 0;
        colors.push(colorsCopy[idx]);
        colorsCopy[idx] = colorsCopy[colorsCopy.length - 1];
        colorsCopy.pop();
      }
    }

    board = [];
    words.forEach((word, idx) => {
      board.push({
        word,
        color: colors[idx],
        show: "back",
      });
    });
  }
</script>

<div class="board">
  {#each board as cell}
    <Card {cell} />
  {/each}
</div>

<style>
  .board {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 15px 15px;
    grid-template-areas:
      ". . . . ."
      ". . . . ."
      ". . . . ."
      ". . . . ."
      ". . . . .";
    padding: 15px;
    box-sizing: border-box;
  }
</style>
