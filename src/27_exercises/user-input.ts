function greetUser(): void {
  try {
    const userName = window.prompt("Please enter your name:");
    if (userName) {
      console.log(`Hello, ${userName}! Welcome to my beautiful site.`);
    } else {
      throw new Error("No name entered");
    }
  } catch (error) {
    console.log("Hello!Nice error");
  }
}

export default greetUser;
