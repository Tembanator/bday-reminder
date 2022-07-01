const List = (props) => {
  const people = props.people
  return (
    <div className="list-container">
      {people.map((person) => {
        return (
          <div className="list-item" key={person.id}>
            <div className="img" style={{backgroundImage : `url(${person.image})`}}></div>
            <div className="name-age">
              <h3 className="name">{person.name}</h3>
              <p className="age">{person.age} years old</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default List;