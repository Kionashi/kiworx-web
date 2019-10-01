import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  buttonLabel = 'Check Availability';
  constructor() { 
     
  }

  ngOnInit() {
  }

  onCheckAvailability(){
    if(this.buttonLabel === 'Check Availability'){

      alert('connect to the API');
      this.buttonLabel = 'Connect to the freaking API';
    }else{
      alert ('>:(');
      this.buttonLabel = 'Check Availability';
    }

  }

}
