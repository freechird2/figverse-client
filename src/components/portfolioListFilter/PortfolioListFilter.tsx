import { PortfolioListFilterComponent as S } from '@components/portfolioListFilter/PortfolioListFilter.styled'
import { useOutsideClick } from '@hooks/useOutsideClick'
import { useEffect, useState } from 'react'

export type SelectOptionType = {
    value: string
    name: string
}
interface SelectedState {
    isSetValue: boolean
    focus: boolean
    selected: SelectOptionType
}
interface PortfolioListFilterProps {
    readonly?: boolean
    options: SelectOptionType[]
    defaultValue?: string
    placeholder?: string
    name: string
    onChange?: (key: string, value: string) => void
    //defaultValue ,placeholder 둘중 하나씩만 써야함
}
const PortfolioListFilter = ({ defaultValue, options, placeholder, readonly, name, onChange }: PortfolioListFilterProps) => {
    const [change, setChange] = useState<SelectedState>({
        isSetValue: !placeholder,
        focus: false,
        selected: {
            name: defaultValue ? options.find((f) => f.value === defaultValue)?.name || '' : placeholder ? placeholder : options[0].name,
            value: defaultValue ? options.find((f) => f.value === defaultValue)?.value || '' : placeholder ? placeholder : options[0].value,
        },
    })
    const onClickSelectedBlock = () => {
        setChange((prev) => ({ ...prev, focus: !change.focus }))
    }
    //외부클릭시 닫기 이벤트 함수
    const filterContainerRef = useOutsideClick(() =>
        setChange((prev) => ({
            ...prev,
            focus: false,
        }))
    )

    const onClickSetValue = (option: SelectOptionType) => {
        setChange({
            isSetValue: true,
            focus: false,
            selected: {
                name: option.name,
                value: option.value,
            },
        })

        onChange && onChange(name, option.value)
    }

    useEffect(() => {
        // console.log('?????', defaultValue, options)
        // console.log(defaultValue ? options.find((f) => f.value == defaultValue)?.name || '' : placeholder ? placeholder : options[0].name)
        // console.log(defaultValue ? options.find((f) => f.value == defaultValue)?.value || '' : placeholder ? placeholder : options[0].value)
        setChange({
            isSetValue: !placeholder,
            focus: false,
            selected: {
                name: defaultValue ? options.find((f) => f.value == defaultValue)?.name || '' : placeholder ? placeholder : options[0].name,
                value: defaultValue
                    ? options.find((f) => f.value == defaultValue)?.value || ''
                    : placeholder
                    ? placeholder
                    : options[0].value,
            },
        })
    }, [defaultValue, options])

    useEffect(() => {
        // console.log(change);
    }, [change])

    return (
        <S.Container
            ref={filterContainerRef}
            className={readonly ? 'readonly' : ''}>
            <S.SelectedBlock
                onClick={onClickSelectedBlock}
                className={`${defaultValue || change.isSetValue ? '' : 'placeholder'} ${change.focus ? 'focus' : ''} `}>
                {change.selected.name}
            </S.SelectedBlock>
            {change.focus && (
                <S.OptionBlock>
                    <ul>
                        {options.map((option) => {
                            return (
                                <li
                                    className={`ellipsis ${option.name === change.selected.name ? 'selected' : ''}`}
                                    key={`${name}_${option.value}`}
                                    onClick={() => onClickSetValue(option)}>
                                    {option.name}
                                </li>
                            )
                        })}
                    </ul>
                </S.OptionBlock>
            )}
        </S.Container>
    )
}

export default PortfolioListFilter
