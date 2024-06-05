import express from 'express'

// Exempel på "custom" middleware är cors, body-parser, url-encoded och loggningsverktyget morgan

const app = express()
const port = 5000;

// Skriva en egen middleware som loggar ut vilken request metod som används samt vilken url
const middleWare = (req, res, next) => {
    console.log("Hi from middleware function")
    // console.log("Logger:")
    // console.log("Request object", req.method);
    // console.log("Request object", req.url)
    next()
}

const middleWare2 = (req, res, next) => {
    console.log("Hello from middleware2")
    next()
}

//app.use(middleWare) // Global användning av middleware - sker på varje route handler

// Route handlers
app.get('/', middleWare, (req, res) => {
    // Gör något på url '/' och http-metod get
    console.log("Hello from routehandler")
    res.send("Response from routehandler")
});

app.get('/dashboard', (req, res) => {
    console.log("Hello from dashboard route")
})


// Man kan använda flera middleware efter varandra om man vill hantera någon speciel logik. Next måste exekveras för att man ska kunna gå vidare i req-/responscykeln
app.get('/special', middleWare, middleWare2,  (req, res) => {
    console.log("Hello from special route")
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
