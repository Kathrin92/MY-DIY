import React from 'react';
import SelectField from '../components/SelectField.js';
import InputDropdown from '../components/InputDropdown';

export default {
  title: 'Select field',
};

export function Input() {
  return (
    <SelectField>
      <InputDropdown placeholder="Projekttyp" />
    </SelectField>
  );
}
