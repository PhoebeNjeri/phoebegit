import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';
import { ReposService} from './repos.service';

@Injectable()

export class GithubService {

  baseURL: string = 'https://api.github.com/';
  constructor(private http:HttpClient){
  }

  getRepos(userName:string): Observable<ReposService[]> {
       return this.http.get<ReposService[]>(this.baseURL + 'users/' + userName + '/repos');
  }
}