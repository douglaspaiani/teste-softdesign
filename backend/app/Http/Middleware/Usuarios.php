<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Usuarios
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        session_start();
        return response()->json($_SESSION);
        if(isset($_SESSION['usuario']) && !empty($_SESSION['usuario'])){
            return $next($request);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Login necessário',
                'data' => []
            ]);
        }
    }
}
