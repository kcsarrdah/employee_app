import React from 'react'
import DataDisplay from '../components/DataDisplay/datadisplay'
import ProfileDisplay from '../components/profile/profileDisplay';


const EmployeeDetails = () => {
    return ( 
        <div>
            <ProfileDisplay />
            <DataDisplay />
        </div>
     );
}
 
export default EmployeeDetails;