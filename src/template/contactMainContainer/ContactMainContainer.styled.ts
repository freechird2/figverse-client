import { mediaQuery } from '@styles/mediaQuery'
import { mixin } from '@styles/mixin'
import theme from '@styles/theme'
import styled from 'styled-components'
// const Container = styled.div``;

const DepartmentItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 30px;
    border-bottom: 1px solid ${theme.colors.gray12};
    min-height: 28px;
    padding-bottom: 30px;
    .department__title {
        width: 180px;
        flex-shrink: 0;

        .title {
            padding-bottom: 8px;
            font-size: 1.6rem;
            font-weight: 700;
        }

        .title_kor {
            font-size: 1.2rem;
        }
    }
    .department__content {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .department__teams {
        span {
            &:not(:last-of-type, :only-child) {
                &:after {
                    content: ' / ';
                }
            }
        }
    }
    .department__introduction {
        font-size: 1.2rem;
        color: ${theme.colors.gray7};
        user-select: none;
        white-space: pre-line;
        line-height: 1.3;
    }

    ${mediaQuery('tabletS')} {
        flex-direction: column;
        gap: 24px;
        .department__title {
            width: 100%;
        }
        .department__teams {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
    }
    ${mediaQuery('tabletL')} {
        padding-bottom: 20px;

        .department__introduction {
            font-size: 1.3rem;
            line-height: 1.5;
        }
    }
`
const DepartmentBlock = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    ${mediaQuery('tabletL')} {
        gap: 20px;
    }
`
const IntroTextBlock = styled.div`
    padding-bottom: 100px;
    h1 {
        font-size: 1.6rem;
        padding-bottom: 40px;
        white-space: pre-wrap;
    }
    p {
        font-size: 1.6rem;
        line-height: 1.56;
        white-space: pre-wrap;

        ${mediaQuery('mobile')} {
            display: inline;
        }
    }

    ${mediaQuery('tabletL')} {
        padding-bottom: 70px;
    }
`
const Content = styled.div`
    flex: 1;
    overflow: auto;
    padding: 60px;
    ${mixin.scrollStyle}
    ${mediaQuery('tabletL')} {
        padding-block: 20px 70px;
        padding-inline: ${theme.size.inline_safe_area};
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
`

export const ContactMainContainerComponent = {
    Container,
    Content,
    IntroTextBlock,
    DepartmentBlock,
    DepartmentItem,
}
