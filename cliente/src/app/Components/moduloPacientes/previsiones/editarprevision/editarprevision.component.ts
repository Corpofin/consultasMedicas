import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PrevisionService } from '../../../../Services/prevision/prevision.service';

@Component({
	selector: 'app-editarprevision',
	templateUrl: './editarprevision.component.html',
	styleUrls: ['./editarprevision.component.css']
})
export class EditarprevisionComponent  {

	public prevision: any;

	constructor(
		public dialogRef: MatDialogRef<EditarprevisionComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public servicioPrevision: PrevisionService
		) { this.prevision = data.prevision; }

	onNoClick()
	{
		this.dialogRef.close();
	}

	editarPrevision()
	{
		this.servicioPrevision.editPrevision(this.prevision, this.prevision.id).subscribe( data => {
			console.log(data);
			this.dialogRef.close();

		});
	}

  isapreSeleccionado(respuesta)
  {
    this.prevision.isapre = respuesta;
    console.log(this.prevision);
  }

}