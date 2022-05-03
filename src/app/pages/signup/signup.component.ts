import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  user: User = new User('fh34231hd9', '', '', '', [])

  ngOnInit(): void {
  }

  onSignup() {
    console.log(this.user);
    this.userService.signup(this.user)
    this.router.navigate([''])

  }

  onGuest() {
    this.user.ytId = 'UCqzOMiBbkiKSm7kZRFhRSPw'
    this.user.spId = '1159594076'
    this.user.shares = [
      {
        playlistId: "6LX63Mu8zBRK5QN9sGvF4G",
        sharedAt: 1651566948977,
        sharedWithID: "5a566402abce24c6bfe4699d",
        sharedWithName: "Dominique Soto",
        source: "SP",
      },
      {
        playlistId: "PLJGrHnQB9SZPsC-tAJbXbyIkBHQp9nL5T",
        sharedAt: 1651566948976,
        sharedWithID: "5a566402abce24c6bfe4699d",
        sharedWithName: "Dominique Soto",
        source: "YT",
      },
      {
        playlistId: "PLJGrHnQB9SZOq868wpp9kbJUVyeskY47o",
        sharedAt: 1651566888504,
        sharedWithID: "5a5664028c096d08eeb13a8a",
        sharedWithName: "Ollie Christian",
        source: "YT",
      },
      {
        playlistId: "PLJGrHnQB9SZPdkuV_WXJfQ2ODhzh2Zao0",
        sharedAt: 1651566884876,
        sharedWithID: "5a5664028c096d08eeb13a8a",
        sharedWithName: "Ollie Christian",
        source: "YT",
      },
      {
        playlistId: "0Pe3A4UFdEjcaI9ueenD5M",
        sharedAt: 1651566724010,
        sharedWithID: "5a566402f90ae30e97f990db",
        sharedWithName: "Faulkner Flores",
        source: "SP",
      },
      {
        playlistId: "PLJGrHnQB9SZPBAt9lw2kLHYPw41SHF2cH",
        sharedAt: 1651566724009,
        sharedWithID: "5a566402f90ae30e97f990db",
        sharedWithName: "Faulkner Flores",
        source: "YT",
      },
    ]
    // this.onSignup()
  }

}
