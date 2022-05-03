import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlayService } from 'src/app/services/play.service';
import { Playlist } from 'src/app/models/playlist';
import { Observable, Subscription } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-play-app',
  templateUrl: './play-app.component.html',
  styleUrls: ['./play-app.component.scss']
})
export class PlayAppComponent implements OnInit, OnDestroy {

  constructor(private playService: PlayService, private userService: UserService) { }

  ytPlaylists$: Observable<Playlist[]>
  spPlaylists$: Observable<Playlist[]>
  user: User
  userSubscription: Subscription

  async ngOnInit() {
    // this.userService.signup('Amit Miz')
    this.userSubscription = this.userService.user$.subscribe(async (user) => {
      this.user = user
      console.log(user.shares);

      await this.playService.getPlays()
      this.playService.query()
      this.ytPlaylists$ = this.playService.ytPlaylists$
      this.spPlaylists$ = this.playService.spPlaylists$
    })



    // console.log(this.playlists$.toPromise());

  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }

}
