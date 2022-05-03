import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  static store(key, value) {
    localStorage[key] = JSON.stringify(value);
  }

  static load(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
  }

}
