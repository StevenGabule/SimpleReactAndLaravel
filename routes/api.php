<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('category', 'Api\CategoriesController@index');
Route::post('category/store', 'Api\CategoriesController@store');
Route::delete('/category/{id}', 'Api\CategoriesController@destroy');
Route::get('/category/edit/{id}', 'Api\CategoriesController@edit');
Route::put('/category/update/{id}', 'Api\CategoriesController@update');

