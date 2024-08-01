import React from 'react';

const ContactBook = ({contacts}) => {
    console.log(contacts);
    return(
        <div>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                    {contact.name} ({contact.city})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactBook;