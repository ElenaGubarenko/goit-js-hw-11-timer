(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,e,s){"use strict";s.r(e);s("zNZr")},zNZr:function(t,e){new(function(){function t(t){var e=t.selector,s=t.targetDate;this.selector=e,this.targetDate=s,this.targetDateInMS=s.getTime(),this.daysRef=document.querySelector('[data-value="days"]'),this.hoursRef=document.querySelector('[data-value="hours"]'),this.minsRef=document.querySelector('[data-value="mins"]'),this.secsRef=document.querySelector('[data-value="secs"]'),this.dateNow=this.dateNow.bind(this)}var e=t.prototype;return e.dateNow=function(){this.time=this.targetDateInMS-Date.now(),this.days=Math.floor(this.time/864e5),this.hours=Math.floor(this.time%864e5/36e5),this.mins=Math.floor(this.time%36e5/6e4),this.secs=Math.floor(this.time%6e4/1e3),this.daysRef.textContent=""+this.days,this.hoursRef.textContent=""+this.hours,this.minsRef.textContent=""+this.mins,this.secsRef.textContent=""+this.secs},e.currentTime=function(){return setInterval(this.dateNow,1e3)},t}())({selector:"#timer-1",targetDate:new Date(2021,6,17)}).currentTime()}},[["QfWi",1]]]);
//# sourceMappingURL=main.e4bb669674b179ecfacc.js.map