import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AccontSearchComponent } from './accont-search.component';
import { HomeComponent } from './home/home.component';
import { DatedPipe } from './dated.pipe';
import { HighlightDirective } from './highlight.directive';
import { GithubSearchService } from './github-search.service';

@NgModule({
  declarations: [
    AppComponent,
    // AccontSearchComponent,
    HomeComponent,
    DatedPipe,
    HighlightDirective,
    routingComponents,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      // {path: 'search', component: AccontSearchComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

