import styled from 'styled-components'

export const ButtonContainer = styled.button`
font-size:1.4em;
background-color:transparent;
border: 0.05rem solid var(--lightBlue);
color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: 0.5rem;
padding 0.2rem 0.5rem;
cursor: pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all .5s ease-in-out;
&:hover{
  background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: var(--mainBlue);
}
&:focus{
  outline: none
}
`;