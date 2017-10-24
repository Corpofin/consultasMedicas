@extends('layouts.app')

@section('content')
    <section class="content-header">
        <h1>
            Permiso Modulo
        </h1>
   </section>
   <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($permisoModulo, ['route' => ['permisoModulos.update', $permisoModulo->id], 'method' => 'patch']) !!}

                        @include('permiso_modulos.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection