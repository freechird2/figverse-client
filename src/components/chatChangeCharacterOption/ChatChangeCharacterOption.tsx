import Button from '@components/button/Button'
import { ChatChangeCharacterOptionComponent as S } from '@components/chatChangeCharacterOption/ChatChangeCharacterOption.styled'
import useBottomSheet from '@hooks/useBottomSheet'
import { useOutsideClick } from '@hooks/useOutsideClick'
import useWidth from '@hooks/useWidth'
import { AiCharacterData, AiCharacterNameType } from '@shared/constant'
import { aiCharacterState } from '@store/atom/aiCharacter'
import ChangeCharacter from '@template/bottomSheet/changeCharacter/ChangeCharacter'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import IconChange from '../../../public/images/svg/change_character.svg'
const ChatChangeCharacterOption = () => {
    const { media } = useWidth()
    const { BottomSheet } = useBottomSheet()
    const [character, setCharacter] = useRecoilState<AiCharacterNameType>(aiCharacterState)
    const [changeToggle, setChangeTrigger] = useState<boolean>(false)
    //외부클릭시 닫기 이벤트 함수
    const changeContainerRef = useOutsideClick(() => setChangeTrigger(false))

    const chageCharacterHandler = () => {
        if (media.mobile) {
            BottomSheet({
                children: <ChangeCharacter />,
            })
        } else {
            setChangeTrigger(!changeToggle)
        }
    }

    const onCharacterClick = (name: AiCharacterNameType) => {
        setCharacter(name)
        setChangeTrigger(false)
    }
    return (
        <S.ChangeCharacterBlock ref={changeContainerRef}>
            {changeToggle && (
                <S.CharacterOptionList>
                    {AiCharacterData.map((_, index) => {
                        return (
                            <Button
                                key={_.value}
                                $activeColor={_.value}
                                $size='size36'
                                active={character === _.name}
                                onClick={() => onCharacterClick(_.name)}>
                                {_.name}
                            </Button>
                        )
                    })}
                </S.CharacterOptionList>
            )}
            {/* Change Character 버튼 */}
            <S.ChangeCharacterButton
                className={changeToggle ? 'active' : ''}
                type='button'
                onClick={chageCharacterHandler}>
                <IconChange />
                {!media.tabletL && `Change Character`}
            </S.ChangeCharacterButton>
        </S.ChangeCharacterBlock>
    )
}

export default ChatChangeCharacterOption
