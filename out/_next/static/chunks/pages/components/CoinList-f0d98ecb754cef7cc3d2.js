_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"8Klc":function(n,e,c){"use strict";c.r(e);var i=c("nKUr"),o=c("LPXS"),s=c.n(o);e.default=function(n){var e=n.name,c=n.symbol,o=n.image,a=n.marketCap,_=n.volume,t=n.supply,r=n.price,l=n.priceChange;return Object(i.jsx)("div",{className:s.a.coin_container,children:Object(i.jsxs)("div",{className:s.a.coin_row,children:[Object(i.jsxs)("div",{className:s.a.coin,children:[Object(i.jsx)("img",{src:o,alt:e,className:s.a.coin_img}),Object(i.jsx)("h1",{className:s.a.coin_h1,children:e}),Object(i.jsx)("p",{className:s.a.coin_symbol,children:c})]}),Object(i.jsxs)("div",{className:s.a.coin_data,children:[Object(i.jsxs)("p",{className:s.a.coin_marketCap,children:["MKT CAP: $",a.toLocaleString()]}),Object(i.jsxs)("p",{className:s.a.coin_price,children:["$",r.toLocaleString()," | "]}),l<0?Object(i.jsxs)("p",{className:(s.a.coin_percent,s.a.red),children:[l.toFixed(2),"%"]}):Object(i.jsxs)("p",{className:(s.a.coin_percent,s.a.green),children:[l.toFixed(2),"%"]}),Object(i.jsxs)("p",{className:s.a.coin_volume,children:["$",_.toLocaleString()]}),Object(i.jsxs)("p",{className:s.a.coin_supply,children:["Supply: ",t.toLocaleString(),"  "]})]})]})})}},LPXS:function(n,e,c){n.exports={coin_container:"Coins_coin_container__esXlY",coin_row:"Coins_coin_row__2gYFi",coin:"Coins_coin__yEcgO",coin_img:"Coins_coin_img__2vaaK",coin_h1:"Coins_coin_h1__XvAmg",coin_symbol:"Coins_coin_symbol__28yiP",coin_data:"Coins_coin_data__3pQ3M",coin_price:"Coins_coin_price__25SpD",coin_volume:"Coins_coin_volume__Fl4o3",coin_marketCap:"Coins_coin_marketCap__2tIZq",coin_percent:"Coins_coin_percent__3FJe1",coin_supply:"Coins_coin_supply__1S2mx",red:"Coins_red__bs9vs",green:"Coins_green__2CO3o"}},Qetd:function(n,e,c){"use strict";var i=Object.assign.bind(Object);n.exports=i,n.exports.default=n.exports},pa4A:function(n,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return s}));var i=c("nKUr"),o=c("8Klc");function s(n){var e=n.filterCoins;return Object(i.jsx)(i.Fragment,{children:e.map((function(n){return Object(i.jsx)(o.default,{name:n.name,symbol:n.symbol,image:n.image,supply:n.circulating_supply,marketCap:n.market_cap,price:n.current_price,volume:n.total_volume,priceChange:n.price_change_percentage_24h},n.id)}))})}},vN37:function(n,e,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/CoinList",function(){return c("pa4A")}])}},[["vN37",0,1]]]);