import { Component,  HostListener } from '@angular/core';
import { GlobalLoaderService } from '../global-loader/global-loader.service';
import { AuthService } from 'src/app/auth/auth.service';
import {CookieService} from "ngx-cookie-service"
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  {
  name:string = ''
  isBrowserSizeSmall():Boolean {
    return window.innerWidth <= 1030;
  }
  constructor(
    public global_loader:GlobalLoaderService,
    public authService:AuthService,
    private cookie:CookieService
  ){
    this.name = this.cookie.get('token')
  }
  
  @HostListener("window:resize",['$event'])
  onResize():void{
    this.isBrowserSizeSmall();
  }
}
