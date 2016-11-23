/**
 * Created by e on 7/6/2016.
 */

$(function(){
    document.body.style.webkitTouchCallout='none';
    document_loaded();
});
function document_loaded() {
    console.log("document loaded");
    document.location="objc://"+"document_loaded";
}
function switch_panel(panel_name) {
    console.log("swich to "+panel_name);
    $('#'+panel_name).show().siblings().hide();
}
function getAuthCode(phone_number) {
    console.log("send authCode to"+phone_number)
    document.location="objc://"+"get_auth_code#"+ encodeURI(JSON.stringify({phoneNumber:phone_number})) ;
}
function getAuthCodeResult(result) {
    // if($('#bind_phone').is(':visible')){
    //     if(result){
    //         {$('#login_phone_number').text($('#phone_number').val());start_sms_count();switch_panel('phone_verify')}
    //     }
    // }
    if($('#phone_login').is(':visible')){
        if(result){
            {$('#login_phone_number').text($('#phone_number').val());start_sms_count();switch_panel('phone_verify')}
        }
    }
}
function quick_login() {
    document.location="objc://"+"quick_login";
}
function account_login(account,password) {
    console.log("account login")
    document.location="objc://"+"account_login#"+ encodeURI(JSON.stringify({account:account,password:password}));
}
function phone_login(phone_number,authCode) {
    console.log(phone_number+" "+authCode);
    document.location="objc://"+"phone_login#"+ encodeURI(JSON.stringify({phoneNumber:phone_number,authCode:authCode}));
}
function bind_phone(phone_number,authCode) {
    console.log(phone_number,authCode)
    document.location="objc://"+"bind_phone#"+ encodeURI(JSON.stringify({phoneNumber:phone_number,authCode:authCode}));
}
function enter_game() {
    console.log("enter game")
    document.location="objc://"+"enter_game"
}
function user_center() {
    console.log("user center")
    document.location="objc://"+"user_center"
}

function logout() {
    console.log("logout")
    document.location="objc://"+"logout"
}
function change_password() {
    console.log("change password")
    document.location="objc://"+"change_password"
}
function toast_finish() {
    console.log("toast finish")
    document.location="objc://"+"toast_finish"
}

function alert_dialog(title,content) {
    
    //alert(content)
    document.location="objc://"+"alert_dialog#"+ encodeURI(JSON.stringify({title:title,content:content}));
}

function show_android_toast(content) {
    console.log(content)
}

function switch_account() {
    console.log("switch account")
    document.location="objc://"+"switch_account"
}

function cancel_toast() {
    console.log("cancel toast")
    document.location="objc://"+"cancel_toast"
}
function register_acount_main(account,pwd,spwd){
    //document.location="objc://"+"user_center"
    document.location="objc://"+"register_acount_main#"+ encodeURI(JSON.stringify({account:account,pwd:pwd,spwd:spwd}))
}
function wechat_login(){
    console.log("wechat_login")
    document.location="objc://"+"wechat_login"
}
