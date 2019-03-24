import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  empleado: any

  @Output() empleadoEnviado = new EventEmitter()

  constructor() { 
    this.empleado = {}
  }

  ngOnInit() {
  }

  enviarEmpleado() {
    this.empleadoEnviado.emit(this.empleado)
  }

}
