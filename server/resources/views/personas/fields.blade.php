<!-- Rut Field -->
<div class="form-group col-sm-6">
    {!! Form::label('rut', 'Rut:') !!}
    {!! Form::text('rut', null, ['class' => 'form-control']) !!}
</div>

<!-- Nombre1 Field -->
<div class="form-group col-sm-6">
    {!! Form::label('nombre1', 'Nombre1:') !!}
    {!! Form::text('nombre1', null, ['class' => 'form-control']) !!}
</div>

<!-- Nombre2 Field -->
<div class="form-group col-sm-6">
    {!! Form::label('nombre2', 'Nombre2:') !!}
    {!! Form::text('nombre2', null, ['class' => 'form-control']) !!}
</div>

<!-- Apellido1 Field -->
<div class="form-group col-sm-6">
    {!! Form::label('apellido1', 'Apellido1:') !!}
    {!! Form::text('apellido1', null, ['class' => 'form-control']) !!}
</div>

<!-- Apellido2 Field -->
<div class="form-group col-sm-6">
    {!! Form::label('apellido2', 'Apellido2:') !!}
    {!! Form::text('apellido2', null, ['class' => 'form-control']) !!}
</div>

<!-- Fono Casa Field -->
<div class="form-group col-sm-6">
    {!! Form::label('fono_casa', 'Fono Casa:') !!}
    {!! Form::text('fono_casa', null, ['class' => 'form-control']) !!}
</div>

<!-- Fono Trabajo Field -->
<div class="form-group col-sm-6">
    {!! Form::label('fono_trabajo', 'Fono Trabajo:') !!}
    {!! Form::text('fono_trabajo', null, ['class' => 'form-control']) !!}
</div>

<!-- Movil Field -->
<div class="form-group col-sm-6">
    {!! Form::label('movil', 'Movil:') !!}
    {!! Form::text('movil', null, ['class' => 'form-control']) !!}
</div>

<!-- Estado Field -->
<div class="form-group col-sm-6">
    {!! Form::label('estado', 'Estado:') !!}
    {!! Form::number('estado', null, ['class' => 'form-control']) !!}
</div>

<!-- Fechanacimiento Field -->
<div class="form-group col-sm-6">
    {!! Form::label('fechaNacimiento', 'Fechanacimiento:') !!}
    {!! Form::date('fechaNacimiento', null, ['class' => 'form-control']) !!}
</div>

<!-- Direccion Field -->
<div class="form-group col-sm-6">
    {!! Form::label('direccion', 'Direccion:') !!}
    {!! Form::text('direccion', null, ['class' => 'form-control']) !!}
</div>

<!-- Genero Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('Genero_id', 'Genero Id:') !!}
    {!! Form::number('Genero_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Comuna Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('Comuna_id', 'Comuna Id:') !!}
    {!! Form::number('Comuna_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Estadocivil Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('EstadoCivil_id', 'Estadocivil Id:') !!}
    {!! Form::number('EstadoCivil_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Remember Token Field -->
<div class="form-group col-sm-6">
    {!! Form::label('remember_token', 'Remember Token:') !!}
    {!! Form::text('remember_token', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('personas.index') !!}" class="btn btn-default">Cancel</a>
</div>
