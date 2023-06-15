import styled from "styled-components";

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cbc3e3;
     font-family: 'Poppins', sans-serif;
`

export const Content = styled.div`
    border: 3px solid #303030;
    border-radius: 0.5rem;
    background-color: #e1d3d1;
`

export const ButtonsContent = styled.div`  
    padding: 1.5rem 0.3rem;
    border-radius: 1rem 1rem 0.37rem 0.37rem;
    background-color: #5b6499;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`