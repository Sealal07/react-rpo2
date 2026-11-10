import Card from "./components/Card";
import './App.css';

function App() {
  return (
    <>
      <p className="paragraph" style={{color: 'red'}}>Это корневой компонент</p> 
      <Card title='First card' 
            desc='Description first'/>
      <Card title='Second card' 
            desc='Description second'/>
      <Card title='Thirs card' 
            desc='Description third'/>
     
    </>
  )
}

export default App
