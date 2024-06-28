import { Fragment } from 'react/jsx-runtime'
import './App.css'
import { VoiceRecorder } from './audio';




function App() {
  return (
    <Fragment>
      <aside>aside</aside>
      <main>
        <header>Header</header>

    <div>
      <h1>React Voice Recorder</h1>
      <VoiceRecorder />
    </div>
      </main>
    </Fragment>
  )
}


export default App
