//Libs
import React from 'react';
//Components
import {
  Flex,
  FormControl,
  Input,
  Text,
  Stack,
  Button,
  Heading,
  useToast,
  Box
} from '@chakra-ui/react';
//React
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//Redux
import { setLogin } from '../../services/user/user-services';
import { useDispatch } from 'react-redux';
import { actionSetLogin } from '../../store/user/action';
//Styles
import { colors } from '../../color-constants';

export const Login = () => {
  const initialUser = {
    email: '',
    password: '',
  };
  const [user, setUser] = useState(initialUser);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = e => {
    setLogin({ email: user.email, password: user.password })
      .then(res => {
        dispatch(actionSetLogin(res.data));
        console.log(res.data['token']);
        window.localStorage.setItem('user', JSON.stringify(res.data.userData));
        window.localStorage.setItem('token', JSON.stringify(res.data.token));
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
              Bienvenido {res.data.userData.name}
            </Box>
          ),
        });
        navigate('/home');
      })
      .catch(err =>
        //Renderizar Toast Error Message
        console.log(err)
      );
  };

  return (
    <Flex w={'100%'} align={'center'} justify={'center'}>
      <Stack mx={'auto'} w={'90%'} maxW={'300px'}>
        <Stack spacing={8}>
          <Stack
            align={'center'}
            borderBottom={`solid ${colors.primario}`}
            paddingBottom={'10px'}
          >
            <Heading fontSize={'2xl'}>Iniciar Sesion</Heading>
          </Stack>
          <FormControl id="email">
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={user.email}
              bg={colors.secundario}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password">
            <Input
              placeholder="Contraseña"
              type="password"
              name="password"
              value={user.password}
              bg={colors.secundario}
              onChange={handleChange}
            />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'row', sm: 'row' }}
              align={'start'}
              justify={'center'}
            >
              <Text>¿No tienes una cuenta? </Text>
              <NavLink
                to={'/register'}
                style={{ color: colors.primario, fontWeight: 'bold' }}
              >
                <Text>Registrarse</Text>
              </NavLink>
            </Stack>
            <Button
              onClick={() => handleSubmit()}
              bg={colors.primario}
              color={colors.sobreprimario}
              fontWeight={'bold'}
              _hover={{
                bg: `${colors.secundario}`,
              }}
            >
              Enviar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};
