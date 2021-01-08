import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
        height: 100px;
        width: 109px;
        border-radius: 28px;
        border: none;
        background-color: ${({ color }) => (color)};

        &:focus{
            outline: none;
        }

        .ico{
            color: #fff;
            height: 55px;
            width: 55px;
        }
`

export default function CategoryBtn({color, icon : Icon, text}) {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginRight: "30px"}}>
            <Btn color={color}>
                <Icon className="ico"/>
            </Btn>
            <p style={{opacity: "0.7"}}>{text}</p>
        </div>
    )
}
