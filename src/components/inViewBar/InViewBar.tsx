import React, { ComponentPropsWithRef } from 'react'
import styled from 'styled-components'

const InViewBarComponent = styled.div`
    position: relative;
    z-index: -100;
    display: flex;
    align-items: end;
    opacity: 0;
    height: 30dvh;
    background-color: #fff;
    .inViewBar {
        height: 100%;
        width: 100%;
        > div {
            width: 100%;
            height: 10px;
            background-color: red;
        }
    }
    &.h0 {
        height: 0;
        .inViewBar {
            height: 0;
            > div {
                height: 0;
            }
        }
    }
`

// forwardRef로 컴포넌트를 감싼 모습
interface Props extends ComponentPropsWithRef<'div'> {
    children: React.ReactNode
}

function InViewBar({ children, ...rest }: Props) {
    return (
        <InViewBarComponent {...rest}>
            <div className='inViewBar'>{children}</div>
        </InViewBarComponent>
    )
}

export default InViewBar
