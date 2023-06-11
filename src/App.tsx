import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

function App() {

  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Tasks />
    </div>
  )
}

export default App;
