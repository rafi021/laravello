<?php

namespace Database\Seeders;

use App\Models\Board;
use App\Models\CardList;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CardListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cardList = [
            'To-Do',
            'In Progress',
            'Done',
        ];

        foreach ($cardList as $list) {
            CardList::create([
                'title' => $list,
                'board_id' => Board::select('id')->get()->random()->id,
                'owner_id' => User::select('id')->get()->random()->id,
            ]);
        }
    }
}
