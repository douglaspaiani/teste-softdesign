<?php

namespace App\Http\Controllers;

use App\Models\Livros;
use Illuminate\Http\Request;

class LivrosController extends Controller
{
    public function list(){
        return Livros::all();
    }

    public function get($id){
        return Livros::findOrFail($id);
    }

    public function editar($id, Request $request){
        $livro = Livros::findOrFail($id);
        if($livro->update($request->all())){
            return response()->json([
                'status' => true,
                'message' => 'Livro editado com sucesso',
                'data' => []
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Erro ao editar o livro',
                'data' => []
            ]);
        }
    }

    public function cadastrar(Request $request){
        $livro = $request->get(0);
        if(Livros::create($livro)){
            return response()->json([
                'status' => true,
                'message' => 'Livro cadastrado com sucesso',
                'data' => $livro
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Erro ao cadastrar livro',
                'data' => []
            ]);
        }
    }

    public function apagar($id){
        if(Livros::findOrFail($id)->delete()){
            return response()->json([
                'status' => true,
                'message' => 'Livro apagado com sucesso',
                'data' => []
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Erro ao apagar o livro',
                'data' => []
            ]);
        }
    }
}
