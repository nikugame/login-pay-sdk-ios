/**
 * Created by e on 7/6/2016.
 */

$(function(){
    document.body.style.webkitTouchCallout='none';
    document_loaded();
});
function document_loaded() {
    console.log("document loaded");
    toast("document loaded")
}
function switch_panel(panel_name) {
    console.log("swich to "+panel_name);
    $('#'+panel_name).show().siblings().hide();
}
function getAuthCode(phone_number) {
    console.log("send authCode to"+phone_number)
    return true
}
function quick_login() {
    console.log("quick login")
}
function account_login(account,password) {
    console.log("account login")
}
function phone_login(phone_number,authCode) {
    console.log(phone_number+" "+authCode);
}
function bind_phone(phone_number,authCode) {
    console.log(phone_number,authCode)
}
function enter_game() {
    console.log("enter game")
}
function user_center() {
    console.log("user center")
    switch_panel("user_center")
}

function isLoggedIn() {
    return true
}
function logout() {
    console.log("logout")
}
function change_password() {
    console.log("change password")
}
function toast_finish() {
    console.log("toast finish")
}

function alert_dialog(title,content) {
    alert(content)
}

function show_android_toast(content) {
    console.log(content)
}

function switch_account() {
    console.log("switch account")
    logout();switch_panel('main')
}

function cancel_toast() {
    console.log("cancel toast")
}
function wechat_login(){
	 console.log("wechat_login")
}