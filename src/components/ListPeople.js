import ListItem from "./ListItem";

function ListPeople({info,upcoming}){
    return (
        <ul>
            {
                (!info) 
                ? <p>No Data</p> 
                : info.map((person, index) => (<ListItem key={index} img={person.img} name={person.name} birthday={person.birthday} upcoming={upcoming}/>))
            }
        </ul>
    );
}

export default ListPeople;