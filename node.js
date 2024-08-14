const express = require('express');
const expressip = require('express-ip');

const app = express();
const PORT = 80;

app.use(expressip().getIpInfoMiddleware);
app.set("PORT", PORT);

app.get('/', function(req, res) {
  const ipInfo = req.ipInfo;
  console.log(req.ipInfo)
  const range = `${req.ipInfo.range[0]} to ${req.ipInfo.range[1]}`
  const ll = `${req.ipInfo.ll[0]} and ${req.ipInfo.ll[1]}`

  res.send(`
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Your IP Info</title>
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
<link rel="Icon" href="https://whatemoji.org/wp-content/uploads/2020/07/Link-Emoji.png" />
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font- awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>
<center>
<br><br><br>
<h2 class="title"><u>Your IP Information:</u></h2>
<br><br>

<div class="container">
<h2 class="containertitle">📑 IP Info</h2>
<br><br>
<h4>🔗 IP: ${req.ipInfo.ip || "IP could not be displayed"}</h4>
<br>
<h4>↪️ Range: ${range || "Range could not be displayed"}</h4>
<br>
<h4>🌎 Country: ${req.ipInfo.country || "Country could not be displayed"}</h4>
<br>
<h4>🗺️ Region: ${req.ipInfo.region || "Region could not be displayed"}</h4>
<br>
<h4>⏲️ Timezone: ${req.ipInfo.timezone || "Timezone could not be displayed"}</h4>
<br>
<h4>🌆 City: ${req.ipInfo.city || "City could not be displayed"}</h4>
<br>
<h4>📍 Coordinates: ${ll || "Coordinates could not be displayed"}</h4>
<br>
<h4>🌐 Metro: ${req.ipInfo.metro}</h4>
<br>
<h4>🚧 Area: ${req.ipInfo.area}</h4>
</div>
</center>
</body>
</html>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
body {
	background: #181818;
	font-family: 'Poppins', sans-serif;
  color: #ffffff;
}

.title {
font-size: 45px;
}

.container{
width: 65%;
text-align: center;
padding-top: 25px;
padding-bottom: 25px;
border-radius: 25px;
justify-content: space-between;
align-items: center;
background: #212121;
}

.containertitle {
font-size: 35px;
}
</style>`);

});

app.listen(app.get('PORT'), function() {
  console.log(`Application started with port ${PORT}`)
  console.log(`Any Info that appears here means someone (can be you too) clicked onto your web app.`)
});
