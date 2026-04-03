function GroupCard(props) {
    return (
        <div className={props.isSelected && "group-card-clicked"}
        onClick={() => props.onGroupCardClick(props.id)}>
            <h1>Group Name: {props.grpName}</h1>
            <p>Description: {props.dsc}</p>
        </div>
    )
}

export default GroupCard;