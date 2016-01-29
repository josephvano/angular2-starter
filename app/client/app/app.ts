import { Component, ViewEncapsulation } from "angular2/core";
import { HeaderComponent } from "../header/header";
import { Notify } from "../lib/notify";

@Component({
  selector: 'app',
  directives: [HeaderComponent],
  encapsulation: ViewEncapsulation.Native,
  styles: [require("!raw!./styling.css")],
  template: `
    <custom-header></custom-header>
    <button (click)="doSomething()">Do Something</button>
    <p>
    SImple paragraph
    </p>
  `
})
export class AppComponent{
  notify: Notify;

  constructor(){
    this.notify = new Notify();
  }

  doSomething(){
    console.log("do something called");
    this.notify.warn("Hope this works");
  }
}
