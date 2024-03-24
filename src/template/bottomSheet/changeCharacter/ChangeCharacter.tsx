import Button, { ButtonComponent } from '@components/button/Button'
import useBottomSheet from '@hooks/useBottomSheet'
import { AiCharacterData, AiCharacterNameType } from '@shared/constant'
import { aiCharacterState } from '@store/atom/aiCharacter'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-bottom: 12px;
`
const CancelBlock = styled.div`
    ${ButtonComponent} {
        width: 100%;
    }
`
const Container = styled.div``

const ChangeCharacter = () => {
    const { closeSheet } = useBottomSheet()
    const [character, setCharacter] = useRecoilState<AiCharacterNameType>(aiCharacterState)
    return (
        <Container>
            <Content>
                {AiCharacterData.map((_, index) => {
                    return (
                        <Button
                            key={_.value}
                            $activeColor={_.value}
                            $size='size54'
                            active={character === _.name}
                            onClick={() => {
                                setCharacter(_.name)
                                closeSheet()
                            }}>
                            {_.name}
                        </Button>
                    )
                })}
            </Content>
            <CancelBlock>
                <Button
                    $size='size54'
                    $color='cancel'
                    onClick={closeSheet}>
                    Cancel
                </Button>
            </CancelBlock>
        </Container>
    )
}

export default ChangeCharacter
