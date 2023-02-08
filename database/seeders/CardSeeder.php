<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\CardList;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $taskList = [
            'Buy groceries',
            'Take the dog for a walk',
            'Pay the bills',
            'Get the car fixed',
            'Write Novel',
            'Buy food',
            'Paint a picture',
            'Create a course',
        ];

        foreach ($taskList as $key => $task) {
            Card::create([
                'title' => $task,
                'order' => $key+1,
                'list_id' =>  CardList::select('id')->get()->random()->id,
                'owner_id' =>  User::select('id')->get()->random()->id,
            ]);
        }

    }
}
