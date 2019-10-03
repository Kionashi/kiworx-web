import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  buttonLabel = 'GET Pokimen';
  constructor(private http: HttpClient) { 
     
  }

  ngOnInit() {
  }

  onCheckAvailability(){
    if(this.buttonLabel === 'GET Pokimen'){
      let pokeId = Math.floor(Math.random() * 151); 
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`).subscribe((pokemon: any) =>{
        alert(pokemon.name);
      })
    }
  }

}
