(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8665],{46740:function(e,t,n){"use strict";n.d(t,{Dx:function(){return c.Z},Zb:function(){return a.Z},jb:function(){return l.Z},kC:function(){return s.Z},rj:function(){return r.Z},xv:function(){return o.Z}});var a=n(392),s=n(66134),r=n(87456),l=n(11275),o=n(53415),c=n(82630)},16714:function(e,t,n){Promise.resolve().then(n.bind(n,31488))},20751:function(e,t,n){"use strict";var a=n(57437);n(2265);var s=n(87415);n(83343),t.Z=e=>{let{textToCopy:t,title:n}=e,handleCopyText=e=>{try{navigator.clipboard.writeText(e),s.Am.success("已成功复制文本: ".concat(e),{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,theme:"light",className:"text-sm"})}catch(e){console.error("复制文本出错:",e)}};return(0,a.jsxs)("a",{onClick:()=>handleCopyText(t),className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:[n,(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:t})]})}},34039:function(e,t,n){"use strict";n.d(t,{Sf:function(){return HexPSBT2Tx},iF:function(){return s}});var a=n(99301);let s="/pushTX",HexPSBT2Tx=async e=>{let t=a._B.fromHex(e);return await t.extractTransaction().toHex()}},94716:function(e,t,n){"use strict";let a;n.d(t,{Z:function(){return BTCFee}});var s=n(57437),r=n(2265),l=n(46740);function BTCFee(){let[e,t]=(0,r.useState)([{category:"低优先级",value:Math.ceil(0),tag:"聪/字节"},{category:"中优先级",value:Math.ceil(0),tag:"聪/字节"},{category:"高优先级",value:Math.ceil(0),tag:"聪/字节"},{category:"建议费率",value:Math.ceil(0),tag:"聪/字节"}]),SetFeeData=e=>{let n=[{category:"低优先级",value:Math.ceil(e.hourFee),tag:"聪/字节"},{category:"中优先级",value:Math.ceil(e.halfHourFee),tag:"聪/字节"},{category:"高优先级",value:Math.ceil(e.fastestFee),tag:"聪/字节"},{category:"建议费率(99%会被打包)",value:e.feeRange.length>2?Math.ceil(e.feeRange[2]):Math.ceil(e.feeRange[1]),tag:"聪/字节"}];t(n)};return(0,r.useEffect)(()=>{let e=new WebSocket("wss://mempool.space/api/v1/ws");return e.onopen=()=>{console.log("WebSocket 连接已建立。"),e.send('{"action":"init"}'),e.send('{"action":"want","data":["blocks","stats","mempool-blocks","live-2h-chart"]}'),e.send('{"track-mempool-block":0}')},e.onmessage=e=>{if(e.data.includes("mempool-blocks")){a=JSON.parse(e.data);let t={fastestFee:a.fees.fastestFee,halfHourFee:a.fees.halfHourFee,hourFee:a.fees.hourFee,economyFee:a.fees.economyFee,feeRange:a["mempool-blocks"][0].feeRange};SetFeeData(t)}},e.onclose=()=>{console.log("WebSocket 连接已关闭。")},()=>{e.close()}},[]),(0,s.jsx)(l.rj,{numItemsSm:2,numItemsLg:4,className:"gap-6",children:e.map(e=>(0,s.jsxs)(l.Zb,{children:[(0,s.jsx)(l.Dx,{children:e.category}),(0,s.jsx)("br",{}),(0,s.jsxs)(l.kC,{justifyContent:"start",alignItems:"baseline",className:"space-x-2",children:[(0,s.jsx)(l.jb,{children:e.value}),(0,s.jsx)(l.xv,{children:e.tag})]}),(0,s.jsxs)(l.kC,{className:"mt-6",children:[(0,s.jsx)(l.xv,{}),(0,s.jsx)(l.xv,{className:"text-right"})]})]},e.category))})}},31488:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return PlaygroundPage}});var a=n(57437),s=n(2265),r=n(58793),l=n(70188),o=n(93379),c=n(20751),i=n(87951),u=n(94716),d=n(52699),h=n(34039),x=n(98706);let g=0;function PlaygroundPage(){let[e,t]=(0,s.useState)({walletType:"",privateKey:"",wallet:"",address:"",rune:"",pubkey:"",Fee:"20",Result:"",Sending:!1,SignPSBt:"",Minting:!1,NewHash:"",SignedTX:"",Hash:""}),{wallet:n,SetWalletInfo:p,GetLocalWallet:m,SaveWalletInfo:f,HandleWalletMy:b,ClearLocalWallet:y}=(0,i.Os)(),{user:j}=(0,x.a)(),handleInputChange=(e,n)=>{if("privateKey"==e&&n.length>=32){let e=localStorage.getItem("privateKey");(void 0===e||e!==n)&&localStorage.setItem("privateKey",n)}t(t=>({...t,[e]:n})),(0,o._R)(100).then()};(0,s.useEffect)(()=>{++g<2||Object.keys(e).forEach(e=>{let t=localStorage.getItem(e);t&&handleInputChange(e,t)})},[]);let Push=async()=>{if(e.Minting){(0,o.bW)("正在快马加鞭的广播交易，请不要急!!!",3e3),await (0,o._R)(5e3),handleInputChange("Minting",!1),console.log("Minting:",!1);return}{handleInputChange("Minting",!0);let t=new URLSearchParams;t.append("rawTX",e.SignedTX),t.append("username",j.username),t.append("signature",j.signature),fetch(i.oc+h.iF,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t.toString()}).then(e=>e.json()).then(e=>{void 0!==e?"succ"===e.status?(handleInputChange("NewHash",e.data),(0,o.xO)("\uD83D\uDD25\uD83D\uDC47TX加速成功,请查看新HASH\uD83D\uDC47\uD83D\uDD25".concat(e.data),3e3),handleInputChange("Result",""),handleInputChange("SignPSBt","")):(0,o.bW)("广播交易失败:",3e3):(0,o.bW)("广播交易失败,请稍后重试!",3e3)}).catch(e=>{console.error("Error sending data:",e)}),await (0,o._R)(5e3),handleInputChange("Minting",!1)}},HandlePsbt=async e=>{handleInputChange("SignPSBt",e);let t=await (0,h.Sf)(e);handleInputChange("SignedTX",t),(0,o.yW)("交易数据签名完成,别忘了点击下方广播交易喔，不然不会上链!",5e3),(0,o.yW)("交易数据签名完成,别忘了点击下方广播交易喔，不然不会上链!",5e3),(0,o.yW)("交易数据签名完成,别忘了点击下方广播交易喔，不然不会上链!",5e3)},Speed=async()=>{try{if(""===n.pubkey&&((0,o.bW)("右上角先连接BTC钱包!",3e3),(0,o.bW)("右上角先连接BTC钱包!",3e3)),!0===e.Sending){(0,o.yW)("请不要急,正在解析交易数据,请稍等...",5e3);return}if(handleInputChange("Result",""),handleInputChange("SignPSBt",""),handleInputChange("NewHash",""),e.Hash.length<64){(0,o.bW)("请输入正确的HASH",3e3);return}handleInputChange("Sending",!0),(0,o.yW)("正在解析交易数据,请等待钱包弹出!",2e4);let t=new URLSearchParams({hash:e.Hash,pubkey:n.pubkey,fee:e.Fee,username:j.username,signature:j.signature});fetch(i.oc+"/unsginPSBT?"+t.toString(),{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{if(e.data.length<256){(0,o.bW)("".concat(e.data),1e4),handleInputChange("Sending",!1);return}handleInputChange("Result",e.data),(0,o.xO)("获取TX数据成功,请用钱包签名!!!",3e3),(0,o.yW)("请正在调用钱包签名PSBT...",5e3),"unisat"===n.walletType?window.unisat.signPsbt(e.data).then(HandlePsbt).catch(console.log):"okxwallet"===n.walletType&&window.okxwallet.bitcoin.signPsbt(e.data).then(HandlePsbt).catch(console.log)}).catch(e=>{console.error("Error:",e),(0,o.bW)("获取数据失败,请重试...",5e3)}),await (0,o._R)(1e4),handleInputChange("Sending",!1)}catch(e){console.log("Speed error"),(0,o.bW)("获取数据错误,请重试...",5e3)}},SYSpeed=async()=>{try{let t="b"+(0,d.A)(e.privateKey);if(!0===e.Sending){(0,o.yW)("请不要急,正在解析交易数据,请稍等...",5e3);return}if(handleInputChange("Result",""),handleInputChange("SignPSBt",""),handleInputChange("NewHash",""),handleInputChange("NewHash",""),e.Hash.length<64){(0,o.bW)("请输入正确的HASH",3e3);return}if(e.privateKey.length<32){(0,o.bW)("请输入正确的私钥",3e3);return}handleInputChange("Sending",!0),(0,o.yW)("正在极速模式加速TX，请等待!!!",1e4);let n=new URLSearchParams({hash:e.Hash,wif:t,fee:e.Fee,username:j.username,signature:j.signature});fetch(i.oc+"/speed?"+n.toString(),{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{if(console.log("Result:",e),64!=e.data.length){(0,o.bW)("私钥加速失败:".concat(e.data),3e3);return}handleInputChange("NewHash",e.data),(0,o.xO)("\uD83D\uDD25\uD83D\uDC47加速成功,新的HASH\uD83D\uDC47\uD83D\uDD25:".concat(e.data),3e3)}).catch(e=>{console.error("Error:",e),(0,o.bW)("加速失败,请重试...",5e3)}),await (0,o._R)(1e4),handleInputChange("Sending",!1)}catch(e){console.log("私钥加速失败!")}};return(0,a.jsxs)("div",{className:"p-4 md:p-10 mx-auto max-w-7xl",children:[(0,a.jsx)(u.Z,{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("p",{className:"text-lg text-center",children:[" ",(0,a.jsx)("span",{className:"text-teal-500 font-mono font-bold",style:{fontWeight:"bold"},children:" 支持RBF和CPFP加速,CPFP加速只需要加速最后一个tx就行，费率需要自己算。"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]}),(0,a.jsx)("br",{}),(0,a.jsxs)("p",{className:"text-lg text-center",children:[" ",(0,a.jsx)("span",{className:"text-slate-500",style:{fontWeight:"bold"},children:" 交易Hash:"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{type:"text",className:"text-lg text-center",placeholder:"输入要加速替换的tx Hash",style:{border:"1px solid #ccc",borderRadius:"4px",padding:"8px"},onChange:e=>handleInputChange("Hash",e.target.value),size:55})]}),(0,a.jsx)("br",{}),(0,a.jsxs)("p",{className:"text-lg text-center",children:[" ",(0,a.jsx)("span",{className:"text-slate-500",style:{fontWeight:"bold"},children:" 增加费率(多少聪/字节):"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{type:"text",className:"text-lg text-center ",placeholder:"输入要增加的费率,如当前是10聪/字节，增加15后TX变成25聪/字节",style:{border:"1px solid #ccc",borderRadius:"4px",padding:"8px"},onChange:e=>handleInputChange("Fee",e.target.value),size:55})]}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"text-lg text-center w-full  max-w-md ",children:[" ",(0,a.jsxs)("span",{className:"text-slate-500",children:[" ",(0,a.jsx)("code",{className:"font-mono font-bold",children:e.Result.length>1?(0,a.jsx)(c.Z,{textToCopy:e.Result,title:"\uD83D\uDC49PSBT数据(可以复制后自己去签名)："}):e.Result})," "]}),(0,a.jsx)("br",{}),"      "]}),(0,a.jsx)("br",{}),(0,a.jsx)(l.Z,{Func:Speed,Content:"CPFP的TX需要自己计算大小，后续高级版自动算   调用浏览器钱包插件签名!!!",Tips:"\uD83D\uDD25 加 速 \uD83D\uDD25",Sending:e.Sending}),(0,a.jsxs)("div",{className:"text-lg text-center w-full  max-w-md ",children:[" ",(0,a.jsxs)("span",{className:"text-slate-500",children:[" ",(0,a.jsx)("code",{className:"font-mono font-bold",children:e.SignedTX.length>1?(0,a.jsx)(c.Z,{textToCopy:e.SignedTX,title:"\uD83D\uDC49已签名的TX数据(可以复制自己去广播交易)\uD83D\uDC48"}):e.SignedTX})," "]}),(0,a.jsx)("br",{}),"      "]}),(0,a.jsx)("br",{}),e.SignedTX.length>1?(0,a.jsx)(l.Z,{Func:Push,Content:"TX广播上链!",Tips:"\uD83D\uDD25广播交易(完成加速)\uD83D\uDD25",Sending:e.Sending}):"",(0,a.jsx)("br",{}),(0,a.jsxs)("p",{className:"text-lg text-center w-full  max-w-md ",children:[" ",(0,a.jsxs)("span",{className:"text-slate-500",children:[" ",(0,a.jsx)("code",{className:"font-mono font-bold",children:e.NewHash.length>1?(0,a.jsxs)("a",{target:"_blank",href:"https://mempool.space/zh".concat(i.Uj,"/tx/").concat(e.NewHash),children:["\uD83D\uDD25\uD83D\uDC47加速成功,新的HASH\uD83D\uDC47\uD83D\uDD25",e.NewHash]}):e.NewHash})," "]}),(0,a.jsx)("br",{}),"      "]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("p",{className:"text-lg text-center",children:[" ",(0,a.jsx)("span",{className:"text-slate-500",style:{fontWeight:"bold"},children:" 私钥:"}),"(非必填!!!可以用unisat或者OKXWallet签名)",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{type:"text",className:"text-lg text-center",placeholder:"极速模式需要输入加速tx的比特币WIF私钥",style:{border:"1px solid #ccc",borderRadius:"4px",padding:"8px"},value:e.privateKey,onChange:e=>handleInputChange("privateKey",e.target.value),size:55})]}),(0,a.jsx)("br",{}),(0,a.jsx)(r.Z,{Func:SYSpeed,Content:"\uD83D\uDC47填好私钥直接快速上链,无需签名等操作\uD83D\uDC47",Tips:"\uD83D\uDE80极速模式\uD83D\uDE80"})]})}},93379:function(e,t,n){"use strict";n.d(t,{_R:function(){return Sleep},bW:function(){return ToastError},xO:function(){return ToastSuccess},yW:function(){return ToastInfo}});var a=n(87415);n(83343);let ToastError=(e,t)=>{a.Am.error(e,{position:"top-center",autoClose:t,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,theme:"light",className:"text-sm"})},ToastSuccess=(e,t)=>{a.Am.success(e,{position:"top-center",autoClose:t,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,theme:"light",className:"text-sm"})},ToastInfo=(e,t)=>{a.Am.info(e,{position:"top-center",autoClose:t,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,theme:"light",className:"text-sm"})},Sleep=async e=>new Promise(t=>setTimeout(t,e))},87951:function(e,t,n){"use strict";n.d(t,{G5:function(){return WalletContextProvider},Os:function(){return useWallet},Uj:function(){return r},oc:function(){return l}});var a=n(57437),s=n(2265);let r="",l="https://btc.qk.cx",o=(0,s.createContext)({});function WalletContextProvider(e){let{children:t}=e,[n,r]=(0,s.useState)({connected:"",walletType:"",address:"",pubkey:""}),SetWalletInfo=async e=>{r(e)},GetLocalWallet=async()=>{Object.keys(n).forEach(e=>{let t=localStorage.getItem(e);t&&r(n=>({...n,[e]:t}))})},SaveWalletInfo=async e=>{Object.entries(e).map(e=>{let[t,n]=e;localStorage.setItem(t,n)})},HandleWalletMy=async(e,t)=>{r(n=>({...n,[e]:t}))},ClearLocalWallet=async()=>{Object.keys(n).forEach(e=>{localStorage.removeItem(e)}),r({connected:"",walletType:"",address:"",pubkey:""})};return(0,a.jsx)(o.Provider,{value:{wallet:n,SetWalletInfo,GetLocalWallet,SaveWalletInfo,HandleWalletMy,ClearLocalWallet},children:t})}function useWallet(){let e=(0,s.useContext)(o);if(!e)throw Error("useWallet must be used within a MyProvider");return e}},98706:function(e,t,n){"use strict";n.d(t,{a:function(){return useUser},f:function(){return UserContextProvider}});var a=n(57437),s=n(2265);let r=(0,s.createContext)({});function UserContextProvider(e){let{children:t}=e,[n,l]=(0,s.useState)({login:!1,signature:"",username:"",level:"",endTime:"",balance:""}),SetUserInfo=async e=>{l(e)},GetLocalUser=async()=>{Object.keys(n).forEach(e=>{let t=localStorage.getItem(e);t&&l(n=>({...n,[e]:t}))})},SaveUserInfo=async e=>{Object.entries(e).map(e=>{let[t,n]=e;localStorage.setItem(t,n)})},HandleUserMy=async(e,t)=>{await l(n=>({...n,[e]:t}))},ClearLocalUser=async()=>{Object.keys(n).forEach(e=>{localStorage.removeItem(e)}),l({login:!1,signature:"",username:"",level:"",endTime:"",balance:""})};return(0,a.jsx)(r.Provider,{value:{user:n,SetUserInfo,GetLocalUser,SaveUserInfo,HandleUserMy,ClearLocalUser},children:t})}function useUser(){let e=(0,s.useContext)(r);if(!e)throw Error("useWallet must be used within a MyProvider");return e}},58793:function(e,t,n){"use strict";n.d(t,{Z:function(){return Submit}});var a=n(57437);function Submit(e){let{Func:t,Content:n,Tips:s,Sending:r}=e;return(0,a.jsx)("div",{className:" rounded-2xl w-11/12 sm:w-[581px] h-40 sm:h-[80px] p-0.5 z-10 bottom-10 left-0 right-0 mx-auto",children:(0,a.jsxs)("div",{className:"rounded-[14px] w-full h-full bg-gray-50 border border-gray-200 flex flex-col items-center justify-center  space-y-3 sm:space-y-0 px-5",children:[n,(0,a.jsx)("a",{className:"".concat(r?"disable":"","  text-white text-[16px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[220px] h-10 flex items-center justify-center whitespace-nowrap"),onClick:t,target:"_blank",rel:"noreferrer",style:{cursor:"pointer"},children:s})]})})}},52699:function(e,t,n){"use strict";n.d(t,{A:function(){return XorEncrypt}});var a=n(67133).Buffer;let s="kejiyangjiaTools..",XorEncrypt=e=>{let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e.charCodeAt(n)^s.charCodeAt(n%s.length));return console.log(t=a.from(t).toString("hex"),e.length),t}},70188:function(e,t,n){"use strict";n.d(t,{Z:function(){return WalletBtn}});var a=n(57437);function WalletBtn(e){let{Func:t,Content:n,Tips:s,Sending:r}=e;return(0,a.jsx)("div",{className:" rounded-2xl w-11/12 sm:w-[581px] h-40 sm:h-[130px] p-0.5 z-10 bottom-10 left-0 right-0 mx-auto",children:(0,a.jsxs)("div",{className:"rounded-[14px] w-full h-full bg-gray-50 border border-gray-200 flex flex-col items-center justify-center  space-y-3 sm:space-y-0 px-5",children:[(0,a.jsx)("p",{className:"text-black text-[13px] font-mono w-[304px] h-10 flex items-center justify-center p-1",children:n}),(0,a.jsx)("br",{}),(0,a.jsx)("a",{className:"".concat(r?"disable":"","  text-white text-[16px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[220px] h-10 flex items-center justify-center whitespace-nowrap"),onClick:t,target:"_blank",rel:"noreferrer",style:{cursor:"pointer"},children:s})]})})}}},function(e){e.O(0,[1867,7133,477,2971,2472,1744],function(){return e(e.s=16714)}),_N_E=e.O()}]);