export default currencyConventor = (price, baseCurrency, targetCurrency) => {
    axios.get('http://data.fixer.io/api/latest?access_key=5cd55a2f9de07d559e48ee9cbdf4e6b1')
    .then(function(response){
        if(targetCurrency === 'EUR'){

        }
        else{
        
        const currentRateList = response.data.rates;
        const currentRate_BASEEUR = (response.data.rates[baseCurrency]).toFixed(2);
        const targetCurrencyRate = (response.data.rates[targetCurrency]).toFixed(2);
        const value = (price/currentRate_BASEEUR * targetCurrencyRate).toFixed(2);
        
        return value;
        }
       
    })
    .catch(function(err){
        console.log(err);
    })

}

