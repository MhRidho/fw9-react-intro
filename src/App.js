import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataList from './components/DataList';
import GetApi from './components/GetApi';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DataList />} />
        <Route path='/' element={<GetApi />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;