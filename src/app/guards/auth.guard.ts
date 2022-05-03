import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private storeageService: StorageService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const user = StorageService.load('user')
    if (!user) this.router.navigate(['signup'])
    return user ? true : false
  }

}
