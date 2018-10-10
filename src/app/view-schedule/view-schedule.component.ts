import {Component, OnInit} from '@angular/core';
import {CalendarMonthViewDay} from 'angular-calendar';
import {MatDialog} from '@angular/material';
import {CalendarDialogComponent} from '../calendar-dialog/calendar-dialog.component';


@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.scss']
})
export class ViewScheduleComponent implements OnInit {
  viewDate: Date = new Date();
  events = [];

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
  }

  beforeMonthViewRender({body}: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      day.badgeTotal = day.events.filter(
        event => event.meta.incrementsBadgeTotal
      ).length;
    });
  }

  onDayEvent(event) {
    console.log(event);
    this.dialog.open(CalendarDialogComponent, {
      width: '300px'
    });
  }

}
