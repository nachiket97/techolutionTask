import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentResultBoardComponent } from './student-result-board/student-result-board.component';
import { SchoolAdmissionFormComponent } from './school-admission-form/school-admission-form.component';

const routes: Routes = [
  { path: 'student-result-board', component: StudentResultBoardComponent },
  { path: "", redirectTo: "/student-result-board", pathMatch: "full" },
  { path: "school-admission-form", component: SchoolAdmissionFormComponent}
  
  ,{path: '**' , component:StudentResultBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
