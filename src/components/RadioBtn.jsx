import React from 'react'
import {FaToggleOn, FaToggleOff} from "react-icons/fa";
import styled from 'styled-components'

const Container =styled.div`
    display: flex;
    align-items: center;
`

export default function RadioBtn({color}) {
    return (
        <Container>
            <FaToggleOn style={{color: color, height: "2rem", width: "2rem"}}/>
            {/* <FaToggleOff/> */}
            <h4 style={{opacity: "0.62", marginLeft: "0.5rem"}}>Show Country</h4>
        </Container>
    )
}
