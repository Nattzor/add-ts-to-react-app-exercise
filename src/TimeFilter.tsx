
 interface TimeFilterProps {
  filterPrograms: Function
}


const TimeFilter= (props: TimeFilterProps): JSX.Element => {
    const renderOptions = () =>{
      const options: JSX.Element[] = []
      for(let i=0; i<25; i++){
        options.push(<option value={i} key={i}>{formatedTime(i)}</option>)
      }
      return options
    }
    const formatedTime = (i: number):string  => {
      return i.toString().length > 1 ? i.toString() + ':00' : '0'+i.toString() + ':00'
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log('vald tid: ', e.target.value)
        if(e.target.value === 'all'){
          props.filterPrograms(e.target.value)
        }else{
          const time = formatedTime(Number(e.target.value))
          props.filterPrograms(time)
        }
    }


      return (
        <form action="submit">
          <select style={{padding: "10px", margin: "10px 10px 10px 0px", width: "30%"}} onChange={(e) => handleChange(e)} defaultValue="Select a time">
            <option disabled value="Select a time">Select a time</option>
            <option value="all">Show all</option>
            {renderOptions()}
            </select>
        </form>
      );


}

export default TimeFilter;



