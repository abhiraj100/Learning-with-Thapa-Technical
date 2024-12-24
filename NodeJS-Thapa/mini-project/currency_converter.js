import https from 'https';
import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const apikey = '29a8a68b6a898560e1226a65';
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
}

https.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        let rates = JSON.parse(data).conversion_rates;

        rl.question("Enter the amount in USD: ", (amount) => {
            rl.question("Enter the target currency (e.g., INR, EUR, NPR): ", (currency) => {
                const rate = rates[currency.toUpperCase()];
                // console.log(amount, rate, currency);

                if(rate){
                    console.log(chalk.blue.bgRed.bold(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`));
                } else {
                    console.log(`Invalid Currency Code`)
                }

                rl.close();
            })
        })
    })
})