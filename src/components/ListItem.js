function ListItem({img, name, birthday, upcoming}){

    const bgColor = upcoming ? {backgroundColor: "#ffe66d"} : {};

    return (
        <li>
            <div className="card" style={bgColor}>
                <img src={img} alt="img" />
                <div className="info">
                    <h4 className="name">{name}</h4>
                    <h5 className="age">{Old(birthday)} years</h5>
                </div>
            </div>
         </li>
    );
}

export default ListItem;

// how old the person is
function Old(date){
    let birthdayYear = new Date(date).getFullYear();
    let currentYear =  new Date().getFullYear();
    
    return currentYear -birthdayYear;
}