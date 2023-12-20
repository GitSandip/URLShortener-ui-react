import InputShortener from "./components/InputShortener"
import RedirectComponent from "./components/RedirectComponent";
// import NotFound from "./components/NotFound";
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <InputShortener />} />
      <Route path="/:id" element ={ <RedirectComponent /> }/>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>

  );
}

export default App;
