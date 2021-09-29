import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    background-color: white;
    padding: 20px 40px 40px 40px;
    margin: 0px -20px -20px -20px;
`;

export const Title = styled.h1`
    color: hsl(308, 100%, 32%);
`;

export const Fieldset = styled.fieldset`
    border-radius: 5px;
`;

export const Legend = styled.legend`
    border-radius: 5px;
    background-color: #640057;
    color: white;
    padding: 10px;
`;

export const Loading = styled.p`
    color: teal;
    padding: 20px;
`;

export const Failure = styled.p`
    color: crimson;
    padding: 20px;
`;

export const Span = styled.span`
    display: inline-block;
    width: 200px;
`;

export const Input = styled.input`
    border: 2px solid #ccc;
    border-radius: 5px;
    width: 100%;
    max-width: 300px;
    padding: 10px;
    ${({ required }) => required && css`
        background-color: hsl(308, 100%, 94%);
        border-color: rgb(136, 136, 136);
    `}
`;

export const Info = styled.p`
    font-size: 15px;
    text-align: center;
    padding: 15px;
    color: #000000;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: white;
    background-color: #640057;
    &:hover {
        background-color: hsl(308, 100%, 32%);
    }
`;