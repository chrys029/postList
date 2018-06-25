import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import * as moment from 'moment';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postservice: PostService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      id: '',
      postTitle: '',
      postContent: '',
      compteur: '',
      postDate: '',
      compteurValue: ''
    });
  }

    onSubmitForm(){
    const formValue = this.postForm.value;
    const newPost = new Post(
      this.postservice.getNewId(),
      formValue['postTitle'],
      formValue['postContent'],
      0,
      moment(Date.now()).toString(),
      ''
    );
    this.postservice.addPost(newPost);
    this.router.navigate(['/post']);
  }

}
