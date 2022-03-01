import { Component, Input, OnInit } from '@angular/core';
import { MyPost } from '../model/my-post';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, MyPost {

  @Input() post: any; // type myPost ? 

  constructor() { }

  ngOnInit(): void {
  }

}
