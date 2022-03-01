import { Component,AfterViewInit , ViewChild , OnDestroy } from '@angular/core';
import { MypostDirective } from '../directive/mypost.directive';
import { PostItem } from '../model/post-item';
import { MypostComponent } from '../mypost/mypost.component';
import { MypostService } from '../service/mypost.service';

@Component({
  selector: 'app-my-post-banner',
  templateUrl: './my-post-banner.component.html',
  styleUrls: ['./my-post-banner.component.scss']
})
export class MyPostBannerComponent implements AfterViewInit, OnDestroy {

  @ViewChild(MypostDirective)
  private myPostDirective = {} as MypostDirective;	

  @ViewChild(MypostComponent)
  private myPostComponent = {} as MypostComponent;	

  postItems: PostItem[] = [];
  intervalId: any;	
  postIndex: number = -1;

  constructor(private myPostService: MypostService) { }

  ngAfterViewInit() {
   this.postItems = this.myPostService.getAllPosts(); 	
     this.startPostHighlights();
  }	
  startPostHighlights() {
     this.intervalId = setInterval(() => {
     
     this.postIndex = (this.postIndex === this.postItems.length)? 0 : this.postIndex + 1;

   //Use viewContainerRef from Directive
      this.myPostService.loadComponent(this.myPostDirective.viewContainerRef, this.postItems[this.postIndex]);
   
   //Use viewContainerRef from Component
  //  this.myPostService.loadComponent(this.myPostComponent.viewContainerRef, this.postItems[this.postIndex]);
   
  }, 2000);
  }	
  ngOnDestroy() {
     clearInterval(this.intervalId);
  }	
}
