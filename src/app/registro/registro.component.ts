import { Component, OnInit, Input } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { RegistroService } from 'src/app/registro/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})

export class RegistroComponent implements OnInit {

  vehiculo: Vehiculo = new Vehiculo();

  constructor(private registroService: RegistroService) { }

  tiposVehiculo = [
    {name: 'MOTO'},
    {name: 'CARRO'}
  ];

  ngOnInit() {
  }

  public onChange($event): void {
    this.vehiculo.tipo = $event.target.value;
  }

  public registrar(): void {
    console.log("a guardar")
    console.log(this.vehiculo)
    this.registroService.registrarVehiculo(this.vehiculo).subscribe(

    )
  }

}
