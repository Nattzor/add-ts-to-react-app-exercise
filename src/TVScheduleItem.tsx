import { Program } from './TVPage'

interface TVScheduleItemWithProps {
    program: Program,
    key: number
}

const TVScheduleItem = ({ program } : TVScheduleItemWithProps) => {
    return <li className="list-group-item">
        <strong>{program.start.toString()}</strong>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>{program.name}</div>
            <div style={{color: 'lightgrey'}}>{program.day}</div>
        </div>
    </li>

}

export default TVScheduleItem;