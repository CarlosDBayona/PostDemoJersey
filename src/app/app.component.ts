import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httppost';
  token = "";
  data = {};
  ngOnInit(){

  }

  constructor(private http: HttpClient){}

  getToken() {
    const _headers = new HttpHeaders({
      username: 'user',
      password: 'root'
    });
    this.http.post("http://localhost:8080/authorization_service", {}, {headers: _headers}).subscribe(
      (p: any) => {
        this.token = p.privateKey;
      }
    );
  }
  getData() {
    const _headers = new HttpHeaders({
      privatekey: this.token
    });
    this.http.get("http://localhost:8080/allDevices", {headers: _headers}).subscribe(
      (data) => {
        this.data = data;
        console.log(data);
      }
    );
  }
}
