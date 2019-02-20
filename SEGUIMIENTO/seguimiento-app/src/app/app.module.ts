import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppTranslationModule} from './app-translation.module';

import { HomeModule } from './components/main/home/home.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/main/home/home.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { MenuComponent } from './components/main/menu/menu.component';
import { HeaderComponent } from './components/main/header/header.component';
import { BodyComponent } from './components/main/body/body.component';
import { FooterComponent } from './components/main/footer/footer.component';



import { ParalelComponent } from './components/paralel/paralel.component';
import { ParalelModule } from './components/paralel/paralel.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    ParalelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AppTranslationModule,
   ParalelModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


