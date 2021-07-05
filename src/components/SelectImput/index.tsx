import React from "react";
import { Container } from './styles'

interface ISelectImputProps {
    options:{
        value: string | number [];
        label: string | number [];

    }[],
}

const Selectinput: React.FC <ISelectImputProps> = (options => { 
    return (
        <Container>
            <select>{
                options.map( item =>((<option value={item.value}>{item.label}</option>)))
                }
            </select>
        </Container>
    )
})


export default Selectinput;