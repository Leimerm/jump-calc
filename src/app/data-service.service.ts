import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private short = new BehaviorSubject (false);
  sharedShort = this.short.asObservable()
  constructor() { }
}

