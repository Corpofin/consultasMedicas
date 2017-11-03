@extends('layouts.app')

@section('content')
    <section class="content-header">
        <h1>
            Tipo Box
        </h1>
   </section>
   <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($tipoBox, ['route' => ['tipoBoxes.update', $tipoBox->id], 'method' => 'patch']) !!}

                        @include('tipo_boxes.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection