import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  baseUrl : string = "http://jsonplaceholder.typicode.com";
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

   getPhotos(id : number){
      return this.httpClient.get(`${this.baseUrl}/photos?albumId=${id}`);
   }
}
