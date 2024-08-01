import React, {useState} from 'react';
import { useContactContext } from '../../context/ContactProvider'; 

const ContactForm = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const { addContact } = useContactContext();

    const handleAddContact = (e) => {
        e.preventDefault();
    
        addContact(name, city);
        setName('');
        setCity('');
    };

    return(
        <form onSubmit={handleAddContact}>
            <div>
                <h1>Add a new contact</h1>
                <div>
                    <label htmlFor="name">Name </label>
                    <input id="name" type="text" required name="name" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="city">City </label>
                    <input id="city" type="text" required name="city" value={city} onChange={(event) => setCity(event.target.value)}/>
                </div>
                <button type="submit">Add contact</button>
            </div>
        </form>    
    )
}

export default ContactForm;