//Componentes generales
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { base } from '../const'

//Servicios utilizados
import { AuthenticationService } from '../authentication/authentication.service';

//Se importan los modelos a utilizar
import { VistaPaciente } from '../../Models/VistaPaciente.model';

@Injectable()
export class VistaPacienteService {
	public base: string = base.api;
	public options: RequestOptions;
	public headers: Headers;

	constructor(private http: Http, private authenticationService: AuthenticationService)
	{
		this.headers = new Headers(
		{
			'Authorization': 'Bearer ' + this.authenticationService.token,
			'Content-Type': 'application/json'
		});

		this.options = new RequestOptions({ headers: this.headers });


	}
	//GET
	getVistaPacientes(): Observable<VistaPaciente[]>
	{
		return this.http.get(this.base+'vistaPacientes', this.options).map((res: Response) => res.json());
	}

	//GET
	getVistaPaciente(id) : Observable<VistaPaciente>
	{
		return this.http.get(this.base+'vistaPacientes/'+id, this.options).map((res: Response) => res.json());
	}

}