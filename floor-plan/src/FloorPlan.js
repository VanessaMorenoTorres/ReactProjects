import React from 'react'
import Bedroom from './Bedroom'
import Bath from './Bath'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'

function FloorPlan(){
    return(
    <div className='FloorPlan'>
        <LivingRoom/>
        <Kitchen/>
        <Bedroom bedNum='1' />
        <Bath size='Full' />
        <Bedroom bedNum='2' />
        <Bedroom bedNum='3' />
        <Bath size='Half' />
    </div>
    );
}

export default FloorPlan