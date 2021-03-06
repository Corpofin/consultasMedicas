<?php

namespace App\Repositories;

use App\Models\Persona;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class PersonaRepository
 * @package App\Repositories
 * @version December 8, 2017, 3:34 am UTC
 *
 * @method Persona findWithoutFail($id, $columns = ['*'])
 * @method Persona find($id, $columns = ['*'])
 * @method Persona first($columns = ['*'])
*/
class PersonaRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'rut',
        'nombre1',
        'nombre2',
        'apellido1',
        'apellido2',
        'fono_casa',
        'fono_trabajo',
        'movil',
        'estado',
        'fechaNacimiento',
        'direccion',
        'Genero_id',
        'Comuna_id',
        'EstadoCivil_id',
        'remember_token'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Persona::class;
    }
}
