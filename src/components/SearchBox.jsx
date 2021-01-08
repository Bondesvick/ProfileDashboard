import React from 'react'
import styled from 'styled-components'
import { HiOutlineSearch } from "react-icons/hi";

const Main = styled.div`
    position: relative;
    border: none;
    width: ${({width}) => (width)};

    .srch-compass{
        position: absolute;
        z-index: +10;
        left: ${({icoLeft}) => (icoLeft)};
        top: ${({icoTop}) => (icoTop)};
        height: ${({icoSize}) => (icoSize)};
        width: ${({icoSize}) => (icoSize)};
    }
`

const Input = styled.input`
    background-color: ${({background}) => (background)};
    border: none;
    border-radius: ${({radius}) => (radius)};
    height: ${({height}) => (height)};
    width: 100%;
    padding: 1rem;
    padding-left: ${({leftPad}) => (leftPad)};
    /* font-size: 3em; */
    font-style: Poppins;
    font-size: ${({font}) => (font)};
    letter-spacing: -0.02px;
    color: ${({color}) => (color)};
    opacity: 0.7;

    &:focus{
        outline: none;
    }
`

export default function SearchBox({icoTop, icoLeft, icoSize, font, leftPad, width, height, background, color, radius, placeholder}) {
    return (
        <Main icoTop={icoTop} icoLeft={icoLeft} icoSize={icoSize} width={width}>
            <HiOutlineSearch className="srch-compass"/>

            <Input leftPad={leftPad} font={font} width={width} height={height} background={background} color={color} radius={radius} type="search" placeholder={placeholder}/>

        </Main>
    )
}
