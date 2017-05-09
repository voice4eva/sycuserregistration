import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
  constructor(private http:Http){
    console.log('User service has been initialized');
  }
  getUsers(){
    return this.http.get('http://localhost:3000/api/users').map(res => res.json());
  }
  addUser(newUser){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/user', JSON.stringify(newUser), {headers:headers}).map(res => res.json());
  }
  removeUser(id){
    return this.http.delete('http://localhost:3000/api/user/' + id).map(res => res.json());
  }
  findUsers(key){
    return this.http.get('http://localhost:3000/api/users/' + key).map(res => res.json());
  }
}
