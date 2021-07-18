export const addMinutes = (date, minutes) => {
    return new Date(date.getTime() + minutes*60000);
}

export const getTimeString = (time) => {
    return time.toLocaleTimeString('en-GB').slice(0,-3)
}

export const getGridRowFromDate = (date) => {
    const hours = date.getHours()
    const mins = date.getMinutes()

    return 1 + (hours*2) + (mins/30)
}