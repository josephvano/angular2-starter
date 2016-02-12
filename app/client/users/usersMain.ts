import { bootstrap } from "angular2/platform/browser"
import { UsersAppComponent } from "./usersApp";
import { HTTP_PROVIDERS } from "angular2/http";

console.log("Initializing application");

document.addEventListener("DOMContentLoaded", () => {

  bootstrap(UsersAppComponent, [HTTP_PROVIDERS]);

});
