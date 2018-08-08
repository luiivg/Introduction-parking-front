import { Component, OnInit } from '@angular/core';
import { Factura } from './factura';
import { SalidaService } from 'src/app/salida/service/salida.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  }

  

}
