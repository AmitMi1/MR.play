import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/playlist';
import { Share } from 'src/app/models/share';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-share-preview',
  templateUrl: './share-preview.component.html',
  styleUrls: ['./share-preview.component.scss']
})
export class SharePreviewComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  @Input() share: Share
  ytplaylists: Playlist[]
  spplaylists: Playlist[]

  ngOnInit(): void {
    // console.log(this.share);
    // console.log();
    this.ytplaylists = StorageService.load('ytPlaylistDB')
    this.spplaylists = StorageService.load('spPlaylistDB')
    if (this.share.source == 'YT') {
      const share = this.ytplaylists.find(play => play._id === this.share.playlistId)
      // console.log(share);
      this.share.imgUrl = share.img
      this.share.url = share.url
      this.share.name = share.name
    }
    if (this.share.source.toString() == 'SP') {
      const share = this.spplaylists.find(play => play._id === this.share.playlistId)
      this.share.imgUrl = share.img
      this.share.url = share.url
      this.share.name = share.name
    }
    console.log(this.share);




  }

}
