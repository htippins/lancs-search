<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organisations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title', 100);
            $table->text('description');
            $table->foreignId('location_id')->constrained();
            $table->integer('phone_num_1')->nullable();
            $table->integer('phone_num_2')->nullable();
            $table->integer('text_num')->nullable();
            $table->string('website', 200)->nullable();
            $table->string('email', 200)->nullable();
            $table->string('twitter', 100)->nullable();
            $table->foreignId('category_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('organisations');
    }
};
