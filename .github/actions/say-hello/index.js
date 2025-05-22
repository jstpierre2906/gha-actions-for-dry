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

const greetingName = core.getInput("greeting-name") || "Foo";
console.log(Hello.init({ greetingName }).sayHello());
