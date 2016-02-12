import { bootstrap } from "angular2/platform/browser"
import { AppComponent } from "./app/app"
import { HTTP_PROVIDERS } from "angular2/http";

console.log("Initializing application");

document.addEventListener("DOMContentLoaded", () => {

  bootstrap(AppComponent, [HTTP_PROVIDERS]);

});
