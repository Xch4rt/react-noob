import { iex } from '../config/iex';

export const stock = {

    latestPrice : (ticker, callback) => {
        const url = stock.latestPriceURL(ticker)

        fetch(url)
        .then((response) => response.json())
        .then((data) =>  callback(stock.formattedPriceData(data))
        )
        

        //return query;
    },
    latestPriceURL : (ticker) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`}
    ,
    formattedPriceData : (data) => {
            const stockData = data[data.length - 1]
            const formattedData = {}
            formattedData.price = stockData.close
            formattedData.date = stockData.date
            formattedData.time = stockData.label
            return formattedData
    }

}