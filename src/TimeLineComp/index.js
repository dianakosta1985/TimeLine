import { StyledBox, StyledPaper } from "../TimeLineComp/style";
import Ruler from "@scena/react-ruler";

const TimeLineComp = (props) => {

  //let arrTmp = [{'start':50, 'end':60 ,'level': 0}, {'start':20, 'end':40 ,'level': 1}, {'start':20, 'end':30 ,'level': 0}, {'start':50, 'end':70 ,'level': 1}, {'start':90, 'end':100 ,'level': 0}, , {'start':0, 'end':10 ,'level': 2}];
  const {arr} = props;
   
  return (
    <StyledPaper>
      { arr.map(item => 
            <StyledBox key={`${item.start}${item.end}${item.level}`}
            
            width={`${(item.end - item.start)}px`} // multiplication just for visualization
            left={`${item.start}px`}
            bottom={`${(item.level*50) + 30 }px`}
            randomColor={`${item.color}`}
            title={`Range: ${item.start} - ${item.end}, Level: ${item.level}`}
            
            />
            )}
      <Ruler type="horizontal"/>
    </StyledPaper>
  );
};

export default TimeLineComp;

