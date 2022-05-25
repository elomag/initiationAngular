import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componants/home/home.component';
import { ProduitsComponent } from './componants/produits/produits.component';
import { ContactComponent} from './componants/contact/contact.component';
import { AjouterunproduitComponent } from './componants/ajouterunproduit/ajouterunproduit.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "produits", component: ProduitsComponent },
  { path: "contact", component: ContactComponent },
  { path: "ajouterunproduit", component: AjouterunproduitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

