const core = require("@actions/core");

const Hello = (() => {
  let _helloMessage = "Hello";
  const setHelloMessage = (greetingName) => {
    _helloMessage = _helloMessage.concat(` ${greetingName} !`);
  };
  return {
    init: ({ greetingName }) => {
      setHelloMessage(greetingName);
      return Hello;
    },
    sayHello: () => _helloMessage,
  };
})();

// Input from the reusable workflow step
const greetingName = core.getInput("greeting-name") || "Foo";
const greeting = Hello.init({ greetingName }).sayHello();

// For the actions panel workflow log
console.log(greeting);

// For the reusable workflow step output
core.setOutput("greeting", greeting);
