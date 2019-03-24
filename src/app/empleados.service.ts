import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

	arrEmpleados : any[]

  constructor() { 
  	this.arrEmpleados = [
  		{nombre: 'Vicky', apellidos: 'García', departamento: 'Recursos humanos'},
  		{nombre: 'Ana', apellidos: 'Fres', departamento: 'Comercial'},
  		{nombre: 'Rocio', apellidos: 'Monedero', departamento: 'Recursos humanos'}
  	]
  }

  getAll(): any[]{
  	return this.arrEmpleados
  }

  getByDepartamento(departamento: string): any[]{
	// let arrFiltrado = this.arrEmpleados.filter((item)=>{
	// 	return item.departamento === departamento
	// }) 
	//return this.arrFiltrado;

	return this.arrEmpleados.filter(item => item.departamento === departamento)

  }
}
