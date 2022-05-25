//Libs
import React, { useState, useEffect } from 'react';
import {
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  useToast,
  Box,
} from '@chakra-ui/react';
//Components
import { RecyclerDropDown } from '../../components/RecycleFilterDropDown/RecyclerDropDown';
import { MunicipalityDropDown } from '../../components/MunicipalityDropDown/MunicipalityDropDown';
//React
import { useNavigate } from 'react-router-dom';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getIsEditingMarker } from '../../store/map/selector';
import { getWasteTypeValue } from '../../store/map/selector';
import { getMarkerToEdit } from '../../store/map/selector';
import { getCityValue } from '../../store/map/selector';
import { getUserId } from '../../store/user/selector';
import { getToken } from '../../store/user/selector';
import { actionSetWasteTypeValue } from '../../store/map/action';
import { actionSetMarkerToEdit } from '../../store/map/action';
import { actionEditingMarker } from '../../store/map/action';
import { actionAddNewMarker } from '../../store/map/action';
import { actionSetCityValue } from '../../store/map/action';
import { actionModifyMarker } from '../../store/map/action';
// Services
import { getCoordinatesFromAddress } from '../../services/map/geolocation-services';
import { addNewRecyclerMarker } from '../../services/map/map-services';
import { modifyRecyclerMarker } from '../../services/map/map-services';
//Styles
import { colors } from '../../color-constants';

export const RecycleMarkerForm = () => {
  const dispatch = useDispatch();
  const markerToEdit = useSelector(getMarkerToEdit);

  const [address, setAddress] = useState('');
  const handleChange = e => {
    const value = e.target.value;
    if (e.target.name === 'address') setAddress(value);
  };

  useEffect(() => {
    setAddress(markerToEdit.address);
    dispatch(actionSetWasteTypeValue(markerToEdit.wasteType));
    dispatch(actionSetCityValue(markerToEdit.city));
  }, [markerToEdit, dispatch]);

  const userId = useSelector(getUserId);
  const city = useSelector(getCityValue);
  const wasteType = useSelector(getWasteTypeValue);
  const token = useSelector(getToken);

  const navigate = useNavigate();
  const handleSubmit = e => {
    if (isEditing) {
      getCoordinatesFromAddress(address, city).then(marker => {
        const coordinateY = marker.data.features[0].center[0];
        const coordinateX = marker.data.features[0].center[1];
        modifyRecyclerMarker(
          markerToEdit.id,
          {
            coordinateY: coordinateY,
            coordinateX: coordinateX,
            wasteType: wasteType,
            city: city,
            address: address,
          },
          token
        )
          .then(() => {
            dispatch(
              actionModifyMarker(
                {
                  id: markerToEdit.id,
                  coordinateY: coordinateY,
                  coordinateX: coordinateX,
                  wasteType: wasteType,
                  city: city,
                  address: address,
                },
                token
              )
            );
            toast({
              duration: 3000,
              isClosable: false,
              position: 'top',
              render: () => (
                <Box
                  color={colors.sobresecundario}
                  p={3}
                  bg={colors.secundarioalternativo}
                  borderRadius={'md'}
                  textAlign={'center'}
                  fontWeight={'bold'}
                >
                  Punto editado correctamente
                </Box>
              ),
            });
          })
          .catch(err => {
            console.log(err);
          });
      });
    } else {
      getCoordinatesFromAddress(address, ', ', city)
        .then(marker => {
          const coordinateY = marker.data.features[0].center[0];
          const coordinateX = marker.data.features[0].center[1];
          addNewRecyclerMarker(
            {
              coordinateY: coordinateY,
              coordinateX: coordinateX,
              wasteType: wasteType,
              city: city,
              address: address,
              UserId: userId,
            },
            token
          ).then(response => {
            dispatch(
              actionAddNewMarker({
                id: response.data.id,
                coordinateY: coordinateY,
                coordinateX: coordinateX,
                wasteType: wasteType,
                address: address,
              })
            );
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
    dispatch(actionSetCityValue(''));
    dispatch(actionSetWasteTypeValue(''));
    dispatch(actionEditingMarker());
    dispatch(actionSetMarkerToEdit(''));
    setAddress('');
    navigate('/home');
  };

  const isEditing = useSelector(getIsEditingMarker);
  const toast = useToast();

  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack spacing={8}>
        <Stack
          align={'center'}
          borderBottom={`solid ${colors.primario}`}
          paddingBottom={'10px'}
        >
          <Heading fontSize={'2xl'}>
            {isEditing ? 'Editar Punto' : 'Añadir Punto'}
          </Heading>
        </Stack>
        <FormControl id="municipality" isRequired>
          <MunicipalityDropDown />
        </FormControl>
        <FormControl id="address" isRequired>
          <Input
            onChange={handleChange}
            type="address"
            placeholder="Direccion"
            bg={colors.secundario}
            name="address"
            value={address}
          />
        </FormControl>
        <FormControl id="wastetype" isRequired>
          <RecyclerDropDown />
        </FormControl>
        <Stack spacing={10} pt={2}>
          <Button
            onClick={() => handleSubmit()}
            loadingText="Submitting"
            size="lg"
            bg={colors.primario}
            color={colors.sobreprimario}
            _hover={{
              bg: `${colors.secundario}`,
            }}
          >
            Enviar
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
