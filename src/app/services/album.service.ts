import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
 
  baseUrl : string = "http://jsonplaceholder.typicode.com";
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

   getAlbums(){
     return this.httpClient.get(`${this.baseUrl}/albums`);
   }
}
