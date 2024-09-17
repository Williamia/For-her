import spongebob from './assets/spongebob-heart.gif'
import meuAudio from './assets/meu-audio.mp3'
import './App.css'

function App() {
  
  return (
    <div className='for-her-div'>
      <span>Oi bê, tá super simples mas espero que cê tenha gostado kkk.</span>
      <img src={spongebob} alt="bob sponja" />
      <div className='audio-for-her'>
      <audio controls>
        <source src={meuAudio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
    </div>
  )
}

export default App
