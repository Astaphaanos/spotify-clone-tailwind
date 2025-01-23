import './index.css';
import SpotifyAside from './components/SpotifyAside/SpotifyAside'
import SpotifyHeader from './components/SpotifyHeader/SpotifyHeader';
import SpotifyFooterPlayer from './components/SpotifyFooterPlayer/SpotifyFooterPlayer';

function App() {


  return (
      <div>
        <SpotifyHeader/>
        <SpotifyAside/>
        <SpotifyFooterPlayer/>
      </div>
 
  )
}

export default App
