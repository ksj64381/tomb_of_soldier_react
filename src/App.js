import React, { useState } from 'react'
import {Park} from './Park'


function App() {
  const [page, setPage] = useState('');
  const onCl = () => setPage((current) => !current)

  return (
    <div>
      <button onClick={onCl} value={page}>park</button>
      {page ? <Park/> : null}
    </div>
  )
}

export {page, setPage};

export default App