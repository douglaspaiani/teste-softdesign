<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsuariosController extends Controller
{
    public function login(Request $request){
        $req = $request->get(0);
        $usuario = $req['username'];
        $senha = $req['password'];

        $user = Usuarios::where('usuario', $usuario)->first();
        if (Hash::check($senha, $user->senha)){
            session_start();
            $_SESSION['usuario'] = $usuario;
            return response()->json([
                'status' => true,
                'message' => 'Login realizado com sucesso',
                'data' => []
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Erro no login',
                'data' => []
            ]);
        }
    }
}
