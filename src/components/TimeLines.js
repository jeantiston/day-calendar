import TimeLine from "./TimeLine"
import { addMinutes, getTimeString } from "../utils/timeUtils"

const TimeLines = () => {

    const twentyFourHrs = (function() {
        let time = new Date("2021-06-17T00:00:00")
        const timeStrings = []

        for(let i = 0 ; i < 49 ; i++) {
            timeStrings.push(getTimeString(time))
            time = addMinutes(time, 30)
        }

        return timeStrings
    })()

    return twentyFourHrs.map((time, i) => {
        return ( <TimeLine key={i} time={time} /> )
    })
}

export default TimeLines