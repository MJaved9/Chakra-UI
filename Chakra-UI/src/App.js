import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Form from './components/Form';
import SimpleSidebar from './components/Slider';


function App() {
  return (
   <div>
    <Navbar/>
    < SimpleSidebar></SimpleSidebar>
    <div className='flex-card'>
    <Card></Card>
    <Form></Form>
    </div>
     </div>
  );
}

export default App;
