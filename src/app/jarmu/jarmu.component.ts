import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jarmu',
  templateUrl: './jarmu.component.html',
  styleUrls: ['./jarmu.component.css']
})
export class JarmuComponent {

  vehicles: any;

  rendszam: any;
  marka: any;
  ar: any;

  constructor (private api : ApiService) {
    this.getVehicles();
  }
  getVehicles() {
    this.api.getVehicles().subscribe({
      next: data =>{
        console.log(data)
        this.vehicles = data
      }
    })
  }

  addVehicle(){
    //console.log("Működik", this.rendszam, this.marka, this.ar);
    let vehicle = {
      rendszam: this.rendszam, 
      marka: this.marka,
      ar: this.ar,
    }

    this.api.addVehicle(vehicle).subscribe({
      next: data => {
        console.log(data)
        this.getVehicles();
      }
    })
  }

}
