import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AppEntryComponent } from './app-entry/app-entry.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { ChatSectionComponent } from './components/chat-section/chat-section.component';
import { RouteModule } from './routes/route/route.module';
import { MaterialPackageModule } from './materials/material-package/material-package.module';
import { WINDOW_PROVIDERS } from './WINDOW_PROVIDER';
import { FormsModule } from '@angular/forms';
import { MangaService } from './services/manga.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    AppEntryComponent,
    ErrorPageComponent,
    ChatSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouteModule,
    HttpClientModule,
    MaterialPackageModule
  ],
  providers: [
    WINDOW_PROVIDERS,
    MangaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
