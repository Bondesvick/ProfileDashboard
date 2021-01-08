import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
        height: 100px;
        width: 100px;
        margin-right: 30px;
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

export default function CategoryBtn({color, icon : Icon}) {
    return (
        <Btn color={color}>
            <Icon className="ico"/>
        </Btn>
    )
}
