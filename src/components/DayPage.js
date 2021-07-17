import styles from "../styles/daypage.module.css"
import TimeLines from "./TimeLines"
import HeaderMonth from "./HeaderMonth"
import WeekDays from "./WeekDays"

const DayPage = () => {
    
    return (
        <div>
            <HeaderMonth month="July 2021" />
            <WeekDays today="14" />
            <div className={styles.parent}>
                <div className={`${styles.grid} ${styles.child}`}>
                    <TimeLines />
                </div>
                <div className={`${styles.grid} ${styles.child} ${styles.blocks}`}>
                    <div className={`${styles.blue} ${styles.block}`}>Blue</div>
                    <div className={`${styles.green} ${styles.block}`}>Green</div>
                    <div className={`${styles.brown} ${styles.block}`}>Brown</div>
                    <div className={`${styles.yellow} ${styles.block}`}>Yellow</div>
                    <div className={`${styles.orange} ${styles.block}`}>Orange</div>
                    <div className={`${styles.red} ${styles.block}`}>Red</div>
                </div>
            </div>
        </div>
    )
}

export default DayPage