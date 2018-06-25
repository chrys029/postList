import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './services/post.service';
import { PostViewComponent } from './post-view/post-view.component';
import { Routes, RouterModule } from "@angular/router";
import { PostFormComponent } from './post-form/post-form.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const appRoutes: Routes =[
  {path: 'post', component: PostViewComponent},
  {path: 'formPost', component: PostFormComponent},
  {path: '', component: PostViewComponent},
  {path:'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'}

]


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostViewComponent,
    PostFormComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
