import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

@Input() postTitle: string;
@Input() postDate: string;
@Input() postContent: string;
@Input() compteur : number;
@Input() compteurValue : string;
@Input() id : number;

  constructor(private postservice: PostService) { 
    this.compteurValue=this.getCompteurValue();
  }

  ngOnInit() {
    interval(1000);
  }

  getColor(){
    if(this.compteur<0){
      return 'list-group-item-success';
    }else if(this.compteur>0){
      return 'list-group-item-danger';
    }
  }

  getDate(){
    return this.postDate;
  }

  onLike(){
    this.compteur =this.compteur +1;
    this.getCompteurValue();
    return this.compteur;
  }

  onDislike(){
    this.compteur =this.compteur -1;
    this.getCompteurValue();
    return this.compteur;
  }

  getCompteurValue(){
    
    if(this.compteur<0){
      this.compteurValue="inf";
    }else if(this.compteur>0){
      this.compteurValue="sup";
    }else{
      this.compteurValue="";
    }
    return this.compteurValue;
  }


  onDelete(){
    this.postservice.deletePost(this);
  }
}
