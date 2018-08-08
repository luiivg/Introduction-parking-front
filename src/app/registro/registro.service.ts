import { Injectable } from '@angular/core';
import { Vehiculo} from "./vehiculo";
import { Observable } from "rxjs";
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http:HttpClient) { }

  registrarVehiculo(vehiculo: Vehiculo):Observable<Vehiculo>{
    return this.http.post<Vehiculo>('http://localhost:8090/api/vehiculo/save',vehiculo)
  }
   
}
