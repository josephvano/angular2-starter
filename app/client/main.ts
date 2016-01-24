import { bootstrap } from "angular2/platform/browser"
import { HeaderComponent } from "./header/header"
import { AppComponent } from "./app/app"

console.log("Initializing application");

document.addEventListener("DOMContentLoaded", () => {

  bootstrap(AppComponent);

});
