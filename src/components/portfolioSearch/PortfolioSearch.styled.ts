import theme from '@styles/theme'
import styled from 'styled-components'
const SearchToggleButton = styled.button`
    width: var(--containerHeight);
    height: var(--containerHeight);
    background-image: url('/images/png/search.png');
    background-size: 12.8px 12.8px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
`

const InputBlock = styled.div`
    flex: 1;
    height: 100%;
`
const Input = styled.input`
    width: 100%;
    height: 100%;
    &::placeholder {
        color: ${theme.colors.gray9};
    }
`
const Container = styled.div`
    --containerHeight: ${theme.size.portfolio_search_box_height};
    display: flex;
    align-items: center;
    height: var(--containerHeight);
    width: min(100%, 300px);
`
export const PortfolioSearchComponent = {
    Container,
    InputBlock,
    Input,
    SearchToggleButton,
}
