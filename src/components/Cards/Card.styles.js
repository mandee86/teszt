import styled from 'styled-components'

export const StyledCard = styled.div`
  padding: 5px;
  width: 20%;
  .card {
    background: white;
    border-radius: 5px;
    /* background-image: url(""); */
    background-image: ${props => props.className === 'flipped' || props.className === 'winner'  ? `url(${props.image})` : ''};
  }
  .card:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;