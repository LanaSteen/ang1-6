import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonService } from '../services/common.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    constructor(private com : CommonService){

    }

    name = ""

    save(){
      this.com.printUserName(this.name)
    }


}
