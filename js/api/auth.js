export const login = async(username, password) => {

    const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    });
    console.log(response);
    return response.json();
}
export const register = async(formData) => {
    const response = await fetch('http:localhost:3000/auth/register', {
        method: 'POST',
        body: {
            formData
        }
    });
    return response.json();
}