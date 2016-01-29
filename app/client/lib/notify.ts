import * as $ from "jquery";
import "jquery.growl";

import "style!css!../../../node_modules/jquery.growl/stylesheets/jquery.growl.css";

export class Notify{
  warn(message: string){
    $.growl({ message: message });
  }
}
