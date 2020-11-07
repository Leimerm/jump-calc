import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { FormsModule } from '@angular/forms';
import { JumpTableComponent } from './jump-table/jump-table.component';
import { DataServiceService } from './data-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InfoFormComponent,
    JumpTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  exports: [

  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
