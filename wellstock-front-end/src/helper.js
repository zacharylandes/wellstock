

 export const fetchStocks = async(params) => {
     
}

export const SearchStocks = async(params) => {
    if(!params){
     const response = await fetch('http://localhost:3000/api/v1/stocks')
     return await response.json()    
    }
    else if(params.input.includes('-')) {
     const response = await fetch(`http://localhost:3000/api/v1/stocks/?date=${params.input}`)
     const jsonResponse = await response.json()
     return jsonResponse    
    }
}



export const fetchStock = async(id) => {
    const response = await fetch('http://localhost:3000/api/v1/stock/`${id}`')
    return await response.json()    
}