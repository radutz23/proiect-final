// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {SignInSide} from './pages/log-in.js/login'
import {Homepage} from './pages/home-page/homepage';
import { HowToPlay } from './pages/how-to-play/howtoplay';
import { ChooseGamemode } from './pages/choose-gamemode/choosegamemode';
import { ChooseCategories } from './pages/choose-categories/choosecategories';
import { CreateTeams } from './pages/create-teams/createteams';
import { TestSandbox } from './pages/test/test';
import { LocalGame } from './pages/local-game/localgame';
import { GoMobile } from './pages/go-mobile/gomobile';
import { BiddingPhase } from './pages/bidding-phase/biddingphase';
import { Congratulations } from './pages/congratulations/congratulations';
import { ContactUs } from './pages/contact-us/contact-us';

function App() {


  return (

<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Homepage/>}></Route>
  <Route path='/log-in' element={<SignInSide/>}></Route>
  <Route path='/how-to-play' element={<HowToPlay/>}></Route>
  <Route path='/play' element={<ChooseGamemode/>}></Route>
  <Route path='/choose-categories' element={<ChooseCategories/>}></Route>
  <Route path='/create-teams' element={<CreateTeams/>}></Route>
  <Route path='/local-game' element={<LocalGame/>}></Route>
  <Route path='/go-mobile' element={<GoMobile/>}></Route>
  <Route path='/bidding-phase' element={<BiddingPhase/>}></Route>
  <Route path='/congratulations' element={<Congratulations/>}></Route>
  <Route path='/contact-us' element={<ContactUs/>}></Route>



  <Route path='/test' element={<TestSandbox/>}></Route>

</Routes>
</BrowserRouter>

</>

  );
}

export default App;
