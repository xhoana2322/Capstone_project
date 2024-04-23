<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Homepage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('Homepage');

// indirizza al login e poi alla dashboard del back-end
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('/reservation', ReservationController::class);
});

require __DIR__.'/auth.php';


Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/people', function () {
    return Inertia::render('People');
});

Route::get('/journey', function () {
    return Inertia::render('Journey');
});

Route::get('/menu', function () {
    return Inertia::render('Menu');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('*', function () {
    return Inertia::render('NoPage');
});

Route::get('/reservation/create', [ReservationController::class, 'create'])->name('reservation.create');
Route::post('/reservation', [ReservationController::class, 'store'])->name('reservation.store');

Route::put('/reservation/confirm/{id}', [ReservationController::class, 'confirm'])->name('reservation.confirm');

Route::get('/contact', [ContactController::class, 'show'])->name('contact.show');
Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');

