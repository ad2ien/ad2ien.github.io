function getActiveTocElement(e){return[...e].find((e=>e.getBoundingClientRect().y<=0))}function findCorrespondingTocTitle(e){return[...document.querySelectorAll("#toc li a")].find((t=>t.href.substring(t.href.indexOf("#"))===`#${e.id}`))}document.addEventListener("DOMContentLoaded",(function(){if(null!==document.getElementById("toc")){const t=document.querySelectorAll("#toc li a");let n=[];[...t].forEach((e=>{n.push(e.href.substring(e.href.indexOf("#")))}));const o=document.querySelectorAll(n.join(","));let i=[...o].reverse(),l=getActiveTocElement(i)||o[0];findCorrespondingTocTitle(l).classList.add("bg-blue-700");var e=l;window.addEventListener("scroll",(()=>{let t=getActiveTocElement(i)||o[0];t!==e&&(findCorrespondingTocTitle(e).classList.remove("bg-blue-700"),findCorrespondingTocTitle(t).classList.add("bg-blue-700"),e=t)}))}}));