console.log("CryptoStats loaded");

export async function getCurrencies (){
    try{
        const response = await fetch ("https://api.n.exchange/en/api/v1/currency/");
        console.log(response)
        const data = await response.json()
        console.log(data)
        return data
    } catch (e){
        console.log(e)
    }
}