import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/Services/git-hub.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  repos: any;
  config: any;
  perfectScrollbar: any;

  constructor(private gitHubService: GitHubService) { }

  ngOnInit(): void {
    this.gitHubService.LoadRepos().subscribe(res => {
      //console.log(res)
      this.repos = res
    });
  }

}
