//Libs
import React from 'react';
//Components
import { Select } from '@chakra-ui/react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionSetWasteTypeValue } from '../../store/map/action';
import { getWasteTypeValue } from '../../store/map/selector';
//Styles
import { colors } from '../../color-constants';

export const RecyclerDropDown = () => {
  const dispatch = useDispatch();
  const value = useSelector(getWasteTypeValue);
  const handleChange = e => {
    const selectvalue = e.target.value;
    dispatch(actionSetWasteTypeValue(selectvalue));
  };
  return (
    <Select
      placeholder="Seleccionar residuo"
      bg={colors.secundario}
      value={value}
      onChange={handleChange}
    >
      <option value="Plástico">{'Plástico'}</option>
      <option value="Papel y cartón">{'Papel y cartón'}</option>
      <option value="Vidrio">{'Vidrio'}</option>
      <option value="Residuos electrónicos">{'Residuos electrónicos'}</option>
      <option value="Aceite">{'Aceite'}</option>
      <option value="Ropa y calzado">{'Ropa y calzado'}</option>
    </Select>
  );
};
