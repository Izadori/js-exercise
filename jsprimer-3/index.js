import {App} from "./src/App.js";

console.log("index.js: loaded");

const app = new App();

window.addEventListener("load", () => {
  app.mount();
});

window.addEventListener("unload", () =>{
  app.unmount();
});
