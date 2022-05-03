import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Playlist } from 'src/app/models/playlist';
import { Share } from 'src/app/models/share';
import { PlayService } from 'src/app/services/play.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-share-play',
  templateUrl: './share-play.component.html',
  styleUrls: ['./share-play.component.scss']
})
export class SharePlayComponent implements OnInit {

  constructor(private playService: PlayService, private userService: UserService) { }

  ytPlaylists$: Observable<Playlist[]>
  spPlaylists$: Observable<Playlist[]>
  @Input() contact: Contact

  async ngOnInit() {
    await this.playService.getPlays()
    this.playService.query()
    this.ytPlaylists$ = this.playService.ytPlaylists$
    this.spPlaylists$ = this.playService.spPlaylists$

  }

  onShare(yt, sp) {

    if (yt) {
      const id = yt.substr(2)
      const source = yt.substr(0, 2)
      const at = Date.now()
      const ytShare = new Share(id, source, at, this.contact._id, this.contact.name)
      console.log(ytShare);
      this.userService.addShare(ytShare)
      yt = ''
    }
    if (sp) {
      const id = sp.substr(2)
      const source = sp.substr(0, 2)
      const at = Date.now()
      const spShare = new Share(id, source, at, this.contact._id, this.contact.name)
      console.log(spShare);
      this.userService.addShare(spShare)
    }
  }

}
