export default class RestClient 
{
    static baseUrl = 'http://localhost:8080'

    static getProducts(): Promise<any> {
        const url = `${RestClient.baseUrl}/products`
        const promise1 = fetch(url)

        const promise2 = promise1.then(response =>{
            return response.json()
        })

        return promise2
    }
}