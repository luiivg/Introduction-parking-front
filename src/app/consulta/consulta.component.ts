import { Component, OnInit } from '@angular/core';
import { ConsultaService } from './service/consulta.service';
import { Vehiculo } from '../registro/vehiculo';
import { Router, ActivatedRoute } from '@angular/router';
import { Factura } from '../salida/factura'

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  vehiculos:Array<Vehiculo>;
  private factura: Factura = new Factura()
  constructor(private consulta:ConsultaService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.consulta.consultarVehiculos().subscribe(
      vehiculos => this.vehiculos = vehiculos
    );
     
  }

   
}
