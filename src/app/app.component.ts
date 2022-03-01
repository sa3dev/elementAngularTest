import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { DetailProfileComponent } from './detail-profile/detail-profile.component';
import { PopupComponent } from './popup/popup.component';
import { ClientProfileService } from './service/client-profile.service';
import { PopupService } from './service/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  show: boolean = false;

  constructor(
    injector: Injector, 
    public popup: PopupService , 
    public detail: ClientProfileService ) {

    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);

    // Convert 'DetailProfilComponent' to a custom element and register with the browser with define 
    const DetailElement = createCustomElement(DetailProfileComponent , {injector});
    customElements.define('detail-element' , DetailElement);

  }
  showPopup(input: any) {
    this.popup.showAsElement(input.value) 
    input.value ='';
  }
 

  
}
