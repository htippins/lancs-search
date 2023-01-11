<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organisation extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'category', 'city', 'county', 'phone_num_1', 'phone_num_2', "text_num", 'website', 'email', 'twitter'
    ];
}
