import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './componants/produits/produits.component';
import { HomeComponent } from './componants/home/home.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { FooterComponent } from './componants/footer/footer.component';
import { ContactComponent } from './componants/contact/contact.component';

import { HttpClientModule} from '@angular/common/http';
import { AjouterunproduitComponent } from './componants/ajouterunproduit/ajouterunproduit.component';

// ****************************Module Formulaire Ajout Produit****************************
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    AjouterunproduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
