import React from "react";
import { Container, TitleContainer, Controllers } from './styles'
import Selectinput from "../SelectImput";

const ContentHeader: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <h1>
                    Titulo
                </h1>
            </TitleContainer>
            <Controllers>
                <Selectinput />
                <Selectinput />
                <Selectinput />
            </Controllers>


        </Container>
    );
}

export default ContentHeader;