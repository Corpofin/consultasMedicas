<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//
// Route::get('/', function () {
//   return redirect('home');
// });
//
//
// Auth::routes();
//
// Route::get('/home', 'HomeController@index');
//
// Route::resource('users', 'UserController');
//
// Route::resource('users', 'UserController');
//
// Route::resource('roles', 'RoleController');
//
// Route::resource('estadoCivils', 'EstadoCivilController');
//
// Route::resource('previsions', 'PrevisionController');
//
// Route::resource('previsionActuals', 'PrevisionActualController');
//
// Route::resource('regions', 'RegionController');
//
// Route::resource('provincias', 'ProvinciaController');
//
// Route::resource('comunas', 'ComunaController');
//
// Route::resource('generos', 'GeneroController');
//
// Route::resource('fichaMedicas', 'FichaMedicaController');
//
// Route::resource('estadoCitas', 'EstadoCitaController');
//
// Route::resource('citas', 'CitaController');
//
// Route::resource('especialidads', 'EspecialidadController');
//
// Route::resource('personas', 'PersonaController');
//
// Route::resource('atentions', 'AtentionController');
//
// Route::resource('diagnosticos', 'DiagnosticoController');
//
// Route::resource('diagnosticoAtencions', 'DiagnosticoAtencionController');
//
// Route::resource('boxConsultas', 'BoxConsultaController');
//
// Route::resource('recetas', 'RecetaController');
//
// Route::resource('tipoBoxes', 'TipoBoxController');
//
// Route::resource('medicamentos', 'MedicamentoController');
//
// Route::resource('viaAdministracionMedicamentos', 'ViaAdministracionMedicamentoController');
//
// Route::resource('recetaMedicamentos', 'RecetaMedicamentoController');


Route::resource('historialFichas', 'HistorialFichaController');

Route::resource('users', 'UserController');

Route::resource('users', 'UserController');

Route::resource('regions', 'RegionController');

Route::resource('regions', 'RegionController');

Route::resource('regions', 'RegionController');

Route::resource('provincias', 'ProvinciaController');

Route::resource('comunas', 'ComunaController');

Route::resource('previsions', 'PrevisionController');

Route::resource('previsionActuals', 'PrevisionActualController');

Route::resource('roles', 'RoleController');

Route::resource('users', 'UserController');

Route::resource('personas', 'PersonaController');

Route::resource('generos', 'GeneroController');

Route::resource('fichaMedicas', 'FichaMedicaController');

Route::resource('estadoCivils', 'EstadoCivilController');

Route::resource('historialFichas', 'HistorialFichaController');

Route::resource('tipoSangres', 'TipoSangreController');

Route::resource('historials', 'HistorialController');

Route::resource('historialFichas', 'HistorialFichaController');

Route::resource('fichaMedicas', 'FichaMedicaController');