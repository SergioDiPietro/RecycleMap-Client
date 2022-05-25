//Libs
import React from 'react';
//Components
import { Select } from '@chakra-ui/react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getCityValue } from '../../store/map/selector';
import { actionSetCityValue } from '../../store/map/action';
//Styles
import { colors } from '../../color-constants';

export const MunicipalityDropDown = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCityValue);

  const handleChange = e => {
    const selectValue = e.target.value;
    dispatch(actionSetCityValue(selectValue));
  };
  
  return (
    <Select
      placeholder="Seleccionar municipio"
      bg={colors.secundario}
      value={value}
      onChange={handleChange}
    >
      <option value="Adeje">{'Adeje'}</option>
      <option value="Arafo">{'Arafo'}</option>
      <option value="Arico">{'Arico'}</option>
      <option value="Arona">{'Arona'}</option>
      <option value="Buenavista del Norte">{'Buenavista del Norte'}</option>
      <option value="Candelaria">{'Candelaria'}</option>
      <option value="El Rosario">{'El Rosario'}</option>
      <option value="El Sauzal">{'El Sauzal'}</option>
      <option value="El Tanque">{'El Tanque'}</option>
      <option value="Fasnia">{'Fasnia'}</option>
      <option value="Garachico">{'Garachico'}</option>
      <option value="Granadilla de Abona">{'Granadilla de Abona'}</option>
      <option value="Guía de Isora">{'Guía de Isora'}</option>
      <option value="Güímar'">{'Güímar'}</option>
      <option value="Icod de los Vinos">{'Icod de los Vinos'}</option>
      <option value="La Guancha">{'La Guancha'}</option>
      <option value="La Matanza de Acentejo">{'La Matanza de Acentejo'}</option>
      <option value="La Orotava">{'La Orotava'}</option>
      <option value="La Victoria de Acentejo">
        {'La Victoria de Acentejo'}
      </option>
      <option value="Los Realejos">{'Los Realejos'}</option>
      <option value="Los Silos">{'Los Silos'}</option>
      <option value="Puerto de la Cruz">{'Puerto de la Cruz'}</option>
      <option value="San Cristóbal de La Laguna">
        {'San Cristóbal de La Laguna'}
      </option>
      <option value="San Juan de la Rambla">{'San Juan de la Rambla'}</option>
      <option value="San Miguel de Abona">{'San Miguel de Abona'}</option>
      <option value="Santa Cruz de Tenerife">{'Santa Cruz de Tenerife'}</option>
      <option value="Santa Úrsula">{'Santa Úrsula'}</option>
      <option value="Santiago del Teide">{'Santiago del Teide'}</option>
      <option value="Tacoronte">{'Tacoronte'}</option>
      <option value="Tegueste">{'Tegueste'}</option>
      <option value="Vilaflor de Chasna">{'Vilaflor de Chasna'}</option>
    </Select>
  );
};
