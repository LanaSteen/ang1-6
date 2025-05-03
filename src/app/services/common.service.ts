import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor() { 
    
  }

  print(){
    console.log("hi")
  }


  printUserName(name:string){
    console.log(name.trim().toLocaleUpperCase())
  }

}
