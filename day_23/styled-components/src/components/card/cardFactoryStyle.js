import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 300px;
    height: 500px;
    background: #222;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const AddToCartButton = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 8px;
    color: #fff;
    background: ${props => props.theme.colors.primary};
`

export const Image = styled.img`
    width: 100%;
    height: 40%;
`

export const CardTitle = styled.h1`
    color: red;
`

export const CardDesc = styled.p`
    color: white;
`