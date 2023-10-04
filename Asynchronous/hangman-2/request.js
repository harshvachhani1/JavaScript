const getCountry = (countryCode, callback) => {
  const countryRequest = new XMLHttpRequest();

  countryRequest.addEventListener("readystatechange", (reciveData) => {
    if (
      reciveData.target.readyState === 4 &&
      reciveData.target.status === 200
    ) {
      const data = JSON.parse(reciveData.target.responseText);
      const country = data.find(
        (country) => country.alpha2Code === countryCode
      );
      callback(undefined, country);
    } else if (reciveData.target.readyState === 4) {
      callback("unable to fetch data");
    }
  });
  countryRequest.open("GET", "https://restcountries.com/v3.1/all");
  countryRequest.send();
};
