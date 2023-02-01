<?php

namespace App\Http\Controllers;

use App\Models\Organisation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MyAccountController extends Controller
{
    public function index()
    {
        return inertia(
            'Account/Index',
            ['organisations' => Auth::user()->organisation]
        );
    }
        

}
