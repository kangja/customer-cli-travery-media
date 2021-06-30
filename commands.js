const program = require("commander");
const { prompt } = require("inquirer");
const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomer,
} = require("./index");

// customer questions
const questions = [
  { type: "input", name: "firstname", message: "Customer First Name" },
  { type: "input", name: "lastname", message: "Customer Last Name" },
  { type: "input", name: "phone", message: "Customer Phone Number" },
  { type: "input", name: "email", message: "Customer Email Address" },
];

program.version("1.0.0").description("Client Management System");

//program
//   .command("add <firstname> <lastname> <phone> <email>")
//   .alias("a")
//   .description("Add a customer")
//   .action((firstname, lastname, phone, email) => {
//     addCustomer({ firstname, lastname, phone, email });
//   });

// add command
program
  .command("add")
  .alias("a")
  .description("add a customer")
  .action(() => {
    prompt(questions).then((answers) => addCustomer(answers));
  });

//  find command
program
  .command("find <name>")
  .alias("f")
  .description("find a customer")
  .action((name) => findCustomer(name));

//   update command
program
  .command("update <_id>")
  .alias("u")
  .description("update a customer")
  .action((_id) => {
    prompt(questions).then((answers) => updateCustomer(_id, answers));
  });

//  remove command
program
  .command("remove <_id>")
  .alias("r")
  .description("remove a customer")
  .action((_id) => removeCustomer(_id));

//  list command
program
  .command("list")
  .alias("l")
  .description("list a customer")
  .action(() => listCustomer());

program.parse(process.argv);
