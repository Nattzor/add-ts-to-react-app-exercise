import { Program } from './TVPage'

interface TVScheduleItemWithProps {
    program: Program,
    key: number
}

const TVScheduleItem = ({ program } : TVScheduleItemWithProps) => {
    return <li className="list-group-item">
        <strong>{program.start.toString()}</strong>
        <div>{program.name}</div>
    </li>

}

export default TVScheduleItem;