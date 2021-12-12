import {
  Routes,
  Route
} from "react-router-dom";

import { ContextProvider } from './context/ContextProvider';
import { Heading, CharactersList, DetailCharacter } from './components';

function App() {

  return (
    <>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading />
            <Routes>
              <Route path="/" element={<CharactersList />}/>
              <Route path="/detail" element={<DetailCharacter/>}/>
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
