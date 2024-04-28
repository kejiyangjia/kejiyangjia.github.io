(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{82549:function(e,t,a){Promise.resolve().then(a.bind(a,52560))},20751:function(e,t,a){"use strict";var s=a(57437);a(2265);var n=a(87415);a(83343),t.Z=e=>{let{textToCopy:t,title:a}=e,handleCopyText=e=>{try{navigator.clipboard.writeText(e),n.Am.success("已成功复制文本: ".concat(e),{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,theme:"light",className:"text-sm"})}catch(e){console.error("复制文本出错:",e)}};return(0,s.jsxs)("a",{onClick:()=>handleCopyText(t),className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",children:[(0,s.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:[a,(0,s.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:t})]})}},52560:function(e,t,a){"use strict";let s;a.r(t),a.d(t,{default:function(){return RootLayout}});var n=a(57437);a(72853);var r=a(87415),l=a(24033),o=a(2265),c=a(18743),i=a(53936),d=a(993),m=a(96689),h=a(19874),u=a(22635),x=a(16691),g=a.n(x);let f=[{name:"私钥模式",href:"/server_evm?chain=evm"},{name:"钱包签名模式",href:"/frontend_evm?chain=evm"}];function classNames(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}function Navbar(e){let{user:t}=e,a=(0,l.usePathname)();return(0,l.useSearchParams)(),(0,n.jsx)(c.p,{as:"nav",className:"bg-white shadow-sm",children:e=>{let{open:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,n.jsxs)("div",{className:"flex h-16 justify-between",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"flex flex-shrink-0 items-center",children:(0,n.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",className:"text-gray-100",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("rect",{width:"100%",height:"100%",rx:"16",fill:"currentColor"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z",fill:"black"})]})}),(0,n.jsx)("div",{className:"hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8",children:f.map(e=>(0,n.jsx)("a",{href:e.href,className:classNames(a===e.href?"border-slate-500 text-gray-900":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"),"aria-current":a===e.href?"page":void 0,children:e.name},e.name))})]}),(0,n.jsx)("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:(0,n.jsxs)(i.v,{as:"div",className:"relative ml-3",children:[(0,n.jsx)("div",{children:(0,n.jsxs)(i.v.Button,{className:"flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",children:[(0,n.jsx)("span",{className:"mt-2 mr-8 start-1/3",children:"Open user menu"}),(0,n.jsx)(g(),{className:"h-8 w-8 rounded-full",src:"/logos/leerob.webp",height:32,width:32,alt:"".concat((null==t?void 0:t.name)||"placeholder"," avatar")})]})}),(0,n.jsx)(d.u,{as:o.Fragment,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,n.jsx)(i.v.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:t?(0,n.jsx)(i.v.Item,{children:e=>{let{active:t}=e;return(0,n.jsx)("button",{className:classNames(t?"bg-gray-100":"","flex w-full px-4 py-2 text-sm text-gray-700"),onClick:()=>(0,u.w7)(),children:"Sign out"})}}):(0,n.jsx)(i.v.Item,{children:e=>{let{active:t}=e;return(0,n.jsx)("button",{className:classNames(t?"bg-gray-100":"","flex w-full px-4 py-2 text-sm text-gray-700"),onClick:()=>(0,u.zB)("github"),children:"Sign in"})}})})})]})}),(0,n.jsx)("div",{className:"-mr-2 flex items-center sm:hidden",children:(0,n.jsxs)(c.p.Button,{className:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",children:[(0,n.jsx)("span",{className:"sr-only",children:"Open main menu"}),s?(0,n.jsx)(m.Z,{className:"block h-6 w-6","aria-hidden":"true"}):(0,n.jsx)(h.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),(0,n.jsxs)(c.p.Panel,{className:"sm:hidden",children:[(0,n.jsx)("div",{className:"space-y-1 pt-2 pb-3",children:f.map(e=>(0,n.jsx)(c.p.Button,{as:"a",href:e.href,className:classNames(a===e.href?"bg-slate-50 border-slate-500 text-slate-700":"border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800","block pl-3 pr-4 py-2 border-l-4 text-base font-medium"),"aria-current":a===e.href?"page":void 0,children:e.name},e.name))}),(0,n.jsx)("div",{className:"border-t border-gray-200 pt-4 pb-3",children:t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center px-4",children:[(0,n.jsx)("div",{className:"flex-shrink-0",children:(0,n.jsx)(g(),{className:"h-8 w-8 rounded-full",src:t.image,height:32,width:32,alt:"".concat(t.name," avatar")})}),(0,n.jsxs)("div",{className:"ml-3",children:[(0,n.jsx)("div",{className:"text-base font-medium text-gray-800",children:t.name}),(0,n.jsx)("div",{className:"text-sm font-medium text-gray-500",children:t.email})]})]}),(0,n.jsx)("div",{className:"mt-3 space-y-1",children:(0,n.jsx)("button",{onClick:()=>(0,u.w7)(),className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",children:"Sign out"})})]}):(0,n.jsx)("div",{className:"mt-3 space-y-1",children:(0,n.jsx)("button",{onClick:()=>(0,u.zB)("github"),className:"flex w-full px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",children:"Sign in"})})})]})]})}})}async function Nav(){return(0,n.jsx)(Navbar,{user:""})}var p=a(87951),v=a(93379);let b=[{name:"\uD83D\uDC49BTC交易加速\uD83D\uDC48",href:"/frontend_btc?chain=btc"},{name:"\uD83D\uDC49符文蚀刻\uD83D\uDC48",href:"/rune_btc?chain=btc"}];function WalletNavbar_classNames(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}function WalletNavbar(e){let{user:t}=e,{wallet:a,SetWalletInfo:r,GetLocalWallet:u,SaveWalletInfo:x,ClearLocalWallet:f}=(0,p.Os)(),y=(0,l.usePathname)();(0,l.useSearchParams)();let[j,w]=(0,o.useState)({connected:"",walletType:"",address:"",pubkey:""}),[N,k]=(0,o.useState)(!1),[C,_]=(0,o.useState)(!1),[S,H]=(0,o.useState)(!1),[L,I]=(0,o.useState)("0.0"),handleConnectButtonClick=async e=>{try{console.log("connect:",e),await handleAccounts(e)}catch(e){console.error("Error handleConnectButtonClick data:",e)}},T=(0,o.useRef)({accounts:[],mainAccount:""}),W=T.current,handleAccounts=async e=>{try{let t,a,s;if("unisat"===e){s=window.unisat;let e=await s.requestAccounts();e?(t=e[0],a=await s.getPublicKey()):(0,v.bW)("连接Unisat钱包失败，请检查插件安装或刷新页面重试!",5e3)}else if("okxwallet"===e){s=window.okxwallet.bitcoin;let e=await s.connect();e?(a=e.compressedPublicKey,t=e.address):(0,v.bW)("连接OKX钱包失败，请检查插件安装或刷新页面重试!",5e3)}W.mainAccount=t;let n={connected:"1",walletType:e,address:t,pubkey:a};await r(n),await x(n)}catch(e){console.error("Error handleAccounts:",e)}},signOut=async()=>{await f()},handleAccountsChanged=e=>{console.log(e),handleAccounts("unisat").then()};return(0,o.useEffect)(()=>{s=window.unisat;let checkUnisat=async()=>{let e=window.unisat;for(let t=1;t<5&&!e;t+=1)await new Promise(e=>setTimeout(e,50*t)),e=window.unisat;if(e)console.log("Unisat is installed!"),k(!0),e.on("accountsChanged",handleAccountsChanged);else if(!e)return};checkUnisat().then(),void 0!==window.okxwallet&&(console.log("OKX is installed!"),_(!0),window.okxwallet.bitcoin.on("accountChanged",e=>{console.log(e),handleAccounts("okxwallet")}));try{u().then(),""!==a.walletType&&handleAccounts(a.walletType).then()}catch(e){}return()=>{s.removeListener("accountsChanged",handleAccountsChanged)}},[]),(0,n.jsx)(c.p,{as:"nav",className:"bg-white shadow-sm",children:e=>{let{open:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{fontWeight:"bold"},className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,n.jsxs)("div",{className:"flex h-16 justify-between",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"flex flex-shrink-0 items-center",children:(0,n.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",className:"text-gray-100",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("rect",{width:"100%",height:"100%",rx:"16",fill:"currentColor"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z",fill:"black"})]})}),(0,n.jsx)("div",{className:"hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8",children:b.map(e=>(0,n.jsx)("a",{href:e.href,className:WalletNavbar_classNames(y===e.href?"border-slate-500 text-gray-900":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"),"aria-current":y===e.href?"page":void 0,children:e.name},e.name))})]}),(0,n.jsx)("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:(0,n.jsxs)(i.v,{as:"div",className:"relative ml-3",children:[(0,n.jsx)("div",{children:(0,n.jsxs)(i.v.Button,{style:{border:"1px solid black",padding:"5px 10px",borderRadius:"5px"},className:"flex bg-primary  rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",children:[(0,n.jsx)("span",{className:"mt-2 mr-4 start-1/3 btn-primary",children:a.connected?a.address:"连接钱包"}),"1"===a.connected?(0,n.jsx)(g(),{className:"h-8 w-8 rounded-full  btn-sm mx-2",src:"/leerob.webp",height:32,width:32,alt:"placeholder avatar"}):""]})}),(0,n.jsx)(d.u,{as:o.Fragment,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,n.jsxs)(i.v.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:["1"===a.connected?(0,n.jsx)(i.v.Item,{children:e=>{let{active:t}=e;return(0,n.jsxs)("button",{className:WalletNavbar_classNames(t?"bg-gray-100":"","flex w-full px-4 py-2 text-sm text-gray-700"),onClick:()=>signOut(),children:["断开",a.walletType,"钱包"]})}}):(0,n.jsx)(i.v.Item,{children:e=>{let{active:t}=e;return(0,n.jsxs)("button",{className:WalletNavbar_classNames(t?"bg-gray-100":"","flex w-full px-4 py-2 text-sm text-gray-700"),onClick:()=>handleConnectButtonClick("unisat"),children:["Unisat ",N?"":"(未安装)"]})}}),a.connected?"":(0,n.jsx)(i.v.Item,{children:e=>{let{active:t}=e;return(0,n.jsxs)("button",{className:WalletNavbar_classNames(t?"bg-gray-100":"","flex w-full px-4 py-2 text-sm text-gray-700"),onClick:()=>handleConnectButtonClick("okxwallet"),children:["OKX Wallet",C?"":"(未安装)"]})}})]})})]})}),(0,n.jsx)("div",{className:"-mr-2 flex items-center sm:hidden",children:(0,n.jsxs)(c.p.Button,{className:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",children:[(0,n.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?(0,n.jsx)(m.Z,{className:"block h-6 w-6","aria-hidden":"true"}):(0,n.jsx)(h.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})})})}})}async function BtcNav(){return(0,n.jsx)(WalletNavbar,{user:""})}var y=a(37432),j=a(98706),w=a(20751),N=a(70337),k=a.n(N),app_XIcon=e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"1.253999948501587 2.25 21.572999954223633 19.5",...e,children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),C=a(14701),_=a(61396),S=a.n(_);function Logo(){return(0,n.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",className:"text-gray-100",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("rect",{width:"100%",height:"100%",rx:"16",fill:"currentColor"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z",fill:"black"})]})}var H=a(33844),L=a(79037),I=a(19066);let Header=()=>{let{user:e,SetUserInfo:t,GetLocalUser:a,SaveUserInfo:s,HandleUserMy:r,ClearLocalUser:l}=(0,j.a)();(0,H.E)({onConnect(e){console.log("Connected!",e),HandleConnect(e)},onDisconnect(){console.log("Disconnected!"),l().then()}});let{address:c,isReconnecting:i,isConnected:d}=(0,L.m)(),{openAccountModal:m}=(0,C.Ap)(),[h,u]=o.useState("Login kejiyangjia Tools!"),{signMessage:x}=(0,I.Q)(),HandleSign=async a=>{console.log("HandleSign:",c,a);let n={...e,username:null==c?void 0:c.toString(),signature:a};t(n),await s(n)},HandleConnect=t=>{console.log("HandleConnect:",t.address,e.username),t.address!==e.username&&(console.log("HandleConnect not same adddress"),x({message:h},{onSuccess:e=>{HandleSign(e).then(()=>{console.log("新的钱包签名成功!")}).catch(e=>{console.error("Error in HandleSign:",e)})}}))};return(0,o.useEffect)(()=>{try{a().then()}catch(e){}return()=>{}},[]),(0,n.jsxs)("div",{className:"flex h-[60px] items-center border-b px-5",children:[(0,n.jsxs)(S(),{className:"flex items-center gap-2 font-semibold",href:"",onClick:()=>console.log(e),children:[(0,n.jsx)(Logo,{}),(0,n.jsx)("span",{className:"",children:"交易加速工具"})]}),(0,n.jsx)("div",{className:"absolute start-2/3",children:(0,n.jsx)(C.NL,{})})]})};var T=a(57042);function NavItem(e){let{href:t,children:a}=e,s=(0,l.usePathname)();return(0,n.jsx)(S(),{href:t,className:(0,T.Z)("flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900  dark:text-gray-50 dark:hover:text-gray-50",{"bg-gray-100 dark:bg-gray-800":s===t}),children:a})}let Sidebar=()=>{let e=(0,l.useSearchParams)();return(0,n.jsx)("div",{className:"hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40",children:(0,n.jsxs)("div",{className:"flex h-full max-h-screen flex-col gap-2",children:[(0,n.jsx)(Header,{}),(0,n.jsx)("div",{className:"flex-1 overflow-auto py-2",children:(0,n.jsxs)("nav",{className:"grid items-start px-4 text-sm font-medium",children:[(0,n.jsxs)(NavItem,{href:"/?chain=btc",children:["Bitcoin工具","btc"===e.get("chain")?(0,n.jsx)("span",{className:"absolute start-1/3",children:"BTC的tx加速主要原理是一笔支持RBF的交易，用新费率的tx替换旧tx，tx数据不变，加速tx确认。"}):""]}),(0,n.jsxs)(NavItem,{href:"/?chain=evm",children:["EVM链工具","evm"===e.get("chain")?(0,n.jsx)("span",{className:"absolute start-1/3",children:"EVM的tx加速替换主要原理是用同nonce更高的gas费替换掉低gas费的tx，主要用于解决卡链等问题。"}):""]}),(0,n.jsx)(NavItem,{href:"/usage",children:"说明"})]})})]})})};a(8780);var W=a(36386),B=a(3289),O=a(55871),P=a(32138),A=a(81229),U=a(75404),E=a(88301),Z=a(5773),D=a(35085),M=a(14576),R=a(2087),F=a(3748),q=a(78908),X=a(38038);let z=(0,C.vX)({appName:"tools",projectId:"cca41cb349ce526d6eb3d3bcf7e568cb",wallets:[{groupName:"Popular",wallets:[W.P,B.c]},{groupName:"Other",wallets:[O.Z,P.p]}],chains:[U.R,E.e,Z.s,D.u,M.y,R.v,F.y],ssr:!0}),G=new q.S;function RootLayout(e){let{children:t}=e,a=(0,l.useSearchParams)();return(0,n.jsx)("html",{lang:"en",className:"h-full bg-gray-50",children:(0,n.jsx)("body",{className:"",children:(0,n.jsx)(A.F,{config:z,children:(0,n.jsx)(X.aH,{client:G,children:(0,n.jsxs)(C.pj,{showRecentTransactions:!0,children:[(0,n.jsx)(j.f,{children:(0,n.jsxs)(p.G5,{children:[(0,n.jsx)(y.ZP,{}),(0,n.jsx)(Sidebar,{}),(0,n.jsx)(o.Suspense,{children:"evm"===a.get("chain")?(0,n.jsx)(Nav,{}):(0,n.jsx)(BtcNav,{})}),t,(0,n.jsx)(r.Ix,{})]})}),(0,n.jsxs)("div",{className:"absolute start-1/3 mt-32 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left",children:[(0,n.jsx)(w.Z,{textToCopy:"0x7AF510397373bf5a39046e5C975C099929999999",title:"EVM"}),(0,n.jsx)(w.Z,{textToCopy:"bc1p78hjqx7dq30wxh3q5jjc8x5fs3qfgv58pp20yegkajghf8mqakls30t3m0",title:"BTC"}),(0,n.jsx)("a",{target:"_blank",href:"https://github.com/kejiyangjia",children:(0,n.jsx)("img",{className:"".concat(k().logo," mt-2"),src:"/logos/github.svg",alt:"github Logo",width:"64",height:"32"})}),(0,n.jsx)("a",{target:"_blank",href:"https://twitter.com/kejiyangjia",children:(0,n.jsx)(app_XIcon,{className:"".concat(k().logo," mt-6"),width:"64",height:"32"})})]})]})})})})})}},93379:function(e,t,a){"use strict";a.d(t,{_R:function(){return Sleep},bW:function(){return ToastError},xO:function(){return ToastSuccess},yW:function(){return ToastInfo}});var s=a(87415);a(83343);let ToastError=(e,t)=>{s.Am.error(e,{position:"top-center",autoClose:t,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,theme:"light",className:"text-sm"})},ToastSuccess=(e,t)=>{s.Am.success(e,{position:"top-center",autoClose:t,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,theme:"light",className:"text-sm"})},ToastInfo=(e,t)=>{s.Am.info(e,{position:"top-center",autoClose:t,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,theme:"light",className:"text-sm"})},Sleep=async e=>new Promise(t=>setTimeout(t,e))},87951:function(e,t,a){"use strict";a.d(t,{G5:function(){return WalletContextProvider},Os:function(){return useWallet},Uj:function(){return r},oc:function(){return l}});var s=a(57437),n=a(2265);let r="",l="https://btc.qk.cx",o=(0,n.createContext)({});function WalletContextProvider(e){let{children:t}=e,[a,r]=(0,n.useState)({connected:"",walletType:"",address:"",pubkey:""}),SetWalletInfo=async e=>{r(e)},GetLocalWallet=async()=>{Object.keys(a).forEach(e=>{let t=localStorage.getItem(e);t&&r(a=>({...a,[e]:t}))})},SaveWalletInfo=async e=>{Object.entries(e).map(e=>{let[t,a]=e;localStorage.setItem(t,a)})},HandleWalletMy=async(e,t)=>{r(a=>({...a,[e]:t}))},ClearLocalWallet=async()=>{Object.keys(a).forEach(e=>{localStorage.removeItem(e)}),r({connected:"",walletType:"",address:"",pubkey:""})};return(0,s.jsx)(o.Provider,{value:{wallet:a,SetWalletInfo,GetLocalWallet,SaveWalletInfo,HandleWalletMy,ClearLocalWallet},children:t})}function useWallet(){let e=(0,n.useContext)(o);if(!e)throw Error("useWallet must be used within a MyProvider");return e}},98706:function(e,t,a){"use strict";a.d(t,{a:function(){return useUser},f:function(){return UserContextProvider}});var s=a(57437),n=a(2265);let r=(0,n.createContext)({});function UserContextProvider(e){let{children:t}=e,[a,l]=(0,n.useState)({login:!1,signature:"",username:"",level:"",endTime:"",balance:""}),SetUserInfo=async e=>{l(e)},GetLocalUser=async()=>{Object.keys(a).forEach(e=>{let t=localStorage.getItem(e);t&&l(a=>({...a,[e]:t}))})},SaveUserInfo=async e=>{Object.entries(e).map(e=>{let[t,a]=e;localStorage.setItem(t,a)})},HandleUserMy=async(e,t)=>{await l(a=>({...a,[e]:t}))},ClearLocalUser=async()=>{Object.keys(a).forEach(e=>{localStorage.removeItem(e)}),l({login:!1,signature:"",username:"",level:"",endTime:"",balance:""})};return(0,s.jsx)(r.Provider,{value:{user:a,SetUserInfo,GetLocalUser,SaveUserInfo,HandleUserMy,ClearLocalUser},children:t})}function useUser(){let e=(0,n.useContext)(r);if(!e)throw Error("useWallet must be used within a MyProvider");return e}},72853:function(){},70337:function(e){e.exports={xicon:"Home_xicon__JuR3A",container:"Home_container__UZ9hw",main:"Home_main__IuyWW",footer:"Home_footer__SeeoX",title:"Home_title__A_ZDL",description:"Home_description__6Rag2",code:"Home_code__y56Hm",grid:"Home_grid__7YtmD",card:"Home_card__JuJkj",logo:"Home_logo___ogVH"}}},function(e){e.O(0,[9472,996,1950,2971,2472,1744],function(){return e(e.s=82549)}),_N_E=e.O()}]);