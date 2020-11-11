import { Component, OnInit, Input, Output } from '@angular/core';
import { InfoFormComponent } from 'src/app/info-form/info-form.component'
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-jump-table',
  templateUrl: './jump-table.component.html',
  styleUrls: ['./jump-table.component.scss']
})
export class JumpTableComponent implements OnInit {
  short: boolean;


  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.short.subscribe(value=>{
      this.short=value
    })

  }

}
