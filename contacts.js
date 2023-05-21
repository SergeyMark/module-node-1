const fs = require('fs');
const path = require('path');

const contactsPath = path.join('./', 'db', 'contacts.json');

function listContacts() {
    return JSON.parse(fs.readFileSync(contactsPath, 'utf-8'))
}

function getContactById(contactId) {
    const contacts = fs.readFileSync(contactsPath, 'utf-8')

    for (let obj of JSON.parse(contacts)) {
        if (obj.id === contactId) {
            console.log(obj)
            break; 
        }
    }
}

function removeContact(contactId) {
    const remove = fs.readFileSync(contactsPath, 'utf-8')      
        
        try {
            fs.writeFileSync(contactsPath, JSON.stringify(JSON.parse(remove).filter(
                el => {     
                    return el.id !== contactId
                }
            ), null, 2))
        } catch (error) {
            return error
        }
  }

  function addContact(name, email, phone) {

    const add = fs.readFileSync(contactsPath, 'utf-8');

    let obj = JSON.parse(add)
        let newObj = {
            id: String(Date.now()),
            name: name,
            email: email,
            phone: phone
        }

        obj.push(newObj)

    try {
        fs.writeFileSync(contactsPath, JSON.stringify(obj, null, 2))
    } catch (error) {
        return error
    }    
}

//   module.exports = {
//     listContacts: listContacts,
//     getContactById: getContactById,
//     removeContact: removeContact,
//     addContact:addContact
//   }