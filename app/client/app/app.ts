import { Component } from "angular2/core"
import { HeaderComponent } from "../header/header"

@Component({
  selector: 'app',
  directives: [HeaderComponent],
  template: `
    <custom-header></custom-header>
  `
})
export class AppComponent{}
