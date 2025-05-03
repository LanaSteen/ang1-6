import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { ApiService } from '../services/api.service';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private common : CommonService, private api : ApiService){

  }

  ngOnInit(){
    this.api.getProducts().subscribe((resp: any) => {
      console.log(resp)
      this.productArr = resp

    })
  }

  userName = ""
  userLastName = ""

  userArr : any[] = []


  add(){
    this.userArr.push({
      name : this.userName,
      lastName : this.userLastName
    })

  }


  showUsers = false
  namesArr : string[] = []
  title = ""

  showError = false
  showList = false

  delete(index: number){
       this.namesArr.splice(index, 1)
  }
  showHideList(){
    this.showList ? this.showList = false : this.showList = true

    this.showUsers ? this.showUsers = false : this.showUsers = true

    this.listShows == "hide" ? this.listShows = "show" : this.listShows = "hide"
  }

  listShows = "hide"
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



  printHi(){

    this.common.print()
    this.common.printUserName(this.user)
  }


  user : string = ""

  showUserName(){
    this.common.printUserName("Jonh")
  }


  productArr : Product[] = []

  getProducts(){
    this.api.getProducts().subscribe((resp: any) => {
      console.log(resp)
      this.productArr = resp

    })
  }

}



