//Libs
import React from 'react';
//Components
import { Button, Stack, Tr, Td, Text } from '@chakra-ui/react';
import { MdDelete, MdLocationOn, MdEdit } from 'react-icons/md';
//React
import { useNavigate } from 'react-router-dom';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { removeRecyclerMarker } from '../../services/map/map-services';
import { actionDeleteMarker } from '../../store/map/action';
import { actionEditingMarker } from '../../store/map/action';
import { actionSetMarkerToEdit } from '../../store/map/action';
import { getToken } from '../../store/user/selector';
import { colors } from '../../color-constants';
//Styles

const getColor = wasteType => {
  switch (wasteType) {
    case 'Papel y cartón':
      return 'solid #1E5E9E';
    case 'Plástico':
      return 'solid #C3CA28';
    case 'Vidrio':
      return 'solid #2BA621';
    case 'Residuos electrónicos':
      return 'solid #333333';
    case 'Aceite':
      return 'solid #CA5629';
    case 'Ropa y calzado':
      return 'solid #7CC3CA';
    default:
      break;
  }
};

export const MarkerCard = ({ marker }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);

  const handleDelete = (marker, token) => {
    removeRecyclerMarker(marker.id, token)
      .then(() => {
        dispatch(actionDeleteMarker(marker));
      })
      .catch(err => console.log(err));
  };

  const startEditProcess = () => {
    dispatch(actionSetMarkerToEdit(marker));
    dispatch(actionEditingMarker());
    navigate('/markerform');
  };

  return (
    <Tr borderLeft={getColor(marker.wasteType)}>
      <Td overflowX={'auto'}>
        <Text mb={'10px'} fontWeight={'bold'}>{marker.wasteType}</Text>
        <Text>{marker.address}</Text>
      </Td>

      <Td>
        <Stack direction="row" spacing={0} justifyContent={'flex-end'}>
          <Button
            size={'xs'}
            color={colors.sobrefondo}
            backgroundColor={colors.fondo}
            textAlign={'center'}
            fontSize={'lg'}
          >
            <MdLocationOn />
          </Button>
          <Button
            onClick={() => startEditProcess()}
            size={'xs'}
            color={colors.sobrefondo}
            backgroundColor={colors.fondo}
            textAlign={'center'}
            fontSize={'lg'}
          >
            <MdEdit />
          </Button>

          <Button
            size={'xs'}
            color={colors.sobrefondo}
            backgroundColor={colors.fondo}
            textAlign={'center'}
            fontSize={'lg'}
            onClick={() => handleDelete(marker, token)}
          >
            <MdDelete />
          </Button>
        </Stack>
      </Td>
    </Tr>
  );
};
