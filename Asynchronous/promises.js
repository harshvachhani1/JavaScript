/*
//callback
const getDataCallback = (callback) => {
  setTimeout(() => {
    callback("this is my callback error", undefined);
  }, 2000);
};
*/
const getDataCallback = (number, callback) => {
  setTimeout(() => {
    if (typeof number === "number") {
      callback(undefined, number * 2);
    } else {
      callback("Number must be provided");
    }
  }, 2000);
};

getDataCallback(2, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    getDataCallback(data, (error, data) => {
      if (error) {
        console.log("error");
      } else {
        console.log(data);
      }
    });
  }
});

//Promise
const getDataPromise = (number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof number === "number"
        ? resolve(number * 2)
        : reject("Number must be provided");
    }, 2000);
  });

getDataPromise(10)
  .then((data) => {
    return getDataPromise(data);
  })
  .then((data) => {
    return "this is some test data";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// getDataPromise(2).then(
//   (data) => {
//     getDataPromise(data).then(
//       (data) => {
//         console.log(`Promise data : ${data}`);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );

/*
const myPromise = getDataCallback();
//Then(after) to catch the value
myPromise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);
*/
//catch The catch statement defines a code block to handle any error.
