export interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface NewsResponse {
  status: 'ok' | 'error';
  totalResults: number;
  articles: Article[];
}
