function sayHello(name: string, callback: (message: string) => void): void {
  const message = `Hello, ${name}!`;
  callback(message);
}

function greetingCallback(message: string): void {
  console.log(message);
}

sayHello("Michael", greetingCallback);
sayHello("Petra", greetingCallback);
sayHello("Paul", greetingCallback);
