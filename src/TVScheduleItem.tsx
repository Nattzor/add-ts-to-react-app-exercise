interface TVScheduleItemWithProps {
    program: ProgramTV,
    key: number
}
type ProgramTV = {
    name: string
    start: Date
    desctiption: string,
    id: number
}

const TVScheduleItem = ({ program } : TVScheduleItemWithProps) => {
    return <li className="list-group-item">
        <strong>{program.start.toString()}</strong>
        <div>{program.name}</div>
    </li>

}

export default TVScheduleItem;