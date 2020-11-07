import { Component, OnInit, Input, Output } from '@angular/core';
import { InfoFormComponent } from 'src/app/info-form/info-form.component'


@Component({
  selector: 'app-jump-table',
  templateUrl: './jump-table.component.html',
  styleUrls: ['./jump-table.component.scss']
})
export class JumpTableComponent implements OnInit {
  @Input() short: boolean;


  constructor() { }

  ngOnInit(): void {

  }

}
