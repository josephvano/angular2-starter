import { Component } from "angular2/core";
import { UsersSearchService } from "./UsersSearchService";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "users-app",
  providers: [UsersSearchService],
  template: `
    <h3>Users Application</h3>
    <input #query (keyup)="search(query.value)" />
    <button (click)="search(query.value)">Search</button>
    <ul>
      <li *ngFor="#item of results | async">
        {{item.Name}} - {{item.Email}}
      </li>
    </ul>
  `
})
export class UsersAppComponent{
  //results: Observable<any[]>;

  private _stream = new Subject<string>();
  public results:Observable<any[]>;

  constructor(public searchService: UsersSearchService){
    this.results = this._stream.debounceTime(300).distinctUntilChanged()
    .switchMap( (term:string) => this.searchService.search(term));


    var mouseDownStream = Observable.fromEvent(document, "mousedown");

    mouseDownStream
    .map( (e:any) => {
      return {
        x : e.clientX,
        y : e.clientY
      }
    })
    .subscribe( (x:any) =>{
      console.log(x);
    });
  }

  search(term:string){
    if(term === ""){
      return;
    }

    console.log(`searching ${term}`);

    this._stream.next(term);

    //this.results = this.searchService.search(term);
  }
}
