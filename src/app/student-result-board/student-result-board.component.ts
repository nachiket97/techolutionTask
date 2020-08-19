import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-result-board',
  templateUrl: './student-result-board.component.html',
  styleUrls: ['./student-result-board.component.css']
})
export class StudentResultBoardComponent implements OnInit {
  myresult: any;
  
  studentData = [ { "name":"rajiv", "marks":{ "Maths":18, "English":21, "Science":45 }, "rollNumber":"KV2017-5A2" }, { "name":"abhishek", "marks":{ "Maths":43, "English":30, "Science":37 }, "rollNumber":"KV2017-5A1" }, { "name":"zoya", "marks":{ "Maths":42, "English":31, "Science":50 }, "rollNumber":"KV2017-5A3" } ]
  total = [];
  studentStatus = [];
  constructor() { }
  
  ngOnInit(): void {
    
  }

    
  getFinalScore(student: any){
    return student.marks.Maths + student.marks.English + student.marks.Science;
  }
 

    finalStatus(student: any){
    var status = 'Passed'   
     for(var key in student.marks){
      if(student.marks[key] < 20){
        status = 'Fail';
      }
    }
    return status;
   
  }

  

} 
