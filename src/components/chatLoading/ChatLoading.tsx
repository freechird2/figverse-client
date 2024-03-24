import styled from 'styled-components'

const LoadingContainer = styled.div<{ $color: string }>`
    --color: ${(p) => p.$color};
    --_g: no-repeat radial-gradient(circle closest-side, var(--color) 90%, #0000);
    display: flex;
    align-items: center;
    gap: 4px;
    opacity: 0.8;
    transform: translate(2px, 9px);
    > div {
        width: 5px;
        aspect-ratio: 1/1;
        background: var(--_g) 0% 50%;
        background-size: calc(100%) 100%;
        animation: l7 1s infinite linear;
        &:nth-child(1) {
            animation-delay: 0.1s;
        }
        &:nth-child(2) {
            animation-delay: 0.2s;
        }
        &:nth-child(3) {
            animation-delay: 0.3s;
        }
    }
    @keyframes l7 {
        33% {
            background-size: 100% 0%;
        }
        50% {
            background-size: 100% 100%;
        }
        66% {
            background-size: 100% 100%;
        }
    }
`

interface Props {
    $color: string
}

const ChatLoading = ({ $color }: Props) => {
    return (
        <LoadingContainer $color={$color}>
            <div />
            <div />
            <div />
        </LoadingContainer>
    )
}

export default ChatLoading
