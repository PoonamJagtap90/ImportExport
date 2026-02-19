
const express  = require('express')
const nodemailer = require('nodemailer')
const cors =  require('cors');
const handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
//const { process } = require('./src/app/pages/Process');
const app =express();
app.use(cors());
app.use(express.json());

require('dotenv').config()

function sendMail(fullName, email, message)
{
    console.log(process.env.EMAILID)
   var transporter = nodemailer.createTransport({
    service: 'leinfinitysolutions',
    auth:{
        user: process.env.EMAILID,
        pass: process.env.PASSWORD
    }
   })

   const subject = 'Enquiry Regarding Feedback'
   const to = email;
   const from = process.env.EMAILID
   const template = handlebars.compile(fs.readFileSync(path.join(_dirname,'template/','enquiry.hbs'), 'utf8'));
   const html = template({fullName: fullName, message: message})

   const mailOptions = {
    from,
    to, 
    subject,
    html
   }

   transporter.sendMail(mailOptions, (error, info)=>{

    if(error){
        console.log(error);
    }
    else{
        console.log('mail sent')
    }

   })

}
app.post('/', (req,res)=>{
    const {fullName, companyName, email, phone, service, message} = req.body;
   // console.log(fullName, companyName, email, phone, service, message)
   sendMail(fullName, email, message);
   
})

app.listen(8800,()=>{
    console.log('server running at 8800')

})

