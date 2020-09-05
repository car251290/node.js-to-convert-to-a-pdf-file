//All the dependencis
const express = require ('express');
const bodyParser = require ('body-parser');
const pdf = require ('html-pdf');
const cors = require ('cors');

const pdfTemplate = require('./documents');
//const { default: parseErrorStack } = require('react-native/Libraries/Core/Devtools/parseErrorStack');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(body-Parser.urelencode({extended:true}));

app.use(body-Parser.json());

app.post ('create-pdf',(req,res)=>{
    pdf.create(pdfTemplate(req.body),{}).toFile('result.pdf',(err)=> {
        if(err){
            res.send(Promise.reject());

        }
        res.send(Promise.resolve());
    });
    app.get('/fetch-pdf',(req,res)=>{
        res.sendFile(`${_dirname}/result.pdf`)
    })
    app.listen(port,()=>console.log(`Listening on port ${port}`));


});