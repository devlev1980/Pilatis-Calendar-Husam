import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddMemberComponent} from './add-member/add-member.component';
import {SetScheduleComponent} from './set-schedule/set-schedule.component';
import {ViewScheduleComponent} from './view-schedule/view-schedule.component';
import {AdminDataComponent} from './admin-data/admin-data.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [

  {path: '', redirectTo: '/addMember', pathMatch: 'full'},
  {
    path: 'addMember', component: AddMemberComponent
  },

  {
    path: 'setSchedule', component: SetScheduleComponent
  },
  {
    path: 'viewSchedule', component: ViewScheduleComponent
  },
  {
    path: 'adminData', component: AdminDataComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
