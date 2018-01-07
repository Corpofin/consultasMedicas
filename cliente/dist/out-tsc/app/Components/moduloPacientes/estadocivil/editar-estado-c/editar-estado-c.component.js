"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var estadocivil_service_1 = require("../../../../Services/estadocivil/estadocivil.service");
var forms_1 = require("@angular/forms");
var EditarEstadoCComponent = /** @class */ (function () {
    function EditarEstadoCComponent(dialogRef, data, servicioEC) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.servicioEC = servicioEC;
        this.EC = data.ec;
    }
    EditarEstadoCComponent.prototype.ngOnInit = function () {
        this.editarForm = new forms_1.FormGroup({
            nombre: new forms_1.FormControl(this.EC.nombre, [forms_1.Validators.required]),
            descripcion: new forms_1.FormControl(this.EC.descripcion, [forms_1.Validators.required]),
        });
    };
    EditarEstadoCComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditarEstadoCComponent.prototype.editarEC = function () {
        var _this = this;
        this.servicioEC.editEstadoCivil(this.EC, this.EC.id).subscribe(function (data) {
            console.log(data);
            _this.dialogRef.close();
        });
    };
    EditarEstadoCComponent = __decorate([
        core_1.Component({
            selector: 'app-editar-estado-c',
            templateUrl: './editar-estado-c.component.html',
            styleUrls: ['./editar-estado-c.component.css']
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, estadocivil_service_1.EstadocivilService])
    ], EditarEstadoCComponent);
    return EditarEstadoCComponent;
}());
exports.EditarEstadoCComponent = EditarEstadoCComponent;
//# sourceMappingURL=editar-estado-c.component.js.map