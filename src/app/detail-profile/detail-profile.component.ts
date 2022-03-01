import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.scss']
})
export class DetailProfileComponent implements OnInit {

  @Input() 
  get detail(): string | any {
    return this._detail
  };
  @Output()
  colsedPopup = new EventEmitter<void>();

  set detail(detail: string) {
    this._detail = detail;
  }

  private _detail = ''

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    console.log('closed sur detail')
  }

}
