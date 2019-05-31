import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums : Array<Album>;
  constructor(private albumService : AlbumService) {
    this.albumService = albumService;
   }

  ngOnInit() {
    this.albumService.getAlbums()
    .subscribe((data : Array<Album>) => {
      this.albums = data;
    })
  }

}
