import './App.css'
import SchoolsLists from './components/SchoolsLists';
import TeachersLists from './components/TeachersLists';

function App() {
  

  return (
    <>
    <div className = "app">
    <h1>AWARE Initiative</h1>
    <TeachersLists/>
    <SchoolsLists/>

    </div>
      

    </>
  );
}

export default App;
