<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reservation>
 */
class ReservationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $arr_time = ['19:30', '19:45', '20:00', '20:15', '20:30', '20:45', '21:00', '21:15', '21:30', '21:45', '22:00'];
        $startDate = strtotime('2024-05-01');
        $endDate = strtotime('2025-12-31');

        return [
            'name' => fake()->name(),
            'email' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'number_people' => fake()->numberBetween(1, 10),
            'date' => date('Y-m-d', mt_rand($startDate, $endDate)),
            'time' =>  fake()->randomElement($arr_time),
            'is_pending' => true,
        ];
    }
}
