import React, {useMemo} from "react";
import emojis from "../../utils/emojis";
import { Container, Profile, Welcome, UserName } from './style'

const MainHeader: React.FC = () => {

    const emoji = useMemo(()=>{
        const indice = Math.floor(Math.random()*emojis.length);
        return emojis[indice];
    },[]);

    return (
        <Container>
            <h1>MainHeader</h1>
            <Profile>
                <Welcome>Ola, {emoji}</Welcome>
                <UserName>Ricardo Paschoali</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;