<template>
  <div class="main">
    <center>
      <md-avatar class="md-large">
        <img src="/static/img/amanze.jpg"/>
      </md-avatar>
      <span class="md-display-1">Currency Converter</span>
    </center>
    <br>
    <div class="w600 center">
      <center>

        <div class="flex">
          <md-card>
            <md-card-content>
              <div class="">
                <md-field>
                  <md-select v-model="fromCurrency" placeholder="from">
                    <md-option v-for="(currency, pos) in currencies" :value="pos" :key="pos">{{pos}} ({{currency.currencySymbol}})</md-option>
                  </md-select>
                </md-field>
                <md-field md-inline>
                  <label>Inline</label>
                  <md-input v-model="from"></md-input>
                  <span>{{fromCurrency}}</span>
                </md-field>
              </div>
            </md-card-content>
          </md-card>
          <span>..</span>
          <md-card>
            <md-card-content>
              <div class="">
                <md-field>
                  <md-select v-model="toCurrency" placeholder="to">
                    <md-option v-for="(currency, pos) in currencies" :value="pos" :key="pos">{{pos}} ({{currency.currencySymbol}})</md-option>
                  </md-select>
                </md-field>
                <md-field md-inline>
                  <label>Inline</label>
                  <md-input v-model="to"></md-input>
                  <span>{{toCurrency}}</span>
                </md-field>
              </div>
            </md-card-content>
          </md-card>
        </div>
      </center>
      <br>
      <div>
        <md-card>
          <md-card-content>
            <div class="md-caption">
              {{fromCurrency}} {{from}}
            </div>
            <div class="md-display-1">
              {{toCurrency}} {{to}}
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import Db from './db.js'
const dbInstance = new Db()
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      from: 1,
      to: 1,
      fromCurrency: "NGN",
      toCurrency: "USD",
      currencies: []
    }
  },
  watch: {
    'currencies' (value) {
      this.fromCurrency = 'NGN'
      this.toCurrency = 'USD'
    },
    'from' (value) {
      this.convert()
    },
    'to' (value) {
      this.convert()
    },
    'fromCurrency' (value) {
      this.convert()
    },
    'toCurrency' (value) {
      this.convert()
    }
  },
  methods: {
    getCurrencies(){
      if(localStorage.currencies) {
        this.currencies = JSON.parse(localStorage.currencies)
        return;
      }

      Axios({
        url: 'http://free.currencyconverterapi.com/api/v5/currencies',
        method: 'get'
      })
      .then(res => {
        this.currencies = res.data.results
        localStorage.currencies = JSON.stringify(this.currencies)
      })
      .catch(err => {
        console.log('couldn\'t get data', err)
      })
    },
    convert() {
      const key = `${this.fromCurrency}_${this.toCurrency}`
      const conversion = dbInstance.getData('conversions', key)
      if (conversion) {
        this.to = res.data.results[key].val * this.from
        return;
      }

      Axios({
        url: `https://free.currencyconverterapi.com/api/v5/convert?q=${key}`,
        method: 'get',
      })
      .then(res => {
        this.to = res.data.results[key].val * this.from
        dbInstance.addData('conversions', key, res.data.results[key])
      })
      .catch(err => {})
    },
    init() {
      this.getCurrencies()
      dbInstance.addData('conversions', 'id', 'value')
    }
  },
  mounted() {
    this.init()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
html, body {
  background: #F2F2F2 !important;
}
.flex {display:flex;}
.md-card {
  background: white;
}

.center {
  margin: auto;
}

.w600 {
  width: 600px;
}
</style>
