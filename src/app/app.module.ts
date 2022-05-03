import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {AngularFireModule} from 
// import { provideDatabase, getDatabase } from '@angular/fire/database'
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { AppComponent } from './cmps/app-root/app.component';
import { PlayAppComponent } from './pages/play-app/play-app.component';
import { PlayListComponent } from './cmps/play-list/play-list.component';
import { PlayReviewComponent } from './cmps/play-review/play-review.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { NavbarComponent } from './cmps/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharePlayComponent } from './cmps/share-play/share-play.component';
import { ShareHistoryComponent } from './pages/share-history/share-history.component';
import { ShareListComponent } from './cmps/share-list/share-list.component';
import { SharePreviewComponent } from './cmps/share-preview/share-preview.component';
import { SignupComponent } from './pages/signup/signup.component';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PlayAppComponent,
    PlayListComponent,
    PlayReviewComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactFilterComponent,
    NavbarComponent,
    SharePlayComponent,
    ShareHistoryComponent,
    ShareListComponent,
    SharePreviewComponent,
    SignupComponent,
    // s,
    // s,cls
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideDatabase(() => getDatabase()),
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   registrationStrategy: 'registerWhenStable:30000'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
