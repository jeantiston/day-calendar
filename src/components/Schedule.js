// import { useState } from 'react'
import styles from "../styles/schedule.module.css"
import TimeLines from "./TimeLines"
import { getGridRowFromDate } from '../utils/timeUtils'

const Schedule = () => {

    const events = [
        {
            name: "Blue",
            start: new Date("2021-07-14T09:00:00"),
            end: new Date("2021-07-14T15:30:00"),
            color: "blue",
            col: "1 / 2"
        },
        {
            name: "Green",
            start: new Date("2021-07-14T09:00:00"),
            end: new Date("2021-07-14T14:30:00"),
            color: "green",
            col: "2 / 3"
        },
        {
            name: "Brown",
            start: new Date("2021-07-14T09:30:00"),
            end: new Date("2021-07-14T11:30:00"),
            color: "brown",
            col: "3 / 4"
        },
        {
            name: "Red",
            start: new Date("2021-07-14T11:30:00"),
            end: new Date("2021-07-14T12:00:00"),
            color: "red",
            col: "3 / 4"
        },
        {
            name: "Orange",
            start: new Date("2021-07-14T14:30:00"),
            end: new Date("2021-07-14T15:00:00"),
            color: "orange",
            col: "2 / 3"
        },
        {
            name: "Yellow",
            start: new Date("2021-07-14T15:30:00"),
            end: new Date("2021-07-14T16:00:00"),
            color: "yellow",
            col: "1 / 2"
        },
    ]

    const eventBlocks = events.map( (event, i) => {

        const eventStyle = {
            backgroundColor: `var(--${event.color})`,
            gridRow: `${getGridRowFromDate(event.start)} / ${getGridRowFromDate(event.end)}`,
            gridColumn: event.col
        }

        return (
            <div key={i} style={eventStyle} className={styles.block} >{event.name}</div>
        )
    })

    return (
        <div className={styles.parent}>
            <div className={`${styles.grid} ${styles.child}`}>
                <TimeLines />
            </div>
            <div className={`${styles.grid} ${styles.child} ${styles.blocks}`}>
                { eventBlocks }
            </div>
        </div>
    )
}

export default Schedule