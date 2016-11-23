/**
 * Created by e on 7/6/2016.
 */

$(function(){
    document.body.style.webkitTouchCallout='none';
    document_loaded();
});
function document_loaded() {
    console.log("document loaded");
    window.NKJSObject.document_loaded();
}
function switch_panel(panel_name) {
    console.log("swich to "+panel_name);
    $('#'+panel_name).show().siblings().hide();
}
function getAuthCode(phone_number) {
    console.log("send authCode to"+phone_number)
    return window.NKJSObject.sendAuthCode(phone_number)
}
function quick_login() {
    console.log("quick login")
    window.NKJSObject.quick_login();
}
function account_login(account,password) {
    console.log("account login")
    window.NKJSObject.account_login(account,password);
}
function phone_login(phone_number,authCode) {
    console.log(phone_number+" "+authCode);
    window.NKJSObject.phone_login(phone_number,authCode);
}
function bind_phone(phone_number,authCode) {
    console.log(phone_number,authCode)
    window.NKJSObject.bind_phone(phone_number,authCode);
}
function enter_game() {
    console.log("enter game")
    window.NKJSObject.enterGame()
}
function user_center() {
    console.log("user center")
    window.NKJSObject.user_center()
}
function isLoggedIn() {
    return window.NKJSObject.is_loggend_in()
}
function logout() {
    console.log("logout")
    window.NKJSObject.logout()
}
function change_password() {
    console.log("change password")
    window.NKJSObject.change_password()
}
function toast_finish() {
    console.log("toast finish")
    window.NKJSObject.toast_finish()
}
function alert_dialog(title,content) {
    window.NKJSObject.alert_dialog(title,content)
}

function show_android_toast(content) {
    window.NKJSObject.show_android_toast(content)
}

function switch_account() {
    window.NKJSObject.switch_account()
}

function cancel_toast() {
    window.NKJSObject.cancel_toast()
}
//判断是否设置过密码,true 表示已经设置过，false表示未设置过
function is_setPwd(phone_number){
	return window.NKJSObject.is_setPwd(phone_number);
}
//为手机号设置密码
function setting_passworld(phone_number,new_passworld){
	window.NKJSObject.setting_passworld(phone_number,new_passworld)
	
}
//账号注册 
function  account_register(account,passworld){
window.NKJSObject.account_register(account,passworld);	
}


//在账号注册时，判断账号是否已经存在,返回true表示账号已经注册过了，返回false表示账号可以注册
function auth_account(account){
return window.NKJSObject.auth_account(account);
}

//判断该账号是否被手机号绑定
function is_judge_account(account){
	return window.NKJSObject.is_judge_account(account);
}
//判断账号和手机号绑定在一起的
function account_judge_phone(account,phone){
	return window.NkJSObject.account_judge_phone(account,phone);
}

function qq_login(){
	window.NKJSObject.qq_login();
}

function wechat_login(){
	window.NKJSObject.wechat_login();
}

