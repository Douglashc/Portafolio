import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  //private readonly url = 'https://api.github.com/users/leifermendez/repos';
  private readonly url = 'https://api.github.com/users/Douglashc/repos';

  constructor(private httpClient: HttpClient) { }

  LoadRepos = () => {
    return this.httpClient.get(`${this.url}?type=owner`)
    .pipe(
      map((item: any) => item.filter(value => !value.fork))
      //,map((item: any) => item.filter(value => (value.stargazers_count > 3)))
    );
  }
}
