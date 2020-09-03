import Styled from 'styled-components';
import defaultImg from '../images/defaultBcg-2.jpeg';

const StyledHero = Styled.header`
    min-height: 60vh;
    background: url(${props => props.img || defaultImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyledHero;