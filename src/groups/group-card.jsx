function GroupCard(props) {
    return (
        <div>
            <h1>Group Name: {props.grpName}</h1>
            <p>Description: {props.dsc}</p>
        </div>
    )
}

export default GroupCard;