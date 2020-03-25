/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */(function(global,factory){"use strict";if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}})(typeof window!=="undefined"?window:this,function(window,noGlobal){"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};var isFunction=function isFunction(obj){return typeof obj==="function"&&typeof obj.nodeType!=="number";};var isWindow=function isWindow(obj){return obj!=null&&obj===obj.window;};var preservedScriptAttributes={type:true,src:true,nonce:true,noModule:true};function DOMEval(code,node,doc){doc=doc||document;var i,val,script=doc.createElement("script");script.text=code;if(node){for(i in preservedScriptAttributes){val=node[i]||node.getAttribute&&node.getAttribute(i);if(val){script.setAttribute(i,val);}}}
doc.head.appendChild(script).parentNode.removeChild(script);}
function toType(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;}
var
version="3.4.1",jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,length:0,toArray:function(){return slice.call(this);},get:function(num){if(num==null){return slice.call(this);}
return num<0?this[num+this.length]:this[num];},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;return ret;},each:function(callback){return jQuery.each(this,callback);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor();},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
if(typeof target!=="object"&&!isFunction(target)){target={};}
if(i===length){target=this;i--;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){copy=options[name];if(name==="__proto__"||target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){src=target[name];if(copyIsArray&&!Array.isArray(src)){clone=[];}else if(!copyIsArray&&!jQuery.isPlainObject(src)){clone={};}else{clone=src;}
copyIsArray=false;target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isPlainObject:function(obj){var proto,Ctor;if(!obj||toString.call(obj)!=="[object Object]"){return false;}
proto=getProto(obj);if(!proto){return true;}
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},globalEval:function(code,options){DOMEval(code,{nonce:options&&options.nonce});},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}
return obj;},trim:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;},map:function(elems,callback,arg){var length,value,i=0,ret=[];if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}
return concat.apply([],ret);},guid:1,support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){var length=!!obj&&"length"in obj&&obj.length,type=toType(obj);if(isFunction(obj)||isWindow(obj)){return false;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
var Sizzle=/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),nonnativeSelectorCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;},hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rdescend=new RegExp(whitespace+"|>"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rhtml=/HTML$/i,rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function(ch,asCodePoint){if(asCodePoint){if(ch==="\0"){return"\uFFFD";}
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}
return"\\"+ch;},unloadHandler=function(){setDocument();},inDisabledFieldset=addCombinator(function(elem){return elem.disabled===true&&elem.nodeName.toLowerCase()==="fieldset";},{dir:"parentNode",next:"legend"});try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,nodeType=context?context.nodeType:9;results=results||[];if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;if(documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){if((elem=context.getElementById(m))){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(support.qsa&&!nonnativeSelectorCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))&&(nodeType!==1||context.nodeName.toLowerCase()!=="object")){newSelector=selector;newContext=context;if(nodeType===1&&rdescend.test(selector)){if((nid=context.getAttribute("id"))){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",(nid=expando));}
groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i]);}
newSelector=groups.join(",");newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}
try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){nonnativeSelectorCache(selector,true);}finally{if(nid===expando){context.removeAttribute("id");}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key+" "]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{if(el.parentNode){el.parentNode.removeChild(el);}
el=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createDisabledPseudo(disabled){return function(elem){if("form"in elem){if(elem.parentNode&&elem.disabled===false){if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}
return elem.isDisabled===disabled||elem.isDisabled!==!disabled&&inDisabledFieldset(elem)===disabled;}
return elem.disabled===disabled;}else if("label"in elem){return elem.disabled===disabled;}
return false;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var namespace=elem.namespaceURI,docElem=(elem.ownerDocument||elem).documentElement;return!rhtml.test(namespace||docElem&&docElem.nodeName||"HTML");};setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}
support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});support.getElementsByClassName=rnative.test(document.getElementsByClassName);support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}
elems=context.getElementsByName(id);i=0;while((elem=elems[i++])){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}
return[];}};}
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(document.querySelectorAll))){assert(function(el){docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}
if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}
docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}
el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(el){support.disconnectedMatch=matches.call(el,"*");matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}
if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}
return compare&4?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
if(support.matchesSelector&&documentIsHTML&&!nonnativeSelectorCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){nonnativeSelectorCache(expr,true);}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){node=parent;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{if(useCache){node=elem;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}
if(diff===false){while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}
if(node===elem){break;}}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument>length?length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push((tokens=[]));}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}
return false;}:function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2]);}else{uniqueCache[key]=newCache;if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}
return false;};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}
while((matcher=elementMatchers[j++])){if(matcher(elem,context||document,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector);}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;}
return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(el){return el.compareDocumentPosition(document.createElement("fieldset"))&1;});if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}
matched.push(elem);}}
return matched;};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}
return matched;};var rneedsContext=jQuery.expr.match.needsContext;function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();};var rsingleTag=(/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);function winnow(elements,qualifier,not){if(isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>-1)!==not;});}
return jQuery.filter(qualifier,elements,not);}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}
return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
return len>1?jQuery.uniqueSort(ret):ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;if(!selector){return this;}
root=root||rootjQuery;if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem){this[0]=elem;this.length=1;}
return this;}}else if(!context||context.jquery){return(context||root).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this[0]=selector;this.length=1;return this;}else if(isFunction(selector)){return root.ready!==undefined?root.ready(selector):selector(jQuery);}
return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(targets?targets.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}
return indexOf.call(this,elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}
return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return dir(elem,"nextSibling");},prevAll:function(elem){return dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem);},children:function(elem){return siblings(elem.firstChild);},contents:function(elem){if(typeof elem.contentDocument!=="undefined"){return elem.contentDocument;}
if(nodeName(elem,"template")){elem=elem.content||elem;}
return jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}
if(this.length>1){if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}
if(rparentsprev.test(name)){matched.reverse();}}
return this.pushStack(matched);};});var rnothtmlwhite=(/[^\x20\t\r\n\f]+/g);function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var
firing,memory,fired,locked,list=[],queue=[],firingIndex=-1,fire=function(){locked=locked||options.once;fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){firingIndex=list.length;memory=false;}}}
if(!options.memory){memory=false;}
firing=false;if(locked){if(memory){list=[];}else{list="";}}},self={add:function(){if(list){if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}
(function add(args){jQuery.each(args,function(_,arg){if(isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&toType(arg)!=="string"){add(arg);}});})(arguments);if(memory&&!firing){fire();}}
return this;},remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(index<=firingIndex){firingIndex--;}}});return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},empty:function(){if(list){list=[];}
return this;},disable:function(){locked=queue=[];list=memory="";return this;},disabled:function(){return!list;},lock:function(){locked=queue=[];if(!memory&&!firing){list=memory="";}
return this;},locked:function(){return!!locked;},fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};function Identity(v){return v;}
function Thrower(ex){throw ex;}
function adoptValue(value,resolve,reject,noValue){var method;try{if(value&&isFunction((method=value.promise))){method.call(value).done(resolve).fail(reject);}else if(value&&isFunction((method=value.then))){method.call(value,resolve,reject);}else{resolve.apply(undefined,[value].slice(noValue));}}catch(value){reject.apply(undefined,[value]);}}
jQuery.extend({Deferred:function(func){var tuples=[["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},"catch":function(fn){return promise.then(null,fn);},pipe:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=isFunction(fns[tuple[4]])&&fns[tuple[4]];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function(){var returned,then;if(depth<maxDepth){return;}
returned=handler.apply(that,args);if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}
then=returned&&(typeof returned==="object"||typeof returned==="function")&&returned.then;if(isFunction(then)){if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));}else{maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}}else{if(handler!==Identity){that=undefined;args=[returned];}
(special||deferred.resolveWith)(that,args);}},process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}
if(depth+1>=maxDepth){if(handler!==Thrower){that=undefined;args=[e];}
deferred.rejectWith(that,args);}}};if(depth){process();}else{if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}
window.setTimeout(process);}};}
return jQuery.Deferred(function(newDefer){tuples[0][3].add(resolve(0,newDefer,isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));tuples[1][3].add(resolve(0,newDefer,isFunction(onFulfilled)?onFulfilled:Identity));tuples[2][3].add(resolve(0,newDefer,isFunction(onRejected)?onRejected:Thrower));}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[3-i][2].disable,tuples[3-i][3].disable,tuples[0][2].lock,tuples[0][3].lock);}
list.add(tuple[3].fire);deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(singleValue){var
remaining=arguments.length,i=remaining,resolveContexts=Array(i),resolveValues=slice.call(arguments),master=jQuery.Deferred(),updateFunc=function(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?slice.call(arguments):value;if(!(--remaining)){master.resolveWith(resolveContexts,resolveValues);}};};if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject,!remaining);if(master.state()==="pending"||isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then();}}
while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject);}
return master.promise();}});var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn).catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({isReady:false,readyWait:1,ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}
if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){window.setTimeout(jQuery.ready);}else{document.addEventListener("DOMContentLoaded",completed);window.addEventListener("load",completed);}
var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;if(toType(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
if(chainable){return elems;}
if(bulk){return fn.call(elems);}
return len?fn(elems[0],key):emptyGet;};var rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g;function fcamelCase(all,letter){return letter.toUpperCase();}
function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);}
var acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);};function Data(){this.expando=jQuery.expando+Data.uid++;}
Data.uid=1;Data.prototype={cache:function(owner){var value=owner[this.expando];if(!value){value={};if(acceptData(owner)){if(owner.nodeType){owner[this.expando]=value;}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}
return value;},set:function(owner,data,value){var prop,cache=this.cache(owner);if(typeof data==="string"){cache[camelCase(data)]=value;}else{for(prop in data){cache[camelCase(prop)]=data[prop];}}
return cache;},get:function(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][camelCase(key)];},access:function(owner,key,value){if(key===undefined||((key&&typeof key==="string")&&value===undefined)){return this.get(owner,key);}
this.set(owner,key,value);return value!==undefined?value:key;},remove:function(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}
if(key!==undefined){if(Array.isArray(key)){key=key.map(camelCase);}else{key=camelCase(key);key=key in cache?[key]:(key.match(rnothtmlwhite)||[]);}
i=key.length;while(i--){delete cache[key[i]];}}
if(key===undefined||jQuery.isEmptyObject(cache)){if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}
if(data==="false"){return false;}
if(data==="null"){return null;}
if(data===+data+""){return+data;}
if(rbrace.test(data)){return JSON.parse(data);}
return data;}
function dataAttr(elem,key,data){var name;if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}
dataUser.set(elem,key,data);}else{data=undefined;}}
return data;}
jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function(elem,name,data){return dataUser.access(elem,name,data);},removeData:function(elem,name){dataUser.remove(elem,name);},_data:function(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
dataPriv.set(elem,"hasDataAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){dataUser.set(this,key);});}
return access(this,function(value){var data;if(elem&&value===undefined){data=dataUser.get(elem,key);if(data!==undefined){return data;}
data=dataAttr(elem,key);if(data!==undefined){return data;}
return;}
this.each(function(){dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);if(data){if(!queue||Array.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var documentElement=document.documentElement;var isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem);},composed={composed:true};if(documentElement.getRootNode){isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem)||elem.getRootNode(composed)===elem.ownerDocument;};}
var isHiddenWithinTree=function(elem,el){elem=el||elem;return elem.style.display==="none"||elem.style.display===""&&isAttached(elem)&&jQuery.css(elem,"display")==="none";};var swap=function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),initialInUnit=elem.nodeType&&(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){initial=initial/2;unit=unit||initialInUnit[3];initialInUnit=+initial||1;while(maxIterations--){jQuery.style(elem,prop,initialInUnit+unit);if((1-scale)*(1-(scale=currentValue()/initial||0.5))<=0){maxIterations=0;}
initialInUnit=initialInUnit/scale;}
initialInUnit=initialInUnit*2;jQuery.style(elem,prop,initialInUnit+unit);valueParts=valueParts||[];}
if(valueParts){initialInUnit=+initialInUnit||+initial||0;adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}
return adjusted;}
var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}
temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}
defaultDisplayMap[nodeName]=display;return display;}
function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
display=elem.style.display;if(show){if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}
if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";dataPriv.set(elem,"display",display);}}}
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}
return elements;}
jQuery.fn.extend({show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=(/^(?:checkbox|radio)$/i);var rtagName=(/<([a-z][^\/\0>\x20\t\r\n\f]*)/i);var rscriptType=(/^$|^module$|\/(?:java|ecma)script/i);var wrapMap={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}
if(tag===undefined||tag&&nodeName(context,tag)){return jQuery.merge([context],ret);}
return ret;}
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}
var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,attached,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(toType(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||fragment.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
jQuery.merge(nodes,tmp.childNodes);tmp=fragment.firstChild;tmp.textContent="";}}}
fragment.textContent="";i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}
continue;}
attached=isAttached(elem);tmp=getAll(fragment.appendChild(elem),"script");if(attached){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
return fragment;}
(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var
rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}
function returnFalse(){return false;}
function expectSync(elem,type){return(elem===safeActiveElement())===(type==="focus");}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
function on(elem,types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){on(elem,type,selector,data,types[type],one);}
return elem;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return elem;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);if(!elemData){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(selector){jQuery.find.matchesSelector(documentElement,selector);}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function(nativeEvent){var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}
event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.rnamespace||handleObj.namespace===false||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}
if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}
if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}
cur=this;if(delegateCount<handlers.length){handlerQueue.push({elem:cur,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},addProp:function(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{noBubble:true},click:{setup:function(data){var el=this||data;if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){leverageNative(el,"click",returnTrue);}
return false;},trigger:function(data){var el=this||data;if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){leverageNative(el,"click");}
return true;},_default:function(event){var target=event.target;return rcheckableType.test(target.type)&&target.click&&nodeName(target,"input")&&dataPriv.get(target,"click")||nodeName(target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};function leverageNative(el,type,expectSync){if(!expectSync){if(dataPriv.get(el,type)===undefined){jQuery.event.add(el,type,returnTrue);}
return;}
dataPriv.set(el,type,false);jQuery.event.add(el,type,{namespace:false,handler:function(event){var notAsync,result,saved=dataPriv.get(this,type);if((event.isTrigger&1)&&this[type]){if(!saved.length){saved=slice.call(arguments);dataPriv.set(this,type,saved);notAsync=expectSync(this,type);this[type]();result=dataPriv.get(this,type);if(saved!==result||notAsync){dataPriv.set(this,type,false);}else{result={};}
if(saved!==result){event.stopImmediatePropagation();event.preventDefault();return result.value;}}else if((jQuery.event.special[type]||{}).delegateType){event.stopPropagation();}}else if(saved.length){dataPriv.set(this,type,{value:jQuery.event.trigger(jQuery.extend(saved[0],jQuery.Event.prototype),saved.slice(1),this)});event.stopImmediatePropagation();}}});}
jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;this.target=(src.target&&src.target.nodeType===3)?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||Date.now();this[jQuery.expando]=true;};jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}
this.stopPropagation();}};jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,code:true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function(event){var button=event.button;if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode;}
if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){if(button&1){return 1;}
if(button&2){return 3;}
if(button&4){return 2;}
return 0;}
return event.which;}},jQuery.event.addProp);jQuery.each({focus:"focusin",blur:"focusout"},function(type,delegateType){jQuery.event.special[type]={setup:function(){leverageNative(this,type,expectSync);return false;},trigger:function(){leverageNative(this,type);return true;},delegateType:delegateType};});jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn);},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,rnoInnerhtml=/<script|<style|<link/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){if(nodeName(elem,"table")&&nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return jQuery(elem).children("tbody")[0]||elem;}
return elem;}
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){if((elem.type||"").slice(0,5)==="true/"){elem.type=elem.type.slice(5);}else{elem.removeAttribute("type");}
return elem;}
function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}
if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
function domManip(collection,args,callback,ignored){args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],valueIsFunction=isFunction(value);if(valueIsFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return collection.each(function(index){var self=collection.eq(index);if(valueIsFunction){args[0]=value.call(this,index,self.html());}
domManip(self,args,callback,ignored);});}
if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(collection[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src&&(node.type||"").toLowerCase()!=="module"){if(jQuery._evalUrl&&!node.noModule){jQuery._evalUrl(node.src,{nonce:node.nonce||node.getAttribute("nonce")});}}else{DOMEval(node.textContent.replace(rcleanScript,""),node,doc);}}}}}}
return collection;}
function remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}
if(node.parentNode){if(keepData&&isAttached(node)){setGlobalEval(getAll(node,"script"));}
node.parentNode.removeChild(node);}}
return elem;}
jQuery.extend({htmlPrefilter:function(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=isAttached(elem);if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
return clone;},cleanData:function(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if((data=elem[dataPriv.expando])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
elem[dataPriv.expando]=undefined;}
if(elem[dataUser.expando]){elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function(selector){return remove(this,selector,true);},remove:function(selector){return remove(this,selector);},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.textContent="";}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var ignored=[];return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());}
return this.pushStack(ret);};});var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}
return view.getComputedStyle(elem);};var rboxStyle=new RegExp(cssExpand.join("|"),"i");(function(){function computeStyleTests(){if(!div){return;}
container.style.cssText="position:absolute;left:-11111px;width:60px;"+"margin-top:1px;padding:0;border:0";div.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;"+"margin:auto;border:1px;padding:1px;"+"width:60%;top:1%";documentElement.appendChild(container).appendChild(div);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=roundPixelMeasures(divStyle.marginLeft)===12;div.style.right="60%";pixelBoxStylesVal=roundPixelMeasures(divStyle.right)===36;boxSizingReliableVal=roundPixelMeasures(divStyle.width)===36;div.style.position="absolute";scrollboxSizeVal=roundPixelMeasures(div.offsetWidth/3)===12;documentElement.removeChild(container);div=null;}
function roundPixelMeasures(measure){return Math.round(parseFloat(measure));}
var pixelPositionVal,boxSizingReliableVal,scrollboxSizeVal,pixelBoxStylesVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return;}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";jQuery.extend(support,{boxSizingReliable:function(){computeStyleTests();return boxSizingReliableVal;},pixelBoxStyles:function(){computeStyleTests();return pixelBoxStylesVal;},pixelPosition:function(){computeStyleTests();return pixelPositionVal;},reliableMarginLeft:function(){computeStyleTests();return reliableMarginLeftVal;},scrollboxSize:function(){computeStyleTests();return scrollboxSizeVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!isAttached(elem)){ret=jQuery.style(elem,name);}
if(!support.pixelBoxStyles()&&rnumnonpx.test(ret)&&rboxStyle.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret!==undefined?ret+"":ret;}
function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;return;}
return(this.get=hookFn).apply(this,arguments);}};}
var cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style,vendorProps={};function vendorPropName(name){var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}
function finalPropName(name){var final=jQuery.cssProps[name]||vendorProps[name];if(final){return final;}
if(name in emptyStyle){return name;}
return vendorProps[name]=vendorPropName(name)||name;}
var
rdisplayswap=/^(none|table(?!-c[ea]).+)/,rcustomProp=/^--/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"};function setPositiveNumber(elem,value,subtract){var matches=rcssNum.exec(value);return matches?Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}
function boxModelAdjustment(elem,dimension,box,isBorderBox,styles,computedVal){var i=dimension==="width"?1:0,extra=0,delta=0;if(box===(isBorderBox?"border":"content")){return 0;}
for(;i<4;i+=2){if(box==="margin"){delta+=jQuery.css(elem,box+cssExpand[i],true,styles);}
if(!isBorderBox){delta+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(box!=="padding"){delta+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}else{extra+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{if(box==="content"){delta-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(box!=="margin"){delta-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
if(!isBorderBox&&computedVal>=0){delta+=Math.max(0,Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
computedVal-
delta-
extra-
0.5))||0;}
return delta;}
function getWidthOrHeight(elem,dimension,extra){var styles=getStyles(elem),boxSizingNeeded=!support.boxSizingReliable()||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",valueIsBorderBox=isBorderBox,val=curCSS(elem,dimension,styles),offsetProp="offset"+dimension[0].toUpperCase()+dimension.slice(1);if(rnumnonpx.test(val)){if(!extra){return val;}
val="auto";}
if((!support.boxSizingReliable()&&isBorderBox||val==="auto"||!parseFloat(val)&&jQuery.css(elem,"display",false,styles)==="inline")&&elem.getClientRects().length){isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";valueIsBorderBox=offsetProp in elem;if(valueIsBorderBox){val=elem[offsetProp];}}
val=parseFloat(val)||0;return(val+
boxModelAdjustment(elem,dimension,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles,val))+"px";}
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"gridArea":true,"gridColumn":true,"gridColumnEnd":true,"gridColumnStart":true,"gridRow":true,"gridRowEnd":true,"gridRowStart":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;if(!isCustomProp){name=finalPropName(origName);}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);type="number";}
if(value==null||value!==value){return;}
if(type==="number"&&!isCustomProp){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){if(isCustomProp){style.setProperty(name,value);}else{style[name]=value;}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name);if(!isCustomProp){name=finalPropName(origName);}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}
return val;}});jQuery.each(["height","width"],function(i,dimension){jQuery.cssHooks[dimension]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&(!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,dimension,extra);}):getWidthOrHeight(elem,dimension,extra);}},set:function(elem,value,extra){var matches,styles=getStyles(elem),scrollboxSizeBuggy=!support.scrollboxSize()&&styles.position==="absolute",boxSizingNeeded=scrollboxSizeBuggy||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",subtract=extra?boxModelAdjustment(elem,dimension,extra,isBorderBox,styles):0;if(isBorderBox&&scrollboxSizeBuggy){subtract-=Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
parseFloat(styles[dimension])-
boxModelAdjustment(elem,dimension,"border",false,styles)-
0.5);}
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[dimension]=value;value=jQuery.css(elem,dimension);}
return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(prefix!=="margin"){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(Array.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(jQuery.cssHooks[tween.prop]||tween.elem.style[finalPropName(tween.prop)]!=null)){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){if(inProgress){if(document.hidden===false&&window.requestAnimationFrame){window.requestAnimationFrame(schedule);}else{window.setTimeout(schedule,jQuery.fx.interval);}
jQuery.fx.tick();}}
function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return(fxNow=Date.now());}
function genFx(type,includeWidth){var which,i=0,attrs={height:type};includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}
if(isBox&&elem.nodeType===1){opts.overflow=[style.overflow,style.overflowX,style.overflowY];restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}
display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}
style.display="inline-block";}}}
if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}
propTween=false;for(prop in orig){if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){showHide([elem],true);}
anim.done(function(){if(!hidden){showHide([elem]);}
dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}
if(!length){deferred.notifyWith(elem,[animation,1,0]);}
deferred.resolveWith(elem,[animation]);return false;},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=result.stop.bind(result);}
return result;}}
jQuery.map(props,createTween,animation);if(isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation;}
jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function(props,callback){if(isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!isFunction(easing)&&easing};if(jQuery.fx.off){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}
if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHiddenWithinTree).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=Date.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);jQuery.fx.start();};jQuery.fx.interval=13;jQuery.fx.start=function(){if(inProgress){return;}
inProgress=true;schedule();};jQuery.fx.stop=function(){inProgress=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";support.checkOn=input.value!=="";support.optSelected=opt.selected;input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}
if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
elem.setAttribute(name,value+"");return value;}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}},removeAttr:function(elem,value){var name,i=0,attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){elem.removeAttribute(name);}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}
return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
return(elem[name]=value);}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
return elem[name];},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}
if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}
return-1;}}},propFix:{"for":"htmlFor","class":"className"}});if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}
return null;},set:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}
function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}
function classesToArray(value){if(Array.isArray(value)){return value;}
if(typeof value==="string"){return value.match(rnothtmlwhite)||[];}
return[];}
jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}
classes=classesToArray(value);if(classes.length){while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}
if(!arguments.length){return this.attr("class","");}
classes=classesToArray(value);if(classes.length){while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value,isValidValue=type==="string"||Array.isArray(value);if(typeof stateVal==="boolean"&&isValidValue){return stateVal?this.addClass(value):this.removeClass(value);}
if(isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}
return this.each(function(){var className,i,self,classNames;if(isValidValue){i=0;self=jQuery(this);classNames=classesToArray(value);while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){dataPriv.set(this,"__className__",className);}
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while((elem=this[i++])){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}
return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,valueIsFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;if(typeof ret==="string"){return ret.replace(rreturn,"");}
return ret==null?"":ret;}
return;}
valueIsFunction=isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(valueIsFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(Array.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:stripAndCollapse(jQuery.text(elem));}},select:{get:function(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}
for(;i<max;i++){option=options[i];if((option.selected||i===index)&&!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}}
if(!optionSet){elem.selectedIndex=-1;}
return values;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(Array.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});support.focusin="onfocusin"in window;var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,stopPropagationCallback=function(e){e.stopPropagation();};jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,lastElement,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=lastElement=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){lastElement=cur;event.type=i>1?bubbleType:special.bindType||type;handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){if(ontype&&isFunction(elem[type])&&!isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;if(event.isPropagationStopped()){lastElement.addEventListener(type,stopPropagationCallback);}
elem[type]();if(event.isPropagationStopped()){lastElement.removeEventListener(type,stopPropagationCallback);}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}
var location=window.location;var nonce=Date.now();var rquery=(/\?/);jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}
try{xml=(new window.DOMParser()).parseFromString(data,"text/xml");}catch(e){xml=undefined;}
if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;};var
rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(Array.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&toType(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,valueOrFunction){var value=isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+
encodeURIComponent(value==null?"":value);};if(a==null){return"";}
if(Array.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();if(val==null){return null;}
if(Array.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var
r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,prefilters={},transports={},allTypes="*/".concat("*"),originAnchor=document.createElement("a");originAnchor.href=location.href;function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":JSON.parse,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,urlAnchor,completed,fireGlobals,i,uncached,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()+" "]=(responseHeaders[match[1].toLowerCase()+" "]||[]).concat(match[2]);}}
match=responseHeaders[key.toLowerCase()+" "];}
return match==null?null:match.join(", ");},getAllResponseHeaders:function(){return completed?responseHeadersString:null;},setRequestHeader:function(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(completed==null){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(completed){jqXHR.always(map[jqXHR.status]);}else{for(code in map){statusCode[code]=[statusCode[code],map[code]];}}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR);s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];if(s.crossDomain==null){urlAnchor=document.createElement("a");try{urlAnchor.href=s.url;urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){s.crossDomain=true;}}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(completed){return jqXHR;}
fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url.replace(rhash,"");if(!s.hasContent){uncached=s.url.slice(cacheURL.length);if(s.data&&(s.processData||typeof s.data==="string")){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;delete s.data;}
if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+(nonce++)+uncached;}
s.url=cacheURL+uncached;}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){return jqXHR.abort();}
strAbort="abort";completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(completed){return jqXHR;}
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{completed=false;transport.send(requestHeaders,done);}catch(e){if(completed){throw e;}
done(-1,e);}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(completed){return;}
completed=true;if(timeoutTimer){window.clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url,options){return jQuery.ajax({url:url,type:"GET",dataType:"script",cache:true,async:false,global:false,converters:{"text script":function(){}},dataFilter:function(response){jQuery.globalEval(response,options);}});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(this[0]){if(isFunction(html)){html=html.call(this[0]);}
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var htmlIsFunction=isFunction(html);return this.each(function(i){jQuery(this).wrapAll(htmlIsFunction?html.call(this,i):html);});},unwrap:function(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback;if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
for(i in headers){xhr.setRequestHeader(i,headers[i]);}
callback=function(type){return function(){if(callback){callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.ontimeout=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};xhr.onload=callback();errorCallback=xhr.onerror=xhr.ontimeout=callback("error");if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){if(xhr.readyState===4){window.setTimeout(function(){if(callback){errorCallback();}});}};}
callback=callback("abort");try{xhr.send(options.hasContent&&options.data||null);}catch(e){if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}});jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var script,callback;return{send:function(_,complete){script=jQuery("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){if(overwritten===undefined){jQuery(window).removeProp(callbackName);}else{window[callbackName]=overwritten;}
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});support.createHTMLDocument=(function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;})();jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}
if(typeof context==="boolean"){keepScripts=context;context=false;}
var base,parsed,scripts;if(!context){if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}
parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);};jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}
if(isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type||"GET",dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative";}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(isFunction(options)){options=options.call(elem,i,jQuery.extend({},curOffset));}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var rect,win,elem=this[0];if(!elem){return;}
if(!elem.getClientRects().length){return{top:0,left:0};}
rect=elem.getBoundingClientRect();win=elem.ownerDocument.defaultView;return{top:rect.top+win.pageYOffset,left:rect.left+win.pageXOffset};},position:function(){if(!this[0]){return;}
var offsetParent,offset,doc,elem=this[0],parentOffset={top:0,left:0};if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offset=this.offset();doc=elem.ownerDocument;offsetParent=elem.offsetParent||doc.documentElement;while(offsetParent&&(offsetParent===doc.body||offsetParent===doc.documentElement)&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.parentNode;}
if(offsetParent&&offsetParent!==elem&&offsetParent.nodeType===1){parentOffset=jQuery(offsetParent).offset();parentOffset.top+=jQuery.css(offsetParent,"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent,"borderLeftWidth",true);}}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}
return offsetParent||documentElement;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win;if(isWindow(elem)){win=elem;}else if(elem.nodeType===9){win=elem.defaultView;}
if(val===undefined){return win?win[prop]:elem[method];}
if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(isWindow(elem)){return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});jQuery.proxy=function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!isFunction(fn)){return undefined;}
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;};jQuery.holdReady=function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}};jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;jQuery.isFunction=isFunction;jQuery.isWindow=isWindow;jQuery.camelCase=camelCase;jQuery.type=toType;jQuery.now=Date.now;jQuery.isNumeric=function(obj){var type=jQuery.type(obj);return(type==="number"||type==="string")&&!isNaN(obj-parseFloat(obj));};if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
var
_jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;};if(!noGlobal){window.jQuery=window.$=jQuery;}
return jQuery;});var django=django||{};django.jQuery=jQuery
var yl=yl||{};yl.jQuery=django.jQuery/*!
 * JavaScript Cookie v2.1.2
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */;(function(factory){if(typeof define==='function'&&define.amd){define(factory);}else if(typeof exports==='object'){module.exports=factory();}else{var OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=OldCookies;return api;};}}(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key];}}
return result;}
function init(converter){function api(key,value,attributes){var result;if(typeof document==='undefined'){return;}
if(arguments.length>1){attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number'){var expires=new Date();expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);attributes.expires=expires;}
try{result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result;}}catch(e){}
if(!converter.write){value=encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);}else{value=converter.write(value,key);}
key=encodeURIComponent(String(key));key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);key=key.replace(/[\(\)]/g,escape);return(document.cookie=[key,'=',value,attributes.expires&&'; expires='+attributes.expires.toUTCString(),attributes.path&&'; path='+attributes.path,attributes.domain&&'; domain='+attributes.domain,attributes.secure?'; secure':''].join(''));}
if(!key){result={};}
var cookies=document.cookie?document.cookie.split('; '):[];var rdecode=/(%[0-9A-Z]{2})+/g;var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('=');var cookie=parts.slice(1).join('=');if(cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1);}
try{var name=parts[0].replace(rdecode,decodeURIComponent);cookie=converter.read?converter.read(cookie,name):converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent);if(this.json){try{cookie=JSON.parse(cookie);}catch(e){}}
if(key===name){result=cookie;break;}
if(!key){result[name]=cookie;}}catch(e){}}
return result;}
api.set=api;api.get=function(key){return api(key);};api.getJSON=function(){return api.apply({json:true},[].slice.call(arguments));};api.defaults={};api.remove=function(key,attributes){api(key,'',extend(attributes,{expires:-1}));};api.withConverter=init;return api;}
return init(function(){});}));(function(){var root=this;var previousUnderscore=root._;var ArrayProto=Array.prototype,ObjProto=Object.prototype,FuncProto=Function.prototype;var
push=ArrayProto.push,slice=ArrayProto.slice,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty;var
nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeBind=FuncProto.bind,nativeCreate=Object.create;var Ctor=function(){};var _=function(obj){if(obj instanceof _)return obj;if(!(this instanceof _))return new _(obj);this._wrapped=obj;};if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=_;}
exports._=_;}else{root._=_;}
_.VERSION='1.8.3';var optimizeCb=function(func,context,argCount){if(context===void 0)return func;switch(argCount==null?3:argCount){case 1:return function(value){return func.call(context,value);};case 2:return function(value,other){return func.call(context,value,other);};case 3:return function(value,index,collection){return func.call(context,value,index,collection);};case 4:return function(accumulator,value,index,collection){return func.call(context,accumulator,value,index,collection);};}
return function(){return func.apply(context,arguments);};};var cb=function(value,context,argCount){if(value==null)return _.identity;if(_.isFunction(value))return optimizeCb(value,context,argCount);if(_.isObject(value))return _.matcher(value);return _.property(value);};_.iteratee=function(value,context){return cb(value,context,Infinity);};var createAssigner=function(keysFunc,undefinedOnly){return function(obj){var length=arguments.length;if(length<2||obj==null)return obj;for(var index=1;index<length;index++){var source=arguments[index],keys=keysFunc(source),l=keys.length;for(var i=0;i<l;i++){var key=keys[i];if(!undefinedOnly||obj[key]===void 0)obj[key]=source[key];}}
return obj;};};var baseCreate=function(prototype){if(!_.isObject(prototype))return{};if(nativeCreate)return nativeCreate(prototype);Ctor.prototype=prototype;var result=new Ctor;Ctor.prototype=null;return result;};var property=function(key){return function(obj){return obj==null?void 0:obj[key];};};var MAX_ARRAY_INDEX=Math.pow(2,53)-1;var getLength=property('length');var isArrayLike=function(collection){var length=getLength(collection);return typeof length=='number'&&length>=0&&length<=MAX_ARRAY_INDEX;};_.each=_.forEach=function(obj,iteratee,context){iteratee=optimizeCb(iteratee,context);var i,length;if(isArrayLike(obj)){for(i=0,length=obj.length;i<length;i++){iteratee(obj[i],i,obj);}}else{var keys=_.keys(obj);for(i=0,length=keys.length;i<length;i++){iteratee(obj[keys[i]],keys[i],obj);}}
return obj;};_.map=_.collect=function(obj,iteratee,context){iteratee=cb(iteratee,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,results=Array(length);for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;results[index]=iteratee(obj[currentKey],currentKey,obj);}
return results;};function createReduce(dir){function iterator(obj,iteratee,memo,keys,index,length){for(;index>=0&&index<length;index+=dir){var currentKey=keys?keys[index]:index;memo=iteratee(memo,obj[currentKey],currentKey,obj);}
return memo;}
return function(obj,iteratee,memo,context){iteratee=optimizeCb(iteratee,context,4);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,index=dir>0?0:length-1;if(arguments.length<3){memo=obj[keys?keys[index]:index];index+=dir;}
return iterator(obj,iteratee,memo,keys,index,length);};}
_.reduce=_.foldl=_.inject=createReduce(1);_.reduceRight=_.foldr=createReduce(-1);_.find=_.detect=function(obj,predicate,context){var key;if(isArrayLike(obj)){key=_.findIndex(obj,predicate,context);}else{key=_.findKey(obj,predicate,context);}
if(key!==void 0&&key!==-1)return obj[key];};_.filter=_.select=function(obj,predicate,context){var results=[];predicate=cb(predicate,context);_.each(obj,function(value,index,list){if(predicate(value,index,list))results.push(value);});return results;};_.reject=function(obj,predicate,context){return _.filter(obj,_.negate(cb(predicate)),context);};_.every=_.all=function(obj,predicate,context){predicate=cb(predicate,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length;for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;if(!predicate(obj[currentKey],currentKey,obj))return false;}
return true;};_.some=_.any=function(obj,predicate,context){predicate=cb(predicate,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length;for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;if(predicate(obj[currentKey],currentKey,obj))return true;}
return false;};_.contains=_.includes=_.include=function(obj,item,fromIndex,guard){if(!isArrayLike(obj))obj=_.values(obj);if(typeof fromIndex!='number'||guard)fromIndex=0;return _.indexOf(obj,item,fromIndex)>=0;};_.invoke=function(obj,method){var args=slice.call(arguments,2);var isFunc=_.isFunction(method);return _.map(obj,function(value){var func=isFunc?method:value[method];return func==null?func:func.apply(value,args);});};_.pluck=function(obj,key){return _.map(obj,_.property(key));};_.where=function(obj,attrs){return _.filter(obj,_.matcher(attrs));};_.findWhere=function(obj,attrs){return _.find(obj,_.matcher(attrs));};_.max=function(obj,iteratee,context){var result=-Infinity,lastComputed=-Infinity,value,computed;if(iteratee==null&&obj!=null){obj=isArrayLike(obj)?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++){value=obj[i];if(value>result){result=value;}}}else{iteratee=cb(iteratee,context);_.each(obj,function(value,index,list){computed=iteratee(value,index,list);if(computed>lastComputed||computed===-Infinity&&result===-Infinity){result=value;lastComputed=computed;}});}
return result;};_.min=function(obj,iteratee,context){var result=Infinity,lastComputed=Infinity,value,computed;if(iteratee==null&&obj!=null){obj=isArrayLike(obj)?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++){value=obj[i];if(value<result){result=value;}}}else{iteratee=cb(iteratee,context);_.each(obj,function(value,index,list){computed=iteratee(value,index,list);if(computed<lastComputed||computed===Infinity&&result===Infinity){result=value;lastComputed=computed;}});}
return result;};_.shuffle=function(obj){var set=isArrayLike(obj)?obj:_.values(obj);var length=set.length;var shuffled=Array(length);for(var index=0,rand;index<length;index++){rand=_.random(0,index);if(rand!==index)shuffled[index]=shuffled[rand];shuffled[rand]=set[index];}
return shuffled;};_.sample=function(obj,n,guard){if(n==null||guard){if(!isArrayLike(obj))obj=_.values(obj);return obj[_.random(obj.length-1)];}
return _.shuffle(obj).slice(0,Math.max(0,n));};_.sortBy=function(obj,iteratee,context){iteratee=cb(iteratee,context);return _.pluck(_.map(obj,function(value,index,list){return{value:value,index:index,criteria:iteratee(value,index,list)};}).sort(function(left,right){var a=left.criteria;var b=right.criteria;if(a!==b){if(a>b||a===void 0)return 1;if(a<b||b===void 0)return-1;}
return left.index-right.index;}),'value');};var group=function(behavior){return function(obj,iteratee,context){var result={};iteratee=cb(iteratee,context);_.each(obj,function(value,index){var key=iteratee(value,index,obj);behavior(result,value,key);});return result;};};_.groupBy=group(function(result,value,key){if(_.has(result,key))result[key].push(value);else result[key]=[value];});_.indexBy=group(function(result,value,key){result[key]=value;});_.countBy=group(function(result,value,key){if(_.has(result,key))result[key]++;else result[key]=1;});_.toArray=function(obj){if(!obj)return[];if(_.isArray(obj))return slice.call(obj);if(isArrayLike(obj))return _.map(obj,_.identity);return _.values(obj);};_.size=function(obj){if(obj==null)return 0;return isArrayLike(obj)?obj.length:_.keys(obj).length;};_.partition=function(obj,predicate,context){predicate=cb(predicate,context);var pass=[],fail=[];_.each(obj,function(value,key,obj){(predicate(value,key,obj)?pass:fail).push(value);});return[pass,fail];};_.first=_.head=_.take=function(array,n,guard){if(array==null)return void 0;if(n==null||guard)return array[0];return _.initial(array,array.length-n);};_.initial=function(array,n,guard){return slice.call(array,0,Math.max(0,array.length-(n==null||guard?1:n)));};_.last=function(array,n,guard){if(array==null)return void 0;if(n==null||guard)return array[array.length-1];return _.rest(array,Math.max(0,array.length-n));};_.rest=_.tail=_.drop=function(array,n,guard){return slice.call(array,n==null||guard?1:n);};_.compact=function(array){return _.filter(array,_.identity);};var flatten=function(input,shallow,strict,startIndex){var output=[],idx=0;for(var i=startIndex||0,length=getLength(input);i<length;i++){var value=input[i];if(isArrayLike(value)&&(_.isArray(value)||_.isArguments(value))){if(!shallow)value=flatten(value,shallow,strict);var j=0,len=value.length;output.length+=len;while(j<len){output[idx++]=value[j++];}}else if(!strict){output[idx++]=value;}}
return output;};_.flatten=function(array,shallow){return flatten(array,shallow,false);};_.without=function(array){return _.difference(array,slice.call(arguments,1));};_.uniq=_.unique=function(array,isSorted,iteratee,context){if(!_.isBoolean(isSorted)){context=iteratee;iteratee=isSorted;isSorted=false;}
if(iteratee!=null)iteratee=cb(iteratee,context);var result=[];var seen=[];for(var i=0,length=getLength(array);i<length;i++){var value=array[i],computed=iteratee?iteratee(value,i,array):value;if(isSorted){if(!i||seen!==computed)result.push(value);seen=computed;}else if(iteratee){if(!_.contains(seen,computed)){seen.push(computed);result.push(value);}}else if(!_.contains(result,value)){result.push(value);}}
return result;};_.union=function(){return _.uniq(flatten(arguments,true,true));};_.intersection=function(array){var result=[];var argsLength=arguments.length;for(var i=0,length=getLength(array);i<length;i++){var item=array[i];if(_.contains(result,item))continue;for(var j=1;j<argsLength;j++){if(!_.contains(arguments[j],item))break;}
if(j===argsLength)result.push(item);}
return result;};_.difference=function(array){var rest=flatten(arguments,true,true,1);return _.filter(array,function(value){return!_.contains(rest,value);});};_.zip=function(){return _.unzip(arguments);};_.unzip=function(array){var length=array&&_.max(array,getLength).length||0;var result=Array(length);for(var index=0;index<length;index++){result[index]=_.pluck(array,index);}
return result;};_.object=function(list,values){var result={};for(var i=0,length=getLength(list);i<length;i++){if(values){result[list[i]]=values[i];}else{result[list[i][0]]=list[i][1];}}
return result;};function createPredicateIndexFinder(dir){return function(array,predicate,context){predicate=cb(predicate,context);var length=getLength(array);var index=dir>0?0:length-1;for(;index>=0&&index<length;index+=dir){if(predicate(array[index],index,array))return index;}
return-1;};}
_.findIndex=createPredicateIndexFinder(1);_.findLastIndex=createPredicateIndexFinder(-1);_.sortedIndex=function(array,obj,iteratee,context){iteratee=cb(iteratee,context,1);var value=iteratee(obj);var low=0,high=getLength(array);while(low<high){var mid=Math.floor((low+high)/2);if(iteratee(array[mid])<value)low=mid+1;else high=mid;}
return low;};function createIndexFinder(dir,predicateFind,sortedIndex){return function(array,item,idx){var i=0,length=getLength(array);if(typeof idx=='number'){if(dir>0){i=idx>=0?idx:Math.max(idx+length,i);}else{length=idx>=0?Math.min(idx+1,length):idx+length+1;}}else if(sortedIndex&&idx&&length){idx=sortedIndex(array,item);return array[idx]===item?idx:-1;}
if(item!==item){idx=predicateFind(slice.call(array,i,length),_.isNaN);return idx>=0?idx+i:-1;}
for(idx=dir>0?i:length-1;idx>=0&&idx<length;idx+=dir){if(array[idx]===item)return idx;}
return-1;};}
_.indexOf=createIndexFinder(1,_.findIndex,_.sortedIndex);_.lastIndexOf=createIndexFinder(-1,_.findLastIndex);_.range=function(start,stop,step){if(stop==null){stop=start||0;start=0;}
step=step||1;var length=Math.max(Math.ceil((stop-start)/step),0);var range=Array(length);for(var idx=0;idx<length;idx++,start+=step){range[idx]=start;}
return range;};var executeBound=function(sourceFunc,boundFunc,context,callingContext,args){if(!(callingContext instanceof boundFunc))return sourceFunc.apply(context,args);var self=baseCreate(sourceFunc.prototype);var result=sourceFunc.apply(self,args);if(_.isObject(result))return result;return self;};_.bind=function(func,context){if(nativeBind&&func.bind===nativeBind)return nativeBind.apply(func,slice.call(arguments,1));if(!_.isFunction(func))throw new TypeError('Bind must be called on a function');var args=slice.call(arguments,2);var bound=function(){return executeBound(func,bound,context,this,args.concat(slice.call(arguments)));};return bound;};_.partial=function(func){var boundArgs=slice.call(arguments,1);var bound=function(){var position=0,length=boundArgs.length;var args=Array(length);for(var i=0;i<length;i++){args[i]=boundArgs[i]===_?arguments[position++]:boundArgs[i];}
while(position<arguments.length)args.push(arguments[position++]);return executeBound(func,bound,this,this,args);};return bound;};_.bindAll=function(obj){var i,length=arguments.length,key;if(length<=1)throw new Error('bindAll must be passed function names');for(i=1;i<length;i++){key=arguments[i];obj[key]=_.bind(obj[key],obj);}
return obj;};_.memoize=function(func,hasher){var memoize=function(key){var cache=memoize.cache;var address=''+(hasher?hasher.apply(this,arguments):key);if(!_.has(cache,address))cache[address]=func.apply(this,arguments);return cache[address];};memoize.cache={};return memoize;};_.delay=function(func,wait){var args=slice.call(arguments,2);return setTimeout(function(){return func.apply(null,args);},wait);};_.defer=_.partial(_.delay,_,1);_.throttle=function(func,wait,options){var context,args,result;var timeout=null;var previous=0;if(!options)options={};var later=function(){previous=options.leading===false?0:_.now();timeout=null;result=func.apply(context,args);if(!timeout)context=args=null;};return function(){var now=_.now();if(!previous&&options.leading===false)previous=now;var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0||remaining>wait){if(timeout){clearTimeout(timeout);timeout=null;}
previous=now;result=func.apply(context,args);if(!timeout)context=args=null;}else if(!timeout&&options.trailing!==false){timeout=setTimeout(later,remaining);}
return result;};};_.debounce=function(func,wait,immediate){var timeout,args,context,timestamp,result;var later=function(){var last=_.now()-timestamp;if(last<wait&&last>=0){timeout=setTimeout(later,wait-last);}else{timeout=null;if(!immediate){result=func.apply(context,args);if(!timeout)context=args=null;}}};return function(){context=this;args=arguments;timestamp=_.now();var callNow=immediate&&!timeout;if(!timeout)timeout=setTimeout(later,wait);if(callNow){result=func.apply(context,args);context=args=null;}
return result;};};_.wrap=function(func,wrapper){return _.partial(wrapper,func);};_.negate=function(predicate){return function(){return!predicate.apply(this,arguments);};};_.compose=function(){var args=arguments;var start=args.length-1;return function(){var i=start;var result=args[start].apply(this,arguments);while(i--)result=args[i].call(this,result);return result;};};_.after=function(times,func){return function(){if(--times<1){return func.apply(this,arguments);}};};_.before=function(times,func){var memo;return function(){if(--times>0){memo=func.apply(this,arguments);}
if(times<=1)func=null;return memo;};};_.once=_.partial(_.before,2);var hasEnumBug=!{toString:null}.propertyIsEnumerable('toString');var nonEnumerableProps=['valueOf','isPrototypeOf','toString','propertyIsEnumerable','hasOwnProperty','toLocaleString'];function collectNonEnumProps(obj,keys){var nonEnumIdx=nonEnumerableProps.length;var constructor=obj.constructor;var proto=(_.isFunction(constructor)&&constructor.prototype)||ObjProto;var prop='constructor';if(_.has(obj,prop)&&!_.contains(keys,prop))keys.push(prop);while(nonEnumIdx--){prop=nonEnumerableProps[nonEnumIdx];if(prop in obj&&obj[prop]!==proto[prop]&&!_.contains(keys,prop)){keys.push(prop);}}}
_.keys=function(obj){if(!_.isObject(obj))return[];if(nativeKeys)return nativeKeys(obj);var keys=[];for(var key in obj)if(_.has(obj,key))keys.push(key);if(hasEnumBug)collectNonEnumProps(obj,keys);return keys;};_.allKeys=function(obj){if(!_.isObject(obj))return[];var keys=[];for(var key in obj)keys.push(key);if(hasEnumBug)collectNonEnumProps(obj,keys);return keys;};_.values=function(obj){var keys=_.keys(obj);var length=keys.length;var values=Array(length);for(var i=0;i<length;i++){values[i]=obj[keys[i]];}
return values;};_.mapObject=function(obj,iteratee,context){iteratee=cb(iteratee,context);var keys=_.keys(obj),length=keys.length,results={},currentKey;for(var index=0;index<length;index++){currentKey=keys[index];results[currentKey]=iteratee(obj[currentKey],currentKey,obj);}
return results;};_.pairs=function(obj){var keys=_.keys(obj);var length=keys.length;var pairs=Array(length);for(var i=0;i<length;i++){pairs[i]=[keys[i],obj[keys[i]]];}
return pairs;};_.invert=function(obj){var result={};var keys=_.keys(obj);for(var i=0,length=keys.length;i<length;i++){result[obj[keys[i]]]=keys[i];}
return result;};_.functions=_.methods=function(obj){var names=[];for(var key in obj){if(_.isFunction(obj[key]))names.push(key);}
return names.sort();};_.extend=createAssigner(_.allKeys);_.extendOwn=_.assign=createAssigner(_.keys);_.findKey=function(obj,predicate,context){predicate=cb(predicate,context);var keys=_.keys(obj),key;for(var i=0,length=keys.length;i<length;i++){key=keys[i];if(predicate(obj[key],key,obj))return key;}};_.pick=function(object,oiteratee,context){var result={},obj=object,iteratee,keys;if(obj==null)return result;if(_.isFunction(oiteratee)){keys=_.allKeys(obj);iteratee=optimizeCb(oiteratee,context);}else{keys=flatten(arguments,false,false,1);iteratee=function(value,key,obj){return key in obj;};obj=Object(obj);}
for(var i=0,length=keys.length;i<length;i++){var key=keys[i];var value=obj[key];if(iteratee(value,key,obj))result[key]=value;}
return result;};_.omit=function(obj,iteratee,context){if(_.isFunction(iteratee)){iteratee=_.negate(iteratee);}else{var keys=_.map(flatten(arguments,false,false,1),String);iteratee=function(value,key){return!_.contains(keys,key);};}
return _.pick(obj,iteratee,context);};_.defaults=createAssigner(_.allKeys,true);_.create=function(prototype,props){var result=baseCreate(prototype);if(props)_.extendOwn(result,props);return result;};_.clone=function(obj){if(!_.isObject(obj))return obj;return _.isArray(obj)?obj.slice():_.extend({},obj);};_.tap=function(obj,interceptor){interceptor(obj);return obj;};_.isMatch=function(object,attrs){var keys=_.keys(attrs),length=keys.length;if(object==null)return!length;var obj=Object(object);for(var i=0;i<length;i++){var key=keys[i];if(attrs[key]!==obj[key]||!(key in obj))return false;}
return true;};var eq=function(a,b,aStack,bStack){if(a===b)return a!==0||1/a===1/b;if(a==null||b==null)return a===b;if(a instanceof _)a=a._wrapped;if(b instanceof _)b=b._wrapped;var className=toString.call(a);if(className!==toString.call(b))return false;switch(className){case'[object RegExp]':case'[object String]':return''+a===''+b;case'[object Number]':if(+a!==+a)return+b!==+b;return+a===0?1/+a===1/b:+a===+b;case'[object Date]':case'[object Boolean]':return+a===+b;}
var areArrays=className==='[object Array]';if(!areArrays){if(typeof a!='object'||typeof b!='object')return false;var aCtor=a.constructor,bCtor=b.constructor;if(aCtor!==bCtor&&!(_.isFunction(aCtor)&&aCtor instanceof aCtor&&_.isFunction(bCtor)&&bCtor instanceof bCtor)&&('constructor'in a&&'constructor'in b)){return false;}}
aStack=aStack||[];bStack=bStack||[];var length=aStack.length;while(length--){if(aStack[length]===a)return bStack[length]===b;}
aStack.push(a);bStack.push(b);if(areArrays){length=a.length;if(length!==b.length)return false;while(length--){if(!eq(a[length],b[length],aStack,bStack))return false;}}else{var keys=_.keys(a),key;length=keys.length;if(_.keys(b).length!==length)return false;while(length--){key=keys[length];if(!(_.has(b,key)&&eq(a[key],b[key],aStack,bStack)))return false;}}
aStack.pop();bStack.pop();return true;};_.isEqual=function(a,b){return eq(a,b);};_.isEmpty=function(obj){if(obj==null)return true;if(isArrayLike(obj)&&(_.isArray(obj)||_.isString(obj)||_.isArguments(obj)))return obj.length===0;return _.keys(obj).length===0;};_.isElement=function(obj){return!!(obj&&obj.nodeType===1);};_.isArray=nativeIsArray||function(obj){return toString.call(obj)==='[object Array]';};_.isObject=function(obj){var type=typeof obj;return type==='function'||type==='object'&&!!obj;};_.each(['Arguments','Function','String','Number','Date','RegExp','Error'],function(name){_['is'+name]=function(obj){return toString.call(obj)==='[object '+name+']';};});if(!_.isArguments(arguments)){_.isArguments=function(obj){return _.has(obj,'callee');};}
if(typeof/./!='function'&&typeof Int8Array!='object'){_.isFunction=function(obj){return typeof obj=='function'||false;};}
_.isFinite=function(obj){return isFinite(obj)&&!isNaN(parseFloat(obj));};_.isNaN=function(obj){return _.isNumber(obj)&&obj!==+obj;};_.isBoolean=function(obj){return obj===true||obj===false||toString.call(obj)==='[object Boolean]';};_.isNull=function(obj){return obj===null;};_.isUndefined=function(obj){return obj===void 0;};_.has=function(obj,key){return obj!=null&&hasOwnProperty.call(obj,key);};_.noConflict=function(){root._=previousUnderscore;return this;};_.identity=function(value){return value;};_.constant=function(value){return function(){return value;};};_.noop=function(){};_.property=property;_.propertyOf=function(obj){return obj==null?function(){}:function(key){return obj[key];};};_.matcher=_.matches=function(attrs){attrs=_.extendOwn({},attrs);return function(obj){return _.isMatch(obj,attrs);};};_.times=function(n,iteratee,context){var accum=Array(Math.max(0,n));iteratee=optimizeCb(iteratee,context,1);for(var i=0;i<n;i++)accum[i]=iteratee(i);return accum;};_.random=function(min,max){if(max==null){max=min;min=0;}
return min+Math.floor(Math.random()*(max-min+1));};_.now=Date.now||function(){return new Date().getTime();};var escapeMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;','`':'&#x60;'};var unescapeMap=_.invert(escapeMap);var createEscaper=function(map){var escaper=function(match){return map[match];};var source='(?:'+_.keys(map).join('|')+')';var testRegexp=RegExp(source);var replaceRegexp=RegExp(source,'g');return function(string){string=string==null?'':''+string;return testRegexp.test(string)?string.replace(replaceRegexp,escaper):string;};};_.escape=createEscaper(escapeMap);_.unescape=createEscaper(unescapeMap);_.result=function(object,property,fallback){var value=object==null?void 0:object[property];if(value===void 0){value=fallback;}
return _.isFunction(value)?value.call(object):value;};var idCounter=0;_.uniqueId=function(prefix){var id=++idCounter+'';return prefix?prefix+id:id;};_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var noMatch=/(.)^/;var escapes={"'":"'",'\\':'\\','\r':'r','\n':'n','\u2028':'u2028','\u2029':'u2029'};var escaper=/\\|'|\r|\n|\u2028|\u2029/g;var escapeChar=function(match){return'\\'+escapes[match];};_.template=function(text,settings,oldSettings){if(!settings&&oldSettings)settings=oldSettings;settings=_.defaults({},settings,_.templateSettings);var matcher=RegExp([(settings.escape||noMatch).source,(settings.interpolate||noMatch).source,(settings.evaluate||noMatch).source].join('|')+'|$','g');var index=0;var source="__p+='";text.replace(matcher,function(match,escape,interpolate,evaluate,offset){source+=text.slice(index,offset).replace(escaper,escapeChar);index=offset+match.length;if(escape){source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'";}else if(interpolate){source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";}else if(evaluate){source+="';\n"+evaluate+"\n__p+='";}
return match;});source+="';\n";if(!settings.variable)source='with(obj||{}){\n'+source+'}\n';source="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+
source+'return __p;\n';try{var render=new Function(settings.variable||'obj','_',source);}catch(e){e.source=source;throw e;}
var template=function(data){return render.call(this,data,_);};var argument=settings.variable||'obj';template.source='function('+argument+'){\n'+source+'}';return template;};_.chain=function(obj){var instance=_(obj);instance._chain=true;return instance;};var result=function(instance,obj){return instance._chain?_(obj).chain():obj;};_.mixin=function(obj){_.each(_.functions(obj),function(name){var func=_[name]=obj[name];_.prototype[name]=function(){var args=[this._wrapped];push.apply(args,arguments);return result(this,func.apply(_,args));};});};_.mixin(_);_.each(['pop','push','reverse','shift','sort','splice','unshift'],function(name){var method=ArrayProto[name];_.prototype[name]=function(){var obj=this._wrapped;method.apply(obj,arguments);if((name==='shift'||name==='splice')&&obj.length===0)delete obj[0];return result(this,obj);};});_.each(['concat','join','slice'],function(name){var method=ArrayProto[name];_.prototype[name]=function(){return result(this,method.apply(this._wrapped,arguments));};});_.prototype.value=function(){return this._wrapped;};_.prototype.valueOf=_.prototype.toJSON=_.prototype.value;_.prototype.toString=function(){return''+this._wrapped;};if(typeof define==='function'&&define.amd){define('underscore',[],function(){return _;});}}.call(this));;(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):global.moment=factory()}(this,function(){'use strict';var hookCallback;function utils_hooks__hooks(){return hookCallback.apply(null,arguments);}
function setHookCallback(callback){hookCallback=callback;}
function isArray(input){return input instanceof Array||Object.prototype.toString.call(input)==='[object Array]';}
function isDate(input){return input instanceof Date||Object.prototype.toString.call(input)==='[object Date]';}
function map(arr,fn){var res=[],i;for(i=0;i<arr.length;++i){res.push(fn(arr[i],i));}
return res;}
function hasOwnProp(a,b){return Object.prototype.hasOwnProperty.call(a,b);}
function extend(a,b){for(var i in b){if(hasOwnProp(b,i)){a[i]=b[i];}}
if(hasOwnProp(b,'toString')){a.toString=b.toString;}
if(hasOwnProp(b,'valueOf')){a.valueOf=b.valueOf;}
return a;}
function create_utc__createUTC(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,true).utc();}
function defaultParsingFlags(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false,parsedDateParts:[],meridiem:null};}
function getParsingFlags(m){if(m._pf==null){m._pf=defaultParsingFlags();}
return m._pf;}
var some;if(Array.prototype.some){some=Array.prototype.some;}else{some=function(fun){var t=Object(this);var len=t.length>>>0;for(var i=0;i<len;i++){if(i in t&&fun.call(this,t[i],i,t)){return true;}}
return false;};}
function valid__isValid(m){if(m._isValid==null){var flags=getParsingFlags(m);var parsedParts=some.call(flags.parsedDateParts,function(i){return i!=null;});m._isValid=!isNaN(m._d.getTime())&&flags.overflow<0&&!flags.empty&&!flags.invalidMonth&&!flags.invalidWeekday&&!flags.nullInput&&!flags.invalidFormat&&!flags.userInvalidated&&(!flags.meridiem||(flags.meridiem&&parsedParts));if(m._strict){m._isValid=m._isValid&&flags.charsLeftOver===0&&flags.unusedTokens.length===0&&flags.bigHour===undefined;}}
return m._isValid;}
function valid__createInvalid(flags){var m=create_utc__createUTC(NaN);if(flags!=null){extend(getParsingFlags(m),flags);}
else{getParsingFlags(m).userInvalidated=true;}
return m;}
function isUndefined(input){return input===void 0;}
var momentProperties=utils_hooks__hooks.momentProperties=[];function copyConfig(to,from){var i,prop,val;if(!isUndefined(from._isAMomentObject)){to._isAMomentObject=from._isAMomentObject;}
if(!isUndefined(from._i)){to._i=from._i;}
if(!isUndefined(from._f)){to._f=from._f;}
if(!isUndefined(from._l)){to._l=from._l;}
if(!isUndefined(from._strict)){to._strict=from._strict;}
if(!isUndefined(from._tzm)){to._tzm=from._tzm;}
if(!isUndefined(from._isUTC)){to._isUTC=from._isUTC;}
if(!isUndefined(from._offset)){to._offset=from._offset;}
if(!isUndefined(from._pf)){to._pf=getParsingFlags(from);}
if(!isUndefined(from._locale)){to._locale=from._locale;}
if(momentProperties.length>0){for(i in momentProperties){prop=momentProperties[i];val=from[prop];if(!isUndefined(val)){to[prop]=val;}}}
return to;}
var updateInProgress=false;function Moment(config){copyConfig(this,config);this._d=new Date(config._d!=null?config._d.getTime():NaN);if(updateInProgress===false){updateInProgress=true;utils_hooks__hooks.updateOffset(this);updateInProgress=false;}}
function isMoment(obj){return obj instanceof Moment||(obj!=null&&obj._isAMomentObject!=null);}
function absFloor(number){if(number<0){return Math.ceil(number);}else{return Math.floor(number);}}
function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(coercedNumber!==0&&isFinite(coercedNumber)){value=absFloor(coercedNumber);}
return value;}
function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length-array2.length),diffs=0,i;for(i=0;i<len;i++){if((dontConvert&&array1[i]!==array2[i])||(!dontConvert&&toInt(array1[i])!==toInt(array2[i]))){diffs++;}}
return diffs+lengthDiff;}
function warn(msg){if(utils_hooks__hooks.suppressDeprecationWarnings===false&&(typeof console!=='undefined')&&console.warn){console.warn('Deprecation warning: '+msg);}}
function deprecate(msg,fn){var firstTime=true;return extend(function(){if(utils_hooks__hooks.deprecationHandler!=null){utils_hooks__hooks.deprecationHandler(null,msg);}
if(firstTime){warn(msg+'\nArguments: '+Array.prototype.slice.call(arguments).join(', ')+'\n'+(new Error()).stack);firstTime=false;}
return fn.apply(this,arguments);},fn);}
var deprecations={};function deprecateSimple(name,msg){if(utils_hooks__hooks.deprecationHandler!=null){utils_hooks__hooks.deprecationHandler(name,msg);}
if(!deprecations[name]){warn(msg);deprecations[name]=true;}}
utils_hooks__hooks.suppressDeprecationWarnings=false;utils_hooks__hooks.deprecationHandler=null;function isFunction(input){return input instanceof Function||Object.prototype.toString.call(input)==='[object Function]';}
function isObject(input){return Object.prototype.toString.call(input)==='[object Object]';}
function locale_set__set(config){var prop,i;for(i in config){prop=config[i];if(isFunction(prop)){this[i]=prop;}else{this['_'+i]=prop;}}
this._config=config;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+'|'+(/\d{1,2}/).source);}
function mergeConfigs(parentConfig,childConfig){var res=extend({},parentConfig),prop;for(prop in childConfig){if(hasOwnProp(childConfig,prop)){if(isObject(parentConfig[prop])&&isObject(childConfig[prop])){res[prop]={};extend(res[prop],parentConfig[prop]);extend(res[prop],childConfig[prop]);}else if(childConfig[prop]!=null){res[prop]=childConfig[prop];}else{delete res[prop];}}}
return res;}
function Locale(config){if(config!=null){this.set(config);}}
var keys;if(Object.keys){keys=Object.keys;}else{keys=function(obj){var i,res=[];for(i in obj){if(hasOwnProp(obj,i)){res.push(i);}}
return res;};}
var locales={};var globalLocale;function normalizeLocale(key){return key?key.toLowerCase().replace('_','-'):key;}
function chooseLocale(names){var i=0,j,next,locale,split;while(i<names.length){split=normalizeLocale(names[i]).split('-');j=split.length;next=normalizeLocale(names[i+1]);next=next?next.split('-'):null;while(j>0){locale=loadLocale(split.slice(0,j).join('-'));if(locale){return locale;}
if(next&&next.length>=j&&compareArrays(split,next,true)>=j-1){break;}
j--;}
i++;}
return null;}
function loadLocale(name){var oldLocale=null;if(!locales[name]&&(typeof module!=='undefined')&&module&&module.exports){try{oldLocale=globalLocale._abbr;require('./locale/'+name);locale_locales__getSetGlobalLocale(oldLocale);}catch(e){}}
return locales[name];}
function locale_locales__getSetGlobalLocale(key,values){var data;if(key){if(isUndefined(values)){data=locale_locales__getLocale(key);}
else{data=defineLocale(key,values);}
if(data){globalLocale=data;}}
return globalLocale._abbr;}
function defineLocale(name,config){if(config!==null){config.abbr=name;if(locales[name]!=null){deprecateSimple('defineLocaleOverride','use moment.updateLocale(localeName, config) to change '+'an existing locale. moment.defineLocale(localeName, '+'config) should only be used for creating a new locale');config=mergeConfigs(locales[name]._config,config);}else if(config.parentLocale!=null){if(locales[config.parentLocale]!=null){config=mergeConfigs(locales[config.parentLocale]._config,config);}else{deprecateSimple('parentLocaleUndefined','specified parentLocale is not defined yet');}}
locales[name]=new Locale(config);locale_locales__getSetGlobalLocale(name);return locales[name];}else{delete locales[name];return null;}}
function updateLocale(name,config){if(config!=null){var locale;if(locales[name]!=null){config=mergeConfigs(locales[name]._config,config);}
locale=new Locale(config);locale.parentLocale=locales[name];locales[name]=locale;locale_locales__getSetGlobalLocale(name);}else{if(locales[name]!=null){if(locales[name].parentLocale!=null){locales[name]=locales[name].parentLocale;}else if(locales[name]!=null){delete locales[name];}}}
return locales[name];}
function locale_locales__getLocale(key){var locale;if(key&&key._locale&&key._locale._abbr){key=key._locale._abbr;}
if(!key){return globalLocale;}
if(!isArray(key)){locale=loadLocale(key);if(locale){return locale;}
key=[key];}
return chooseLocale(key);}
function locale_locales__listLocales(){return keys(locales);}
var aliases={};function addUnitAlias(unit,shorthand){var lowerCase=unit.toLowerCase();aliases[lowerCase]=aliases[lowerCase+'s']=aliases[shorthand]=unit;}
function normalizeUnits(units){return typeof units==='string'?aliases[units]||aliases[units.toLowerCase()]:undefined;}
function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop];}}}
return normalizedInput;}
function makeGetSet(unit,keepTime){return function(value){if(value!=null){get_set__set(this,unit,value);utils_hooks__hooks.updateOffset(this,keepTime);return this;}else{return get_set__get(this,unit);}};}
function get_set__get(mom,unit){return mom.isValid()?mom._d['get'+(mom._isUTC?'UTC':'')+unit]():NaN;}
function get_set__set(mom,unit,value){if(mom.isValid()){mom._d['set'+(mom._isUTC?'UTC':'')+unit](value);}}
function getSet(units,value){var unit;if(typeof units==='object'){for(unit in units){this.set(unit,units[unit]);}}else{units=normalizeUnits(units);if(isFunction(this[units])){return this[units](value);}}
return this;}
function zeroFill(number,targetLength,forceSign){var absNumber=''+Math.abs(number),zerosToFill=targetLength-absNumber.length,sign=number>=0;return(sign?(forceSign?'+':''):'-')+
Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1)+absNumber;}
var formattingTokens=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;var localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;var formatFunctions={};var formatTokenFunctions={};function addFormatToken(token,padded,ordinal,callback){var func=callback;if(typeof callback==='string'){func=function(){return this[callback]();};}
if(token){formatTokenFunctions[token]=func;}
if(padded){formatTokenFunctions[padded[0]]=function(){return zeroFill(func.apply(this,arguments),padded[1],padded[2]);};}
if(ordinal){formatTokenFunctions[ordinal]=function(){return this.localeData().ordinal(func.apply(this,arguments),token);};}}
function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,'');}
return input.replace(/\\/g,'');}
function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i=0,length=array.length;i<length;i++){if(formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]];}else{array[i]=removeFormattingTokens(array[i]);}}
return function(mom){var output='',i;for(i=0;i<length;i++){output+=array[i]instanceof Function?array[i].call(mom,format):array[i];}
return output;};}
function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate();}
format=expandFormat(format,m.localeData());formatFunctions[format]=formatFunctions[format]||makeFormatFunction(format);return formatFunctions[format](m);}
function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input;}
localFormattingTokens.lastIndex=0;while(i>=0&&localFormattingTokens.test(format)){format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1;}
return format;}
var match1=/\d/;var match2=/\d\d/;var match3=/\d{3}/;var match4=/\d{4}/;var match6=/[+-]?\d{6}/;var match1to2=/\d\d?/;var match3to4=/\d\d\d\d?/;var match5to6=/\d\d\d\d\d\d?/;var match1to3=/\d{1,3}/;var match1to4=/\d{1,4}/;var match1to6=/[+-]?\d{1,6}/;var matchUnsigned=/\d+/;var matchSigned=/[+-]?\d+/;var matchOffset=/Z|[+-]\d\d:?\d\d/gi;var matchShortOffset=/Z|[+-]\d\d(?::?\d\d)?/gi;var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/;var matchWord=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;var regexes={};function addRegexToken(token,regex,strictRegex){regexes[token]=isFunction(regex)?regex:function(isStrict,localeData){return(isStrict&&strictRegex)?strictRegex:regex;};}
function getParseRegexForToken(token,config){if(!hasOwnProp(regexes,token)){return new RegExp(unescapeFormat(token));}
return regexes[token](config._strict,config._locale);}
function unescapeFormat(s){return regexEscape(s.replace('\\','').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4;}));}
function regexEscape(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');}
var tokens={};function addParseToken(token,callback){var i,func=callback;if(typeof token==='string'){token=[token];}
if(typeof callback==='number'){func=function(input,array){array[callback]=toInt(input);};}
for(i=0;i<token.length;i++){tokens[token[i]]=func;}}
function addWeekParseToken(token,callback){addParseToken(token,function(input,array,config,token){config._w=config._w||{};callback(input,config._w,config,token);});}
function addTimeToArrayFromToken(token,input,config){if(input!=null&&hasOwnProp(tokens,token)){tokens[token](input,config._a,config,token);}}
var YEAR=0;var MONTH=1;var DATE=2;var HOUR=3;var MINUTE=4;var SECOND=5;var MILLISECOND=6;var WEEK=7;var WEEKDAY=8;var indexOf;if(Array.prototype.indexOf){indexOf=Array.prototype.indexOf;}else{indexOf=function(o){var i;for(i=0;i<this.length;++i){if(this[i]===o){return i;}}
return-1;};}
function daysInMonth(year,month){return new Date(Date.UTC(year,month+1,0)).getUTCDate();}
addFormatToken('M',['MM',2],'Mo',function(){return this.month()+1;});addFormatToken('MMM',0,0,function(format){return this.localeData().monthsShort(this,format);});addFormatToken('MMMM',0,0,function(format){return this.localeData().months(this,format);});addUnitAlias('month','M');addRegexToken('M',match1to2);addRegexToken('MM',match1to2,match2);addRegexToken('MMM',function(isStrict,locale){return locale.monthsShortRegex(isStrict);});addRegexToken('MMMM',function(isStrict,locale){return locale.monthsRegex(isStrict);});addParseToken(['M','MM'],function(input,array){array[MONTH]=toInt(input)-1;});addParseToken(['MMM','MMMM'],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict);if(month!=null){array[MONTH]=month;}else{getParsingFlags(config).invalidMonth=input;}});var MONTHS_IN_FORMAT=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;var defaultLocaleMonths='January_February_March_April_May_June_July_August_September_October_November_December'.split('_');function localeMonths(m,format){return isArray(this._months)?this._months[m.month()]:this._months[MONTHS_IN_FORMAT.test(format)?'format':'standalone'][m.month()];}
var defaultLocaleMonthsShort='Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');function localeMonthsShort(m,format){return isArray(this._monthsShort)?this._monthsShort[m.month()]:this._monthsShort[MONTHS_IN_FORMAT.test(format)?'format':'standalone'][m.month()];}
function units_month__handleStrictParse(monthName,format,strict){var i,ii,mom,llc=monthName.toLocaleLowerCase();if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];for(i=0;i<12;++i){mom=create_utc__createUTC([2000,i]);this._shortMonthsParse[i]=this.monthsShort(mom,'').toLocaleLowerCase();this._longMonthsParse[i]=this.months(mom,'').toLocaleLowerCase();}}
if(strict){if(format==='MMM'){ii=indexOf.call(this._shortMonthsParse,llc);return ii!==-1?ii:null;}else{ii=indexOf.call(this._longMonthsParse,llc);return ii!==-1?ii:null;}}else{if(format==='MMM'){ii=indexOf.call(this._shortMonthsParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._longMonthsParse,llc);return ii!==-1?ii:null;}else{ii=indexOf.call(this._longMonthsParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._shortMonthsParse,llc);return ii!==-1?ii:null;}}}
function localeMonthsParse(monthName,format,strict){var i,mom,regex;if(this._monthsParseExact){return units_month__handleStrictParse.call(this,monthName,format,strict);}
if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];}
for(i=0;i<12;i++){mom=create_utc__createUTC([2000,i]);if(strict&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp('^'+this.months(mom,'').replace('.','')+'$','i');this._shortMonthsParse[i]=new RegExp('^'+this.monthsShort(mom,'').replace('.','')+'$','i');}
if(!strict&&!this._monthsParse[i]){regex='^'+this.months(mom,'')+'|^'+this.monthsShort(mom,'');this._monthsParse[i]=new RegExp(regex.replace('.',''),'i');}
if(strict&&format==='MMMM'&&this._longMonthsParse[i].test(monthName)){return i;}else if(strict&&format==='MMM'&&this._shortMonthsParse[i].test(monthName)){return i;}else if(!strict&&this._monthsParse[i].test(monthName)){return i;}}}
function setMonth(mom,value){var dayOfMonth;if(!mom.isValid()){return mom;}
if(typeof value==='string'){if(/^\d+$/.test(value)){value=toInt(value);}else{value=mom.localeData().monthsParse(value);if(typeof value!=='number'){return mom;}}}
dayOfMonth=Math.min(mom.date(),daysInMonth(mom.year(),value));mom._d['set'+(mom._isUTC?'UTC':'')+'Month'](value,dayOfMonth);return mom;}
function getSetMonth(value){if(value!=null){setMonth(this,value);utils_hooks__hooks.updateOffset(this,true);return this;}else{return get_set__get(this,'Month');}}
function getDaysInMonth(){return daysInMonth(this.year(),this.month());}
var defaultMonthsShortRegex=matchWord;function monthsShortRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,'_monthsRegex')){computeMonthsParse.call(this);}
if(isStrict){return this._monthsShortStrictRegex;}else{return this._monthsShortRegex;}}else{return this._monthsShortStrictRegex&&isStrict?this._monthsShortStrictRegex:this._monthsShortRegex;}}
var defaultMonthsRegex=matchWord;function monthsRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,'_monthsRegex')){computeMonthsParse.call(this);}
if(isStrict){return this._monthsStrictRegex;}else{return this._monthsRegex;}}else{return this._monthsStrictRegex&&isStrict?this._monthsStrictRegex:this._monthsRegex;}}
function computeMonthsParse(){function cmpLenRev(a,b){return b.length-a.length;}
var shortPieces=[],longPieces=[],mixedPieces=[],i,mom;for(i=0;i<12;i++){mom=create_utc__createUTC([2000,i]);shortPieces.push(this.monthsShort(mom,''));longPieces.push(this.months(mom,''));mixedPieces.push(this.months(mom,''));mixedPieces.push(this.monthsShort(mom,''));}
shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i=0;i<12;i++){shortPieces[i]=regexEscape(shortPieces[i]);longPieces[i]=regexEscape(longPieces[i]);mixedPieces[i]=regexEscape(mixedPieces[i]);}
this._monthsRegex=new RegExp('^('+mixedPieces.join('|')+')','i');this._monthsShortRegex=this._monthsRegex;this._monthsStrictRegex=new RegExp('^('+longPieces.join('|')+')','i');this._monthsShortStrictRegex=new RegExp('^('+shortPieces.join('|')+')','i');}
function checkOverflow(m){var overflow;var a=m._a;if(a&&getParsingFlags(m).overflow===-2){overflow=a[MONTH]<0||a[MONTH]>11?MONTH:a[DATE]<1||a[DATE]>daysInMonth(a[YEAR],a[MONTH])?DATE:a[HOUR]<0||a[HOUR]>24||(a[HOUR]===24&&(a[MINUTE]!==0||a[SECOND]!==0||a[MILLISECOND]!==0))?HOUR:a[MINUTE]<0||a[MINUTE]>59?MINUTE:a[SECOND]<0||a[SECOND]>59?SECOND:a[MILLISECOND]<0||a[MILLISECOND]>999?MILLISECOND:-1;if(getParsingFlags(m)._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE;}
if(getParsingFlags(m)._overflowWeeks&&overflow===-1){overflow=WEEK;}
if(getParsingFlags(m)._overflowWeekday&&overflow===-1){overflow=WEEKDAY;}
getParsingFlags(m).overflow=overflow;}
return m;}
var extendedIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;var basicIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;var tzRegex=/Z|[+-]\d\d(?::?\d\d)?/;var isoDates=[['YYYYYY-MM-DD',/[+-]\d{6}-\d\d-\d\d/],['YYYY-MM-DD',/\d{4}-\d\d-\d\d/],['GGGG-[W]WW-E',/\d{4}-W\d\d-\d/],['GGGG-[W]WW',/\d{4}-W\d\d/,false],['YYYY-DDD',/\d{4}-\d{3}/],['YYYY-MM',/\d{4}-\d\d/,false],['YYYYYYMMDD',/[+-]\d{10}/],['YYYYMMDD',/\d{8}/],['GGGG[W]WWE',/\d{4}W\d{3}/],['GGGG[W]WW',/\d{4}W\d{2}/,false],['YYYYDDD',/\d{7}/]];var isoTimes=[['HH:mm:ss.SSSS',/\d\d:\d\d:\d\d\.\d+/],['HH:mm:ss,SSSS',/\d\d:\d\d:\d\d,\d+/],['HH:mm:ss',/\d\d:\d\d:\d\d/],['HH:mm',/\d\d:\d\d/],['HHmmss.SSSS',/\d\d\d\d\d\d\.\d+/],['HHmmss,SSSS',/\d\d\d\d\d\d,\d+/],['HHmmss',/\d\d\d\d\d\d/],['HHmm',/\d\d\d\d/],['HH',/\d\d/]];var aspNetJsonRegex=/^\/?Date\((\-?\d+)/i;function configFromISO(config){var i,l,string=config._i,match=extendedIsoRegex.exec(string)||basicIsoRegex.exec(string),allowTime,dateFormat,timeFormat,tzFormat;if(match){getParsingFlags(config).iso=true;for(i=0,l=isoDates.length;i<l;i++){if(isoDates[i][1].exec(match[1])){dateFormat=isoDates[i][0];allowTime=isoDates[i][2]!==false;break;}}
if(dateFormat==null){config._isValid=false;return;}
if(match[3]){for(i=0,l=isoTimes.length;i<l;i++){if(isoTimes[i][1].exec(match[3])){timeFormat=(match[2]||' ')+isoTimes[i][0];break;}}
if(timeFormat==null){config._isValid=false;return;}}
if(!allowTime&&timeFormat!=null){config._isValid=false;return;}
if(match[4]){if(tzRegex.exec(match[4])){tzFormat='Z';}else{config._isValid=false;return;}}
config._f=dateFormat+(timeFormat||'')+(tzFormat||'');configFromStringAndFormat(config);}else{config._isValid=false;}}
function configFromString(config){var matched=aspNetJsonRegex.exec(config._i);if(matched!==null){config._d=new Date(+matched[1]);return;}
configFromISO(config);if(config._isValid===false){delete config._isValid;utils_hooks__hooks.createFromInputFallback(config);}}
utils_hooks__hooks.createFromInputFallback=deprecate('moment construction falls back to js Date. This is '+'discouraged and will be removed in upcoming major '+'release. Please refer to '+'https://github.com/moment/moment/issues/1407 for more info.',function(config){config._d=new Date(config._i+(config._useUTC?' UTC':''));});function createDate(y,m,d,h,M,s,ms){var date=new Date(y,m,d,h,M,s,ms);if(y<100&&y>=0&&isFinite(date.getFullYear())){date.setFullYear(y);}
return date;}
function createUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments));if(y<100&&y>=0&&isFinite(date.getUTCFullYear())){date.setUTCFullYear(y);}
return date;}
addFormatToken('Y',0,0,function(){var y=this.year();return y<=9999?''+y:'+'+y;});addFormatToken(0,['YY',2],0,function(){return this.year()%100;});addFormatToken(0,['YYYY',4],0,'year');addFormatToken(0,['YYYYY',5],0,'year');addFormatToken(0,['YYYYYY',6,true],0,'year');addUnitAlias('year','y');addRegexToken('Y',matchSigned);addRegexToken('YY',match1to2,match2);addRegexToken('YYYY',match1to4,match4);addRegexToken('YYYYY',match1to6,match6);addRegexToken('YYYYYY',match1to6,match6);addParseToken(['YYYYY','YYYYYY'],YEAR);addParseToken('YYYY',function(input,array){array[YEAR]=input.length===2?utils_hooks__hooks.parseTwoDigitYear(input):toInt(input);});addParseToken('YY',function(input,array){array[YEAR]=utils_hooks__hooks.parseTwoDigitYear(input);});addParseToken('Y',function(input,array){array[YEAR]=parseInt(input,10);});function daysInYear(year){return isLeapYear(year)?366:365;}
function isLeapYear(year){return(year%4===0&&year%100!==0)||year%400===0;}
utils_hooks__hooks.parseTwoDigitYear=function(input){return toInt(input)+(toInt(input)>68?1900:2000);};var getSetYear=makeGetSet('FullYear',true);function getIsLeapYear(){return isLeapYear(this.year());}
function firstWeekOffset(year,dow,doy){var
fwd=7+dow-doy,fwdlw=(7+createUTCDate(year,0,fwd).getUTCDay()-dow)%7;return-fwdlw+fwd-1;}
function dayOfYearFromWeeks(year,week,weekday,dow,doy){var localWeekday=(7+weekday-dow)%7,weekOffset=firstWeekOffset(year,dow,doy),dayOfYear=1+7*(week-1)+localWeekday+weekOffset,resYear,resDayOfYear;if(dayOfYear<=0){resYear=year-1;resDayOfYear=daysInYear(resYear)+dayOfYear;}else if(dayOfYear>daysInYear(year)){resYear=year+1;resDayOfYear=dayOfYear-daysInYear(year);}else{resYear=year;resDayOfYear=dayOfYear;}
return{year:resYear,dayOfYear:resDayOfYear};}
function weekOfYear(mom,dow,doy){var weekOffset=firstWeekOffset(mom.year(),dow,doy),week=Math.floor((mom.dayOfYear()-weekOffset-1)/7)+1,resWeek,resYear;if(week<1){resYear=mom.year()-1;resWeek=week+weeksInYear(resYear,dow,doy);}else if(week>weeksInYear(mom.year(),dow,doy)){resWeek=week-weeksInYear(mom.year(),dow,doy);resYear=mom.year()+1;}else{resYear=mom.year();resWeek=week;}
return{week:resWeek,year:resYear};}
function weeksInYear(year,dow,doy){var weekOffset=firstWeekOffset(year,dow,doy),weekOffsetNext=firstWeekOffset(year+1,dow,doy);return(daysInYear(year)-weekOffset+weekOffsetNext)/7;}
function defaults(a,b,c){if(a!=null){return a;}
if(b!=null){return b;}
return c;}
function currentDateArray(config){var nowValue=new Date(utils_hooks__hooks.now());if(config._useUTC){return[nowValue.getUTCFullYear(),nowValue.getUTCMonth(),nowValue.getUTCDate()];}
return[nowValue.getFullYear(),nowValue.getMonth(),nowValue.getDate()];}
function configFromArray(config){var i,date,input=[],currentDate,yearToUse;if(config._d){return;}
currentDate=currentDateArray(config);if(config._w&&config._a[DATE]==null&&config._a[MONTH]==null){dayOfYearFromWeekInfo(config);}
if(config._dayOfYear){yearToUse=defaults(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)){getParsingFlags(config)._overflowDayOfYear=true;}
date=createUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH]=date.getUTCMonth();config._a[DATE]=date.getUTCDate();}
for(i=0;i<3&&config._a[i]==null;++i){config._a[i]=input[i]=currentDate[i];}
for(;i<7;i++){config._a[i]=input[i]=(config._a[i]==null)?(i===2?1:0):config._a[i];}
if(config._a[HOUR]===24&&config._a[MINUTE]===0&&config._a[SECOND]===0&&config._a[MILLISECOND]===0){config._nextDay=true;config._a[HOUR]=0;}
config._d=(config._useUTC?createUTCDate:createDate).apply(null,input);if(config._tzm!=null){config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm);}
if(config._nextDay){config._a[HOUR]=24;}}
function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp,weekdayOverflow;w=config._w;if(w.GG!=null||w.W!=null||w.E!=null){dow=1;doy=4;weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(local__createLocal(),1,4).year);week=defaults(w.W,1);weekday=defaults(w.E,1);if(weekday<1||weekday>7){weekdayOverflow=true;}}else{dow=config._locale._week.dow;doy=config._locale._week.doy;weekYear=defaults(w.gg,config._a[YEAR],weekOfYear(local__createLocal(),dow,doy).year);week=defaults(w.w,1);if(w.d!=null){weekday=w.d;if(weekday<0||weekday>6){weekdayOverflow=true;}}else if(w.e!=null){weekday=w.e+dow;if(w.e<0||w.e>6){weekdayOverflow=true;}}else{weekday=dow;}}
if(week<1||week>weeksInYear(weekYear,dow,doy)){getParsingFlags(config)._overflowWeeks=true;}else if(weekdayOverflow!=null){getParsingFlags(config)._overflowWeekday=true;}else{temp=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy);config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear;}}
utils_hooks__hooks.ISO_8601=function(){};function configFromStringAndFormat(config){if(config._f===utils_hooks__hooks.ISO_8601){configFromISO(config);return;}
config._a=[];getParsingFlags(config).empty=true;var string=''+config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];for(i=0;i<tokens.length;i++){token=tokens[i];parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0];if(parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));if(skipped.length>0){getParsingFlags(config).unusedInput.push(skipped);}
string=string.slice(string.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length;}
if(formatTokenFunctions[token]){if(parsedInput){getParsingFlags(config).empty=false;}
else{getParsingFlags(config).unusedTokens.push(token);}
addTimeToArrayFromToken(token,parsedInput,config);}
else if(config._strict&&!parsedInput){getParsingFlags(config).unusedTokens.push(token);}}
getParsingFlags(config).charsLeftOver=stringLength-totalParsedInputLength;if(string.length>0){getParsingFlags(config).unusedInput.push(string);}
if(getParsingFlags(config).bigHour===true&&config._a[HOUR]<=12&&config._a[HOUR]>0){getParsingFlags(config).bigHour=undefined;}
getParsingFlags(config).parsedDateParts=config._a.slice(0);getParsingFlags(config).meridiem=config._meridiem;config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);configFromArray(config);checkOverflow(config);}
function meridiemFixWrap(locale,hour,meridiem){var isPm;if(meridiem==null){return hour;}
if(locale.meridiemHour!=null){return locale.meridiemHour(hour,meridiem);}else if(locale.isPM!=null){isPm=locale.isPM(meridiem);if(isPm&&hour<12){hour+=12;}
if(!isPm&&hour===12){hour=0;}
return hour;}else{return hour;}}
function configFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(config._f.length===0){getParsingFlags(config).invalidFormat=true;config._d=new Date(NaN);return;}
for(i=0;i<config._f.length;i++){currentScore=0;tempConfig=copyConfig({},config);if(config._useUTC!=null){tempConfig._useUTC=config._useUTC;}
tempConfig._f=config._f[i];configFromStringAndFormat(tempConfig);if(!valid__isValid(tempConfig)){continue;}
currentScore+=getParsingFlags(tempConfig).charsLeftOver;currentScore+=getParsingFlags(tempConfig).unusedTokens.length*10;getParsingFlags(tempConfig).score=currentScore;if(scoreToBeat==null||currentScore<scoreToBeat){scoreToBeat=currentScore;bestMoment=tempConfig;}}
extend(config,bestMoment||tempConfig);}
function configFromObject(config){if(config._d){return;}
var i=normalizeObjectUnits(config._i);config._a=map([i.year,i.month,i.day||i.date,i.hour,i.minute,i.second,i.millisecond],function(obj){return obj&&parseInt(obj,10);});configFromArray(config);}
function createFromConfig(config){var res=new Moment(checkOverflow(prepareConfig(config)));if(res._nextDay){res.add(1,'d');res._nextDay=undefined;}
return res;}
function prepareConfig(config){var input=config._i,format=config._f;config._locale=config._locale||locale_locales__getLocale(config._l);if(input===null||(format===undefined&&input==='')){return valid__createInvalid({nullInput:true});}
if(typeof input==='string'){config._i=input=config._locale.preparse(input);}
if(isMoment(input)){return new Moment(checkOverflow(input));}else if(isArray(format)){configFromStringAndArray(config);}else if(format){configFromStringAndFormat(config);}else if(isDate(input)){config._d=input;}else{configFromInput(config);}
if(!valid__isValid(config)){config._d=null;}
return config;}
function configFromInput(config){var input=config._i;if(input===undefined){config._d=new Date(utils_hooks__hooks.now());}else if(isDate(input)){config._d=new Date(input.valueOf());}else if(typeof input==='string'){configFromString(config);}else if(isArray(input)){config._a=map(input.slice(0),function(obj){return parseInt(obj,10);});configFromArray(config);}else if(typeof(input)==='object'){configFromObject(config);}else if(typeof(input)==='number'){config._d=new Date(input);}else{utils_hooks__hooks.createFromInputFallback(config);}}
function createLocalOrUTC(input,format,locale,strict,isUTC){var c={};if(typeof(locale)==='boolean'){strict=locale;locale=undefined;}
c._isAMomentObject=true;c._useUTC=c._isUTC=isUTC;c._l=locale;c._i=input;c._f=format;c._strict=strict;return createFromConfig(c);}
function local__createLocal(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,false);}
var prototypeMin=deprecate('moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',function(){var other=local__createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other<this?this:other;}else{return valid__createInvalid();}});var prototypeMax=deprecate('moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',function(){var other=local__createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other>this?this:other;}else{return valid__createInvalid();}});function pickBy(fn,moments){var res,i;if(moments.length===1&&isArray(moments[0])){moments=moments[0];}
if(!moments.length){return local__createLocal();}
res=moments[0];for(i=1;i<moments.length;++i){if(!moments[i].isValid()||moments[i][fn](res)){res=moments[i];}}
return res;}
function min(){var args=[].slice.call(arguments,0);return pickBy('isBefore',args);}
function max(){var args=[].slice.call(arguments,0);return pickBy('isAfter',args);}
var now=function(){return Date.now?Date.now():+(new Date());};function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0;this._milliseconds=+milliseconds+
seconds*1e3+
minutes*6e4+
hours*1000*60*60;this._days=+days+
weeks*7;this._months=+months+
quarters*3+
years*12;this._data={};this._locale=locale_locales__getLocale();this._bubble();}
function isDuration(obj){return obj instanceof Duration;}
function offset(token,separator){addFormatToken(token,0,0,function(){var offset=this.utcOffset();var sign='+';if(offset<0){offset=-offset;sign='-';}
return sign+zeroFill(~~(offset/60),2)+separator+zeroFill(~~(offset)%60,2);});}
offset('Z',':');offset('ZZ','');addRegexToken('Z',matchShortOffset);addRegexToken('ZZ',matchShortOffset);addParseToken(['Z','ZZ'],function(input,array,config){config._useUTC=true;config._tzm=offsetFromString(matchShortOffset,input);});var chunkOffset=/([\+\-]|\d\d)/gi;function offsetFromString(matcher,string){var matches=((string||'').match(matcher)||[]);var chunk=matches[matches.length-1]||[];var parts=(chunk+'').match(chunkOffset)||['-',0,0];var minutes=+(parts[1]*60)+toInt(parts[2]);return parts[0]==='+'?minutes:-minutes;}
function cloneWithOffset(input,model){var res,diff;if(model._isUTC){res=model.clone();diff=(isMoment(input)||isDate(input)?input.valueOf():local__createLocal(input).valueOf())-res.valueOf();res._d.setTime(res._d.valueOf()+diff);utils_hooks__hooks.updateOffset(res,false);return res;}else{return local__createLocal(input).local();}}
function getDateOffset(m){return-Math.round(m._d.getTimezoneOffset()/15)*15;}
utils_hooks__hooks.updateOffset=function(){};function getSetOffset(input,keepLocalTime){var offset=this._offset||0,localAdjust;if(!this.isValid()){return input!=null?this:NaN;}
if(input!=null){if(typeof input==='string'){input=offsetFromString(matchShortOffset,input);}else if(Math.abs(input)<16){input=input*60;}
if(!this._isUTC&&keepLocalTime){localAdjust=getDateOffset(this);}
this._offset=input;this._isUTC=true;if(localAdjust!=null){this.add(localAdjust,'m');}
if(offset!==input){if(!keepLocalTime||this._changeInProgress){add_subtract__addSubtract(this,create__createDuration(input-offset,'m'),1,false);}else if(!this._changeInProgress){this._changeInProgress=true;utils_hooks__hooks.updateOffset(this,true);this._changeInProgress=null;}}
return this;}else{return this._isUTC?offset:getDateOffset(this);}}
function getSetZone(input,keepLocalTime){if(input!=null){if(typeof input!=='string'){input=-input;}
this.utcOffset(input,keepLocalTime);return this;}else{return-this.utcOffset();}}
function setOffsetToUTC(keepLocalTime){return this.utcOffset(0,keepLocalTime);}
function setOffsetToLocal(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC=false;if(keepLocalTime){this.subtract(getDateOffset(this),'m');}}
return this;}
function setOffsetToParsedOffset(){if(this._tzm){this.utcOffset(this._tzm);}else if(typeof this._i==='string'){this.utcOffset(offsetFromString(matchOffset,this._i));}
return this;}
function hasAlignedHourOffset(input){if(!this.isValid()){return false;}
input=input?local__createLocal(input).utcOffset():0;return(this.utcOffset()-input)%60===0;}
function isDaylightSavingTime(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset());}
function isDaylightSavingTimeShifted(){if(!isUndefined(this._isDSTShifted)){return this._isDSTShifted;}
var c={};copyConfig(c,this);c=prepareConfig(c);if(c._a){var other=c._isUTC?create_utc__createUTC(c._a):local__createLocal(c._a);this._isDSTShifted=this.isValid()&&compareArrays(c._a,other.toArray())>0;}else{this._isDSTShifted=false;}
return this._isDSTShifted;}
function isLocal(){return this.isValid()?!this._isUTC:false;}
function isUtcOffset(){return this.isValid()?this._isUTC:false;}
function isUtc(){return this.isValid()?this._isUTC&&this._offset===0:false;}
var aspNetRegex=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;var isoRegex=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;function create__createDuration(input,key){var duration=input,match=null,sign,ret,diffRes;if(isDuration(input)){duration={ms:input._milliseconds,d:input._days,M:input._months};}else if(typeof input==='number'){duration={};if(key){duration[key]=input;}else{duration.milliseconds=input;}}else if(!!(match=aspNetRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(match[MILLISECOND])*sign};}else if(!!(match=isoRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:parseIso(match[2],sign),M:parseIso(match[3],sign),w:parseIso(match[4],sign),d:parseIso(match[5],sign),h:parseIso(match[6],sign),m:parseIso(match[7],sign),s:parseIso(match[8],sign)};}else if(duration==null){duration={};}else if(typeof duration==='object'&&('from'in duration||'to'in duration)){diffRes=momentsDifference(local__createLocal(duration.from),local__createLocal(duration.to));duration={};duration.ms=diffRes.milliseconds;duration.M=diffRes.months;}
ret=new Duration(duration);if(isDuration(input)&&hasOwnProp(input,'_locale')){ret._locale=input._locale;}
return ret;}
create__createDuration.fn=Duration.prototype;function parseIso(inp,sign){var res=inp&&parseFloat(inp.replace(',','.'));return(isNaN(res)?0:res)*sign;}
function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0};res.months=other.month()-base.month()+
(other.year()-base.year())*12;if(base.clone().add(res.months,'M').isAfter(other)){--res.months;}
res.milliseconds=+other-+(base.clone().add(res.months,'M'));return res;}
function momentsDifference(base,other){var res;if(!(base.isValid()&&other.isValid())){return{milliseconds:0,months:0};}
other=cloneWithOffset(other,base);if(base.isBefore(other)){res=positiveMomentsDifference(base,other);}else{res=positiveMomentsDifference(other,base);res.milliseconds=-res.milliseconds;res.months=-res.months;}
return res;}
function absRound(number){if(number<0){return Math.round(-1*number)*-1;}else{return Math.round(number);}}
function createAdder(direction,name){return function(val,period){var dur,tmp;if(period!==null&&!isNaN(+period)){deprecateSimple(name,'moment().'+name+'(period, number) is deprecated. Please use moment().'+name+'(number, period).');tmp=val;val=period;period=tmp;}
val=typeof val==='string'?+val:val;dur=create__createDuration(val,period);add_subtract__addSubtract(this,dur,direction);return this;};}
function add_subtract__addSubtract(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=absRound(duration._days),months=absRound(duration._months);if(!mom.isValid()){return;}
updateOffset=updateOffset==null?true:updateOffset;if(milliseconds){mom._d.setTime(mom._d.valueOf()+milliseconds*isAdding);}
if(days){get_set__set(mom,'Date',get_set__get(mom,'Date')+days*isAdding);}
if(months){setMonth(mom,get_set__get(mom,'Month')+months*isAdding);}
if(updateOffset){utils_hooks__hooks.updateOffset(mom,days||months);}}
var add_subtract__add=createAdder(1,'add');var add_subtract__subtract=createAdder(-1,'subtract');function moment_calendar__calendar(time,formats){var now=time||local__createLocal(),sod=cloneWithOffset(now,this).startOf('day'),diff=this.diff(sod,'days',true),format=diff<-6?'sameElse':diff<-1?'lastWeek':diff<0?'lastDay':diff<1?'sameDay':diff<2?'nextDay':diff<7?'nextWeek':'sameElse';var output=formats&&(isFunction(formats[format])?formats[format]():formats[format]);return this.format(output||this.localeData().calendar(format,this,local__createLocal(now)));}
function clone(){return new Moment(this);}
function isAfter(input,units){var localInput=isMoment(input)?input:local__createLocal(input);if(!(this.isValid()&&localInput.isValid())){return false;}
units=normalizeUnits(!isUndefined(units)?units:'millisecond');if(units==='millisecond'){return this.valueOf()>localInput.valueOf();}else{return localInput.valueOf()<this.clone().startOf(units).valueOf();}}
function isBefore(input,units){var localInput=isMoment(input)?input:local__createLocal(input);if(!(this.isValid()&&localInput.isValid())){return false;}
units=normalizeUnits(!isUndefined(units)?units:'millisecond');if(units==='millisecond'){return this.valueOf()<localInput.valueOf();}else{return this.clone().endOf(units).valueOf()<localInput.valueOf();}}
function isBetween(from,to,units,inclusivity){inclusivity=inclusivity||'()';return(inclusivity[0]==='('?this.isAfter(from,units):!this.isBefore(from,units))&&(inclusivity[1]===')'?this.isBefore(to,units):!this.isAfter(to,units));}
function isSame(input,units){var localInput=isMoment(input)?input:local__createLocal(input),inputMs;if(!(this.isValid()&&localInput.isValid())){return false;}
units=normalizeUnits(units||'millisecond');if(units==='millisecond'){return this.valueOf()===localInput.valueOf();}else{inputMs=localInput.valueOf();return this.clone().startOf(units).valueOf()<=inputMs&&inputMs<=this.clone().endOf(units).valueOf();}}
function isSameOrAfter(input,units){return this.isSame(input,units)||this.isAfter(input,units);}
function isSameOrBefore(input,units){return this.isSame(input,units)||this.isBefore(input,units);}
function diff(input,units,asFloat){var that,zoneDelta,delta,output;if(!this.isValid()){return NaN;}
that=cloneWithOffset(input,this);if(!that.isValid()){return NaN;}
zoneDelta=(that.utcOffset()-this.utcOffset())*6e4;units=normalizeUnits(units);if(units==='year'||units==='month'||units==='quarter'){output=monthDiff(this,that);if(units==='quarter'){output=output/3;}else if(units==='year'){output=output/12;}}else{delta=this-that;output=units==='second'?delta/1e3:units==='minute'?delta/6e4:units==='hour'?delta/36e5:units==='day'?(delta-zoneDelta)/864e5:units==='week'?(delta-zoneDelta)/6048e5:delta;}
return asFloat?output:absFloor(output);}
function monthDiff(a,b){var wholeMonthDiff=((b.year()-a.year())*12)+(b.month()-a.month()),anchor=a.clone().add(wholeMonthDiff,'months'),anchor2,adjust;if(b-anchor<0){anchor2=a.clone().add(wholeMonthDiff-1,'months');adjust=(b-anchor)/(anchor-anchor2);}else{anchor2=a.clone().add(wholeMonthDiff+1,'months');adjust=(b-anchor)/(anchor2-anchor);}
return-(wholeMonthDiff+adjust)||0;}
utils_hooks__hooks.defaultFormat='YYYY-MM-DDTHH:mm:ssZ';utils_hooks__hooks.defaultFormatUtc='YYYY-MM-DDTHH:mm:ss[Z]';function toString(){return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');}
function moment_format__toISOString(){var m=this.clone().utc();if(0<m.year()&&m.year()<=9999){if(isFunction(Date.prototype.toISOString)){return this.toDate().toISOString();}else{return formatMoment(m,'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}else{return formatMoment(m,'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}
function format(inputString){if(!inputString){inputString=this.isUtc()?utils_hooks__hooks.defaultFormatUtc:utils_hooks__hooks.defaultFormat;}
var output=formatMoment(this,inputString);return this.localeData().postformat(output);}
function from(time,withoutSuffix){if(this.isValid()&&((isMoment(time)&&time.isValid())||local__createLocal(time).isValid())){return create__createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix);}else{return this.localeData().invalidDate();}}
function fromNow(withoutSuffix){return this.from(local__createLocal(),withoutSuffix);}
function to(time,withoutSuffix){if(this.isValid()&&((isMoment(time)&&time.isValid())||local__createLocal(time).isValid())){return create__createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix);}else{return this.localeData().invalidDate();}}
function toNow(withoutSuffix){return this.to(local__createLocal(),withoutSuffix);}
function locale(key){var newLocaleData;if(key===undefined){return this._locale._abbr;}else{newLocaleData=locale_locales__getLocale(key);if(newLocaleData!=null){this._locale=newLocaleData;}
return this;}}
var lang=deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',function(key){if(key===undefined){return this.localeData();}else{return this.locale(key);}});function localeData(){return this._locale;}
function startOf(units){units=normalizeUnits(units);switch(units){case'year':this.month(0);case'quarter':case'month':this.date(1);case'week':case'isoWeek':case'day':case'date':this.hours(0);case'hour':this.minutes(0);case'minute':this.seconds(0);case'second':this.milliseconds(0);}
if(units==='week'){this.weekday(0);}
if(units==='isoWeek'){this.isoWeekday(1);}
if(units==='quarter'){this.month(Math.floor(this.month()/3)*3);}
return this;}
function endOf(units){units=normalizeUnits(units);if(units===undefined||units==='millisecond'){return this;}
if(units==='date'){units='day';}
return this.startOf(units).add(1,(units==='isoWeek'?'week':units)).subtract(1,'ms');}
function to_type__valueOf(){return this._d.valueOf()-((this._offset||0)*60000);}
function unix(){return Math.floor(this.valueOf()/1000);}
function toDate(){return this._offset?new Date(this.valueOf()):this._d;}
function toArray(){var m=this;return[m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()];}
function toObject(){var m=this;return{years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),milliseconds:m.milliseconds()};}
function toJSON(){return this.isValid()?this.toISOString():null;}
function moment_valid__isValid(){return valid__isValid(this);}
function parsingFlags(){return extend({},getParsingFlags(this));}
function invalidAt(){return getParsingFlags(this).overflow;}
function creationData(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict};}
addFormatToken(0,['gg',2],0,function(){return this.weekYear()%100;});addFormatToken(0,['GG',2],0,function(){return this.isoWeekYear()%100;});function addWeekYearFormatToken(token,getter){addFormatToken(0,[token,token.length],0,getter);}
addWeekYearFormatToken('gggg','weekYear');addWeekYearFormatToken('ggggg','weekYear');addWeekYearFormatToken('GGGG','isoWeekYear');addWeekYearFormatToken('GGGGG','isoWeekYear');addUnitAlias('weekYear','gg');addUnitAlias('isoWeekYear','GG');addRegexToken('G',matchSigned);addRegexToken('g',matchSigned);addRegexToken('GG',match1to2,match2);addRegexToken('gg',match1to2,match2);addRegexToken('GGGG',match1to4,match4);addRegexToken('gggg',match1to4,match4);addRegexToken('GGGGG',match1to6,match6);addRegexToken('ggggg',match1to6,match6);addWeekParseToken(['gggg','ggggg','GGGG','GGGGG'],function(input,week,config,token){week[token.substr(0,2)]=toInt(input);});addWeekParseToken(['gg','GG'],function(input,week,config,token){week[token]=utils_hooks__hooks.parseTwoDigitYear(input);});function getSetWeekYear(input){return getSetWeekYearHelper.call(this,input,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy);}
function getSetISOWeekYear(input){return getSetWeekYearHelper.call(this,input,this.isoWeek(),this.isoWeekday(),1,4);}
function getISOWeeksInYear(){return weeksInYear(this.year(),1,4);}
function getWeeksInYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);}
function getSetWeekYearHelper(input,week,weekday,dow,doy){var weeksTarget;if(input==null){return weekOfYear(this,dow,doy).year;}else{weeksTarget=weeksInYear(input,dow,doy);if(week>weeksTarget){week=weeksTarget;}
return setWeekAll.call(this,input,week,weekday,dow,doy);}}
function setWeekAll(weekYear,week,weekday,dow,doy){var dayOfYearData=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy),date=createUTCDate(dayOfYearData.year,0,dayOfYearData.dayOfYear);this.year(date.getUTCFullYear());this.month(date.getUTCMonth());this.date(date.getUTCDate());return this;}
addFormatToken('Q',0,'Qo','quarter');addUnitAlias('quarter','Q');addRegexToken('Q',match1);addParseToken('Q',function(input,array){array[MONTH]=(toInt(input)-1)*3;});function getSetQuarter(input){return input==null?Math.ceil((this.month()+1)/3):this.month((input-1)*3+this.month()%3);}
addFormatToken('w',['ww',2],'wo','week');addFormatToken('W',['WW',2],'Wo','isoWeek');addUnitAlias('week','w');addUnitAlias('isoWeek','W');addRegexToken('w',match1to2);addRegexToken('ww',match1to2,match2);addRegexToken('W',match1to2);addRegexToken('WW',match1to2,match2);addWeekParseToken(['w','ww','W','WW'],function(input,week,config,token){week[token.substr(0,1)]=toInt(input);});function localeWeek(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week;}
var defaultLocaleWeek={dow:0,doy:6};function localeFirstDayOfWeek(){return this._week.dow;}
function localeFirstDayOfYear(){return this._week.doy;}
function getSetWeek(input){var week=this.localeData().week(this);return input==null?week:this.add((input-week)*7,'d');}
function getSetISOWeek(input){var week=weekOfYear(this,1,4).week;return input==null?week:this.add((input-week)*7,'d');}
addFormatToken('D',['DD',2],'Do','date');addUnitAlias('date','D');addRegexToken('D',match1to2);addRegexToken('DD',match1to2,match2);addRegexToken('Do',function(isStrict,locale){return isStrict?locale._ordinalParse:locale._ordinalParseLenient;});addParseToken(['D','DD'],DATE);addParseToken('Do',function(input,array){array[DATE]=toInt(input.match(match1to2)[0],10);});var getSetDayOfMonth=makeGetSet('Date',true);addFormatToken('d',0,'do','day');addFormatToken('dd',0,0,function(format){return this.localeData().weekdaysMin(this,format);});addFormatToken('ddd',0,0,function(format){return this.localeData().weekdaysShort(this,format);});addFormatToken('dddd',0,0,function(format){return this.localeData().weekdays(this,format);});addFormatToken('e',0,0,'weekday');addFormatToken('E',0,0,'isoWeekday');addUnitAlias('day','d');addUnitAlias('weekday','e');addUnitAlias('isoWeekday','E');addRegexToken('d',match1to2);addRegexToken('e',match1to2);addRegexToken('E',match1to2);addRegexToken('dd',function(isStrict,locale){return locale.weekdaysMinRegex(isStrict);});addRegexToken('ddd',function(isStrict,locale){return locale.weekdaysShortRegex(isStrict);});addRegexToken('dddd',function(isStrict,locale){return locale.weekdaysRegex(isStrict);});addWeekParseToken(['dd','ddd','dddd'],function(input,week,config,token){var weekday=config._locale.weekdaysParse(input,token,config._strict);if(weekday!=null){week.d=weekday;}else{getParsingFlags(config).invalidWeekday=input;}});addWeekParseToken(['d','e','E'],function(input,week,config,token){week[token]=toInt(input);});function parseWeekday(input,locale){if(typeof input!=='string'){return input;}
if(!isNaN(input)){return parseInt(input,10);}
input=locale.weekdaysParse(input);if(typeof input==='number'){return input;}
return null;}
var defaultLocaleWeekdays='Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');function localeWeekdays(m,format){return isArray(this._weekdays)?this._weekdays[m.day()]:this._weekdays[this._weekdays.isFormat.test(format)?'format':'standalone'][m.day()];}
var defaultLocaleWeekdaysShort='Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');function localeWeekdaysShort(m){return this._weekdaysShort[m.day()];}
var defaultLocaleWeekdaysMin='Su_Mo_Tu_We_Th_Fr_Sa'.split('_');function localeWeekdaysMin(m){return this._weekdaysMin[m.day()];}
function day_of_week__handleStrictParse(weekdayName,format,strict){var i,ii,mom,llc=weekdayName.toLocaleLowerCase();if(!this._weekdaysParse){this._weekdaysParse=[];this._shortWeekdaysParse=[];this._minWeekdaysParse=[];for(i=0;i<7;++i){mom=create_utc__createUTC([2000,1]).day(i);this._minWeekdaysParse[i]=this.weekdaysMin(mom,'').toLocaleLowerCase();this._shortWeekdaysParse[i]=this.weekdaysShort(mom,'').toLocaleLowerCase();this._weekdaysParse[i]=this.weekdays(mom,'').toLocaleLowerCase();}}
if(strict){if(format==='dddd'){ii=indexOf.call(this._weekdaysParse,llc);return ii!==-1?ii:null;}else if(format==='ddd'){ii=indexOf.call(this._shortWeekdaysParse,llc);return ii!==-1?ii:null;}else{ii=indexOf.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}}else{if(format==='dddd'){ii=indexOf.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._shortWeekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}else if(format==='ddd'){ii=indexOf.call(this._shortWeekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._minWeekdaysParse,llc);return ii!==-1?ii:null;}else{ii=indexOf.call(this._minWeekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._weekdaysParse,llc);if(ii!==-1){return ii;}
ii=indexOf.call(this._shortWeekdaysParse,llc);return ii!==-1?ii:null;}}}
function localeWeekdaysParse(weekdayName,format,strict){var i,mom,regex;if(this._weekdaysParseExact){return day_of_week__handleStrictParse.call(this,weekdayName,format,strict);}
if(!this._weekdaysParse){this._weekdaysParse=[];this._minWeekdaysParse=[];this._shortWeekdaysParse=[];this._fullWeekdaysParse=[];}
for(i=0;i<7;i++){mom=create_utc__createUTC([2000,1]).day(i);if(strict&&!this._fullWeekdaysParse[i]){this._fullWeekdaysParse[i]=new RegExp('^'+this.weekdays(mom,'').replace('.','\.?')+'$','i');this._shortWeekdaysParse[i]=new RegExp('^'+this.weekdaysShort(mom,'').replace('.','\.?')+'$','i');this._minWeekdaysParse[i]=new RegExp('^'+this.weekdaysMin(mom,'').replace('.','\.?')+'$','i');}
if(!this._weekdaysParse[i]){regex='^'+this.weekdays(mom,'')+'|^'+this.weekdaysShort(mom,'')+'|^'+this.weekdaysMin(mom,'');this._weekdaysParse[i]=new RegExp(regex.replace('.',''),'i');}
if(strict&&format==='dddd'&&this._fullWeekdaysParse[i].test(weekdayName)){return i;}else if(strict&&format==='ddd'&&this._shortWeekdaysParse[i].test(weekdayName)){return i;}else if(strict&&format==='dd'&&this._minWeekdaysParse[i].test(weekdayName)){return i;}else if(!strict&&this._weekdaysParse[i].test(weekdayName)){return i;}}}
function getSetDayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}
var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(input!=null){input=parseWeekday(input,this.localeData());return this.add(input-day,'d');}else{return day;}}
function getSetLocaleDayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}
var weekday=(this.day()+7-this.localeData()._week.dow)%7;return input==null?weekday:this.add(input-weekday,'d');}
function getSetISODayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN;}
return input==null?this.day()||7:this.day(this.day()%7?input:input-7);}
var defaultWeekdaysRegex=matchWord;function weekdaysRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,'_weekdaysRegex')){computeWeekdaysParse.call(this);}
if(isStrict){return this._weekdaysStrictRegex;}else{return this._weekdaysRegex;}}else{return this._weekdaysStrictRegex&&isStrict?this._weekdaysStrictRegex:this._weekdaysRegex;}}
var defaultWeekdaysShortRegex=matchWord;function weekdaysShortRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,'_weekdaysRegex')){computeWeekdaysParse.call(this);}
if(isStrict){return this._weekdaysShortStrictRegex;}else{return this._weekdaysShortRegex;}}else{return this._weekdaysShortStrictRegex&&isStrict?this._weekdaysShortStrictRegex:this._weekdaysShortRegex;}}
var defaultWeekdaysMinRegex=matchWord;function weekdaysMinRegex(isStrict){if(this._weekdaysParseExact){if(!hasOwnProp(this,'_weekdaysRegex')){computeWeekdaysParse.call(this);}
if(isStrict){return this._weekdaysMinStrictRegex;}else{return this._weekdaysMinRegex;}}else{return this._weekdaysMinStrictRegex&&isStrict?this._weekdaysMinStrictRegex:this._weekdaysMinRegex;}}
function computeWeekdaysParse(){function cmpLenRev(a,b){return b.length-a.length;}
var minPieces=[],shortPieces=[],longPieces=[],mixedPieces=[],i,mom,minp,shortp,longp;for(i=0;i<7;i++){mom=create_utc__createUTC([2000,1]).day(i);minp=this.weekdaysMin(mom,'');shortp=this.weekdaysShort(mom,'');longp=this.weekdays(mom,'');minPieces.push(minp);shortPieces.push(shortp);longPieces.push(longp);mixedPieces.push(minp);mixedPieces.push(shortp);mixedPieces.push(longp);}
minPieces.sort(cmpLenRev);shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i=0;i<7;i++){shortPieces[i]=regexEscape(shortPieces[i]);longPieces[i]=regexEscape(longPieces[i]);mixedPieces[i]=regexEscape(mixedPieces[i]);}
this._weekdaysRegex=new RegExp('^('+mixedPieces.join('|')+')','i');this._weekdaysShortRegex=this._weekdaysRegex;this._weekdaysMinRegex=this._weekdaysRegex;this._weekdaysStrictRegex=new RegExp('^('+longPieces.join('|')+')','i');this._weekdaysShortStrictRegex=new RegExp('^('+shortPieces.join('|')+')','i');this._weekdaysMinStrictRegex=new RegExp('^('+minPieces.join('|')+')','i');}
addFormatToken('DDD',['DDDD',3],'DDDo','dayOfYear');addUnitAlias('dayOfYear','DDD');addRegexToken('DDD',match1to3);addRegexToken('DDDD',match3);addParseToken(['DDD','DDDD'],function(input,array,config){config._dayOfYear=toInt(input);});function getSetDayOfYear(input){var dayOfYear=Math.round((this.clone().startOf('day')-this.clone().startOf('year'))/864e5)+1;return input==null?dayOfYear:this.add((input-dayOfYear),'d');}
function hFormat(){return this.hours()%12||12;}
function kFormat(){return this.hours()||24;}
addFormatToken('H',['HH',2],0,'hour');addFormatToken('h',['hh',2],0,hFormat);addFormatToken('k',['kk',2],0,kFormat);addFormatToken('hmm',0,0,function(){return''+hFormat.apply(this)+zeroFill(this.minutes(),2);});addFormatToken('hmmss',0,0,function(){return''+hFormat.apply(this)+zeroFill(this.minutes(),2)+
zeroFill(this.seconds(),2);});addFormatToken('Hmm',0,0,function(){return''+this.hours()+zeroFill(this.minutes(),2);});addFormatToken('Hmmss',0,0,function(){return''+this.hours()+zeroFill(this.minutes(),2)+
zeroFill(this.seconds(),2);});function meridiem(token,lowercase){addFormatToken(token,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),lowercase);});}
meridiem('a',true);meridiem('A',false);addUnitAlias('hour','h');function matchMeridiem(isStrict,locale){return locale._meridiemParse;}
addRegexToken('a',matchMeridiem);addRegexToken('A',matchMeridiem);addRegexToken('H',match1to2);addRegexToken('h',match1to2);addRegexToken('HH',match1to2,match2);addRegexToken('hh',match1to2,match2);addRegexToken('hmm',match3to4);addRegexToken('hmmss',match5to6);addRegexToken('Hmm',match3to4);addRegexToken('Hmmss',match5to6);addParseToken(['H','HH'],HOUR);addParseToken(['a','A'],function(input,array,config){config._isPm=config._locale.isPM(input);config._meridiem=input;});addParseToken(['h','hh'],function(input,array,config){array[HOUR]=toInt(input);getParsingFlags(config).bigHour=true;});addParseToken('hmm',function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));getParsingFlags(config).bigHour=true;});addParseToken('hmmss',function(input,array,config){var pos1=input.length-4;var pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));getParsingFlags(config).bigHour=true;});addParseToken('Hmm',function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));});addParseToken('Hmmss',function(input,array,config){var pos1=input.length-4;var pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));});function localeIsPM(input){return((input+'').toLowerCase().charAt(0)==='p');}
var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i;function localeMeridiem(hours,minutes,isLower){if(hours>11){return isLower?'pm':'PM';}else{return isLower?'am':'AM';}}
var getSetHour=makeGetSet('Hours',true);addFormatToken('m',['mm',2],0,'minute');addUnitAlias('minute','m');addRegexToken('m',match1to2);addRegexToken('mm',match1to2,match2);addParseToken(['m','mm'],MINUTE);var getSetMinute=makeGetSet('Minutes',false);addFormatToken('s',['ss',2],0,'second');addUnitAlias('second','s');addRegexToken('s',match1to2);addRegexToken('ss',match1to2,match2);addParseToken(['s','ss'],SECOND);var getSetSecond=makeGetSet('Seconds',false);addFormatToken('S',0,0,function(){return~~(this.millisecond()/100);});addFormatToken(0,['SS',2],0,function(){return~~(this.millisecond()/10);});addFormatToken(0,['SSS',3],0,'millisecond');addFormatToken(0,['SSSS',4],0,function(){return this.millisecond()*10;});addFormatToken(0,['SSSSS',5],0,function(){return this.millisecond()*100;});addFormatToken(0,['SSSSSS',6],0,function(){return this.millisecond()*1000;});addFormatToken(0,['SSSSSSS',7],0,function(){return this.millisecond()*10000;});addFormatToken(0,['SSSSSSSS',8],0,function(){return this.millisecond()*100000;});addFormatToken(0,['SSSSSSSSS',9],0,function(){return this.millisecond()*1000000;});addUnitAlias('millisecond','ms');addRegexToken('S',match1to3,match1);addRegexToken('SS',match1to3,match2);addRegexToken('SSS',match1to3,match3);var token;for(token='SSSS';token.length<=9;token+='S'){addRegexToken(token,matchUnsigned);}
function parseMs(input,array){array[MILLISECOND]=toInt(('0.'+input)*1000);}
for(token='S';token.length<=9;token+='S'){addParseToken(token,parseMs);}
var getSetMillisecond=makeGetSet('Milliseconds',false);addFormatToken('z',0,0,'zoneAbbr');addFormatToken('zz',0,0,'zoneName');function getZoneAbbr(){return this._isUTC?'UTC':'';}
function getZoneName(){return this._isUTC?'Coordinated Universal Time':'';}
var momentPrototype__proto=Moment.prototype;momentPrototype__proto.add=add_subtract__add;momentPrototype__proto.calendar=moment_calendar__calendar;momentPrototype__proto.clone=clone;momentPrototype__proto.diff=diff;momentPrototype__proto.endOf=endOf;momentPrototype__proto.format=format;momentPrototype__proto.from=from;momentPrototype__proto.fromNow=fromNow;momentPrototype__proto.to=to;momentPrototype__proto.toNow=toNow;momentPrototype__proto.get=getSet;momentPrototype__proto.invalidAt=invalidAt;momentPrototype__proto.isAfter=isAfter;momentPrototype__proto.isBefore=isBefore;momentPrototype__proto.isBetween=isBetween;momentPrototype__proto.isSame=isSame;momentPrototype__proto.isSameOrAfter=isSameOrAfter;momentPrototype__proto.isSameOrBefore=isSameOrBefore;momentPrototype__proto.isValid=moment_valid__isValid;momentPrototype__proto.lang=lang;momentPrototype__proto.locale=locale;momentPrototype__proto.localeData=localeData;momentPrototype__proto.max=prototypeMax;momentPrototype__proto.min=prototypeMin;momentPrototype__proto.parsingFlags=parsingFlags;momentPrototype__proto.set=getSet;momentPrototype__proto.startOf=startOf;momentPrototype__proto.subtract=add_subtract__subtract;momentPrototype__proto.toArray=toArray;momentPrototype__proto.toObject=toObject;momentPrototype__proto.toDate=toDate;momentPrototype__proto.toISOString=moment_format__toISOString;momentPrototype__proto.toJSON=toJSON;momentPrototype__proto.toString=toString;momentPrototype__proto.unix=unix;momentPrototype__proto.valueOf=to_type__valueOf;momentPrototype__proto.creationData=creationData;momentPrototype__proto.year=getSetYear;momentPrototype__proto.isLeapYear=getIsLeapYear;momentPrototype__proto.weekYear=getSetWeekYear;momentPrototype__proto.isoWeekYear=getSetISOWeekYear;momentPrototype__proto.quarter=momentPrototype__proto.quarters=getSetQuarter;momentPrototype__proto.month=getSetMonth;momentPrototype__proto.daysInMonth=getDaysInMonth;momentPrototype__proto.week=momentPrototype__proto.weeks=getSetWeek;momentPrototype__proto.isoWeek=momentPrototype__proto.isoWeeks=getSetISOWeek;momentPrototype__proto.weeksInYear=getWeeksInYear;momentPrototype__proto.isoWeeksInYear=getISOWeeksInYear;momentPrototype__proto.date=getSetDayOfMonth;momentPrototype__proto.day=momentPrototype__proto.days=getSetDayOfWeek;momentPrototype__proto.weekday=getSetLocaleDayOfWeek;momentPrototype__proto.isoWeekday=getSetISODayOfWeek;momentPrototype__proto.dayOfYear=getSetDayOfYear;momentPrototype__proto.hour=momentPrototype__proto.hours=getSetHour;momentPrototype__proto.minute=momentPrototype__proto.minutes=getSetMinute;momentPrototype__proto.second=momentPrototype__proto.seconds=getSetSecond;momentPrototype__proto.millisecond=momentPrototype__proto.milliseconds=getSetMillisecond;momentPrototype__proto.utcOffset=getSetOffset;momentPrototype__proto.utc=setOffsetToUTC;momentPrototype__proto.local=setOffsetToLocal;momentPrototype__proto.parseZone=setOffsetToParsedOffset;momentPrototype__proto.hasAlignedHourOffset=hasAlignedHourOffset;momentPrototype__proto.isDST=isDaylightSavingTime;momentPrototype__proto.isDSTShifted=isDaylightSavingTimeShifted;momentPrototype__proto.isLocal=isLocal;momentPrototype__proto.isUtcOffset=isUtcOffset;momentPrototype__proto.isUtc=isUtc;momentPrototype__proto.isUTC=isUtc;momentPrototype__proto.zoneAbbr=getZoneAbbr;momentPrototype__proto.zoneName=getZoneName;momentPrototype__proto.dates=deprecate('dates accessor is deprecated. Use date instead.',getSetDayOfMonth);momentPrototype__proto.months=deprecate('months accessor is deprecated. Use month instead',getSetMonth);momentPrototype__proto.years=deprecate('years accessor is deprecated. Use year instead',getSetYear);momentPrototype__proto.zone=deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779',getSetZone);var momentPrototype=momentPrototype__proto;function moment__createUnix(input){return local__createLocal(input*1000);}
function moment__createInZone(){return local__createLocal.apply(null,arguments).parseZone();}
var defaultCalendar={sameDay:'[Today at] LT',nextDay:'[Tomorrow at] LT',nextWeek:'dddd [at] LT',lastDay:'[Yesterday at] LT',lastWeek:'[Last] dddd [at] LT',sameElse:'L'};function locale_calendar__calendar(key,mom,now){var output=this._calendar[key];return isFunction(output)?output.call(mom,now):output;}
var defaultLongDateFormat={LTS:'h:mm:ss A',LT:'h:mm A',L:'MM/DD/YYYY',LL:'MMMM D, YYYY',LLL:'MMMM D, YYYY h:mm A',LLLL:'dddd, MMMM D, YYYY h:mm A'};function longDateFormat(key){var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];if(format||!formatUpper){return format;}
this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1);});return this._longDateFormat[key];}
var defaultInvalidDate='Invalid date';function invalidDate(){return this._invalidDate;}
var defaultOrdinal='%d';var defaultOrdinalParse=/\d{1,2}/;function ordinal(number){return this._ordinal.replace('%d',number);}
function preParsePostFormat(string){return string;}
var defaultRelativeTime={future:'in %s',past:'%s ago',s:'a few seconds',m:'a minute',mm:'%d minutes',h:'an hour',hh:'%d hours',d:'a day',dd:'%d days',M:'a month',MM:'%d months',y:'a year',yy:'%d years'};function relative__relativeTime(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return(isFunction(output))?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);}
function pastFuture(diff,output){var format=this._relativeTime[diff>0?'future':'past'];return isFunction(format)?format(output):format.replace(/%s/i,output);}
var prototype__proto=Locale.prototype;prototype__proto._calendar=defaultCalendar;prototype__proto.calendar=locale_calendar__calendar;prototype__proto._longDateFormat=defaultLongDateFormat;prototype__proto.longDateFormat=longDateFormat;prototype__proto._invalidDate=defaultInvalidDate;prototype__proto.invalidDate=invalidDate;prototype__proto._ordinal=defaultOrdinal;prototype__proto.ordinal=ordinal;prototype__proto._ordinalParse=defaultOrdinalParse;prototype__proto.preparse=preParsePostFormat;prototype__proto.postformat=preParsePostFormat;prototype__proto._relativeTime=defaultRelativeTime;prototype__proto.relativeTime=relative__relativeTime;prototype__proto.pastFuture=pastFuture;prototype__proto.set=locale_set__set;prototype__proto.months=localeMonths;prototype__proto._months=defaultLocaleMonths;prototype__proto.monthsShort=localeMonthsShort;prototype__proto._monthsShort=defaultLocaleMonthsShort;prototype__proto.monthsParse=localeMonthsParse;prototype__proto._monthsRegex=defaultMonthsRegex;prototype__proto.monthsRegex=monthsRegex;prototype__proto._monthsShortRegex=defaultMonthsShortRegex;prototype__proto.monthsShortRegex=monthsShortRegex;prototype__proto.week=localeWeek;prototype__proto._week=defaultLocaleWeek;prototype__proto.firstDayOfYear=localeFirstDayOfYear;prototype__proto.firstDayOfWeek=localeFirstDayOfWeek;prototype__proto.weekdays=localeWeekdays;prototype__proto._weekdays=defaultLocaleWeekdays;prototype__proto.weekdaysMin=localeWeekdaysMin;prototype__proto._weekdaysMin=defaultLocaleWeekdaysMin;prototype__proto.weekdaysShort=localeWeekdaysShort;prototype__proto._weekdaysShort=defaultLocaleWeekdaysShort;prototype__proto.weekdaysParse=localeWeekdaysParse;prototype__proto._weekdaysRegex=defaultWeekdaysRegex;prototype__proto.weekdaysRegex=weekdaysRegex;prototype__proto._weekdaysShortRegex=defaultWeekdaysShortRegex;prototype__proto.weekdaysShortRegex=weekdaysShortRegex;prototype__proto._weekdaysMinRegex=defaultWeekdaysMinRegex;prototype__proto.weekdaysMinRegex=weekdaysMinRegex;prototype__proto.isPM=localeIsPM;prototype__proto._meridiemParse=defaultLocaleMeridiemParse;prototype__proto.meridiem=localeMeridiem;function lists__get(format,index,field,setter){var locale=locale_locales__getLocale();var utc=create_utc__createUTC().set(setter,index);return locale[field](utc,format);}
function listMonthsImpl(format,index,field){if(typeof format==='number'){index=format;format=undefined;}
format=format||'';if(index!=null){return lists__get(format,index,field,'month');}
var i;var out=[];for(i=0;i<12;i++){out[i]=lists__get(format,i,field,'month');}
return out;}
function listWeekdaysImpl(localeSorted,format,index,field){if(typeof localeSorted==='boolean'){if(typeof format==='number'){index=format;format=undefined;}
format=format||'';}else{format=localeSorted;index=format;localeSorted=false;if(typeof format==='number'){index=format;format=undefined;}
format=format||'';}
var locale=locale_locales__getLocale(),shift=localeSorted?locale._week.dow:0;if(index!=null){return lists__get(format,(index+shift)%7,field,'day');}
var i;var out=[];for(i=0;i<7;i++){out[i]=lists__get(format,(i+shift)%7,field,'day');}
return out;}
function lists__listMonths(format,index){return listMonthsImpl(format,index,'months');}
function lists__listMonthsShort(format,index){return listMonthsImpl(format,index,'monthsShort');}
function lists__listWeekdays(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,'weekdays');}
function lists__listWeekdaysShort(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,'weekdaysShort');}
function lists__listWeekdaysMin(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,'weekdaysMin');}
locale_locales__getSetGlobalLocale('en',{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){var b=number%10,output=(toInt(number%100/10)===1)?'th':(b===1)?'st':(b===2)?'nd':(b===3)?'rd':'th';return number+output;}});utils_hooks__hooks.lang=deprecate('moment.lang is deprecated. Use moment.locale instead.',locale_locales__getSetGlobalLocale);utils_hooks__hooks.langData=deprecate('moment.langData is deprecated. Use moment.localeData instead.',locale_locales__getLocale);var mathAbs=Math.abs;function duration_abs__abs(){var data=this._data;this._milliseconds=mathAbs(this._milliseconds);this._days=mathAbs(this._days);this._months=mathAbs(this._months);data.milliseconds=mathAbs(data.milliseconds);data.seconds=mathAbs(data.seconds);data.minutes=mathAbs(data.minutes);data.hours=mathAbs(data.hours);data.months=mathAbs(data.months);data.years=mathAbs(data.years);return this;}
function duration_add_subtract__addSubtract(duration,input,value,direction){var other=create__createDuration(input,value);duration._milliseconds+=direction*other._milliseconds;duration._days+=direction*other._days;duration._months+=direction*other._months;return duration._bubble();}
function duration_add_subtract__add(input,value){return duration_add_subtract__addSubtract(this,input,value,1);}
function duration_add_subtract__subtract(input,value){return duration_add_subtract__addSubtract(this,input,value,-1);}
function absCeil(number){if(number<0){return Math.floor(number);}else{return Math.ceil(number);}}
function bubble(){var milliseconds=this._milliseconds;var days=this._days;var months=this._months;var data=this._data;var seconds,minutes,hours,years,monthsFromDays;if(!((milliseconds>=0&&days>=0&&months>=0)||(milliseconds<=0&&days<=0&&months<=0))){milliseconds+=absCeil(monthsToDays(months)+days)*864e5;days=0;months=0;}
data.milliseconds=milliseconds%1000;seconds=absFloor(milliseconds/1000);data.seconds=seconds%60;minutes=absFloor(seconds/60);data.minutes=minutes%60;hours=absFloor(minutes/60);data.hours=hours%24;days+=absFloor(hours/24);monthsFromDays=absFloor(daysToMonths(days));months+=monthsFromDays;days-=absCeil(monthsToDays(monthsFromDays));years=absFloor(months/12);months%=12;data.days=days;data.months=months;data.years=years;return this;}
function daysToMonths(days){return days*4800/146097;}
function monthsToDays(months){return months*146097/4800;}
function as(units){var days;var months;var milliseconds=this._milliseconds;units=normalizeUnits(units);if(units==='month'||units==='year'){days=this._days+milliseconds/864e5;months=this._months+daysToMonths(days);return units==='month'?months:months/12;}else{days=this._days+Math.round(monthsToDays(this._months));switch(units){case'week':return days/7+milliseconds/6048e5;case'day':return days+milliseconds/864e5;case'hour':return days*24+milliseconds/36e5;case'minute':return days*1440+milliseconds/6e4;case'second':return days*86400+milliseconds/1000;case'millisecond':return Math.floor(days*864e5)+milliseconds;default:throw new Error('Unknown unit '+units);}}}
function duration_as__valueOf(){return(this._milliseconds+
this._days*864e5+
(this._months%12)*2592e6+
toInt(this._months/12)*31536e6);}
function makeAs(alias){return function(){return this.as(alias);};}
var asMilliseconds=makeAs('ms');var asSeconds=makeAs('s');var asMinutes=makeAs('m');var asHours=makeAs('h');var asDays=makeAs('d');var asWeeks=makeAs('w');var asMonths=makeAs('M');var asYears=makeAs('y');function duration_get__get(units){units=normalizeUnits(units);return this[units+'s']();}
function makeGetter(name){return function(){return this._data[name];};}
var milliseconds=makeGetter('milliseconds');var seconds=makeGetter('seconds');var minutes=makeGetter('minutes');var hours=makeGetter('hours');var days=makeGetter('days');var months=makeGetter('months');var years=makeGetter('years');function weeks(){return absFloor(this.days()/7);}
var round=Math.round;var thresholds={s:45,m:45,h:22,d:26,M:11};function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture);}
function duration_humanize__relativeTime(posNegDuration,withoutSuffix,locale){var duration=create__createDuration(posNegDuration).abs();var seconds=round(duration.as('s'));var minutes=round(duration.as('m'));var hours=round(duration.as('h'));var days=round(duration.as('d'));var months=round(duration.as('M'));var years=round(duration.as('y'));var a=seconds<thresholds.s&&['s',seconds]||minutes<=1&&['m']||minutes<thresholds.m&&['mm',minutes]||hours<=1&&['h']||hours<thresholds.h&&['hh',hours]||days<=1&&['d']||days<thresholds.d&&['dd',days]||months<=1&&['M']||months<thresholds.M&&['MM',months]||years<=1&&['y']||['yy',years];a[2]=withoutSuffix;a[3]=+posNegDuration>0;a[4]=locale;return substituteTimeAgo.apply(null,a);}
function duration_humanize__getSetRelativeTimeThreshold(threshold,limit){if(thresholds[threshold]===undefined){return false;}
if(limit===undefined){return thresholds[threshold];}
thresholds[threshold]=limit;return true;}
function humanize(withSuffix){var locale=this.localeData();var output=duration_humanize__relativeTime(this,!withSuffix,locale);if(withSuffix){output=locale.pastFuture(+this,output);}
return locale.postformat(output);}
var iso_string__abs=Math.abs;function iso_string__toISOString(){var seconds=iso_string__abs(this._milliseconds)/1000;var days=iso_string__abs(this._days);var months=iso_string__abs(this._months);var minutes,hours,years;minutes=absFloor(seconds/60);hours=absFloor(minutes/60);seconds%=60;minutes%=60;years=absFloor(months/12);months%=12;var Y=years;var M=months;var D=days;var h=hours;var m=minutes;var s=seconds;var total=this.asSeconds();if(!total){return'P0D';}
return(total<0?'-':'')+'P'+
(Y?Y+'Y':'')+
(M?M+'M':'')+
(D?D+'D':'')+
((h||m||s)?'T':'')+
(h?h+'H':'')+
(m?m+'M':'')+
(s?s+'S':'');}
var duration_prototype__proto=Duration.prototype;duration_prototype__proto.abs=duration_abs__abs;duration_prototype__proto.add=duration_add_subtract__add;duration_prototype__proto.subtract=duration_add_subtract__subtract;duration_prototype__proto.as=as;duration_prototype__proto.asMilliseconds=asMilliseconds;duration_prototype__proto.asSeconds=asSeconds;duration_prototype__proto.asMinutes=asMinutes;duration_prototype__proto.asHours=asHours;duration_prototype__proto.asDays=asDays;duration_prototype__proto.asWeeks=asWeeks;duration_prototype__proto.asMonths=asMonths;duration_prototype__proto.asYears=asYears;duration_prototype__proto.valueOf=duration_as__valueOf;duration_prototype__proto._bubble=bubble;duration_prototype__proto.get=duration_get__get;duration_prototype__proto.milliseconds=milliseconds;duration_prototype__proto.seconds=seconds;duration_prototype__proto.minutes=minutes;duration_prototype__proto.hours=hours;duration_prototype__proto.days=days;duration_prototype__proto.weeks=weeks;duration_prototype__proto.months=months;duration_prototype__proto.years=years;duration_prototype__proto.humanize=humanize;duration_prototype__proto.toISOString=iso_string__toISOString;duration_prototype__proto.toString=iso_string__toISOString;duration_prototype__proto.toJSON=iso_string__toISOString;duration_prototype__proto.locale=locale;duration_prototype__proto.localeData=localeData;duration_prototype__proto.toIsoString=deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',iso_string__toISOString);duration_prototype__proto.lang=lang;addFormatToken('X',0,0,'unix');addFormatToken('x',0,0,'valueOf');addRegexToken('x',matchSigned);addRegexToken('X',matchTimestamp);addParseToken('X',function(input,array,config){config._d=new Date(parseFloat(input,10)*1000);});addParseToken('x',function(input,array,config){config._d=new Date(toInt(input));});utils_hooks__hooks.version='2.13.0';setHookCallback(local__createLocal);utils_hooks__hooks.fn=momentPrototype;utils_hooks__hooks.min=min;utils_hooks__hooks.max=max;utils_hooks__hooks.now=now;utils_hooks__hooks.utc=create_utc__createUTC;utils_hooks__hooks.unix=moment__createUnix;utils_hooks__hooks.months=lists__listMonths;utils_hooks__hooks.isDate=isDate;utils_hooks__hooks.locale=locale_locales__getSetGlobalLocale;utils_hooks__hooks.invalid=valid__createInvalid;utils_hooks__hooks.duration=create__createDuration;utils_hooks__hooks.isMoment=isMoment;utils_hooks__hooks.weekdays=lists__listWeekdays;utils_hooks__hooks.parseZone=moment__createInZone;utils_hooks__hooks.localeData=locale_locales__getLocale;utils_hooks__hooks.isDuration=isDuration;utils_hooks__hooks.monthsShort=lists__listMonthsShort;utils_hooks__hooks.weekdaysMin=lists__listWeekdaysMin;utils_hooks__hooks.defineLocale=defineLocale;utils_hooks__hooks.updateLocale=updateLocale;utils_hooks__hooks.locales=locale_locales__listLocales;utils_hooks__hooks.weekdaysShort=lists__listWeekdaysShort;utils_hooks__hooks.normalizeUnits=normalizeUnits;utils_hooks__hooks.relativeTimeThreshold=duration_humanize__getSetRelativeTimeThreshold;utils_hooks__hooks.prototype=momentPrototype;var _moment=utils_hooks__hooks;return _moment;}));/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */(function(root,factory)
{'use strict';var moment;if(typeof exports==='object'){try{moment=require('moment');}catch(e){}
module.exports=factory(moment);}else if(typeof define==='function'&&define.amd){define(function(req)
{var id='moment';try{moment=req(id);}catch(e){}
return factory(moment);});}else{root.Pikaday=factory(root.moment);}}(this,function(moment)
{'use strict';var hasMoment=typeof moment==='function',hasEventListeners=!!window.addEventListener,document=window.document,sto=window.setTimeout,addEvent=function(el,e,callback,capture)
{if(hasEventListeners){el.addEventListener(e,callback,!!capture);}else{el.attachEvent('on'+e,callback);}},removeEvent=function(el,e,callback,capture)
{if(hasEventListeners){el.removeEventListener(e,callback,!!capture);}else{el.detachEvent('on'+e,callback);}},fireEvent=function(el,eventName,data)
{var ev;if(document.createEvent){ev=document.createEvent('HTMLEvents');ev.initEvent(eventName,true,false);ev=extend(ev,data);el.dispatchEvent(ev);}else if(document.createEventObject){ev=document.createEventObject();ev=extend(ev,data);el.fireEvent('on'+eventName,ev);}},trim=function(str)
{return str.trim?str.trim():str.replace(/^\s+|\s+$/g,'');},hasClass=function(el,cn)
{return(' '+el.className+' ').indexOf(' '+cn+' ')!==-1;},addClass=function(el,cn)
{if(!hasClass(el,cn)){el.className=(el.className==='')?cn:el.className+' '+cn;}},removeClass=function(el,cn)
{el.className=trim((' '+el.className+' ').replace(' '+cn+' ',' '));},isArray=function(obj)
{return(/Array/).test(Object.prototype.toString.call(obj));},isDate=function(obj)
{return(/Date/).test(Object.prototype.toString.call(obj))&&!isNaN(obj.getTime());},isWeekend=function(date)
{var day=date.getDay();return day===0||day===6;},isLeapYear=function(year)
{return year%4===0&&year%100!==0||year%400===0;},getDaysInMonth=function(year,month)
{return[31,isLeapYear(year)?29:28,31,30,31,30,31,31,30,31,30,31][month];},setToStartOfDay=function(date)
{if(isDate(date))date.setHours(0,0,0,0);},compareDates=function(a,b)
{var _a=new Date(a.getTime());var _b=new Date(b.getTime());setToStartOfDay(_a);setToStartOfDay(_b);return _a.getTime()===_b.getTime();},extend=function(to,from,overwrite)
{var prop,hasProp;for(prop in from){hasProp=to[prop]!==undefined;if(hasProp&&typeof from[prop]==='object'&&from[prop]!==null&&from[prop].nodeName===undefined){if(isDate(from[prop])){if(overwrite){to[prop]=new Date(from[prop].getTime());}}
else if(isArray(from[prop])){if(overwrite){to[prop]=from[prop].slice(0);}}else{to[prop]=extend({},from[prop],overwrite);}}else if(overwrite||!hasProp){to[prop]=from[prop];}}
return to;},adjustCalendar=function(calendar){if(calendar.month<0){calendar.year-=Math.ceil(Math.abs(calendar.month)/12);calendar.month+=12;}
if(calendar.month>11){calendar.year+=Math.floor(Math.abs(calendar.month)/12);calendar.month-=12;}
return calendar;},defaults={field:null,bound:undefined,position:'bottom left',reposition:true,format:null,inputFormats:null,defaultDate:null,setDefaultDate:false,firstDay:0,formatStrict:false,minDate:null,maxDate:null,yearRange:10,showWeekNumber:false,minYear:0,maxYear:9999,minMonth:undefined,maxMonth:undefined,startRange:null,endRange:null,isRTL:false,yearSuffix:'',showMonthAfterYear:false,showDaysInNextAndPreviousMonths:false,numberOfMonths:1,showTime:true,showSeconds:false,use24hour:false,incrementHourBy:1,incrementMinuteBy:1,incrementSecondBy:1,autoClose:true,mainCalendar:'left',container:undefined,i18n:{previousMonth:'Previous Month',nextMonth:'Next Month',months:['January','February','March','April','May','June','July','August','September','October','November','December'],weekdays:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],weekdaysShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],midnight:'Midnight',noon:'Noon'},theme:null,onSelect:null,onOpen:null,onClose:null,onDraw:null},renderDayName=function(opts,day,abbr)
{day+=opts.firstDay;while(day>=7){day-=7;}
return abbr?opts.i18n.weekdaysShort[day]:opts.i18n.weekdays[day];},renderDay=function(opts)
{var arr=[];if(opts.isEmpty){if(opts.showDaysInNextAndPreviousMonths){arr.push('is-outside-current-month');}else{return'<td class="is-empty"></td>';}}
if(opts.isDisabled){arr.push('is-disabled');}
if(opts.isToday){arr.push('is-today');}
if(opts.isSelected){arr.push('is-selected');}
if(opts.isInRange){arr.push('is-inrange');}
if(opts.isStartRange){arr.push('is-startrange');}
if(opts.isEndRange){arr.push('is-endrange');}
return'<td data-day="'+opts.day+'" class="'+arr.join(' ')+'">'+'<button class="pika-button pika-day" type="button" '+'data-pika-year="'+opts.year+'" data-pika-month="'+opts.month+'" data-pika-day="'+opts.day+'">'+
opts.day+'</button>'+'</td>';},renderWeek=function(d,m,y){var onejan=new Date(y,0,1),weekNum=Math.ceil((((new Date(y,m,d)-onejan)/86400000)+onejan.getDay()+1)/7);return'<td class="pika-week">'+weekNum+'</td>';},renderRow=function(days,isRTL)
{return'<tr>'+(isRTL?days.reverse():days).join('')+'</tr>';},renderBody=function(rows)
{return'<tbody>'+rows.join('')+'</tbody>';},renderHead=function(opts)
{var i,arr=[];if(opts.showWeekNumber){arr.push('<th></th>');}
for(i=0;i<7;i++){arr.push('<th scope="col"><abbr title="'+renderDayName(opts,i)+'">'+renderDayName(opts,i,true)+'</abbr></th>');}
return'<thead>'+(opts.isRTL?arr.reverse():arr).join('')+'</thead>';},renderTitle=function(instance,c,year,month,refYear)
{var i,j,arr,opts=instance._o,isMinYear=year===opts.minYear,isMaxYear=year===opts.maxYear,html='<div class="pika-title">',monthHtml,yearHtml,prev=true,next=true;for(arr=[],i=0;i<12;i++){arr.push('<option value="'+(year===refYear?i-c:12+i-c)+'"'+
(i===month?' selected':'')+
((isMinYear&&i<opts.minMonth)||(isMaxYear&&i>opts.maxMonth)?'disabled':'')+'>'+
opts.i18n.months[i]+'</option>');}
monthHtml='<div class="pika-label">'+opts.i18n.months[month]+'<select class="pika-select pika-select-month" tabindex="-1">'+arr.join('')+'</select></div>';if(isArray(opts.yearRange)){i=opts.yearRange[0];j=opts.yearRange[1]+1;}else{i=year-opts.yearRange;j=1+year+opts.yearRange;}
for(arr=[];i<j&&i<=opts.maxYear;i++){if(i>=opts.minYear){arr.push('<option value="'+i+'"'+(i===year?' selected':'')+'>'+(i)+'</option>');}}
yearHtml='<div class="pika-label">'+year+opts.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+arr.join('')+'</select></div>';if(opts.showMonthAfterYear){html+=yearHtml+monthHtml;}else{html+=monthHtml+yearHtml;}
if(isMinYear&&(month===0||opts.minMonth>=month)){prev=false;}
if(isMaxYear&&(month===11||opts.maxMonth<=month)){next=false;}
if(c===0){html+='<button class="pika-prev'+(prev?'':' is-disabled')+'" type="button">'+opts.i18n.previousMonth+'</button>';}
if(c===(instance._o.numberOfMonths-1)){html+='<button class="pika-next'+(next?'':' is-disabled')+'" type="button">'+opts.i18n.nextMonth+'</button>';}
return html+='</div>';},renderTable=function(opts,data)
{return'<table cellpadding="0" cellspacing="0" class="pika-table">'+renderHead(opts)+renderBody(data)+'</table>';},renderTimePicker=function(num_options,selected_val,select_class,display_func,increment_by){increment_by=increment_by||1;var to_return='<td><select class="pika-select '+select_class+'">';for(var i=0;i<num_options;i+=increment_by){to_return+='<option value="'+i+'" '+(i==selected_val?'selected':'')+'>'+display_func(i)+'</option>'}
to_return+='</select></td>';return to_return;},renderTime=function(hh,mm,ss,opts)
{var to_return='<table cellpadding="0" cellspacing="0" class="pika-time"><tbody><tr>'+
renderTimePicker(24,hh,'pika-select-hour',function(i){if(opts.use24hour){return i;}else{var to_return=(i%12)+(i<12?' AM':' PM');if(to_return=='0 AM'){return opts.i18n.midnight;}else if(to_return=='0 PM'){return opts.i18n.noon;}else{return to_return;}}},opts.incrementHourBy)+'<td>:</td>'+
renderTimePicker(60,mm,'pika-select-minute',function(i){if(i<10)return"0"+i;return i},opts.incrementMinuteBy);if(opts.showSeconds){to_return+='<td>:</td>'+
renderTimePicker(60,ss,'pika-select-second',function(i){if(i<10)return"0"+i;return i},opts.incrementSecondBy);}
return to_return+'</tr></tbody></table>';},Pikaday=function(options)
{var self=this,opts=self.config(options);self._onMouseDown=function(e)
{if(!self._v){return;}
e=e||window.event;var target=e.target||e.srcElement;if(!target){return;}
if(!hasClass(target,'is-disabled')){if(hasClass(target,'pika-button')&&!hasClass(target,'is-empty')){var newDate=new Date(target.getAttribute('data-pika-year'),target.getAttribute('data-pika-month'),target.getAttribute('data-pika-day'));if(self._d&&opts.showTime){newDate.setHours(self._d.getHours());newDate.setMinutes(self._d.getMinutes());if(opts.showSeconds){newDate.setSeconds(self._d.getSeconds());}}
self.setDate(newDate);if(opts.bound){sto(function(){if(opts.autoClose){self.hide();}
if(opts.field){opts.field.blur();}},100);}}
else if(hasClass(target,'pika-prev')){self.prevMonth();}
else if(hasClass(target,'pika-next')){self.nextMonth();}}
if(!hasClass(target,'pika-select')){if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;return false;}}else{self._c=true;}};self._onChange=function(e)
{e=e||window.event;var target=e.target||e.srcElement;if(!target){return;}
if(hasClass(target,'pika-select-month')){self.gotoMonth(target.value);}
else if(hasClass(target,'pika-select-year')){self.gotoYear(target.value);}
else if(hasClass(target,'pika-select-hour')){self.setTime(target.value);}
else if(hasClass(target,'pika-select-minute')){self.setTime(null,target.value);}
else if(hasClass(target,'pika-select-second')){self.setTime(null,null,target.value);}};self._onInputChange=function(e)
{var date;if(e.firedBy===self){return;}
if(hasMoment){date=moment(opts.field.value,opts.inputFormats,opts.formatStrict);date=(date&&date.isValid())?date.toDate():null;}
else{date=new Date(Date.parse(opts.field.value));}
if(isDate(date)){self.setDate(date);}
if(!self._v){self.show();}};self._onInputFocus=function()
{self.show();};self._onInputClick=function()
{self.show();};self._onInputBlur=function()
{var pEl=document.activeElement;do{if(hasClass(pEl,'pika-single')){return;}}
while((pEl=pEl.parentNode));if(opts.autoClose&&!self._c){self._b=sto(function(){self.hide();},50);}
self._c=false;};self._onClick=function(e)
{e=e||window.event;var target=e.target||e.srcElement,pEl=target;if(!target){return;}
if(!hasEventListeners&&hasClass(target,'pika-select')){if(!target.onchange){target.setAttribute('onchange','return;');addEvent(target,'change',self._onChange);}}
do{if(hasClass(pEl,'pika-single')||pEl===opts.trigger||(opts.showTime&&hasClass(pEl,'pika-time-container'))){return;}}
while((pEl=pEl.parentNode));if(self._v&&target!==opts.trigger&&pEl!==opts.trigger){self.hide();}};self.el=document.createElement('div');self.el.className='pika-single'+(opts.isRTL?' is-rtl':'')+(opts.theme?' '+opts.theme:'');addEvent(self.el,'mousedown',self._onMouseDown,true);addEvent(self.el,'touchend',self._onMouseDown,true);addEvent(self.el,'change',self._onChange);if(opts.field){if(opts.container){opts.container.appendChild(self.el);}else if(opts.bound){document.body.appendChild(self.el);}else{opts.field.parentNode.insertBefore(self.el,opts.field.nextSibling);}
addEvent(opts.field,'change',self._onInputChange);if(!opts.defaultDate){if(hasMoment&&opts.field.value){opts.defaultDate=moment(opts.field.value,opts.inputFormats).toDate();}else{opts.defaultDate=new Date(Date.parse(opts.field.value));}
opts.setDefaultDate=true;}}
var defDate=opts.defaultDate;if(isDate(defDate)){if(opts.setDefaultDate){self.setDate(defDate,true);}else{self.gotoDate(defDate);}}else{self.gotoDate(new Date());}
if(opts.bound){this.hide();self.el.className+=' is-bound';addEvent(opts.trigger,'click',self._onInputClick);addEvent(opts.trigger,'focus',self._onInputFocus);addEvent(opts.trigger,'blur',self._onInputBlur);}else{this.show();}};Pikaday.prototype={config:function(options)
{if(!this._o){this._o=extend({},defaults,true);}
var opts=extend(this._o,options,true);opts.isRTL=!!opts.isRTL;opts.autoClose=!!opts.autoClose;opts.field=(opts.field&&opts.field.nodeName)?opts.field:null;opts.theme=(typeof opts.theme)==='string'&&opts.theme?opts.theme:null;opts.bound=!!(opts.bound!==undefined?opts.field&&opts.bound:opts.field);opts.trigger=(opts.trigger&&opts.trigger.nodeName)?opts.trigger:opts.field;opts.disableWeekends=!!opts.disableWeekends;opts.disableDayFn=(typeof opts.disableDayFn)==='function'?opts.disableDayFn:null;var nom=parseInt(opts.numberOfMonths,10)||1;opts.numberOfMonths=nom>4?4:nom;if(!isDate(opts.minDate)){opts.minDate=false;}
if(!isDate(opts.maxDate)){opts.maxDate=false;}
if((opts.minDate&&opts.maxDate)&&opts.maxDate<opts.minDate){opts.maxDate=opts.minDate=false;}
if(opts.minDate){this.setMinDate(opts.minDate);}
if(opts.maxDate){this.setMaxDate(opts.maxDate);}
if(isArray(opts.yearRange)){var fallback=new Date().getFullYear()-10;opts.yearRange[0]=parseInt(opts.yearRange[0],10)||fallback;opts.yearRange[1]=parseInt(opts.yearRange[1],10)||fallback;}else{opts.yearRange=Math.abs(parseInt(opts.yearRange,10))||defaults.yearRange;if(opts.yearRange>100){opts.yearRange=100;}}
if(opts.format===null){opts.format='YYYY-MM-DD';if(opts.showTime){opts.format+=' HH:mm:ss';}}
if(!opts.inputFormats){opts.inputFormats=opts.format;}
return opts;},toString:function(format)
{return!isDate(this._d)?'':hasMoment?moment(this._d).format(format||this._o.format):this._o.showTime?this._d.toString():this._d.toDateString();},getMoment:function()
{return hasMoment?moment(this._d):null;},setMoment:function(date,preventOnSelect)
{if(hasMoment&&moment.isMoment(date)){this.setDate(date.toDate(),preventOnSelect);}},getDate:function()
{return isDate(this._d)?new Date(this._d.getTime()):null;},setTime:function(hours,minutes,seconds){if(!this._d){this._d=new Date();this._d.setHours(0,0,0,0);}
if(hours){this._d.setHours(hours);}
if(minutes){this._d.setMinutes(minutes);}
if(seconds){this._d.setSeconds(seconds);}
this.setDate(this._d);},setDate:function(date,preventOnSelect)
{if(!date){this._d=null;if(this._o.field){this._o.field.value='';fireEvent(this._o.field,'change',{firedBy:this});}
return this.draw();}
if(typeof date==='string'){date=new Date(Date.parse(date));}
if(!isDate(date)){return;}
var min=this._o.minDate,max=this._o.maxDate;if(isDate(min)&&date<min){date=min;}else if(isDate(max)&&date>max){date=max;}
this._d=new Date(date.getTime());if(this._o.showTime&&!this._o.showSeconds){this._d.setSeconds(0);}else if(!this._o.showTime){setToStartOfDay(this._d);}
this.gotoDate(this._d);if(this._o.field){this._o.field.value=this.toString();fireEvent(this._o.field,'change',{firedBy:this});}
if(!preventOnSelect&&typeof this._o.onSelect==='function'){this._o.onSelect.call(this,this.getDate());}},gotoDate:function(date)
{var newCalendar=true;if(!isDate(date)){return;}
if(this.calendars){var firstVisibleDate=new Date(this.calendars[0].year,this.calendars[0].month,1),lastVisibleDate=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),visibleDate=date.getTime();lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);lastVisibleDate.setDate(lastVisibleDate.getDate()-1);newCalendar=(visibleDate<firstVisibleDate.getTime()||lastVisibleDate.getTime()<visibleDate);}
if(newCalendar){this.calendars=[{month:date.getMonth(),year:date.getFullYear(),hour:date.getHours(),minute:date.getMinutes(),second:date.getSeconds()}];if(this._o.mainCalendar==='right'){this.calendars[0].month+=1-this._o.numberOfMonths;}}
this.adjustCalendars();},adjustCalendars:function(){this.calendars[0]=adjustCalendar(this.calendars[0]);for(var c=1;c<this._o.numberOfMonths;c++){this.calendars[c]=adjustCalendar({month:this.calendars[0].month+c,year:this.calendars[0].year});}
this.draw();},gotoToday:function()
{this.gotoDate(new Date());},gotoMonth:function(month)
{if(!isNaN(month)){this.calendars[0].month=parseInt(month,10);this.adjustCalendars();}},nextMonth:function()
{this.calendars[0].month++;this.adjustCalendars();},prevMonth:function()
{this.calendars[0].month--;this.adjustCalendars();},gotoYear:function(year)
{if(!isNaN(year)){this.calendars[0].year=parseInt(year,10);this.adjustCalendars();}},setMinDate:function(value)
{if(!this._o.showTime)setToStartOfDay(value);this._o.minDate=value;this._o.minYear=value.getFullYear();this._o.minMonth=value.getMonth();this.draw();},setMaxDate:function(value)
{setToStartOfDay(value);this._o.maxDate=value;this._o.maxYear=value.getFullYear();this._o.maxMonth=value.getMonth();this.draw();},setStartRange:function(value)
{this._o.startRange=value;},setEndRange:function(value)
{this._o.endRange=value;},draw:function(force)
{if(!this._v&&!force){return;}
var opts=this._o,minYear=opts.minYear,maxYear=opts.maxYear,minMonth=opts.minMonth,maxMonth=opts.maxMonth,html='';if(this._y<=minYear){this._y=minYear;if(!isNaN(minMonth)&&this._m<minMonth){this._m=minMonth;}}
if(this._y>=maxYear){this._y=maxYear;if(!isNaN(maxMonth)&&this._m>maxMonth){this._m=maxMonth;}}
for(var c=0;c<opts.numberOfMonths;c++){html+='<div class="pika-lendar">'+renderTitle(this,c,this.calendars[c].year,this.calendars[c].month,this.calendars[0].year)+this.render(this.calendars[c].year,this.calendars[c].month)+'</div>';}
if(opts.showTime){html+='<div class="pika-time-container">'+
renderTime(this._d?this._d.getHours():0,this._d?this._d.getMinutes():0,this._d?this._d.getSeconds():0,opts)
+'</div>';}
this.el.innerHTML=html;if(opts.bound){if(opts.field.type!=='hidden'){sto(function(){opts.trigger.focus();},1);}}
if(typeof this._o.onDraw==='function'){var self=this;sto(function(){self._o.onDraw.call(self);},0);}},adjustPosition:function()
{var field,pEl,width,height,viewportWidth,viewportHeight,scrollTop,left,top,clientRect;if(this._o.container)return;this.el.style.position='absolute';field=this._o.trigger;pEl=field;width=this.el.offsetWidth;height=this.el.offsetHeight;viewportWidth=window.innerWidth||document.documentElement.clientWidth;viewportHeight=window.innerHeight||document.documentElement.clientHeight;scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;if(typeof field.getBoundingClientRect==='function'){clientRect=field.getBoundingClientRect();left=clientRect.left+window.pageXOffset;top=clientRect.bottom+window.pageYOffset;}else{left=pEl.offsetLeft;top=pEl.offsetTop+pEl.offsetHeight;while((pEl=pEl.offsetParent)){left+=pEl.offsetLeft;top+=pEl.offsetTop;}}
if((this._o.reposition&&left+width>viewportWidth)||(this._o.position.indexOf('right')>-1&&left-width+field.offsetWidth>0)){left=left-width+field.offsetWidth;}
if((this._o.reposition&&top+height>viewportHeight+scrollTop)||(this._o.position.indexOf('top')>-1&&top-height-field.offsetHeight>0)){top=top-height-field.offsetHeight;}
this.el.style.left=left+'px';this.el.style.top=top+'px';},render:function(year,month)
{var opts=this._o,now=new Date(),days=getDaysInMonth(year,month),before=new Date(year,month,1).getDay(),data=[],row=[];if(!opts.showTime)setToStartOfDay(now);if(opts.firstDay>0){before-=opts.firstDay;if(before<0){before+=7;}}
var previousMonth=month===0?11:month-1,nextMonth=month===11?0:month+1,yearOfPreviousMonth=month===0?year-1:year,yearOfNextMonth=month===11?year+1:year,daysInPreviousMonth=getDaysInMonth(yearOfPreviousMonth,previousMonth);var cells=days+before,after=cells;while(after>7){after-=7;}
cells+=7-after;var minDate_date=opts.minDate?new Date(opts.minDate.getFullYear(),opts.minDate.getMonth(),opts.minDate.getDate()):null;var maxDate_date=opts.maxDate?new Date(opts.maxDate.getFullYear(),opts.maxDate.getMonth(),opts.maxDate.getDate()):null;for(var i=0,r=0;i<cells;i++)
{var day=new Date(year,month,1+(i-before)),isSelected=isDate(this._d)?compareDates(day,this._d):false,isToday=compareDates(day,now),isEmpty=i<before||i>=(days+before),dayNumber=1+(i-before),monthNumber=month,yearNumber=year,isStartRange=opts.startRange&&compareDates(opts.startRange,day),isEndRange=opts.endRange&&compareDates(opts.endRange,day),isInRange=opts.startRange&&opts.endRange&&opts.startRange<day&&day<opts.endRange,isDisabled=(opts.minDate&&day<opts.minDate)||(opts.maxDate&&day>opts.maxDate)||(opts.disableWeekends&&isWeekend(day))||(opts.disableDayFn&&opts.disableDayFn(day));if(isEmpty){if(i<before){dayNumber=daysInPreviousMonth+dayNumber;monthNumber=previousMonth;yearNumber=yearOfPreviousMonth;}else{dayNumber=dayNumber-days;monthNumber=nextMonth;yearNumber=yearOfNextMonth;}}
var dayConfig={day:dayNumber,month:monthNumber,year:yearNumber,isSelected:isSelected,isToday:isToday,isDisabled:isDisabled,isEmpty:isEmpty,isStartRange:isStartRange,isEndRange:isEndRange,isInRange:isInRange,showDaysInNextAndPreviousMonths:opts.showDaysInNextAndPreviousMonths};row.push(renderDay(dayConfig));if(++r===7){if(opts.showWeekNumber){row.unshift(renderWeek(i-before,month,year));}
data.push(renderRow(row,opts.isRTL));row=[];r=0;}}
return renderTable(opts,data);},isVisible:function()
{return this._v;},show:function()
{if(!this._v){removeClass(this.el,'is-hidden');this._v=true;this.draw();if(this._o.bound){addEvent(document,'click',this._onClick);this.adjustPosition();}
if(typeof this._o.onOpen==='function'){this._o.onOpen.call(this);}}},hide:function()
{var v=this._v;if(v!==false){if(this._o.bound){removeEvent(document,'click',this._onClick);}
this.el.style.position='static';this.el.style.left='auto';this.el.style.top='auto';addClass(this.el,'is-hidden');this._v=false;if(v!==undefined&&typeof this._o.onClose==='function'){this._o.onClose.call(this);}}},destroy:function()
{this.hide();removeEvent(this.el,'mousedown',this._onMouseDown,true);removeEvent(this.el,'touchend',this._onMouseDown,true);removeEvent(this.el,'change',this._onChange);if(this._o.field){removeEvent(this._o.field,'change',this._onInputChange);if(this._o.bound){removeEvent(this._o.trigger,'click',this._onInputClick);removeEvent(this._o.trigger,'focus',this._onInputFocus);removeEvent(this._o.trigger,'blur',this._onInputBlur);}}
if(this.el.parentNode){this.el.parentNode.removeChild(this.el);}}};return Pikaday;}));/*! DataTables 1.10.12
 * ©2008-2015 SpryMedia Ltd - datatables.net/license
 */(function(factory){"use strict";if(typeof define==='function'&&define.amd){define(['jquery'],function($){return factory($,window,document);});}
else if(typeof exports==='object'){module.exports=function(root,$){if(!root){root=window;}
if(!$){$=typeof window!=='undefined'?require('jquery'):require('jquery')(root);}
return factory($,root,root.document);};}
else{factory(jQuery,window,document);}}
(function($,window,document,undefined){"use strict";var DataTable=function(options)
{this.$=function(sSelector,oOpts)
{return this.api(true).$(sSelector,oOpts);};this._=function(sSelector,oOpts)
{return this.api(true).rows(sSelector,oOpts).data();};this.api=function(traditional)
{return traditional?new _Api(_fnSettingsFromNode(this[_ext.iApiIndex])):new _Api(this);};this.fnAddData=function(data,redraw)
{var api=this.api(true);var rows=$.isArray(data)&&($.isArray(data[0])||$.isPlainObject(data[0]))?api.rows.add(data):api.row.add(data);if(redraw===undefined||redraw){api.draw();}
return rows.flatten().toArray();};this.fnAdjustColumnSizing=function(bRedraw)
{var api=this.api(true).columns.adjust();var settings=api.settings()[0];var scroll=settings.oScroll;if(bRedraw===undefined||bRedraw){api.draw(false);}
else if(scroll.sX!==""||scroll.sY!==""){_fnScrollDraw(settings);}};this.fnClearTable=function(bRedraw)
{var api=this.api(true).clear();if(bRedraw===undefined||bRedraw){api.draw();}};this.fnClose=function(nTr)
{this.api(true).row(nTr).child.hide();};this.fnDeleteRow=function(target,callback,redraw)
{var api=this.api(true);var rows=api.rows(target);var settings=rows.settings()[0];var data=settings.aoData[rows[0][0]];rows.remove();if(callback){callback.call(this,settings,data);}
if(redraw===undefined||redraw){api.draw();}
return data;};this.fnDestroy=function(remove)
{this.api(true).destroy(remove);};this.fnDraw=function(complete)
{this.api(true).draw(complete);};this.fnFilter=function(sInput,iColumn,bRegex,bSmart,bShowGlobal,bCaseInsensitive)
{var api=this.api(true);if(iColumn===null||iColumn===undefined){api.search(sInput,bRegex,bSmart,bCaseInsensitive);}
else{api.column(iColumn).search(sInput,bRegex,bSmart,bCaseInsensitive);}
api.draw();};this.fnGetData=function(src,col)
{var api=this.api(true);if(src!==undefined){var type=src.nodeName?src.nodeName.toLowerCase():'';return col!==undefined||type=='td'||type=='th'?api.cell(src,col).data():api.row(src).data()||null;}
return api.data().toArray();};this.fnGetNodes=function(iRow)
{var api=this.api(true);return iRow!==undefined?api.row(iRow).node():api.rows().nodes().flatten().toArray();};this.fnGetPosition=function(node)
{var api=this.api(true);var nodeName=node.nodeName.toUpperCase();if(nodeName=='TR'){return api.row(node).index();}
else if(nodeName=='TD'||nodeName=='TH'){var cell=api.cell(node).index();return[cell.row,cell.columnVisible,cell.column];}
return null;};this.fnIsOpen=function(nTr)
{return this.api(true).row(nTr).child.isShown();};this.fnOpen=function(nTr,mHtml,sClass)
{return this.api(true).row(nTr).child(mHtml,sClass).show().child()[0];};this.fnPageChange=function(mAction,bRedraw)
{var api=this.api(true).page(mAction);if(bRedraw===undefined||bRedraw){api.draw(false);}};this.fnSetColumnVis=function(iCol,bShow,bRedraw)
{var api=this.api(true).column(iCol).visible(bShow);if(bRedraw===undefined||bRedraw){api.columns.adjust().draw();}};this.fnSettings=function()
{return _fnSettingsFromNode(this[_ext.iApiIndex]);};this.fnSort=function(aaSort)
{this.api(true).order(aaSort).draw();};this.fnSortListener=function(nNode,iColumn,fnCallback)
{this.api(true).order.listener(nNode,iColumn,fnCallback);};this.fnUpdate=function(mData,mRow,iColumn,bRedraw,bAction)
{var api=this.api(true);if(iColumn===undefined||iColumn===null){api.row(mRow).data(mData);}
else{api.cell(mRow,iColumn).data(mData);}
if(bAction===undefined||bAction){api.columns.adjust();}
if(bRedraw===undefined||bRedraw){api.draw();}
return 0;};this.fnVersionCheck=_ext.fnVersionCheck;var _that=this;var emptyInit=options===undefined;var len=this.length;if(emptyInit){options={};}
this.oApi=this.internal=_ext.internal;for(var fn in DataTable.ext.internal){if(fn){this[fn]=_fnExternApiFunc(fn);}}
this.each(function(){var o={};var oInit=len>1?_fnExtend(o,options,true):options;var i=0,iLen,j,jLen,k,kLen;var sId=this.getAttribute('id');var bInitHandedOff=false;var defaults=DataTable.defaults;var $this=$(this);if(this.nodeName.toLowerCase()!='table')
{_fnLog(null,0,'Non-table node initialisation ('+this.nodeName+')',2);return;}
_fnCompatOpts(defaults);_fnCompatCols(defaults.column);_fnCamelToHungarian(defaults,defaults,true);_fnCamelToHungarian(defaults.column,defaults.column,true);_fnCamelToHungarian(defaults,$.extend(oInit,$this.data()));var allSettings=DataTable.settings;for(i=0,iLen=allSettings.length;i<iLen;i++)
{var s=allSettings[i];if(s.nTable==this||s.nTHead.parentNode==this||(s.nTFoot&&s.nTFoot.parentNode==this))
{var bRetrieve=oInit.bRetrieve!==undefined?oInit.bRetrieve:defaults.bRetrieve;var bDestroy=oInit.bDestroy!==undefined?oInit.bDestroy:defaults.bDestroy;if(emptyInit||bRetrieve)
{return s.oInstance;}
else if(bDestroy)
{s.oInstance.fnDestroy();break;}
else
{_fnLog(s,0,'Cannot reinitialise DataTable',3);return;}}
if(s.sTableId==this.id)
{allSettings.splice(i,1);break;}}
if(sId===null||sId==="")
{sId="DataTables_Table_"+(DataTable.ext._unique++);this.id=sId;}
var oSettings=$.extend(true,{},DataTable.models.oSettings,{"sDestroyWidth":$this[0].style.width,"sInstance":sId,"sTableId":sId});oSettings.nTable=this;oSettings.oApi=_that.internal;oSettings.oInit=oInit;allSettings.push(oSettings);oSettings.oInstance=(_that.length===1)?_that:$this.dataTable();_fnCompatOpts(oInit);if(oInit.oLanguage)
{_fnLanguageCompat(oInit.oLanguage);}
if(oInit.aLengthMenu&&!oInit.iDisplayLength)
{oInit.iDisplayLength=$.isArray(oInit.aLengthMenu[0])?oInit.aLengthMenu[0][0]:oInit.aLengthMenu[0];}
oInit=_fnExtend($.extend(true,{},defaults),oInit);_fnMap(oSettings.oFeatures,oInit,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]);_fnMap(oSettings,oInit,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);_fnMap(oSettings.oScroll,oInit,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);_fnMap(oSettings.oLanguage,oInit,"fnInfoCallback");_fnCallbackReg(oSettings,'aoDrawCallback',oInit.fnDrawCallback,'user');_fnCallbackReg(oSettings,'aoServerParams',oInit.fnServerParams,'user');_fnCallbackReg(oSettings,'aoStateSaveParams',oInit.fnStateSaveParams,'user');_fnCallbackReg(oSettings,'aoStateLoadParams',oInit.fnStateLoadParams,'user');_fnCallbackReg(oSettings,'aoStateLoaded',oInit.fnStateLoaded,'user');_fnCallbackReg(oSettings,'aoRowCallback',oInit.fnRowCallback,'user');_fnCallbackReg(oSettings,'aoRowCreatedCallback',oInit.fnCreatedRow,'user');_fnCallbackReg(oSettings,'aoHeaderCallback',oInit.fnHeaderCallback,'user');_fnCallbackReg(oSettings,'aoFooterCallback',oInit.fnFooterCallback,'user');_fnCallbackReg(oSettings,'aoInitComplete',oInit.fnInitComplete,'user');_fnCallbackReg(oSettings,'aoPreDrawCallback',oInit.fnPreDrawCallback,'user');oSettings.rowIdFn=_fnGetObjectDataFn(oInit.rowId);_fnBrowserDetect(oSettings);var oClasses=oSettings.oClasses;if(oInit.bJQueryUI)
{$.extend(oClasses,DataTable.ext.oJUIClasses,oInit.oClasses);if(oInit.sDom===defaults.sDom&&defaults.sDom==="lfrtip")
{oSettings.sDom='<"H"lfr>t<"F"ip>';}
if(!oSettings.renderer){oSettings.renderer='jqueryui';}
else if($.isPlainObject(oSettings.renderer)&&!oSettings.renderer.header){oSettings.renderer.header='jqueryui';}}
else
{$.extend(oClasses,DataTable.ext.classes,oInit.oClasses);}
$this.addClass(oClasses.sTable);if(oSettings.iInitDisplayStart===undefined)
{oSettings.iInitDisplayStart=oInit.iDisplayStart;oSettings._iDisplayStart=oInit.iDisplayStart;}
if(oInit.iDeferLoading!==null)
{oSettings.bDeferLoading=true;var tmp=$.isArray(oInit.iDeferLoading);oSettings._iRecordsDisplay=tmp?oInit.iDeferLoading[0]:oInit.iDeferLoading;oSettings._iRecordsTotal=tmp?oInit.iDeferLoading[1]:oInit.iDeferLoading;}
var oLanguage=oSettings.oLanguage;$.extend(true,oLanguage,oInit.oLanguage);if(oLanguage.sUrl!=="")
{$.ajax({dataType:'json',url:oLanguage.sUrl,success:function(json){_fnLanguageCompat(json);_fnCamelToHungarian(defaults.oLanguage,json);$.extend(true,oLanguage,json);_fnInitialise(oSettings);},error:function(){_fnInitialise(oSettings);}});bInitHandedOff=true;}
if(oInit.asStripeClasses===null)
{oSettings.asStripeClasses=[oClasses.sStripeOdd,oClasses.sStripeEven];}
var stripeClasses=oSettings.asStripeClasses;var rowOne=$this.children('tbody').find('tr').eq(0);if($.inArray(true,$.map(stripeClasses,function(el,i){return rowOne.hasClass(el);}))!==-1){$('tbody tr',this).removeClass(stripeClasses.join(' '));oSettings.asDestroyStripes=stripeClasses.slice();}
var anThs=[];var aoColumnsInit;var nThead=this.getElementsByTagName('thead');if(nThead.length!==0)
{_fnDetectHeader(oSettings.aoHeader,nThead[0]);anThs=_fnGetUniqueThs(oSettings);}
if(oInit.aoColumns===null)
{aoColumnsInit=[];for(i=0,iLen=anThs.length;i<iLen;i++)
{aoColumnsInit.push(null);}}
else
{aoColumnsInit=oInit.aoColumns;}
for(i=0,iLen=aoColumnsInit.length;i<iLen;i++)
{_fnAddColumn(oSettings,anThs?anThs[i]:null);}
_fnApplyColumnDefs(oSettings,oInit.aoColumnDefs,aoColumnsInit,function(iCol,oDef){_fnColumnOptions(oSettings,iCol,oDef);});if(rowOne.length){var a=function(cell,name){return cell.getAttribute('data-'+name)!==null?name:null;};$(rowOne[0]).children('th, td').each(function(i,cell){var col=oSettings.aoColumns[i];if(col.mData===i){var sort=a(cell,'sort')||a(cell,'order');var filter=a(cell,'filter')||a(cell,'search');if(sort!==null||filter!==null){col.mData={_:i+'.display',sort:sort!==null?i+'.@data-'+sort:undefined,type:sort!==null?i+'.@data-'+sort:undefined,filter:filter!==null?i+'.@data-'+filter:undefined};_fnColumnOptions(oSettings,i);}}});}
var features=oSettings.oFeatures;if(oInit.bStateSave)
{features.bStateSave=true;_fnLoadState(oSettings,oInit);_fnCallbackReg(oSettings,'aoDrawCallback',_fnSaveState,'state_save');}
if(oInit.aaSorting===undefined)
{var sorting=oSettings.aaSorting;for(i=0,iLen=sorting.length;i<iLen;i++)
{sorting[i][1]=oSettings.aoColumns[i].asSorting[0];}}
_fnSortingClasses(oSettings);if(features.bSort)
{_fnCallbackReg(oSettings,'aoDrawCallback',function(){if(oSettings.bSorted){var aSort=_fnSortFlatten(oSettings);var sortedColumns={};$.each(aSort,function(i,val){sortedColumns[val.src]=val.dir;});_fnCallbackFire(oSettings,null,'order',[oSettings,aSort,sortedColumns]);_fnSortAria(oSettings);}});}
_fnCallbackReg(oSettings,'aoDrawCallback',function(){if(oSettings.bSorted||_fnDataSource(oSettings)==='ssp'||features.bDeferRender){_fnSortingClasses(oSettings);}},'sc');var captions=$this.children('caption').each(function(){this._captionSide=$this.css('caption-side');});var thead=$this.children('thead');if(thead.length===0)
{thead=$('<thead/>').appendTo(this);}
oSettings.nTHead=thead[0];var tbody=$this.children('tbody');if(tbody.length===0)
{tbody=$('<tbody/>').appendTo(this);}
oSettings.nTBody=tbody[0];var tfoot=$this.children('tfoot');if(tfoot.length===0&&captions.length>0&&(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!==""))
{tfoot=$('<tfoot/>').appendTo(this);}
if(tfoot.length===0||tfoot.children().length===0){$this.addClass(oClasses.sNoFooter);}
else if(tfoot.length>0){oSettings.nTFoot=tfoot[0];_fnDetectHeader(oSettings.aoFooter,oSettings.nTFoot);}
if(oInit.aaData)
{for(i=0;i<oInit.aaData.length;i++)
{_fnAddData(oSettings,oInit.aaData[i]);}}
else if(oSettings.bDeferLoading||_fnDataSource(oSettings)=='dom')
{_fnAddTr(oSettings,$(oSettings.nTBody).children('tr'));}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings.bInitialised=true;if(bInitHandedOff===false)
{_fnInitialise(oSettings);}});_that=null;return this;};var _ext;var _Api;var _api_register;var _api_registerPlural;var _re_dic={};var _re_new_lines=/[\r\n]/g;var _re_html=/<.*?>/g;var _re_date_start=/^[\w\+\-]/;var _re_date_end=/[\w\+\-]$/;var _re_escape_regex=new RegExp('(\\'+['/','.','*','+','?','|','(',')','[',']','{','}','\\','$','^','-'].join('|\\')+')','g');var _re_formatted_numeric=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi;var _empty=function(d){return!d||d===true||d==='-'?true:false;};var _intVal=function(s){var integer=parseInt(s,10);return!isNaN(integer)&&isFinite(s)?integer:null;};var _numToDecimal=function(num,decimalPoint){if(!_re_dic[decimalPoint]){_re_dic[decimalPoint]=new RegExp(_fnEscapeRegex(decimalPoint),'g');}
return typeof num==='string'&&decimalPoint!=='.'?num.replace(/\./g,'').replace(_re_dic[decimalPoint],'.'):num;};var _isNumber=function(d,decimalPoint,formatted){var strType=typeof d==='string';if(_empty(d)){return true;}
if(decimalPoint&&strType){d=_numToDecimal(d,decimalPoint);}
if(formatted&&strType){d=d.replace(_re_formatted_numeric,'');}
return!isNaN(parseFloat(d))&&isFinite(d);};var _isHtml=function(d){return _empty(d)||typeof d==='string';};var _htmlNumeric=function(d,decimalPoint,formatted){if(_empty(d)){return true;}
var html=_isHtml(d);return!html?null:_isNumber(_stripHtml(d),decimalPoint,formatted)?true:null;};var _pluck=function(a,prop,prop2){var out=[];var i=0,ien=a.length;if(prop2!==undefined){for(;i<ien;i++){if(a[i]&&a[i][prop]){out.push(a[i][prop][prop2]);}}}
else{for(;i<ien;i++){if(a[i]){out.push(a[i][prop]);}}}
return out;};var _pluck_order=function(a,order,prop,prop2)
{var out=[];var i=0,ien=order.length;if(prop2!==undefined){for(;i<ien;i++){if(a[order[i]][prop]){out.push(a[order[i]][prop][prop2]);}}}
else{for(;i<ien;i++){out.push(a[order[i]][prop]);}}
return out;};var _range=function(len,start)
{var out=[];var end;if(start===undefined){start=0;end=len;}
else{end=start;start=len;}
for(var i=start;i<end;i++){out.push(i);}
return out;};var _removeEmpty=function(a)
{var out=[];for(var i=0,ien=a.length;i<ien;i++){if(a[i]){out.push(a[i]);}}
return out;};var _stripHtml=function(d){return d.replace(_re_html,'');};var _unique=function(src)
{var
out=[],val,i,ien=src.length,j,k=0;again:for(i=0;i<ien;i++){val=src[i];for(j=0;j<k;j++){if(out[j]===val){continue again;}}
out.push(val);k++;}
return out;};DataTable.util={throttle:function(fn,freq){var
frequency=freq!==undefined?freq:200,last,timer;return function(){var
that=this,now=+new Date(),args=arguments;if(last&&now<last+frequency){clearTimeout(timer);timer=setTimeout(function(){last=undefined;fn.apply(that,args);},frequency);}
else{last=now;fn.apply(that,args);}};},escapeRegex:function(val){return val.replace(_re_escape_regex,'\\$1');}};function _fnHungarianMap(o)
{var
hungarian='a aa ai ao as b fn i m o s ',match,newKey,map={};$.each(o,function(key,val){match=key.match(/^([^A-Z]+?)([A-Z])/);if(match&&hungarian.indexOf(match[1]+' ')!==-1)
{newKey=key.replace(match[0],match[2].toLowerCase());map[newKey]=key;if(match[1]==='o')
{_fnHungarianMap(o[key]);}}});o._hungarianMap=map;}
function _fnCamelToHungarian(src,user,force)
{if(!src._hungarianMap){_fnHungarianMap(src);}
var hungarianKey;$.each(user,function(key,val){hungarianKey=src._hungarianMap[key];if(hungarianKey!==undefined&&(force||user[hungarianKey]===undefined))
{if(hungarianKey.charAt(0)==='o')
{if(!user[hungarianKey]){user[hungarianKey]={};}
$.extend(true,user[hungarianKey],user[key]);_fnCamelToHungarian(src[hungarianKey],user[hungarianKey],force);}
else{user[hungarianKey]=user[key];}}});}
function _fnLanguageCompat(lang)
{var defaults=DataTable.defaults.oLanguage;var zeroRecords=lang.sZeroRecords;if(!lang.sEmptyTable&&zeroRecords&&defaults.sEmptyTable==="No data available in table")
{_fnMap(lang,lang,'sZeroRecords','sEmptyTable');}
if(!lang.sLoadingRecords&&zeroRecords&&defaults.sLoadingRecords==="Loading...")
{_fnMap(lang,lang,'sZeroRecords','sLoadingRecords');}
if(lang.sInfoThousands){lang.sThousands=lang.sInfoThousands;}
var decimal=lang.sDecimal;if(decimal){_addNumericSort(decimal);}}
var _fnCompatMap=function(o,knew,old){if(o[knew]!==undefined){o[old]=o[knew];}};function _fnCompatOpts(init)
{_fnCompatMap(init,'ordering','bSort');_fnCompatMap(init,'orderMulti','bSortMulti');_fnCompatMap(init,'orderClasses','bSortClasses');_fnCompatMap(init,'orderCellsTop','bSortCellsTop');_fnCompatMap(init,'order','aaSorting');_fnCompatMap(init,'orderFixed','aaSortingFixed');_fnCompatMap(init,'paging','bPaginate');_fnCompatMap(init,'pagingType','sPaginationType');_fnCompatMap(init,'pageLength','iDisplayLength');_fnCompatMap(init,'searching','bFilter');if(typeof init.sScrollX==='boolean'){init.sScrollX=init.sScrollX?'100%':'';}
if(typeof init.scrollX==='boolean'){init.scrollX=init.scrollX?'100%':'';}
var searchCols=init.aoSearchCols;if(searchCols){for(var i=0,ien=searchCols.length;i<ien;i++){if(searchCols[i]){_fnCamelToHungarian(DataTable.models.oSearch,searchCols[i]);}}}}
function _fnCompatCols(init)
{_fnCompatMap(init,'orderable','bSortable');_fnCompatMap(init,'orderData','aDataSort');_fnCompatMap(init,'orderSequence','asSorting');_fnCompatMap(init,'orderDataType','sortDataType');var dataSort=init.aDataSort;if(dataSort&&!$.isArray(dataSort)){init.aDataSort=[dataSort];}}
function _fnBrowserDetect(settings)
{if(!DataTable.__browser){var browser={};DataTable.__browser=browser;var n=$('<div/>').css({position:'fixed',top:0,left:0,height:1,width:1,overflow:'hidden'}).append($('<div/>').css({position:'absolute',top:1,left:1,width:100,overflow:'scroll'}).append($('<div/>').css({width:'100%',height:10}))).appendTo('body');var outer=n.children();var inner=outer.children();browser.barWidth=outer[0].offsetWidth-outer[0].clientWidth;browser.bScrollOversize=inner[0].offsetWidth===100&&outer[0].clientWidth!==100;browser.bScrollbarLeft=Math.round(inner.offset().left)!==1;browser.bBounding=n[0].getBoundingClientRect().width?true:false;n.remove();}
$.extend(settings.oBrowser,DataTable.__browser);settings.oScroll.iBarWidth=DataTable.__browser.barWidth;}
function _fnReduce(that,fn,init,start,end,inc)
{var
i=start,value,isSet=false;if(init!==undefined){value=init;isSet=true;}
while(i!==end){if(!that.hasOwnProperty(i)){continue;}
value=isSet?fn(value,that[i],i,that):that[i];isSet=true;i+=inc;}
return value;}
function _fnAddColumn(oSettings,nTh)
{var oDefaults=DataTable.defaults.column;var iCol=oSettings.aoColumns.length;var oCol=$.extend({},DataTable.models.oColumn,oDefaults,{"nTh":nTh?nTh:document.createElement('th'),"sTitle":oDefaults.sTitle?oDefaults.sTitle:nTh?nTh.innerHTML:'',"aDataSort":oDefaults.aDataSort?oDefaults.aDataSort:[iCol],"mData":oDefaults.mData?oDefaults.mData:iCol,idx:iCol});oSettings.aoColumns.push(oCol);var searchCols=oSettings.aoPreSearchCols;searchCols[iCol]=$.extend({},DataTable.models.oSearch,searchCols[iCol]);_fnColumnOptions(oSettings,iCol,$(nTh).data());}
function _fnColumnOptions(oSettings,iCol,oOptions)
{var oCol=oSettings.aoColumns[iCol];var oClasses=oSettings.oClasses;var th=$(oCol.nTh);if(!oCol.sWidthOrig){oCol.sWidthOrig=th.attr('width')||null;var t=(th.attr('style')||'').match(/width:\s*(\d+[pxem%]+)/);if(t){oCol.sWidthOrig=t[1];}}
if(oOptions!==undefined&&oOptions!==null)
{_fnCompatCols(oOptions);_fnCamelToHungarian(DataTable.defaults.column,oOptions);if(oOptions.mDataProp!==undefined&&!oOptions.mData)
{oOptions.mData=oOptions.mDataProp;}
if(oOptions.sType)
{oCol._sManualType=oOptions.sType;}
if(oOptions.className&&!oOptions.sClass)
{oOptions.sClass=oOptions.className;}
$.extend(oCol,oOptions);_fnMap(oCol,oOptions,"sWidth","sWidthOrig");if(oOptions.iDataSort!==undefined)
{oCol.aDataSort=[oOptions.iDataSort];}
_fnMap(oCol,oOptions,"aDataSort");}
var mDataSrc=oCol.mData;var mData=_fnGetObjectDataFn(mDataSrc);var mRender=oCol.mRender?_fnGetObjectDataFn(oCol.mRender):null;var attrTest=function(src){return typeof src==='string'&&src.indexOf('@')!==-1;};oCol._bAttrSrc=$.isPlainObject(mDataSrc)&&(attrTest(mDataSrc.sort)||attrTest(mDataSrc.type)||attrTest(mDataSrc.filter));oCol._setter=null;oCol.fnGetData=function(rowData,type,meta){var innerData=mData(rowData,type,undefined,meta);return mRender&&type?mRender(innerData,type,rowData,meta):innerData;};oCol.fnSetData=function(rowData,val,meta){return _fnSetObjectDataFn(mDataSrc)(rowData,val,meta);};if(typeof mDataSrc!=='number'){oSettings._rowReadObject=true;}
if(!oSettings.oFeatures.bSort)
{oCol.bSortable=false;th.addClass(oClasses.sSortableNone);}
var bAsc=$.inArray('asc',oCol.asSorting)!==-1;var bDesc=$.inArray('desc',oCol.asSorting)!==-1;if(!oCol.bSortable||(!bAsc&&!bDesc))
{oCol.sSortingClass=oClasses.sSortableNone;oCol.sSortingClassJUI="";}
else if(bAsc&&!bDesc)
{oCol.sSortingClass=oClasses.sSortableAsc;oCol.sSortingClassJUI=oClasses.sSortJUIAscAllowed;}
else if(!bAsc&&bDesc)
{oCol.sSortingClass=oClasses.sSortableDesc;oCol.sSortingClassJUI=oClasses.sSortJUIDescAllowed;}
else
{oCol.sSortingClass=oClasses.sSortable;oCol.sSortingClassJUI=oClasses.sSortJUI;}}
function _fnAdjustColumnSizing(settings)
{if(settings.oFeatures.bAutoWidth!==false)
{var columns=settings.aoColumns;_fnCalculateColumnWidths(settings);for(var i=0,iLen=columns.length;i<iLen;i++)
{columns[i].nTh.style.width=columns[i].sWidth;}}
var scroll=settings.oScroll;if(scroll.sY!==''||scroll.sX!=='')
{_fnScrollDraw(settings);}
_fnCallbackFire(settings,null,'column-sizing',[settings]);}
function _fnVisibleToColumnIndex(oSettings,iMatch)
{var aiVis=_fnGetColumns(oSettings,'bVisible');return typeof aiVis[iMatch]==='number'?aiVis[iMatch]:null;}
function _fnColumnIndexToVisible(oSettings,iMatch)
{var aiVis=_fnGetColumns(oSettings,'bVisible');var iPos=$.inArray(iMatch,aiVis);return iPos!==-1?iPos:null;}
function _fnVisbleColumns(oSettings)
{var vis=0;$.each(oSettings.aoColumns,function(i,col){if(col.bVisible&&$(col.nTh).css('display')!=='none'){vis++;}});return vis;}
function _fnGetColumns(oSettings,sParam)
{var a=[];$.map(oSettings.aoColumns,function(val,i){if(val[sParam]){a.push(i);}});return a;}
function _fnColumnTypes(settings)
{var columns=settings.aoColumns;var data=settings.aoData;var types=DataTable.ext.type.detect;var i,ien,j,jen,k,ken;var col,cell,detectedType,cache;for(i=0,ien=columns.length;i<ien;i++){col=columns[i];cache=[];if(!col.sType&&col._sManualType){col.sType=col._sManualType;}
else if(!col.sType){for(j=0,jen=types.length;j<jen;j++){for(k=0,ken=data.length;k<ken;k++){if(cache[k]===undefined){cache[k]=_fnGetCellData(settings,k,i,'type');}
detectedType=types[j](cache[k],settings);if(!detectedType&&j!==types.length-1){break;}
if(detectedType==='html'){break;}}
if(detectedType){col.sType=detectedType;break;}}
if(!col.sType){col.sType='string';}}}}
function _fnApplyColumnDefs(oSettings,aoColDefs,aoCols,fn)
{var i,iLen,j,jLen,k,kLen,def;var columns=oSettings.aoColumns;if(aoColDefs)
{for(i=aoColDefs.length-1;i>=0;i--)
{def=aoColDefs[i];var aTargets=def.targets!==undefined?def.targets:def.aTargets;if(!$.isArray(aTargets))
{aTargets=[aTargets];}
for(j=0,jLen=aTargets.length;j<jLen;j++)
{if(typeof aTargets[j]==='number'&&aTargets[j]>=0)
{while(columns.length<=aTargets[j])
{_fnAddColumn(oSettings);}
fn(aTargets[j],def);}
else if(typeof aTargets[j]==='number'&&aTargets[j]<0)
{fn(columns.length+aTargets[j],def);}
else if(typeof aTargets[j]==='string')
{for(k=0,kLen=columns.length;k<kLen;k++)
{if(aTargets[j]=="_all"||$(columns[k].nTh).hasClass(aTargets[j]))
{fn(k,def);}}}}}}
if(aoCols)
{for(i=0,iLen=aoCols.length;i<iLen;i++)
{fn(i,aoCols[i]);}}}
function _fnAddData(oSettings,aDataIn,nTr,anTds)
{var iRow=oSettings.aoData.length;var oData=$.extend(true,{},DataTable.models.oRow,{src:nTr?'dom':'data',idx:iRow});oData._aData=aDataIn;oSettings.aoData.push(oData);var nTd,sThisType;var columns=oSettings.aoColumns;for(var i=0,iLen=columns.length;i<iLen;i++)
{columns[i].sType=null;}
oSettings.aiDisplayMaster.push(iRow);var id=oSettings.rowIdFn(aDataIn);if(id!==undefined){oSettings.aIds[id]=oData;}
if(nTr||!oSettings.oFeatures.bDeferRender)
{_fnCreateTr(oSettings,iRow,nTr,anTds);}
return iRow;}
function _fnAddTr(settings,trs)
{var row;if(!(trs instanceof $)){trs=$(trs);}
return trs.map(function(i,el){row=_fnGetRowElements(settings,el);return _fnAddData(settings,row.data,el,row.cells);});}
function _fnNodeToDataIndex(oSettings,n)
{return(n._DT_RowIndex!==undefined)?n._DT_RowIndex:null;}
function _fnNodeToColumnIndex(oSettings,iRow,n)
{return $.inArray(n,oSettings.aoData[iRow].anCells);}
function _fnGetCellData(settings,rowIdx,colIdx,type)
{var draw=settings.iDraw;var col=settings.aoColumns[colIdx];var rowData=settings.aoData[rowIdx]._aData;var defaultContent=col.sDefaultContent;var cellData=col.fnGetData(rowData,type,{settings:settings,row:rowIdx,col:colIdx});if(cellData===undefined){if(settings.iDrawError!=draw&&defaultContent===null){_fnLog(settings,0,"Requested unknown parameter "+
(typeof col.mData=='function'?'{function}':"'"+col.mData+"'")+" for row "+rowIdx+", column "+colIdx,4);settings.iDrawError=draw;}
return defaultContent;}
if((cellData===rowData||cellData===null)&&defaultContent!==null&&type!==undefined){cellData=defaultContent;}
else if(typeof cellData==='function'){return cellData.call(rowData);}
if(cellData===null&&type=='display'){return'';}
return cellData;}
function _fnSetCellData(settings,rowIdx,colIdx,val)
{var col=settings.aoColumns[colIdx];var rowData=settings.aoData[rowIdx]._aData;col.fnSetData(rowData,val,{settings:settings,row:rowIdx,col:colIdx});}
var __reArray=/\[.*?\]$/;var __reFn=/\(\)$/;function _fnSplitObjNotation(str)
{return $.map(str.match(/(\\.|[^\.])+/g)||[''],function(s){return s.replace(/\\./g,'.');});}
function _fnGetObjectDataFn(mSource)
{if($.isPlainObject(mSource))
{var o={};$.each(mSource,function(key,val){if(val){o[key]=_fnGetObjectDataFn(val);}});return function(data,type,row,meta){var t=o[type]||o._;return t!==undefined?t(data,type,row,meta):data;};}
else if(mSource===null)
{return function(data){return data;};}
else if(typeof mSource==='function')
{return function(data,type,row,meta){return mSource(data,type,row,meta);};}
else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1||mSource.indexOf('(')!==-1))
{var fetchData=function(data,type,src){var arrayNotation,funcNotation,out,innerSrc;if(src!=="")
{var a=_fnSplitObjNotation(src);for(var i=0,iLen=a.length;i<iLen;i++)
{arrayNotation=a[i].match(__reArray);funcNotation=a[i].match(__reFn);if(arrayNotation)
{a[i]=a[i].replace(__reArray,'');if(a[i]!==""){data=data[a[i]];}
out=[];a.splice(0,i+1);innerSrc=a.join('.');if($.isArray(data)){for(var j=0,jLen=data.length;j<jLen;j++){out.push(fetchData(data[j],type,innerSrc));}}
var join=arrayNotation[0].substring(1,arrayNotation[0].length-1);data=(join==="")?out:out.join(join);break;}
else if(funcNotation)
{a[i]=a[i].replace(__reFn,'');data=data[a[i]]();continue;}
if(data===null||data[a[i]]===undefined)
{return undefined;}
data=data[a[i]];}}
return data;};return function(data,type){return fetchData(data,type,mSource);};}
else
{return function(data,type){return data[mSource];};}}
function _fnSetObjectDataFn(mSource)
{if($.isPlainObject(mSource))
{return _fnSetObjectDataFn(mSource._);}
else if(mSource===null)
{return function(){};}
else if(typeof mSource==='function')
{return function(data,val,meta){mSource(data,'set',val,meta);};}
else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1||mSource.indexOf('(')!==-1))
{var setData=function(data,val,src){var a=_fnSplitObjNotation(src),b;var aLast=a[a.length-1];var arrayNotation,funcNotation,o,innerSrc;for(var i=0,iLen=a.length-1;i<iLen;i++)
{arrayNotation=a[i].match(__reArray);funcNotation=a[i].match(__reFn);if(arrayNotation)
{a[i]=a[i].replace(__reArray,'');data[a[i]]=[];b=a.slice();b.splice(0,i+1);innerSrc=b.join('.');if($.isArray(val))
{for(var j=0,jLen=val.length;j<jLen;j++)
{o={};setData(o,val[j],innerSrc);data[a[i]].push(o);}}
else
{data[a[i]]=val;}
return;}
else if(funcNotation)
{a[i]=a[i].replace(__reFn,'');data=data[a[i]](val);}
if(data[a[i]]===null||data[a[i]]===undefined)
{data[a[i]]={};}
data=data[a[i]];}
if(aLast.match(__reFn))
{data=data[aLast.replace(__reFn,'')](val);}
else
{data[aLast.replace(__reArray,'')]=val;}};return function(data,val){return setData(data,val,mSource);};}
else
{return function(data,val){data[mSource]=val;};}}
function _fnGetDataMaster(settings)
{return _pluck(settings.aoData,'_aData');}
function _fnClearTable(settings)
{settings.aoData.length=0;settings.aiDisplayMaster.length=0;settings.aiDisplay.length=0;settings.aIds={};}
function _fnDeleteIndex(a,iTarget,splice)
{var iTargetIndex=-1;for(var i=0,iLen=a.length;i<iLen;i++)
{if(a[i]==iTarget)
{iTargetIndex=i;}
else if(a[i]>iTarget)
{a[i]--;}}
if(iTargetIndex!=-1&&splice===undefined)
{a.splice(iTargetIndex,1);}}
function _fnInvalidate(settings,rowIdx,src,colIdx)
{var row=settings.aoData[rowIdx];var i,ien;var cellWrite=function(cell,col){while(cell.childNodes.length){cell.removeChild(cell.firstChild);}
cell.innerHTML=_fnGetCellData(settings,rowIdx,col,'display');};if(src==='dom'||((!src||src==='auto')&&row.src==='dom')){row._aData=_fnGetRowElements(settings,row,colIdx,colIdx===undefined?undefined:row._aData).data;}
else{var cells=row.anCells;if(cells){if(colIdx!==undefined){cellWrite(cells[colIdx],colIdx);}
else{for(i=0,ien=cells.length;i<ien;i++){cellWrite(cells[i],i);}}}}
row._aSortData=null;row._aFilterData=null;var cols=settings.aoColumns;if(colIdx!==undefined){cols[colIdx].sType=null;}
else{for(i=0,ien=cols.length;i<ien;i++){cols[i].sType=null;}
_fnRowAttributes(settings,row);}}
function _fnGetRowElements(settings,row,colIdx,d)
{var
tds=[],td=row.firstChild,name,col,o,i=0,contents,columns=settings.aoColumns,objectRead=settings._rowReadObject;d=d!==undefined?d:objectRead?{}:[];var attr=function(str,td){if(typeof str==='string'){var idx=str.indexOf('@');if(idx!==-1){var attr=str.substring(idx+1);var setter=_fnSetObjectDataFn(str);setter(d,td.getAttribute(attr));}}};var cellProcess=function(cell){if(colIdx===undefined||colIdx===i){col=columns[i];contents=$.trim(cell.innerHTML);if(col&&col._bAttrSrc){var setter=_fnSetObjectDataFn(col.mData._);setter(d,contents);attr(col.mData.sort,cell);attr(col.mData.type,cell);attr(col.mData.filter,cell);}
else{if(objectRead){if(!col._setter){col._setter=_fnSetObjectDataFn(col.mData);}
col._setter(d,contents);}
else{d[i]=contents;}}}
i++;};if(td){while(td){name=td.nodeName.toUpperCase();if(name=="TD"||name=="TH"){cellProcess(td);tds.push(td);}
td=td.nextSibling;}}
else{tds=row.anCells;for(var j=0,jen=tds.length;j<jen;j++){cellProcess(tds[j]);}}
var rowNode=row.firstChild?row:row.nTr;if(rowNode){var id=rowNode.getAttribute('id');if(id){_fnSetObjectDataFn(settings.rowId)(d,id);}}
return{data:d,cells:tds};}
function _fnCreateTr(oSettings,iRow,nTrIn,anTds)
{var
row=oSettings.aoData[iRow],rowData=row._aData,cells=[],nTr,nTd,oCol,i,iLen;if(row.nTr===null)
{nTr=nTrIn||document.createElement('tr');row.nTr=nTr;row.anCells=cells;nTr._DT_RowIndex=iRow;_fnRowAttributes(oSettings,row);for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{oCol=oSettings.aoColumns[i];nTd=nTrIn?anTds[i]:document.createElement(oCol.sCellType);nTd._DT_CellIndex={row:iRow,column:i};cells.push(nTd);if((!nTrIn||oCol.mRender||oCol.mData!==i)&&(!$.isPlainObject(oCol.mData)||oCol.mData._!==i+'.display')){nTd.innerHTML=_fnGetCellData(oSettings,iRow,i,'display');}
if(oCol.sClass)
{nTd.className+=' '+oCol.sClass;}
if(oCol.bVisible&&!nTrIn)
{nTr.appendChild(nTd);}
else if(!oCol.bVisible&&nTrIn)
{nTd.parentNode.removeChild(nTd);}
if(oCol.fnCreatedCell)
{oCol.fnCreatedCell.call(oSettings.oInstance,nTd,_fnGetCellData(oSettings,iRow,i),rowData,iRow,i);}}
_fnCallbackFire(oSettings,'aoRowCreatedCallback',null,[nTr,rowData,iRow]);}
row.nTr.setAttribute('role','row');}
function _fnRowAttributes(settings,row)
{var tr=row.nTr;var data=row._aData;if(tr){var id=settings.rowIdFn(data);if(id){tr.id=id;}
if(data.DT_RowClass){var a=data.DT_RowClass.split(' ');row.__rowc=row.__rowc?_unique(row.__rowc.concat(a)):a;$(tr).removeClass(row.__rowc.join(' ')).addClass(data.DT_RowClass);}
if(data.DT_RowAttr){$(tr).attr(data.DT_RowAttr);}
if(data.DT_RowData){$(tr).data(data.DT_RowData);}}}
function _fnBuildHead(oSettings)
{var i,ien,cell,row,column;var thead=oSettings.nTHead;var tfoot=oSettings.nTFoot;var createHeader=$('th, td',thead).length===0;var classes=oSettings.oClasses;var columns=oSettings.aoColumns;if(createHeader){row=$('<tr/>').appendTo(thead);}
for(i=0,ien=columns.length;i<ien;i++){column=columns[i];cell=$(column.nTh).addClass(column.sClass);if(createHeader){cell.appendTo(row);}
if(oSettings.oFeatures.bSort){cell.addClass(column.sSortingClass);if(column.bSortable!==false){cell.attr('tabindex',oSettings.iTabIndex).attr('aria-controls',oSettings.sTableId);_fnSortAttachListener(oSettings,column.nTh,i);}}
if(column.sTitle!=cell[0].innerHTML){cell.html(column.sTitle);}
_fnRenderer(oSettings,'header')(oSettings,cell,column,classes);}
if(createHeader){_fnDetectHeader(oSettings.aoHeader,thead);}
$(thead).find('>tr').attr('role','row');$(thead).find('>tr>th, >tr>td').addClass(classes.sHeaderTH);$(tfoot).find('>tr>th, >tr>td').addClass(classes.sFooterTH);if(tfoot!==null){var cells=oSettings.aoFooter[0];for(i=0,ien=cells.length;i<ien;i++){column=columns[i];column.nTf=cells[i].cell;if(column.sClass){$(column.nTf).addClass(column.sClass);}}}}
function _fnDrawHead(oSettings,aoSource,bIncludeHidden)
{var i,iLen,j,jLen,k,kLen,n,nLocalTr;var aoLocal=[];var aApplied=[];var iColumns=oSettings.aoColumns.length;var iRowspan,iColspan;if(!aoSource)
{return;}
if(bIncludeHidden===undefined)
{bIncludeHidden=false;}
for(i=0,iLen=aoSource.length;i<iLen;i++)
{aoLocal[i]=aoSource[i].slice();aoLocal[i].nTr=aoSource[i].nTr;for(j=iColumns-1;j>=0;j--)
{if(!oSettings.aoColumns[j].bVisible&&!bIncludeHidden)
{aoLocal[i].splice(j,1);}}
aApplied.push([]);}
for(i=0,iLen=aoLocal.length;i<iLen;i++)
{nLocalTr=aoLocal[i].nTr;if(nLocalTr)
{while((n=nLocalTr.firstChild))
{nLocalTr.removeChild(n);}}
for(j=0,jLen=aoLocal[i].length;j<jLen;j++)
{iRowspan=1;iColspan=1;if(aApplied[i][j]===undefined)
{nLocalTr.appendChild(aoLocal[i][j].cell);aApplied[i][j]=1;while(aoLocal[i+iRowspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i+iRowspan][j].cell)
{aApplied[i+iRowspan][j]=1;iRowspan++;}
while(aoLocal[i][j+iColspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i][j+iColspan].cell)
{for(k=0;k<iRowspan;k++)
{aApplied[i+k][j+iColspan]=1;}
iColspan++;}
$(aoLocal[i][j].cell).attr('rowspan',iRowspan).attr('colspan',iColspan);}}}}
function _fnDraw(oSettings)
{var aPreDraw=_fnCallbackFire(oSettings,'aoPreDrawCallback','preDraw',[oSettings]);if($.inArray(false,aPreDraw)!==-1)
{_fnProcessingDisplay(oSettings,false);return;}
var i,iLen,n;var anRows=[];var iRowCount=0;var asStripeClasses=oSettings.asStripeClasses;var iStripes=asStripeClasses.length;var iOpenRows=oSettings.aoOpenRows.length;var oLang=oSettings.oLanguage;var iInitDisplayStart=oSettings.iInitDisplayStart;var bServerSide=_fnDataSource(oSettings)=='ssp';var aiDisplay=oSettings.aiDisplay;oSettings.bDrawing=true;if(iInitDisplayStart!==undefined&&iInitDisplayStart!==-1)
{oSettings._iDisplayStart=bServerSide?iInitDisplayStart:iInitDisplayStart>=oSettings.fnRecordsDisplay()?0:iInitDisplayStart;oSettings.iInitDisplayStart=-1;}
var iDisplayStart=oSettings._iDisplayStart;var iDisplayEnd=oSettings.fnDisplayEnd();if(oSettings.bDeferLoading)
{oSettings.bDeferLoading=false;oSettings.iDraw++;_fnProcessingDisplay(oSettings,false);}
else if(!bServerSide)
{oSettings.iDraw++;}
else if(!oSettings.bDestroying&&!_fnAjaxUpdate(oSettings))
{return;}
if(aiDisplay.length!==0)
{var iStart=bServerSide?0:iDisplayStart;var iEnd=bServerSide?oSettings.aoData.length:iDisplayEnd;for(var j=iStart;j<iEnd;j++)
{var iDataIndex=aiDisplay[j];var aoData=oSettings.aoData[iDataIndex];if(aoData.nTr===null)
{_fnCreateTr(oSettings,iDataIndex);}
var nRow=aoData.nTr;if(iStripes!==0)
{var sStripe=asStripeClasses[iRowCount%iStripes];if(aoData._sRowStripe!=sStripe)
{$(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);aoData._sRowStripe=sStripe;}}
_fnCallbackFire(oSettings,'aoRowCallback',null,[nRow,aoData._aData,iRowCount,j]);anRows.push(nRow);iRowCount++;}}
else
{var sZero=oLang.sZeroRecords;if(oSettings.iDraw==1&&_fnDataSource(oSettings)=='ajax')
{sZero=oLang.sLoadingRecords;}
else if(oLang.sEmptyTable&&oSettings.fnRecordsTotal()===0)
{sZero=oLang.sEmptyTable;}
anRows[0]=$('<tr/>',{'class':iStripes?asStripeClasses[0]:''}).append($('<td />',{'valign':'top','colSpan':_fnVisbleColumns(oSettings),'class':oSettings.oClasses.sRowEmpty}).html(sZero))[0];}
_fnCallbackFire(oSettings,'aoHeaderCallback','header',[$(oSettings.nTHead).children('tr')[0],_fnGetDataMaster(oSettings),iDisplayStart,iDisplayEnd,aiDisplay]);_fnCallbackFire(oSettings,'aoFooterCallback','footer',[$(oSettings.nTFoot).children('tr')[0],_fnGetDataMaster(oSettings),iDisplayStart,iDisplayEnd,aiDisplay]);var body=$(oSettings.nTBody);body.children().detach();body.append($(anRows));_fnCallbackFire(oSettings,'aoDrawCallback','draw',[oSettings]);oSettings.bSorted=false;oSettings.bFiltered=false;oSettings.bDrawing=false;}
function _fnReDraw(settings,holdPosition)
{var
features=settings.oFeatures,sort=features.bSort,filter=features.bFilter;if(sort){_fnSort(settings);}
if(filter){_fnFilterComplete(settings,settings.oPreviousSearch);}
else{settings.aiDisplay=settings.aiDisplayMaster.slice();}
if(holdPosition!==true){settings._iDisplayStart=0;}
settings._drawHold=holdPosition;_fnDraw(settings);settings._drawHold=false;}
function _fnAddOptionsHtml(oSettings)
{var classes=oSettings.oClasses;var table=$(oSettings.nTable);var holding=$('<div/>').insertBefore(table);var features=oSettings.oFeatures;var insert=$('<div/>',{id:oSettings.sTableId+'_wrapper','class':classes.sWrapper+(oSettings.nTFoot?'':' '+classes.sNoFooter)});oSettings.nHolding=holding[0];oSettings.nTableWrapper=insert[0];oSettings.nTableReinsertBefore=oSettings.nTable.nextSibling;var aDom=oSettings.sDom.split('');var featureNode,cOption,nNewNode,cNext,sAttr,j;for(var i=0;i<aDom.length;i++)
{featureNode=null;cOption=aDom[i];if(cOption=='<')
{nNewNode=$('<div/>')[0];cNext=aDom[i+1];if(cNext=="'"||cNext=='"')
{sAttr="";j=2;while(aDom[i+j]!=cNext)
{sAttr+=aDom[i+j];j++;}
if(sAttr=="H")
{sAttr=classes.sJUIHeader;}
else if(sAttr=="F")
{sAttr=classes.sJUIFooter;}
if(sAttr.indexOf('.')!=-1)
{var aSplit=sAttr.split('.');nNewNode.id=aSplit[0].substr(1,aSplit[0].length-1);nNewNode.className=aSplit[1];}
else if(sAttr.charAt(0)=="#")
{nNewNode.id=sAttr.substr(1,sAttr.length-1);}
else
{nNewNode.className=sAttr;}
i+=j;}
insert.append(nNewNode);insert=$(nNewNode);}
else if(cOption=='>')
{insert=insert.parent();}
else if(cOption=='l'&&features.bPaginate&&features.bLengthChange)
{featureNode=_fnFeatureHtmlLength(oSettings);}
else if(cOption=='f'&&features.bFilter)
{featureNode=_fnFeatureHtmlFilter(oSettings);}
else if(cOption=='r'&&features.bProcessing)
{featureNode=_fnFeatureHtmlProcessing(oSettings);}
else if(cOption=='t')
{featureNode=_fnFeatureHtmlTable(oSettings);}
else if(cOption=='i'&&features.bInfo)
{featureNode=_fnFeatureHtmlInfo(oSettings);}
else if(cOption=='p'&&features.bPaginate)
{featureNode=_fnFeatureHtmlPaginate(oSettings);}
else if(DataTable.ext.feature.length!==0)
{var aoFeatures=DataTable.ext.feature;for(var k=0,kLen=aoFeatures.length;k<kLen;k++)
{if(cOption==aoFeatures[k].cFeature)
{featureNode=aoFeatures[k].fnInit(oSettings);break;}}}
if(featureNode)
{var aanFeatures=oSettings.aanFeatures;if(!aanFeatures[cOption])
{aanFeatures[cOption]=[];}
aanFeatures[cOption].push(featureNode);insert.append(featureNode);}}
holding.replaceWith(insert);oSettings.nHolding=null;}
function _fnDetectHeader(aLayout,nThead)
{var nTrs=$(nThead).children('tr');var nTr,nCell;var i,k,l,iLen,jLen,iColShifted,iColumn,iColspan,iRowspan;var bUnique;var fnShiftCol=function(a,i,j){var k=a[i];while(k[j]){j++;}
return j;};aLayout.splice(0,aLayout.length);for(i=0,iLen=nTrs.length;i<iLen;i++)
{aLayout.push([]);}
for(i=0,iLen=nTrs.length;i<iLen;i++)
{nTr=nTrs[i];iColumn=0;nCell=nTr.firstChild;while(nCell){if(nCell.nodeName.toUpperCase()=="TD"||nCell.nodeName.toUpperCase()=="TH")
{iColspan=nCell.getAttribute('colspan')*1;iRowspan=nCell.getAttribute('rowspan')*1;iColspan=(!iColspan||iColspan===0||iColspan===1)?1:iColspan;iRowspan=(!iRowspan||iRowspan===0||iRowspan===1)?1:iRowspan;iColShifted=fnShiftCol(aLayout,i,iColumn);bUnique=iColspan===1?true:false;for(l=0;l<iColspan;l++)
{for(k=0;k<iRowspan;k++)
{aLayout[i+k][iColShifted+l]={"cell":nCell,"unique":bUnique};aLayout[i+k].nTr=nTr;}}}
nCell=nCell.nextSibling;}}}
function _fnGetUniqueThs(oSettings,nHeader,aLayout)
{var aReturn=[];if(!aLayout)
{aLayout=oSettings.aoHeader;if(nHeader)
{aLayout=[];_fnDetectHeader(aLayout,nHeader);}}
for(var i=0,iLen=aLayout.length;i<iLen;i++)
{for(var j=0,jLen=aLayout[i].length;j<jLen;j++)
{if(aLayout[i][j].unique&&(!aReturn[j]||!oSettings.bSortCellsTop))
{aReturn[j]=aLayout[i][j].cell;}}}
return aReturn;}
function _fnBuildAjax(oSettings,data,fn)
{_fnCallbackFire(oSettings,'aoServerParams','serverParams',[data]);if(data&&$.isArray(data)){var tmp={};var rbracket=/(.*?)\[\]$/;$.each(data,function(key,val){var match=val.name.match(rbracket);if(match){var name=match[0];if(!tmp[name]){tmp[name]=[];}
tmp[name].push(val.value);}
else{tmp[val.name]=val.value;}});data=tmp;}
var ajaxData;var ajax=oSettings.ajax;var instance=oSettings.oInstance;var callback=function(json){_fnCallbackFire(oSettings,null,'xhr',[oSettings,json,oSettings.jqXHR]);fn(json);};if($.isPlainObject(ajax)&&ajax.data)
{ajaxData=ajax.data;var newData=$.isFunction(ajaxData)?ajaxData(data,oSettings):ajaxData;data=$.isFunction(ajaxData)&&newData?newData:$.extend(true,data,newData);delete ajax.data;}
var baseAjax={"data":data,"success":function(json){var error=json.error||json.sError;if(error){_fnLog(oSettings,0,error);}
oSettings.json=json;callback(json);},"dataType":"json","cache":false,"type":oSettings.sServerMethod,"error":function(xhr,error,thrown){var ret=_fnCallbackFire(oSettings,null,'xhr',[oSettings,null,oSettings.jqXHR]);if($.inArray(true,ret)===-1){if(error=="parsererror"){_fnLog(oSettings,0,'Invalid JSON response',1);}
else if(xhr.readyState===4){_fnLog(oSettings,0,'Ajax error',7);}}
_fnProcessingDisplay(oSettings,false);}};oSettings.oAjaxData=data;_fnCallbackFire(oSettings,null,'preXhr',[oSettings,data]);if(oSettings.fnServerData)
{oSettings.fnServerData.call(instance,oSettings.sAjaxSource,$.map(data,function(val,key){return{name:key,value:val};}),callback,oSettings);}
else if(oSettings.sAjaxSource||typeof ajax==='string')
{oSettings.jqXHR=$.ajax($.extend(baseAjax,{url:ajax||oSettings.sAjaxSource}));}
else if($.isFunction(ajax))
{oSettings.jqXHR=ajax.call(instance,data,callback,oSettings);}
else
{oSettings.jqXHR=$.ajax($.extend(baseAjax,ajax));ajax.data=ajaxData;}}
function _fnAjaxUpdate(settings)
{if(settings.bAjaxDataGet){settings.iDraw++;_fnProcessingDisplay(settings,true);_fnBuildAjax(settings,_fnAjaxParameters(settings),function(json){_fnAjaxUpdateDraw(settings,json);});return false;}
return true;}
function _fnAjaxParameters(settings)
{var
columns=settings.aoColumns,columnCount=columns.length,features=settings.oFeatures,preSearch=settings.oPreviousSearch,preColSearch=settings.aoPreSearchCols,i,data=[],dataProp,column,columnSearch,sort=_fnSortFlatten(settings),displayStart=settings._iDisplayStart,displayLength=features.bPaginate!==false?settings._iDisplayLength:-1;var param=function(name,value){data.push({'name':name,'value':value});};param('sEcho',settings.iDraw);param('iColumns',columnCount);param('sColumns',_pluck(columns,'sName').join(','));param('iDisplayStart',displayStart);param('iDisplayLength',displayLength);var d={draw:settings.iDraw,columns:[],order:[],start:displayStart,length:displayLength,search:{value:preSearch.sSearch,regex:preSearch.bRegex}};for(i=0;i<columnCount;i++){column=columns[i];columnSearch=preColSearch[i];dataProp=typeof column.mData=="function"?'function':column.mData;d.columns.push({data:dataProp,name:column.sName,searchable:column.bSearchable,orderable:column.bSortable,search:{value:columnSearch.sSearch,regex:columnSearch.bRegex}});param("mDataProp_"+i,dataProp);if(features.bFilter){param('sSearch_'+i,columnSearch.sSearch);param('bRegex_'+i,columnSearch.bRegex);param('bSearchable_'+i,column.bSearchable);}
if(features.bSort){param('bSortable_'+i,column.bSortable);}}
if(features.bFilter){param('sSearch',preSearch.sSearch);param('bRegex',preSearch.bRegex);}
if(features.bSort){$.each(sort,function(i,val){d.order.push({column:val.col,dir:val.dir});param('iSortCol_'+i,val.col);param('sSortDir_'+i,val.dir);});param('iSortingCols',sort.length);}
var legacy=DataTable.ext.legacy.ajax;if(legacy===null){return settings.sAjaxSource?data:d;}
return legacy?data:d;}
function _fnAjaxUpdateDraw(settings,json)
{var compat=function(old,modern){return json[old]!==undefined?json[old]:json[modern];};var data=_fnAjaxDataSrc(settings,json);var draw=compat('sEcho','draw');var recordsTotal=compat('iTotalRecords','recordsTotal');var recordsFiltered=compat('iTotalDisplayRecords','recordsFiltered');if(draw){if(draw*1<settings.iDraw){return;}
settings.iDraw=draw*1;}
_fnClearTable(settings);settings._iRecordsTotal=parseInt(recordsTotal,10);settings._iRecordsDisplay=parseInt(recordsFiltered,10);for(var i=0,ien=data.length;i<ien;i++){_fnAddData(settings,data[i]);}
settings.aiDisplay=settings.aiDisplayMaster.slice();settings.bAjaxDataGet=false;_fnDraw(settings);if(!settings._bInitComplete){_fnInitComplete(settings,json);}
settings.bAjaxDataGet=true;_fnProcessingDisplay(settings,false);}
function _fnAjaxDataSrc(oSettings,json)
{var dataSrc=$.isPlainObject(oSettings.ajax)&&oSettings.ajax.dataSrc!==undefined?oSettings.ajax.dataSrc:oSettings.sAjaxDataProp;if(dataSrc==='data'){return json.aaData||json[dataSrc];}
return dataSrc!==""?_fnGetObjectDataFn(dataSrc)(json):json;}
function _fnFeatureHtmlFilter(settings)
{var classes=settings.oClasses;var tableId=settings.sTableId;var language=settings.oLanguage;var previousSearch=settings.oPreviousSearch;var features=settings.aanFeatures;var input='<input type="search" class="'+classes.sFilterInput+'"/>';var str=language.sSearch;str=str.match(/_INPUT_/)?str.replace('_INPUT_',input):str+input;var filter=$('<div/>',{'id':!features.f?tableId+'_filter':null,'class':classes.sFilter}).append($('<label/>').append(str));var searchFn=function(){var n=features.f;var val=!this.value?"":this.value;if(val!=previousSearch.sSearch){_fnFilterComplete(settings,{"sSearch":val,"bRegex":previousSearch.bRegex,"bSmart":previousSearch.bSmart,"bCaseInsensitive":previousSearch.bCaseInsensitive});settings._iDisplayStart=0;_fnDraw(settings);}};var searchDelay=settings.searchDelay!==null?settings.searchDelay:_fnDataSource(settings)==='ssp'?400:0;var jqFilter=$('input',filter).val(previousSearch.sSearch).attr('placeholder',language.sSearchPlaceholder).bind('keyup.DT search.DT input.DT paste.DT cut.DT',searchDelay?_fnThrottle(searchFn,searchDelay):searchFn).bind('keypress.DT',function(e){if(e.keyCode==13){return false;}}).attr('aria-controls',tableId);$(settings.nTable).on('search.dt.DT',function(ev,s){if(settings===s){try{if(jqFilter[0]!==document.activeElement){jqFilter.val(previousSearch.sSearch);}}
catch(e){}}});return filter[0];}
function _fnFilterComplete(oSettings,oInput,iForce)
{var oPrevSearch=oSettings.oPreviousSearch;var aoPrevSearch=oSettings.aoPreSearchCols;var fnSaveFilter=function(oFilter){oPrevSearch.sSearch=oFilter.sSearch;oPrevSearch.bRegex=oFilter.bRegex;oPrevSearch.bSmart=oFilter.bSmart;oPrevSearch.bCaseInsensitive=oFilter.bCaseInsensitive;};var fnRegex=function(o){return o.bEscapeRegex!==undefined?!o.bEscapeRegex:o.bRegex;};_fnColumnTypes(oSettings);if(_fnDataSource(oSettings)!='ssp')
{_fnFilter(oSettings,oInput.sSearch,iForce,fnRegex(oInput),oInput.bSmart,oInput.bCaseInsensitive);fnSaveFilter(oInput);for(var i=0;i<aoPrevSearch.length;i++)
{_fnFilterColumn(oSettings,aoPrevSearch[i].sSearch,i,fnRegex(aoPrevSearch[i]),aoPrevSearch[i].bSmart,aoPrevSearch[i].bCaseInsensitive);}
_fnFilterCustom(oSettings);}
else
{fnSaveFilter(oInput);}
oSettings.bFiltered=true;_fnCallbackFire(oSettings,null,'search',[oSettings]);}
function _fnFilterCustom(settings)
{var filters=DataTable.ext.search;var displayRows=settings.aiDisplay;var row,rowIdx;for(var i=0,ien=filters.length;i<ien;i++){var rows=[];for(var j=0,jen=displayRows.length;j<jen;j++){rowIdx=displayRows[j];row=settings.aoData[rowIdx];if(filters[i](settings,row._aFilterData,rowIdx,row._aData,j)){rows.push(rowIdx);}}
displayRows.length=0;$.merge(displayRows,rows);}}
function _fnFilterColumn(settings,searchStr,colIdx,regex,smart,caseInsensitive)
{if(searchStr===''){return;}
var data;var display=settings.aiDisplay;var rpSearch=_fnFilterCreateSearch(searchStr,regex,smart,caseInsensitive);for(var i=display.length-1;i>=0;i--){data=settings.aoData[display[i]]._aFilterData[colIdx];if(!rpSearch.test(data)){display.splice(i,1);}}}
function _fnFilter(settings,input,force,regex,smart,caseInsensitive)
{var rpSearch=_fnFilterCreateSearch(input,regex,smart,caseInsensitive);var prevSearch=settings.oPreviousSearch.sSearch;var displayMaster=settings.aiDisplayMaster;var display,invalidated,i;if(DataTable.ext.search.length!==0){force=true;}
invalidated=_fnFilterData(settings);if(input.length<=0){settings.aiDisplay=displayMaster.slice();}
else{if(invalidated||force||prevSearch.length>input.length||input.indexOf(prevSearch)!==0||settings.bSorted){settings.aiDisplay=displayMaster.slice();}
display=settings.aiDisplay;for(i=display.length-1;i>=0;i--){if(!rpSearch.test(settings.aoData[display[i]]._sFilterRow)){display.splice(i,1);}}}}
function _fnFilterCreateSearch(search,regex,smart,caseInsensitive)
{search=regex?search:_fnEscapeRegex(search);if(smart){var a=$.map(search.match(/"[^"]+"|[^ ]+/g)||[''],function(word){if(word.charAt(0)==='"'){var m=word.match(/^"(.*)"$/);word=m?m[1]:word;}
return word.replace('"','');});search='^(?=.*?'+a.join(')(?=.*?')+').*$';}
return new RegExp(search,caseInsensitive?'i':'');}
var _fnEscapeRegex=DataTable.util.escapeRegex;var __filter_div=$('<div>')[0];var __filter_div_textContent=__filter_div.textContent!==undefined;function _fnFilterData(settings)
{var columns=settings.aoColumns;var column;var i,j,ien,jen,filterData,cellData,row;var fomatters=DataTable.ext.type.search;var wasInvalidated=false;for(i=0,ien=settings.aoData.length;i<ien;i++){row=settings.aoData[i];if(!row._aFilterData){filterData=[];for(j=0,jen=columns.length;j<jen;j++){column=columns[j];if(column.bSearchable){cellData=_fnGetCellData(settings,i,j,'filter');if(fomatters[column.sType]){cellData=fomatters[column.sType](cellData);}
if(cellData===null){cellData='';}
if(typeof cellData!=='string'&&cellData.toString){cellData=cellData.toString();}}
else{cellData='';}
if(cellData.indexOf&&cellData.indexOf('&')!==-1){__filter_div.innerHTML=cellData;cellData=__filter_div_textContent?__filter_div.textContent:__filter_div.innerText;}
if(cellData.replace){cellData=cellData.replace(/[\r\n]/g,'');}
filterData.push(cellData);}
row._aFilterData=filterData;row._sFilterRow=filterData.join('  ');wasInvalidated=true;}}
return wasInvalidated;}
function _fnSearchToCamel(obj)
{return{search:obj.sSearch,smart:obj.bSmart,regex:obj.bRegex,caseInsensitive:obj.bCaseInsensitive};}
function _fnSearchToHung(obj)
{return{sSearch:obj.search,bSmart:obj.smart,bRegex:obj.regex,bCaseInsensitive:obj.caseInsensitive};}
function _fnFeatureHtmlInfo(settings)
{var
tid=settings.sTableId,nodes=settings.aanFeatures.i,n=$('<div/>',{'class':settings.oClasses.sInfo,'id':!nodes?tid+'_info':null});if(!nodes){settings.aoDrawCallback.push({"fn":_fnUpdateInfo,"sName":"information"});n.attr('role','status').attr('aria-live','polite');$(settings.nTable).attr('aria-describedby',tid+'_info');}
return n[0];}
function _fnUpdateInfo(settings)
{var nodes=settings.aanFeatures.i;if(nodes.length===0){return;}
var
lang=settings.oLanguage,start=settings._iDisplayStart+1,end=settings.fnDisplayEnd(),max=settings.fnRecordsTotal(),total=settings.fnRecordsDisplay(),out=total?lang.sInfo:lang.sInfoEmpty;if(total!==max){out+=' '+lang.sInfoFiltered;}
out+=lang.sInfoPostFix;out=_fnInfoMacros(settings,out);var callback=lang.fnInfoCallback;if(callback!==null){out=callback.call(settings.oInstance,settings,start,end,max,total,out);}
$(nodes).html(out);}
function _fnInfoMacros(settings,str)
{var
formatter=settings.fnFormatNumber,start=settings._iDisplayStart+1,len=settings._iDisplayLength,vis=settings.fnRecordsDisplay(),all=len===-1;return str.replace(/_START_/g,formatter.call(settings,start)).replace(/_END_/g,formatter.call(settings,settings.fnDisplayEnd())).replace(/_MAX_/g,formatter.call(settings,settings.fnRecordsTotal())).replace(/_TOTAL_/g,formatter.call(settings,vis)).replace(/_PAGE_/g,formatter.call(settings,all?1:Math.ceil(start/len))).replace(/_PAGES_/g,formatter.call(settings,all?1:Math.ceil(vis/len)));}
function _fnInitialise(settings)
{var i,iLen,iAjaxStart=settings.iInitDisplayStart;var columns=settings.aoColumns,column;var features=settings.oFeatures;var deferLoading=settings.bDeferLoading;if(!settings.bInitialised){setTimeout(function(){_fnInitialise(settings);},200);return;}
_fnAddOptionsHtml(settings);_fnBuildHead(settings);_fnDrawHead(settings,settings.aoHeader);_fnDrawHead(settings,settings.aoFooter);_fnProcessingDisplay(settings,true);if(features.bAutoWidth){_fnCalculateColumnWidths(settings);}
for(i=0,iLen=columns.length;i<iLen;i++){column=columns[i];if(column.sWidth){column.nTh.style.width=_fnStringToCss(column.sWidth);}}
_fnCallbackFire(settings,null,'preInit',[settings]);_fnReDraw(settings);var dataSrc=_fnDataSource(settings);if(dataSrc!='ssp'||deferLoading){if(dataSrc=='ajax'){_fnBuildAjax(settings,[],function(json){var aData=_fnAjaxDataSrc(settings,json);for(i=0;i<aData.length;i++){_fnAddData(settings,aData[i]);}
settings.iInitDisplayStart=iAjaxStart;_fnReDraw(settings);_fnProcessingDisplay(settings,false);_fnInitComplete(settings,json);},settings);}
else{_fnProcessingDisplay(settings,false);_fnInitComplete(settings);}}}
function _fnInitComplete(settings,json)
{settings._bInitComplete=true;if(json||settings.oInit.aaData){_fnAdjustColumnSizing(settings);}
_fnCallbackFire(settings,null,'plugin-init',[settings,json]);_fnCallbackFire(settings,'aoInitComplete','init',[settings,json]);}
function _fnLengthChange(settings,val)
{var len=parseInt(val,10);settings._iDisplayLength=len;_fnLengthOverflow(settings);_fnCallbackFire(settings,null,'length',[settings,len]);}
function _fnFeatureHtmlLength(settings)
{var
classes=settings.oClasses,tableId=settings.sTableId,menu=settings.aLengthMenu,d2=$.isArray(menu[0]),lengths=d2?menu[0]:menu,language=d2?menu[1]:menu;var select=$('<select/>',{'name':tableId+'_length','aria-controls':tableId,'class':classes.sLengthSelect});for(var i=0,ien=lengths.length;i<ien;i++){select[0][i]=new Option(language[i],lengths[i]);}
var div=$('<div><label/></div>').addClass(classes.sLength);if(!settings.aanFeatures.l){div[0].id=tableId+'_length';}
div.children().append(settings.oLanguage.sLengthMenu.replace('_MENU_',select[0].outerHTML));$('select',div).val(settings._iDisplayLength).bind('change.DT',function(e){_fnLengthChange(settings,$(this).val());_fnDraw(settings);});$(settings.nTable).bind('length.dt.DT',function(e,s,len){if(settings===s){$('select',div).val(len);}});return div[0];}
function _fnFeatureHtmlPaginate(settings)
{var
type=settings.sPaginationType,plugin=DataTable.ext.pager[type],modern=typeof plugin==='function',redraw=function(settings){_fnDraw(settings);},node=$('<div/>').addClass(settings.oClasses.sPaging+type)[0],features=settings.aanFeatures;if(!modern){plugin.fnInit(settings,node,redraw);}
if(!features.p)
{node.id=settings.sTableId+'_paginate';settings.aoDrawCallback.push({"fn":function(settings){if(modern){var
start=settings._iDisplayStart,len=settings._iDisplayLength,visRecords=settings.fnRecordsDisplay(),all=len===-1,page=all?0:Math.ceil(start/len),pages=all?1:Math.ceil(visRecords/len),buttons=plugin(page,pages),i,ien;for(i=0,ien=features.p.length;i<ien;i++){_fnRenderer(settings,'pageButton')(settings,features.p[i],i,buttons,page,pages);}}
else{plugin.fnUpdate(settings,redraw);}},"sName":"pagination"});}
return node;}
function _fnPageChange(settings,action,redraw)
{var
start=settings._iDisplayStart,len=settings._iDisplayLength,records=settings.fnRecordsDisplay();if(records===0||len===-1)
{start=0;}
else if(typeof action==="number")
{start=action*len;if(start>records)
{start=0;}}
else if(action=="first")
{start=0;}
else if(action=="previous")
{start=len>=0?start-len:0;if(start<0)
{start=0;}}
else if(action=="next")
{if(start+len<records)
{start+=len;}}
else if(action=="last")
{start=Math.floor((records-1)/len)*len;}
else
{_fnLog(settings,0,"Unknown paging action: "+action,5);}
var changed=settings._iDisplayStart!==start;settings._iDisplayStart=start;if(changed){_fnCallbackFire(settings,null,'page',[settings]);if(redraw){_fnDraw(settings);}}
return changed;}
function _fnFeatureHtmlProcessing(settings)
{return $('<div/>',{'id':!settings.aanFeatures.r?settings.sTableId+'_processing':null,'class':settings.oClasses.sProcessing}).html(settings.oLanguage.sProcessing).insertBefore(settings.nTable)[0];}
function _fnProcessingDisplay(settings,show)
{if(settings.oFeatures.bProcessing){$(settings.aanFeatures.r).css('display',show?'block':'none');}
_fnCallbackFire(settings,null,'processing',[settings,show]);}
function _fnFeatureHtmlTable(settings)
{var table=$(settings.nTable);table.attr('role','grid');var scroll=settings.oScroll;if(scroll.sX===''&&scroll.sY===''){return settings.nTable;}
var scrollX=scroll.sX;var scrollY=scroll.sY;var classes=settings.oClasses;var caption=table.children('caption');var captionSide=caption.length?caption[0]._captionSide:null;var headerClone=$(table[0].cloneNode(false));var footerClone=$(table[0].cloneNode(false));var footer=table.children('tfoot');var _div='<div/>';var size=function(s){return!s?null:_fnStringToCss(s);};if(!footer.length){footer=null;}
var scroller=$(_div,{'class':classes.sScrollWrapper}).append($(_div,{'class':classes.sScrollHead}).css({overflow:'hidden',position:'relative',border:0,width:scrollX?size(scrollX):'100%'}).append($(_div,{'class':classes.sScrollHeadInner}).css({'box-sizing':'content-box',width:scroll.sXInner||'100%'}).append(headerClone.removeAttr('id').css('margin-left',0).append(captionSide==='top'?caption:null).append(table.children('thead'))))).append($(_div,{'class':classes.sScrollBody}).css({position:'relative',overflow:'auto',width:size(scrollX)}).append(table));if(footer){scroller.append($(_div,{'class':classes.sScrollFoot}).css({overflow:'hidden',border:0,width:scrollX?size(scrollX):'100%'}).append($(_div,{'class':classes.sScrollFootInner}).append(footerClone.removeAttr('id').css('margin-left',0).append(captionSide==='bottom'?caption:null).append(table.children('tfoot')))));}
var children=scroller.children();var scrollHead=children[0];var scrollBody=children[1];var scrollFoot=footer?children[2]:null;if(scrollX){$(scrollBody).on('scroll.DT',function(e){var scrollLeft=this.scrollLeft;scrollHead.scrollLeft=scrollLeft;if(footer){scrollFoot.scrollLeft=scrollLeft;}});}
$(scrollBody).css(scrollY&&scroll.bCollapse?'max-height':'height',scrollY);settings.nScrollHead=scrollHead;settings.nScrollBody=scrollBody;settings.nScrollFoot=scrollFoot;settings.aoDrawCallback.push({"fn":_fnScrollDraw,"sName":"scrolling"});return scroller[0];}
function _fnScrollDraw(settings)
{var
scroll=settings.oScroll,scrollX=scroll.sX,scrollXInner=scroll.sXInner,scrollY=scroll.sY,barWidth=scroll.iBarWidth,divHeader=$(settings.nScrollHead),divHeaderStyle=divHeader[0].style,divHeaderInner=divHeader.children('div'),divHeaderInnerStyle=divHeaderInner[0].style,divHeaderTable=divHeaderInner.children('table'),divBodyEl=settings.nScrollBody,divBody=$(divBodyEl),divBodyStyle=divBodyEl.style,divFooter=$(settings.nScrollFoot),divFooterInner=divFooter.children('div'),divFooterTable=divFooterInner.children('table'),header=$(settings.nTHead),table=$(settings.nTable),tableEl=table[0],tableStyle=tableEl.style,footer=settings.nTFoot?$(settings.nTFoot):null,browser=settings.oBrowser,ie67=browser.bScrollOversize,dtHeaderCells=_pluck(settings.aoColumns,'nTh'),headerTrgEls,footerTrgEls,headerSrcEls,footerSrcEls,headerCopy,footerCopy,headerWidths=[],footerWidths=[],headerContent=[],footerContent=[],idx,correction,sanityWidth,zeroOut=function(nSizer){var style=nSizer.style;style.paddingTop="0";style.paddingBottom="0";style.borderTopWidth="0";style.borderBottomWidth="0";style.height=0;};var scrollBarVis=divBodyEl.scrollHeight>divBodyEl.clientHeight;if(settings.scrollBarVis!==scrollBarVis&&settings.scrollBarVis!==undefined){settings.scrollBarVis=scrollBarVis;_fnAdjustColumnSizing(settings);return;}
else{settings.scrollBarVis=scrollBarVis;}
table.children('thead, tfoot').remove();if(footer){footerCopy=footer.clone().prependTo(table);footerTrgEls=footer.find('tr');footerSrcEls=footerCopy.find('tr');}
headerCopy=header.clone().prependTo(table);headerTrgEls=header.find('tr');headerSrcEls=headerCopy.find('tr');headerCopy.find('th, td').removeAttr('tabindex');if(!scrollX)
{divBodyStyle.width='100%';divHeader[0].style.width='100%';}
$.each(_fnGetUniqueThs(settings,headerCopy),function(i,el){idx=_fnVisibleToColumnIndex(settings,i);el.style.width=settings.aoColumns[idx].sWidth;});if(footer){_fnApplyToChildren(function(n){n.style.width="";},footerSrcEls);}
sanityWidth=table.outerWidth();if(scrollX===""){tableStyle.width="100%";if(ie67&&(table.find('tbody').height()>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll")){tableStyle.width=_fnStringToCss(table.outerWidth()-barWidth);}
sanityWidth=table.outerWidth();}
else if(scrollXInner!==""){tableStyle.width=_fnStringToCss(scrollXInner);sanityWidth=table.outerWidth();}
_fnApplyToChildren(zeroOut,headerSrcEls);_fnApplyToChildren(function(nSizer){headerContent.push(nSizer.innerHTML);headerWidths.push(_fnStringToCss($(nSizer).css('width')));},headerSrcEls);_fnApplyToChildren(function(nToSize,i){if($.inArray(nToSize,dtHeaderCells)!==-1){nToSize.style.width=headerWidths[i];}},headerTrgEls);$(headerSrcEls).height(0);if(footer)
{_fnApplyToChildren(zeroOut,footerSrcEls);_fnApplyToChildren(function(nSizer){footerContent.push(nSizer.innerHTML);footerWidths.push(_fnStringToCss($(nSizer).css('width')));},footerSrcEls);_fnApplyToChildren(function(nToSize,i){nToSize.style.width=footerWidths[i];},footerTrgEls);$(footerSrcEls).height(0);}
_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+headerContent[i]+'</div>';nSizer.style.width=headerWidths[i];},headerSrcEls);if(footer)
{_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+footerContent[i]+'</div>';nSizer.style.width=footerWidths[i];},footerSrcEls);}
if(table.outerWidth()<sanityWidth)
{correction=((divBodyEl.scrollHeight>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll"))?sanityWidth+barWidth:sanityWidth;if(ie67&&(divBodyEl.scrollHeight>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll")){tableStyle.width=_fnStringToCss(correction-barWidth);}
if(scrollX===""||scrollXInner!==""){_fnLog(settings,1,'Possible column misalignment',6);}}
else
{correction='100%';}
divBodyStyle.width=_fnStringToCss(correction);divHeaderStyle.width=_fnStringToCss(correction);if(footer){settings.nScrollFoot.style.width=_fnStringToCss(correction);}
if(!scrollY){if(ie67){divBodyStyle.height=_fnStringToCss(tableEl.offsetHeight+barWidth);}}
var iOuterWidth=table.outerWidth();divHeaderTable[0].style.width=_fnStringToCss(iOuterWidth);divHeaderInnerStyle.width=_fnStringToCss(iOuterWidth);var bScrolling=table.height()>divBodyEl.clientHeight||divBody.css('overflow-y')=="scroll";var padding='padding'+(browser.bScrollbarLeft?'Left':'Right');divHeaderInnerStyle[padding]=bScrolling?barWidth+"px":"0px";if(footer){divFooterTable[0].style.width=_fnStringToCss(iOuterWidth);divFooterInner[0].style.width=_fnStringToCss(iOuterWidth);divFooterInner[0].style[padding]=bScrolling?barWidth+"px":"0px";}
table.children('colgroup').insertBefore(table.children('thead'));divBody.scroll();if((settings.bSorted||settings.bFiltered)&&!settings._drawHold){divBodyEl.scrollTop=0;}}
function _fnApplyToChildren(fn,an1,an2)
{var index=0,i=0,iLen=an1.length;var nNode1,nNode2;while(i<iLen){nNode1=an1[i].firstChild;nNode2=an2?an2[i].firstChild:null;while(nNode1){if(nNode1.nodeType===1){if(an2){fn(nNode1,nNode2,index);}
else{fn(nNode1,index);}
index++;}
nNode1=nNode1.nextSibling;nNode2=an2?nNode2.nextSibling:null;}
i++;}}
var __re_html_remove=/<.*?>/g;function _fnCalculateColumnWidths(oSettings)
{var
table=oSettings.nTable,columns=oSettings.aoColumns,scroll=oSettings.oScroll,scrollY=scroll.sY,scrollX=scroll.sX,scrollXInner=scroll.sXInner,columnCount=columns.length,visibleColumns=_fnGetColumns(oSettings,'bVisible'),headerCells=$('th',oSettings.nTHead),tableWidthAttr=table.getAttribute('width'),tableContainer=table.parentNode,userInputs=false,i,column,columnIdx,width,outerWidth,browser=oSettings.oBrowser,ie67=browser.bScrollOversize;var styleWidth=table.style.width;if(styleWidth&&styleWidth.indexOf('%')!==-1){tableWidthAttr=styleWidth;}
for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];if(column.sWidth!==null){column.sWidth=_fnConvertToWidth(column.sWidthOrig,tableContainer);userInputs=true;}}
if(ie67||!userInputs&&!scrollX&&!scrollY&&columnCount==_fnVisbleColumns(oSettings)&&columnCount==headerCells.length){for(i=0;i<columnCount;i++){var colIdx=_fnVisibleToColumnIndex(oSettings,i);if(colIdx!==null){columns[colIdx].sWidth=_fnStringToCss(headerCells.eq(i).width());}}}
else
{var tmpTable=$(table).clone().css('visibility','hidden').removeAttr('id');tmpTable.find('tbody tr').remove();var tr=$('<tr/>').appendTo(tmpTable.find('tbody'));tmpTable.find('thead, tfoot').remove();tmpTable.append($(oSettings.nTHead).clone()).append($(oSettings.nTFoot).clone());tmpTable.find('tfoot th, tfoot td').css('width','');headerCells=_fnGetUniqueThs(oSettings,tmpTable.find('thead')[0]);for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];headerCells[i].style.width=column.sWidthOrig!==null&&column.sWidthOrig!==''?_fnStringToCss(column.sWidthOrig):'';if(column.sWidthOrig&&scrollX){$(headerCells[i]).append($('<div/>').css({width:column.sWidthOrig,margin:0,padding:0,border:0,height:1}));}}
if(oSettings.aoData.length){for(i=0;i<visibleColumns.length;i++){columnIdx=visibleColumns[i];column=columns[columnIdx];$(_fnGetWidestNode(oSettings,columnIdx)).clone(false).append(column.sContentPadding).appendTo(tr);}}
$('[name]',tmpTable).removeAttr('name');var holder=$('<div/>').css(scrollX||scrollY?{position:'absolute',top:0,left:0,height:1,right:0,overflow:'hidden'}:{}).append(tmpTable).appendTo(tableContainer);if(scrollX&&scrollXInner){tmpTable.width(scrollXInner);}
else if(scrollX){tmpTable.css('width','auto');tmpTable.removeAttr('width');if(tmpTable.width()<tableContainer.clientWidth&&tableWidthAttr){tmpTable.width(tableContainer.clientWidth);}}
else if(scrollY){tmpTable.width(tableContainer.clientWidth);}
else if(tableWidthAttr){tmpTable.width(tableWidthAttr);}
var total=0;for(i=0;i<visibleColumns.length;i++){var cell=$(headerCells[i]);var border=cell.outerWidth()-cell.width();var bounding=browser.bBounding?Math.ceil(headerCells[i].getBoundingClientRect().width):cell.outerWidth();total+=bounding;columns[visibleColumns[i]].sWidth=_fnStringToCss(bounding-border);}
table.style.width=_fnStringToCss(total);holder.remove();}
if(tableWidthAttr){table.style.width=_fnStringToCss(tableWidthAttr);}
if((tableWidthAttr||scrollX)&&!oSettings._reszEvt){var bindResize=function(){$(window).bind('resize.DT-'+oSettings.sInstance,_fnThrottle(function(){_fnAdjustColumnSizing(oSettings);}));};if(ie67){setTimeout(bindResize,1000);}
else{bindResize();}
oSettings._reszEvt=true;}}
var _fnThrottle=DataTable.util.throttle;function _fnConvertToWidth(width,parent)
{if(!width){return 0;}
var n=$('<div/>').css('width',_fnStringToCss(width)).appendTo(parent||document.body);var val=n[0].offsetWidth;n.remove();return val;}
function _fnGetWidestNode(settings,colIdx)
{var idx=_fnGetMaxLenString(settings,colIdx);if(idx<0){return null;}
var data=settings.aoData[idx];return!data.nTr?$('<td/>').html(_fnGetCellData(settings,idx,colIdx,'display'))[0]:data.anCells[colIdx];}
function _fnGetMaxLenString(settings,colIdx)
{var s,max=-1,maxIdx=-1;for(var i=0,ien=settings.aoData.length;i<ien;i++){s=_fnGetCellData(settings,i,colIdx,'display')+'';s=s.replace(__re_html_remove,'');s=s.replace(/&nbsp;/g,' ');if(s.length>max){max=s.length;maxIdx=i;}}
return maxIdx;}
function _fnStringToCss(s)
{if(s===null){return'0px';}
if(typeof s=='number'){return s<0?'0px':s+'px';}
return s.match(/\d$/)?s+'px':s;}
function _fnSortFlatten(settings)
{var
i,iLen,k,kLen,aSort=[],aiOrig=[],aoColumns=settings.aoColumns,aDataSort,iCol,sType,srcCol,fixed=settings.aaSortingFixed,fixedObj=$.isPlainObject(fixed),nestedSort=[],add=function(a){if(a.length&&!$.isArray(a[0])){nestedSort.push(a);}
else{$.merge(nestedSort,a);}};if($.isArray(fixed)){add(fixed);}
if(fixedObj&&fixed.pre){add(fixed.pre);}
add(settings.aaSorting);if(fixedObj&&fixed.post){add(fixed.post);}
for(i=0;i<nestedSort.length;i++)
{srcCol=nestedSort[i][0];aDataSort=aoColumns[srcCol].aDataSort;for(k=0,kLen=aDataSort.length;k<kLen;k++)
{iCol=aDataSort[k];sType=aoColumns[iCol].sType||'string';if(nestedSort[i]._idx===undefined){nestedSort[i]._idx=$.inArray(nestedSort[i][1],aoColumns[iCol].asSorting);}
aSort.push({src:srcCol,col:iCol,dir:nestedSort[i][1],index:nestedSort[i]._idx,type:sType,formatter:DataTable.ext.type.order[sType+"-pre"]});}}
return aSort;}
function _fnSort(oSettings)
{var
i,ien,iLen,j,jLen,k,kLen,sDataType,nTh,aiOrig=[],oExtSort=DataTable.ext.type.order,aoData=oSettings.aoData,aoColumns=oSettings.aoColumns,aDataSort,data,iCol,sType,oSort,formatters=0,sortCol,displayMaster=oSettings.aiDisplayMaster,aSort;_fnColumnTypes(oSettings);aSort=_fnSortFlatten(oSettings);for(i=0,ien=aSort.length;i<ien;i++){sortCol=aSort[i];if(sortCol.formatter){formatters++;}
_fnSortData(oSettings,sortCol.col);}
if(_fnDataSource(oSettings)!='ssp'&&aSort.length!==0)
{for(i=0,iLen=displayMaster.length;i<iLen;i++){aiOrig[displayMaster[i]]=i;}
if(formatters===aSort.length){displayMaster.sort(function(a,b){var
x,y,k,test,sort,len=aSort.length,dataA=aoData[a]._aSortData,dataB=aoData[b]._aSortData;for(k=0;k<len;k++){sort=aSort[k];x=dataA[sort.col];y=dataB[sort.col];test=x<y?-1:x>y?1:0;if(test!==0){return sort.dir==='asc'?test:-test;}}
x=aiOrig[a];y=aiOrig[b];return x<y?-1:x>y?1:0;});}
else{displayMaster.sort(function(a,b){var
x,y,k,l,test,sort,fn,len=aSort.length,dataA=aoData[a]._aSortData,dataB=aoData[b]._aSortData;for(k=0;k<len;k++){sort=aSort[k];x=dataA[sort.col];y=dataB[sort.col];fn=oExtSort[sort.type+"-"+sort.dir]||oExtSort["string-"+sort.dir];test=fn(x,y);if(test!==0){return test;}}
x=aiOrig[a];y=aiOrig[b];return x<y?-1:x>y?1:0;});}}
oSettings.bSorted=true;}
function _fnSortAria(settings)
{var label;var nextSort;var columns=settings.aoColumns;var aSort=_fnSortFlatten(settings);var oAria=settings.oLanguage.oAria;for(var i=0,iLen=columns.length;i<iLen;i++)
{var col=columns[i];var asSorting=col.asSorting;var sTitle=col.sTitle.replace(/<.*?>/g,"");var th=col.nTh;th.removeAttribute('aria-sort');if(col.bSortable){if(aSort.length>0&&aSort[0].col==i){th.setAttribute('aria-sort',aSort[0].dir=="asc"?"ascending":"descending");nextSort=asSorting[aSort[0].index+1]||asSorting[0];}
else{nextSort=asSorting[0];}
label=sTitle+(nextSort==="asc"?oAria.sSortAscending:oAria.sSortDescending);}
else{label=sTitle;}
th.setAttribute('aria-label',label);}}
function _fnSortListener(settings,colIdx,append,callback)
{var col=settings.aoColumns[colIdx];var sorting=settings.aaSorting;var asSorting=col.asSorting;var nextSortIdx;var next=function(a,overflow){var idx=a._idx;if(idx===undefined){idx=$.inArray(a[1],asSorting);}
return idx+1<asSorting.length?idx+1:overflow?null:0;};if(typeof sorting[0]==='number'){sorting=settings.aaSorting=[sorting];}
if(append&&settings.oFeatures.bSortMulti){var sortIdx=$.inArray(colIdx,_pluck(sorting,'0'));if(sortIdx!==-1){nextSortIdx=next(sorting[sortIdx],true);if(nextSortIdx===null&&sorting.length===1){nextSortIdx=0;}
if(nextSortIdx===null){sorting.splice(sortIdx,1);}
else{sorting[sortIdx][1]=asSorting[nextSortIdx];sorting[sortIdx]._idx=nextSortIdx;}}
else{sorting.push([colIdx,asSorting[0],0]);sorting[sorting.length-1]._idx=0;}}
else if(sorting.length&&sorting[0][0]==colIdx){nextSortIdx=next(sorting[0]);sorting.length=1;sorting[0][1]=asSorting[nextSortIdx];sorting[0]._idx=nextSortIdx;}
else{sorting.length=0;sorting.push([colIdx,asSorting[0]]);sorting[0]._idx=0;}
_fnReDraw(settings);if(typeof callback=='function'){callback(settings);}}
function _fnSortAttachListener(settings,attachTo,colIdx,callback)
{var col=settings.aoColumns[colIdx];_fnBindAction(attachTo,{},function(e){if(col.bSortable===false){return;}
if(settings.oFeatures.bProcessing){_fnProcessingDisplay(settings,true);setTimeout(function(){_fnSortListener(settings,colIdx,e.shiftKey,callback);if(_fnDataSource(settings)!=='ssp'){_fnProcessingDisplay(settings,false);}},0);}
else{_fnSortListener(settings,colIdx,e.shiftKey,callback);}});}
function _fnSortingClasses(settings)
{var oldSort=settings.aLastSort;var sortClass=settings.oClasses.sSortColumn;var sort=_fnSortFlatten(settings);var features=settings.oFeatures;var i,ien,colIdx;if(features.bSort&&features.bSortClasses){for(i=0,ien=oldSort.length;i<ien;i++){colIdx=oldSort[i].src;$(_pluck(settings.aoData,'anCells',colIdx)).removeClass(sortClass+(i<2?i+1:3));}
for(i=0,ien=sort.length;i<ien;i++){colIdx=sort[i].src;$(_pluck(settings.aoData,'anCells',colIdx)).addClass(sortClass+(i<2?i+1:3));}}
settings.aLastSort=sort;}
function _fnSortData(settings,idx)
{var column=settings.aoColumns[idx];var customSort=DataTable.ext.order[column.sSortDataType];var customData;if(customSort){customData=customSort.call(settings.oInstance,settings,idx,_fnColumnIndexToVisible(settings,idx));}
var row,cellData;var formatter=DataTable.ext.type.order[column.sType+"-pre"];for(var i=0,ien=settings.aoData.length;i<ien;i++){row=settings.aoData[i];if(!row._aSortData){row._aSortData=[];}
if(!row._aSortData[idx]||customSort){cellData=customSort?customData[i]:_fnGetCellData(settings,i,idx,'sort');row._aSortData[idx]=formatter?formatter(cellData):cellData;}}}
function _fnSaveState(settings)
{if(!settings.oFeatures.bStateSave||settings.bDestroying)
{return;}
var state={time:+new Date(),start:settings._iDisplayStart,length:settings._iDisplayLength,order:$.extend(true,[],settings.aaSorting),search:_fnSearchToCamel(settings.oPreviousSearch),columns:$.map(settings.aoColumns,function(col,i){return{visible:col.bVisible,search:_fnSearchToCamel(settings.aoPreSearchCols[i])};})};_fnCallbackFire(settings,"aoStateSaveParams",'stateSaveParams',[settings,state]);settings.oSavedState=state;settings.fnStateSaveCallback.call(settings.oInstance,settings,state);}
function _fnLoadState(settings,oInit)
{var i,ien;var columns=settings.aoColumns;if(!settings.oFeatures.bStateSave){return;}
var state=settings.fnStateLoadCallback.call(settings.oInstance,settings);if(!state||!state.time){return;}
var abStateLoad=_fnCallbackFire(settings,'aoStateLoadParams','stateLoadParams',[settings,state]);if($.inArray(false,abStateLoad)!==-1){return;}
var duration=settings.iStateDuration;if(duration>0&&state.time<+new Date()-(duration*1000)){return;}
if(columns.length!==state.columns.length){return;}
settings.oLoadedState=$.extend(true,{},state);if(state.start!==undefined){settings._iDisplayStart=state.start;settings.iInitDisplayStart=state.start;}
if(state.length!==undefined){settings._iDisplayLength=state.length;}
if(state.order!==undefined){settings.aaSorting=[];$.each(state.order,function(i,col){settings.aaSorting.push(col[0]>=columns.length?[0,col[1]]:col);});}
if(state.search!==undefined){$.extend(settings.oPreviousSearch,_fnSearchToHung(state.search));}
for(i=0,ien=state.columns.length;i<ien;i++){var col=state.columns[i];if(col.visible!==undefined){columns[i].bVisible=col.visible;}
if(col.search!==undefined){$.extend(settings.aoPreSearchCols[i],_fnSearchToHung(col.search));}}
_fnCallbackFire(settings,'aoStateLoaded','stateLoaded',[settings,state]);}
function _fnSettingsFromNode(table)
{var settings=DataTable.settings;var idx=$.inArray(table,_pluck(settings,'nTable'));return idx!==-1?settings[idx]:null;}
function _fnLog(settings,level,msg,tn)
{msg='DataTables warning: '+
(settings?'table id='+settings.sTableId+' - ':'')+msg;if(tn){msg+='. For more information about this error, please see '+'http://datatables.net/tn/'+tn;}
if(!level){var ext=DataTable.ext;var type=ext.sErrMode||ext.errMode;if(settings){_fnCallbackFire(settings,null,'error',[settings,tn,msg]);}
if(type=='alert'){alert(msg);}
else if(type=='throw'){throw new Error(msg);}
else if(typeof type=='function'){type(settings,tn,msg);}}
else if(window.console&&console.log){console.log(msg);}}
function _fnMap(ret,src,name,mappedName)
{if($.isArray(name)){$.each(name,function(i,val){if($.isArray(val)){_fnMap(ret,src,val[0],val[1]);}
else{_fnMap(ret,src,val);}});return;}
if(mappedName===undefined){mappedName=name;}
if(src[name]!==undefined){ret[mappedName]=src[name];}}
function _fnExtend(out,extender,breakRefs)
{var val;for(var prop in extender){if(extender.hasOwnProperty(prop)){val=extender[prop];if($.isPlainObject(val)){if(!$.isPlainObject(out[prop])){out[prop]={};}
$.extend(true,out[prop],val);}
else if(breakRefs&&prop!=='data'&&prop!=='aaData'&&$.isArray(val)){out[prop]=val.slice();}
else{out[prop]=val;}}}
return out;}
function _fnBindAction(n,oData,fn)
{$(n).bind('click.DT',oData,function(e){n.blur();fn(e);}).bind('keypress.DT',oData,function(e){if(e.which===13){e.preventDefault();fn(e);}}).bind('selectstart.DT',function(){return false;});}
function _fnCallbackReg(oSettings,sStore,fn,sName)
{if(fn)
{oSettings[sStore].push({"fn":fn,"sName":sName});}}
function _fnCallbackFire(settings,callbackArr,eventName,args)
{var ret=[];if(callbackArr){ret=$.map(settings[callbackArr].slice().reverse(),function(val,i){return val.fn.apply(settings.oInstance,args);});}
if(eventName!==null){var e=$.Event(eventName+'.dt');$(settings.nTable).trigger(e,args);ret.push(e.result);}
return ret;}
function _fnLengthOverflow(settings)
{var
start=settings._iDisplayStart,end=settings.fnDisplayEnd(),len=settings._iDisplayLength;if(start>=end)
{start=end-len;}
start-=(start%len);if(len===-1||start<0)
{start=0;}
settings._iDisplayStart=start;}
function _fnRenderer(settings,type)
{var renderer=settings.renderer;var host=DataTable.ext.renderer[type];if($.isPlainObject(renderer)&&renderer[type]){return host[renderer[type]]||host._;}
else if(typeof renderer==='string'){return host[renderer]||host._;}
return host._;}
function _fnDataSource(settings)
{if(settings.oFeatures.bServerSide){return'ssp';}
else if(settings.ajax||settings.sAjaxSource){return'ajax';}
return'dom';}
var __apiStruct=[];var __arrayProto=Array.prototype;var _toSettings=function(mixed)
{var idx,jq;var settings=DataTable.settings;var tables=$.map(settings,function(el,i){return el.nTable;});if(!mixed){return[];}
else if(mixed.nTable&&mixed.oApi){return[mixed];}
else if(mixed.nodeName&&mixed.nodeName.toLowerCase()==='table'){idx=$.inArray(mixed,tables);return idx!==-1?[settings[idx]]:null;}
else if(mixed&&typeof mixed.settings==='function'){return mixed.settings().toArray();}
else if(typeof mixed==='string'){jq=$(mixed);}
else if(mixed instanceof $){jq=mixed;}
if(jq){return jq.map(function(i){idx=$.inArray(this,tables);return idx!==-1?settings[idx]:null;}).toArray();}};_Api=function(context,data)
{if(!(this instanceof _Api)){return new _Api(context,data);}
var settings=[];var ctxSettings=function(o){var a=_toSettings(o);if(a){settings=settings.concat(a);}};if($.isArray(context)){for(var i=0,ien=context.length;i<ien;i++){ctxSettings(context[i]);}}
else{ctxSettings(context);}
this.context=_unique(settings);if(data){$.merge(this,data);}
this.selector={rows:null,cols:null,opts:null};_Api.extend(this,this,__apiStruct);};DataTable.Api=_Api;$.extend(_Api.prototype,{any:function()
{return this.count()!==0;},concat:__arrayProto.concat,context:[],count:function()
{return this.flatten().length;},each:function(fn)
{for(var i=0,ien=this.length;i<ien;i++){fn.call(this,this[i],i,this);}
return this;},eq:function(idx)
{var ctx=this.context;return ctx.length>idx?new _Api(ctx[idx],this[idx]):null;},filter:function(fn)
{var a=[];if(__arrayProto.filter){a=__arrayProto.filter.call(this,fn,this);}
else{for(var i=0,ien=this.length;i<ien;i++){if(fn.call(this,this[i],i,this)){a.push(this[i]);}}}
return new _Api(this.context,a);},flatten:function()
{var a=[];return new _Api(this.context,a.concat.apply(a,this.toArray()));},join:__arrayProto.join,indexOf:__arrayProto.indexOf||function(obj,start)
{for(var i=(start||0),ien=this.length;i<ien;i++){if(this[i]===obj){return i;}}
return-1;},iterator:function(flatten,type,fn,alwaysNew){var
a=[],ret,i,ien,j,jen,context=this.context,rows,items,item,selector=this.selector;if(typeof flatten==='string'){alwaysNew=fn;fn=type;type=flatten;flatten=false;}
for(i=0,ien=context.length;i<ien;i++){var apiInst=new _Api(context[i]);if(type==='table'){ret=fn.call(apiInst,context[i],i);if(ret!==undefined){a.push(ret);}}
else if(type==='columns'||type==='rows'){ret=fn.call(apiInst,context[i],this[i],i);if(ret!==undefined){a.push(ret);}}
else if(type==='column'||type==='column-rows'||type==='row'||type==='cell'){items=this[i];if(type==='column-rows'){rows=_selector_row_indexes(context[i],selector.opts);}
for(j=0,jen=items.length;j<jen;j++){item=items[j];if(type==='cell'){ret=fn.call(apiInst,context[i],item.row,item.column,i,j);}
else{ret=fn.call(apiInst,context[i],item,i,j,rows);}
if(ret!==undefined){a.push(ret);}}}}
if(a.length||alwaysNew){var api=new _Api(context,flatten?a.concat.apply([],a):a);var apiSelector=api.selector;apiSelector.rows=selector.rows;apiSelector.cols=selector.cols;apiSelector.opts=selector.opts;return api;}
return this;},lastIndexOf:__arrayProto.lastIndexOf||function(obj,start)
{return this.indexOf.apply(this.toArray.reverse(),arguments);},length:0,map:function(fn)
{var a=[];if(__arrayProto.map){a=__arrayProto.map.call(this,fn,this);}
else{for(var i=0,ien=this.length;i<ien;i++){a.push(fn.call(this,this[i],i));}}
return new _Api(this.context,a);},pluck:function(prop)
{return this.map(function(el){return el[prop];});},pop:__arrayProto.pop,push:__arrayProto.push,reduce:__arrayProto.reduce||function(fn,init)
{return _fnReduce(this,fn,init,0,this.length,1);},reduceRight:__arrayProto.reduceRight||function(fn,init)
{return _fnReduce(this,fn,init,this.length-1,-1,-1);},reverse:__arrayProto.reverse,selector:null,shift:__arrayProto.shift,sort:__arrayProto.sort,splice:__arrayProto.splice,toArray:function()
{return __arrayProto.slice.call(this);},to$:function()
{return $(this);},toJQuery:function()
{return $(this);},unique:function()
{return new _Api(this.context,_unique(this));},unshift:__arrayProto.unshift});_Api.extend=function(scope,obj,ext)
{if(!ext.length||!obj||(!(obj instanceof _Api)&&!obj.__dt_wrapper)){return;}
var
i,ien,j,jen,struct,inner,methodScoping=function(scope,fn,struc){return function(){var ret=fn.apply(scope,arguments);_Api.extend(ret,ret,struc.methodExt);return ret;};};for(i=0,ien=ext.length;i<ien;i++){struct=ext[i];obj[struct.name]=typeof struct.val==='function'?methodScoping(scope,struct.val,struct):$.isPlainObject(struct.val)?{}:struct.val;obj[struct.name].__dt_wrapper=true;_Api.extend(scope,obj[struct.name],struct.propExt);}};_Api.register=_api_register=function(name,val)
{if($.isArray(name)){for(var j=0,jen=name.length;j<jen;j++){_Api.register(name[j],val);}
return;}
var
i,ien,heir=name.split('.'),struct=__apiStruct,key,method;var find=function(src,name){for(var i=0,ien=src.length;i<ien;i++){if(src[i].name===name){return src[i];}}
return null;};for(i=0,ien=heir.length;i<ien;i++){method=heir[i].indexOf('()')!==-1;key=method?heir[i].replace('()',''):heir[i];var src=find(struct,key);if(!src){src={name:key,val:{},methodExt:[],propExt:[]};struct.push(src);}
if(i===ien-1){src.val=val;}
else{struct=method?src.methodExt:src.propExt;}}};_Api.registerPlural=_api_registerPlural=function(pluralName,singularName,val){_Api.register(pluralName,val);_Api.register(singularName,function(){var ret=val.apply(this,arguments);if(ret===this){return this;}
else if(ret instanceof _Api){return ret.length?$.isArray(ret[0])?new _Api(ret.context,ret[0]):ret[0]:undefined;}
return ret;});};var __table_selector=function(selector,a)
{if(typeof selector==='number'){return[a[selector]];}
var nodes=$.map(a,function(el,i){return el.nTable;});return $(nodes).filter(selector).map(function(i){var idx=$.inArray(this,nodes);return a[idx];}).toArray();};_api_register('tables()',function(selector){return selector?new _Api(__table_selector(selector,this.context)):this;});_api_register('table()',function(selector){var tables=this.tables(selector);var ctx=tables.context;return ctx.length?new _Api(ctx[0]):tables;});_api_registerPlural('tables().nodes()','table().node()',function(){return this.iterator('table',function(ctx){return ctx.nTable;},1);});_api_registerPlural('tables().body()','table().body()',function(){return this.iterator('table',function(ctx){return ctx.nTBody;},1);});_api_registerPlural('tables().header()','table().header()',function(){return this.iterator('table',function(ctx){return ctx.nTHead;},1);});_api_registerPlural('tables().footer()','table().footer()',function(){return this.iterator('table',function(ctx){return ctx.nTFoot;},1);});_api_registerPlural('tables().containers()','table().container()',function(){return this.iterator('table',function(ctx){return ctx.nTableWrapper;},1);});_api_register('draw()',function(paging){return this.iterator('table',function(settings){if(paging==='page'){_fnDraw(settings);}
else{if(typeof paging==='string'){paging=paging==='full-hold'?false:true;}
_fnReDraw(settings,paging===false);}});});_api_register('page()',function(action){if(action===undefined){return this.page.info().page;}
return this.iterator('table',function(settings){_fnPageChange(settings,action);});});_api_register('page.info()',function(action){if(this.context.length===0){return undefined;}
var
settings=this.context[0],start=settings._iDisplayStart,len=settings.oFeatures.bPaginate?settings._iDisplayLength:-1,visRecords=settings.fnRecordsDisplay(),all=len===-1;return{"page":all?0:Math.floor(start/len),"pages":all?1:Math.ceil(visRecords/len),"start":start,"end":settings.fnDisplayEnd(),"length":len,"recordsTotal":settings.fnRecordsTotal(),"recordsDisplay":visRecords,"serverSide":_fnDataSource(settings)==='ssp'};});_api_register('page.len()',function(len){if(len===undefined){return this.context.length!==0?this.context[0]._iDisplayLength:undefined;}
return this.iterator('table',function(settings){_fnLengthChange(settings,len);});});var __reload=function(settings,holdPosition,callback){if(callback){var api=new _Api(settings);api.one('draw',function(){callback(api.ajax.json());});}
if(_fnDataSource(settings)=='ssp'){_fnReDraw(settings,holdPosition);}
else{_fnProcessingDisplay(settings,true);var xhr=settings.jqXHR;if(xhr&&xhr.readyState!==4){xhr.abort();}
_fnBuildAjax(settings,[],function(json){_fnClearTable(settings);var data=_fnAjaxDataSrc(settings,json);for(var i=0,ien=data.length;i<ien;i++){_fnAddData(settings,data[i]);}
_fnReDraw(settings,holdPosition);_fnProcessingDisplay(settings,false);});}};_api_register('ajax.json()',function(){var ctx=this.context;if(ctx.length>0){return ctx[0].json;}});_api_register('ajax.params()',function(){var ctx=this.context;if(ctx.length>0){return ctx[0].oAjaxData;}});_api_register('ajax.reload()',function(callback,resetPaging){return this.iterator('table',function(settings){__reload(settings,resetPaging===false,callback);});});_api_register('ajax.url()',function(url){var ctx=this.context;if(url===undefined){if(ctx.length===0){return undefined;}
ctx=ctx[0];return ctx.ajax?$.isPlainObject(ctx.ajax)?ctx.ajax.url:ctx.ajax:ctx.sAjaxSource;}
return this.iterator('table',function(settings){if($.isPlainObject(settings.ajax)){settings.ajax.url=url;}
else{settings.ajax=url;}});});_api_register('ajax.url().load()',function(callback,resetPaging){return this.iterator('table',function(ctx){__reload(ctx,resetPaging===false,callback);});});var _selector_run=function(type,selector,selectFn,settings,opts)
{var
out=[],res,a,i,ien,j,jen,selectorType=typeof selector;if(!selector||selectorType==='string'||selectorType==='function'||selector.length===undefined){selector=[selector];}
for(i=0,ien=selector.length;i<ien;i++){a=selector[i]&&selector[i].split?selector[i].split(','):[selector[i]];for(j=0,jen=a.length;j<jen;j++){res=selectFn(typeof a[j]==='string'?$.trim(a[j]):a[j]);if(res&&res.length){out=out.concat(res);}}}
var ext=_ext.selector[type];if(ext.length){for(i=0,ien=ext.length;i<ien;i++){out=ext[i](settings,opts,out);}}
return _unique(out);};var _selector_opts=function(opts)
{if(!opts){opts={};}
if(opts.filter&&opts.search===undefined){opts.search=opts.filter;}
return $.extend({search:'none',order:'current',page:'all'},opts);};var _selector_first=function(inst)
{for(var i=0,ien=inst.length;i<ien;i++){if(inst[i].length>0){inst[0]=inst[i];inst[0].length=1;inst.length=1;inst.context=[inst.context[i]];return inst;}}
inst.length=0;return inst;};var _selector_row_indexes=function(settings,opts)
{var
i,ien,tmp,a=[],displayFiltered=settings.aiDisplay,displayMaster=settings.aiDisplayMaster;var
search=opts.search,order=opts.order,page=opts.page;if(_fnDataSource(settings)=='ssp'){return search==='removed'?[]:_range(0,displayMaster.length);}
else if(page=='current'){for(i=settings._iDisplayStart,ien=settings.fnDisplayEnd();i<ien;i++){a.push(displayFiltered[i]);}}
else if(order=='current'||order=='applied'){a=search=='none'?displayMaster.slice():search=='applied'?displayFiltered.slice():$.map(displayMaster,function(el,i){return $.inArray(el,displayFiltered)===-1?el:null;});}
else if(order=='index'||order=='original'){for(i=0,ien=settings.aoData.length;i<ien;i++){if(search=='none'){a.push(i);}
else{tmp=$.inArray(i,displayFiltered);if((tmp===-1&&search=='removed')||(tmp>=0&&search=='applied'))
{a.push(i);}}}}
return a;};var __row_selector=function(settings,selector,opts)
{var run=function(sel){var selInt=_intVal(sel);var i,ien;if(selInt!==null&&!opts){return[selInt];}
var rows=_selector_row_indexes(settings,opts);if(selInt!==null&&$.inArray(selInt,rows)!==-1){return[selInt];}
else if(!sel){return rows;}
if(typeof sel==='function'){return $.map(rows,function(idx){var row=settings.aoData[idx];return sel(idx,row._aData,row.nTr)?idx:null;});}
var nodes=_removeEmpty(_pluck_order(settings.aoData,rows,'nTr'));if(sel.nodeName){if(sel._DT_RowIndex!==undefined){return[sel._DT_RowIndex];}
else if(sel._DT_CellIndex){return[sel._DT_CellIndex.row];}
else{var host=$(sel).closest('*[data-dt-row]');return host.length?[host.data('dt-row')]:[];}}
if(typeof sel==='string'&&sel.charAt(0)==='#'){var rowObj=settings.aIds[sel.replace(/^#/,'')];if(rowObj!==undefined){return[rowObj.idx];}}
return $(nodes).filter(sel).map(function(){return this._DT_RowIndex;}).toArray();};return _selector_run('row',selector,run,settings,opts);};_api_register('rows()',function(selector,opts){if(selector===undefined){selector='';}
else if($.isPlainObject(selector)){opts=selector;selector='';}
opts=_selector_opts(opts);var inst=this.iterator('table',function(settings){return __row_selector(settings,selector,opts);},1);inst.selector.rows=selector;inst.selector.opts=opts;return inst;});_api_register('rows().nodes()',function(){return this.iterator('row',function(settings,row){return settings.aoData[row].nTr||undefined;},1);});_api_register('rows().data()',function(){return this.iterator(true,'rows',function(settings,rows){return _pluck_order(settings.aoData,rows,'_aData');},1);});_api_registerPlural('rows().cache()','row().cache()',function(type){return this.iterator('row',function(settings,row){var r=settings.aoData[row];return type==='search'?r._aFilterData:r._aSortData;},1);});_api_registerPlural('rows().invalidate()','row().invalidate()',function(src){return this.iterator('row',function(settings,row){_fnInvalidate(settings,row,src);});});_api_registerPlural('rows().indexes()','row().index()',function(){return this.iterator('row',function(settings,row){return row;},1);});_api_registerPlural('rows().ids()','row().id()',function(hash){var a=[];var context=this.context;for(var i=0,ien=context.length;i<ien;i++){for(var j=0,jen=this[i].length;j<jen;j++){var id=context[i].rowIdFn(context[i].aoData[this[i][j]]._aData);a.push((hash===true?'#':'')+id);}}
return new _Api(context,a);});_api_registerPlural('rows().remove()','row().remove()',function(){var that=this;this.iterator('row',function(settings,row,thatIdx){var data=settings.aoData;var rowData=data[row];var i,ien,j,jen;var loopRow,loopCells;data.splice(row,1);for(i=0,ien=data.length;i<ien;i++){loopRow=data[i];loopCells=loopRow.anCells;if(loopRow.nTr!==null){loopRow.nTr._DT_RowIndex=i;}
if(loopCells!==null){for(j=0,jen=loopCells.length;j<jen;j++){loopCells[j]._DT_CellIndex.row=i;}}}
_fnDeleteIndex(settings.aiDisplayMaster,row);_fnDeleteIndex(settings.aiDisplay,row);_fnDeleteIndex(that[thatIdx],row,false);_fnLengthOverflow(settings);var id=settings.rowIdFn(rowData._aData);if(id!==undefined){delete settings.aIds[id];}});this.iterator('table',function(settings){for(var i=0,ien=settings.aoData.length;i<ien;i++){settings.aoData[i].idx=i;}});return this;});_api_register('rows.add()',function(rows){var newRows=this.iterator('table',function(settings){var row,i,ien;var out=[];for(i=0,ien=rows.length;i<ien;i++){row=rows[i];if(row.nodeName&&row.nodeName.toUpperCase()==='TR'){out.push(_fnAddTr(settings,row)[0]);}
else{out.push(_fnAddData(settings,row));}}
return out;},1);var modRows=this.rows(-1);modRows.pop();$.merge(modRows,newRows);return modRows;});_api_register('row()',function(selector,opts){return _selector_first(this.rows(selector,opts));});_api_register('row().data()',function(data){var ctx=this.context;if(data===undefined){return ctx.length&&this.length?ctx[0].aoData[this[0]]._aData:undefined;}
ctx[0].aoData[this[0]]._aData=data;_fnInvalidate(ctx[0],this[0],'data');return this;});_api_register('row().node()',function(){var ctx=this.context;return ctx.length&&this.length?ctx[0].aoData[this[0]].nTr||null:null;});_api_register('row.add()',function(row){if(row instanceof $&&row.length){row=row[0];}
var rows=this.iterator('table',function(settings){if(row.nodeName&&row.nodeName.toUpperCase()==='TR'){return _fnAddTr(settings,row)[0];}
return _fnAddData(settings,row);});return this.row(rows[0]);});var __details_add=function(ctx,row,data,klass)
{var rows=[];var addRow=function(r,k){if($.isArray(r)||r instanceof $){for(var i=0,ien=r.length;i<ien;i++){addRow(r[i],k);}
return;}
if(r.nodeName&&r.nodeName.toLowerCase()==='tr'){rows.push(r);}
else{var created=$('<tr><td/></tr>').addClass(k);$('td',created).addClass(k).html(r)
[0].colSpan=_fnVisbleColumns(ctx);rows.push(created[0]);}};addRow(data,klass);if(row._details){row._details.remove();}
row._details=$(rows);if(row._detailsShow){row._details.insertAfter(row.nTr);}};var __details_remove=function(api,idx)
{var ctx=api.context;if(ctx.length){var row=ctx[0].aoData[idx!==undefined?idx:api[0]];if(row&&row._details){row._details.remove();row._detailsShow=undefined;row._details=undefined;}}};var __details_display=function(api,show){var ctx=api.context;if(ctx.length&&api.length){var row=ctx[0].aoData[api[0]];if(row._details){row._detailsShow=show;if(show){row._details.insertAfter(row.nTr);}
else{row._details.detach();}
__details_events(ctx[0]);}}};var __details_events=function(settings)
{var api=new _Api(settings);var namespace='.dt.DT_details';var drawEvent='draw'+namespace;var colvisEvent='column-visibility'+namespace;var destroyEvent='destroy'+namespace;var data=settings.aoData;api.off(drawEvent+' '+colvisEvent+' '+destroyEvent);if(_pluck(data,'_details').length>0){api.on(drawEvent,function(e,ctx){if(settings!==ctx){return;}
api.rows({page:'current'}).eq(0).each(function(idx){var row=data[idx];if(row._detailsShow){row._details.insertAfter(row.nTr);}});});api.on(colvisEvent,function(e,ctx,idx,vis){if(settings!==ctx){return;}
var row,visible=_fnVisbleColumns(ctx);for(var i=0,ien=data.length;i<ien;i++){row=data[i];if(row._details){row._details.children('td[colspan]').attr('colspan',visible);}}});api.on(destroyEvent,function(e,ctx){if(settings!==ctx){return;}
for(var i=0,ien=data.length;i<ien;i++){if(data[i]._details){__details_remove(api,i);}}});}};var _emp='';var _child_obj=_emp+'row().child';var _child_mth=_child_obj+'()';_api_register(_child_mth,function(data,klass){var ctx=this.context;if(data===undefined){return ctx.length&&this.length?ctx[0].aoData[this[0]]._details:undefined;}
else if(data===true){this.child.show();}
else if(data===false){__details_remove(this);}
else if(ctx.length&&this.length){__details_add(ctx[0],ctx[0].aoData[this[0]],data,klass);}
return this;});_api_register([_child_obj+'.show()',_child_mth+'.show()'],function(show){__details_display(this,true);return this;});_api_register([_child_obj+'.hide()',_child_mth+'.hide()'],function(){__details_display(this,false);return this;});_api_register([_child_obj+'.remove()',_child_mth+'.remove()'],function(){__details_remove(this);return this;});_api_register(_child_obj+'.isShown()',function(){var ctx=this.context;if(ctx.length&&this.length){return ctx[0].aoData[this[0]]._detailsShow||false;}
return false;});var __re_column_selector=/^(.+):(name|visIdx|visible)$/;var __columnData=function(settings,column,r1,r2,rows){var a=[];for(var row=0,ien=rows.length;row<ien;row++){a.push(_fnGetCellData(settings,rows[row],column));}
return a;};var __column_selector=function(settings,selector,opts)
{var
columns=settings.aoColumns,names=_pluck(columns,'sName'),nodes=_pluck(columns,'nTh');var run=function(s){var selInt=_intVal(s);if(s===''){return _range(columns.length);}
if(selInt!==null){return[selInt>=0?selInt:columns.length+selInt];}
if(typeof s==='function'){var rows=_selector_row_indexes(settings,opts);return $.map(columns,function(col,idx){return s(idx,__columnData(settings,idx,0,0,rows),nodes[idx])?idx:null;});}
var match=typeof s==='string'?s.match(__re_column_selector):'';if(match){switch(match[2]){case'visIdx':case'visible':var idx=parseInt(match[1],10);if(idx<0){var visColumns=$.map(columns,function(col,i){return col.bVisible?i:null;});return[visColumns[visColumns.length+idx]];}
return[_fnVisibleToColumnIndex(settings,idx)];case'name':return $.map(names,function(name,i){return name===match[1]?i:null;});default:return[];}}
if(s.nodeName&&s._DT_CellIndex){return[s._DT_CellIndex.column];}
var jqResult=$(nodes).filter(s).map(function(){return $.inArray(this,nodes);}).toArray();if(jqResult.length||!s.nodeName){return jqResult;}
var host=$(s).closest('*[data-dt-column]');return host.length?[host.data('dt-column')]:[];};return _selector_run('column',selector,run,settings,opts);};var __setColumnVis=function(settings,column,vis){var
cols=settings.aoColumns,col=cols[column],data=settings.aoData,row,cells,i,ien,tr;if(vis===undefined){return col.bVisible;}
if(col.bVisible===vis){return;}
if(vis){var insertBefore=$.inArray(true,_pluck(cols,'bVisible'),column+1);for(i=0,ien=data.length;i<ien;i++){tr=data[i].nTr;cells=data[i].anCells;if(tr){tr.insertBefore(cells[column],cells[insertBefore]||null);}}}
else{$(_pluck(settings.aoData,'anCells',column)).detach();}
col.bVisible=vis;_fnDrawHead(settings,settings.aoHeader);_fnDrawHead(settings,settings.aoFooter);_fnSaveState(settings);};_api_register('columns()',function(selector,opts){if(selector===undefined){selector='';}
else if($.isPlainObject(selector)){opts=selector;selector='';}
opts=_selector_opts(opts);var inst=this.iterator('table',function(settings){return __column_selector(settings,selector,opts);},1);inst.selector.cols=selector;inst.selector.opts=opts;return inst;});_api_registerPlural('columns().header()','column().header()',function(selector,opts){return this.iterator('column',function(settings,column){return settings.aoColumns[column].nTh;},1);});_api_registerPlural('columns().footer()','column().footer()',function(selector,opts){return this.iterator('column',function(settings,column){return settings.aoColumns[column].nTf;},1);});_api_registerPlural('columns().data()','column().data()',function(){return this.iterator('column-rows',__columnData,1);});_api_registerPlural('columns().dataSrc()','column().dataSrc()',function(){return this.iterator('column',function(settings,column){return settings.aoColumns[column].mData;},1);});_api_registerPlural('columns().cache()','column().cache()',function(type){return this.iterator('column-rows',function(settings,column,i,j,rows){return _pluck_order(settings.aoData,rows,type==='search'?'_aFilterData':'_aSortData',column);},1);});_api_registerPlural('columns().nodes()','column().nodes()',function(){return this.iterator('column-rows',function(settings,column,i,j,rows){return _pluck_order(settings.aoData,rows,'anCells',column);},1);});_api_registerPlural('columns().visible()','column().visible()',function(vis,calc){var ret=this.iterator('column',function(settings,column){if(vis===undefined){return settings.aoColumns[column].bVisible;}
__setColumnVis(settings,column,vis);});if(vis!==undefined){this.iterator('column',function(settings,column){_fnCallbackFire(settings,null,'column-visibility',[settings,column,vis,calc]);});if(calc===undefined||calc){this.columns.adjust();}}
return ret;});_api_registerPlural('columns().indexes()','column().index()',function(type){return this.iterator('column',function(settings,column){return type==='visible'?_fnColumnIndexToVisible(settings,column):column;},1);});_api_register('columns.adjust()',function(){return this.iterator('table',function(settings){_fnAdjustColumnSizing(settings);},1);});_api_register('column.index()',function(type,idx){if(this.context.length!==0){var ctx=this.context[0];if(type==='fromVisible'||type==='toData'){return _fnVisibleToColumnIndex(ctx,idx);}
else if(type==='fromData'||type==='toVisible'){return _fnColumnIndexToVisible(ctx,idx);}}});_api_register('column()',function(selector,opts){return _selector_first(this.columns(selector,opts));});var __cell_selector=function(settings,selector,opts)
{var data=settings.aoData;var rows=_selector_row_indexes(settings,opts);var cells=_removeEmpty(_pluck_order(data,rows,'anCells'));var allCells=$([].concat.apply([],cells));var row;var columns=settings.aoColumns.length;var a,i,ien,j,o,host;var run=function(s){var fnSelector=typeof s==='function';if(s===null||s===undefined||fnSelector){a=[];for(i=0,ien=rows.length;i<ien;i++){row=rows[i];for(j=0;j<columns;j++){o={row:row,column:j};if(fnSelector){host=data[row];if(s(o,_fnGetCellData(settings,row,j),host.anCells?host.anCells[j]:null)){a.push(o);}}
else{a.push(o);}}}
return a;}
if($.isPlainObject(s)){return[s];}
var jqResult=allCells.filter(s).map(function(i,el){return{row:el._DT_CellIndex.row,column:el._DT_CellIndex.column};}).toArray();if(jqResult.length||!s.nodeName){return jqResult;}
host=$(s).closest('*[data-dt-row]');return host.length?[{row:host.data('dt-row'),column:host.data('dt-column')}]:[];};return _selector_run('cell',selector,run,settings,opts);};_api_register('cells()',function(rowSelector,columnSelector,opts){if($.isPlainObject(rowSelector)){if(rowSelector.row===undefined){opts=rowSelector;rowSelector=null;}
else{opts=columnSelector;columnSelector=null;}}
if($.isPlainObject(columnSelector)){opts=columnSelector;columnSelector=null;}
if(columnSelector===null||columnSelector===undefined){return this.iterator('table',function(settings){return __cell_selector(settings,rowSelector,_selector_opts(opts));});}
var columns=this.columns(columnSelector,opts);var rows=this.rows(rowSelector,opts);var a,i,ien,j,jen;var cells=this.iterator('table',function(settings,idx){a=[];for(i=0,ien=rows[idx].length;i<ien;i++){for(j=0,jen=columns[idx].length;j<jen;j++){a.push({row:rows[idx][i],column:columns[idx][j]});}}
return a;},1);$.extend(cells.selector,{cols:columnSelector,rows:rowSelector,opts:opts});return cells;});_api_registerPlural('cells().nodes()','cell().node()',function(){return this.iterator('cell',function(settings,row,column){var data=settings.aoData[row];return data&&data.anCells?data.anCells[column]:undefined;},1);});_api_register('cells().data()',function(){return this.iterator('cell',function(settings,row,column){return _fnGetCellData(settings,row,column);},1);});_api_registerPlural('cells().cache()','cell().cache()',function(type){type=type==='search'?'_aFilterData':'_aSortData';return this.iterator('cell',function(settings,row,column){return settings.aoData[row][type][column];},1);});_api_registerPlural('cells().render()','cell().render()',function(type){return this.iterator('cell',function(settings,row,column){return _fnGetCellData(settings,row,column,type);},1);});_api_registerPlural('cells().indexes()','cell().index()',function(){return this.iterator('cell',function(settings,row,column){return{row:row,column:column,columnVisible:_fnColumnIndexToVisible(settings,column)};},1);});_api_registerPlural('cells().invalidate()','cell().invalidate()',function(src){return this.iterator('cell',function(settings,row,column){_fnInvalidate(settings,row,src,column);});});_api_register('cell()',function(rowSelector,columnSelector,opts){return _selector_first(this.cells(rowSelector,columnSelector,opts));});_api_register('cell().data()',function(data){var ctx=this.context;var cell=this[0];if(data===undefined){return ctx.length&&cell.length?_fnGetCellData(ctx[0],cell[0].row,cell[0].column):undefined;}
_fnSetCellData(ctx[0],cell[0].row,cell[0].column,data);_fnInvalidate(ctx[0],cell[0].row,'data',cell[0].column);return this;});_api_register('order()',function(order,dir){var ctx=this.context;if(order===undefined){return ctx.length!==0?ctx[0].aaSorting:undefined;}
if(typeof order==='number'){order=[[order,dir]];}
else if(order.length&&!$.isArray(order[0])){order=Array.prototype.slice.call(arguments);}
return this.iterator('table',function(settings){settings.aaSorting=order.slice();});});_api_register('order.listener()',function(node,column,callback){return this.iterator('table',function(settings){_fnSortAttachListener(settings,node,column,callback);});});_api_register('order.fixed()',function(set){if(!set){var ctx=this.context;var fixed=ctx.length?ctx[0].aaSortingFixed:undefined;return $.isArray(fixed)?{pre:fixed}:fixed;}
return this.iterator('table',function(settings){settings.aaSortingFixed=$.extend(true,{},set);});});_api_register(['columns().order()','column().order()'],function(dir){var that=this;return this.iterator('table',function(settings,i){var sort=[];$.each(that[i],function(j,col){sort.push([col,dir]);});settings.aaSorting=sort;});});_api_register('search()',function(input,regex,smart,caseInsen){var ctx=this.context;if(input===undefined){return ctx.length!==0?ctx[0].oPreviousSearch.sSearch:undefined;}
return this.iterator('table',function(settings){if(!settings.oFeatures.bFilter){return;}
_fnFilterComplete(settings,$.extend({},settings.oPreviousSearch,{"sSearch":input+"","bRegex":regex===null?false:regex,"bSmart":smart===null?true:smart,"bCaseInsensitive":caseInsen===null?true:caseInsen}),1);});});_api_registerPlural('columns().search()','column().search()',function(input,regex,smart,caseInsen){return this.iterator('column',function(settings,column){var preSearch=settings.aoPreSearchCols;if(input===undefined){return preSearch[column].sSearch;}
if(!settings.oFeatures.bFilter){return;}
$.extend(preSearch[column],{"sSearch":input+"","bRegex":regex===null?false:regex,"bSmart":smart===null?true:smart,"bCaseInsensitive":caseInsen===null?true:caseInsen});_fnFilterComplete(settings,settings.oPreviousSearch,1);});});_api_register('state()',function(){return this.context.length?this.context[0].oSavedState:null;});_api_register('state.clear()',function(){return this.iterator('table',function(settings){settings.fnStateSaveCallback.call(settings.oInstance,settings,{});});});_api_register('state.loaded()',function(){return this.context.length?this.context[0].oLoadedState:null;});_api_register('state.save()',function(){return this.iterator('table',function(settings){_fnSaveState(settings);});});DataTable.versionCheck=DataTable.fnVersionCheck=function(version)
{var aThis=DataTable.version.split('.');var aThat=version.split('.');var iThis,iThat;for(var i=0,iLen=aThat.length;i<iLen;i++){iThis=parseInt(aThis[i],10)||0;iThat=parseInt(aThat[i],10)||0;if(iThis===iThat){continue;}
return iThis>iThat;}
return true;};DataTable.isDataTable=DataTable.fnIsDataTable=function(table)
{var t=$(table).get(0);var is=false;$.each(DataTable.settings,function(i,o){var head=o.nScrollHead?$('table',o.nScrollHead)[0]:null;var foot=o.nScrollFoot?$('table',o.nScrollFoot)[0]:null;if(o.nTable===t||head===t||foot===t){is=true;}});return is;};DataTable.tables=DataTable.fnTables=function(visible)
{var api=false;if($.isPlainObject(visible)){api=visible.api;visible=visible.visible;}
var a=$.map(DataTable.settings,function(o){if(!visible||(visible&&$(o.nTable).is(':visible'))){return o.nTable;}});return api?new _Api(a):a;};DataTable.camelToHungarian=_fnCamelToHungarian;_api_register('$()',function(selector,opts){var
rows=this.rows(opts).nodes(),jqRows=$(rows);return $([].concat(jqRows.filter(selector).toArray(),jqRows.find(selector).toArray()));});$.each(['on','one','off'],function(i,key){_api_register(key+'()',function(){var args=Array.prototype.slice.call(arguments);if(!args[0].match(/\.dt\b/)){args[0]+='.dt';}
var inst=$(this.tables().nodes());inst[key].apply(inst,args);return this;});});_api_register('clear()',function(){return this.iterator('table',function(settings){_fnClearTable(settings);});});_api_register('settings()',function(){return new _Api(this.context,this.context);});_api_register('init()',function(){var ctx=this.context;return ctx.length?ctx[0].oInit:null;});_api_register('data()',function(){return this.iterator('table',function(settings){return _pluck(settings.aoData,'_aData');}).flatten();});_api_register('destroy()',function(remove){remove=remove||false;return this.iterator('table',function(settings){var orig=settings.nTableWrapper.parentNode;var classes=settings.oClasses;var table=settings.nTable;var tbody=settings.nTBody;var thead=settings.nTHead;var tfoot=settings.nTFoot;var jqTable=$(table);var jqTbody=$(tbody);var jqWrapper=$(settings.nTableWrapper);var rows=$.map(settings.aoData,function(r){return r.nTr;});var i,ien;settings.bDestroying=true;_fnCallbackFire(settings,"aoDestroyCallback","destroy",[settings]);if(!remove){new _Api(settings).columns().visible(true);}
jqWrapper.unbind('.DT').find(':not(tbody *)').unbind('.DT');$(window).unbind('.DT-'+settings.sInstance);if(table!=thead.parentNode){jqTable.children('thead').detach();jqTable.append(thead);}
if(tfoot&&table!=tfoot.parentNode){jqTable.children('tfoot').detach();jqTable.append(tfoot);}
settings.aaSorting=[];settings.aaSortingFixed=[];_fnSortingClasses(settings);$(rows).removeClass(settings.asStripeClasses.join(' '));$('th, td',thead).removeClass(classes.sSortable+' '+
classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone);if(settings.bJUI){$('th span.'+classes.sSortIcon+', td span.'+classes.sSortIcon,thead).detach();$('th, td',thead).each(function(){var wrapper=$('div.'+classes.sSortJUIWrapper,this);$(this).append(wrapper.contents());wrapper.detach();});}
jqTbody.children().detach();jqTbody.append(rows);var removedMethod=remove?'remove':'detach';jqTable[removedMethod]();jqWrapper[removedMethod]();if(!remove&&orig){orig.insertBefore(table,settings.nTableReinsertBefore);jqTable.css('width',settings.sDestroyWidth).removeClass(classes.sTable);ien=settings.asDestroyStripes.length;if(ien){jqTbody.children().each(function(i){$(this).addClass(settings.asDestroyStripes[i%ien]);});}}
var idx=$.inArray(settings,DataTable.settings);if(idx!==-1){DataTable.settings.splice(idx,1);}});});$.each(['column','row','cell'],function(i,type){_api_register(type+'s().every()',function(fn){var opts=this.selector.opts;var api=this;return this.iterator(type,function(settings,arg1,arg2,arg3,arg4){fn.call(api[type](arg1,type==='cell'?arg2:opts,type==='cell'?opts:undefined),arg1,arg2,arg3,arg4);});});});_api_register('i18n()',function(token,def,plural){var ctx=this.context[0];var resolved=_fnGetObjectDataFn(token)(ctx.oLanguage);if(resolved===undefined){resolved=def;}
if(plural!==undefined&&$.isPlainObject(resolved)){resolved=resolved[plural]!==undefined?resolved[plural]:resolved._;}
return resolved.replace('%d',plural);});DataTable.version="1.10.12";DataTable.settings=[];DataTable.models={};DataTable.models.oSearch={"bCaseInsensitive":true,"sSearch":"","bRegex":false,"bSmart":true};DataTable.models.oRow={"nTr":null,"anCells":null,"_aData":[],"_aSortData":null,"_aFilterData":null,"_sFilterRow":null,"_sRowStripe":"","src":null,"idx":-1};DataTable.models.oColumn={"idx":null,"aDataSort":null,"asSorting":null,"bSearchable":null,"bSortable":null,"bVisible":null,"_sManualType":null,"_bAttrSrc":false,"fnCreatedCell":null,"fnGetData":null,"fnSetData":null,"mData":null,"mRender":null,"nTh":null,"nTf":null,"sClass":null,"sContentPadding":null,"sDefaultContent":null,"sName":null,"sSortDataType":'std',"sSortingClass":null,"sSortingClassJUI":null,"sTitle":null,"sType":null,"sWidth":null,"sWidthOrig":null};DataTable.defaults={"aaData":null,"aaSorting":[[0,'asc']],"aaSortingFixed":[],"ajax":null,"aLengthMenu":[10,25,50,100],"aoColumns":null,"aoColumnDefs":null,"aoSearchCols":[],"asStripeClasses":null,"bAutoWidth":true,"bDeferRender":false,"bDestroy":false,"bFilter":true,"bInfo":true,"bJQueryUI":false,"bLengthChange":true,"bPaginate":true,"bProcessing":false,"bRetrieve":false,"bScrollCollapse":false,"bServerSide":false,"bSort":true,"bSortMulti":true,"bSortCellsTop":false,"bSortClasses":true,"bStateSave":false,"fnCreatedRow":null,"fnDrawCallback":null,"fnFooterCallback":null,"fnFormatNumber":function(toFormat){return toFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands);},"fnHeaderCallback":null,"fnInfoCallback":null,"fnInitComplete":null,"fnPreDrawCallback":null,"fnRowCallback":null,"fnServerData":null,"fnServerParams":null,"fnStateLoadCallback":function(settings){try{return JSON.parse((settings.iStateDuration===-1?sessionStorage:localStorage).getItem('DataTables_'+settings.sInstance+'_'+location.pathname));}catch(e){}},"fnStateLoadParams":null,"fnStateLoaded":null,"fnStateSaveCallback":function(settings,data){try{(settings.iStateDuration===-1?sessionStorage:localStorage).setItem('DataTables_'+settings.sInstance+'_'+location.pathname,JSON.stringify(data));}catch(e){}},"fnStateSaveParams":null,"iStateDuration":7200,"iDeferLoading":null,"iDisplayLength":10,"iDisplayStart":0,"iTabIndex":0,"oClasses":{},"oLanguage":{"oAria":{"sSortAscending":": activate to sort column ascending","sSortDescending":": activate to sort column descending"},"oPaginate":{"sFirst":"First","sLast":"Last","sNext":"Next","sPrevious":"Previous"},"sEmptyTable":"No data available in table","sInfo":"Showing _START_ to _END_ of _TOTAL_ entries","sInfoEmpty":"Showing 0 to 0 of 0 entries","sInfoFiltered":"(filtered from _MAX_ total entries)","sInfoPostFix":"","sDecimal":"","sThousands":",","sLengthMenu":"Show _MENU_ entries","sLoadingRecords":"Loading...","sProcessing":"Processing...","sSearch":"Search:","sSearchPlaceholder":"","sUrl":"","sZeroRecords":"No matching records found"},"oSearch":$.extend({},DataTable.models.oSearch),"sAjaxDataProp":"data","sAjaxSource":null,"sDom":"lfrtip","searchDelay":null,"sPaginationType":"simple_numbers","sScrollX":"","sScrollXInner":"","sScrollY":"","sServerMethod":"GET","renderer":null,"rowId":"DT_RowId"};_fnHungarianMap(DataTable.defaults);DataTable.defaults.column={"aDataSort":null,"iDataSort":-1,"asSorting":['asc','desc'],"bSearchable":true,"bSortable":true,"bVisible":true,"fnCreatedCell":null,"mData":null,"mRender":null,"sCellType":"td","sClass":"","sContentPadding":"","sDefaultContent":null,"sName":"","sSortDataType":"std","sTitle":null,"sType":null,"sWidth":null};_fnHungarianMap(DataTable.defaults.column);DataTable.models.oSettings={"oFeatures":{"bAutoWidth":null,"bDeferRender":null,"bFilter":null,"bInfo":null,"bLengthChange":null,"bPaginate":null,"bProcessing":null,"bServerSide":null,"bSort":null,"bSortMulti":null,"bSortClasses":null,"bStateSave":null},"oScroll":{"bCollapse":null,"iBarWidth":0,"sX":null,"sXInner":null,"sY":null},"oLanguage":{"fnInfoCallback":null},"oBrowser":{"bScrollOversize":false,"bScrollbarLeft":false,"bBounding":false,"barWidth":0},"ajax":null,"aanFeatures":[],"aoData":[],"aiDisplay":[],"aiDisplayMaster":[],"aIds":{},"aoColumns":[],"aoHeader":[],"aoFooter":[],"oPreviousSearch":{},"aoPreSearchCols":[],"aaSorting":null,"aaSortingFixed":[],"asStripeClasses":null,"asDestroyStripes":[],"sDestroyWidth":0,"aoRowCallback":[],"aoHeaderCallback":[],"aoFooterCallback":[],"aoDrawCallback":[],"aoRowCreatedCallback":[],"aoPreDrawCallback":[],"aoInitComplete":[],"aoStateSaveParams":[],"aoStateLoadParams":[],"aoStateLoaded":[],"sTableId":"","nTable":null,"nTHead":null,"nTFoot":null,"nTBody":null,"nTableWrapper":null,"bDeferLoading":false,"bInitialised":false,"aoOpenRows":[],"sDom":null,"searchDelay":null,"sPaginationType":"two_button","iStateDuration":0,"aoStateSave":[],"aoStateLoad":[],"oSavedState":null,"oLoadedState":null,"sAjaxSource":null,"sAjaxDataProp":null,"bAjaxDataGet":true,"jqXHR":null,"json":undefined,"oAjaxData":undefined,"fnServerData":null,"aoServerParams":[],"sServerMethod":null,"fnFormatNumber":null,"aLengthMenu":null,"iDraw":0,"bDrawing":false,"iDrawError":-1,"_iDisplayLength":10,"_iDisplayStart":0,"_iRecordsTotal":0,"_iRecordsDisplay":0,"bJUI":null,"oClasses":{},"bFiltered":false,"bSorted":false,"bSortCellsTop":null,"oInit":null,"aoDestroyCallback":[],"fnRecordsTotal":function()
{return _fnDataSource(this)=='ssp'?this._iRecordsTotal*1:this.aiDisplayMaster.length;},"fnRecordsDisplay":function()
{return _fnDataSource(this)=='ssp'?this._iRecordsDisplay*1:this.aiDisplay.length;},"fnDisplayEnd":function()
{var
len=this._iDisplayLength,start=this._iDisplayStart,calc=start+len,records=this.aiDisplay.length,features=this.oFeatures,paginate=features.bPaginate;if(features.bServerSide){return paginate===false||len===-1?start+records:Math.min(start+len,this._iRecordsDisplay);}
else{return!paginate||calc>records||len===-1?records:calc;}},"oInstance":null,"sInstance":null,"iTabIndex":0,"nScrollHead":null,"nScrollFoot":null,"aLastSort":[],"oPlugins":{},"rowIdFn":null,"rowId":null};DataTable.ext=_ext={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:DataTable.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:DataTable.version};$.extend(_ext,{afnFiltering:_ext.search,aTypes:_ext.type.detect,ofnSearch:_ext.type.search,oSort:_ext.type.order,afnSortData:_ext.order,aoFeatures:_ext.feature,oApi:_ext.internal,oStdClasses:_ext.classes,oPagination:_ext.pager});$.extend(DataTable.ext.classes,{"sTable":"dataTable","sNoFooter":"no-footer","sPageButton":"paginate_button","sPageButtonActive":"current","sPageButtonDisabled":"disabled","sStripeOdd":"odd","sStripeEven":"even","sRowEmpty":"dataTables_empty","sWrapper":"dataTables_wrapper","sFilter":"dataTables_filter","sInfo":"dataTables_info","sPaging":"dataTables_paginate paging_","sLength":"dataTables_length","sProcessing":"dataTables_processing","sSortAsc":"sorting_asc","sSortDesc":"sorting_desc","sSortable":"sorting","sSortableAsc":"sorting_asc_disabled","sSortableDesc":"sorting_desc_disabled","sSortableNone":"sorting_disabled","sSortColumn":"sorting_","sFilterInput":"","sLengthSelect":"","sScrollWrapper":"dataTables_scroll","sScrollHead":"dataTables_scrollHead","sScrollHeadInner":"dataTables_scrollHeadInner","sScrollBody":"dataTables_scrollBody","sScrollFoot":"dataTables_scrollFoot","sScrollFootInner":"dataTables_scrollFootInner","sHeaderTH":"","sFooterTH":"","sSortJUIAsc":"","sSortJUIDesc":"","sSortJUI":"","sSortJUIAscAllowed":"","sSortJUIDescAllowed":"","sSortJUIWrapper":"","sSortIcon":"","sJUIHeader":"","sJUIFooter":""});(function(){var _empty='';_empty='';var _stateDefault=_empty+'ui-state-default';var _sortIcon=_empty+'css_right ui-icon ui-icon-';var _headerFooter=_empty+'fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix';$.extend(DataTable.ext.oJUIClasses,DataTable.ext.classes,{"sPageButton":"fg-button ui-button "+_stateDefault,"sPageButtonActive":"ui-state-disabled","sPageButtonDisabled":"ui-state-disabled","sPaging":"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi "+"ui-buttonset-multi paging_","sSortAsc":_stateDefault+" sorting_asc","sSortDesc":_stateDefault+" sorting_desc","sSortable":_stateDefault+" sorting","sSortableAsc":_stateDefault+" sorting_asc_disabled","sSortableDesc":_stateDefault+" sorting_desc_disabled","sSortableNone":_stateDefault+" sorting_disabled","sSortJUIAsc":_sortIcon+"triangle-1-n","sSortJUIDesc":_sortIcon+"triangle-1-s","sSortJUI":_sortIcon+"carat-2-n-s","sSortJUIAscAllowed":_sortIcon+"carat-1-n","sSortJUIDescAllowed":_sortIcon+"carat-1-s","sSortJUIWrapper":"DataTables_sort_wrapper","sSortIcon":"DataTables_sort_icon","sScrollHead":"dataTables_scrollHead "+_stateDefault,"sScrollFoot":"dataTables_scrollFoot "+_stateDefault,"sHeaderTH":_stateDefault,"sFooterTH":_stateDefault,"sJUIHeader":_headerFooter+" ui-corner-tl ui-corner-tr","sJUIFooter":_headerFooter+" ui-corner-bl ui-corner-br"});}());var extPagination=DataTable.ext.pager;function _numbers(page,pages){var
numbers=[],buttons=extPagination.numbers_length,half=Math.floor(buttons/2),i=1;if(pages<=buttons){numbers=_range(0,pages);}
else if(page<=half){numbers=_range(0,buttons-2);numbers.push('ellipsis');numbers.push(pages-1);}
else if(page>=pages-1-half){numbers=_range(pages-(buttons-2),pages);numbers.splice(0,0,'ellipsis');numbers.splice(0,0,0);}
else{numbers=_range(page-half+2,page+half-1);numbers.push('ellipsis');numbers.push(pages-1);numbers.splice(0,0,'ellipsis');numbers.splice(0,0,0);}
numbers.DT_el='span';return numbers;}
$.extend(extPagination,{simple:function(page,pages){return['previous','next'];},full:function(page,pages){return['first','previous','next','last'];},numbers:function(page,pages){return[_numbers(page,pages)];},simple_numbers:function(page,pages){return['previous',_numbers(page,pages),'next'];},full_numbers:function(page,pages){return['first','previous',_numbers(page,pages),'next','last'];},_numbers:_numbers,numbers_length:7});$.extend(true,DataTable.ext.renderer,{pageButton:{_:function(settings,host,idx,buttons,page,pages){var classes=settings.oClasses;var lang=settings.oLanguage.oPaginate;var aria=settings.oLanguage.oAria.paginate||{};var btnDisplay,btnClass,counter=0;var attach=function(container,buttons){var i,ien,node,button;var clickHandler=function(e){_fnPageChange(settings,e.data.action,true);};for(i=0,ien=buttons.length;i<ien;i++){button=buttons[i];if($.isArray(button)){var inner=$('<'+(button.DT_el||'div')+'/>').appendTo(container);attach(inner,button);}
else{btnDisplay=null;btnClass='';switch(button){case'ellipsis':container.append('<span class="ellipsis">&#x2026;</span>');break;case'first':btnDisplay=lang.sFirst;btnClass=button+(page>0?'':' '+classes.sPageButtonDisabled);break;case'previous':btnDisplay=lang.sPrevious;btnClass=button+(page>0?'':' '+classes.sPageButtonDisabled);break;case'next':btnDisplay=lang.sNext;btnClass=button+(page<pages-1?'':' '+classes.sPageButtonDisabled);break;case'last':btnDisplay=lang.sLast;btnClass=button+(page<pages-1?'':' '+classes.sPageButtonDisabled);break;default:btnDisplay=button+1;btnClass=page===button?classes.sPageButtonActive:'';break;}
if(btnDisplay!==null){node=$('<a>',{'class':classes.sPageButton+' '+btnClass,'aria-controls':settings.sTableId,'aria-label':aria[button],'data-dt-idx':counter,'tabindex':settings.iTabIndex,'id':idx===0&&typeof button==='string'?settings.sTableId+'_'+button:null}).html(btnDisplay).appendTo(container);_fnBindAction(node,{action:button},clickHandler);counter++;}}}};var activeEl;try{activeEl=$(host).find(document.activeElement).data('dt-idx');}
catch(e){}
attach($(host).empty(),buttons);if(activeEl){$(host).find('[data-dt-idx='+activeEl+']').focus();}}}});$.extend(DataTable.ext.type.detect,[function(d,settings)
{var decimal=settings.oLanguage.sDecimal;return _isNumber(d,decimal)?'num'+decimal:null;},function(d,settings)
{if(d&&!(d instanceof Date)&&(!_re_date_start.test(d)||!_re_date_end.test(d))){return null;}
var parsed=Date.parse(d);return(parsed!==null&&!isNaN(parsed))||_empty(d)?'date':null;},function(d,settings)
{var decimal=settings.oLanguage.sDecimal;return _isNumber(d,decimal,true)?'num-fmt'+decimal:null;},function(d,settings)
{var decimal=settings.oLanguage.sDecimal;return _htmlNumeric(d,decimal)?'html-num'+decimal:null;},function(d,settings)
{var decimal=settings.oLanguage.sDecimal;return _htmlNumeric(d,decimal,true)?'html-num-fmt'+decimal:null;},function(d,settings)
{return _empty(d)||(typeof d==='string'&&d.indexOf('<')!==-1)?'html':null;}]);$.extend(DataTable.ext.type.search,{html:function(data){return _empty(data)?data:typeof data==='string'?data.replace(_re_new_lines," ").replace(_re_html,""):'';},string:function(data){return _empty(data)?data:typeof data==='string'?data.replace(_re_new_lines," "):data;}});var __numericReplace=function(d,decimalPlace,re1,re2){if(d!==0&&(!d||d==='-')){return-Infinity;}
if(decimalPlace){d=_numToDecimal(d,decimalPlace);}
if(d.replace){if(re1){d=d.replace(re1,'');}
if(re2){d=d.replace(re2,'');}}
return d*1;};function _addNumericSort(decimalPlace){$.each({"num":function(d){return __numericReplace(d,decimalPlace);},"num-fmt":function(d){return __numericReplace(d,decimalPlace,_re_formatted_numeric);},"html-num":function(d){return __numericReplace(d,decimalPlace,_re_html);},"html-num-fmt":function(d){return __numericReplace(d,decimalPlace,_re_html,_re_formatted_numeric);}},function(key,fn){_ext.type.order[key+decimalPlace+'-pre']=fn;if(key.match(/^html\-/)){_ext.type.search[key+decimalPlace]=_ext.type.search.html;}});}
$.extend(_ext.type.order,{"date-pre":function(d){return Date.parse(d)||0;},"html-pre":function(a){return _empty(a)?'':a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+'';},"string-pre":function(a){return _empty(a)?'':typeof a==='string'?a.toLowerCase():!a.toString?'':a.toString();},"string-asc":function(x,y){return((x<y)?-1:((x>y)?1:0));},"string-desc":function(x,y){return((x<y)?1:((x>y)?-1:0));}});_addNumericSort('');$.extend(true,DataTable.ext.renderer,{header:{_:function(settings,cell,column,classes){$(settings.nTable).on('order.dt.DT',function(e,ctx,sorting,columns){if(settings!==ctx){return;}
var colIdx=column.idx;cell.removeClass(column.sSortingClass+' '+
classes.sSortAsc+' '+
classes.sSortDesc).addClass(columns[colIdx]=='asc'?classes.sSortAsc:columns[colIdx]=='desc'?classes.sSortDesc:column.sSortingClass);});},jqueryui:function(settings,cell,column,classes){$('<div/>').addClass(classes.sSortJUIWrapper).append(cell.contents()).append($('<span/>').addClass(classes.sSortIcon+' '+column.sSortingClassJUI)).appendTo(cell);$(settings.nTable).on('order.dt.DT',function(e,ctx,sorting,columns){if(settings!==ctx){return;}
var colIdx=column.idx;cell.removeClass(classes.sSortAsc+" "+classes.sSortDesc).addClass(columns[colIdx]=='asc'?classes.sSortAsc:columns[colIdx]=='desc'?classes.sSortDesc:column.sSortingClass);cell.find('span.'+classes.sSortIcon).removeClass(classes.sSortJUIAsc+" "+
classes.sSortJUIDesc+" "+
classes.sSortJUI+" "+
classes.sSortJUIAscAllowed+" "+
classes.sSortJUIDescAllowed).addClass(columns[colIdx]=='asc'?classes.sSortJUIAsc:columns[colIdx]=='desc'?classes.sSortJUIDesc:column.sSortingClassJUI);});}}});var __htmlEscapeEntities=function(d){return typeof d==='string'?d.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'):d;};DataTable.render={number:function(thousands,decimal,precision,prefix,postfix){return{display:function(d){if(typeof d!=='number'&&typeof d!=='string'){return d;}
var negative=d<0?'-':'';var flo=parseFloat(d);if(isNaN(flo)){return __htmlEscapeEntities(d);}
d=Math.abs(flo);var intPart=parseInt(d,10);var floatPart=precision?decimal+(d-intPart).toFixed(precision).substring(2):'';return negative+(prefix||'')+
intPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g,thousands)+
floatPart+
(postfix||'');}};},text:function(){return{display:__htmlEscapeEntities};}};function _fnExternApiFunc(fn)
{return function(){var args=[_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return DataTable.ext.internal[fn].apply(this,args);};}
$.extend(DataTable.ext.internal,{_fnExternApiFunc:_fnExternApiFunc,_fnBuildAjax:_fnBuildAjax,_fnAjaxUpdate:_fnAjaxUpdate,_fnAjaxParameters:_fnAjaxParameters,_fnAjaxUpdateDraw:_fnAjaxUpdateDraw,_fnAjaxDataSrc:_fnAjaxDataSrc,_fnAddColumn:_fnAddColumn,_fnColumnOptions:_fnColumnOptions,_fnAdjustColumnSizing:_fnAdjustColumnSizing,_fnVisibleToColumnIndex:_fnVisibleToColumnIndex,_fnColumnIndexToVisible:_fnColumnIndexToVisible,_fnVisbleColumns:_fnVisbleColumns,_fnGetColumns:_fnGetColumns,_fnColumnTypes:_fnColumnTypes,_fnApplyColumnDefs:_fnApplyColumnDefs,_fnHungarianMap:_fnHungarianMap,_fnCamelToHungarian:_fnCamelToHungarian,_fnLanguageCompat:_fnLanguageCompat,_fnBrowserDetect:_fnBrowserDetect,_fnAddData:_fnAddData,_fnAddTr:_fnAddTr,_fnNodeToDataIndex:_fnNodeToDataIndex,_fnNodeToColumnIndex:_fnNodeToColumnIndex,_fnGetCellData:_fnGetCellData,_fnSetCellData:_fnSetCellData,_fnSplitObjNotation:_fnSplitObjNotation,_fnGetObjectDataFn:_fnGetObjectDataFn,_fnSetObjectDataFn:_fnSetObjectDataFn,_fnGetDataMaster:_fnGetDataMaster,_fnClearTable:_fnClearTable,_fnDeleteIndex:_fnDeleteIndex,_fnInvalidate:_fnInvalidate,_fnGetRowElements:_fnGetRowElements,_fnCreateTr:_fnCreateTr,_fnBuildHead:_fnBuildHead,_fnDrawHead:_fnDrawHead,_fnDraw:_fnDraw,_fnReDraw:_fnReDraw,_fnAddOptionsHtml:_fnAddOptionsHtml,_fnDetectHeader:_fnDetectHeader,_fnGetUniqueThs:_fnGetUniqueThs,_fnFeatureHtmlFilter:_fnFeatureHtmlFilter,_fnFilterComplete:_fnFilterComplete,_fnFilterCustom:_fnFilterCustom,_fnFilterColumn:_fnFilterColumn,_fnFilter:_fnFilter,_fnFilterCreateSearch:_fnFilterCreateSearch,_fnEscapeRegex:_fnEscapeRegex,_fnFilterData:_fnFilterData,_fnFeatureHtmlInfo:_fnFeatureHtmlInfo,_fnUpdateInfo:_fnUpdateInfo,_fnInfoMacros:_fnInfoMacros,_fnInitialise:_fnInitialise,_fnInitComplete:_fnInitComplete,_fnLengthChange:_fnLengthChange,_fnFeatureHtmlLength:_fnFeatureHtmlLength,_fnFeatureHtmlPaginate:_fnFeatureHtmlPaginate,_fnPageChange:_fnPageChange,_fnFeatureHtmlProcessing:_fnFeatureHtmlProcessing,_fnProcessingDisplay:_fnProcessingDisplay,_fnFeatureHtmlTable:_fnFeatureHtmlTable,_fnScrollDraw:_fnScrollDraw,_fnApplyToChildren:_fnApplyToChildren,_fnCalculateColumnWidths:_fnCalculateColumnWidths,_fnThrottle:_fnThrottle,_fnConvertToWidth:_fnConvertToWidth,_fnGetWidestNode:_fnGetWidestNode,_fnGetMaxLenString:_fnGetMaxLenString,_fnStringToCss:_fnStringToCss,_fnSortFlatten:_fnSortFlatten,_fnSort:_fnSort,_fnSortAria:_fnSortAria,_fnSortListener:_fnSortListener,_fnSortAttachListener:_fnSortAttachListener,_fnSortingClasses:_fnSortingClasses,_fnSortData:_fnSortData,_fnSaveState:_fnSaveState,_fnLoadState:_fnLoadState,_fnSettingsFromNode:_fnSettingsFromNode,_fnLog:_fnLog,_fnMap:_fnMap,_fnBindAction:_fnBindAction,_fnCallbackReg:_fnCallbackReg,_fnCallbackFire:_fnCallbackFire,_fnLengthOverflow:_fnLengthOverflow,_fnRenderer:_fnRenderer,_fnDataSource:_fnDataSource,_fnRowAttributes:_fnRowAttributes,_fnCalculateEnd:function(){}});$.fn.dataTable=DataTable;DataTable.$=$;$.fn.dataTableSettings=DataTable.settings;$.fn.dataTableExt=DataTable.ext;$.fn.DataTable=function(opts){return $(this).dataTable(opts).api();};$.each(DataTable,function(prop,val){$.fn.DataTable[prop]=val;});return $.fn.dataTable;}));$.ajaxSetup({headers:{'X-CSRFToken':Cookies.get('course_discovery_csrftoken')}});$(document).ready(function(){$("body").click(function(){$('.nav-account .wrapper-nav-sub').removeClass('is-shown');$('.nav-account .nav-account-user .title').removeClass('is-selected');});$('.nav-account .nav-item, .wrapper-nav-sub').click(function(e){$subnav=$('.nav-account').find('.wrapper-nav-sub');$title=$(this).find('.title');if($subnav.hasClass('is-shown')){$subnav.removeClass('is-shown');$title.removeClass('is-selected');}else{$('.nav-account .nav-item .title').removeClass('is-selected');$('.nav-account .wrapper-nav-sub').removeClass('is-shown');$title.addClass('is-selected');$subnav.addClass('is-shown');e.stopPropagation();}});$(".nav-account-user").click(function(e){e.preventDefault();$('.nav-account .wrapper-nav-sub').addClass('is-shown');$('.nav-account .nav-account-user .title').addClass('is-selected');});$("#email-switch").change(function(e){var isEnabled=this.checked?true:false,switchLabel=gettext("OFF");e.preventDefault();$.ajax({url:"/publisher/user/toggle/email_settings/",type:"POST",data:{is_enabled:isEnabled},success:function(response){if(response.is_enabled){switchLabel=gettext("ON")}
$(".switch-label").html(switchLabel);}});});});function addDatePicker(){_.each($('.add-pikaday'),function(el){if(el.getAttribute('datepicker-initialized')!=='true'){new Pikaday({field:el,format:'YYYY-MM-DD HH:mm:ss',defaultDate:$(el).val(),setDefaultDate:true,showTime:true,use24hour:true,autoClose:true});el.setAttribute('datepicker-initialized','true');}});}
function interpolateString(formatString,parameters){return formatString.replace(/{\w+}/g,function(parameter){var parameterName=parameter.slice(1,-1);return String(parameters[parameterName]);});}
(function($){var config={};$.loadingSpinner=function(options){var opts=$.extend($.loadingSpinner.default,options);config=opts;init(opts);var selector='#'+opts.id;$(document).on('ajaxStart',function(){if(config.ajax){$(selector).show();}});$(document).on('ajaxComplete',function(){setTimeout(function(){$(selector).hide();},opts.minTime);});return $.loadingSpinner;};$.loadingSpinner.open=function(time){var selector='#'+config.id;$(selector).show();if(time){setTimeout(function(){$(selector).hide();},parseInt(time));}};$.loadingSpinner.close=function(){var selector='#'+config.id;$(selector).hide();};$.loadingSpinner.ajax=function(isListen){config.ajax=isListen;};$.loadingSpinner.default={ajax:true,id:'ajaxLoading',zIndex:'10000',background:'rgba(0, 0, 0, 0.7)',minTime:200,width:'100%',height:'100%',imgPath:'/static/images/ajax-loading.svg',imgWidth:'65px',imgHeight:'65px'};function init(opts){var wrapCss='display: none;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;text-align: center;vertical-align: middle;';var cssArray=['width:'+opts.width,'height:'+opts.height,'z-index:'+opts.zIndex,'background:'+opts.background];wrapCss+=cssArray.join(';');var imgCss='top: 0;bottom: 0;left: 0;right: 0;margin: auto;position: absolute;';cssArray=['width:'+opts.imgWidth,'height:'+opts.imgWidth];imgCss+=cssArray.join(';');var html='<div id="'+opts.id+'" style="'+wrapCss+'">'
+'<img src="'+opts.imgPath+'" style="'+imgCss+'">';$(document).find('body').append(html);}})(window.jQuery||window.Zepto);