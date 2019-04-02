import { Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpHeaders, HttpResponse} from "@angular/common/http";
import {map} from "rxjs/operators";
@Injectable()

export class ServerService {
  constructor(private http:Http){
  }

  storeServers(servers:any[]){
    const headers=new Headers({'Content-Type':'application/json'});
   // return  this.http.post('https://http-start-63b92.firebaseio.com/data.json',servers,{headers:headers})
    return  this.http.put('https://http-start-63b92.firebaseio.com/data.json',servers,{headers:headers})
  }

  getServers(){
    return this.http.get('https://http-start-63b92.firebaseio.com/data.json')
      .pipe(map(response=> response.json()
    ))
  }
}
