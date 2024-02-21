
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import History from './components/History/History'
import './App.css'
import { useState } from 'react'

import Button from './components/Button/Button'

export default function App() {
  const [tab, setTab] = useState('main');
  const [todos, setTodos] = useState([])

  function handleClick(type) {
    setTab(type)
  }
  return (
    <>
      <main>
        <Header />
        <div className="content">
          <aside className='content__aside'>
            <div className="content__left-buttons">
              <Button isActive={tab === 'main'} onClick={() => handleClick('main')}>Main</Button>
              <Button isActive={tab === 'history'} onClick={() => handleClick('history')}>History</Button>
            </div>
          </aside>
          {tab === 'main' && <Content />}
          {tab === 'history' && <History />}

        </div>
      </main>
    </>
  )
}


