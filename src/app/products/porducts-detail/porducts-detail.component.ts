import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-porducts-detail',
  standalone: true,
  imports: [],
  templateUrl: './porducts-detail.component.html',
  styleUrl: './porducts-detail.component.scss'
})
export class PorductsDetailComponent {

     constructor(private route : ActivatedRoute){

       this.route.params.subscribe(ramp => console.log(ramp))

     }

}
