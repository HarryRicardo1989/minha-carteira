import React from "react";
import { Container, TitleContainer, Controllers } from './styles'
import Selectinput from "../SelectImput";

const ContentHeader: React.FC = () => {
    const options = [
        {value:"Ricardo",label:"Ricardo"},
        {value:"Maria",label:"Maria"},
        {value:"Rodrigo",label:"Rodrigo"},
    ]
    return (
        <Container>
            <TitleContainer>
                <h1>
                    Titulo
                </h1>
            </TitleContainer>
            <Controllers>
                <Selectinput options={options}/>
                <Selectinput options={options}/>
                <Selectinput options={options}/>
            </Controllers>


        </Container>
    );
}

export default ContentHeader;