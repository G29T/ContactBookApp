import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactBook from './components/ContactBook/ContactBook'
import { useContactContext } from './context/ContactProvider'; 

function App() {
  const { contacts } = useContactContext();

  return (
    <div className="App">
      <ContactForm />
      <ContactBook contacts={contacts}/>
    </div>
  );
}

export default App;
