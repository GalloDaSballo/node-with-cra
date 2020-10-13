const express = require('express')
const app = express()
const port = process.env.PORT || 1234

console.log("in server PORT", port)
console.log("in server process.env.NODE_ENV", process.env.NODE_ENV)

app.get('/', (req, res) => {
  console.log("In get request")
    res.json([
        {id: 1, title: "Because why not"}
    ])
})

app.get('/api', (req, res) => {
  console.log("In API ")
    res.json([
        {id: 1, title: "From API"}
    ])
})


if(process.env.NODE_ENV === "production"){
    // Serve the static files from the React app
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handles any requests that don't match the ones above
    app.get('*', (req, res) =>{
      res.sendFile(path.join(__dirname+'/client/build/index.html'));
    });
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})