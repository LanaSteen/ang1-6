import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userName = ""
  userLastName = ""

  userArr : any[] = []


  add(){
    this.userArr.push({
      name : this.userName,
      lastName : this.userLastName
    })

  }



  namesArr : string[] = []
  title = ""

  showError = false
  showList = false

  delete(index: number){
       this.namesArr.splice(index, 1)
  }
  showHideList(){
    this.showList ? this.showList = false : this.showList = true
  }

  save(){
      // this.title !="" ? this.namesArr.push(this.title) : this.showError = true

      if( this.title !=""){
        this.namesArr.push(this.title)
        this.showError = false
      }
      else{
        this.showError = true
      }
   

      this.title = ""
      //  for(let el of this.namesArr){
      //   console.log(el)
      //  }
  }
  deleteAll(){
    this.namesArr =[]
     this.title = ""
     this.showError = false
  }
}
