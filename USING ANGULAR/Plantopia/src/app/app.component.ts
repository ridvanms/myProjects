import { Component, OnDestroy } from '@angular/core';
import { GlobalLoaderService } from './core/global-loader/global-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(
    public global_loader:GlobalLoaderService,
  ){
  
  }
  
}
