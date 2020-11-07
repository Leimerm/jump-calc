import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss']
})
export class InfoFormComponent implements OnInit {
  feetHeight = "";
  inchHeight = "";
  clickDex = false;
  strengthScore = "";
  run1 = false;
  @Input() short: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  calcJump() {
    var readyForClick = false;
    var jumpLong: number = 0;
    var jumpLongStand: number = 0;
    var jumpHigh: number = 0;
    var jumpHighStand: number = 0;
    var calFeet = (<HTMLInputElement>document.getElementById("feet")).value;
    var calInch = (<HTMLInputElement>document.getElementById("inch")).value;
    var calStrength = (<HTMLInputElement>document.getElementById("strength")).value;
    var reach: number = 0;
    var reachRun: number = 0;
    var bar = (<HTMLInputElement>document.getElementById('rad1'));
    var fig = (<HTMLInputElement>document.getElementById('rad2'));
    var mon = (<HTMLInputElement>document.getElementById('rad3'));
    var rog = (<HTMLInputElement>document.getElementById('rad4'));
    var jum = (<HTMLInputElement>document.getElementById('rad5'));
    var bot = (<HTMLInputElement>document.getElementById('rad7'));
    if (Number(calFeet) > 0 && Number(calInch) >= 0 && Number(calStrength) > 0) {
      jumpLong = Number(calStrength);
      jumpLongStand = Number(calStrength) / 2;
      jumpHigh = Math.floor(((Number(calStrength)-10)/2)) + 3;
      jumpHighStand = (Math.floor(((Number(calStrength)-10)/2)) + 3) / 2;
    };
    if (bar.checked) {
      jumpLong = jumpLong + 10;
      jumpLongStand = jumpLongStand + 10;
      jumpHigh = jumpHigh + 3;
      jumpHighStand = jumpHighStand + 3;
    };
    if (fig.checked) {
      jumpLong = jumpLong + Math.floor(((Number(calStrength)-10)/2));
      jumpLongStand = jumpLongStand + Math.floor(((Number(calStrength)-10)/2));
      jumpHigh = jumpHigh + Math.floor(((Number(calStrength)-10)/2));
      jumpHighStand = jumpHighStand + Math.floor(((Number(calStrength)-10)/2));
    };
    if (rog.checked) {
      var calDexterity = (<HTMLInputElement>document.getElementById("dexterity")).value;
      jumpLong = jumpLong + Math.floor(((Number(calDexterity)-10)/2));
      jumpLongStand = jumpLongStand + Math.floor(((Number(calDexterity)-10)/2));
      jumpHigh = jumpHigh + Math.floor(((Number(calDexterity)-10)/2));
      jumpHighStand = jumpHighStand + Math.floor(((Number(calDexterity)-10)/2));
    };
    if (jum.checked) {
      jumpLong = jumpLong * 3;
      jumpLongStand = jumpLongStand * 3;
      jumpHigh = jumpHigh * 3;
      jumpHighStand = jumpHighStand * 3;
    };
    if (bot.checked) {
      jumpLong = jumpLong * 3;
      jumpLongStand = jumpLongStand * 3;
      jumpHigh = jumpHigh * 3;
      jumpHighStand = jumpHighStand * 3;
    };
    if (mon.checked) {
      jumpLong = jumpLong * 2;
      jumpLongStand = jumpLongStand * 2;
      jumpHigh = jumpHigh * 2;
      jumpHighStand = jumpHighStand * 2;
    };
    reach = jumpHigh + (1.5 * ((Number(calFeet) + (Number(calInch)/12))));
    reachRun = jumpHighStand + (1.5 * ((Number(calFeet) + (Number(calInch)/12))));
    (<HTMLElement>document.getElementById('slot 1')).textContent = String(jumpLong)+" ft";
    (<HTMLElement>document.getElementById('slot 2')).textContent = String(jumpLongStand)+" ft";
    (<HTMLElement>document.getElementById('slot 3')).textContent = String(jumpHigh)+" ft";
    (<HTMLElement>document.getElementById('slot 4')).textContent = String(jumpHighStand)+" ft";
    (<HTMLElement>document.getElementById('slot 5')).textContent = String(reach.toFixed(1))+" ft";
    (<HTMLElement>document.getElementById('slot 6')).textContent = String(reachRun.toFixed(1))+" ft";
  }

  changeRun() {
    this.short = !this.short;
    console.log(this.short)
  }

  showDex() {
    this.clickDex = !this.clickDex;
  }

  resetJump() {
    var calFeet = (<HTMLInputElement>document.getElementById("feet")).value = "";
    var calInch = (<HTMLInputElement>document.getElementById("inch")).value = "";
    var calStrength = (<HTMLInputElement>document.getElementById("strength")).value = "";
    (<HTMLElement>document.getElementById('slot 1')).textContent = "";
    (<HTMLElement>document.getElementById('slot 2')).textContent = "";
    (<HTMLElement>document.getElementById('slot 3')).textContent = "";
    (<HTMLElement>document.getElementById('slot 4')).textContent = "";
    (<HTMLElement>document.getElementById('slot 5')).textContent = "";
    (<HTMLElement>document.getElementById('slot 6')).textContent = "";
    (<HTMLInputElement>document.getElementById('rad1')).checked = false;
    (<HTMLInputElement>document.getElementById('rad2')).checked = false;
    (<HTMLInputElement>document.getElementById('rad3')).checked = false;
    (<HTMLInputElement>document.getElementById('rad4')).checked = false;
    (<HTMLInputElement>document.getElementById('rad5')).checked = false;
    (<HTMLInputElement>document.getElementById('rad6')).checked = false;
    (<HTMLInputElement>document.getElementById('rad7')).checked = false;
    this.clickDex = false;
    this.strengthScore = ""
    }

}
