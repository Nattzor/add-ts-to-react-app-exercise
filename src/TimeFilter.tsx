import React from "react"

const TimeFilter= (): JSX.Element => {
    const renderOptions = () =>{
      const options: JSX.Element[] = []
      for(let i=0; i<25; i++){
        options.push(<option value={i} key={i}> {i.toString().length > 1 ? i.toString() : '0'+i.toString()}:00</option>)
      }
      return options
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log('vald tid: ', e.target.value)
    }
      return (
        <form action="submit">
          <select style={{padding: "10px", margin: "10px 10px 10px 20px", width: "50%"}} onChange={(e) => handleChange(e)}>
            {renderOptions()}
              <option></option>
            </select>
        </form>
      );


}

export default TimeFilter;



