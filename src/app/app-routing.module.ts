import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayAppComponent } from './pages/play-app/play-app.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactResolverService } from './services/contact-resolver.service';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ShareHistoryComponent } from './pages/share-history/share-history.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '', component: PlayAppComponent, canActivate: [AuthGuard]
  },
  {
    path: 'contact', component: ContactPageComponent, canActivate: [AuthGuard]
  },
  {
    path: 'share', component: ShareHistoryComponent, canActivate: [AuthGuard]
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'contact/edit', component: ContactEditComponent, resolve: { contact: ContactResolverService }, canActivate: [AuthGuard]
  },
  {
    path: 'contact/edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolverService }, canActivate: [AuthGuard]
  },
  {
    path: 'contact/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolverService }, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
