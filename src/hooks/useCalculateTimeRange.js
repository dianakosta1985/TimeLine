import { useMemo } from "react";

    const useCalculateTimeRange = (arr, timeRange) => {
        return useMemo(() => insertNewRange(arr, timeRange), [timeRange])};

    const insertNewRange = (arr, timeRange) => {
    if(!timeRange) return arr;
    const {start, end} = timeRange;
    if(!end) return arr;

    arr.sort((i1, i2) =>  i1.start - i2.start ); // O(nlog(n))

    arr.sort((i1, i2) => i1.level - i2.level ); // O(nlog(n))

    if(arr && arr.filter(item=>item.start === start && item.end == end).length> 0){
        return arr;
    }
    const stack = [];

    for(let i=0; i< arr.length; i++ ){ // O(n)
        
        if(i>0 && start >=arr[i-1].end && end <= arr[i].start  && arr[i-1].level === arr[i].level){
            stack.push({"index": i, "level":arr[i].level});
            continue;

        }else if(i>0 && arr[i-1].level !== arr[i].level && start >= arr[i-1].end){
            stack.unshift({"index": i, "level":arr[i-1].level});
            continue;     
        }else if((start <= arr[i].end && start >= arr[i].start) || (end >= arr[i].start && end <= arr[i].end)
                || (start <= arr[i].start && end >= arr[i].start) || (start >= arr[i].start && start <= arr[i].end)){
            stack.push({"index": i, "level":arr[i].level + 1});
            continue;
        }else if(i === arr.length-1 && start >= arr[i].end){
            stack.unshift({"index": i, "level": arr[arr.length-1].level });
            continue;
        }
    }

    const location  = stack.pop();
    const colors = ['#9370DB', '#3CB371', '#B0E0E6', "#48D1CC"]; // TBD useContext 
    const random_color = colors[Math.floor(Math.random() * colors.length)];
    arr.splice(location.index, 0, {'start':start, 'end': end, level:location.level, color: random_color});
    return arr;
}   


export default useCalculateTimeRange;
