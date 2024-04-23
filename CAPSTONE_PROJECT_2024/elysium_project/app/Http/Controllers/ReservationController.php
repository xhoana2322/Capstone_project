<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Http\Requests\StoreReservationRequest;
use App\Http\Requests\UpdateReservationRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reservation = Reservation::all();

        return inertia('Reservation', ['reservation' => $reservation]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Reservation/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'number_people'=> 'required',
            'date' => 'required',
            'time' => 'required',
        ]);

        // $validatedData['user_id'] = Auth::id();
        Reservation::create($validatedData);

        return redirect()->route('Homepage')->with('success', 'Reservation sended successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Reservation $reservation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReservationRequest $request, Reservation $reservation)
    {
        // $prenotazioni->update(['is_pending' => $request->input('is_pending')]);
        // return redirect()->back()->with('success', 'Reservation confirmed successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reservation $reservation)
    {
        $reservation->delete();
        return to_route('reservation.index')->with('success', 'Reservation deleted successfully!');
    }

    public function confirm($id)
    {
        $reservation = Reservation::find($id);
        if ($reservation) {
            $reservation->is_pending = false;
            $reservation->save();
            echo "<script>location.reload();</script>";        
        } else {
            return response()->json(['message' => 'Reservation not found'], 404);
        }
    }

}
