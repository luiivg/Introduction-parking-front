import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient} from '@angular/common/http';
import { Factura } from '../factura';

@Injectable({
  providedIn: 'root'
})
export class SalidaService {

  constructor(private http:HttpClient) { }

  getFacturaVehiculo(placa): Observable<Factura>{
    return this.http.get<Factura>('{http://localhost:8090/api/factura/generarFactura/'+ `${placa}`);
  }

  registrarFactura(factura: Factura):Observable<Factura>{
    return this.http.post<Factura>('http://localhost:8090/api/factura/facturar',factura)
  }
}
