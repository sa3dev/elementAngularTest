import { Component, OnInit } from '@angular/core';
import { ClientProfileService } from '../service/client-profile.service';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.scss']
})
export class ListProfileComponent implements OnInit {


  tabProfiles: {name: string , profile: string}[] = []

  constructor(public profileService: ClientProfileService ,  public detail: ClientProfileService) { }

  ngOnInit(): void {
    this.getAllProfiles()
  }

  getAllProfiles() {
    this.tabProfiles = this.profileService.getProfils()
  }


}
