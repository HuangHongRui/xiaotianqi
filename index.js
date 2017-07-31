#!/usr/bin/env node

var axios = require('axios')
//console.log(process.argv)

var data = {}

if(process.argv[2]) {
  data.params = {
    city : process.argv[2]
  }
}

axios.get('http://api.jirengu.com/weather.php', data)
  .then(function (response) {
    var weather = response.data.results[0].weather_data[0]
    console.log('\n  时间 ：' + weather.date)
    console.log('  温度 ：' + weather.temperature)
    console.log('  天气 ：' + weather.weather + ',' + weather.wind)
    console.log('  PM25 ：' + response.data.results[0].pm25)
    console.log('\n  穿衣指数 ：' +  response.data.results[0].index[0].des)
    console.log('  洗车指数 ：' +  response.data.results[0].index[1].des)
    console.log('  感冒指数 ：' +  response.data.results[0].index[2].des)
    console.log('  运动指数 ：' +  response.data.results[0].index[3].des + '\n')

  })

  .catch(function (error) {
    console.log(error)
  })
