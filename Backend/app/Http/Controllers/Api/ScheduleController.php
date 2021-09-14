<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\ScheduleRequest;
use App\Http\Resources\ScheduleResource;
use App\Http\Resources\ScheduleResourceCollection;
use App\Models\Schedule;
use Phpsa\LaravelApiController\Http\Api\Controller;

class ScheduleController extends Controller
{

    protected $resourceSingle = ScheduleResource::class;

    protected $resourceCollection = ScheduleResourceCollection::class;


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
     * @param  App\Http\Requests\ScheduleRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ScheduleRequest $request)
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
     * @param  App\Http\Requests\ScheduleRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ScheduleRequest $request, $id)
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
        return Schedule::class;
    }
}
