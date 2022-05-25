import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-ajouterunproduit',
  templateUrl: './ajouterunproduit.component.html',
  styleUrls: ['./ajouterunproduit.component.css']
})

export class AjouterunproduitComponent implements OnInit {

  // ************* création de méthode Service ************
  constructor(private produitservice : ProduitService ) { }

  ngOnInit(): void {
  }

  // ************* définition de la méthode *************** 
  saveProduit(produit:any){
    let data= produit.value
    this.produitservice.saveProduit(data).subscribe(data=>{
      console.log("Les données sont bien enregistrées.")
    })
  }
}
