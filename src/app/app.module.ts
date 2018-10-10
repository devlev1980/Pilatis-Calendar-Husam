import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {AddMemberComponent} from './add-member/add-member.component';
import {SetScheduleComponent} from './set-schedule/set-schedule.component';
import {ViewScheduleComponent} from './view-schedule/view-schedule.component';
import {AdminDataComponent} from './admin-data/admin-data.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {IgniteUiModule} from './ignite-ui.module';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {BootstrapModule} from './bootstrap.module';
import {CalendarDialogComponent} from './calendar-dialog/calendar-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddMemberComponent,
    SetScheduleComponent,
    ViewScheduleComponent,
    AdminDataComponent,
    NotFoundComponent,
    CalendarDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    IgniteUiModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })

  ],
  providers: [],
  entryComponents: [CalendarDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
