import HeaderMonth from "./HeaderMonth"
import WeekDays from "./WeekDays"
import Schedule from "./Schedule"

const DayPage = () => {
    
    return (
        <div>
            <HeaderMonth month="July 2021" />
            <WeekDays today="14" />
            <Schedule />
        </div>
    )
}

export default DayPage