//Libs
import React from 'react';
//Components
import {
  Flex,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
  Box
} from '@chakra-ui/react';
//Redux
//React
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//Services
import { setSignUp } from '../../services/user/user-services';
//Styles
import { colors } from '../../color-constants';

export const Register = () => {
  const initialUser = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  };
  const [user, setUser] = useState(initialUser);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = e => {
    if (user.password !== user.confirm_password) {
      toast({
        duration: 3000,
        isClosable: false,
        position: 'top',
        render: () => (
          <Box
            color={colors.sobreerror}
            p={3}
            bg={colors.error}
            borderRadius={'md'}
            textAlign={'center'}
            fontWeight={'bold'}
          >
            Las contraseñas no coinciden
          </Box>
        ),
      });
      return;
    };

    setSignUp({ name: user.name, email: user.email, password: user.password })
      .then(res => {
        navigate('/');
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
              ¡Registro exitoso!
            </Box>
          ),
        });
      })
      .catch(err => {
        console.log(err);
      });
    setUser(initialUser);
  };

  return (
    <Flex w={'100%'} align={'center'} justify={'center'}>
      <Stack mx={'auto'} w={'90%'} maxW={'300px'}>
        <Stack spacing={6}>
          <Stack align={'center'} borderBottom={`solid ${colors.primario}`} paddingBottom={'10px'}>
            <Heading
              fontSize={'2xl'}
            >
              Registro
            </Heading>
          </Stack >
          <FormControl id="name" isRequired>
            <Input
              placeholder="Nombre"
              name="name"
              value={user.name}
              type="text"
              bg={colors.secundario}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={user.email}
              bg={colors.secundario}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <Input
              placeholder="Contraseña"
              type="password"
              name="password"
              value={user.password}
              bg={colors.secundario}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="confirmpassword" isRequired>
            <Input
              placeholder="Repetir contraseña"
              type="password"
              name="confirm_password"
              value={user.confirm_password}
              bg={colors.secundario}
              onChange={handleChange}
            />
          </FormControl>

          <Stack pt={6}>
            <Text align={'center'}>
              ¿Ya estas registrado?{' '}
              <NavLink to="/" style={{ color: colors.primario, fontWeight: 'bold' }}>
                Iniciar Sesion
              </NavLink>
            </Text>
          </Stack>

          <Stack spacing={10} pt={2}>
            <Button
              onClick={() => handleSubmit()}
              type="submit"
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
