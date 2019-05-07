import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseApiPath = 'https://api.themoviedb.org/3';

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLaterstMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?"+'api_key='+this.getApiKey());
  }

  getApiKey(): string{
    return '61d07a8be92f6c02d8f7b4dbad451c5b';
  }
}
