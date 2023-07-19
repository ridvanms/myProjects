import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isBrowserSizeSmall():Boolean {
    return window.innerWidth <= 1030;
  }

  @HostListener("window:resize",['$event'])
  onResize():void{
    this.isBrowserSizeSmall();
  }
}
