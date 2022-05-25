//Libs
import React from 'react';
//Components
import { MapLeaflet } from '../../components/MapLeaflet/MapLeaflet';
import { Select, Stack } from '@chakra-ui/react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionSetFilterWasteType } from '../../store/map/action';
import { getFilterWasteType } from '../../store/map/selector';
//Styles
import { colors } from '../../color-constants';

export const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilterWasteType);

  const handleChange = e => {
    const value = e.target.value;
    console.log(value);
    dispatch(actionSetFilterWasteType(value));
  };

  return (
    <Stack h={'100%'} w={'100%'} bg={colors.primario}>
      <Select
        placeholder="Seleccionar residuo"
        bg={colors.secundario}
        onChange={handleChange}
        value={value}
      >
        <option value="Plástico">{'Plástico'}</option>
        <option value="Papel y cartón">{'Papel y cartón'}</option>
        <option value="Vidrio">{'Vidrio'}</option>
        <option value="Residuos electrónicos">{'Residuos electrónicos'}</option>
        <option value="Aceite">{'Aceite'}</option>
        <option value="Ropa y calzado">{'Ropa y calzado'}</option>
      </Select>

      <MapLeaflet />
    </Stack>
  );
};
