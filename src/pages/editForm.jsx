import React,{useState} from 'react';
import FormikForm from '../components/DataDisplay/FormikForm';
import MainBody from '../components/headers/MainBody';



const EditForm = () => {

    const [fields, updateFields] = useState({
        firstName: "Krishnna",
        lastName: "Sarrdah",
        mobile_no: "012345678",
    });

    return (

        <MainBody>
            <FormikForm fields={fields} updateFields={updateFields} />
        </MainBody>
    );
}

export default EditForm;