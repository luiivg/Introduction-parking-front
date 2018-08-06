import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  
  constructor(private http:HttpClient) { }

  consultarVehiculos():Observable<any>{
    return this.http.get<any[]>('http://localhost:8090/api/vehiculo/listar');
  }
}
