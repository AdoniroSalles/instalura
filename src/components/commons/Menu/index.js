/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';
import Text from '../../foundation/Text';

// rotas
const links = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Perguntas Frequentes',
    url: '/faq',
  },
  {
    text: 'Sobre',
    url: '/sobre',
  },
];

export default function Menu(onCadastrarClick) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {
                    links.map((link) => (
                      <li key={link.url}>
                        <Text
                          tag="a"
                          variant="smallestException"
                          href={link.url}
                        >
                          {link.text}
                        </Text>
                      </li>
                    ))
                }
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button variant="primary.main" onClick={onCadastrarClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
