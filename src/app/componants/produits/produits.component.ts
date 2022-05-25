import { Component, OnInit } from '@angular/core';
import { ProduitService } from "src/app/services/produit.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: any;
  modifNotif: boolean = false;
  

  produitUpdate = {
    id:"",
    title: "",
    image: "",
    description: "",
    price: "",
  };

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.products();
    // this.closeNotif();
  }

  products() {
    this.produitService.getproducts().subscribe(data => {
      this.produits = data;
      console.log(this.produits)
    })
  }

  delete(id: any) {
    this.produitService.delete(id).subscribe(() => {
      console.log("product with id: " + id + " deleted")
      this.products()
    })
  }

  recupProduit(produit: any) {
    this.produitUpdate = produit;
    console.log(this.produitUpdate);
  }

  // closeNotif() {
  //   this.modifNotif = false;
  // }

  updateProd(){
    
    this.produitService.updateProduit(this.produitUpdate).subscribe( () => {
      // this.modifNotif = true;
      // setTimeout(()=>{this.modifNotif = false}, 5000);
      
    } )
  }

  fermerPopup(){
    this.products()
  }
}




