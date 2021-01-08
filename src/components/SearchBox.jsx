import React from 'react'
import styled from 'styled-components'
import { HiOutlineSearch } from "react-icons/hi";

const Main = styled.div`
    position: relative;
    border: none;

    .srch-compass{
        position: absolute;
        z-index: +10;
        left: 1rem;
        top: 1.5rem;
        height: 2rem;
        width: 2rem;
    }
`

const Input = styled.input`
    background-color: #3C3F54;
    border: none;
    border-radius: 28px;
    height: 80px;
    width: 500px;
    color: #fff;
    padding: 1rem 1rem 1rem 4rem;
    /* font-size: 3em; */
    font: Poppins;
    font-size: 22px;
    letter-spacing: -0.02px;
    color: #FFFFFF;
    opacity: 0.7;

    &:focus{
        outline: none;
    }
`

export default function SearchBox() {
    return (
        <Main>
            <HiOutlineSearch className="srch-compass"/>
            <Input type="search" placeholder="Find a user"/>
        </Main>
    )
}
