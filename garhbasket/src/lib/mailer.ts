// import nodemiler from "nodemailer"

// const transporter = nodemailer.createTransport({

//     service:"gmail",

//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASS,
//   },
// });

// export const sendMail =  async (to:string,subject:string,html:string)=>{
//   await transporter.sendMail({
//     from:`"GarhBasket" <${process.env.EMAIL}>`,
//     to,
//     subject,
//     html
//   })

// }

import nodemailer from "nodemailer"  // fixed spelling: nodemiler → nodemailer

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});

export const sendMail = async (to: string, subject: string, html: string) => {
    await transporter.sendMail({
        from: `"GarhBasket" <${process.env.EMAIL}>`,
        to,
        subject,
        html
    })
}