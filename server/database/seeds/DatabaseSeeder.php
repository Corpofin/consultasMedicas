<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$this->call(modulopacientes::class);
		$this->call(modulocitas::class);
		$this->call(moduloatenciones::class);
	}
}
