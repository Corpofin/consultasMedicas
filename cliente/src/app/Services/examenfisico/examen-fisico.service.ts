import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { base } from '../const'

//Servicios utilizados
import { AuthenticationService } from '../authentication/authentication.service';

//Se importan los modelos a utilizar
import { ExamenFisico } from '../../Models/ExamenFisico.model';


@Injectable()
export class ExamenFisicoService {

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
getExamenFisicos(): Observable<ExamenFisico[]>
{
	return this.http.get(this.base+'examenFisicos', this.options).map((res: Response) => res.json());
}

//POST
registerExamenFisico(examenFisico: ExamenFisico): Observable<boolean>
{
	return this.http.post( this.base+'examenFisicos', JSON.stringify(examenFisico), this.options).map((res: Response) => res.json());

}

//GET
getExamenFisico(id) : Observable<ExamenFisico>
{
	return this.http.get(this.base+'examenFisicos/'+id, this.options).map((res: Response) => res.json());
}

//PUT
editExamenFisico(examenFisico: ExamenFisico, id: number)
{
	return this.http.put(this.base+'examenFisicos/'+id, JSON.stringify(examenFisico), this.options).map((res: Response) => res.json());
}

//DELETE
deleteExamenFisico(id) {
	return this.http.delete(this.base+'examenFisicos/'+id, this.options).map((res: Response) => res.json());
}


}
