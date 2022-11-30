import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import TVSchedule from './TVSchedule';
import TVScheduleItem from './TVScheduleItem';
import TimeFilter from "./TimeFilter";
// import { Program, TVScheduleItemInterface, TVInterface } from './types'

export type Program = {
    name: string
    start: Date
    day: string
    description: string,
    id: number
}


const TVPage = () => {

    const { channelId } = useParams();
    const [programs, setPrograms] = useState<Program[]>([]);
    const [filteredPrograms, setFilteredPrograms] = useState<Program[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showAll, setShowAll] = useState(true)
    const today = dayjs().format('dddd')

    useEffect(() => {
        setIsLoading(true);
        if (channelId) {
            fetch("https://tv-api-k39vq.ondigitalocean.app/" + channelId + ".json")
                .then(res => res.json())
                .then(data => {
                   const todaysPrograms = data.filter((program: Program)=> dayjs(program.start).format('dddd') === today)
                    setPrograms(todaysPrograms.map((program: Program, index: number) => {
                        const startDate = dayjs(program.start)
                        return { ...program, start: startDate.format("HH:mm"), day:startDate.format('dddd').toString(), id: index }
                    }));
                    // console.log('today ', today)
                    // setOriginalPrograms(programs)
                    setIsLoading(false);
                })
        }
    }, [channelId]);


    const filterPrograms = (time: string) => {
        setShowAll(false)
        console.log('time är ', time )
        // setFilteredPrograms(originalPrograms)
        console.log('Testing filter numbers', Number(time.slice(0, 2)), Number(programs[2].start.toString().slice(0, 2)))
        console.log('Testing filter', programs.filter(program => Number(program.start.toString().slice(0, 2)) === Number(time.slice(0, 2))))
        if(time !== 'all'){
            setFilteredPrograms(programs.filter(program => Number(program.start.toString().slice(0, 2)) === Number(time.slice(0, 2)) && program.day === today))
            // return programs.filter(program => Number(program.start.toString().slice(0, 2)) >= Number(time.slice(0, 2)))
        }else if(time === 'all'){
            setShowAll(true)
            // setFilteredPrograms(programs)
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-2">
                <TimeFilter filterPrograms={filterPrograms}/>
                <hr />
                    {!isLoading && programs.length && <TVSchedule title={channelId}>
                        {
                             showAll ? programs.map(program => <TVScheduleItem key={program.id} program={program} />) :
                            filteredPrograms.map(program => <TVScheduleItem key={program.id} program={program} />)
                        }
                    </TVSchedule>}
                    {isLoading && <img src="loading.gif" id="js-loading" className="loading-spinner" alt="loading" />}
                </div>
            </div>
        </div>

    )
}

export default TVPage;