import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/playlist';

@Component({
  selector: 'app-play-review',
  templateUrl: './play-review.component.html',
  styleUrls: ['./play-review.component.scss']
})
export class PlayReviewComponent implements OnInit {

  constructor() { }

  @Input() playlist: Playlist

  ngOnInit(): void {
  }

}
