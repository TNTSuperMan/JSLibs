function $(q,nw){
    let o=(e)=>{
        return {
            q: e,
            attr: function(id,ct){this.q.setAttribute(id,ct);return this},
            html: function(ct){this.q.innerHTML=ct;return this},
            text: function(ct){this.q.innerText=ct;return this},
            apde: function(e){this.q.appendChild(e.q);return this},
            f   : function(){return this}
        };
    }
    return nw ? o(document.createElement(q)) :
    o(document.querySelector(q))
}