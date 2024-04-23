<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

use App\Mail\WelcomeMail;

class ContactController extends Controller
{
    public function show()
    {
        return inertia('Contact');
    }

    public function send(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ];

        
        Mail::to($data['email'])->send(new WelcomeMail($data));

        return redirect()->back()->with('success', 'Message sent successfully!');
    }
}
