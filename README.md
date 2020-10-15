# React Trello RTL

A fork of (https://github.com/rcdexta/react-trello), with some changes to improve the project and support rtl.

## Changes

<ul>
  <li>Support rtl, the board direction is right to left to support other languages.</li>
  <li>Translation for Hebrew and Arabic.</li>
  <li>Pass laneId as prop to AddCardLink to be able to completely customaize this components by yourself. (It helps when trying to create this component on your own and transfer it as props to the board) [Example 1]
</ul>

### Example 1

Using the new changes I made, now you can do that:

```javascript
let eventBus = undefined

const setEventBus = handle => { eventBus = handle }

const AddCardLink = props => {
    let { laneId } = props // now you can extract laneId from props
    const addCard = () => {
        eventBus.publish({type: 'ADD_CARD', laneId, card: {id: "M1", title: "Buy Milk", label: "15 mins", description: "Also set reminder"}})
    }

    return (
    <div onClick={addCard}>{props.t('Click to add card')}</div>
    );
};

const App = () => {
    const [boardData, setBoardData] = useState(initBoardData);

    return (
        <Board 
        lang='he' 
        style={{ fontFamily: 'Varela Round'}} 
        data={boardData} 
        components={{AddCardLink: AddCardLink}}
        onDataChange={newData => setBoardData(newData)} 
        eventBusHandle={setEventBus}
        draggable editable canAddLanes/>
    );
};
```

<a href="https://www.meep.co.il"><img src="https://www.meep.co.il/wp-content/uploads/2020/03/MEEP_LOGO.png" width="100px;" alt=""/></a>
