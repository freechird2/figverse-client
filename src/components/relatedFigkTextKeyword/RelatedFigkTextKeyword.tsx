import { figkListState } from '@store/atom/figkText'
import theme from '@styles/theme'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

export const RelatedFigkTextKeywordComponent = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px;

    span {
        display: inline-block;
        color: ${theme.colors.gray6};
        cursor: pointer;
        &:before {
            content: '#';
            color: inherit;
        }

        &.active {
            color: ${theme.colors.primary};
        }
    }
`

interface Props {
    selectedValue?: string
    onClickKeyword: (index: number) => void
}
const RelatedFigkTextKeyword = ({ selectedValue, onClickKeyword }: Props) => {
    const figkList = useRecoilValue(figkListState)

    return (
        <RelatedFigkTextKeywordComponent>
            {figkList.map((_, index) => {
                return (
                    <span
                        key={index}
                        role='button'
                        className={selectedValue === _.keyword ? 'active' : ''}
                        onClick={() => onClickKeyword(index)}>
                        {_.keyword}
                    </span>
                )
            })}
        </RelatedFigkTextKeywordComponent>
    )
}

export default RelatedFigkTextKeyword
