import React from "react";

import logoImg from '../../assets/logo.svg'


import {
    Container,
    LogImg,
    Header,
    Title,
    MenuContainer,
    MenuItemLink,

} from './styles'

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="#">
                    Dashboard
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;