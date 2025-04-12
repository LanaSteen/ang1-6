import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  

  sayHello =""
  imgSorce = "https://images.unsplash.com/photo-1726137569906-14f8079861fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  imgClass =""
  imgStyle = "border-radius: 10px"


  user = {
    name : "John",
    lastName : "Doe"
  }



  name = "John"
  email = "gfgdgfj@FDFGHH"
  age =50

  name2=""
  email2= ""
  age2?: number | null


  print(){
    console.log("hi")
    this.chnageImg()
    this.sayHello == "" ?  this.sayHello ="hello user" :  this.sayHello =""
  }
  chnageImg(){
  this.imgClass = "mainImg"
  }
  showText(){
      // this.name2 = this.name
      // this.email2 = this.email
      // this.age2 = this.age


      this.name2 == "" ? this.name2= this.name :  this.name2 = ""
      this.email2  ==""? this.email2 = this.email :  this.email2  =""
      this.age2 == null ? this.age2=this.age : this.age2 =null


    
  }


 

 


}



