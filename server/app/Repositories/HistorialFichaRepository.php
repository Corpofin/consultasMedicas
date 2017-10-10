<?php

namespace App\Repositories;

use App\Models\HistorialFicha;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class HistorialFichaRepository
 * @package App\Repositories
 * @version October 10, 2017, 2:37 pm UTC
 *
 * @method HistorialFicha findWithoutFail($id, $columns = ['*'])
 * @method HistorialFicha find($id, $columns = ['*'])
 * @method HistorialFicha first($columns = ['*'])
*/
class HistorialFichaRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'fechaConsulta',
        'informacionMedica',
        'FichaMedica_id',
        'habitos',
        'peso',
        'estatura'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return HistorialFicha::class;
    }
}
