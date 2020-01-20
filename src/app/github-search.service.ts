import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  apiUrl = environment.apiUrl;
  private username: string;
  private repo: string;

  constructor(private http: HttpClient) { 
    console.log("ready");
    this.username = "Winniemwikali";
    this.repo = '';
  }
  findUser(): any {
    return this.http.get("http://api.github.com/users/" + this.username + "?access_token=3f66f6f368de3e4186437492e27c7853efcc179a").pipe((res => res));
  }
  findRepos(): any{
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=3f66f6f368de3e4186437492e27c7853efcc179a").pipe((res => res));
  }
  replaceUser(username: string){
    this.username = username;
  }

}

