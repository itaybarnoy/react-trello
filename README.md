# React Trello RTL

A fork of (https://github.com/rcdexta/react-trello), with some changes to improve the project and support rtl.

Recommend: read react-trello docs and this fork docs to fully understand how to use the package.

## Getting Started

Install using npm

```bash
$ npm install --save react-trello-rtl
```


## Usage

The `Board` component takes a prop called `data` that contains all the details related to rendering the board. A sample data json is given here to illustrate the contract:

```javascript
const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: []
    }
  ]
}
```

`draggable` property of Card object is `true` by default.

The data is passed to the board component and that's it.

```jsx
import React from 'react'
import Board from 'react-trello-rtl'

export default class App extends React.Component {
  render() {
    return <Board data={data} />
  }
}
```

## Fork Changes

<ul>
  <li>Support rtl, the board direction is right to left to support other languages.</li>
  <li>Translation for Hebrew and Arabic.</li>
  <li>Pass laneId as prop to AddCardLink to be able to completely customaize this components by yourself. (It helps when trying to create this component on your own and transfer it as props to the board)
  Using this new change, now you can do that:

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
    return (
        <Board 
        data={...} 
        components={{AddCardLink: AddCardLink}}
        eventBusHandle={setEventBus}
        />
    );
};
```
</ul>

<br>
<a style="float: right" href="https://www.meep.co.il"><img src="https://www.meep.co.il/wp-content/uploads/2020/03/MEEP.png" width="100px;" alt=""/></a>
