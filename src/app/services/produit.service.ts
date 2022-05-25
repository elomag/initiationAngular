import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// ************ création de Méthodes de Services à portée limitée ("private")

export class ProduitService {
  constructor(private http : HttpClient) { }

  getproducts () {
    return this.http.get("http://localhost:3000/produits");
  }
  
  saveProduit(produit:any){
    return this.http.post("http://localhost:3000/produits", produit);
  }

  delete(id:any){
    return this.http.delete("http://localhost:3000/produits/" +id);
  }

  updateProduit( produit:any){
    return this.http.put("http://localhost:3000/produits/"+produit.id , produit);
  }
}
