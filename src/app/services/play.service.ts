import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Playlist } from '../models/playlist';
import { User } from '../models/user';
import { StorageService } from './storage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor(private http: HttpClient, private userService: UserService) { }

  private _ytPlaylistsDb: Playlist[] = []
  private _spPlaylistsDb: Playlist[] = []

  private YT_API_KEY: string = 'AIzaSyB-3go8-VQpRz5ynirP-iK_gOsu9gT81MU'
  private user: User
  // console.log(this.user);

  // private BASE_URL_YT: string = `https://www.googleapis.com/youtube/v3/playlists?key=${this.API_KEY}&channelId=${this.user.ytId}&maxResults=50`
  // private BASE_URL_YT_unique: string = `https://www.googleapis.com/youtube/v3/playlists?key=${this.API_KEY}&id=`
  private YT_STORAGE_KEY: string = 'ytPlaylistDB'
  private SP_STORAGE_KEY: string = 'spPlaylistDB'
  private _ytPlaylists$: BehaviorSubject<Playlist[]> = new BehaviorSubject<Playlist[]>([])
  public ytPlaylists$: Observable<Playlist[]> = this._ytPlaylists$.asObservable()
  private _spPlaylists$: BehaviorSubject<Playlist[]> = new BehaviorSubject<Playlist[]>([])
  public spPlaylists$: Observable<Playlist[]> = this._spPlaylists$.asObservable()

  public query() {
    // this.getPlays()
    const ytPlaylists: Playlist[] = this._ytPlaylistsDb
    const spPlaylists: Playlist[] = this._spPlaylistsDb

    this._ytPlaylists$.next(ytPlaylists);
    this._spPlaylists$.next(spPlaylists);
  }

  public getPlay() {
    // console.log(this.user);??

    return this.http.get(`https://www.googleapis.com/youtube/v3/playlists?key=${this.YT_API_KEY}&channelId=${this.user.ytId}&maxResults=50`)
  }
  public getPlayInfo(id: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlists?key=${this.YT_API_KEY}&id=` + id + '&part=id,snippet&fields=items()')
  }
  public async getPlays() {
    // const token = await this._getToken()
    // this.getSpPlaylist()
    this.user = StorageService.load('user')
    // this.user.spId = this.SP_USER_ID
    var spPlaylists: Playlist[] = StorageService.load(this.SP_STORAGE_KEY) || []
    if (!spPlaylists.length && this.user.spId) {
      spPlaylists = await this.getSpPlaylist()
      StorageService.store(this.SP_STORAGE_KEY, spPlaylists)
    }

    var ytPlaylists: Playlist[] = StorageService.load(this.YT_STORAGE_KEY) || []
    if (!ytPlaylists.length && this.user.ytId) {

      const res: any = await lastValueFrom(this.getPlay())
      ytPlaylists = [...res.items]
      ytPlaylists.forEach(async (playlist, idx) => {
        var info: any = await this.getPlayInfo(res.items[idx].id).toPromise()
        info = info.items[0]
        ytPlaylists[idx] = {
          _id: info.id,
          name: info.snippet.title,
          creator: info.snippet.channelTitle,
          img: info.snippet.thumbnails.medium.url,
          url: `https://www.youtube.com/playlist?list=${info.id}`
        }
        await Promise.all([info, res]).then(() =>
          StorageService.store(this.YT_STORAGE_KEY, ytPlaylists)

        )
      })
    }
    this._spPlaylistsDb = spPlaylists
    this._ytPlaylistsDb = ytPlaylists


    // this.getPlay().subscribe((res: any) => {
    //   a = res.items
    //   a.forEach((play, idx) => {
    //     this.getPlayInfo(res.items[idx].id).subscribe((res: any) => {
    //       const info = res.items[0]
    //       console.log(info);
    //       a[idx] = {
    //         _id: info.id,
    //         name: info.snippet.title,
    //         creator: info.snippet.channelTitle,
    //         img: info.snippet.thumbnails.medium.url,
    //         url: `https://www.youtube.com/playlist?list=${info.id}`
    //       }
    //     })
    //   })
    //   this._playlistsDb = a
    //   console.log(a);
    //   return of(a)
    // })
  }

  private clientId = 'cc1c324dcf8d41309ad9e16b4747a2ae'
  private clientSecret = '9767a00599dc446c9d13b7352f0f1504'

  private async _getToken() {
    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
      },
      body: 'grant_type=client_credentials'
    })
    const data = await res.json()
    return data.access_token

  }

  async getSpPlaylist() {
    const token = await this._getToken()
    const res = await fetch(`https://api.spotify.com/v1/users/${this.user.spId}/playlists?limit=50`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    })
    const data = await res.json()
    return data.items.map(play => {
      return {
        _id: play.id,
        name: play.name,
        creator: play.owner.display_name,
        img: play.images[0].url,
        url: play.external_urls.spotify,
      }
    })
  }
}
