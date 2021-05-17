import Home from "./Home.svelte";

export const routes = {
  // Exact path
  "/": Home,

  // Using named parameters, with last being optional
  "/:hash": Home,
};
