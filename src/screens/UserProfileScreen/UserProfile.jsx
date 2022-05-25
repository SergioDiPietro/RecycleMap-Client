//Libs
import React from 'react';
//Components
import {
  Flex,
  Text,
  Heading,
  Stack,
  Avatar,
  Table,
  Tbody,
  Button,
  useToast,
  Box
} from '@chakra-ui/react';
import { MarkerCard } from '../../components/MarkerCard/MarkerCard';
//Redux
import { useSelector } from 'react-redux';
import { getUser } from '../../store/user/selector';
import { getMarkersByUserId } from '../../store/map/selector';
import { useAllMarkers } from '../../hooks/useAllMarkers';
import { useDispatch } from 'react-redux';
import { actionSetLogout } from '../../store/user/action';
//React
import { useNavigate } from 'react-router-dom';
//Services
//Styles
import { colors } from '../../color-constants';
import { FaSignOutAlt } from 'react-icons/fa';

export const UserProfile = () => {
  const user = useSelector(getUser);
  useAllMarkers();
  const userMarkers = useSelector(getMarkersByUserId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
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
          Hasta la próxima, {user.name}
        </Box>
      ),
    });
    dispatch(actionSetLogout());
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    navigate("/");
  };

  return (
    <Stack w={'90%'} maxW={'600px'} rounded={'xl'} h={'100%'}>
      <Flex justify={'flex-start'}>
        <Avatar
          size={'xl'}
          src={'https://bit.ly/sage-adebayo%22%3E'}
          alt={'Author'}
          css={{
            border: '3px solid',
            borderColor: colors.primario,
          }}
          m={'5%'}
        />
        <Stack justifyContent={'center'} pl={'10px'} width={'100%'}>
          <Stack
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Heading
              fontSize={'2xl'}
              fontWeight={500}
              fontFamily={'body'}
              color={colors.sobrefondo}
            >
              {user.name}
            </Heading>
            <Button size={'xl'} bg={colors.fondo} fontSize={'xl'} onClick={() => handleLogout()}>
              <FaSignOutAlt />
            </Button>
          </Stack>
          <Text color={colors.sobrefondo}>{user.email}</Text>
          <Text color={colors.sobrefondo}>Puntos registrados: {}</Text>
        </Stack>
      </Flex>

      <Stack
        borderTop={'solid'}
        borderColor={colors.primario}
        w={'100%'}
        h={'70%'}
        overflowY={'auto'}
      >
        <Table size="sm" marginTop="10px">
          <Tbody>
            {userMarkers.map(marker => (
              <MarkerCard key={marker.id} marker={marker} />
            ))}
          </Tbody>
        </Table>
      </Stack>
    </Stack>
  );
};
