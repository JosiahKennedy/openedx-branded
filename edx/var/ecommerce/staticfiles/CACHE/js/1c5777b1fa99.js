;/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */;(function(factory){var registeredInModuleLoader=false;if(typeof define==='function'&&define.amd){define(factory);registeredInModuleLoader=true;}
if(typeof exports==='object'){module.exports=factory();registeredInModuleLoader=true;}
if(!registeredInModuleLoader){var OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=OldCookies;return api;};}}(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key];}}
return result;}
function init(converter){function api(key,value,attributes){var result;if(typeof document==='undefined'){return;}
if(arguments.length>1){attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number'){var expires=new Date();expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);attributes.expires=expires;}
attributes.expires=attributes.expires?attributes.expires.toUTCString():'';try{result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result;}}catch(e){}
if(!converter.write){value=encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);}else{value=converter.write(value,key);}
key=encodeURIComponent(String(key));key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);key=key.replace(/[\(\)]/g,escape);var stringifiedAttributes='';for(var attributeName in attributes){if(!attributes[attributeName]){continue;}
stringifiedAttributes+='; '+attributeName;if(attributes[attributeName]===true){continue;}
stringifiedAttributes+='='+attributes[attributeName];}
return(document.cookie=key+'='+value+stringifiedAttributes);}
if(!key){result={};}
var cookies=document.cookie?document.cookie.split('; '):[];var rdecode=/(%[0-9A-Z]{2})+/g;var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('=');var cookie=parts.slice(1).join('=');if(cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1);}
try{var name=parts[0].replace(rdecode,decodeURIComponent);cookie=converter.read?converter.read(cookie,name):converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent);if(this.json){try{cookie=JSON.parse(cookie);}catch(e){}}
if(key===name){result=cookie;break;}
if(!key){result[name]=cookie;}}catch(e){}}
return result;}
api.set=api;api.get=function(key){return api.call(api,key);};api.getJSON=function(){return api.apply({json:true},[].slice.call(arguments));};api.defaults={};api.remove=function(key,attributes){api(key,'',extend(attributes,{expires:-1}));};api.withConverter=init;return api;}
return init(function(){});}));;function addMessage(type,icon,msg){var html='<div class="alert '+type+'">\
            <a class="close" data-dismiss="alert" href="#">×</a>\
            <div class="alertinner wicon"><span class="message">'+msg+'</span><i class="'+icon+'"></i></div></div>';$('#messages').append(html).hide().fadeIn(500);};$(document).ready(function(){var processRefund=function(e){var $btn=$(e.target),refund_id=$btn.data('refund-id'),decision=$btn.data('decision'),message='';e.preventDefault();$btn.addClass('disabled');$btn.unbind('click');$.ajax({url:'/api/v2/refunds/'+refund_id+'/process/',data:{action:decision},method:'PUT',headers:{'X-CSRFToken':Cookies.get('ecommerce_csrftoken')}}).done(function(data){$('tr[data-refund-id='+refund_id+'] .refund-status').text(data.status);message=interpolate(gettext('Refund #%(refund_id)s has been processed.'),{refund_id:refund_id},true);addMessage('alert-success','icon-check-sign',message);$('tr[data-refund-id='+refund_id+'] [data-action=process-refund]').remove();}).fail(function(jqXHR,textStatus,errorThrown){$('tr[data-refund-id='+refund_id+'] .refund-status').text(gettext('Error'));message=interpolate(gettext('Failed to process refund #%(refund_id)s: %(error)s. Please try again, or contact the E-Commerce Development Team.'),{refund_id:refund_id,error:errorThrown},true);addMessage('alert-error','icon-exclamation-sign',message);}).always(function(){$btn.click(processRefund);$btn.removeClass('disabled');});$('#refundActionModal').modal('hide');};var launchRefundActionModal=function(e){var $button=$(e.target),refundId=$button.data('refundId'),decision=$button.data('decision'),$modal=$('#refundActionModal');$modal.find('.modal-body').hide();$modal.find('.modal-body.confirm-'+decision).show();$modal.find('.btn-primary').data('refundId',refundId).data('decision',decision);$modal.modal('show');};$('[data-action=process-refund]').click(launchRefundActionModal);$('#refundActionModal .btn-primary').click(processRefund);});