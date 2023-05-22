const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join('./', 'db', 'contacts.json');

async function listContacts () {
    const list = await fs.readFile(contactsPath);
    return JSON.parse(list);
}

async function getContactById(contactId) {
    const contacts = await fs.readFile(contactsPath)

    for (let obj of JSON.parse(contacts)) {
        if (obj.id === contactId) {
            console.log(obj)
            break; 
        }
    }
}

async function addContact(name, email, phone) {

    const add = await fs.readFile(contactsPath);

    let obj = JSON.parse(add)
        let newObj = {
            id: String(Date.now()),
            name: name,
            email: email,
            phone: phone
        }

        obj.push(newObj)

    try {
        await fs.writeFile(contactsPath, JSON.stringify(obj, null, 2))
    } catch (error) {
        return error
    }    
}

async function removeContact(contactId) {
    const remove = await fs.readFile(contactsPath)      
        
        try {
            await fs.writeFile(contactsPath, JSON.stringify(JSON.parse(remove).filter(
                el => {     
                    return el.id !== contactId
                }
            ), null, 2))
        } catch (error) {
            return error
        }
  }


module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact
}