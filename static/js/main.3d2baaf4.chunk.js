(this["webpackJsonpchat-front-end"]=this["webpackJsonpchat-front-end"]||[]).push([[0],{130:function(e,a,t){e.exports=t(172)},169:function(e,a){},172:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"day",(function(){return Be})),t.d(n,"hour",(function(){return Ie}));var o=t(0),r=t.n(o),i=t(10),s=t.n(i),c=t(12),l=t(30),m=t(247),d=t(248),u=t(116),p=t(77),f=t(203),g=t(78),h=t(204),b={palette:{type:"light",primary:p.a,secondary:{main:f.a[700]},background:{default:"#fafafa",paper:"#ffffff",header:p.a[500]}},status:{danger:"orange"}},E={palette:{type:"dark",primary:{main:g.a.A200,dark:p.a.A500,light:h.a[700]},secondary:{main:f.a[700]},background:{default:"#121212",paper:"#1e1e1e",header:"#1f1f1f"}},status:{danger:"orange"}};var v=t(17),w=t(42),S=t(205),y=Object(S.a)((function(e){return{toolbar:Object(w.a)({width:function(e){return e.drawerSize.width},display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),menuButton:{marginLeft:e.spacing(2)},footer:{marginTop:"auto",width:function(e){return e.drawerSize.width},textAlign:"center"},selected:{color:e.palette.primary.main},drawer:{display:"flex",flexDirection:"column",height:"100%",whiteSpace:"nowrap"},drawerOpen:{overflowX:"hidden",width:function(e){return e.drawerSize.width},transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:{overflowX:"hidden",width:function(e){return e.drawerSize.closedWidth},transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}}}),{index:1}),x=t(207),O=t(209),N=t(210),j=t(211),k=t(212),C=t(213),D=t(214),q=t(215),z=t(216),P=t(217),T=t(218),B=t(219),I=[{title:"In\xedcio",to:"/home",iconSelected:r.a.createElement(x.a,null),icon:r.a.createElement(O.a,null)},{title:"Chatbot",to:"/chatbot",iconSelected:r.a.createElement(N.a,null),icon:r.a.createElement(j.a,null),divider:!0},{title:"D\xfavidas comuns",to:"/questions",iconSelected:r.a.createElement(k.a,null),icon:r.a.createElement(C.a,null)},{title:"Equipe",to:"/team",iconSelected:r.a.createElement(D.a,null),icon:r.a.createElement(q.a,null)},{title:"Tecnologias",to:"/tech",iconSelected:r.a.createElement(z.a,null),icon:r.a.createElement(P.a,null)},{title:"Informa\xe7\xf5es",to:"/info",iconSelected:r.a.createElement(T.a,null),icon:r.a.createElement(B.a,null)}],M=t(250),L=t(80),A=t(252),U=t(174),_=t(223),F=t(224),R=t(225),W=t(226),V=t(227),G=t(253),J=t(29),X=t(222);function Q(e){var a=y({drawerSize:e.drawerSize}),t=Object(v.g)().pathname,n=r.a.createElement(M.a,{className:a.drawer},r.a.createElement(M.a,{className:a.toolbar},r.a.createElement(L.a,{variant:"h4",component:"h1",color:"primary"},"Chatbot"),r.a.createElement(A.a,{title:"Esconder menu","aria-label":"Esconder menu",enterDelay:500},r.a.createElement(U.a,{onClick:e.closeMenu,className:a.menuButton},r.a.createElement(X.a,null)))),r.a.createElement(_.a,null),r.a.createElement("nav",null,r.a.createElement(F.a,null,I.map((function(n){return r.a.createElement(R.a,{button:!0,key:n.title,component:l.b,divider:n.divider,selected:n.to===t,classes:{selected:a.selected},onClick:e.mobile?e.closeMenu:null,to:n.to},r.a.createElement(W.a,{className:n.to===t?a.selected:null},n.to===t?n.iconSelected:n.icon),r.a.createElement(V.a,{primary:n.title,role:"link"}))})))),r.a.createElement(M.a,{className:a.footer,display:e.open||e.mobile?"block":"none",role:"contentinfo"},r.a.createElement(_.a,null),r.a.createElement(L.a,{variant:"caption",align:"center"},"Projeto de formatura"),r.a.createElement("br",null),r.a.createElement(L.a,{variant:"overline"},"PCS - USP")));return e.mobile?r.a.createElement(G.a,{classes:{paper:a.drawerOpen},open:e.open,onClose:e.closeMenu,onOpen:e.openMenu},n):r.a.createElement(J.a,{variant:"permanent",className:e.open?a.drawerOpen:a.drawerClose,classes:{paper:e.open?a.drawerOpen:a.drawerClose}},n)}var H=t(22),Y=Object(S.a)((function(e){return{menuButton:{position:"fixed",left:e.spacing(2)},titleDisplaced:Object(H.a)({marginLeft:e.spacing(4)},e.breakpoints.up("sm"),{marginLeft:e.spacing(0),transition:e.transitions.create(["margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})}),titleOrigin:Object(H.a)({marginLeft:e.spacing(4)},e.breakpoints.up("sm"),{transition:e.transitions.create(["margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}),appBar:Object(H.a)({backgroundColor:e.palette.background.header},e.breakpoints.up("sm"),{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}),appBarShift:Object(H.a)({backgroundColor:e.palette.background.header,zIndex:e.zIndex.drawer-1},e.breakpoints.up("sm"),{marginLeft:function(e){return e.drawerSize.width},width:function(e){return"calc(100% - ".concat(e.drawerSize.width,"px)")},transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})})}}),{index:1}),K=t(228),$=t(229),Z=t(118),ee=t(230),ae=t(231),te=t(232);function ne(e){var a=Y({drawerSize:e.drawerSize});return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{position:"fixed",className:e.open?a.appBarShift:a.appBar},r.a.createElement($.a,null,r.a.createElement(Z.a,{in:!e.open,style:{transitionDelay:"150ms"}},r.a.createElement(A.a,{title:"Exibir menu","aria-label":"Exibir menu",enterDelay:500},r.a.createElement(U.a,{edge:"start",color:"inherit",onClick:e.openMenu,className:a.menuButton},r.a.createElement(ee.a,null)))),r.a.createElement(L.a,{noWrap:!0,variant:"h6",component:"h1",className:e.open?a.titleDisplaced:a.titleOrigin},e.title),r.a.createElement(M.a,{flexGrow:1}),r.a.createElement(M.a,{display:"flex"},r.a.createElement(A.a,{title:"Trocar tema","aria-label":"Trocar tema",enterDelay:500},r.a.createElement(U.a,{color:"inherit",onClick:e.switchTheme},r.a.createElement(ae.a,null))),r.a.createElement(A.a,{title:"Ver perfil","aria-label":"Ver perfil",enterDelay:500},r.a.createElement(U.a,{color:"inherit",onClick:function(){}},r.a.createElement(te.a,null)))))),r.a.createElement($.a,null))}function oe(e){var a={width:240,closedWidth:60},t=r.a.useState(!e.isMobile),n=Object(c.a)(t,2),o=n[0],i=n[1],s=function(){return i(!0)};return r.a.createElement(M.a,{display:"flex",minHeight:"100vh",maxWidth:"100vw"},r.a.createElement(Q,{open:o,closeMenu:function(){return i(!1)},openMenu:s,mobile:e.isMobile,drawerSize:a,role:"navigation"}),r.a.createElement(M.a,{display:"flex",flexGrow:1,flexDirection:"column"},r.a.createElement(ne,{open:o,openMenu:s,title:e.title,drawerSize:a,switchTheme:e.switchTheme}),e.children))}var re=Object(S.a)((function(e){return{container:Object(H.a)({position:"relative",height:"100%",width:"100%",maxWidth:e.breakpoints.values.lg},e.breakpoints.up("sm"),{padding:e.spacing(2,1)}),content:Object(H.a)({padding:e.spacing(2)},e.breakpoints.down("xs"),{height:"100%"}),frame:{display:"flex",flexWrap:"wrap"},card:Object(H.a)({width:220,marginRight:e.spacing(4),marginBottom:e.spacing(3)},e.breakpoints.down("sm"),{marginRight:e.spacing(2),width:140}),media:Object(H.a)({height:220},e.breakpoints.down("sm"),{height:140}),detailed:Object(H.a)({margin:"auto",width:440},e.breakpoints.down("sm"),{width:280}),bigMedia:Object(H.a)({height:440},e.breakpoints.down("sm"),{height:280}),closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1)}}}),{index:1}),ie=t(233),se=function(e){return function(a){var t=re();return r.a.createElement(ie.a,{disableGutters:!0,className:t.container,role:"main"},r.a.createElement(e,a))}},ce=t(90),le=t(234);var me=se((function(e){var a=e.setTitle,t=re();return r.a.useEffect((function(){a("In\xedcio")}),[a]),r.a.createElement(ce.a,{elevation:2,className:t.content},r.a.createElement(L.a,{variant:"h2",color:"primary",gutterBottom:!0},"Chatbot"),r.a.createElement(L.a,{paragraph:!0,variant:"h5"},"Ol\xe1,"),r.a.createElement(L.a,{paragraph:!0,align:"justify",variant:"subtitle1"},"Este site \xe9 a demonstra\xe7\xe3o do Projeto de Formatura entitulado",r.a.createElement(L.a,{variant:"overline"},r.a.createElement("b",null," Chatbots para Antecipa\xe7\xe3o de Demanda de Clientes numa Distribuidora de Energia El\xe9trica ")),"do curso de Engenharia El\xe9trica com \xcanfase em Computa\xe7\xe3o da Escola Polit\xe9cnica da Universidade de S\xe3o Paulo (POLI-USP) e foi desenvolvido pelos alunos Bruno Brand\xe3o In\xe1cio e Pedro de Moraes Ligabue, sob orienta\xe7\xe3o da professora Dra. Anarosa Brand\xe3o."),r.a.createElement(L.a,{paragraph:!0,align:"justify",variant:"subtitle1"},"Sinta-se \xe0 vontade para explorar o site atrav\xe9s do menu presente na lateral esquerda. Nele voc\xea encontrar\xe1 a p\xe1gina 'Chatbot', onde ser\xe1 poss\xedvel conversar em tempo real com o chatbot e realizar testes de funcionamento. Al\xe9m disso, outras p\xe1ginas apresentam todas as informa\xe7\xf5es relevantes sobre o projeto, como informa\xe7\xf5es de uso, tecnologias utilizadas, equipe de trabalho e informa\xe7\xf5es de contato."),r.a.createElement(L.a,{paragraph:!0,align:"justify",variant:"subtitle1"},r.a.createElement("b",null,"Toda a intera\xe7\xe3o com o chatbot \xe9 baseada em dados gerados aleat\xf3riamente, que s\xe3o fornecidos no in\xedcio de cada conversa. Desta forma, este projeto n\xe3o coleta e n\xe3o usa nenhum tipo de informa\xe7\xe3o pessoal.")),r.a.createElement(L.a,{paragraph:!0,align:"justify",variant:"subtitle1"},"Ao final da intera\xe7\xe3o com o chatbot, solicitamos que voc\xea responda, se poss\xedvel, um breve formul\xe1rio sobre a sua experi\xeancia de uso. Se por algum motivo n\xe3o for poss\xedvel chegar ao fim de uma intera\xe7\xe3o, nos avise diretamente atrav\xe9s do formul\xe1rio:"),r.a.createElement(le.a,{color:"primary",href:"https://forms.gle/3X5ufm5YG5WLz4k86"},"Formul\xe1rio"))}));var de=se((function(e){var a=e.setTitle,t=re();return r.a.useEffect((function(){a("Informa\xe7\xf5es")}),[a]),r.a.createElement(ce.a,{elevation:2,className:t.content},r.a.createElement(L.a,{variant:"h2",color:"primary",gutterBottom:!0},"Chatbot"),r.a.createElement(L.a,{paragraph:!0,variant:"h5"},"Ol\xe1,"),r.a.createElement(L.a,{paragraph:!0,align:"justify",variant:"subtitle1"},"Este site \xe9 a demonstra\xe7\xe3o do Projeto de Formatura entitulado",r.a.createElement(L.a,{variant:"overline"},r.a.createElement("b",null," Chatbots para Antecipa\xe7\xe3o de Demanda de Clientes numa Distribuidora de Energia El\xe9trica ")),"do curso de Engenharia El\xe9trica com \xcanfase em Computa\xe7\xe3o da Escola Polit\xe9cnica da Universidade de S\xe3o Paulo (POLI-USP) e foi desenvolvido pelos alunos Bruno Brand\xe3o In\xe1cio e Pedro de Moraes Ligabue, sob orienta\xe7\xe3o da professora Dra. Anarosa Brand\xe3o. Neste projeto de formatura foram estudados e implementados m\xe9todos de apoio \xe0 intera\xe7\xe3o, em forma de conversa de texto, entre usu\xe1rios e chatbots em um sistema de atendimento a clientes no contexto de uma distribuidora de energia el\xe9trica."),r.a.createElement(L.a,{paragraph:!0,align:"justify",variant:"subtitle1"},"O projeto conta com uma interface gr\xe1fica para plataforma web capaz de receber requisi\xe7\xf5es de usu\xe1rios, de maneira simples e intuitiva e que foi desenvolvida com especial cuidado com rela\xe7\xe3o a recursos de acessibilidade e ao uso de um design e de fluxos de intera\xe7\xe3o pr\xf3ximos a padr\xf5es j\xe1 consolidados, buscando tornar o site acess\xedvel ao m\xe1ximo de clientes poss\xedvel. J\xe1 os chatbots foram constru\xeddos a partir de uma an\xe1lise de diferentes algoritmos de Processamento de Linguagem Natural (PLN) que pudessem ser combinados para formar chatbots de capazes de identificar e responder quest\xf5es dos usu\xe1rios de forma coerente, sendo suficientemente parecido com uma intera\xe7\xe3o humana para fornecer uma melhor experi\xeancia aos clientes."),r.a.createElement(L.a,{paragraph:!0,align:"justify",variant:"subtitle1"},"Atrav\xe9s do menu na lateral esquerda \xe9 poss\xedvel navegar pelo site. Voc\xea encontrar\xe1 op\xe7\xf5es referentes \xe0 p\xe1gina 'Chatbot', onde poder\xe1 realizar testes em tempo real com o chatbot desenvolvido. Al\xe9m disso, outras p\xe1ginas apresentam todas as informa\xe7\xf5es relevantes sobre o projeto, como a as tecnologias utilizadas e d\xfavidas comuns. Por fim, na p\xe1gina referente \xe0 equipe, \xe9 poss\xedvel encontrar mais informa\xe7\xf5es e o contato dos autores do projeto."),r.a.createElement(L.a,{paragraph:!0,align:"justify",variant:"subtitle1"},"O desenvolvimento do projeto foi dividido entre as etapas de",r.a.createElement("i",null," front-end")," e ",r.a.createElement("i",null,"back-end")," e os c\xf3digos desenvolvidos est\xe3o dispon\xedveis de forma aberta atrav\xe9s do GitHub:"),r.a.createElement(le.a,{color:"primary",href:"https://github.com/BrunoInacio/chat-front-end"},"Front-end"),r.a.createElement(le.a,{color:"primary",href:"https://github.com/Pligabue/rasa_chatbot"},"Back-end"))})),ue=t(235),pe=t(236),fe=t(237),ge=t(239),he=t(238),be=t(240);function Ee(e){var a=re();return r.a.createElement(ue.a,{onClose:e.handleClose,open:e.detailed.open},r.a.createElement(pe.a,{className:a.detailed},r.a.createElement(fe.a,{className:a.bigMedia,image:e.detailed.photo,title:e.detailed.name}),r.a.createElement(U.a,{className:a.closeButton,onClick:e.handleClose},r.a.createElement(he.a,null)),r.a.createElement(ge.a,null,r.a.createElement(L.a,{gutterBottom:!0,variant:"h5"},e.detailed.name),e.detailed.NUSP?r.a.createElement(R.a,{dense:!0,disableGutters:!0},r.a.createElement(W.a,null,r.a.createElement(P.a,{color:"secondary"})),r.a.createElement(V.a,{primaryTypographyProps:{variant:"overline"},primary:e.detailed.NUSP})):null,e.detailed.email?r.a.createElement(R.a,{dense:!0,disableGutters:!0},r.a.createElement(W.a,null,r.a.createElement(be.a,{color:"secondary"})),r.a.createElement(V.a,{primaryTypographyProps:{variant:"body2"},primary:e.detailed.email})):null)))}var ve=[{title:"Autores",members:[{name:"Bruno Brand\xe3o In\xe1cio",photo:"https://avatars1.githubusercontent.com/u/3254614",NUSP:9838122,email:"bruno.inacio@usp.br",telephone:"(DDD) NNNNN-NNNN"},{name:"Pedro de Moraes Ligabue",photo:"https://avatars3.githubusercontent.com/u/36277911",NUSP:9837434,email:"pedro.ligabue@usp.br",telephone:"(DDD) NNNNN-NNNN"}]},{title:"Orientadora",members:[{name:"Dra. Anarosa Alves Franco Brand\xe3o",photo:"http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4728035E1",NUSP:319590}]},{title:"Colaborador",members:[{name:"Pedro Koch",photo:"https://avatars0.githubusercontent.com/u/34276307",NUSP:9837420}]}],we=t(241);var Se=se((function(e){var a=e.setTitle,t=re();r.a.useEffect((function(){a("Equipe")}),[a]);var n=r.a.useState({open:!1}),o=Object(c.a)(n,2),i=o[0],s=o[1];return r.a.createElement(ce.a,{elevation:2,className:t.content},ve.map((function(e){return r.a.createElement(M.a,{key:e.title},r.a.createElement(L.a,{variant:"h4",color:"primary",component:"h2"},e.title),r.a.createElement(M.a,{className:t.frame,marginTop:2,marginBottom:2},e.members.map((function(e){return r.a.createElement(pe.a,{className:t.card,key:e.name},r.a.createElement(we.a,{onClick:function(){return function(e){return s(Object(w.a)({open:!0},e))}(e)},profile:e},r.a.createElement(fe.a,{className:t.media,image:e.photo,title:e.name}),r.a.createElement(ge.a,null,r.a.createElement(L.a,{gutterBottom:!0,variant:"h6",component:"h3"},e.name),r.a.createElement(L.a,{variant:"overline",color:"textSecondary"},e.NUSP))))}))))})),i.open?r.a.createElement(Ee,{detailed:i,handleClose:function(){return s({open:!1})}}):null)})),ye=Object(S.a)((function(e){return{root:Object(H.a)({display:"flex",flexDirection:"column",height:"100%"},e.breakpoints.up("sm"),{position:"absolute",height:"auto",top:e.spacing(2),bottom:e.spacing(2),left:e.spacing(1),right:e.spacing(1),padding:e.spacing(1,2)}),messageListContainer:{marginTop:"auto",padding:e.spacing(1),overflow:"auto","&::-webkit-scrollbar":{width:"0.4em"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgb(0, 0, 0, 0.1)"}},message:{maxWidth:"90%",textAlign:"left",wordBreak:"break-word",overflow:"hidden",marginBottom:e.spacing(1),padding:e.spacing(1),color:e.palette.primary.contrastText},miniTime:{float:"right",margin:e.spacing(2,0,-1,3),fontSize:"0.6rem",color:"white"},user:{alignSelf:"flex-end",backgroundColor:e.palette.primary.dark},bot:{alignSelf:"flex-start",backgroundColor:e.palette.primary.light},date:{alignSelf:"center",backgroundColor:e.palette.secondary.main},inputContainer:Object(H.a)({width:"100%",position:"sticky",bottom:0,backgroundColor:e.palette.background.paper},e.breakpoints.down("xs"),{padding:e.spacing(0,2,1,2)}),flexDisplay:{display:"flex"},sendButton:{height:36,alignSelf:"flex-end",marginLeft:e.spacing(2)}}}),{index:1}),xe=t(50),Oe=function(e){return{type:"ADD_MESSAGE",payload:e}},Ne=t(114),je=t.n(Ne);function ke(){var e=function(){var e=r.a.useRef([]),a=r.a.useState(null),t=Object(c.a)(a,2),n=(t[0],t[1]);return r.a.useEffect((function(){return e.current=je()(),e.current.on("connect",(function(){n(!0),console.log("CONNECTED"),e.current.emit("user_uttered",{message:"/get_started",sender:"user",date:(new Date).toISOString()})})),e.current.on("disconnect",(function(e){n(!1),console.log("DISCONNECTED")})),e.current.on("error",(function(){console.log("ERROR")})),e.current.waitForConnection=function(a,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;n<=0||(e.current.connected?a():setTimeout((function(){e.current.waitForConnection(a,t,--n)}),t))},e.current.safeSend=function(a){e.current.waitForConnection((function(){e.current.emit("user_uttered",a)}),1e3)},function(){return e.current.close()}}),[]),e}(),a=Object(xe.b)();return r.a.useEffect((function(){e.current.on("bot_uttered",(function(e){a(Oe({message:e.text,sender:"bot",date:(new Date).toISOString()}))})),e.current.sendMessage=function(t){var n={message:t,sender:"user",date:(new Date).toISOString()};a(Oe(n)),e.current.safeSend(n)}}),[e,a]),[e.current.sendMessage,e.current.connected]}var Ce=t(254),De=t(251);function qe(e){var a=e.isConnected,t=r.a.useState({open:!1}),n=Object(c.a)(t,2),o=n[0],i=n[1];return r.a.useEffect((function(){!0===a?i({open:!0,type:"success",message:"Voc\xea est\xe1 conectado."}):!1===a&&i({open:!0,type:"error",message:"Voc\xea n\xe3o est\xe1 conectado!"})}),[a]),r.a.createElement(Ce.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:o.open,onClose:function(){return i(Object(w.a)(Object(w.a)({},o),{},{open:!1}))},autoHideDuration:3e3},r.a.createElement(De.a,{elevation:5,variant:"filled",severity:o.type},o.message))}var ze=t(249),Pe=t(242);function Te(e){var a=e.sendMessage,t=ye(),n=r.a.useState(""),o=Object(c.a)(n,2),i=o[0],s=o[1];return r.a.createElement(M.a,{className:t.inputContainer},r.a.createElement(_.a,null),r.a.createElement("form",{autoComplete:"off",className:t.flexDisplay,onSubmit:function(e){e.preventDefault(),/^\s*$/.test(i)||(a(i),s(""))}},r.a.createElement(ze.a,{autoFocus:!0,fullWidth:!0,label:"Mensagem",placeholder:"Digite sua mensagem aqui.",color:"primary",margin:"dense",value:i,onChange:function(e){s(e.target.value)},id:"new-message"}),r.a.createElement(le.a,{type:"submit",variant:"text",color:"primary",className:t.sendButton,"aria-label":"Enviar mensagem"},r.a.createElement(Pe.a,null))))}function Be(e){return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear())}function Ie(e){return e.toTimeString().match(/[0-2][0-9]:[0-5][0-9]/)}var Me=t(76);function Le(){var e=r.a.useState([]),a=Object(c.a)(e,2),t=a[0],o=a[1],i=Object(xe.c)((function(e){return e.messages}));return r.a.useEffect((function(){var e=Object(Me.a)(i);e.sort((function(e,a){return new Date(e.date)<new Date(a.date)?-1:1})),e=function(e){if(e.length<1)return[];for(var a,t,o=0,r=[],i=[],s=0;s<e.length;s++){var c=e[s];if(void 0===c.sender)throw new Error("Missing 'sender' parameter.");if("bot"!==c.sender&&"user"!==c.sender&&"date"!==c.sender)throw new Error("Sender can only be 'user', 'date' or 'bot'.");a=new Date(c.date),t=new Date(i),a.getFullYear()===t.getFullYear()&&a.getMonth()===t.getMonth()&&a.getDate()===t.getDate()||"date"===c.sender||(r[o++]={sender:"date",message:n.day(new Date(c.date)),date:c.date}),r[o++]=c,i=c.date}return r}(e),o(e)}),[i]),t}function Ae(){var e=ye(),a=r.a.useRef(null),t=Le();return r.a.useEffect((function(){var e=a.current;e.scrollTo(0,e.scrollHeight),window.scrollTo(0,e.scrollHeight)}),[t]),r.a.createElement(M.a,{ref:a,className:e.messageListContainer},r.a.createElement(M.a,{display:"flex",flexDirection:"column"},t.map((function(a,t){return r.a.createElement(ce.a,{key:t,className:e.message+" "+e[a.sender]},r.a.createElement(L.a,{variant:"date"!==a.sender?"body1":"subtitle2",component:"h2"},a.message.split(/(\n|https?:\/\/\S+(?:\.\S+)+(?:\/\S*)*)/).reduce((function(e,a){return/https?:\/\/\S+(?:\.\S+)+(?:\/\S*)*/.test(a)?r.a.createElement(r.a.Fragment,null,e,r.a.createElement("a",{href:a},a)):/\n/.test(a)?r.a.createElement(r.a.Fragment,null,e,r.a.createElement("br",null)):r.a.createElement(r.a.Fragment,null,e,a)})),"date"!==a.sender?r.a.createElement("span",{className:e.miniTime},n.hour(new Date(a.date))):null))}))))}var Ue=se((function(e){var a=e.setTitle,t=ye();r.a.useEffect((function(){a("Conversa")}),[a]);var n=ke(),o=Object(c.a)(n,2),i=o[0],s=o[1];return r.a.createElement(ce.a,{elevation:2,className:t.root},r.a.createElement(qe,{isConnected:s}),r.a.createElement(Ae,null),r.a.createElement(Te,{sendMessage:i}))})),_e=[{title:"Quest\xf5es sobre o projeto",questions:[{question:"Como posso testar o Chatbot?",answer:"Para testar o chatbot basta abrir a p\xe1gina de conversa e                    voc\xea dever\xe1 receber uma mensagem do chatbot indicando algumas                    das a\xe7\xf5es dispon\xedveis. Fique \xe0 vontade para fazer uma pergunta                    ou enviar alguma solicita\xe7\xe3o, assim como voc\xea faria com                    atendentes humanos em um servi\xe7o de atendimento.",actions:[{text:"Ir para Chatbot",to:"/chatbot"}]},{question:"Que tipo de perguntas o chatbot \xe9 capaz de responder?",answer:"O chatbot visa responder quest\xf5es da mesma forma que                    atendentes humanos fariam em uma empresa de distribui\xe7\xe3o                    de energia el\xe9trica. Assim, \xe9 poss\xedvel realizar a\xe7\xf5es como:                    conferir situa\xe7\xe3o de uma conta passada e os d\xe9bitos                    pendentes, informar a central sobre quedas de energia ou                    consultrar a situa\xe7\xe3o de geradores em determinada \xe1rea,                    alterar informa\xe7\xf5es de cadastro, entre outras.",actions:[{text:"Ir para Chatbot",to:"/chatbot"}]},{question:"Como posso entrar em contato com os autores do projeto?",answer:"Na p\xe1gina referente \xe0 Equipe, \xe9 poss\xedvel clicar em cima da foto                    de um dos autores para expandir informa\xe7\xf5es mais detalhadas                    sobre o autor, incluindo informa\xe7\xf5es de contato.",actions:[{text:"Ver Equipe",to:"/team"}]},{question:"Quais tecnologias foram utilizadas no projeto?",answer:"Na p\xe1gina referente \xe0s tecnologias \xe9 poss\xedvel observar uma                    lista de tecnologias que foram utilizadas no desenvolvimento                    do projeto. Entre elas est\xe3o a linguagem JavaScript, que foi                    utilizada na constru\xe7\xe3o do front-end em conjunto com o React e                    o Material UI.                    J\xe1 os chatbots foram constru\xeddos em Python com base na biblioteca                    Rasa NLU. Por fim, a                    comunica\xe7\xe3o entre os servi\xe7os foi feita atrav\xe9s da biblioteca                    Socket.IO. ",actions:[{text:"Ver Tecnologias utilizadas",to:"/tech"}]},{question:"O projeto possui c\xf3digo de fonte aberto?",answer:"Sim! O projeto foi desenvolvido em duas etapas: o front-end                    e o back-end. O c\xf3digo de ambas est\xe3o dispon\xedveis na                    plataforma Github de forma totalmente livre. Para                    ver como acessar o c\xf3digo, basta abrir a p\xe1gina de                    informa\xe7\xf5es.",actions:[{text:"Ver p\xe1gina de informa\xe7\xf5es",to:"/info"}]}]},{title:"Quest\xf5es te\xf3ricas",questions:[{question:"Quais as vantagens do uso de um Chatbot?",answer:"Uma implementa\xe7\xe3o adequada de atendimento automatizado gera                    benef\xedcios tanto para as empresas quanto para os usu\xe1rios                    envolvidos.                    Do ponto de vista da empresa, os chatbots representam um                    modelo de atendimento altamente escal\xe1vel, que possibilita                    gera\xe7\xe3o de valor atrav\xe9s da redu\xe7\xe3o de gastos com centrais                    de atendimento. Esta economia pode ser realocada em recursos                    de outras \xe1reas a fim de melhorar a experi\xeancia dos                    consumidores e de atrair e satisfazer um p\xfablico mais                    jovem que est\xe1 acostumado com intera\xe7\xf5es mais humanas com                    a tecnologia.                    Do ponto de vista dos clientes, o sistema automatizado                    implica em uma redu\xe7\xe3o do tempo gasto com ferramentas de                    busca e a simplifica\xe7\xe3o do acesso a informa\xe7\xf5es e                    recomenda\xe7\xf5es."},{question:"O que \xe9 um Chatbot?",answer:"Um chatbot \xe9 um software capaz de simular conversas humanas,                   possibilitando comunica\xe7\xe3o entre pessoas e computadores com                    base em linguagem natural, possibilitnado que o computador                    reproduza o comportamento um ser humano.                    Eles funcionam com base em t\xe9cnicas de Intelig\xeancia Artificial,                   como Processamento de Linguagem Natural e Aprendizado de M\xe1quina                    e podem ser classificados em: declarativos, que s\xe3o baseados                    em regras e focam na execu\xe7\xe3o de apenas uma tarefa,                    e conversacionais, que s\xe3o mais sofisticados, utilizam mais                    t\xe9cnicas de aprendizado de m\xe1quina e podem funcionar como                    assistentes virtuais que fornecme sugest\xf5es aos usu\xe1rios e                    podem ser capazes de prever demandas."},{question:"O que \xe9 Processamento de Linguagem Natural (PLN)?",answer:"O Processamento de Linguagem Natural \xe9 uma \xe1rea de estudo                    da Intelig\xeancia Artificial                    que lida com a comunica\xe7\xe3o entre seres humanos e                    computadores atrav\xe9s das linguagens naturais, ou seja,                    as l\xednguas faladas pelos seres humanos.                    Segundo Russell e Norvig, as linguagens naturais se                    diferenciam das linguagens formais por, por exemplo, n\xe3o                    conterem um conjunto definido de cadeias, formadas a                    partir de uma gram\xe1tica com regras definidas,                    inclu\xedrem ambiguidade e mudarem constantemente.                    Por estes motivos, a modelagem de linguagens naturais \xe9                    mais consistente se feita com o uso de modelos estat\xedsticos                    no lugar de regras de produ\xe7\xe3o, como uma gram\xe1tica formal."},{question:"Quais t\xe9cnicas de PLN foram usadas no Chatbot?",answer:"O funcionamento do chatbot \xe9 muito complexo e envolve o                    uso de uma combina\xe7\xe3o de diferentes t\xe9cnicas para atingir                    um resultado satisfat\xf3rio. Tr\xeas das principais t\xe9cnicas                    presentes s\xe3o: Classifica\xe7\xe3o de Inten\xe7\xe3o, respons\xe1vel por                    reconhecer a inten\xe7\xe3o de uma frase de acordo com uma lista                    de possibilidades previamente definida, feita com base                    em m\xe9tricas de similaridade entre o texto digitado e textos                    utilizados durante treinamento; Extra\xe7\xe3o de Entidade, que                    trata da identifica\xe7\xe3o de termos espec\xedficos presentes em                    partes do texto, como por exemplo nome de uma pessoa, nome                    de um lugar ou documento de identifica\xe7\xe3o; Seletor de                    Respostas, respons\xe1vel por definir respostas adequadas de                    acordo com o fluxo da conversa."}]}],Fe=t(255),Re=t(243),We=t(245),Ve=t(246),Ge=t(244);var Je=se((function(e){var a=e.setTitle;return r.a.useEffect((function(){a("D\xfavidas comuns")}),[a]),_e.map((function(e,a){return r.a.createElement(M.a,{marginBottom:2,marginTop:2},e.questions.map((function(e,a){return r.a.createElement(Fe.a,{key:e.question},r.a.createElement(Re.a,{expandIcon:r.a.createElement(Ge.a,null)},r.a.createElement(L.a,{variant:"subtitle2"},e.question)),r.a.createElement(We.a,null,r.a.createElement(L.a,{color:"textSecondary"},e.answer)),e.actions?r.a.createElement(Ve.a,null,e.actions.map((function(e,a){return r.a.createElement(le.a,{key:e.text,size:"small",color:"primary",component:l.b,to:e.to},e.text)}))):null)})))}))})),Xe=[{name:"JavaScript",photo:"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"},{name:"React",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png"},{name:"Material UI",photo:"https://material-ui.com/static/logo.svg"},{name:"Socket.IO",photo:"https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"},{name:"Python",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1024px-Python.svg.png"},{name:"Rasa NLU",photo:"https://d33wubrfki0l68.cloudfront.net/70e7a88adf729f18dd46e5010660d16a197b9edb/0004c/static/ef3444fc36faec97ae8bd7bfb568996d/rasa-logo-square.svg"}];var Qe=se((function(e){var a=e.setTitle,t=re();return r.a.useEffect((function(){a("Tecnologias")}),[a]),r.a.createElement(M.a,{className:t.frame,padding:2},Xe.map((function(e){return r.a.createElement(pe.a,{className:t.card,key:e.name},r.a.createElement(we.a,null,r.a.createElement(fe.a,{className:t.media,image:e.photo,title:e.name}),r.a.createElement(ge.a,null,r.a.createElement(L.a,{gutterBottom:!0,variant:"h6",component:"h2"},e.name))))})))}));var He=se((function(e){var a=e.setTitle,t=re();return r.a.useEffect((function(){a("P\xe1gina n\xe3o encontrada")}),[a]),r.a.createElement(ce.a,{elevation:2,className:t.content},r.a.createElement(L.a,{variant:"h2",color:"error",gutterBottom:!0},"P\xe1gina n\xe3o encontrada"),r.a.createElement(L.a,{paragraph:!0,align:"justify",variant:"subtitle1",color:"error"},"Utilize o menu lateral para navegar apenas por p\xe1ginas v\xe1lidas."),r.a.createElement(le.a,{color:"primary",component:l.b,to:"/home"},"Voltar para o in\xedcio"))}));function Ye(e){return r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/home"},r.a.createElement(me,e)),r.a.createElement(v.b,{exact:!0,path:"/questions"},r.a.createElement(Je,e)),r.a.createElement(v.b,{exact:!0,path:"/tech"},r.a.createElement(Qe,e)),r.a.createElement(v.b,{exact:!0,path:"/info"},r.a.createElement(de,e)),r.a.createElement(v.b,{exact:!0,path:"/team"},r.a.createElement(Se,e)),r.a.createElement(v.b,{exact:!0,path:"/chatbot"},r.a.createElement(Ue,e)),r.a.createElement(v.b,{exact:!0,path:"/404"},r.a.createElement(He,e)),r.a.createElement(v.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(v.a,{to:"/404"}))}function Ke(){var e=function(e){var a=Object(o.useState)(e),t=Object(c.a)(a,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){document.title="Chatbot"+(n?" - "+n:"")}),[n]),[n,r]}(""),a=Object(c.a)(e,2),t=a[0],n=a[1],i=function(){var e=r.a.useState(Object(u.a)(b)),a=Object(c.a)(e,2),t=a[0],n=a[1],o=r.a.useState(window.innerWidth),i=Object(c.a)(o,2),s=i[0],l=i[1];r.a.useEffect((function(){function e(){l(window.innerWidth)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r.a.useEffect((function(){document.querySelector("meta[name=theme-color]").setAttribute("content",t.palette.background.header)}),[t]);var m=s<t.breakpoints.values.sm;return[t,m,function(){n(Object(u.a)("light"===t.palette.type?E:b))}]}(),s=Object(c.a)(i,3),p=s[0],f=s[1],g=s[2];return r.a.createElement(m.a,{theme:p},r.a.createElement(d.a,null),r.a.createElement(l.a,{basename:"/chat-front-end"},r.a.createElement(oe,{title:t,switchTheme:g,isMobile:f},r.a.createElement(Ye,{setTitle:n}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $e=t(49),Ze=[],ea=Object($e.b)({messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_MESSAGE":return[].concat(Object(Me.a)(e),[a.payload]);default:return e}}}),aa=Object($e.c)(ea,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(xe.a,{store:aa},r.a.createElement(Ke,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.3d2baaf4.chunk.js.map