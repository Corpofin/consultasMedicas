import { Component, OnInit, Inject,AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Persona } from '../../../../Models/Persona.model';
import { PersonaService } from '../../../../Services/persona/persona.service';

import { Genero } from '../../../../Models/Genero.model';
import { GeneroService } from '../../../../Services/genero/genero.service';

import { EstadoCivil } from '../../../../Models/EstadoCivil.model';
import { EstadocivilService } from '../../../../Services/estadocivil/estadocivil.service';

import { Region } from '../../../../Models/Region.model';
import { RegionService } from '../../../../Services/region/region.service';

import { Provincia } from '../../../../Models/Provincia.model';
import { ProvinciaService } from '../../../../Services/provincia/provincia.service';

import { Comuna } from '../../../../Models/Comuna.model';
import { ComunaService } from '../../../../Services/comuna/comuna.service';

import { TipoSangre } from '../../../../Models/TipoSangre.model';
import { TipoSangreService } from '../../../../Services/tiposangre/tiposangre.service';

import { PrevisionActual } from '../../../../Models/PrevisionActual.model';
import { PrevisionactualService } from '../../../../Services/previsionactual/previsionactual.service';

import { Prevision } from '../../../../Models/Prevision.model';
import { PrevisionService } from '../../../../Services/prevision/prevision.service';

import { Paciente } from '../../../../Models/Paciente.model';
import { PacienteService } from '../../../../Services/paciente/paciente.service';

import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface Element extends Persona{
}

@Component({
  selector: 'app-verfichamedica',
  templateUrl: './verfichamedica.component.html',
  styleUrls: ['./verfichamedica.component.css']
})
export class VerFichaMedicaComponent {
  public totalPersonas: Persona[];
  public usuarioActual;

  public totalPrevisionActual:PrevisionActual[];
  //historial previsiones
  public historialPrevisionesPacientes: PrevisionActual[];
  //booleano que indica si existen registros en el historial de previsiones
  public existePrevision:boolean;

 
   public paciente:any;
   public personaActual:any;


  constructor(

    public servicioPersona: PersonaService,
    public servicioRegion: RegionService,
    public servicioProvincia: ProvinciaService,
    public servicioComuna: ComunaService,
    public servicioGenero: GeneroService,
    public servicioEstadoCivil: EstadocivilService,
    public servicioTipoSangre: TipoSangreService,
    public servicioPrevisionActual: PrevisionactualService,
    public servicioPrevision: PrevisionService,
    public servicioPaciente:PacienteService,
    public dialogRef: MatDialogRef<VerFichaMedicaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

    ) {
    
      
      this.paciente=data.paciente;
      this.personaActual=new Persona();

      
      this.totalPersonas=[];
    
      this.totalPrevisionActual=[];
      this.historialPrevisionesPacientes=[];

      this.existePrevision=false;

      this.actualizarAtributos();

    
    

  	 }


//-------Datos Paciente

actualizarAtributos ()
  {

      this.servicioPersona.getPersonas().subscribe(data=>{
           var todo: any = data;
           todo = todo.data;
           this.totalPersonas = todo;
           this.obtenerPersona();
          
              
      });
   
  }

obtenerPersona(){
  for(let i=0;i<this.totalPersonas.length;i++){
    if(this.paciente.Persona_id==this.totalPersonas[i].id){
      this.personaActual=this.totalPersonas[i];
      this.paciente.rut=this.personaActual.rut;
      this.paciente.nombres=this.personaActual.nombre1+" "+this.personaActual.nombre2;
      this.paciente.apellidos=this.personaActual.apellido1+" "+this.personaActual.apellido2;
      break;
    }
  }
   this.obtenerComunaPaciente();
}


//-------Datos Persona

//funciones para obtener de los datos de la persona asociada al paciente

  //se obtiene la comuna del paciente
obtenerComunaPaciente(){
    this.servicioComuna.getComuna(this.personaActual.Comuna_id).subscribe((data)=>{
    var todo: any = data;
    todo = todo.data;
    this.paciente.comunaPaciente=todo.nombre;

    this.obtenerProvinciaPaciente(todo.Provincia_id);

    });
  }

//se obtiene la provincia del paciente
obtenerProvinciaPaciente(id){
    this.servicioProvincia.getProvincia(id).subscribe((data)=>{
      var todo: any = data;
    todo = todo.data;
    this.paciente.provinciaPaciente=todo.nombre;

    this.obtenerRegionPaciente(todo.Region_id);
    });

  }
  //se obtiene la region a la que pertenece el paciente
  obtenerRegionPaciente(id){
    this.servicioRegion.getRegion(id).subscribe((data)=>{
      var todo: any = data;
    todo = todo.data;
    this.paciente.regionPaciente=todo.nombre;

    this.obtenerGeneroPaciente();
   
    });
  }


//se obtiene el género del paciente
  obtenerGeneroPaciente(){
    this.servicioGenero.getGenero(this.personaActual.Genero_id).subscribe((data)=>{
      var todo: any = data;
    todo = todo.data;
    this.paciente.generoPaciente=todo.nombre;

    this.obtenerEstadoCivilPaciente();
   
    });
  }
//se obtiene el estado civil del paciente
  obtenerEstadoCivilPaciente(){
    this.servicioEstadoCivil.getEstadoCivil(this.personaActual.Genero_id).subscribe((data)=>{
    var todo: any = data;
    todo = todo.data;
    this.paciente.estadoCivilPaciente=todo.nombre;

    this.obtenerTipoSangre();

    });
  }
   obtenerTipoSangre(){
    this.servicioTipoSangre.getTipoSangre(this.paciente.TipoSangre_id).subscribe((data)=>{
      var todo: any = data;
      todo = todo.data;
      this.paciente.tipoSangrePaciente=todo.nombre;

      this.obtenerPrevisionActual();
     
    });

  }

  obtenerPrevisionActual(){
   this.servicioPrevisionActual.getPrevisionActuals().subscribe((data)=>{
     var todo: any = data;
     todo = todo.data;
     //registros en previsión actual
     this.totalPrevisionActual=todo;
     //se obtiene la previsión
     this.obtenerPrevision(this.personaActual.id);
   });

 }


 obtenerPrevision(id){
    for(let i=0;i<this.totalPrevisionActual.length;i++){


      if(this.totalPrevisionActual[i].Persona_id==id){
        //se guardan los cambios de previsiones del paciente
        this.historialPrevisionesPacientes.push(this.totalPrevisionActual[i]);
      }
    }
    //si existen registros en el historial
    if(this.historialPrevisionesPacientes.length>0){
      this.existePrevision=true;

    //se ordena el historial
    this.ordenarHistorial(this.historialPrevisionesPacientes);

    //se obtiene el ultimo registro
    var ultimo: any;
    ultimo=this.historialPrevisionesPacientes[this.historialPrevisionesPacientes.length-1];
    var fechaUltimo=new Date(ultimo.fechaActualizacion);

    //se obtiene la previsión asociada al mismo

    this.servicioPrevision.getPrevision(ultimo.Prevision_id).subscribe((data)=>{
      var todo: any=data
      todo=todo.data;
      this.paciente.previsionPaciente=todo.nombre;

    });
  }else{
    this.existePrevision=false;
  }

 }
 //se ordena el historial (de previsión)
 ordenarHistorial(historial){

   historial.sort((a:PrevisionActual,b:PrevisionActual)=>{
     var fechaA=new Date(a.fechaActualizacion);
     var fechaB= new Date(b.fechaActualizacion);
     return fechaA.getTime() - fechaB.getTime();
   });

 }

  onNoClick()
  {
    this.dialogRef.close();
  }


}
