(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c67c9a0"],{"62ad":function(t,e,i){"use strict";i("4160"),i("caad"),i("13d5"),i("45fc"),i("4ec9"),i("a9e3"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("159b"),i("ddb0");var o=i("ade3"),n=i("5530"),a=(i("4b85"),i("2b0e")),r=i("d9f7"),s=i("80d2"),l=["sm","md","lg","xl"],c=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return l.reduce((function(t,e){return t["offset"+Object(s["G"])(e)]={type:[String,Number],default:null},t}),{})}(),m=function(){return l.reduce((function(t,e){return t["order"+Object(s["G"])(e)]={type:[String,Number],default:null},t}),{})}(),u={col:Object.keys(c),offset:Object.keys(d),order:Object.keys(m)};function v(t,e,i){var o=t;if(null!=i&&!1!==i){if(e){var n=e.replace(t,"");o+="-".concat(n)}return"col"!==t||""!==i&&!0!==i?(o+="-".concat(i),o.toLowerCase()):o.toLowerCase()}}var p=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({cols:{type:[Boolean,String,Number],default:!1}},c),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,n=e.data,a=e.children,s=(e.parent,"");for(var l in i)s+=String(i[l]);var c=p.get(s);return c||function(){var t,e;for(e in c=[],u)u[e].forEach((function(t){var o=i[t],n=v(e,t,o);n&&c.push(n)}));var n=c.some((function(t){return t.startsWith("col-")}));c.push((t={col:!n||!i.cols},Object(o["a"])(t,"col-".concat(i.cols),i.cols),Object(o["a"])(t,"offset-".concat(i.offset),i.offset),Object(o["a"])(t,"order-".concat(i.order),i.order),Object(o["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),p.set(s,c)}(),t(i.tag,Object(r["a"])(n,{class:c}),a)}})},ae79:function(t,e,i){"use strict";i.r(e);var o,n,a,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"inspire"}},[i("v-main",[i("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{xl:"4",lg:"4",md:"4",xs:"12",sm:"12"}},[i("RegisterDomain")],1),i("v-col",{attrs:{xl:"6",lg:"6",md:"6",xs:"12",sm:"12"}},[i("div",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"80vh"}},[i("DomainList")],1)])],1)],1)],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.domains,loading:t.domainDataTableLoading,search:t.search,"sort-by":"user"},on:{"click:row":t.rowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("Domains")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-text-field",{staticClass:"mt-7 mx-2",attrs:{solo:"",label:"Search",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"info",attrs:{color:"input",small:"",fab:""},on:{click:function(e){return t.retrieveDomainList()}}},"v-btn",n,!1),o),[i("v-icon",[t._v(" mdi-refresh ")])],1)]}}])},[i("span",[t._v("Refresh Domain List")])]),i("v-dialog",{attrs:{width:"500",color:"primary"},model:{value:t.domainDialogShow,callback:function(e){t.domainDialogShow=e},expression:"domainDialogShow"}},[i("v-card",[i("v-card-title",[t._v(" "+t._s(t.domainDialog.name)+" ")]),i("v-card-text",{staticClass:"text-left"},[i("v-list",{staticClass:"transparent"},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Domain Name ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.name)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Users ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.users)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Ice Server ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.iceServer)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Domain ID ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.domainID)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Owner Account ID ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.sponsorAccountId)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Protocol ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.protocol)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Version ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.version)+" ")])],1)],1),i("v-list-item",[i("v-expansion-panels",[i("v-expansion-panel",[i("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:t._u([{key:"actions",fn:function(){return[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-information-variant")])]},proxy:!0}])},[t._v(" Public Key ")]),i("v-expansion-panel-content",[t._v(" "+t._s(t.domainDialog.publicKey)+" ")])],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var o=e.item;return[i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-icon",t._g(t._b({attrs:{small:"",color:"red",disabled:!t.canEditDomain(o.sponsorAccountId)},on:{click:function(e){return e.stopPropagation(),t.deleteDomain(o.domainID,o.name)}}},"v-icon",a,!1),n),[t._v(" mdi-delete-alert ")])]}}],null,!0)},[i("span",[t._v("Delete Domain")])])]}},{key:"item.images",fn:function(t){var e=t.item;return[i("v-avatar",[i("img",{attrs:{src:e.images.thumbnail}})])]}}])})},c=[],d=(i("4160"),i("b0c0"),i("159b"),i("8552")),m={name:"DomainList",props:{source:String},data:function(){return{dialog:!1,headers:[{text:"Domain Name",align:"start",sortable:!0,value:"name"},{text:"Version",value:"version"},{text:"Users",value:"users"},{text:"Actions",value:"actions",sortable:!1}],domainDataTableLoading:!1,domainDialogShow:!1,domainDialog:{name:"",users:"",domainID:"",version:"",protocol:"",publicKey:"",iceServer:"",sponsorAccountId:"",networkingMode:""},search:null,editingDomain:null,domains:[]}},watch:{},created:function(){o=this,n=this.$store.state,a=n.metaverseConfig.server,this.initialize()},computed:{},methods:{initialize:function(){this.retrieveDomainList()},sendEvent:function(t,e){d["a"].$emit(t,e)},rowClicked:function(t){this.domainDialogShow=!0,this.domainDialog.name=t.name,this.domainDialog.domainID=t.domainID,this.domainDialog.version=t.version,this.domainDialog.protocol=t.protocol,this.domainDialog.publicKey=t.publicKey,this.domainDialog.iceServer=t.iceServer,this.domainDialog.sponsorAccountId=t.sponsorAccountId,this.domainDialog.networkingMode=t.networkingMode,this.domainDialog.users=t.users},canEditDomain:function(t){return n.account.useAsAdmin||n.account.accountId===t},beginEditingDomain:function(t){this.editingDomain=t},savePlaceName:function(t){this.postUpdateDomain(this.editingDomain,{place_name:t})},deleteDomain:function(t,e){confirm("Are you sure you want to delete "+e+"?")&&this.postDeleteDomain(t)},retrieveDomainList:function(){var t=window.$.param({asAdmin:n.account.useAsAdmin});t="?"+t,this.domainDataTableLoading=!0,window.$.ajax({type:"GET",url:a+"/api/v1/domains"+t,contentType:"application/json"}).done((function(t){o.domainDataTableLoading=!1,o.domains=[],t.data.domains.forEach((function(t,e){o.domains.push({name:t.name,domainID:t.domainId,users:t.total_users,protocol:t.protocol_version,publicKey:t.public_key,version:t.version,iceServer:t.ice_server_address,sponsorAccountId:t.sponsor_account_id,networkingMode:t.networking_mode})}))})).fail((function(t){console.info("Failed to retrieve domain list: ",t),o.domainDataTableLoading=!1,o.$store.commit("mutate",{property:"error",with:{title:"Failed to retrieve domain list.",code:"2",full:t.responseJSON.error}}),o.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0})}))},postUpdateDomain:function(t,e){var i=window.$.param({asAdmin:n.account.useAsAdmin});i="?"+i,window.$.ajax({type:"POST",url:a+"/api/v1/domains/"+t+i,contentType:"application/json",data:{domain:{dataToUpdate:e}}}).done((function(e){console.info("Successfully updated domain:",t),o.retrieveDomainList()})).fail((function(e){console.info("Failed to update domain:",t),o.$store.commit("mutate",{property:"error",with:{title:"Failed to update domain:"+t,code:"3",full:e.responseJSON.error}}),o.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),o.retrieveDomainList()}))},postDeleteDomain:function(t){var e=window.$.param({asAdmin:n.account.useAsAdmin});e="?"+e,window.$.ajax({type:"DELETE",url:a+"/api/v1/domains/"+t+e}).done((function(e){console.info("Successfully deleted domain:",t),o.retrieveDomainList()})).fail((function(e){console.info("Failed to delete domain:",t),o.$store.commit("mutate",{property:"error",with:{title:"Failed to delete domain:"+t,code:"3",full:e.responseJSON.error}}),o.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),o.retrieveDomainList()}))}}},u=m,v=i("2877"),p=i("6544"),f=i.n(p),b=i("8212"),g=i("8336"),h=i("b0af"),D=i("99d9"),_=i("8fea"),k=i("169a"),w=i("ce7e"),S=i("cd55"),y=i("49e2"),T=i("c865"),x=i("0393"),C=i("132d"),V=i("8860"),L=i("da13"),O=i("5d23"),A=i("2fa4"),I=i("8654"),E=i("71d9"),j=i("2a7f"),$=i("3a2f"),N=Object(v["a"])(u,l,c,!1,null,null,null),P=N.exports;f()(N,{VAvatar:b["a"],VBtn:g["a"],VCard:h["a"],VCardText:D["b"],VCardTitle:D["c"],VDataTable:_["a"],VDialog:k["a"],VDivider:w["a"],VExpansionPanel:S["a"],VExpansionPanelContent:y["a"],VExpansionPanelHeader:T["a"],VExpansionPanels:x["a"],VIcon:C["a"],VList:V["a"],VListItem:L["a"],VListItemContent:O["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VSpacer:A["a"],VTextField:I["a"],VToolbar:E["a"],VToolbarTitle:j["a"],VTooltip:$["a"]});var F,G,J,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-list-item",{staticClass:"mb-4",attrs:{"three-line":""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline mb-4"},[t._v(" Register A Domain ")]),i("v-list-item-subtitle",[t._v(" Use the access token that is generated to allow your domain server to log in to the metaverse. ")])],1)],1),i("v-divider"),i("v-list-item",{staticClass:"mb-4"},[i("kbd",{staticClass:"text-center mt-4",staticStyle:{width:"100%","font-size":"1.0rem !important"},attrs:{id:"generatedToken"},domProps:{textContent:t._s(t.generatedToken)}}),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.generatedToken,expression:"generatedToken"}],staticClass:"ml-3 mt-3 info",attrs:{color:"input",small:"",fab:""},on:{click:t.copyGeneratedToken}},"v-btn",n,!1),o),[i("v-icon",[t._v("mdi-content-copy")])],1)]}}])},[i("span",[t._v("Copy")])])],1),i("v-list-item-subtitle",{domProps:{textContent:t._s(t.generatedTokenText)}}),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"info",attrs:{rounded:"",color:"input"},on:{click:function(e){return t.postGenerateDomainToken()}}},[t._v(" Generate ")])],1),i("v-snackbar",{attrs:{color:"success"},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[i("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.copiedToClipboardSnackbar=!1}}},"v-btn",o,!1),[t._v(" Close ")])]}}]),model:{value:t.copiedToClipboardSnackbar,callback:function(e){t.copiedToClipboardSnackbar=e},expression:"copiedToClipboardSnackbar"}},[t._v(" Copied to clipboard. ")])],1)},M=[],U={name:"DomainList",props:{source:String},data:function(){return{generatedToken:null,generatedTokenText:'Click "Generate" to create a token.',copiedToClipboardSnackbar:!1}},watch:{},created:function(){F=this,G=this.$store.state,J=G.metaverseConfig.server,this.initialize()},computed:{},methods:{initialize:function(){},sendEvent:function(t,e){d["a"].$emit(t,e)},copyGeneratedToken:function(){navigator.clipboard.writeText(this.generatedToken),this.copiedToClipboardSnackbar=!0},postGenerateDomainToken:function(){var t=window.$.param({asAdmin:G.account.useAsAdmin,scope:"domain"});t="?"+t,window.$.ajax({type:"POST",url:J+"/api/v1/token/new"+t,contentType:"application/json"}).done((function(t){console.info("Successfully generated token:",t),F.generatedToken=t.data.token,F.generatedTokenText="Paste this token into your domain server."})).fail((function(t){console.info("Failed to generate token:",t),F.generatedToken=t.responseJSON.error,F.generatedTokenText="",F.$store.commit("mutate",{property:"error",with:{title:"Failed to generate token",code:"3",full:t.responseJSON.error}}),F.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0})}))}}},z=U,R=i("2db4"),B=Object(v["a"])(z,K,M,!1,null,null,null),H=B.exports;f()(B,{VBtn:g["a"],VCard:h["a"],VCardActions:D["a"],VDivider:w["a"],VIcon:C["a"],VListItem:L["a"],VListItemContent:O["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VSnackbar:R["a"],VSpacer:A["a"],VTooltip:$["a"]});var W={name:"Domain",props:{source:String},components:{DomainList:P,RegisterDomain:H}},q=W,Q=i("7496"),X=i("62ad"),Y=i("a523"),Z=i("f6c4"),tt=i("0fd9"),et=Object(v["a"])(q,r,s,!1,null,null,null);e["default"]=et.exports;f()(et,{VApp:Q["a"],VCol:X["a"],VContainer:Y["a"],VMain:Z["a"],VRow:tt["a"]})}}]);
//# sourceMappingURL=chunk-2c67c9a0.71e2c6b0.js.map