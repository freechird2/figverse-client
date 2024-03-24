import { PortfolioSearchComponent as S } from '@components/portfolioSearch/PortfolioSearch.styled'
import { useEffect, useRef, useState } from 'react'

interface Props {
    name: string
    defaultValue?: string
    onChange: (key: string, value: string) => void
}

const PortfolioSearch = ({ name, defaultValue, onChange }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [input, setInput] = useState<string>(defaultValue || '')
    const [toggle, setToggle] = useState<boolean>(defaultValue ? true : false)
    const toggleHandler = () => {
        setToggle(!toggle)
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
        onChange(name, e.currentTarget.value)
    }

    useEffect(() => {
        if (toggle) {
            if (inputRef.current) {
                inputRef.current.focus()
            }
        }
    }, [toggle])
    return (
        <S.Container>
            <S.SearchToggleButton
                type={'button'}
                onClick={toggleHandler}
            />
            {toggle && (
                <S.InputBlock>
                    <S.Input
                        ref={inputRef}
                        value={input}
                        onChange={onChangeInput}
                        type='text'
                        placeholder='Search'
                    />
                </S.InputBlock>
            )}
        </S.Container>
    )
}

export default PortfolioSearch
