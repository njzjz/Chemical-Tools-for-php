(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["acid~deviation~element~mass~setting"],{"0bc6":function(e,t,s){},"24e2":function(e,t,s){"use strict";var i=s("e0c7");t["a"]=i["a"]},"326d":function(e,t,s){"use strict";var i=s("e449");t["a"]=i["a"]},"34ef":function(e,t,s){"use strict";s("8adc");var i=s("58df"),n=s("0789"),a=s("9d26"),l=s("a9ad"),o=s("4e82"),r=s("7560"),h=s("f2e7"),c=s("1c87"),d=s("af2b"),u=s("d9bd"),p=Object(i["a"])(l["a"],d["a"],c["a"],r["a"],Object(o["a"])("chipGroup"),Object(h["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...c["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(c["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach(([e,t])=>{this.$attrs.hasOwnProperty(e)&&Object(u["a"])(e,t,this)})},methods:{click(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter(){const e=[];return this.isActive&&e.push(this.$createElement(a["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(n["b"],e)},genClose(){return this.$createElement(a["a"],{staticClass:"v-chip__close",props:{right:!0},on:{click:e=>{e.stopPropagation(),e.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(e){const t=[this.genContent()];let{tag:s,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const n=this.textColor||this.outlined&&this.color;return e(s,this.setTextColor(n,i),t)}});t["a"]=p},"68dd":function(e,t,s){},"8adc":function(e,t,s){},"8ce9":function(e,t,s){},"9e88":function(e,t,s){"use strict";s("cf36");var i=s("5607"),n=s("8bbf"),a=s.n(n),l=s("132d"),o=s("a9ad"),r=s("7560"),h=s("80d2");t["a"]=a.a.extend({name:"v-simple-checkbox",functional:!0,directives:{ripple:i["a"]},props:{...o["a"].options.props,...r["a"].options.props,disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}},render(e,{props:t,data:s}){const i=[];if(t.ripple&&!t.disabled){const s=e("div",o["a"].options.methods.setTextColor(t.color,{staticClass:"v-input--selection-controls__ripple",directives:[{name:"ripple",value:{center:!0}}]}));i.push(s)}let n=t.offIcon;t.indeterminate?n=t.indeterminateIcon:t.value&&(n=t.onIcon),i.push(e(l["a"],o["a"].options.methods.setTextColor(t.value&&t.color,{props:{disabled:t.disabled,dark:t.dark,light:t.light}}),n));const a={"v-simple-checkbox":!0,"v-simple-checkbox--disabled":t.disabled};return e("div",{...s,class:a,on:{click:e=>{e.stopPropagation(),s.on&&s.on.input&&!t.disabled&&Object(h["C"])(s.on.input).forEach(e=>e(!t.value))}}},i)}})},b810:function(e,t,s){"use strict";var i=s("ce7e");t["a"]=i["a"]},b974:function(e,t,s){"use strict";s("4ff9"),s("68dd");var i=s("34ef"),n=s("326d"),a=s("9e88"),l=s("b810"),o=s("24e2"),r=s("da13"),h=s("1800"),c=s("5d23"),d=s("8860"),u=s("5607"),p=s("a9ad"),m=s("7560"),g=s("80d2"),v=s("58df"),f=Object(v["a"])(p["a"],m["a"]).extend({name:"v-select-list",directives:{ripple:u["a"]},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:()=>[]}},computed:{parsedItems(){return this.selectedItems.map(e=>this.getValue(e))},tileActiveClass(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile(){const e={attrs:{role:void 0},on:{mousedown:e=>e.preventDefault()}};return this.$createElement(r["a"],e,[this.genTileContent(this.noDataText)])}},methods:{genAction(e,t){return this.$createElement(h["a"],[this.$createElement(a["a"],{props:{color:this.color,value:t},on:{input:()=>this.$emit("select",e)}})])},genDivider(e){return this.$createElement(l["a"],{props:e})},genFilteredText(e){if(e=e||"",!this.searchInput||this.noFilter)return Object(g["k"])(e);const{start:t,middle:s,end:i}=this.getMaskedCharacters(e);return`${Object(g["k"])(t)}${this.genHighlight(s)}${Object(g["k"])(i)}`},genHeader(e){return this.$createElement(o["a"],{props:e},e.header)},genHighlight(e){return`<span class="v-list-item__mask">${Object(g["k"])(e)}</span>`},getMaskedCharacters(e){const t=(this.searchInput||"").toString().toLocaleLowerCase(),s=e.toLocaleLowerCase().indexOf(t);if(s<0)return{start:"",middle:e,end:""};const i=e.slice(0,s),n=e.slice(s,s+t.length),a=e.slice(s+t.length);return{start:i,middle:n,end:a}},genTile({item:e,index:t,disabled:s=null,value:i=!1}){i||(i=this.hasItem(e)),e===Object(e)&&(s=null!==s?s:this.getDisabled(e));const n={attrs:{"aria-selected":String(i),id:`list-item-${this._uid}-${t}`,role:"option"},on:{mousedown:e=>{e.preventDefault()},click:()=>s||this.$emit("select",e)},props:{activeClass:this.tileActiveClass,disabled:s,ripple:!0,inputValue:i}};if(!this.$scopedSlots.item)return this.$createElement(r["a"],n,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(e,i):null,this.genTileContent(e,t)]);const a=this,l=this.$scopedSlots.item({parent:a,item:e,attrs:{...n.attrs,...n.props},on:n.on});return this.needsTile(l)?this.$createElement(r["a"],n,l):l},genTileContent(e,t=0){const s=this.genFilteredText(this.getText(e));return this.$createElement(c["a"],[this.$createElement(c["b"],{domProps:{innerHTML:s}})])},hasItem(e){return this.parsedItems.indexOf(this.getValue(e))>-1},needsTile(e){return 1!==e.length||null==e[0].componentOptions||"v-list-item"!==e[0].componentOptions.Ctor.options.name},getDisabled(e){return Boolean(Object(g["o"])(e,this.itemDisabled,!1))},getText(e){return String(Object(g["o"])(e,this.itemText,e))},getValue(e){return Object(g["o"])(e,this.itemValue,this.getText(e))}},render(){const e=[],t=this.items.length;for(let s=0;s<t;s++){const t=this.items[s];this.hideSelected&&this.hasItem(t)||(null==t?e.push(this.genTile({item:t,index:s})):t.header?e.push(this.genHeader(t)):t.divider?e.push(this.genDivider(t)):e.push(this.genTile({item:t,index:s})))}return e.length||e.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&e.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&e.push(this.$slots["append-item"]),this.$createElement(d["a"],{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},props:{dense:this.dense}},e)}}),b=s("c37a"),$=s("8654"),x=s("8547"),I=s("8bbf"),C=s.n(I),y=C.a.extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),k=s("a293"),S=s("d9f7"),T=s("d9bd");const A={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},D=Object(v["a"])($["a"],x["a"],y);t["a"]=D.extend().extend({name:"v-select",directives:{ClickOutside:k["a"]},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:()=>A},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes(){return{...$["a"].options.computed.classes.call(this),"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple}},computedItems(){return this.allItems},computedOwns(){return`list-${this._uid}`},computedCounterValue(){return this.multiple?this.selectedItems.length:(this.getText(this.selectedItems[0])||"").toString().length},directives(){return this.isFocused?[{name:"click-outside",value:this.blur,args:{closeConditional:this.closeConditional}}]:void 0},dynamicHeight(){return"auto"},hasChips(){return this.chips||this.smallChips},hasSlot(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty(){return this.selectedItems.length>0},listData(){const e=this.$vnode&&this.$vnode.context.$options._scopeId,t=e?{[e]:!0}:{};return{attrs:{...t,id:this.computedOwns},props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&Object(T["b"])("assert: staticList should not be called if slots are used"),this.$createElement(f,this.listData)},virtualizedItems(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:()=>!0,$_menuProps(){let e="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(e)&&(e=e.reduce((e,t)=>(e[t.trim()]=!0,e),{})),{...A,eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:e.offsetY?1:0,...e}}},watch:{internalValue(e){this.initialValue=e,this.setSelectedItems()},menuIsBooted(){window.setTimeout(()=>{this.getContent()&&this.getContent().addEventListener&&this.getContent().addEventListener("scroll",this.onScroll,!1)})},isMenuActive(e){window.setTimeout(()=>this.onMenuActiveChange(e)),e&&(this.menuIsBooted=!0)},items:{immediate:!0,handler(e){this.cacheItems&&this.$nextTick(()=>{this.cachedItems=this.filterDuplicates(this.cachedItems.concat(e))}),this.setSelectedItems()}}},methods:{blur(e){$["a"].options.methods.blur.call(this,e),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1},activateMenu(){this.disabled||this.readonly||this.isMenuActive||(this.isMenuActive=!0)},clearableCallback(){this.setValue(this.multiple?[]:void 0),this.setMenuIndex(-1),this.$nextTick(()=>this.$refs.input&&this.$refs.input.focus()),this.openOnClear&&(this.isMenuActive=!0)},closeConditional(e){return!this.isMenuActive||!this._isDestroyed&&this.getContent()&&!this.getContent().contains(e.target)&&this.$el&&!this.$el.contains(e.target)&&e.target!==this.$el},filterDuplicates(e){const t=new Map;for(let s=0;s<e.length;++s){const i=e[s],n=this.getValue(i);!t.has(n)&&t.set(n,i)}return Array.from(t.values())},findExistingIndex(e){const t=this.getValue(e);return(this.internalValue||[]).findIndex(e=>this.valueComparator(this.getValue(e),t))},getContent(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection(e,t){const s=this.disabled||this.readonly||this.getDisabled(e);return this.$createElement(i["a"],{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&!s,disabled:s,inputValue:t===this.selectedIndex,small:this.smallChips},on:{click:e=>{s||(e.stopPropagation(),this.selectedIndex=t)},"click:close":()=>this.onChipInput(e)},key:JSON.stringify(this.getValue(e))},this.getText(e))},genCommaSelection(e,t,s){const i=t===this.selectedIndex&&this.computedColor,n=this.disabled||this.getDisabled(e);return this.$createElement("div",this.setTextColor(i,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":n},key:JSON.stringify(this.getValue(e))}),`${this.getText(e)}${s?"":", "}`)},genDefaultSlot(){const e=this.genSelections(),t=this.genInput();return Array.isArray(e)?e.push(t):(e.children=e.children||[],e.children.push(t)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,e,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon(e,t,s){const i=b["a"].options.methods.genIcon.call(this,e,t,s);return"append"===e&&(i.children[0].data=Object(S["a"])(i.children[0].data,{attrs:{tabindex:i.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),i},genInput(){const e=$["a"].options.methods.genInput.call(this);return delete e.data.attrs.name,e.data=Object(S["a"])(e.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.readonly),"aria-activedescendant":Object(g["m"])(this.$refs.menu,"activeTile.id",void 0),autocomplete:Object(g["m"])(e.data,"attrs.autocomplete","off")},on:{keypress:this.onKeyPress}}),e},genHiddenInput(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot(){const e=$["a"].options.methods.genInputSlot.call(this);return e.data.attrs={...e.data.attrs,role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns},e},genList(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot(){const e=["prepend-item","no-data","append-item"].filter(e=>this.$slots[e]).map(e=>this.$createElement("template",{slot:e},this.$slots[e]));return this.$createElement(f,{...this.listData},e)},genMenu(){const e=this.$_menuProps;return e.activator=this.$refs["input-slot"],""===this.attach||!0===this.attach||"attach"===this.attach?e.attach=this.$el:e.attach=this.attach,this.$createElement(n["a"],{attrs:{role:void 0},props:e,on:{input:e=>{this.isMenuActive=e,this.isFocused=e}},ref:"menu"},[this.genList()])},genSelections(){let e=this.selectedItems.length;const t=new Array(e);let s;s=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(e--)t[e]=s(this.selectedItems[e],e,e===t.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},t)},genSlotSelection(e,t){return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:e,index:t,select:e=>{e.stopPropagation(),this.selectedIndex=t},selected:t===this.selectedIndex,disabled:this.disabled||this.readonly})},getMenuIndex(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled(e){return Object(g["o"])(e,this.itemDisabled,!1)},getText(e){return Object(g["o"])(e,this.itemText,e)},getValue(e){return Object(g["o"])(e,this.itemValue,this.getText(e))},onBlur(e){e&&this.$emit("blur",e)},onChipInput(e){this.multiple?this.selectItem(e):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick(e){this.isDisabled||(this.isAppendInner(e.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")))},onEscDown(e){e.preventDefault(),this.isMenuActive&&(e.stopPropagation(),this.isMenuActive=!1)},onKeyPress(e){if(this.multiple||this.readonly||this.disableLookup)return;const t=1e3,s=performance.now();s-this.keyboardLookupLastTime>t&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=e.key.toLowerCase(),this.keyboardLookupLastTime=s;const i=this.allItems.findIndex(e=>{const t=(this.getText(e)||"").toString();return t.toLowerCase().startsWith(this.keyboardLookupPrefix)}),n=this.allItems[i];-1!==i&&(this.setValue(this.returnObject?n:this.getValue(n)),setTimeout(()=>this.setMenuIndex(i)))},onKeyDown(e){const t=e.keyCode,s=this.$refs.menu;if([g["u"].enter,g["u"].space].includes(t)&&this.activateMenu(),this.$emit("keydown",e),s)return this.isMenuActive&&t!==g["u"].tab&&this.$nextTick(()=>{s.changeListIndex(e),this.$emit("update:list-index",s.listIndex)}),!this.isMenuActive&&[g["u"].up,g["u"].down].includes(t)?this.onUpDown(e):t===g["u"].esc?this.onEscDown(e):t===g["u"].tab?this.onTabDown(e):t===g["u"].space?this.onSpaceDown(e):void 0},onMenuActiveChange(e){if(this.multiple&&!e||this.getMenuIndex()>-1)return;const t=this.$refs.menu;if(t&&this.isDirty)for(let s=0;s<t.tiles.length;s++)if("true"===t.tiles[s].getAttribute("aria-selected")){this.setMenuIndex(s);break}},onMouseUp(e){this.hasMouseDown&&3!==e.which&&!this.isDisabled&&(this.isAppendInner(e.target)?this.$nextTick(()=>this.isMenuActive=!this.isMenuActive):this.isEnclosed&&(this.isMenuActive=!0)),$["a"].options.methods.onMouseUp.call(this,e)},onScroll(){if(this.isMenuActive){if(this.lastItem>=this.computedItems.length)return;const e=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;e&&(this.lastItem+=20)}else requestAnimationFrame(()=>this.getContent().scrollTop=0)},onSpaceDown(e){e.preventDefault()},onTabDown(e){const t=this.$refs.menu;if(!t)return;const s=t.activeTile;!this.multiple&&s&&this.isMenuActive?(e.preventDefault(),e.stopPropagation(),s.click()):this.blur(e)},onUpDown(e){const t=this.$refs.menu;if(!t)return;if(e.preventDefault(),this.multiple)return this.activateMenu();const s=e.keyCode;t.isBooted=!0,window.requestAnimationFrame(()=>{t.getTiles(),g["u"].up===s?t.prevTile():t.nextTile(),t.activeTile&&t.activeTile.click()})},selectItem(e){if(this.multiple){const t=(this.internalValue||[]).slice(),s=this.findExistingIndex(e);if(-1!==s?t.splice(s,1):t.push(e),this.setValue(t.map(e=>this.returnObject?e:this.getValue(e))),this.$nextTick(()=>{this.$refs.menu&&this.$refs.menu.updateDimensions()}),!this.multiple)return;const i=this.getMenuIndex();if(this.setMenuIndex(-1),this.hideSelected)return;this.$nextTick(()=>this.setMenuIndex(i))}else this.setValue(this.returnObject?e:this.getValue(e)),this.isMenuActive=!1},setMenuIndex(e){this.$refs.menu&&(this.$refs.menu.listIndex=e)},setSelectedItems(){const e=[],t=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue];for(const s of t){const t=this.allItems.findIndex(e=>this.valueComparator(this.getValue(e),this.getValue(s)));t>-1&&e.push(this.allItems[t])}this.selectedItems=e},setValue(e){const t=this.internalValue;this.internalValue=e,e!==t&&this.$emit("change",e)},isAppendInner(e){const t=this.$refs["append-inner"];return t&&(t===e||t.contains(e))}}})},ce7e:function(e,t,s){"use strict";s("8ce9");var i=s("7560");t["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(e){let t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":t,...this.$attrs},on:this.$listeners})}})},cf36:function(e,t,s){},e0c7:function(e,t,s){"use strict";s("0bc6");var i=s("7560"),n=s("58df");t["a"]=Object(n["a"])(i["a"]).extend({name:"v-subheader",props:{inset:Boolean},render(e){return e("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);
//# sourceMappingURL=acid~deviation~element~mass~setting.2485cc5a.js.map