import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataList from './components/DataList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DataList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;