(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Hugging",image:"https://cdn.shopify.com/s/files/1/1061/1924/files/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png?15202324258887420558",count:0},{id:2,name:"smile",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Eyes_Opened_large.png?v=1480481056",count:0},{id:3,name:"tears of joy",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Tears_of_Joy_Emoji_8afc0e22-e3d4-4b07-be7f-77296331c687_large.png?v=1480481057",count:0},{id:4,name:"Tongue Out Emoji with Winking Eye",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Tongue_Out_Emoji_with_Winking_Eye_876290ec-609b-498e-84ae-b195218ea438_large.png?v=1480481058",count:0},{id:5,name:"Heart Eyes Emoji",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Heart_Eyes_Emoji_large.png?v=1480481053",count:0},{id:6,name:"Sleeping Emoji",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Sleeping_Emoji_large.png?v=1480481055",count:0},{id:7,name:"Dizzy Face Emoji",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Dizzy_Face_Emoji_large.png?v=1480481052",count:0},{id:8,name:"Grinmacing Face Emoji",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Grinmacing_Face_Emoji_large.png?v=1480481035",count:0},{id:9,name:"Zipper-Mouth Face Emoji",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Zipper-Mouth_Face_Emoji_large.png?v=1480481035",count:0},{id:10,name:"Smiling Face with Halo",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_with_Halo_large.png?v=1480481056",count:0},{id:11,name:"Flushed Face Emoji",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Flushed_Face_Emoji_large.png?v=1480481053",count:0},{id:12,name:"Very Angry Emoji",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Very_Angry_Emoji_7f7bb8df-d9dc-4cda-b79f-5453e764d4ea_large.png?v=1480481058",count:0}]},,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(9),o=n.n(i),s=n(2),r=n(3),m=n(5),l=n(4),u=n(6),p=(n(16),function(e){return c.a.createElement("div",{className:"img-container",onClick:function(){return e.clickCount(e.id)}},c.a.createElement("img",{alt:e.name,src:e.image}))}),g=(n(17),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),d=(n(18),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-default navbar-fixed-top"},c.a.createElement("ul",null,c.a.createElement("li",{className:"itemLeft"},"Test Your Memory"),c.a.createElement("li",{className:"itemCenter"}),c.a.createElement("li",{className:"itemRight"},"Score: ",this.props.score," Highscore: ",this.props.highscore)))}}]),t}(a.Component)),h=(n(19),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"Emoji Clicky Game!"),c.a.createElement("h2",null,"Click on any image to earn a point, but don't click on the same picture more than once. Click all 12 pics, and you win."))}),f=n(1),_=(n(8),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={cards:f,score:0,highscore:0},n.gameOver=function(){return n.state.score>n.state.highscore&&n.setState({highscore:n.state.score},function(){console.log(this.state.highscore)}),n.state.cards.forEach(function(e){e.count=0}),alert("Game Over! \nscore: ".concat(n.state.score)),n.setState({score:0}),!0},n.clickCount=function(e){n.state.cards.find(function(t,a){if(t.id===e){if(0===f[a].count)return f[a].count=f[a].count+1,n.setState({score:n.state.score+1},function(){console.log(this.state.score)}),n.state.cards.sort(function(){return Math.random()-.5}),!0;n.gameOver()}})},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(d,{score:this.state.score,highscore:this.state.highscore}),c.a.createElement(h,null),c.a.createElement(g,null,this.state.cards.map(function(t){return c.a.createElement(p,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})})))}}]),t}(a.Component));o.a.render(c.a.createElement(_,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.42c3675b.chunk.js.map