

export const createStock = (stock) => {
    const response =  fetch('http://localhost:3000/api/v1/stocks', {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            'body': JSON.stringify(stock),
        }
        })
        .then(res => res.json())
        .then(response => console.log('Success:',
            response))
        .catch(error => console.error('Error:', error))
}

export const login = async(params) => {
    const response = await fetch('http://localhost:3000/api/v1/stocks')
    const jsonResponse = await response.json();
    return jsonResponse 
}

export const searchStocks = async(params) => {
     if(!params){
     const response = await fetch('http://localhost:3000/api/v1/stocks')
     return await response.json() 
    }
    else {
     const response = await fetch(`http://localhost:3000/api/v1/stocks/?date=${params.input}`)
     const jsonResponse = await response.json()
     return jsonResponse    
    }
}


export const putStock = async(date) => {
    const response = await fetch(`http://localhost:3000/api/v1/stocks/?date=${date}`)
    return await response.json()    
}