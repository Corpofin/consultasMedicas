<?php

use Faker\Factory as Faker;
use App\Models\Receta;
use App\Repositories\RecetaRepository;

trait MakeRecetaTrait
{
    /**
     * Create fake instance of Receta and save it in database
     *
     * @param array $recetaFields
     * @return Receta
     */
    public function makeReceta($recetaFields = [])
    {
        /** @var RecetaRepository $recetaRepo */
        $recetaRepo = App::make(RecetaRepository::class);
        $theme = $this->fakeRecetaData($recetaFields);
        return $recetaRepo->create($theme);
    }

    /**
     * Get fake instance of Receta
     *
     * @param array $recetaFields
     * @return Receta
     */
    public function fakeReceta($recetaFields = [])
    {
        return new Receta($this->fakeRecetaData($recetaFields));
    }

    /**
     * Get fake data of Receta
     *
     * @param array $postFields
     * @return array
     */
    public function fakeRecetaData($recetaFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'Recetacol' => $fake->word,
            'Atention_Cita_idCita' => $fake->randomDigitNotNull
        ], $recetaFields);
    }
}
