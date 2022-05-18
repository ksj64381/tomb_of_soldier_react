import React from 'react'
import {Park} from './Park'


const [page, usePage] = useState('');

function onCl = () => usePage((current) => !current)

function App() {
  return (
    <div>
      <button onClick={onCl()} value={page}>go back <button/>
    {page ? <Park> : null}
    </div>
  )
}

export default App
