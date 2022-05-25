//Libs
import React from 'react';
//Components
import { Container, Stack, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
//Redux
//Styles
import { colors } from '../../color-constants';
import { MdHome, MdLocationOn, MdPerson } from 'react-icons/md';

export const Navbar = () => {
  return (
    <Container
      as={Stack}
      maxW={'100%'}
      h={'100%'}
      justify={'center'}
      align={'center'}
      bg={colors.primario}
      direction={'row'} 
      display={'flex'} 
      justifyContent={'space-around'}
    >
      
        <NavLink to="/home">
          <Button bg={colors.primario} variant={'none'}>
            {<MdHome size={'5vh'} />}
          </Button>
        </NavLink>
        <NavLink to="/markerform">
          <Button bg={colors.primario} variant={'none'}>
            {<MdLocationOn size={"5vh"} />}
          </Button>
        </NavLink>
        <NavLink to="/profile">
          <Button bg={colors.primario} variant={'none'}>
            {<MdPerson size={"5vh"} />}
          </Button>
        </NavLink>
      
    </Container>
  );
};
