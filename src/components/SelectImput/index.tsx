import React from "react";

import { Container } from './styles'

const Selectinput: React.FC = () => {
    return (
        <Container>
            <select>
                <option value="Ana">Ana</option>
                <option value="Marcos">Marcos</option>
                <option value="Maria">Maria</option>
            </select>
        </Container>
    );
}

export default Selectinput;