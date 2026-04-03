import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroupCard from './groups/group-card'
import { Link } from 'react-router';

function App() {
  const initialState = {
    searchText: '',
    selectedId: undefined
  }
  const [state, setState] = useState(initialState)

  const groupList = [
    { id: 1, name: "Saquaro", desc: "bo o woa" },
    { id: 2, name: "Best Group", desc: "Not the best" },
    { id: 3, name: "Stupid Group", desc: "Not the stupidest" },
    { id: 4, name: "Psycho Group", desc: "ohh I don't know" },
    { id: 5, name: "Normal Group", desc: "well no issues" }
  ];

  return (
    <>
      <Link to="/counter">Go to counter</Link>
      <br/>
      <Link to="/use-effect-demo">Go to UseEffect Demo</Link>
      <br/>
      <input type='text' onChange={({ target: { value: searchText } }) => setState({
        ...state,
        searchText
      })} />
      {
        groupList.map(({id, name, desc }) => {
          // return name.includes(state.searchText) ?
          //   <GroupCard grpName={name} dsc={desc} /> :
          //   undefined;

          return name.includes(state.searchText) &&
            <GroupCard
              key={id}
              grpName={name} 
              dsc={desc}
              isSelected={state.selectedId === id}
              id={id}
              onGroupCardClick={(id) => setState({...state, selectedId: id})} />

        })
      }
    </>
  )
}

export default App
