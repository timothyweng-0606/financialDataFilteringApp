const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${API_KEY}`


const showData = async() => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        console.log('Data:', data);
        return data;
      } catch (err) {
        console.log(err);
      }
    };
    
  
showData()

  export { showData };