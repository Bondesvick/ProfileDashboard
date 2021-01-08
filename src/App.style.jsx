import styled from "styled-components"

export const MainBody = styled.div`
  background-color: #262A41;
  color: #262A41;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0.8rem 1rem
`

export const Left = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;

    .button-area{
      display: flex;
      align-items: center;
    }
`

export const Right = styled.div`
    width: 50%;
    height: 100%;
    background-color: #F7F7FF;

    border: 1px solid #707070;
    border-radius: 28px;
    opacity: 1;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RightHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: baseline; */
    width: 80%;
    height: 20%;
    /* margin: 2rem 2rem 2rem 2rem; */
    margin-top: 1rem;

    .filter-area{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      width: 100%;
    }

`
export const RightFooter = styled.div`
height: 10%;
`

