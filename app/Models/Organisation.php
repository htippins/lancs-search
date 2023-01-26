<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Organisation extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'category', 'demographic', 'city', 'county', 'phone_num_1', 'phone_num_2', "text_num", 'website', 'email', 'twitter'
    ];

    public function owner(): BelongsTo {
        return $this->belongsTo(\App\Models\User::class, 'by_user_id');
    }
}
