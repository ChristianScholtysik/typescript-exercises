const sheLovesMePromise: Promise<string> = new Promise((resolve, reject) => {
  const lovesMe: boolean = Math.random() >= 0.5;

  if (lovesMe) {
    resolve("She loves me");
  } else {
    reject("She loves me not");
  }
});

sheLovesMePromise
  .then(() => {
    console.log("-- Resolved --");
    console.log("She loves me");
  })
  .catch(() => {
    console.log("-- Rejected --");
    console.log("She loves me not");
  })

  .finally(() => {
    console.log("-- Finally --");
    console.log("Now I know what is going on");
  });
