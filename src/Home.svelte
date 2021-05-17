<script>
  import { newCode, copyToClipboard } from "./utils.js";
  import Board from "./Board.svelte";
  import { push, location } from "svelte-spa-router";
  import IoIosSettings from "svelte-icons/io/IoIosSettings.svelte";
  import FaUserTie from "svelte-icons/fa/FaUserTie.svelte";
  import FaUserSecret from "svelte-icons/fa/FaUserSecret.svelte";

  export let params;

  export let showSettings = false;
</script>

{#if params.hash.length >= 5}
  <Board hash={params.hash} />
  <div
    class="settingsBtn"
    on:click={() => {
      showSettings = true;
    }}
  >
    <IoIosSettings />
  </div>
  {#if showSettings}
    <div
      class="settings"
      on:click={() => {
        showSettings = false;
      }}
    >
      <button
        disabled={params.hash.length != 10}
        on:click|stopPropagation={() => {
          copyToClipboard("https://shemcode.netlify.app/#" + $location);
        }}
        ><div class="btnIcon">
          <img src="./operator.svg" />
        </div>
        העתק לינק למפעיל</button
      >
      <button
        on:click|stopPropagation={() => {
          copyToClipboard(
            "https://shemcode.netlify.app/#" + $location.substr(0, 6)
          );
        }}
        ><div class="btnIcon"><FaUserSecret /></div>
        העתק לינק לסוכן</button
      >
      <button
        on:click={() => {
          push("/" + newCode(10));
        }}><p>משחק חדש</p></button
      >
    </div>
  {/if}
{:else}
  <div class="error">
    <div class="msgBg">
      <p>קוד שגוי</p>
      <button
        on:click={() => {
          push("/" + newCode(10));
        }}>לוח חדש</button
      >
    </div>
  </div>
{/if}

<style>
  .error {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .msgBg {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    background: white;
    border-radius: 4px;
  }

  .settingsBtn {
    position: fixed;
    bottom: 0;
    right: 0;
    background: #333333;
    color: white;
    width: 70px;
    border-radius: 100px;
    display: flex;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 4px solid white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0 3px #333;
  }

  .settings {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: #00000087;
  }

  .settings > button {
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: content-box;
    width: 100%;
    max-width: 300px;
    font-size: 20px;
    font-weight: 500;
  }

  .btnIcon {
    width: 40px;
    max-width: 40px;
    max-height: 40px;
    margin-right: auto;
  }
</style>
