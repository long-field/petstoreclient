"use strict"

document.getElementById("get").onclick = function () {getData(document.getElementById("petid").value)}
document.getElementById("delete").onclick = function () {deleteData(document.getElementById("petid").value)}
document.getElementById("post").onclick = function () {postData(document.getElementById("postpet").value)}
document.getElementById("put").onclick = function () {postData(document.getElementById("putpet").value)}

async function getData(petid) {
    var id = petid;
    let url = new URL('https://petstore3.swagger.io/api/v3/pet/'+petid);
    try {
        const response = await fetch(url);

        if (!response.ok) {
            const message = 'Error with Status Code: ' + response.status;
            throw new Error(message);
        }

        const data = await response.json();
        document.getElementById("data").innerText = JSON.stringify(data);
        document.getElementById("putpet").value = JSON.stringify(data);
    } catch (error) {

    }
}

async function deleteData(petid) {
    var id = petid;
    let url = new URL('https://petstore3.swagger.io/api/v3/pet/'+id);
    try {
        const response = await fetch(url,{method:'delete'});

        if (!response.ok) {
            const message = 'Error with Status Code: ' + response.status;
            throw new Error(message);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error: ' + error);
    }
}

async function postData(pet) {
    var petjson = pet;
    let url = new URL('https://petstore3.swagger.io/api/v3/pet/');
    try {
        const response = await fetch(url,{
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:petjson
        });

        if (!response.ok) {
            const message = 'Error with Status Code: ' + response.status;
            throw new Error(message);
        }

        const data = await response.json();
        document.getElementById("data").innerText = JSON.stringify(data);

    } catch (error) {
        console.log('Error: ' + error);
    }
}

async function putData(pet) {
    var petjson = pet;
    let url = new URL('https://petstore3.swagger.io/api/v3/pet/');
    try {
        const response = await fetch(url,{
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body:petjson
        });

        if (!response.ok) {
            const message = 'Error with Status Code: ' + response.status;
            throw new Error(message);
        }

        const data = await response.json();
        document.getElementById("data").innerText = JSON.stringify(data);

    } catch (error) {
        console.log('Error: ' + error);
    }
}