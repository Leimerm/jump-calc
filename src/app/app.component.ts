import { Component, Output} from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'jump-calc';
  short: boolean;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.sharedShort.subscribe(short => this.short = short)
  }
}
