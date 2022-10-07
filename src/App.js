import logo from './logo.svg';
import './App.css';
import Greets from './components/Greetings';
import Welcome from './components/Welcome';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClicks from './components/FunctionClicks';
import ClassClick from './components/ClassClick';
import EventBinding from './components/EventBinding';
import EventBindingTwo from './components/EventBindingTwo';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Forms from './components/Forms';
import Fragments from './components/Fragments';
function App() {
  return (
    <div className="App">
    <Greets name="Tony"/>
    <Welcome name="chinwizu"/>
    <Message/>
    <Counter/>
    <FunctionClicks/>
    <ClassClick/>
    <EventBinding/>
    <EventBindingTwo/>
    <ParentComponent/>
    <UserGreeting/>
    <NameList/>
    <Stylesheet primary ={true} /> 
    <Forms/>
    <Fragments/>
    </div>
  );
}

export default App;
