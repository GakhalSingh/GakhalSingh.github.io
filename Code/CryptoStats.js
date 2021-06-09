console.log("CryptoStats loaded");

export async function getCurrencies (){
    try{
        const response = await fetch ("https://api.n.exchange/en/api/v1/currency/");
        console.log(response)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error){
        console.log(error)
    }
}
export async function getPriceOfBTC (){
    try{
        const response = await fetch ("https://api.n.exchange/en/api/v1/get_price/BTC/");
        console.log(response)
        const data = await response.json()
        console.log(data)
        return data
    } catch (e){
        console.log(error)
    }
}