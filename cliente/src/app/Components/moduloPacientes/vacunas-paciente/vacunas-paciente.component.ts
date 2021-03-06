import { Component, ElementRef, ViewChild, Inject } from '@angular/core';

import {UsuarioActual} from '../../Globals/usuarioactual.component';
import { VerpersonaComponent } from '../../moduloPacientes/personas/verpersona/verpersona.component';
import { VerFichaMedicaComponent } from '../fichamedica/verfichamedica/verfichamedica.component'

import { VacunasPaciente } from '../../../Models/VacunasPaciente.model';
import { VacunasPacienteService } from '../../../Services/vacunaspaciente/vacunaspaciente.service';

import { Vacuna } from '../../../Models/Vacuna.model';
import { VacunaService } from '../../../Services/vacuna/vacuna.service';

import { Paciente } from '../../../Models/Paciente.model';
import { PacienteService } from '../../../Services/paciente/paciente.service';

import { Persona } from '../../../Models/Persona.model';
import { PersonaService } from '../../../Services/persona/persona.service';


import { AgregarVacunasPacienteComponent } from './agregar-vacunas-paciente/agregar-vacunas-paciente.component';
import { EditarVacunasPacienteComponent } from './editar-vacunas-paciente/editar-vacunas-paciente.component';

//DATATABLE
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import { ExampleDatabase, ExampleDataSource } from '../../Globals/datasource.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-vacunas-paciente',
  templateUrl: './vacunas-paciente.component.html',
  styleUrls: ['./vacunas-paciente.component.css']
})
export class VacunasPacienteComponent {
	public totalVacunas: Vacuna[];
	public totalPacientes: any;
  public totalVacunasPaciente: any;
  public totalPersonas: Persona[];
	public usuarioActual;

  //arreglo con todos los registron que contengan al paciente parametrizado y sus hábitos
  public arrayVacunasPaciente: VacunasPaciente[];

  displayedColumns = ['Rut Paciente', 'Nombre','Vacunas'];


	//DATATABLE
  exampleDatabase;
  selection = new SelectionModel<string>(true, []);
  dataSource: ExampleDataSource | null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;


