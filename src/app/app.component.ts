import { Component } from '@angular/core';
import { EmpleadosService } from './empleados.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listaEmpleados: any[]

  constructor(private empleadosService: EmpleadosService) { //nombre de la clase creada
    this.listaEmpleados = this.empleadosService.getAll()
  }

  handleEmpleadoEnviado($event) {
    let newEmp = {...$event}
    this.listaEmpleados.push(newEmp)
  }

  departamentoSeleccionado($event){
    this.listaEmpleados = this.empleadosService.getByDepartamento($event.target.value)
  }

}
