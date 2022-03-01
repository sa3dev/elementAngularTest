import { Component, OnInit , ViewContainerRef  } from '@angular/core';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.scss']
})
export class MypostComponent implements OnInit {

  constructor( public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

}
