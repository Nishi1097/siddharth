import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MsdsComponent } from './msds/msds.component';
import { ExportsComponent } from './exports/exports.component';
import { CareersComponent } from './careers/careers.component';
import { CsrComponent } from './csr/csr.component';
import { MediacornerComponent } from './mediacorner/mediacorner.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component'
const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'msds', component: MsdsComponent },
  { path: 'export', component: ExportsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'csr', component: CsrComponent },
  { path: 'mediacorner', component: MediacornerComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    MsdsComponent,
    ExportsComponent,
    CareersComponent,
    CsrComponent,
    MediacornerComponent,
    ContactusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
