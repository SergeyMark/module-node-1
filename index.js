const { listContacts, getContactById, removeContact, addContact } = require('./contact.js')

// console.log(listContacts())
// console.log(getContactById(1684597491018))
// console.log(removeContact("1684597618908"))
// console.log(addContact("ivana", "ivanna@getMaxListeners.com", "238943-1294324"))

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        console.log( await listContacts())
      break;

    case "get":
        console.log( await getContactById(id))
      break;

    case "add":
        console.log(await addContact(name, email, phone))
      break;

    case "remove":
        console.log(await removeContact(id))
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);