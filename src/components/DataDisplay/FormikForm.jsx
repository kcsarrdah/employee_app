import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';

const form_id = 'form_id';
class MaintenanceForm extends Component {

editOnClick = (event) => {
    event.preventDefault()
    const data = !(this?.props?.status?.edit)
    this.props.setStatus({
      edit: data,
    })
  }
    
  cancelOnClick = (event) => {
    event.preventDefault();
    this.props.resetForm();
    this.props.setStatus({
      edit: false,
    });
  }

  _renderAction() {
    return (
      <React.Fragment>
        <div className="form-statusbar">
        {
          this?.props?.status?.edit 
          ? 
          <React.Fragment>
            <a href="/empDetails"><button className="btn btn-primary px-8 m-4" type="submit" form={form_id}>Save</button></a>
            <a href="/empDetails"><button className="btn btn-danger px-8 m-4" style={{marginLeft: "8px"}}>Cancel</button></a>
          </React.Fragment>
          : 
          <button className="btn btn-success px-8 m-4" onClick={this.editOnClick}>Edit</button> 
        }
        </div>
      </React.Fragment>
    );
  }

  _renderFormView = () => {
    return (
      <React.Fragment>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <label className="text-sm font-medium text-gray-500">Name</label>
          <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <label type="text" name="name" className="form-control">
              {this?.props?.fields?.name}
            </label>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <label className="text-sm font-medium text-gray-500">Email</label>
          <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <label type="text" name="brand_name" className="form-control"> 
              {this?.props?.fields?.email}
            </label>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <label className="text-sm font-medium text-gray-500">Mobile No</label>
          <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <label type="text" name="device_type" className="form-control">
              {this?.props?.fields?.mobile_no}
            </label>
          </div>
        </div>
      </React.Fragment>
    );
  }

  _renderFormInput = () => {
    return (
      <React.Fragment>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <label className="text-sm font-medium text-gray-500">Name</label>
          <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Field type="text" name="name" className="form-control" placeholder="Name" />
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <label className="text-sm font-medium text-gray-500">Email</label>
          <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Field type="text" name="email" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <label className="text-sm font-medium text-gray-500">Mobile No</label>
          <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Field type="text" name="mobile_no" className="form-control" placeholder="Mobile No" />
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
          this?.props?.status?.edit 
          ?
          this._renderFormInput()
          :
          this._renderFormView()
        }
        </Form>
        <h4>Current value</h4>
        <div>
          <pre>
            <code>{JSON.stringify(this.props.fields, null, 2)}</code>
          </pre>
        </div>
      </React.Fragment>
    );
  }
}

const FormikForm = withFormik({
  mapPropsToStatus: (props) =>  {
    return {
      edit: props?.edit || true,
    }
  },
  mapPropsToValues: (props) => {
    return {
      name: props.fields.name,
      email: props.fields.email,
      mobile_no: props.fields.mobile_no
    }
  }, 
  enableReinitialize: true,
  handleSubmit: (values, { props, ...actions }) => {
    props.updateFields(values);
    actions.setStatus({
      edit: false,
    });
  }
})(MaintenanceForm);

export default FormikForm;