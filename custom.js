import express from 'express'
import morgan from 'morgan' //custom middleware

const app = express()
const port = 4000;

// Global use of custom middleware
app.use(morgan('tiny'))

// Route handlers
app.get('/', (req, res) => {
    // Gör något på url '/' och http-metod get
    console.log("Hello from routehandler")
    res.send("Response from routehandler")
});

app.get('/dashboard', (req, res) => {
    console.log("Hello from dashboard route")
    res.send("Response from dashboard")
})

app.get('/special',  (req, res) => {
    console.log("Hello from special route")
    res.send("Response from special")
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
