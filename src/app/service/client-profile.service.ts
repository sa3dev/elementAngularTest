import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { DetailProfileComponent } from '../detail-profile/detail-profile.component';

@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {

  constructor() { }

  getProfils() {
    return [
      {
        name: 'Bob', profile: 'A'
      },
      {
        name: 'Bill', profile: 'B'
      },
      {
        name: 'Juan', profile: 'C'
      },
      {
        name: 'Tim',  profile: 'D'
      }
    ]
  }

  showAsElement(detail: string) {
    // Create element
    const popupEl: NgElement & WithProperties<DetailProfileComponent> = document.createElement('detail-element') as any;

    // Listen to the mouseleave event
    popupEl.addEventListener('click', () => document.body.removeChild(popupEl));

    // Set the message
    popupEl.detail = detail;

    // Add to the DOM
    document.body.appendChild(popupEl);
  }
}
