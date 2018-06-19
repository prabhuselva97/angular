import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // private _url: string ="https://form-cefa5.firebaseio.com/data.json";
  constructor(private _http: Http){
    

  }
 
  onSubmit(value: any){
    // const data=value;
    
    const url = 'https://form-cefa5.firebaseio.com/data.json';
    this._http.post(url,value)
    .subscribe(rsp => console.log(rsp));
    console.log("Posted");
  }
}
