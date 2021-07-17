const TimeLine = ({time}) => {

    const line = {
        display: "inline-block",
        width : "235px",
        marginLeft: "10px",
        borderBottom: "none",
        borderLeft: "none",
        borderRight: "none",
        borderTop: "1px solid var(--light-gray)"
    }

    const flex = {
        display: "flex",
        marginLeft: "8px",
        color: "var(--gray)",
        fontSize: "11px"
    }
    
    return ( 
        <div>
            <div style={flex}><span>{time}</span><hr style={line} /></div>
        </div>
    )
}

export default TimeLine