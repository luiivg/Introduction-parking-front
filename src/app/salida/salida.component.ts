import { Component, OnInit } from '@angular/core';
import { Factura } from './factura';
import { SalidaService } from 'src/app/salida/service/salida.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultaComponent } from 'src/app/consulta/consulta.component';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

  private factura: Factura = new Factura()

  constructor(private salidaService :SalidaService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.cargarFactura();
  }

  cargarFactura(): void{
    this.activatedRouter.params.subscribe(params =>{
      let placa = params['placa']
      this.salidaService.getFacturaVehiculo(placa).subscribe(
        (factura) => this.factura = factura
      )
    })
  }

  public registrar(): void {
    console.log("a guardar")
    console.log(this.factura)
    this.salidaService.registrarFactura(this.factura).subscribe(

    )
  }
  

  

}
