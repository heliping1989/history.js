(function(a,b){function d(a,d){var e=d.__amplify__?JSON.parse(d.__amplify__):{};c.addType(a,function(f,g,h){var i=g,j=(new Date).getTime(),k,l;if(!f){i={};for(f in e)k=d[f],l=k?JSON.parse(k):{expires:-1},l.expires&&l.expires<=j?(delete d[f],delete e[f]):i[f.replace(/^__amplify__/,"")]=l.data;d.__amplify__=JSON.stringify(e);return i}f="__amplify__"+f;if(g===b){if(e[f]){k=d[f],l=k?JSON.parse(k):{expires:-1};if(l.expires&&l.expires<=j)delete d[f],delete e[f];else return l.data}}else if(g===null)delete d[f],delete e[f];else{l=JSON.stringify({data:g,expires:h.expires?j+h.expires:null});try{d[f]=l,e[f]=!0}catch(m){c[a]();try{d[f]=l,e[f]=!0}catch(m){throw c.error()}}}d.__amplify__=JSON.stringify(e);return i})}var c=a.store=function(a,b,d,e){var e=c.type;d&&d.type&&d.type in c.types&&(e=d.type);return c.types[e](a,b,d||{})};c.types={},c.type=null,c.addType=function(a,b){c.type||(c.type=a),c.types[a]=b,c[a]=function(b,d,e){e=e||{},e.type=a;return c(b,d,e)}},c.error=function(){return"amplify.store quota exceeded"};for(var e in{localStorage:1,sessionStorage:1})try{window[e].getItem&&d(e,window[e])}catch(f){}window.globalStorage&&(d("globalStorage",window.globalStorage[window.location.hostname]),c.type==="sessionStorage"&&(c.type="globalStorage")),function(){var a=document.createElement("div"),d="amplify",e;a.style.display="none",document.getElementsByTagName("head")[0].appendChild(a),a.addBehavior&&(a.addBehavior("#default#userdata"),a.load(d),e=a.getAttribute(d)?JSON.parse(a.getAttribute(d)):{},c.addType("userData",function(f,g,h){var i=g,j=(new Date).getTime(),k,l,m;if(!f){i={};for(f in e)k=a.getAttribute(f),l=k?JSON.parse(k):{expires:-1},l.expires&&l.expires<=j?(a.removeAttribute(f),delete e[f]):i[f]=l.data;a.setAttribute(d,JSON.stringify(e)),a.save(d);return i}f=f.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,"-");if(g===b){if(f in e){k=a.getAttribute(f),l=k?JSON.parse(k):{expires:-1};if(l.expires&&l.expires<=j)a.removeAttribute(f),delete e[f];else return l.data}}else g===null?(a.removeAttribute(f),delete e[f]):(m=a.getAttribute(f),l=JSON.stringify({data:g,expires:h.expires?j+h.expires:null}),a.setAttribute(f,l),e[f]=!0);a.setAttribute(d,JSON.stringify(e));try{a.save(d)}catch(n){m===null?(a.removeAttribute(f),delete e[f]):a.setAttribute(f,m),c.userData();try{a.setAttribute(f,l),e[f]=!0,a.save(d)}catch(n){m===null?(a.removeAttribute(f),delete e[f]):a.setAttribute(f,m);throw c.error()}}return i}))}(),d("memory",{})})(this.amplify=this.amplify||{})