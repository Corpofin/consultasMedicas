import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { base } from '../const'

//Servicios utilizados
import { AuthenticationService } from '../authentication/authentication.service';

//Se importan los modelos a utilizar
import { Modulo } from '../../Models/Modulo.model';

@Injectable()
export class ModuloService {
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
  getModulos(): Observable<Modulo[]>
  {
    return this.http.get(this.base+'modulos', this.options).map((res: Response) => res.json());
  }

  //POST
  registerModulo(persona: Modulo)
  {
    return this.http.post( this.base+'modulos', JSON.stringify(persona), this.options).map((res: Response) => res.json());

  }

  //GET
  getModulo(id) : Observable<Modulo>
  {
    return this.http.get(this.base+'modulos/'+id, this.options).map((res: Response) => res.json());
  }

  //PUT
  editModulo(persona: Modulo, id: number)
  {
    return this.http.put(this.base+'modulos/'+id, JSON.stringify(persona), this.options).map((res: Response) => res.json());
  }

  //DELETE
  deleteModulo(id) {
    return this.http.delete(this.base+'modulos/'+id, this.options).map((res: Response) => res.json());
  }


}
