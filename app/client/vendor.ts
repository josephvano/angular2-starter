// Polyfills
import "rxjs/add/operator/map";
import "es6-shim"

import "es6-promise"


import "reflect-metadata"


if("production" === process.env.NEV){
  require("zone.js/dist/zone-microtask.min");

  const ngCore = require("angular2/core");
  ngCore.enableProdMode();
}
else {

  Error['stackTraceLimit'] = Infinity;

  require("zone.js/dist/zone-microtask");
  require("zone.js/dist/long-stack-trace-zone");
}

