import React from 'react'
import SmallCard from '../components/cards/smallCard';
import DataDisplay from '../components/DataDisplay/datadisplay'
import MainBody from '../components/headers/MainBody';
;


const EmployeeDetails = () => {
    return (
    <MainBody>
    <div class=" m-8 avatar avatar-xl"><img src="https://picsum.photos/200/300" alt="Pic" /></div> 
        <DataDisplay />
    </MainBody>

    );
}

export default EmployeeDetails;