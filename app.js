const [cmd, key, value] = process.argv.slice(2);

const passwords = {
  wifi: 123,
  mac: "mac123"
};

switch (cmd) {
  case "get":
    console.log(passwords[key]);
    break;

  case "set":
    console.log("set");
    passwords[key] = value;
    break;

  case "unset":
    console.log("unset");
    delete passwords[key];
    break;

  default:
    console.log("Command unkown");
}

console.log(passwords);
