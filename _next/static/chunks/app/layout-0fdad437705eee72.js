(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{82549:function(e,t,a){Promise.resolve().then(a.bind(a,52560))},20751:function(e,t,a){"use strict";var s=a(57437);a(2265);var n=a(87415);a(83343),t.Z=e=>{let{textToCopy:t,title:a}=e,handleCopyText=e=>{try{navigator.clipboard.writeText(e),n.Am.success("已成功复制文本: ".concat(e),{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,theme:"light",className:"text-sm"})}catch(e){console.error("复制文本出错:",e)}};return(0,s.jsxs)("a",{onClick:()=>handleCopyText(t),className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",children:[(0,s.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:[a,(0,s.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:t})]})}},52560:function(e,t,a){"use strict";let s,n;a.r(t),a.d(t,{default:function(){return RootLayout}});var r=a(57437);a(72853);var l=a(87415),o=a(24033),c=a(2265),i=a(18743),d=a(53936),m=a(993),h=a(96689),u=a(19874),x=a(22635),g=a(16691),f=a.n(g);let p=[{name:"私钥模式",href:"/server_evm?chain=evm"},{name:"钱包签名模式",href:"/frontend_evm?chain=evm"}];function classNames(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}function Navbar(e){let{user:t}=e,a=(0,o.usePathname)();return(0,o.useSearchParams)(),(0,r.jsx)(i.p,{as:"nav",className:"bg-white shadow-sm",children:e=>{let{open:s}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex h-16 justify-between",children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"flex flex-shrink-0 items-center",children:(0,r.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",className:"text-gray-100",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{width:"100%",height:"100%",rx:"16",fill:"currentColor"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z",fill:"black"})]})}),(0,r.jsx)("div",{className:"hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8",children:p.map(e=>(0,r.jsx)("a",{href:e.href,className:classNames(a===e.href?"border-slate-500 text-gray-900":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"),"aria-current":a===e.href?"page":void 0,children:e.name},e.name))})]}),(0,r.jsx)("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:(0,r.jsxs)(d.v,{as:"div",className:"relative ml-3",children:[(0,r.jsx)("div",{children:(0,r.jsxs)(d.v.Button,{className:"flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",children:[(0,r.jsx)("span",{className:"mt-2 mr-8 start-1/3",children:"Open user menu"}),(0,r.jsx)(f(),{className:"h-8 w-8 rounded-full",src:"/logos/leerob.webp",height:32,width:32,alt:"".concat((null==t?void 0:t.name)||"placeholder"," avatar")})]})}),(0,r.jsx)(m.u,{as:c.Fragment,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,r.jsx)(d.v.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:t?(0,r.jsx)(d.v.Item,{children:e=>{let{active:t}=e;return(0,r.jsx)("button",{className:classNames(t?"bg-gray-100":"","flex w-full px-4 py-2 text-sm text-gray-700"),onClick:()=>(0,x.w7)(),children:"Sign out"})}}):(0,r.jsx)(d.v.Item,{children:e=>{let{active:t}=e;return(0,r.jsx)("button",{className:classNames(t?"bg-gray-100":"","flex w-full px-4 py-2 text-sm text-gray-700"),onClick:()=>(0,x.zB)("github"),children:"Sign in"})}})})})]})}),(0,r.jsx)("div",{className:"-mr-2 flex items-center sm:hidden",children:(0,r.jsxs)(i.p.Button,{className:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",children:[(0,r.jsx)("span",{className:"sr-only",children:"Open main menu"}),s?(0,r.jsx)(h.Z,{className:"block h-6 w-6","aria-hidden":"true"}):(0,r.jsx)(u.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),(0,r.jsxs)(i.p.Panel,{className:"sm:hidden",children:[(0,r.jsx)("div",{className:"space-y-1 pt-2 pb-3",children:p.map(e=>(0,r.jsx)(i.p.Button,{as:"a",href:e.href,className:classNames(a===e.href?"bg-slate-50 border-slate-500 text-slate-700":"border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800","block pl-3 pr-4 py-2 border-l-4 text-base font-medium"),"aria-current":a===e.href?"page":void 0,children:e.name},e.name))}),(0,r.jsx)("div",{className:"border-t border-gray-200 pt-4 pb-3",children:t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex items-center px-4",children:[(0,r.jsx)("div",{className:"flex-shrink-0",children:(0,r.jsx)(f(),{className:"h-8 w-8 rounded-full",src:t.image,height:32,width:32,alt:"".concat(t.name," avatar")})}),(0,r.jsxs)("div",{className:"ml-3",children:[(0,r.jsx)("div",{className:"text-base font-medium text-gray-800",children:t.name}),(0,r.jsx)("div",{className:"text-sm font-medium text-gray-500",children:t.email})]})]}),(0,r.jsx)("div",{className:"mt-3 space-y-1",children:(0,r.jsx)("button",{onClick:()=>(0,x.w7)(),className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",children:"Sign out"})})]}):(0,r.jsx)("div",{className:"mt-3 space-y-1",children:(0,r.jsx)("button",{onClick:()=>(0,x.zB)("github"),className:"flex w-full px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",children:"Sign in"})})})]})]})}})}async function Nav(){return(0,r.jsx)(Navbar,{user:""})}var v=a(87951),b=a(93379);let y=[{name:"\uD83D\uDC49BTC交易加速\uD83D\uDC48",href:"/frontend_btc?chain=btc"},{name:"\uD83D\uDC49符文蚀刻\uD83D\uDC48",href:"/rune_btc?chain=btc"}];function WalletNavbar_classNames(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}function WalletNavbar(e){let{user:t}=e,{wallet:a,SetWalletInfo:l,GetLocalWallet:x,SaveWalletInfo:g,ClearLocalWallet:p}=(0,v.Os)(),j=(0,o.usePathname)();(0,o.useSearchParams)();let[w,N]=(0,c.useState)({connected:"",walletType:"",address:"",pubkey:""}),[k,C]=(0,c.useState)(!1),[_,S]=(0,c.useState)(!1),[H,L]=(0,c.useState)(!1),[I,T]=(0,c.useState)("0.0"),handleConnectButtonClick=async e=>{try{console.log("connect:",e),await handleAccounts(e)}catch(e){console.error("Error handleConnectButtonClick data:",e)}},W=(0,c.useRef)({accounts:[],mainAccount:""}),B=W.current,handleAccounts=async e=>{try{let t,a,s;if("unisat"===e){s=window.unisat;let e=await s.requestAccounts();e?(t=e[0],a=await s.getPublicKey()):(0,b.bW)("连接Unisat钱包失败，请检查插件安装或刷新页面重试!",5e3)}else if("okxwallet"===e){s=window.okxwallet.bitcoin;let e=await s.connect();e?(a=e.compressedPublicKey,t=e.address):(0,b.bW)("连接OKX钱包失败，请检查插件安装或刷新页面重试!",5e3)}B.mainAccount=t;let n={connected:"1",walletType:e,address:t,pubkey:a};await l(n),await g(n)}catch(e){console.error("Error handleAccounts:",e)}},signOut=async()=>{await p()},handleAccountsChanged=e=>{console.log(e),handleAccounts("unisat").then()};return(0,c.useEffect)(()=>{s=window.unisat;let checkUnisat=async()=>{let e=window.unisat;for(let t=1;t<5&&!e;t+=1)await new Promise(e=>setTimeout(e,50*t)),e=window.unisat;if(e)console.log("Unisat is installed!"),C(!0);else if(!e)return};checkUnisat().then(),void 0!==window.okxwallet&&(console.log("OKX is installed!"),S(!0),n=window.okxwallet),s.on("accountsChanged",handleAccountsChanged),n.bitcoin.on("accountChanged",e=>{console.log(e),handleAccounts("okxwallet")});try{x().then(),""!==a.walletType&&handleAccounts(a.walletType).then()}catch(e){}return()=>{s.removeListener("accountsChanged",handleAccountsChanged)}},[]),(0,r.jsx)(i.p,{as:"nav",className:"bg-white shadow-sm",children:e=>{let{open:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:{fontWeight:"bold"},className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex h-16 justify-between",children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"flex flex-shrink-0 items-center",children:(0,r.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",className:"text-gray-100",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{width:"100%",height:"100%",rx:"16",fill:"currentColor"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z",fill:"black"})]})}),(0,r.jsx)("div",{className:"hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8",children:y.map(e=>(0,r.jsx)("a",{href:e.href,className:WalletNavbar_classNames(j===e.href?"border-slate-500 text-gray-900":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"),"aria-current":j===e.href?"page":void 0,children:e.name},e.name))})]}),(0,r.jsx)("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:(0,r.jsxs)(d.v,{as:"div",className:"relative ml-3",children:[(0,r.jsx)("div",{children:(0,r.jsxs)(d.v.Button,{style:{border:"1px solid black",padding:"5px 10px",borderRadius:"5px"},className:"flex bg-primary  rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",children:[(0,r.jsx)("span",{className:"mt-2 mr-4 start-1/3 btn-primary",children:a.connected?a.address:"连接钱包"}),"1"===a.connected?(0,r.jsx)(f(),{className:"h-8 w-8 rounded-full  btn-sm mx-2",src:"/leerob.webp",height:32,width:32,alt:"placeholder avatar"}):""]})}),(0,r.jsx)(m.u,{as:c.Fragment,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,r.jsxs)(d.v.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:["1"===a.connected?(0,r.jsx)(d.v.Item,{children:e=>{let{active:t}=e;return(0,r.jsxs)("button",{className:WalletNavbar_classNames(t?"bg-gray-100":"","flex w-full px-4 py-2 text-sm text-gray-700"),onClick:()=>signOut(),children:["断开",a.walletType,"钱包"]})}}):(0,r.jsx)(d.v.Item,{children:e=>{let{active:t}=e;return(0,r.jsxs)("button",{className:WalletNavbar_classNames(t?"bg-gray-100":"","flex w-full px-4 py-2 text-sm text-gray-700"),onClick:()=>handleConnectButtonClick("unisat"),children:["Unisat ",k?"":"(未安装)"]})}}),a.connected?"":(0,r.jsx)(d.v.Item,{children:e=>{let{active:t}=e;return(0,r.jsxs)("button",{className:WalletNavbar_classNames(t?"bg-gray-100":"","flex w-full px-4 py-2 text-sm text-gray-700"),onClick:()=>handleConnectButtonClick("okxwallet"),children:["OKX Wallet",_?"":"(未安装)"]})}})]})})]})}),(0,r.jsx)("div",{className:"-mr-2 flex items-center sm:hidden",children:(0,r.jsxs)(i.p.Button,{className:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",children:[(0,r.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?(0,r.jsx)(h.Z,{className:"block h-6 w-6","aria-hidden":"true"}):(0,r.jsx)(u.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})})})}})}async function BtcNav(){return(0,r.jsx)(WalletNavbar,{user:""})}var j=a(37432),w=a(98706),N=a(20751),k=a(70337),C=a.n(k),app_XIcon=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"1.253999948501587 2.25 21.572999954223633 19.5",...e,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),_=a(14701),S=a(61396),H=a.n(S);function Logo(){return(0,r.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",className:"text-gray-100",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{width:"100%",height:"100%",rx:"16",fill:"currentColor"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z",fill:"black"})]})}var L=a(33844),I=a(79037),T=a(19066);let Header=()=>{let{user:e,SetUserInfo:t,GetLocalUser:a,SaveUserInfo:s,HandleUserMy:n,ClearLocalUser:l}=(0,w.a)();(0,L.E)({onConnect(e){console.log("Connected!",e),HandleConnect(e)},onDisconnect(){console.log("Disconnected!"),l().then()}});let{address:o,isReconnecting:i,isConnected:d}=(0,I.m)(),{openAccountModal:m}=(0,_.Ap)(),[h,u]=c.useState("Login kejiyangjia Tools!"),{signMessage:x}=(0,T.Q)(),HandleSign=async a=>{console.log("HandleSign:",o,a);let n={...e,username:null==o?void 0:o.toString(),signature:a};t(n),await s(n)},HandleConnect=t=>{console.log("HandleConnect:",t.address,e.username),t.address!==e.username&&(console.log("HandleConnect not same adddress"),x({message:h},{onSuccess:e=>{HandleSign(e).then(()=>{console.log("新的钱包签名成功!")}).catch(e=>{console.error("Error in HandleSign:",e)})}}))};return(0,c.useEffect)(()=>{try{a().then()}catch(e){}return()=>{}},[]),(0,r.jsxs)("div",{className:"flex h-[60px] items-center border-b px-5",children:[(0,r.jsxs)(H(),{className:"flex items-center gap-2 font-semibold",href:"",onClick:()=>console.log(e),children:[(0,r.jsx)(Logo,{}),(0,r.jsx)("span",{className:"",children:"交易加速工具"})]}),(0,r.jsx)("div",{className:"absolute start-2/3",children:(0,r.jsx)(_.NL,{})})]})};var W=a(57042);function NavItem(e){let{href:t,children:a}=e,s=(0,o.usePathname)();return(0,r.jsx)(H(),{href:t,className:(0,W.Z)("flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900  dark:text-gray-50 dark:hover:text-gray-50",{"bg-gray-100 dark:bg-gray-800":s===t}),children:a})}let Sidebar=()=>{let e=(0,o.useSearchParams)();return(0,r.jsx)("div",{className:"hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40",children:(0,r.jsxs)("div",{className:"flex h-full max-h-screen flex-col gap-2",children:[(0,r.jsx)(Header,{}),(0,r.jsx)("div",{className:"flex-1 overflow-auto py-2",children:(0,r.jsxs)("nav",{className:"grid items-start px-4 text-sm font-medium",children:[(0,r.jsxs)(NavItem,{href:"/?chain=btc",children:["Bitcoin工具","btc"===e.get("chain")?(0,r.jsx)("span",{className:"absolute start-1/3",children:"BTC的tx加速主要原理是一笔支持RBF的交易，用新费率的tx替换旧tx，tx数据不变，加速tx确认。"}):""]}),(0,r.jsxs)(NavItem,{href:"/?chain=evm",children:["EVM链工具","evm"===e.get("chain")?(0,r.jsx)("span",{className:"absolute start-1/3",children:"EVM的tx加速替换主要原理是用同nonce更高的gas费替换掉低gas费的tx，主要用于解决卡链等问题。"}):""]}),(0,r.jsx)(NavItem,{href:"/usage",children:"说明"})]})})]})})};a(8780);var B=a(36386),O=a(3289),P=a(55871),A=a(32138),U=a(81229),E=a(75404),Z=a(88301),D=a(5773),M=a(35085),R=a(14576),F=a(2087),q=a(3748),X=a(78908),z=a(38038);let G=(0,_.vX)({appName:"tools",projectId:"cca41cb349ce526d6eb3d3bcf7e568cb",wallets:[{groupName:"Popular",wallets:[B.P,O.c]},{groupName:"Other",wallets:[P.Z,A.p]}],chains:[E.R,Z.e,D.s,M.u,R.y,F.v,q.y],ssr:!0}),K=new X.S;function RootLayout(e){let{children:t}=e,a=(0,o.useSearchParams)();return(0,r.jsx)("html",{lang:"en",className:"h-full bg-gray-50",children:(0,r.jsx)("body",{className:"",children:(0,r.jsx)(U.F,{config:G,children:(0,r.jsx)(z.aH,{client:K,children:(0,r.jsxs)(_.pj,{showRecentTransactions:!0,children:[(0,r.jsx)(w.f,{children:(0,r.jsxs)(v.G5,{children:[(0,r.jsx)(j.ZP,{}),(0,r.jsx)(Sidebar,{}),(0,r.jsx)(c.Suspense,{children:"evm"===a.get("chain")?(0,r.jsx)(Nav,{}):(0,r.jsx)(BtcNav,{})}),t,(0,r.jsx)(l.Ix,{})]})}),(0,r.jsxs)("div",{className:"absolute start-1/3 mt-32 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left",children:[(0,r.jsx)(N.Z,{textToCopy:"0x7AF510397373bf5a39046e5C975C099929999999",title:"EVM"}),(0,r.jsx)(N.Z,{textToCopy:"bc1p78hjqx7dq30wxh3q5jjc8x5fs3qfgv58pp20yegkajghf8mqakls30t3m0",title:"BTC"}),(0,r.jsx)("a",{target:"_blank",href:"https://github.com/kejiyangjia",children:(0,r.jsx)("img",{className:"".concat(C().logo," mt-2"),src:"/logos/github.svg",alt:"github Logo",width:"64",height:"32"})}),(0,r.jsx)("a",{target:"_blank",href:"https://twitter.com/kejiyangjia",children:(0,r.jsx)(app_XIcon,{className:"".concat(C().logo," mt-6"),width:"64",height:"32"})})]})]})})})})})}},93379:function(e,t,a){"use strict";a.d(t,{_R:function(){return Sleep},bW:function(){return ToastError},xO:function(){return ToastSuccess},yW:function(){return ToastInfo}});var s=a(87415);a(83343);let ToastError=(e,t)=>{s.Am.error(e,{position:"top-center",autoClose:t,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,theme:"light",className:"text-sm"})},ToastSuccess=(e,t)=>{s.Am.success(e,{position:"top-center",autoClose:t,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,theme:"light",className:"text-sm"})},ToastInfo=(e,t)=>{s.Am.info(e,{position:"top-center",autoClose:t,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,theme:"light",className:"text-sm"})},Sleep=async e=>new Promise(t=>setTimeout(t,e))},87951:function(e,t,a){"use strict";a.d(t,{G5:function(){return WalletContextProvider},Os:function(){return useWallet},Uj:function(){return r},oc:function(){return l}});var s=a(57437),n=a(2265);let r="",l="https://btc.qk.cx",o=(0,n.createContext)({});function WalletContextProvider(e){let{children:t}=e,[a,r]=(0,n.useState)({connected:"",walletType:"",address:"",pubkey:""}),SetWalletInfo=async e=>{r(e)},GetLocalWallet=async()=>{Object.keys(a).forEach(e=>{let t=localStorage.getItem(e);t&&r(a=>({...a,[e]:t}))})},SaveWalletInfo=async e=>{Object.entries(e).map(e=>{let[t,a]=e;localStorage.setItem(t,a)})},HandleWalletMy=async(e,t)=>{r(a=>({...a,[e]:t}))},ClearLocalWallet=async()=>{Object.keys(a).forEach(e=>{localStorage.removeItem(e)}),r({connected:"",walletType:"",address:"",pubkey:""})};return(0,s.jsx)(o.Provider,{value:{wallet:a,SetWalletInfo,GetLocalWallet,SaveWalletInfo,HandleWalletMy,ClearLocalWallet},children:t})}function useWallet(){let e=(0,n.useContext)(o);if(!e)throw Error("useWallet must be used within a MyProvider");return e}},98706:function(e,t,a){"use strict";a.d(t,{a:function(){return useUser},f:function(){return UserContextProvider}});var s=a(57437),n=a(2265);let r=(0,n.createContext)({});function UserContextProvider(e){let{children:t}=e,[a,l]=(0,n.useState)({login:!1,signature:"",username:"",level:"",endTime:"",balance:""}),SetUserInfo=async e=>{l(e)},GetLocalUser=async()=>{Object.keys(a).forEach(e=>{let t=localStorage.getItem(e);t&&l(a=>({...a,[e]:t}))})},SaveUserInfo=async e=>{Object.entries(e).map(e=>{let[t,a]=e;localStorage.setItem(t,a)})},HandleUserMy=async(e,t)=>{await l(a=>({...a,[e]:t}))},ClearLocalUser=async()=>{Object.keys(a).forEach(e=>{localStorage.removeItem(e)}),l({login:!1,signature:"",username:"",level:"",endTime:"",balance:""})};return(0,s.jsx)(r.Provider,{value:{user:a,SetUserInfo,GetLocalUser,SaveUserInfo,HandleUserMy,ClearLocalUser},children:t})}function useUser(){let e=(0,n.useContext)(r);if(!e)throw Error("useWallet must be used within a MyProvider");return e}},72853:function(){},70337:function(e){e.exports={xicon:"Home_xicon__JuR3A",container:"Home_container__UZ9hw",main:"Home_main__IuyWW",footer:"Home_footer__SeeoX",title:"Home_title__A_ZDL",description:"Home_description__6Rag2",code:"Home_code__y56Hm",grid:"Home_grid__7YtmD",card:"Home_card__JuJkj",logo:"Home_logo___ogVH"}}},function(e){e.O(0,[9472,996,1950,2971,2472,1744],function(){return e(e.s=82549)}),_N_E=e.O()}]);