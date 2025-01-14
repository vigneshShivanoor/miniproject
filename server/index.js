const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer  = require('multer')
const fs = require('fs');
const path = require('path');
const { error } = require('console');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/public', express.static('public'));


const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
      cb(null, './public/Images');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage:storage
})

app.get('/login', (req, res) => {
    res.send("Hello world");
});

app.get('/events',(req,res) =>{
    let data = fs.readFileSync('./EventFiles/eventfiles.json');
    let eventData = JSON.parse(data);
    res.json(eventData);
})

app.post('/update',(req,res)=>{
    let data = fs.readFileSync('./EventFiles/eventfiles.json');
    data = JSON.parse(data);
    data.push({"id":data.length,...req.body});
    fs.writeFileSync('./EventFiles/eventfiles.json',JSON.stringify(data),(err)=>console.log(err));
    res.status(200).json('done');
})

app.post('/upload', upload.single('image'), (req, res) => {
    let data = fs.readFileSync('./EventFiles/eventfiles.json');
    data = JSON.parse(data);
    const newData = {
      "id": data.length,
      ...req.body,  
      "imageUrl": req.file ? `/Images/${req.file.filename}` : null
    };
    data.push(newData);
    fs.writeFileSync('./EventFiles/eventfiles.json', JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json('Error writing to file');
      }
    });
    res.status(200).json('done');
  });

app.listen(5000, () => {
    console.log("Listening on port 5000");
})