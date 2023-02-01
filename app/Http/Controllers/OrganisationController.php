<?php

namespace App\Http\Controllers;

use App\Models\Organisation;
use Illuminate\Http\Request;

class OrganisationController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Organisation::class, 'organisation');
    }

    public function index(Request $request)
    {
        $filters = $request->only([
            'title', 'city', 'category', 'demographic'
        ]);

        $query = Organisation::orderBy('title');

        if($filters['title'] ?? false){
            $query->where('title', $filters['title']);
        }
        if($filters['city'] ?? false){
            $query->where('city', $filters['city']);
        }
        if($filters['category'] ?? false){
            $query->where('category', $filters['category']);
        }
        if($filters['demographic'] ?? false){
            $query->where('demographic', '=', $filters['demographic']);
        }

        return inertia(
            'Organisation/Index',
            [
                'filters' => $filters,
                'organisations' => $query->paginate(10)
                    ->withQueryString()
            ]);
    }

    public function create()
    {
        return inertia('Organisation/Create');
    }


    public function store(Request $request)
    {
        $request->user()->organisation()->create(
            $request->validate([
                'title' => 'required|string',
                'description' => 'required|string',
                'category' => 'required',
                'demographic' => 'required',
                'city' => 'required',
                'county' => 'required',
                'phone_num_1' => 'nullable|integer',
                'phone_num_2' => 'nullable|integer|min:4|max:11',
                'text_num' => 'nullable|integer|min:4|max:11',
                'website' => 'nullable|string',
                'email' => 'nullable|email:filter',
                'twitter' => 'nullable'
            ])
        );


        return redirect()->route('organisation.index')
            ->with('success', 'Entry was created!');
    }

    public function show(Organisation $organisation)
    {
        return inertia(
            'Organisation/Show',
            [
                'organisation' => $organisation
            ]);
    }

    public function edit(Organisation $organisation)
    {
        return inertia(
            'Organisation/Edit',
            [
                'organisation' => $organisation
            ]);
    }

   
    public function update(Request $request, Organisation $organisation)
    {
        $organisation->update(
            $request->validate([
                'title' => 'required|string',
                'description' => 'required|string',
                'category' => 'required',
                'demographic' => 'required',
                'city' => 'required',
                'county' => 'required',
                'phone_num_1' => 'nullable|integer',
                'phone_num_2' => 'nullable|integer|min:4|max:11',
                'text_num' => 'nullable|integer|min:4|max:11',
                'website' => 'nullable|string',
                'email' => 'nullable|email:filter',
                'twitter' => 'nullable'
            ])
        );


        return redirect()->route('organisation.index')
            ->with('success', 'Organisation was successfully edited');
    }

    public function destroy(Organisation $organisation)
    {
        $organisation->delete();

        return redirect()->back()
            ->with('success', 'Organisation was successfully deleted');
    }
}
