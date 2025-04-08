import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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

  print(){
    console.log("hi")
    this.chnageImg()
    this.sayHello == "" ?  this.sayHello ="hello user" :  this.sayHello =""
  }


  chnageImg(){
  this.imgClass = "mainImg"
  }


 


}



