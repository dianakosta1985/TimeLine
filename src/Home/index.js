import {Box, TextField, Button} from "@mui/material";
import { useState } from "react";
import TimeLineComp from "../TimeLineComp/index";
import useCalculateTimeRange from "../hooks/useCalculateTimeRange";


const Home = () => {

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [timeRange, setTimeRange] = useState({"startTime": 0, "EndTime":0});
  const [validationMsg, setSetValidationMsg] = useState("");
  const [arr, setArr] = useState([ {'start':0, 'end': 0, level: 0}]);

  const arrTmp = useCalculateTimeRange(arr, timeRange);
  

  const handleSubmit = (event) => {
      
      if( Number(startTime) < 1 ||  Number(endTime) > 864 ||  Number(endTime) <=  Number(startTime)){ // TBD
          setSetValidationMsg("range is between 1 to 864");   
      }else if(arr[arr.length-1].level>12){
        setSetValidationMsg("please clear the timeline, the items reached maximum level");
      }else{
          setTimeRange({"start": Number(startTime), "end": Number(endTime)});
          setSetValidationMsg("");
          //console.log(timeRange);
          setArr(arrTmp);
      }
      event.preventDefault();
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100hv",
      }}
    >
      <Box
        sx={{
          maxWidth: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
 
      <form onSubmit={handleSubmit}>
          <h1>TimeLine Form</h1>
          
          <TextField id="outlined-basic1"
              sx={{margin:"10px"}}
              label="StartTime"
              variant="outlined"
              type="number"
              onChange={e => setStartTime(e.target.value)}
              />

          <TextField id="outlined-basic2"
              label="EndTime"
              sx={{margin:"10px"}}
              variant="outlined"
              type="number"
              onChange={e => setEndTime(e.target.value)}
              />
          <Box sx={{color: "red"}}>
              {validationMsg}
          </Box> 
        
          <Button variant="contained" 
              sx={{marginTop:"20px", cursor:"pointer"}}
              fullWidth
              type="submit">Add</Button>
           <Button variant="contained" 
              sx={{marginTop:"10px", cursor:"pointer"}}
              onClick={()=> {setArr([])}}
              type="submit">Clear</Button>
      </form>
      </Box>
      <Box
        sx={{
          maxWidth: "50%",
          flexGrow: "1",
        }}
      >
         <TimeLineComp arr={arr}/> 
      </Box>
    </Box>
  );
};

export default Home;

