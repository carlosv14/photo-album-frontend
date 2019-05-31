import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../services/photos.service';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos : Array<Photo>;
  constructor(private route: ActivatedRoute, private photosService: PhotosService) {
    this.route = route;
    this.photosService = photosService;
   }

  ngOnInit() {
    const id : number = Number(+this.route.snapshot.paramMap.get('id')); 
    this.photosService.getPhotos(id)
      .subscribe((data : Array<Photo>) => {
          this.photos = data;
      });
  }

}
