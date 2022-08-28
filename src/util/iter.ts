/**
 * generate a range like python range
 * 
 * [start,end)
 */
export const range = (start: number, end: number, step: number = 1) =>{
    const diff = Math.ceil((end - start) / step)
    return [...Array(diff).keys()].map((value, idx) => step * idx + start)
}