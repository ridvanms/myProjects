import { Component, OnInit } from '@angular/core';
import { GlobalLoaderService } from './core/global-loader/global-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  isLoading:boolean = false

  constructor(
    private globalLoaderService:GlobalLoaderService
  ){}

  ngOnInit(): void {
      this.isLoading = !this.globalLoaderService.isLoading
  }

  //
}
