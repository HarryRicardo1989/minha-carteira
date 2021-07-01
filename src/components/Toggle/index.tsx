import React, { useState } from 'react';

import { Container, ToggleLabel, TogleSelector } from './styles';


const Toggle: React.FC = () => {
    const [online, setOnline] = useState(false);
    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <TogleSelector
                checked={online}
                onChange={() => setOnline(!online)}
                uncheckedIcon={false}
                checkedIcon={false}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    )
}

export default Toggle;