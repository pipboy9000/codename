<script>
  export let cell;
  let flipped = false;

  function cardClicked() {
    if (cell.color) {
      if (!flipped) {
        cell.show = cell.color;
      } else {
        cell.show = "back";
      }
      flipped = !flipped;
    } else {
      switch (cell.show) {
        case "red":
          cell.show = "blue";
          break;
        case "blue":
          cell.show = "white";
          break;
        case "white":
          cell.show = "bomb";
          break;
        case "bomb":
          cell.show = "back";
          break;
        case "back":
          cell.show = "red";
          break;
      }
    }
  }

  let bgColor = "#feffc0"; //default bg
  $: {
    switch (cell.show) {
      case "back":
        bgColor = "#feffc0";
        break;

      case "red":
        bgColor = "#eb6969";
        break;

      case "blue":
        bgColor = "#42a1e5";
        break;

      case "white":
        bgColor = "#b3b3b3";
        break;

      case "bomb":
        bgColor = "#101010";
        break;
    }
  }
</script>

<div
  class="word {cell.color}"
  on:click={cardClicked}
  style={`background:${bgColor}`}
>
  <span>{cell.word}</span>
</div>

<style>
  .word {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    box-sizing: border-box;
    background: #feffc0;
    box-shadow: 0 0 0px 2px white;
  }

  .word > span {
    background: white;
    width: 100%;
    text-align: center;
    padding: 8px;
    margin: 8px;
    border-radius: 5px;
    font-weight: 500;
  }

  .blue {
    border: 6px solid #42a1e5;
  }
  .red {
    border: 6px solid #eb6969;
  }
  .white {
    border: 6px solid #b3b3b3;
  }
  .bomb {
    border: 6px solid #000000;
  }
</style>
