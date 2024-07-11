<?php

use App\Http\Middleware\Usuarios;
use Illuminate\Support\Facades\Route;

Route::post('/login', [\App\Http\Controllers\UsuariosController::class, 'login']);
Route::get('/list', [\App\Http\Controllers\LivrosController::class, 'list']);
Route::get('/get/{id}', [\App\Http\Controllers\LivrosController::class, 'get']);
Route::post('/cadastrar', [\App\Http\Controllers\LivrosController::class, 'cadastrar']);
Route::post('/editar/{id}', [\App\Http\Controllers\LivrosController::class, 'editar']);
Route::post('/apagar/{id}', [\App\Http\Controllers\LivrosController::class, 'apagar']);
