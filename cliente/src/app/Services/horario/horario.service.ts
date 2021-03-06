import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


//Servicios utilizados
import { AuthenticationService } from '../authentication/authentication.service';

//Se importan los modelos a utilizar
import { Horario } from '../../Models/Horario.model';
@Injectable()
export class HorarioService {

  public base: string = "http://localhost:8000/api/v1/";
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
getHorarios(): Observable<Horario[]>
{
	return this.http.get(this.base+'horarios', this.options).map((res: Response) => res.json());
}

//POST
registerHorario(horario: Horario): Observable<boolean>
{
	return this.http.post( this.base+'horarios', JSON.stringify(horario), this.options).map((res: Response) => res.json());

}

//GET
getHorario(id) : Observable<Horario>
{
	return this.http.get(this.base+'horarios/'+id, this.options).map((res: Response) => res.json());
}

//PUT
editHorario(horario: Horario, id: number)
{
	return this.http.put(this.base+'horarios/'+id, JSON.stringify(horario), this.options).map((res: Response) => res.json());
}

//DELETE
deleteHorario(id) {
	return this.http.delete(this.base+'horarios/'+id, this.options).map((res: Response) => res.json());
}


}
