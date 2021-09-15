<?php

namespace App\Http\Controller\Api\Resources;

use Phpsa\LaravelApiController\Http\Resources\ApiCollection;

class ScheduleResourceCollection extends ApiCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
