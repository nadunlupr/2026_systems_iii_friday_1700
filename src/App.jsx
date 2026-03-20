import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroupCard from './groups/group-card'
import { Link } from 'react-router';

function App() {
  const initialState = {
    searchText: ''
  }
  const [state, setState] = useState(initialState)

  const groupList = [
    { name: "Saquaro", desc: "bo o woa" },
    { name: "Best Group", desc: "Not the best" },
    { name: "Stupid Group", desc: "Not the stupidest" },
    { name: "Psycho Group", desc: "ohh I don't know" },
    { name: "Normal Group", desc: "well no issues" }
  ];

  return (
    <>
      <Link to="/counter">Go to counter</Link>
      <input type='text' onChange={({ target: { value: searchText } }) => setState({
        ...state,
        searchText
      })} />
      {
        groupList.map(({ name, desc }) => {
          return name.includes(state.searchText) ?
            <GroupCard grpName={name} dsc={desc} /> :
            undefined;

          // return name.includes(state.searchText) && <GroupCard grpName={name} dsc={desc} />

        })
      }
    </>
  )
}

export default App
