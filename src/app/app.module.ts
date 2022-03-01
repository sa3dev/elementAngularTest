import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { DetailProfileDirective } from './directive/detail-profile.directive';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './service/popup.service';
import { DetailProfileComponent } from './detail-profile/detail-profile.component';
import { ClientProfileService } from './service/client-profile.service';

// 
import { TechnologyComponent } from './technology/technology.component';
import { ArticleComponent } from './article/article.component';
import { MypostDirective } from './directive/mypost.directive';
import { MypostComponent } from './mypost/mypost.component';
import { MypostService } from './service/mypost.service';
import { MyPostBannerComponent } from './my-post-banner/my-post-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProfileComponent,
    DetailProfileDirective,
    PopupComponent,
    DetailProfileComponent,
    TechnologyComponent,
    ArticleComponent,
    MypostDirective,
    MypostComponent,
    MyPostBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ // dynamic component to declare
    ArticleComponent, 
    TechnologyComponent,
    DetailProfileComponent
  ], 
  providers: [PopupService , ClientProfileService, MypostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
