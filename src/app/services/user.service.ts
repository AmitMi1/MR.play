import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Share } from '../models/share';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private KEY = 'user'
  private _user: User
  private _user$ = new BehaviorSubject<User>(StorageService.load(this.KEY) || null)
  public user$ = this._user$.asObservable()

  constructor(private storageService: StorageService) { }

  public signup(user: User): void {
    // debugger
    // let user: User = StorageService.load(this.KEY);
    // if (!user) {
    //   user = {
    //     _id: this._makeId(),
    //     name,
    //     ytId: 'UCa3meAaXfbpox2qQ8eq0LVg',
    //     spId: 'osy16m7pw547v5ie5nbk77wuf',
    //     shares: []
    //   };
    StorageService.store(this.KEY, user);
    // }
    this._user = user;
    this._user$.next(this._user);
  }
  // public signup(name: string): void {
  //   // debugger
  //   let user: User = StorageService.load(this.KEY);
  //   if (!user) {
  //     user = {
  //       _id: this._makeId(),
  //       name,
  //       ytId: 'UCa3meAaXfbpox2qQ8eq0LVg',
  //       spId: 'osy16m7pw547v5ie5nbk77wuf',
  //       shares: []
  //     };
  //     StorageService.store(this.KEY, user);
  //   }
  //   this._user = user;
  //   this._user$.next(this._user);
  // }

  addShare(share: Share) {
    const user = StorageService.load(this.KEY)
    user.shares.unshift(share)
    StorageService.store(this.KEY, user)
    console.log(StorageService.load(this.KEY));

  }
  // getUser(): Observable<User> {
  //   // var user: User

  //   // user = StorageService.load('user') ||
  //   //   {
  //   //     _id: this._makeId(),
  //   //     name: 'Amit Miz',
  //   //     ytId: 'UCa3meAaXfbpox2qQ8eq0LVg',
  //   //     spId: ''
  //   //   } as User
  //   // StorageService.store('user', user)
  //   // return user
  //   return this.user$
  // }

  _makeId(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i <= 16; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
