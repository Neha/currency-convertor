# currency-convertor
An NPM to get your currency convertor to each other.

# How it work:

Step 1 : npm install @nehasharma/currencyconvertor

       currencyConvertor(price, baseCurrency, targetCurrency)

       -  price : integer/number eg - 50

       -  baseCurrency : string eg - 'USD'

       - targetCurrency : string eg - 'AUD'


currencyConvertor(50,'usd', 'aud') // It will return a Promise

Step 2 : import Currency from '@nehasharma/currencyconvertor';

Step 3 : Currency(23, "usd", "inr").then((response)=>{
            console.log(response)
         })


# Dependencies:

- axios latest version
- Here we are using the fixer.io API for current currency rate


# Any feedback ? Question? 
neha@jslovers.com

