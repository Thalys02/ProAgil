import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BsDropdownModule,TooltipModule,ModalModule, BsDatepickerModule} from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { EventoService } from './_services/evento.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EventosComponent } from './eventos/eventos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PalestranteComponent } from './palestrante/palestrante.component';
import { ContatosComponent } from './contatos/contatos.component';
import { TituloComponent } from './_shared/titulo/titulo.component';

import { DateTimeFormatPipePipe } from './_helps/DateTimeFormatPipe.pipe';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      EventosComponent,
      DashboardComponent,
      PalestranteComponent,
      ContatosComponent,
      TituloComponent,
      DateTimeFormatPipePipe
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      //utiliza-se forRoot para ter opção de implementar em toda estrutura do Projeto
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      BrowserAnimationsModule, 
      ToastrModule.forRoot({timeOut: 10000,
         positionClass: 'toast-bottom-right',
         preventDuplicates: true}),
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
      
   ],
   providers: [
      EventoService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
