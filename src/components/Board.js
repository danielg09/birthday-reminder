import './board.css'
import ListPeople from './ListPeople';

const Info = [
    {
        img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Sofia Cooper", birthday : "1995-02-01"
    },
    {
        img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Miller Wright", birthday : "1998-05-29"
    },
    {
        img : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Tara Kelly", birthday : "1991-02-02"
    },
    {
      img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Freddie Watson", birthday : "1999-10-15"
    },
    {
      img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Brianna Baker", birthday : "1994-07-05"
    },
    {
      img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Brad Myers", birthday : "1997-01-28"
    }
  ]

function Board(){
    console.log(Today(Info));
    return (
        <main id='site-main'>
            <h1 className="text-dark title">
                Birthday Reminder
            </h1>
            <div className="board">
                <ListPeople info={Today(Info)}/>
                <h2 className='upcoming text-dark'>Upcoming</h2>
                <ListPeople info={Upcoming(Info,6)} upcoming={true}/>
            </div>
        </main>
    );

}

export default Board;

// obetener las personas que cumplen durante el dia
function Today(persons){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    
    let filterToday = persons.filter(person => {
        let birthDay = new Date(person.birthday).getDate();
        let birthMonth = new Date(person.birthday).getMonth();

        return currentDay === birthDay && currentMonth === birthMonth;
    });

    return filterToday
}

// upcoming
//toMoth variable para decidir cuantos meses contar hacia adelante por los cumpleaños de meses siguientes
function Upcoming(persons, toMonth){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let filter = persons.filter(person =>{
        let birthDay = new Date(person.birthday).getDate();
        let birthMonth = new Date(person.birthday).getMonth();
        
        if(currentDay === birthDay) return;
        return birthMonth >= currentMonth && birthMonth <= currentMonth + toMonth;

    });

    return filter;
}