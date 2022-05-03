import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Share } from 'src/app/models/share';
import { User } from 'src/app/models/user';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-share-history',
  templateUrl: './share-history.component.html',
  styleUrls: ['./share-history.component.scss']
})
export class ShareHistoryComponent implements OnInit, OnDestroy {

  constructor(private storageService: StorageService) { }
  user: User
  // ytShares: Share[] = []
  // spShares: Share[] = []
  userSub: Subscription
  ngOnInit(): void {
    // this.userSub = this.userService.user$.subscribe(user => {
    this.user = StorageService.load('user')
    // user.shares.forEach(share => {
    //   if (share['source'] === 'YT') {
    //     this.ytShares.push(share as Share)
    //   }
    //   else if (share['source'] === 'SP') {
    //     this.spShares.push(share as Share)
    //   }
    //   // console.log(this.spShares);

    // })

    // })

  }

  ngOnDestroy(): void {
    // this.userSub.unsubscribe()
  }

}
