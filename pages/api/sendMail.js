const mailgunSdk = require("mailgun-js");

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const mailgun = mailgunSdk({ apiKey, domain });

export default async function handler(req, res) {
  const { name, email, text } = req.body;
  const data = {
    from: `${name} <${email}>`,
    to: "hola@carlosazaustre.es",
    subject: "Mensaje enviado desde formulario de contacto (blog)",
    text,
  };

  let response;
  try {
    response = await mailgun.messages().send(data);
  } catch (err) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ result: response.message });
}
