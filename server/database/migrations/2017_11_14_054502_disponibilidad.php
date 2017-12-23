<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Disponibilidad extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Disponibilidad', function (Blueprint $table) {
        $table->increments('id');
        $table->integer('disponible');

        $table->integer('Medico_id')->unsigned()->nullable();
        $table->foreign('Medico_id')->references('id')->on('Medico')->onDelete('cascade');

        $table->integer('Horario_id')->unsigned()->nullable();
        $table->foreign('Horario_id')->references('id')->on('Horario')->onDelete('cascade');

        $table->rememberToken();
        $table->timestamps();
        $table->timestamp('deleted_at')->nullable();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
         Schema::dropIfExists('Disponibilidad');
    }
}
