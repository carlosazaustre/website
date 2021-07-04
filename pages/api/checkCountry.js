import geoip from "geoip-native";

export default async function handler(req, res) {
  let ip = "96.84.57.209"; // A random US IP address as a default

  // Get the second IP address obtained from the 'x-forwarded-for' header
  if (typeof req.headers["x-forwarded-for"] !== "undefined") {
    ip = req.headers["x-forwarded-for"].split(",")[1];
  }

  // Return the IP translated to a country code
  console.log("ip: ", ip);
  console.log(geoip.lookup(ip).code);
  res.send({ country: geoip.lookup(ip).code });
}
