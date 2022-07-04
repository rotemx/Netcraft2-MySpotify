import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { AppRoutingModule }       from './app-routing.module';
import { LayoutComponent }        from './components/app-layout/layout/layout.component';
import { HeaderComponent }        from './components/app-layout/header/header.component';
import { FooterComponent }        from './components/app-layout/footer/footer.component';
import { SideBarComponent }       from './components/app-layout/side-bar/side-bar.component';
import { ContentComponent }       from './components/app-layout/content/content.component';
import { SearchPanelComponent }   from './components/views/search-panel/search-panel.component';
import { SearchBarComponent }     from './components/reusable/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/reusable/search-results/search-results.component';
import {FormsModule}              from "@angular/forms";

@NgModule({
  declarations: [
      
    LayoutComponent,
           HeaderComponent,
           FooterComponent,
           SideBarComponent,
           ContentComponent,
           SearchPanelComponent,
           SearchBarComponent,
           SearchResultsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
