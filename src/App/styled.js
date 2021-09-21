import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    padding: 10px 10px;
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