const formatObj = (obj) => {
  const newArray = Object.keys(obj).map((key) => key.split(" ")[1]);
  const newObject = newArray.reduce((acc, val) => {
    return { ...acc, [val]: '' };
  }, {});
  const newVal = Object.values(obj);

  newObject.open = newVal[0];
  newObject.high = newVal[1];
  newObject.low = newVal[2];
  newObject.close = newVal[3];
  newObject.x = '';
  newObject.volume = newArray[4] ? String(newVal[4]) : '';
  return newObject;
};

const fetchData = async () => {
  await fetch(
      `https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ETH&market=USD&interval=1min&apikey=3B6320CYLJ6BDR9Y`,
  )
  .then((response) => response.json())
    .then((responseJson) => {
    // console.log(responseJson);
      const data = Object.values(Object.values(responseJson)[1]);
      const time = Object.keys(Object.values(responseJson)[1]);
      const newData = [];
      data.forEach((obj, i) => {
        newData[i] = formatObj(data[i]);
        newData[i].x = String(i + 1);
      });
      console.log(data);
      console.log(newData);
      // console.log(time);

      dataArray = [{
        data: newData
      }];

      FusionCharts.ready(function () {
        var chartObj = new FusionCharts({
        id: 'tradingchart',
        type: 'candlestick',
        renderAt: 'chart-container',
        width: '680',
        height: '390',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fusion",
                "caption": "Daily Stock Price HRYS",
                "subCaption": "Last 2 months",
                "numberprefix": "$",
                "vNumberPrefix": " ",
                "pyaxisname": "Price",
                "vyaxisname": "Volume (In Millions)",
                "toolTipColor": "#ffffff",
                "toolTipBorderThickness": "0",
                "toolTipBgColor": "#000000",
                "toolTipBgAlpha": "80",
                "toolTipBorderRadius": "2",
                "toolTipPadding": "5"
            },
            "categories": [{
                "category": [{
                    "label": "2 month ago",
                    "x": "1"
                }, {
                    "label": "1 month ago",
                    "x": "25"
                }, {
                    "label": "Today",
                    "x": "50"
                }, {
                    "label": "2 month ago",
                    "x": "75"
                }, {
                    "label": "2 month ago",
                    "x": "100"
                }]
            }],
            "dataset": [{
              "data": [{
                "open": "18.74",
                "high": "19.16",
                "low": "18.67 ",
                "close": "18.99",
                "x": "1",
                "volume": "4991285"
            }]
            }]
        },
        "events": {
        "initialized": function(e) {
          function addLeadingZero(num) {
            return (num <= 9) ? ("0" + num) : num;
          }

          function updateData() {
            // Get reference to the chart using its ID
            var chartRef = FusionCharts("stackRealTimeChart"),
              // We need to create a querystring format incremental update, containing
              // label in hh:mm:ss format
              // and a value (random).
              currDate = new Date(),
              label = addLeadingZero(currDate.getHours()) + ":" +
              addLeadingZero(currDate.getMinutes()) + ":" +
              addLeadingZero(currDate.getSeconds()),
              // Get random number between 20 & 38 - rounded to 2 decimal places
              randomValue = parseInt(Math.random() *
                15) + 10,
              randomValue2 = parseInt(Math.random() *
                20) + 15,
              // Build Data String in format &label=...&value=...
              strData = "&label=" + label +
                "&open=" + randomValue + "&high=" + randomValue2 + "&low=" + randomValue + "&close=" + randomValue2 + "&x=" + '1' + "&volume=" + randomValue2;
            // Feed it to chart.
            console.log(strData);
            chartRef.feedData(strData);
            
          }

          var myVar = setInterval(function() {
            updateData();
          }, 5000);
        }
      }
      })
      .render();
      });
      
      
  });
};
fetchData();











