import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/playlist';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {

  constructor() { }
  @Input() title: string
  @Input() playlists: Playlist[]
  @Input() iconUrl: string

  ngOnInit(): void {

  }

}
