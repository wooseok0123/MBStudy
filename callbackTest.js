/*function run() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const start = Date.now();
          for (let i = 0; i < 1000000000; i++) {}
          const end = Date.now();
          console.log(end - start + 'ms');
          resolve();
      }, 1000);
  });
}

run().then(() => {console.log('Done !!!');}); //return 으로 인해 .than
run().then(() => {return run()}).then(() => {console.log('Done !!!');}); 
*/
function run() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const start = Date.now();
          for (let i = 0; i < 1000000000; i++) {}
          const end = Date.now();
          console.log(end - start + 'ms');
          resolve();
      }, 1000);
  });
}

async function process() {
  await run();
  await run();
  
  console.log('Done !!!');
}

process();
