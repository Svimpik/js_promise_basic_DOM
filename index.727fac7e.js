var e=document.querySelector("body"),t=e.querySelector(".logo"),n=document.createElement("div"),o=new Promise(function(e,n){t.addEventListener("click",function(){e("Promise was resolved!")})}),c=new Promise(function(e,t){setTimeout(function(){t("Promise was rejected!")},3e3)});o.then(function(t){e.appendChild(n),n.classList.add("message"),n.textContent=t}).catch(function(){}),c.then(function(e){}).catch(function(t){e.appendChild(n),n.classList.add("message","error-message"),n.textContent=t});
//# sourceMappingURL=index.727fac7e.js.map
