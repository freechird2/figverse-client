import { ChatBubbleComponent as S } from '@components/chatBubble/ChatBubble.styled'
import ChatLoading from '@components/chatLoading/ChatLoading'
import { ChatResponseModel } from '@model/chat'
import { AiCharacterData, AiCharacterNameType } from '@shared/constant'
import { aiCharacterState } from '@store/atom/aiCharacter'
import theme from '@styles/theme'
import { WelcomTextComponent } from '@template/aiChat/welcomText/WelcomeText.styled'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import IconMe from '../../../public/images/png/chat_avatar1.png'
import IconCharacter from '../../../public/images/png/chat_avatar2.png'
export const AVATAR = {
    me: {
        icon: IconMe,
        backgroundColor: 'white',
    },
    designer: {
        icon: IconCharacter,
        backgroundColor: theme.colors.character_designer,
    },
    developer: {
        icon: IconCharacter,
        backgroundColor: theme.colors.character_developer,
    },
    pm: {
        icon: IconCharacter,
        backgroundColor: theme.colors.character_pm,
    },
    hr_manager: {
        icon: IconCharacter,
        backgroundColor: theme.colors.character_hr_manager,
    },
}

export type CharacterType = keyof typeof AVATAR

const ChatBubble = ({ chatList }: { chatList: ChatResponseModel[] }) => {
    const character = useRecoilValue<AiCharacterNameType>(aiCharacterState)
    return (
        <S.Container>
            {character !== '' && (
                <WelcomTextComponent.ConnectedCharacterText className={`color_${AiCharacterData.find((f) => f.name === character)!.value}`}>
                    You are now connected to a {character}.
                </WelcomTextComponent.ConnectedCharacterText>
            )}
            {chatList.length > 0 &&
                chatList.map((c, i) => {
                    return (
                        <S.Content
                            key={i}
                            $character={c.target}>
                            <S.Avatar>
                                <Image
                                    src={AVATAR[c.target].icon}
                                    alt='avatar icon'
                                />
                            </S.Avatar>
                            {c.response === 'loading...' ? (
                                <ChatLoading $color={AVATAR[c.target].backgroundColor || 'white'} />
                            ) : (
                                <S.Text className={`color_${c.target}`}>{c.response}</S.Text>
                                // <ChatLoading $color={AVATAR[c.target].backgroundColor || 'white'} />
                            )}
                        </S.Content>
                    )
                })}
        </S.Container>
    )
}

export default ChatBubble
