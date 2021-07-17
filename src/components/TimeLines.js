import TimeLine from "./TimeLine"

const TimeLines = () => {
    const addMinutes = (date, minutes) => {
        return new Date(date.getTime() + minutes*60000);
    }
    
    const getTimeString = (time) => {
        return time.toLocaleTimeString('en-GB').slice(0,-3)
    }

    const twentyFourHrs = (function() {
        let time = new Date("2021-06-17T00:00:00")
        const timeStrings = []

        for(let i = 0 ; i < 49 ; i++) {
            timeStrings.push(getTimeString(time))
            time = addMinutes(time, 30)
        }

        return timeStrings
    })()

    return twentyFourHrs.map(time => {
        return ( <TimeLine time={time} /> )
    })
}

export default TimeLines