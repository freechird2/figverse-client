import { Table } from '@components/table/Table'
import useWidth from '@hooks/useWidth'
import { PortfolioDataModel } from '@model/portfolio'
import { variants } from '@styles/variants'
import { useState } from 'react'
interface Props {
    colGroup: string
    onMouseEnter: VoidFunction
    onMouseLeave: VoidFunction
    onClick: VoidFunction
    data: PortfolioDataModel
}
const PortfolioItem = ({ onClick, onMouseEnter, onMouseLeave, colGroup, data }: Props) => {
    const { media } = useWidth()
    const [hover, setHover] = useState<boolean>(false)
    const _onMouseEnter = () => {
        onMouseEnter()
        setHover(true)
    }
    const _onMouseLeave = () => {
        onMouseLeave()

        setHover(false)
    }
    return (
        <Table.Row
            variants={variants.fadeInOut}
            $colgroup={colGroup}
            className={hover ? 'mouse_enter' : 'mouse_leave'}
            onMouseEnter={_onMouseEnter}
            onClick={onClick}
            onMouseLeave={_onMouseLeave}>
            <Table.Col>{data.workPeriod}</Table.Col>
            <Table.Col
                noPadding
                color='character_hr_manager_text'>
                {data.isTypical === 'Y' ? '*' : ''}
            </Table.Col>
            <Table.Col ellipsis>{data.title}</Table.Col>
            {!media.tabletS && (
                <Table.Col
                    color='gray7'
                    ellipsis>
                    {data.client}
                </Table.Col>
            )}
            {!media.tabletL && (
                <Table.Col
                    color='gray7'
                    ellipsis>
                    {data.categories}
                </Table.Col>
            )}
        </Table.Row>
    )
}

export default PortfolioItem
