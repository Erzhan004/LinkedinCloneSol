
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Context } from './Components/ConnectBtn';
import './App.css';

import { Main } from "./Pages/MainPage/Main";
import { ConetctionPage } from './Pages/ConectionPage/ConetctionPage';

function App() {
  return (
    <Context>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConetctionPage/>} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
    </Context>
  );
}

export default App;

