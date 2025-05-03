import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Shop } from '../Models/Shop';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {



  userName = ""

  userName2=""
   

  shopArr : Shop[] = [
    
  ]
  show(){
    this.userName2 = this.userName
    // this.userName = ""

  }


}
