import styled from "styled-components";

export const ButtonContainer= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3%;
    padding: 0.5rem 1rem;
    width: 1em;
    height: 1.5em;
    font-size: 1.3rem;
    border-radius: 0.5rem;
    background-color: #e1d3d1;
    text-align: center;
    color: #303030;
    cursor: pointer;
    border: 2px solid #303030;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);

    &:hover {
        filter: contrast(1.2); 
    }
`

export const LargeButtonContainer= styled.div`
    margin: 0.3rem;
    padding: 0.5rem 1rem;
    width: 4.35em;
    height: 1.5em;
    font-size: 1.3rem;
    border-radius: 0.5rem;
    background-color: #e1d3d1;
    text-align: center;
    color: #303030;
    cursor: pointer;
    border: 2px solid #303030;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);

    &:hover {
        filter: contrast(1.2); 
    }
`