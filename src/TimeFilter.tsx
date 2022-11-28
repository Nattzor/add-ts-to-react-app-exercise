const TimeFilter= (): JSX.Element => {
    const renderOptions = () =>{
      const options: JSX.Element[] = []
      for(let i=0; i<25; i++){
        options.push(<option value={i}> {i.toString().length > 1 ? i.toString() : '0'+i.toString()}:00</option>)
      }
      return options
    }
      return (
        // <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>

        <select style={{padding: "10px", margin: "10px 10px 10px 20px", width: "50%"}}>
           {renderOptions()}
            <option></option>
          </select>
        // </div>
      );


}

export default TimeFilter;



