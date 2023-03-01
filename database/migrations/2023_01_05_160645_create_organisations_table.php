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
            $table->string('category', 100);
            $table->string('demographic', 100);
            $table->string('city', 100)->nullable();
            $table->string('county', 100)->nullable();
            $table->string('phone_num_1', 100)->nullable();
            $table->string('phone_num_2', 100)->nullable();
            $table->string('text_num', 100)->nullable();
            $table->string('website', 200)->nullable();
            $table->string('email', 200)->nullable();
            $table->string('twitter', 100)->nullable();
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
