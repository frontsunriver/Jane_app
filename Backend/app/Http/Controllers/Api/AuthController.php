<?php

namespace App\Http\Controllers\Api;

// use App\Http\Controller\Api\Requests\AuthRequest;
use Illuminate\Http\Request;

use App\Http\Controller\Api\Resources\AuthResource;
use App\Http\Controller\Api\Resources\AuthResourceCollection;
use App\Models\User;
use Phpsa\LaravelApiController\Http\Api\Controller;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    protected $resourceSingle = AuthResource::class;

    protected $resourceCollection = AuthResourceCollection::class;


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handleIndexAction();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @see self::handleStoreOrUpdateAction to do magic insert / update
     * @param  App\Http\Requests\AuthRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AuthRequest $request)
    {
         return $this->handleStoreAction($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->handleShowAction($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\AuthRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AuthRequest $request, $id)
    {
        return $this->handleUpdateAction($id, $request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->handleDestroyAction($id);
    }

    /**
     * Eloquent model.
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    protected function model()
    {
        return User::class;
    }
    // app/Http/Controllers/AuthController.php
    

    public function register(Request $request)
    {
        $validatedData = $request->validate([
        'first_name' => 'required|string|max:255',
        'last_name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'first_name' => $validatedData['first_name'],
            'last_name' => $validatedData['last_name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
        return response()->json(['message' => 'Invalid login details'], 401); }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }
}
