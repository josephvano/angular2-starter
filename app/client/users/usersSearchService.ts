import { Injectable } from "angular2/core";
import { Http, Response } from "angular2/http";

@Injectable()
export class UsersSearchService {
  constructor(private http: Http){
  }

  search(term: string){
    console.info(`Searching: ${term}`);

    return this.http
              .get(`/users/api/${term}`)
              .map( (res) => {
                return res.json();
              });
  }
}
