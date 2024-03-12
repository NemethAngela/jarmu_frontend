import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = "https://localhost:7147/api/" //ezt a swaggeren felül a cím alatt látjuk

  constructor(private http: HttpClient) { }

  getVehicles() { //lekérés biztosan lesz! itt a járműveket kérjük le
    let endpoint = "Jarmu"
    let url = this.host + endpoint

    return this.http.get<any>(url); 
  }

  addVehicle(vehicle: any){ //hozzáadunk járművet
    let endpoint = "Jarmu"
    let url = this.host + endpoint

    return this.http.post<any>(url, vehicle); //hozzáadunk járművet, amit elküldünk a post metódussal
  }
}
