import nodemailer from "nodemailer";
import sengridTransport from "nodemailer-sendgrid";

const transport = nodemailer.createTransport(
  sengridTransport({
    apiKey: process.env.SENDGRID_API_KEY,
  })
);

export default async function handler(req, res) {
  const { name, email, text } = req.body;
  const message = `${name} - ${email} te escribe lo siguiente:\n\n${text}`;

  transport
    .sendMail({
      from: email,
      to: "cazaustre@gmail.com",
      subject: "Enviado desde Formulario de Contacto",
      html: message,
    })
    .then(([res]) => {
      console.log(
        "Mensaje enviado! Código %s %s",
        res.statusCode,
        res.statusMessage
      );
    })
    .catch((error) => {
      console.error({
        error: error.message,
      });
    });

  //   (error, info) => {
  //     if (error) {
  //       return res
  //         .status(error.statusCode || 500)
  //         .json({ error: error.message });
  //     } else {
  //       return res.status(200).json({
  //         message: "Mensaje enviado correctamente",
  //         info: info.response,
  //         error: "",
  //       });
  //     }
  //   }
  // );
}
