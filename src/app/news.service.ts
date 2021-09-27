import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from './types';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = 'https://newsapi.org/v2/everything?' +
    'q=tesla-top-10' +
    '&from=2021-09-27' +
    '&apiKey=348599c2622b4d7ca5819d9ff0a05098';

    getNewsResponse(): Observable<NewsResponse> {
      return this.http.get<NewsResponse>(this.url);
    }

  constructor(private http: HttpClient) { }
}
