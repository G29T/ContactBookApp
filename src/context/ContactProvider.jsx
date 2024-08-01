import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; 

export const ContactContext = createContext ({
    name: String,
    city: String
});


export const ContactProvider = ({children}) => {
    const [contacts, setContacts] = useState([]);

    const addContact = (name, city) => {
        if (!name || !city) {
            return;
        }
      
        const newContact = { id: uuidv4(), name: name, city: city };
        setContacts([newContact, ...contacts]);
    };

    const value = { contacts, addContact };
    
    return (
        <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
    )
};

export const useContactContext = () => useContext(ContactContext);