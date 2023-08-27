import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KEY } from 'src/config';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  

  constructor(
    private http:HttpClient
  ) { }

  speciesURL = `https://perenual.com/api/species-list?key=${KEY}&page=1`
  getAllSpecies(){
    return this.http.get(this.speciesURL).pipe(map((response:any)=>{
      const data = response['data'] 
      return data.slice(0,10) 
    }))
  }
}
