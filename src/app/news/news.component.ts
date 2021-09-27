import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Article } from '../types';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  constructor(private newsService: NewsService) { }

  news?: Article[];
  error = '';

  getNews(): void {
    this.newsService.getNewsResponse()
      .subscribe(response => {
        switch(response.status) {
          case 'ok':
            this.news = response.articles;
            this.error = '';
            break;
          case 'error':
            this.error = 'Oops! Something went wrong';
            this.news = [];
            break;
          default:
            break;
        }
      })
  }

  ngOnInit(): void {
    this.getNews();
    console.log();
  }

}