  ngOnInit()
  {
    this.dataSource = new ExampleDataSource(new ExampleDatabase([]), this.paginator, this.sort, 'VacunasPaciente');
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        })


    this.exampleDatabase = []

  }


  isAllSelected(): boolean
  {
    if (!this.dataSource) { return false; }
    if (this.selection.isEmpty()) { return false; }

    if (this.filter.nativeElement.value) {
      return this.selection.selected.length == this.dataSource.renderedData.length;
    } else {
      return this.selection.selected.length == this.exampleDatabase.data.length;
    }
  }

  masterToggle()
  {
    if (!this.dataSource) { return; }

    if (this.isAllSelected()) {
      this.selection.clear();
    } else if (this.filter.nativeElement.value) {
      this.dataSource.renderedData.forEach(data => this.selection.select(data.id));
    } else {
      this.exampleDatabase.data.forEach(data => this.selection.select(data.id));
    }
  }

  
  constructor(public servicioVacunasPaciente: VacunasPacienteService,public servicioVacuna: VacunaService,
     public servicioPaciente: PacienteService, public servicioPersona: PersonaService, public dialog:MatDialog) {

      this.usuarioActual=new UsuarioActual();
      this.totalVacunas = [];
      this.totalVacunasPaciente = [];
      this.totalPacientes=[];
      this.totalPersonas=[];
      this.arrayVacunasPaciente = [];
      this.actualizarAtributos();



      }

  //función para setear el array con los registros del paciente correspondiente
  obtenerVacunasPaciente(idPaciente){
    for(let i=0;i<this.totalVacunasPaciente.length;i++){

      if(this.totalVacunasPaciente[i].Paciente_id===idPaciente){

        if(this.totalVacunasPaciente[i].fechaVacunacion != null){

          this.totalVacunasPaciente[i].fechaTemp = new Date(this.totalVacunasPaciente[i].fechaVacunacion);
          this.totalVacunasPaciente[i].esVerdadero=true;

        }else if(this.totalVacunasPaciente[i].fechaVacunacion==null){
          this.totalVacunasPaciente[i].fechaTemp=null;
          this.totalVacunasPaciente[i].esVerdadero=false;
        }

        this.arrayVacunasPaciente.push(this.totalVacunasPaciente[i]);
      }

      
    }

  }

  actualizarAtributos ()
  {
    this.servicioVacuna.getVacunas().subscribe(data => {
      var todo: any = data;
      todo = todo.data;
      this.totalVacunas = todo;

      this.servicioPaciente.getPacientes().subscribe(data=>{
          var todo: any = data;
          todo = todo.data;
          this.totalPacientes = todo;

           this.servicioPersona.getPersonas().subscribe(data=>{
               var todo: any = data;
                todo = todo.data;
                this.totalPersonas = todo;

                this.servicioVacunasPaciente.getVacunasPaciente().subscribe(data => {
                  var todo: any = data;
                  todo = todo.data;
                  this.totalVacunasPaciente = todo;
        
                  this.reemplazarIdPorString();

                    //DATATABLE
                  this.exampleDatabase  = new ExampleDatabase(this.totalPacientes);

                  this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort, 'VacunasPaciente');
                  Observable.fromEvent(this.filter.nativeElement, 'keyup')
                      .debounceTime(150)
                      .distinctUntilChanged()
                      .subscribe(() => {
                        if (!this.dataSource) { return; }
                        this.dataSource.filter = this.filter.nativeElement.value;
                      })


               
                  
              });

           });

      });
    });
  }

  reemplazarIdPorString()
  {
    for(let i=0;i<this.totalPacientes.length;i++){
      for(let j=0;j<this.totalVacunasPaciente.length;j++){
        if(this.totalPacientes[i].id===this.totalVacunasPaciente[j].Paciente_id){
         let currentPersona= this.totalPersonas.filter( persona => persona.id === parseInt(this.totalPacientes[i].Persona_id));
          this.totalPacientes[i].rut=currentPersona[0].rut;
          this.totalPacientes[i].nombre=currentPersona[0].nombre1+" "+currentPersona[0].nombre2+" "+currentPersona[0].apellido1+" "+currentPersona[0].apellido2;
          break;
        }
      }
    }
  }


  edicionVacunasPaciente (paciente)
  {

    var a = JSON.parse( JSON.stringify(paciente) );

    //this.pasarStringId(a);

    this.obtenerVacunasPaciente(a.id);

    let dialogRef = this.dialog.open(EditarVacunasPacienteComponent, {
      width: '1000px',
      height: '700px',
      data:
      {
       paciente: a,
       vacunas: this.totalVacunas,
       arrayVacunasPaciente: this.arrayVacunasPaciente,
       servicioVacuna: this.servicioVacuna,
       servicioVacunasPaciente: this.servicioVacunasPaciente
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      this.actualizarAtributos();
      this.arrayVacunasPaciente = [];
      
    });
  }

  
  //función para mostrar la ficha médica del paciente correspondiente
 desplegarFichaPaciente(paciente)
  {

   var a = JSON.parse( JSON.stringify(paciente) );
   var b;

  this.servicioPaciente.getPaciente(a.id).subscribe(data =>{
    var todo: any = data;
    todo = todo.data;
    b=todo;

    this.servicioPersona.getPersona(parseInt(b.Persona_id)).subscribe(data => {

      var persona: any = data;
      persona = persona.data;

      console.log(persona);

       let dialogRef = this.dialog.open(VerFichaMedicaComponent, {
          width: '1000px',
          height:'700px',
          data: { persona: persona }
        });

    });
  });

  }


}
