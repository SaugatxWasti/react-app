//import { MouseEvent } from "react";

function ListGroup() {
  let item = ["Nepal", "Kathmandu", "Syangja", "Chitwan"];
  let selectindexed = 0;
  //Event hnadler

  //const handleclick = (Event: MouseEvent) => console.log(Event);

  /*if (item.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );*/

  return (
    <>
      <h1>List</h1>
      {/*{item.length ===0 ? <p>NO items found</p> :null}*/}
      <ul className="list-group">
        {item.map((item, index) => (
          <li
            className={
              selectindexed === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onCllaick={() => {
              selectindexed = index;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
