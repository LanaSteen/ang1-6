import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../Models/Student';




@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {


  studentArr :any[] = []
  studentPost :any = null
  student = new Student()
  // student = {
  //   name: "",
  //   age : null,
  //   email : "",
  //   adress : {
  //     city : "",
  //     street : "",
  //     zip : null
  //   }

  // }

  addStudent(){
    this.studentArr.push(this.student)

    // this.studentPost = this.studentArr
    // this.studentArr.push({...this.student})

    this.student = new Student()
    // this.student = {
    //   name: "",
    //   age : null,
    //   email : "",
    //   adress : {
    //     city : "",
    //     street : "",
    //     zip : null
    //   }
  
    // }
    console.log(this.studentArr)
  }

}


