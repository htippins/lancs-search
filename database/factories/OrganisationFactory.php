<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Location;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Organisation>
 */
class OrganisationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->word(),
            'description' => fake()->paragraph(),
            'location_id' => Location::all()->random()->id,
            'phone_num_1' => fake()->randomNumber(),
            'website' => fake()->domainName(),
            'email' => fake() ->email(),
            'category_id' => Category::all()->random()->id,
        ];
    }
}
