(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),i=n.n(c),r=n(10),s=n.n(r),o=(n(89),n(58)),l=n(19),j=n(75),d=n(168),m=n(166),b=n(167),h=n(162),x=n(163),u=n(74),O=n.n(u),g=n(152),p=n(160),v=n(155),f=n(158),y=n(157),C=n(59),N=Object(g.a)((function(e){return{img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}})),S=function(e){var t=e.movie,n=e.nominate,c=e.nominees,i=N();return Object(a.jsx)("div",{children:Object(a.jsxs)(v.a,{container:!0,spacing:2,children:[Object(a.jsx)(v.a,{item:!0,xs:12,sm:3,children:Object(a.jsx)(C.a,{children:Object(a.jsx)("img",{onError:function(e){e.target.src="https://nelowvision.com/wp-content/uploads/2018/11/Picture-Unavailable.jpg"},className:i.img,alt:"complex",src:t.Poster})})}),Object(a.jsxs)(v.a,{item:!0,xs:12,sm:9,container:!0,children:[Object(a.jsx)(v.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,children:Object(a.jsxs)(v.a,{item:!0,xs:!0,children:[Object(a.jsx)(y.a,{color:"textPrimary",gutterBottom:!0,variant:"subtitle1",children:t.Title}),Object(a.jsxs)(y.a,{color:"textPrimary",variant:"body2",gutterBottom:!0,children:["Year: ",t.Year]}),Object(a.jsxs)(y.a,{variant:"body2",color:"textSecondary",children:["IMDb ID: ",t.imdbID]})]})}),Object(a.jsx)(v.a,{item:!0,xs:12,sm:3,children:Object(a.jsx)(f.a,{disabled:function(e){var t=null;return c.length>0&&(t=c.find((function(t){return t.imdbID===e.imdbID}))),null!=t||5===c.length}(t),onClick:function(){return n(t)},variant:"contained",children:" Nominate "})})]})]})})},w=function(e){return Object(a.jsx)("ul",{children:e.movies.map((function(t,n){return Object(a.jsx)(S,{movie:t,nominate:e.nominate,nominees:e.nominees},n)}))})},D=Object(g.a)((function(e){return{img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}})),I=function(e){var t=e.nominee,n=e.removeNominee,c=D();return Object(a.jsx)("div",{children:Object(a.jsxs)(v.a,{container:!0,spacing:2,children:[Object(a.jsx)(v.a,{item:!0,xs:12,sm:3,children:Object(a.jsx)(C.a,{children:Object(a.jsx)("img",{onError:function(e){e.target.src="https://nelowvision.com/wp-content/uploads/2018/11/Picture-Unavailable.jpg"},className:c.img,alt:"complex",src:t.Poster})})}),Object(a.jsxs)(v.a,{item:!0,xs:12,sm:9,container:!0,children:[Object(a.jsx)(v.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,children:Object(a.jsxs)(v.a,{item:!0,xs:!0,children:[Object(a.jsx)(y.a,{gutterBottom:!0,variant:"subtitle1",children:t.Title}),Object(a.jsxs)(y.a,{variant:"body2",gutterBottom:!0,children:["Year: ",t.Year]}),Object(a.jsxs)(y.a,{variant:"body2",color:"textSecondary",children:["IMDb ID: ",t.imdbID]})]})}),Object(a.jsx)(v.a,{item:!0,xs:12,sm:3,children:Object(a.jsx)(f.a,{onClick:function(){return n(t)},variant:"contained",children:" Remove "})})]})]})})},P=Object(g.a)((function(e){return{fullWidth:{width:"100%"}}})),k=function(e){var t=P();return Object(a.jsx)("ul",{className:t.fullWidth,children:e.nominees&&e.nominees.map((function(t,n){return Object(a.jsx)(I,{nominee:t,removeNominee:e.removeNominee},n)}))})},T=n(165),Y=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:" Search for movies "}),Object(a.jsxs)(v.a,{container:!0,spacing:2,children:[Object(a.jsx)(v.a,{item:!0,xs:12,md:8,children:Object(a.jsx)(T.a,{label:"Title",variant:"filled",fullWidth:!0,value:e.title,onChange:e.handleTitleChange})}),Object(a.jsx)(v.a,{item:!0,xs:6,md:2,children:Object(a.jsx)(T.a,{fullWidth:!0,label:"Page (1-100)",variant:"filled",value:e.pages,onChange:e.handlePagesChange})}),Object(a.jsx)(v.a,{item:!0,xs:6,md:2,children:Object(a.jsx)(T.a,{fullWidth:!0,label:"Year",variant:"filled",value:e.year,onChange:e.handleYearChange})}),Object(a.jsxs)(v.a,{item:!0,xs:12,children:[Object(a.jsx)(f.a,{size:"small",variant:"contained",onClick:e.search,children:" Search "}),Object(a.jsx)(f.a,{size:"small",variant:"contained",onClick:e.reset,children:" Reset "})]})]})]})},B=n(73),W=n.n(B),F=n(161),R=Object(g.a)((function(e){return{root:{flexGrow:1},container:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:e.spacing(3)},paper:{padding:e.spacing(2),textAlign:"center",margin:"auto",color:e.palette.text.secondary,whiteSpace:"nowrap",marginBottom:e.spacing(1)},center:{textAlign:"center"},header:{position:"relative",textAlign:"left",bottom:"15px",color:"#0000008a"}}})),A=function(e){return Object(a.jsx)(m.a,Object(j.a)({elevation:6,variant:"filled"},e))},E=function(){var e=R(),t=Object(c.useState)([]),n=Object(l.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)(""),j=Object(l.a)(s,2),m=j[0],u=j[1],g=Object(c.useState)(""),f=Object(l.a)(g,2),y=f[0],C=f[1],N=Object(c.useState)(""),S=Object(l.a)(N,2),D=S[0],I=S[1],P=Object(F.a)(["nominees"]),T=Object(l.a)(P,2),B=T[0],E=T[1],H=Object(c.useState)(B.nominees),L=Object(l.a)(H,2),M=L[0],z=L[1],G=Object(c.useState)(!1),J=Object(l.a)(G,2),U=J[0],$=J[1],q=Object(c.useState)({}),K=Object(l.a)(q,2),Q=K[0],V=K[1],X={regexp:/^[0-9\b]+$/},Z=function(e,t){"clickaway"!==t&&$(!1)};return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)("h1",{className:e.center,children:" Shoppies "}),Object(a.jsxs)(v.a,{justify:"center",container:!0,spacing:3,children:[Object(a.jsx)(v.a,{className:e.center,item:!0,xs:11,md:10,lg:9,xl:8,children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(h.a,{expandIcon:Object(a.jsx)(O.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(a.jsxs)("h2",{className:e.header,children:[" Nomination List (",M&&M.length,") "]})}),Object(a.jsx)(x.a,{children:Object(a.jsx)(k,{nominees:M,removeNominee:function(e){var t=Object(o.a)(M);t=t.filter((function(t){return t.imdbID!==e.imdbID})),z(t),E("nominees",t,{path:"/"})}})})]})}),Object(a.jsx)(v.a,{className:e.center,item:!0,xs:11,md:10,lg:9,xl:8,children:Object(a.jsx)(p.a,{className:e.paper,children:Object(a.jsx)(Y,{handleTitleChange:function(e){u(e.target.value)},handlePagesChange:function(e){var t=e.target.value;(""===t||X.regexp.test(t))&&C(e.target.value)},handleYearChange:function(e){var t=e.target.value;(""===t||X.regexp.test(t))&&I(e.target.value)},title:m,pages:y,year:D,search:function(e){e.preventDefault();var t="http://www.omdbapi.com/?apikey=f977222&s="+m+"&y="+D+"&page="+y+"&type=movie";Q[t]?r(Q[t]):W.a.get(t).then((function(e){if("False"!==e.data.Response){console.log(e.data);var n={};Object.assign(n,Q),n[t]=e.data.Search,V(n),r(e.data.Search)}})).catch((function(e){console.error(e)}))},reset:function(){r([]),I(""),C(""),u("")}})})}),Object(a.jsx)(v.a,{className:e.center,item:!0,xs:11,md:10,lg:9,xl:8,children:Object(a.jsxs)(p.a,{className:e.paper,children:[Object(a.jsx)("h2",{className:e.header,children:" Search Results "}),Object(a.jsx)(w,{movies:i,nominate:function(e){var t=Object(o.a)(M);t=t.concat(e),z(t),$(5===t.length),E("nominees",t,{path:"/"})},nominees:M})]})})]}),Object(a.jsx)(d.a,{open:U,autoHideDuration:6e3,onClose:Z,children:Object(a.jsx)(A,{onClose:Z,severity:"success",children:"You have reached the maximum of 5 nominations!"})})]})},H=n(164),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,169)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(H.a,{children:Object(a.jsx)(E,{})})}),document.getElementById("root")),L()},89:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.f94f46f5.chunk.js.map