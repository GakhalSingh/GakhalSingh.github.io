console.log("Nasa.js loaded");

export async function getPic (){
    try{
        const response = await fetch ("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=lh35WYrWmORiMXNfiXFFcE8UeX0MZO0GpeP3QEPJ");
        console.log(response)          
        const data = await response.json()
        console.log(data)
        return data
    } catch (error){
        console.log(error)
    }
}