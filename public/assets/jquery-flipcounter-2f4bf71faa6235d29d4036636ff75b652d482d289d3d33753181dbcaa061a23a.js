/**
 * Simple Flip Counter
 * -------------------
 *  
 * This pluing creates a simple flip counter. It value should be changed
 * using the "setValue()" public method
 *
 * Based on:
 *
 * Copyright (c) 2010 Chris Nanney
 * http://cnanney.com/journal/code/apple-style-counter-revisited/
 * http://cnanney.com/journal/code/apple-style-counter/
 * 
 * Modified by: Arturo Fernandez
 * 
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 */
var flipCounter=function(e,t){function r(e,t){if(E=o(e),b=o(t),t.length>e.length)for(var r=t.length-e.length;r>0;){var s=1;n(t.length-r+1,b[t.length-r]),s++,r--}if(t.length<e.length)for(var r=e.length-t.length;r>0;){var s=1;a(e.length-r),r--}for(var u=0;u<E.length;u++)b[u]!=E[u]&&i(u,E[u],b[u])}function i(e,t,r){function i(){7>s&&(n=3>s?"t":"b",jQuery(h+" #d"+e+" li."+n).css("background-position",u[s]),s++,3!=s?setTimeout(i,o):i())}var o,n,a=800,s=0,u=["-"+x+"px -"+t*m+"px",-2*x+"px -"+t*m+"px","0 -"+r*m+"px","-"+x+"px -"+t*v+"px",-2*x+"px -"+r*v+"px",-3*x+"px -"+r*v+"px","0 -"+r*v+"px"];switch(e){case 0:o=a/6;break;case 1:o=a/5;break;case 2:o=a/4;break;case 3:o=a/3;break;default:o=a/2}o=o>80?80:o,i()}function o(e){for(var t=new Array,r=0;r<e.length;r++)c=e.length-(r+1),f=e.length-r,t[r]=e.substring(c,f);return t}function n(e,t){var r=Number(e)-1;r%3==0&&jQuery(h).prepend('<ul class="cd"><li class="s"></li></ul>'),jQuery(h).prepend('<ul class="cd" id="d'+r+'"><li class="t"></li><li class="b"></li></ul>'),jQuery(h+" #d"+r+" li.t").css({"background-position":"0 -"+t*m+"px"}),jQuery(h+" #d"+r+" li.b").css({"background-position":"0 -"+t*v+"px"})}function a(e){jQuery(h+" #d"+e).remove();var t=jQuery(h+" li").first();t.hasClass("s")&&t.parent("ul").remove()}function s(e){for(var t=e.toString().length,r=1,i=0;t>i;i++)jQuery(h).prepend('<ul class="cd" id="d'+i+'"><li class="t"></li><li class="b"></li></ul>'),r!=t&&r%3==0&&jQuery(h).prepend('<ul class="cd"><li class="s"></li></ul>'),r++;for(var n=o(e.toString()),i=0;t>i;i++)jQuery(h+" #d"+i+" li.t").css({"background-position":"0 -"+n[i]*m+"px"}),jQuery(h+" #d"+i+" li.b").css({"background-position":"0 -"+n[i]*v+"px"})}var u={value:0},l=t||{},h=e&&""!=e?"#"+e:"#counter";for(var d in u)l[d]=d in l?l[d]:u[d];var c,f,g,p,m=39,v=64,x=53,E=[],b=[];this.setValue=function(e){return g=l.value.toString(),p=e.toString(),l.value=e,r(g,p),this},s(l.value)};