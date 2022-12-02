export default class RestClient 
{
    static baseUrl = 'http://localhost:8080'

    static getUsers(): Promise<any> {
        const url = `${RestClient.baseUrl}/users/`
        const promise1 = fetch(url)

        const promise2 = promise1.then(response =>{
            console.log(response.json())
            return response.json()
        })

        return promise2
    }

    static addUser(name,mail,psw): Promise<any> {
        const url = `${RestClient.baseUrl}/users/add`
        const promise1 = fetch(url,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: mail,
                    password: psw
                })
            }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


        return promise1
    }


    static validateUser(mail,psw): Promise<any> {
        const url = `${RestClient.baseUrl}/users/validate`
        const promise1 = fetch(url,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: mail
                })
            })

            const promise2 = promise1.then(response =>{
                console.log(response)
            })
    
            return promise2

    }
}