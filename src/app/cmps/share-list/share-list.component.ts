import { Component, Input, OnInit } from '@angular/core';
import { Share } from 'src/app/models/share';

@Component({
  selector: 'app-share-list',
  templateUrl: './share-list.component.html',
  styleUrls: ['./share-list.component.scss']
})
export class ShareListComponent implements OnInit {

  constructor() { }

  @Input() shares: any

  ngOnInit(): void {
    console.log(this.shares);

    // console.log(this.spShares);
    // console.log(this.ytShares);

  }

}
