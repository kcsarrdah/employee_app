import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';

const form_id = 'form_id';
class MaintenanceForm extends Component {
  _renderAction() {
    return (
      <React.Fragment>
        <div className="form-statusbar">
        {
          <React.Fragment>
            <button className="btn btn-primary px-8 m-4" type="submit" form={form_id}>Save</button>
            <a href="/empDetails"><button className="btn btn-danger px-8 m-4" style={{marginLeft: "8px"}}>Cancel</button></a>
          </React.Fragment>
          
        }
        </div>
      </React.Fragment>
    );
  }

  _renderFormInput = () => {
    return (
      <React.Fragment>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <label className="text-sm font-medium text-gray-500">First Name</label>
          <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Field type="text" name="firstName" className="form-control" placeholder={this.props.fields.firstName} />
          </div>
        </div>

        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <label className="text-sm font-medium text-gray-500">Last Name</label>
          <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Field type="text" name="lastName" className="form-control" placeholder={this.props.fields.lastName} />
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <label className="text-sm font-medium text-gray-500">Mobile No</label>
          <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Field type="text" name="mobile_no" className="form-control" placeholder={this.props.fields.mobile_no} />
          </div>
        </div>
      </React.Fragment>        
    );
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="bg-white m-4 p-4 shadow overflow-hidden sm:rounded-lg">Emp Details Form Editor Mode</h2>
        {this._renderAction()}
        <Form id={form_id}>
        {
          this._renderFormInput()
        }
        </Form>
      </React.Fragment>
    );
  }
}

const FormikForm = withFormik({ 
  enableReinitialize: true,
  handleSubmit: (values, { props, ...actions }) => {
    props.updateFields(values);
    console.log(values);
  }
})(MaintenanceForm);

export default FormikForm;