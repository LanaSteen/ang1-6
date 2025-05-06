import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
   constructor(private rout : ActivatedRoute, private api : ApiService){
     this.rout.params.subscribe(data => {
      console.log(data['id'])
      this.productId = data['id']
     })
   }

   productId= 0
   singleProduct : Product = new Product

   ngOnInit(){

    this.api.getProductById(this.productId).subscribe((resp:any) => {
      console.log(resp)
      this.singleProduct = resp
    })

   }


   myFunction(){

   }

}


// life cycle hook
