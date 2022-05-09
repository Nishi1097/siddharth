import { Component, OnInit } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  menuRight : boolean = false;
  closeIcon: boolean = true;
  faWindowClose = faWindowClose;
  faBars = faBars;

  openMenu () {
    this.menuRight = !this.menuRight;
    this.closeIcon = !this.closeIcon;
  }
  ngOnInit(): void {
  }

}
