import styles from '../styles/headermonth.module.css'

const HeaderMonth = ({month}) => {

    return (
        <div className={styles.header}>
            <h1>{month}</h1>
        </div>
    )
}

export default HeaderMonth