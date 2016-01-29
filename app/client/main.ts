import { bootstrap } from "angular2/platform/browser"
import { AppComponent } from "./app/app"

console.log("Initializing application");
console.log("test");

document.addEventListener("DOMContentLoaded", () => {

  bootstrap(AppComponent);

});
