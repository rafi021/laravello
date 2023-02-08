<?php

namespace Database\Seeders;

use App\Models\Board;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BoardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $board1 = Board::create([
            'title' => "Grocieries",
            'color' => 'teal',
            'owner_id' => 1
        ]);
        $board1 = Board::create([
            'title' => "Work",
            'color' => 'orange',
            'owner_id' => 2
        ]);
        $board1 = Board::create([
            'title' => "Hobby",
            'color' => 'indigo',
            'owner_id' => 1
        ]);
    }
}
