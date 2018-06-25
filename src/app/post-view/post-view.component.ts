import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit, OnDestroy {

  lastUpdate= new Date();
  posts:any[];
  postSubcription: Subscription;



  constructor(private postService : PostService){

  }

  ngOnInit() {
    this.postSubcription =this.postService.postSubject.subscribe(
      (posts: any[]) =>{
        this.posts =posts;
      });
      this.postService.emitPostSubject();
  }


  ngOnDestroy(){
    this.postSubcription.unsubscribe();
  }
  
  


  
 

}
