import ConseptCard from "./ConseptCard";

function ConseptsHolder({props}){
    return (
        <ul id="concepts">
        {props.map((item) => <ConseptCard props={item} key={item.id}/>)}
        </ul>
    )

}

export default ConseptsHolder;