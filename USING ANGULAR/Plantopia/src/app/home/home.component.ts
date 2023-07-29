import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  species:any;

  constructor(
    private homeService:HomeService
  ){}
  ngOnInit(): void {
    this.homeService.getAllSpecies().subscribe({
      next:(response)=>{
        this.species = response
        console.log(this.species[0])
      },
      error:(error)=>{alert(error.message)}
    })
  }
  
}
