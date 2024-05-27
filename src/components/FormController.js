import React from 'react';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import Textarea from './Textarea';
// import other components as needed

const FormController = ({ controlType, ...rest }) => {
  switch (controlType) {
    case 'input':
      return <CustomInput {...rest} />;
    case 'select':
      return <CustomSelect {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    // add more cases as needed
    default:
      return null;
  }
};

export default FormController;
