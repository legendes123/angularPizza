import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DeliveryComponent } from './delivery/delivery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CatalogComponent } from './catalog/catalog.component';




const appRoutes = [
  {path: 'delivery', component:DeliveryComponent},
  {path: 'contacts', component:ContactsComponent},
  {path: 'catalog', component:CatalogComponent},



]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent, DeliveryComponent, ContactsComponent, CatalogComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
