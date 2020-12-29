const axios = require("axios");
const requestUrl = `https://api.github.com/users/terrataylor/repos`;


axios.get(requestUrl)
    .then(({data})=>{
        
        
        console.log(data[0])
    });

