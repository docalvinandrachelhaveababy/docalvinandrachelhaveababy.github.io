var Vue = require('vue');
var moment = require('moment');

var vm = module.exports = new Vue({
  el: '#answer',
   template:[
     '<span v-if="future"><h1>no</h1> not for {{{monthText}}} {{{dayText}}} {{{hourText}}} {{{minuteText}}} {{seccondText}}</span>',
     '<span v-if="past"><h1>yes</h1> for {{{monthText}}} {{{dayText}}} {{{hourText}}} {{{minuteText}}} {{seccondText}} now</span>'
   ].join(''),
  data: {
    date: moment('10-25-2014 14:00 -0400', 'MM-DD-YYYY HH:mm Z').format(),
    now: moment().format()
  },
  computed: {
    past: function () {
      return moment(this.now).isSame(this.date) || moment(this.now).isAfter(this.date);
    },
    future: function () {
      return moment(this.now).isBefore(this.date);
    },
    months: function () {
      return moment(this.date).diff(moment(this.now), 'months');
    },
    monthText: function () {
      if (this.months) {
        return Math.abs(this.months) + ' month' + (Math.abs(this.months) === 1 ?',':'s,');
      }
    },
    days: function () {
      return moment(this.date).diff(moment(this.now).add('M', this.months), 'days');
    },
    dayText: function () {
      if (this.days) {
        return Math.abs(this.days) + ' day' + (Math.abs(this.days) === 1 ?',':'s,');
      }
    },
    hours: function () {
      return moment(this.date).diff(moment(this.now).add('M', this.months).add('d', this.days), 'hours');
    },
    hourText: function () {
      if (this.hours) {
        return Math.abs(this.hours) + ' hour' + (Math.abs(this.hours) === 1 ?',':'s,');
      }
    },
    minutes: function () {
      return moment(this.date).diff(moment(this.now).add('M', this.months).add('d', this.days).add('h', this.hours), 'minutes');
    },
    minuteText: function () {
      if (this.minutes) {
        return Math.abs(this.minutes) + ' minute' + (Math.abs(this.minute) === 1 ?',':'s,');
      }
    },
    seconds: function () {
      return moment(this.date).diff(moment(this.now)
        .add('M', this.months)
        .add('d', this.days)
        .add('h', this.hours)
        .add('m', this.minutes), 'seconds');
    },
    seccondText: function () {
      return Math.abs(this.seconds) + ' second' + (Math.abs(this.seconds) === 1 ?'':'s');
    }
  }
});
window.vm = vm;
window.moment = moment;
function setNow() {
  vm.now = moment().format();
}
setInterval(setNow, 1000);
setNow();