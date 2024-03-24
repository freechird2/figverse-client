import { FigkModel } from '@model/figkText'
import { mediaQuery } from '@styles/mediaQuery'
import theme from '@styles/theme'
import styled from 'styled-components'

export const FigkTextComponent = styled.div`
    --indentPadding: 30px;
    user-select: none;
    padding-bottom: 80px;
    .figk__label {
        font-size: 1.3rem;
        padding-bottom: 8px;
    }
    .figk__title {
        font-size: 1.2rem;
        line-height: 1.66;
        padding-left: var(--indentPadding);
        padding-bottom: 26px;
    }
    .figk__text {
        font-size: 1.2rem;
        line-height: 1.83;
        color: ${theme.colors.gray6};
        padding-left: var(--indentPadding);
        padding-bottom: 40px;
    }
    .figk__more {
        display: flex;
        justify-content: flex-end;

        button {
            display: flex;
            align-items: center;
            font-size: 1.3rem;
            color: ${theme.colors.gray8};
            cursor: pointer;

            &:hover {
                color: ${theme.colors.gray6};

                &::after {
                    background-image: url('/images/svg/hover_next_btn.svg');
                }
            }

            &::after {
                content: '';
                display: inline-block;
                width: 13px;
                height: 13px;
                margin-left: 2px;
                background-image: url('/images/svg/next_btn.svg');
                background-size: cover;
            }
        }
    }
    ${mediaQuery('mobile')} {
        .figk__title,
        .figk__text {
            font-size: 1.3rem;
        }
    }
`

export interface FigkTextProps {
    figk: FigkModel
    keyword: string
}

const FigkText = ({ figk, keyword }: FigkTextProps) => {
    const onMoveFigk = () => {
        if (!keyword) return

        window.open(`https://figk.net/search/text?search=${keyword}`)
    }
    return (
        <FigkTextComponent>
            <p className='figk__label color_secondary'>{`< FIGK >`}</p>
            <p className='figk__title color_primary'>{`{( Vol.${figk.week} _ ${figk.authorName} _ ${figk.title} ; ${figk.subTitle}} )}`}</p>
            <p className='figk__text'>{figk.content}</p>
            <p className='figk__more'>
                <button onClick={onMoveFigk}>more FIGK</button>
            </p>
        </FigkTextComponent>
    )
}

export default FigkText
