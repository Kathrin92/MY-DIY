import React from 'react';
import SelectFieldDay from '../components/SelectFieldDay.js';
import InputDropdown from '../components/InputDropdown';

export default {
  title: 'Select field',
};

export function Input() {
  return (
    <SelectFieldDay>
      <InputDropdown placeholder="Projekttyp" />
    </SelectFieldDay>
  );
}
