import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../github-search.service';
import { Account } from '../account';
 
@Component({
  selector: 'app-accont-search',
  templateUrl: './accont-search.component.html',
  styleUrls: ['./accont-search.component.css']
})
export class AccontSearchComponent implements OnInit {

  username: string;
  user: string[];
    repos: string[];
  
  constructor(private githubsearchService: GithubSearchService) {     this.githubsearchService.findUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.githubsearchService.findRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    });
  }

  searchUser(){
    this.githubsearchService.replaceUser(this.username);

    this.githubsearchService.findUser().subscribe(user => {
      this.user = user;
    });
    this.githubsearchService.findRepos().subscribe(repos =>{
      this.repos = repos;
    })

  }

  ngOnInit() {
  }

}
