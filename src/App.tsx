import Header from './components/Header';
import MainPage from './pages/MainPage';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <MainPage />
    </RecoilRoot>
  );
}

export default App;
