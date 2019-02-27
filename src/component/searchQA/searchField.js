import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Layout = () => (
  <div>
    <Field
      name="searchValue"
      component="input"
      type="text"
      placeholder="Search key..."
      style={{ padding: 15, margin: 15, width: 300 }}
    />
  </div>
);

export default reduxForm({
  form: 'searchQA',
})(Layout);
