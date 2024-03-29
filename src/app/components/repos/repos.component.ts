import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

GithubService

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {


  @Input() repoUrl: string;
  repos = []

  constructor(private githubSerivce: GithubService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    if(this.repoUrl){
      this.githubSerivce.getRepos(this.repoUrl).subscribe((repos: []) => {
        this.repos = repos;
        this.ref.detectChanges();
      }, (err) => {
        console.log(err);
      });

    }  
  }

}
