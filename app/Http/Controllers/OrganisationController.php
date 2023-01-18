<?php

namespace App\Http\Controllers;

use App\Models\Organisation;
use Illuminate\Http\Request;

class OrganisationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia(
            'Organisation/Index',
            [
                'organisations' => Organisation::all(),
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Organisation/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Organisation::create(
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
            ->with('success', 'Listing was created!');
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
            ->with('success', 'Listing was successfully edited');
    }

    public function destroy(Organisation $organisation)
    {
        $organisation->delete();

        return redirect()->back()
            ->with('success', 'Listing was successfully deleted');
    }
}
