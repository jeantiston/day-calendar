import styles from "../styles/weekdays.module.css"

const WeekDays = ({today}) => {
    const days = [
        {
            date: "11",
            day: "SUN"
        },
        {
            date: "12",
            day: "MON"
        },
        {
            date: "13",
            day: "TUE"
        },
        {
            date: "14",
            day: "WED"
        },
        {
            date: "15",
            day: "THU"
        },
        {
            date: "16",
            day: "FRI"
        },
        {
            date: "17",
            day: "SAT"
        }
    ]

    return (
        <div className={styles.weekdays}>
            {
                days.map(day => {
                    
                    return (
                        <div className={day.date===today ? styles.today : styles.weekday}>
                            <div className={day.date===today ? styles.dayLight: styles.day}>{day.day}</div>
                            <div className={styles.date}>{day.date}</div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default WeekDays