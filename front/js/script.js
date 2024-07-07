const chartContainer = document.getElementById('chart-container');
const chartToggle = document.querySelector('.chart-toggle');
const spike = document.getElementById('spike');
const spikeBtn = document.getElementById('spike-btn');
const closeSpike = document.getElementById('close-spike');
const lastPrice = document.getElementById('last-price');
const mainHigh = document.getElementById('main-high');
const mainLow = document.getElementById('main-low');
const mainChange = document.getElementById('main-change');
const mainVolume = document.getElementById('main-volume');
const pricePanel = document.querySelector('.price-panel');
const bigPrice = document.querySelector('.big-price');
const bigChange = document.querySelector('.big-change');
const bigPercent = document.querySelector('.big-percent');
const openI = document.querySelector('.open-i span');
const highI = document.querySelector('.high-i span');
const lowI = document.querySelector('.low-i span');
const closeI = document.querySelector('.close-i span');
const bigPairName = document.querySelector('.big-pair-name');
const bigPairFull = document.querySelector('.big-pair-full');
const assetType = document.querySelector('.major');
const aliveDot = document.querySelector('.alive-dot');
const historyId = document.getElementById('history-list');
const historyArea = document.querySelector('.history-area');
const cur = document.querySelectorAll('.cur');
const placeCur = document.querySelectorAll('.place-cur');
const balanceVal = document.querySelectorAll('.balance');
const buyPrice = document.querySelector('.buy-price');
const sellPrice = document.querySelector('.sell-price');
const sellQtyInput = document.querySelector('.sell-qty-input');
const buySellInput = document.querySelector('.buy-sell-input');
const buyQtyInput = document.querySelector('.buy-qty-input');
const sellTotalInput = document.querySelector('.sell-total-input');
const buyTotalInput = document.querySelector('.buy-total-input');
const buyCommVal = document.querySelector('.buy-comm-val');
const sellCommVal = document.querySelector('.sell-comm-val');
const buyFinalVal = document.querySelector('.buy-final-val');
const sellFinalVal = document.querySelector('.sell-final-val');
const unrealPLive = document.querySelectorAll('.unreal-pl');
const mainBal = document.querySelectorAll('.main-bal');
const equityBal = document.querySelectorAll('.equity-bal');
const availBal = document.querySelectorAll('.avail-bal');
const buyBtn = document.querySelector('.buy-btn');
const sellBtn = document.querySelector('.sell-btn');
const activeOrdersPanel = document.getElementById('active-orders-panel');
const closedOrdersPanel = document.getElementById('closed-orders-panel');
const closeTradeBtn = document.getElementById('close-trade-btn');
const buySellModal = document.querySelector('.buy-sell-modal');
const modalForm = document.querySelector('.modal-form');
const buySellLoading = document.querySelector('.buy-sell-loading');
const confirmOrderBtn = document.querySelector('.buy-sell-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const finalPrice = document.querySelector('.final-price');
const finalQty = document.querySelector('.final-qty');
const finalPurchase = document.querySelector('.final-purchase');
const eurUsd = document.querySelector('.eur-usd');
const gbpUsd = document.querySelector('.gbp-usd');
const eurGbp = document.querySelector('.eur-gbp');
const usdJpy = document.querySelector('.usd-jpy');
const usdCad = document.querySelector('.usd-cad');
const usdInr = document.querySelector('.usd-inr');
const usdZar = document.querySelector('.usd-zar');
const apple = document.querySelector('.apple');
const amazon = document.querySelector('.amazon');
const tesla = document.querySelector('.tesla');
const moderna = document.querySelector('.modena');
const google = document.querySelector('.google');
const microsoft = document.querySelector('.microsoft');
const snp = document.querySelector('.snp');
const nasdaq = document.querySelector('.nasdac');
const dowJones = document.querySelector('.dow-jones');
const gold = document.querySelector('.gold');
const silver = document.querySelector('.silver');
const oil = document.querySelector('.oil');
const gas = document.querySelector('.gas');



const pairs = [
  [eurUsd, 'EUR USD', 'Euro / U.S. Dollar', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'Forex'],
  [gbpUsd, 'GBP USD', 'British Pounds / U.S. Dollar', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=GBP&to_symbol=USD&interval=5min&apikey=JKRLR3RSOQTNT7K9', 'Forex'],
  [eurGbp, 'EUR GBP', 'Euro / British Pounds', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=GBP&interval=5min&apikey=demo', 'Forex'],
  [usdJpy, 'USD JPY', 'U.S. Dollar / Japan Yen', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=USD&to_symbol=JPY&interval=5min&apikey=demo', 'Forex'],
  [usdCad, 'USD CAD', 'U.S. Dollar / Canadian Dollar', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=USD&to_symbol=CAD&interval=5min&apikey=demo', 'Forex'],
  [usdInr, 'USD INR', 'U.S. Dollar / Indian Rupee', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=USD&to_symbol=INR&interval=5min&apikey=demo', 'Forex'],
  [usdZar, 'USD ZAR', 'U.S. Dollar / South African Rand', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=USD&to_symbol=ZAR&interval=5min&apikey=demo', 'Forex'],
  [apple, 'APPLE', 'NASDAQ: AAPL', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'stocks'],
  [amazon, 'AMAZON', 'NASDAQ: AMZN', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'stocks'],
  [tesla, 'TESLA', 'NASDAQ: TSLA', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'stocks'],
  [moderna, 'MODERNA', 'NASDAQ: MRNA', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'stocks'],
  [google, 'ALPHABET INC', 'NASDAQ: GOOGL', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'stocks'],
  [microsoft, 'MICROSOFT Corp', 'NASDAQ: MSFT', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'stocks'],
  [snp, 'S&P 500', 'INDEXSP:.INX', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'indices'],
  [nasdaq, 'NASDAQ Inc', 'NASDAQ: NDAQ', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'indices'],
  [dowJones, 'DOW JONES IND. AVG.', 'INDEXSP:.DJI', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'indices'],
  [gold, 'GOLD', 'XAU', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'commodities'],
  [silver, 'SILVER', 'XAG', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'commodities'],
  [oil, 'CRUDE OIL', 'WTI', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'commodities'],
  [gas, 'NATURAL GAS', 'GAS', 'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo', 'commodities']
];

const userCurrency = 'USD';
let balance = 50000;
let equity = 50000;
let avail = 50000;
let tempEquity = 50000;

const orders = [];

if (navigator.onLine) {
  console.log('user is online');
} else {
  console.log('user is offline');
};



// const myOrders = [1, 2];
// const updateEquity = setInterval(async function () {
//   if (myOrders.length < 1) {
//     clearInterval(updateEquity);
//     console.log('stopped updating equity 1');
//     return;
//   };
//   let total = 4 + 9;
//   equity = avail;
//   equity = equity + total;
//     console.log('Hi');
//   console.log('updating Equity');
//   displayBalance();
// }, 6000);

// spikeBtn.addEventListener('click', function () {
//   myOrders.pop();
//   console.log(myOrders);
// });



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

// let allD = await fetchData(api);
//           let updD = allD[0];
//           let close = Number(updD[0].close);


const fetchData = async (url) => {
  try {
    let res = await fetch(url);
    let responseJson = await res.json();
    console.log(responseJson);
    let oldData = Object.values(Object.values(responseJson)[1]);
    let time = Object.keys(Object.values(responseJson)[1]);
    let newData = [];
    oldData.forEach((obj, i) => {
      newData[i] = formatObj(oldData[i]);
      newData[i].x = String(i + 1);
    });
    let price = Number(newData[0].close);
    return [newData, time, price];
  } catch (error) {
    console.log(error);
  }
};


const colorChange = (valChng, el) => {
  if (valChng > 0) {
    el.classList.remove('crypt-down');
    el.classList.add('crypt-up');
  } else {
    el.classList.remove('crypt-up');
    el.classList.add('crypt-down');
  };
};

const borderChange = (valChng, el) => {
  if (valChng > 0) {
    el.classList.remove('border-down');
    el.classList.add('border-up');
  } else {
    el.classList.remove('border-up');
    el.classList.add('border-down');
  };
};

const changeRate = (newData, oldData) => rate = ((newData / oldData) - 1) * 100;

const loadPageData = () => {
  cur.forEach((el, i) => {
    el.innerHTML = userCurrency;
  });

  placeCur.forEach((el, i) => {
    el.innerHTML = `Price ${userCurrency}`;
  });

  buyFinalVal.innerHTML = 'Select an asset';
  sellFinalVal.innerHTML = 'Select an asset';
};
loadPageData();

const displayBalance = (equ) => {
  mainBal.forEach((el, i) => {
    el.innerHTML = `${balance.toFixed(3)} ${userCurrency}`;
  });

  availBal.forEach((el, i) => {
    el.innerHTML = `${avail.toFixed(3)} ${userCurrency}`;
  });

  if (equ === 'temp') {
    equityBal.forEach((el, i) => {
      el.innerHTML = `${tempEquity.toFixed(3)} ${userCurrency}`;
    });
  } else {
    equityBal.forEach((el, i) => {
      el.innerHTML = `${equity.toFixed(3)} ${userCurrency}`;
    });
  };
};
displayBalance();

const livePrices = async (pair) => {
  const pairId = pair[0];
  const api = pair[3];
  priceID = pairId.children[1].firstChild;
  changeID = pairId.children[2].firstElementChild;
  percentID = pairId.children[2].lastElementChild;
  let allData = await fetchData(api);
  let newData = allData[0];
  let close = newData[0].close;
  let closeD = newData[0].close - newData[1].close;
  let percentChange = Number(changeRate(newData[0].close, newData[1].close)).toFixed(3);
  colorChange(closeD, priceID);
  colorChange(closeD, changeID);
  colorChange(closeD, percentID);
  priceID.innerHTML = close;
  changeID.innerHTML = closeD.toFixed(6);
  percentID.innerHTML = `${closeD > 0 ? '+' + percentChange : percentChange}%`;
  setInterval(async function () {
  
  }, 5000);
};
// pairs.forEach(pair => livePrices(pair));
// livePrices(pairs[0]);


let chartSize = '100%';
let chartHeight = '100%';

// chartContainer.classList.add('fullscreen');
chartToggle.addEventListener('click', function () {
  chartHeight = '100%';
  chartContainer.classList.add('fullscreen');
  historyArea.classList.add('hide');
  pricePanel.classList.add('toggle');
  loadTradePair();
});

function escaper(e) {
  if (e.key === 'Escape') {
    chartHeight = '100%';
    chartContainer.classList.remove('fullscreen');
    historyArea.classList.remove('hide');
    pricePanel.classList.remove('toggle');
    loadTradePair();
  }
};

document.addEventListener('keydown', escaper);


function loadTradePair(pair) {
  const pairId = pair[0];
  const pairName = pair[1];
  const pairTitle = pair[2];
  const pairApi = pair[3];
  const pairType = pair[4];
  const [pairName1, pairName2] = pairName.split(' ');

  pairId.addEventListener('click', function () {
    const api = pairApi;
    const renderChart = async () => {
      let [newData, timeData, price] = await fetchData(api);
      
      const schema = [{
        name: "Date",
        type: "date",
        format: "%m/%d/%Y, %I:%M:%S %p"
      }, {
        "name": "Open",
        "type": "number"
      }, {
        "name": "High",
        "type": "number"
      }, {
        "name": "Low",
        "type": "number"
      }, {
        "name": "Close",
        "type": "number"
      }
      // , {
      //   "name": "Volume",
      //   "type": "number"
      //   }
        ];
      
      

      const fd = (d) => {
        return d.toLocaleString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        });
      };

      function utcTimeFormat(time) {
        // const br = time.split(', ');
        // const h = br[1].split(":")
        // let n = (parseInt(h[0]) + 1) % 24;
        // // if (n.length = 1){
        // //   n = "0" + n;
        // // }
        // const utcPlusOne = n + ":" + h[1] + ":" + h[2];
        // const dateTime = [br[0], utcPlusOne].join(', ');
        // return dateTime;
        return time;
      };


      let data = [];
      newData.forEach((d, i) => {
        data[i] = ["" + utcTimeFormat(fd(new Date(timeData[i]))), Number(newData[i].open).toFixed(4), Number(newData[i].high).toFixed(4), Number(newData[i].low).toFixed(4), Number(newData[i].close).toFixed(4)];
      });
      data.reverse();
      // console.log(data);

      let dataStore = new FusionCharts.DataStore();
      chartToggle.classList.remove('hide');

      

      let realtimeChart = new FusionCharts({
        type: "timeseries",
        renderAt: "chart-container",
        width: chartSize,
        height: chartHeight,
        dataSource: {
          chart: {
            showValues: '1',
            theme: "fusion",
            bgColor: "#000000",
            bgAlpha: "50"
          },
          extensions: {
            "standardRangeSelector": {
              "enabled": "0"
            },
            "customRangeSelector": {
              "enabled": "0"
            }
          },
          data: dataStore.createDataTable(data, schema),
          caption: {
            text: `${pairTitle}`
          },
          subcaption: {
            text: `Real-time ${pairType}: BarclaysFST`
          },
          yaxis: [{
            plot: {
              value: {
                open: "Open",
                high: "High",
                low: "Low",
                close: "Close"
              },
              type: "candlestick"
            },
            format: {
              prefix: "$"
            },
            title: "Price"
          }]
        }
      });

      realtimeChart.addEventListener("renderComplete", function (_ref) {
        const buyPlus = 0.00024;
        const sellPlus = 0.00037;
        let realtimeChart = _ref.sender;
        let spikeData = [];

        //Demo
        // spikeData = [['11/05/2022, 2:58:00 PM', 21320], ['11/05/2022, 2:50:00 PM', 21340], ['11/05/2022, 8:11:00 PM', 2500]];

        spikeBtn.addEventListener('click', function () {
          // spikeData.push([fd(new Date(new Date(Date.now()).setSeconds(0))), Number(spike.value)]);
          spikeData.push(['11/07/2022, 7:10:00 PM', Number(spike.value)]);
          console.log(fd(new Date(new Date(Date.now()).setSeconds(0))), Number(spike.value))
        });

        //SET FOR OTHER ASSETS AS SOON AS THEY ARE AVAILABLE
        const decimalFormat = val => {
          if (pairId === eurUsd) {
            return Number(val).toFixed(5);
          } else {
            return Number(val).toFixed(2);
          };
        };

        realtimeChart.lastInterval = setInterval(updateChart, 12000000);
        
        async function updateChart() {
          let allUpd = await fetchData(api);
          let updData = allUpd[0];
          let updTime = allUpd[1];
          const priceData = Number(updData[0].close);
          closeSpike.innerHTML = `Close: ${priceData}`;
          // console.log(spikeData, spikeData.length);
          if (realtimeChart.feedData) {
            const populateData = [];
            let rendData = [];
            let wantedData;
            newData.forEach((d, i) => {
                populateData[i] = ["" + utcTimeFormat(fd(new Date(updTime[i]))), Number(updData[i].open), Number(updData[i].high), Number(updData[i].low), Number(updData[i].close), Number(updData[i].volume)];
              });
            populateData.reverse();
            if (spikeData.length > 0) {
              spikeData.forEach((spike, i) => {
                wantedData = populateData.find(el => el[0] === spikeData[i][0]);
                if (wantedData) {
                  wantedData?.splice(4, 1, spikeData[i][1]);
                  // console.log(populateData.indexOf(wantedData));
                  populateData.splice(populateData.indexOf(wantedData), 1, wantedData);
                  console.log('replacing with spiked data');
                };
              });
            };
            rendData = populateData;
            console.log(rendData);
            realtimeChart.feedData(rendData);
            rendData.reverse();
            const open = Number(rendData[0][1]);
            const openChange = Number(rendData[0][1]) - Number(rendData[1][1]);
            colorChange(openChange, openI);
            const high = Number(rendData[0][2]);
            const highChange = Number(rendData[0][2]) - Number(rendData[1][2]);
            colorChange(highChange, mainHigh);
            colorChange(highChange, highI);
            const low = Number(rendData[0][3]);
            const lowChange = Number(rendData[0][3]) - Number(rendData[1][3]);
            colorChange(lowChange, mainLow);
            colorChange(lowChange, lowI);
            const close = Number(rendData[0][4]);
            const closeChange = Number(rendData[0][4]) - Number(rendData[1][4]);
            const priceRate = changeRate(Number(rendData[0][4]), Number(rendData[1][4]));
            colorChange(closeChange, mainChange);
            colorChange(closeChange, closeI);
            colorChange(closeChange, bigPrice);
            colorChange(closeChange, lastPrice);
            colorChange(closeChange, bigChange);
            colorChange(closeChange, bigPercent);
            borderChange(closeChange, pricePanel);
            const volume = Math.trunc(Number(rendData[0][5]));

            aliveDot.classList.add('dotting');
            openI.innerHTML = decimalFormat(open);
            highI.innerHTML = decimalFormat(high);
            lowI.innerHTML = decimalFormat(low);
            closeI.innerHTML = decimalFormat(close);
            lastPrice.innerHTML = close;
            bigPrice.innerHTML = decimalFormat(close);
            mainHigh.innerHTML = high;
            mainLow.innerHTML = low;
            mainVolume.innerHTML = volume;
            mainChange.innerHTML = `${closeChange > 0 ? '+' + closeChange.toFixed(3) : closeChange.toFixed(3)} ${priceRate.toFixed(5)}%`;
            bigChange.innerHTML = Math.abs(closeChange.toFixed(5));
            bigPercent.innerHTML = `(${Math.abs(priceRate.toFixed(3))}%)`;
            bigPairName.innerHTML = pairName;
            bigPairFull.innerHTML = pairTitle;
            pairId.classList.add('acting');
            assetType.innerHTML = `${pair[4]} major: Europe`;
            buyPrice.placeholder = `$${Number(decimalFormat(close)) + buyPlus}`;
            sellPrice.placeholder = `$${Number(decimalFormat(close)) - sellPlus}`;

            rendData.forEach((el, i) => {
              historyId.children[i].cells[0].innerHTML = new Date(updTime[i]).toLocaleTimeString('en-US');
              historyId.children[i].cells[1].innerHTML = decimalFormat(rendData[i][4]);
              const historyChange = Number(rendData[i][4]) - Number(rendData[i + 1][4]);
              colorChange(historyChange, historyId.children[i].cells[1],);
              historyId.children[i].cells[2].innerHTML = `Nil`;
            });
          };
        };
        updateChart();

        //Trading Function
        const trading = async () => {
          let [a, b, close] = await fetchData(api);
          let orderArray = [];
          buyFinalVal.innerHTML = `0.0000 ${userCurrency}`;
          sellFinalVal.innerHTML = `0.0000 ${userCurrency}`;
          let commission = 0.002;

          const pLcalc = (latestPrice, orderPrice, QtyVal, tradetype, callback) => {
            if (tradetype === 'Buy') {
              const diff = Number(latestPrice) - Number(orderPrice);
              return callback(diff, QtyVal);
            } else if (tradetype === 'Sell') {
              const diff = Number(orderPrice) - Number(latestPrice);
              return callback(diff, QtyVal);
            };
          };

          const pairQtyCalc = (diff, QtyVal) => {
            const result = (diff * 100000) * Number(QtyVal);
            return result.toFixed(4);
          }

          const BSValue = () => {
            //Forex
            const currencyQtyValue = (close * 100000) / 200;
            //stocks const currencyQtyValue = (close * 100) / 20;
            //comm const currencyQtyValue = (close * 1000) / 50;
            //indices const currencyQtyValue = (close * 100) / 50;
            if (Number(buyQtyInput.value) > 0) {
              const BSQuantity = Number(buyQtyInput.value);
              const buyTotal = BSQuantity * currencyQtyValue;
              const BSFinal = buyTotal - commission;
              buyTotalInput.value = buyTotal.toFixed(4);
              buyFinalVal.innerHTML = buyQtyInput.value < 0.1 || buyQtyInput.value === '' ? `0.0000 ${userCurrency}` : `${decimalFormat(BSFinal)} ${userCurrency}`;
              return [BSFinal, BSQuantity, 'Buy'];
            } else if (Number(sellQtyInput.value) > 0) {
              const BSQuantity = Number(sellQtyInput.value);
              const sellTotal = BSQuantity * currencyQtyValue;
              const BSFinal = sellTotal - commission;
              sellTotalInput.value = sellTotal.toFixed(4);
              sellFinalVal.innerHTML = sellQtyInput.value < 0.1 || sellQtyInput.value === '' ? `0.0000 ${userCurrency}` : `${decimalFormat(BSFinal)} ${userCurrency}`;
              return [BSFinal, BSQuantity, 'Sell'];
            };
          };
          buyQtyInput.addEventListener('input', function () {
            sellQtyInput.value = "";
            sellTotalInput.value = "";
            sellFinalVal.innerHTML = `0.0000 ${userCurrency}`;
            BSValue();
          });
          sellQtyInput.addEventListener('input', function () {
            buyQtyInput.value = "";
            buyTotalInput.value = "";
            buyFinalVal.innerHTML = `0.0000 ${userCurrency}`;
            BSValue();
          });

          const calcProfit = () => {
            const activeorders = orderArray.filter(order => order[5] === 'active');
            for (const [i, order] of activeorders.entries()) {
              const updateProfit = async () => {
                if (activeOrdersPanel?.children[i]?.cells[4]) {
                  let [a, b, latestPrice] = await fetchData(api);
                  let pL = pLcalc(latestPrice, orderArray[i][2], orderArray[i][4], orderArray[i][1], pairQtyCalc);
                  const livePLArea = activeOrdersPanel?.children[i]?.cells[4];
                  livePLArea.innerHTML = pL > 0 ? `+${pL} ${userCurrency}` : `${pL} ${userCurrency}`;
                  colorChange(pL, livePLArea);
                  // pLValue[i] = Number(pL);
                  console.log('updating Profit/Loss');
                };
              };
              if (activeorders.length > 0) {
                updateProfit();
                setInterval(updateProfit, 30000);
              } else {
                clearInterval(updateProfit);
                console.log('stopped updating Profit/Loss');
              };
            };
          };

          const calcEquity = async () => {
            const activeorders = orderArray.filter(order => order[5] === 'active');
            console.log(orderArray);
            console.log(activeorders, `length is ${activeorders.length}`);
            const getEquity = async () => {
              let pLValue = [];
              for (const [i, order] of activeorders.entries()) {
                let [a, b, latestPrice] = await fetchData(api);
                let pL = pLcalc(latestPrice, activeorders[i][2], activeorders[i][4], activeorders[i][1], pairQtyCalc);
                pLValue[i] = Number(pL);
              };
              return pLValue;
            };

            const updateEquity = async () => {
              let plTotal = 0;
              pLValue = await getEquity();
              console.log(pLValue);
              pLValue.forEach((el, i) => {
                plTotal += pLValue[i];
              });
              equity = avail;
              equity = equity + plTotal;
              console.log('updating Equity');
              displayBalance();
            };
            updateEquity();

            const equityInterval = setInterval(function () {
              const activeorders = orderArray.filter(order => order[5] === 'active');
              if (activeorders.length < 1) {
                clearInterval(equityInterval);
                return;
              };
              updateEquity();
            }, 30000);
          };

          const redisplayOrders = () => displayOrders();

          const displayOrders = () => {
            let orderHtmlActive = [];
            let orderHtmlClosed = [];
            orderArray.forEach((el, i) => {
              if (orderArray[i][5] === 'active') {
                orderHtmlActive[i] =
                  `
                <tr>
                    <th>${orderArray[i][0]}</th>
                    <td class="${orderArray[i][1] === 'Buy' ? 'crypt-up' : 'crypt-down'}">${orderArray[i][1]}</td>
                    <td>${orderArray[i][2]}</td>
                    <td>${orderArray[i][3]}</td>
                    <td class="unreal-pl">${`Calculating...`}</td>
                    <td class="close-trade-cont"><button id="close-trade-btn">close trade</button></td>
                </tr>
                `;
              } else if (orderArray[i][5] !== 'active') {
                orderHtmlClosed[i] =
                  `
                <tr>
                    <th>${orderArray[i][0]}</th>
                    <td class="${orderArray[i][1] === 'Buy' ? 'crypt-up' : 'crypt-down'}">${orderArray[i][1]}</td>
                    <td>${orderArray[i][2]}</td>
                    <td>${orderArray[i][3]}</td>
                    <td class="p-or-l">${orderArray[i][5]}</td>
                    <td>Closed</td>
                </tr>
                `;
              };
            });
            activeOrdersPanel.innerHTML = orderHtmlActive.join('</tr>');
            closedOrdersPanel.innerHTML = orderHtmlClosed.join('</tr>');
            calcProfit();
            calcEquity();

            const closeTrade = () => {
              const activeorders = orderArray.filter(order => order[5] === 'active');
              activeorders.forEach((el, i) => {
                if (activeOrdersPanel.children[i]?.cells[5]) {
                  activeOrdersPanel.children[i].cells[5].firstChild.addEventListener('click', async function () {
                    let [a, b, latestPrice] = await fetchData(api);
                    pL = pLcalc(latestPrice, activeorders[i][2], activeorders[i][4], activeorders[i][1], pairQtyCalc);
                    finalProfLoss = pL > 0 ? `+${pL} ${userCurrency}` : `${pL} ${userCurrency}`; 
                    let toClose = orderArray.find(el => el === activeorders[i]);
                    console.log(finalProfLoss);
                    tempEquity = tempEquity + Number(pL);
                    equity = tempEquity;
                    balance = tempEquity;
                    avail = tempEquity;
                    displayBalance('temp');
                    toClose.splice(5, 1, finalProfLoss);
                    orderArray?.splice(orderArray.indexOf(toClose), 1, toClose);
                    redisplayOrders();
                    console.log('active orders:', activeorders.length);
                  });
                }
              });
            };
            closeTrade();
          };

          const tradeModal = (tradetype) => {
            buySellModal.classList.remove('hide');
            modalForm.classList.remove('hide');
            modalForm.classList.add('show');
            if (tradetype === 'Buy') {
              confirmOrderBtn.classList.add('crypt-button-green-full');
              confirmOrderBtn.classList.remove('crypt-button-red-full');
            } else if (tradetype === 'Sell') {
              confirmOrderBtn.classList.add('crypt-button-red-full');
              confirmOrderBtn.classList.remove('crypt-button-green-full');
            };
            confirmOrderBtn.innerHTML = tradetype;
          };

          confirmOrderBtn.addEventListener('click', function () {
            let buyPriceVal = Number(finalPrice.placeholder);
            const [BSFinal, BSQuantity, tradetype] = BSValue();
            let orderTime = new Date(Date.now()).toLocaleTimeString('en-US');
            let orderAmount = decimalFormat(BSFinal);

            //Update Balance
            equity = equity - orderAmount;
            avail = avail - orderAmount;
            tempEquity = tempEquity - orderAmount;
            displayBalance();

            //Push values to Array and Display
            orderArray.push([orderTime, tradetype, buyPriceVal, orderAmount, BSQuantity, 'active']);
            displayOrders();
            // console.log(orderArray);
            
            buyTotalInput.value = '';
            buyQtyInput.value = '';
            buyFinalVal.innerHTML = `0.0000 ${userCurrency}`;
            sellQtyInput.value = '';
            sellTotalInput.value = '';
            sellFinalVal.innerHTML = `0.0000 ${userCurrency}`;
            buySellModal.classList.add('hide');
            modalForm.classList.add('hide');
            modalForm.classList.remove('show');
          });
          cancelBtn.addEventListener('click', function () {
            buySellModal.classList.add('hide');
            modalForm.classList.add('hide');
            modalForm.classList.remove('show');
          });


          [buyBtn, sellBtn].forEach((btn, i) => {
            btn.addEventListener('click', async function (e) {
              // e.preventDefault();
              const [BSFinal, BSQuantity, tradetype] = BSValue();
              const orderAmount = decimalFormat(BSFinal);
              const [a, b, currentPrice] = await fetchData(api);
              const orderPriceVal = tradetype === 'Buy' ? currentPrice + buyPlus: currentPrice - sellPlus;
              
              if (orderAmount <= avail && avail > 0) {
                finalPrice.placeholder = orderPriceVal;
                finalQty.placeholder = BSQuantity;
                finalPurchase.innerHTML = `${orderAmount} ${userCurrency}`;
                tradeModal(tradetype);
              } else {
                buyFinalVal.innerHTML = 'Insufficient Balance';
                sellFinalVal.innerHTML = 'Insufficient Balance';
              };
            });
          });

        };
        trading();
      });

      realtimeChart.addEventListener("disposed", function(eventObj){
          var chartRef = eventObj;
          console.log('dispose fired');
          clearInterval(chartRef.lastInterval);
      });

      realtimeChart.render();
    }
    renderChart();
  });
};
pairs.forEach(pair => loadTradePair(pair));






















