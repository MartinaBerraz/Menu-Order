export default class RestClient 
{
    static baseUrl = 'http://localhost:8080'

    static getProducts(): Promise<any> {
        const url = `${RestClient.baseUrl}/products/`

        const jsonPromise = fetch(url).then(r => r.json());
        jsonPromise.then(data => console.log(data)); // this works
        jsonPromise.then(data => console.log(data)); // and this works


        return jsonPromise
    }

    static getProduct(id): Promise<any> {
        const url = `${RestClient.baseUrl}/products/${id}`

        const jsonPromise = fetch(url).then(r => r.json());
        jsonPromise.then(data => console.log(data)); // this works
        jsonPromise.then(data => console.log(data)); // and this works


        return jsonPromise
    }

    static getTypes(): Promise<any> {
        const url = `${RestClient.baseUrl}/productTypes/`

        const jsonPromise = fetch(url).then(r => r.json());
        jsonPromise.then(data => console.log(data)); // this works
        jsonPromise.then(data => console.log(data)); // and this works


        return jsonPromise
    }

}