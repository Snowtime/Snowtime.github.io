if (top.location!=self.location){window.top.location.href=window.self.location.href}
if (gb==1){var bl='Гостевая книга';}else{var bl='Форум';}
function oo(n){if(n>9){return n}else{return '0'+n}}
function data(dat,zon,typ) {d = new Date(dat*1000+zon*1000);if (typ!=1) {if (typ==3) {return oo(d.getUTCDate())+'.'+oo(d.getUTCMonth()+1)+'.'+(d.getUTCFullYear())}else{return oo(d.getUTCDate())+'.'+oo(d.getUTCMonth()+1)+'.'+(d.getUTCFullYear())+' '+oo(d.getUTCHours())+':'+oo(d.getUTCMinutes());}}else{var mon = new Array ('января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря');var den = new Array ('воскресенье','понедельник','вторник','среда','четверг','пятница','суббота');return d.getUTCDate()+' '+mon[d.getUTCMonth()]+' '+oo(d.getUTCHours())+':'+oo(d.getUTCMinutes())+', '+den[d.getUTCDay()];}}
function ran(rng){var im1='<IMG src="'+diz[0]+'/s';var im2='.gif" alt="">';for(i=0;i<=10;i++){if((rng<30*i)&&(rng>=30*(i-1))){return im1+i+im2;}}if (rng>=300){return im1+'10'+im2;}}
function alrt (numalert,admmes,aflud,banmsg){var at = new Array ('ooops!','Ник занят, требуется ввести пароль','Ник должен содержать как минимум две буквы или цифры','Пароль не подходит','Если хотите зарегистрироваться - обязательно введите пароль','Ник свободен. Если хотите зарегистрироваться - введите пароль и отметьте «зарегистрироваться». Если хотите оставаться гостем - введите только ник, не вводите пароль и не отмечайте «зарегистрироваться»','ICQ не соответствует формату uin от 5 до 12 цифр','E-mail не соответствует формату','Url не соответствует формату http','Фото не соответствует формату http','День рождения не соответствует формату даты, например 30.03.1981','Ф.И.О не соответствует формату, разрешены буквы, пробел и дефис','Город не соответствует формату, разрешены буквы, пробел и дефис','Страна не соответствует формату, разрешены буквы, пробел и дефис','Вы сменили пароль','Аватар должен иметь размер менее 30 Кбайт','Аватар должен иметь расширение gif или jpg','На введеный e-mail отправлено контрольное письмо. Если Вы захотите сменить e-mail и запросить контрольное письмо еще раз - это можно будет сделать через 1 минуту.','Ошибка. В вашем профайле должен быть подтвержденный e-mail. Сохраните Ваш e-mail в профиле и подтвердите его через контрольное письмо','Спасибо! Сообщения новых участников просматриваются модератором. \r\rВы можете отправлять сообщения уже сейчас. \r\rПосле просмотра Ваших сообщений модератор возможно добавит Вас в список постоянных участников. Если этого не произойдет - Ваши сообщения будут приниматься, но Вам будет показываться данное сообщение.\r\r');if (aflud) {alert('Нельзя отправлять запросы подряд с интервалом менее 15 секунд, подождите '+aflud+' сек и повторите попытку');}else {if (admmes) {alert('Сообщение администратора:\r\r'+admmes);}else {if (banmsg) {alert('Ваше сообщение будет добавлено после просмотра модератором.\r\rПремодерация включена до '+ data(banmsg,timezone)+'\r\r(вы временно забанены)');} else {alert(at[numalert]);}}}}

//--------статистика---------
var dd = new Date();region = Math.round(dd.getTime()/1000) - servertime;var ddd = "no";var sl = "no";var br = "no";var ul = "no";var ct = "no";
if (navigator.systemLanguage){sl = navigator.systemLanguage;}if (navigator.browserLanguage){br = navigator.browserLanguage;}if (navigator.userLanguage){ul = navigator.userLanguage;}
if (document.all) {if (navigator.userAgent.indexOf("Opera")==-1) {document.write('<xml:namespace ns=http://www.microsoft.com/ie prefix=IE><STYLE>@media all{IE\\:clientCaps {behavior:url(#default#clientcaps);}}</STYLE><IE:CLIENTCAPS ID="oClientCaps" />');
ct = oClientCaps.connectionType;var bbb = new Array();var ccc = new Array(0,0,0,0);var CompO=new Array("{7790769C-0471-11D2-AF11-00C04FA35D02}","{89820200-ECBD-11CF-8B85-00AA005B4340}","{283807B5-2C60-11D0-A31D-00AA00B92C03}","{4F216970-C90C-11D1-B5C7-0000F8051515}","{44BBA848-CC51-11CF-AAFA-00AA00B6015C}","{9381D8F2-0288-11D0-9501-00AA00B911A5}","{36F8EC70-C29A-11D1-B5C7-0000F8051515}","{5A8D6EE0-3E18-11D0-821E-444553540000}","{89820200-ECBD-11CF-8B85-00AA005B4383}","{08B0E5C0-4FCB-11CF-AAA5-00401C608555}","{45EA75A0-A269-11D1-B5BF-0000F8051515}","{DE5AED00-A4BF-11D1-9948-00C04F98BBC9}","{22D6F312-B0F6-11D0-94AB-0080C74C7E95}","{44BBA842-CC51-11CF-AAFA-00AA00B6015B}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{44BBA840-CC51-11CF-AAFA-00AA00B6015C}","{CC2A9BA0-3BDD-11D0-821E-444553540000}","{08B0E5C0-4FCB-11CF-AAA5-00401C608500}","{60B49E34-C7CC-11D0-8953-00A0C90347FF}","{03F998B2-0E00-11D3-A498-00104B6EB52E}","{0FDE1F56-0D59-4FD7-9624-E3DF6B419D0E}","{10072CEC-8CC1-11D1-986E-00A0C955B42F}","{1B00725B-C455-4DE6-BFB6-AD540AD427CD}","{4278C270-A269-11D1-B5BF-0000F8051515}","{44BBA855-CC51-11CF-AAFA-00AA00B6015C}","{4F645220-306D-11D2-995D-00C04F98BBC9}","{5FD399C0-A70A-11D1-9948-00C04F98BBC9}","{630B1DA0-B465-11D1-9948-00C04F98BBC9}","{6FAB99D0-BAB8-11D1-994A-00C04F98BBC9}","{C9E9A340-D1F1-11D0-821E-444553540600}","{D27CDB6E-AE6D-11CF-96B8-444553540000}","{E92B03AB-B707-11D2-9CBD-0000F87A369E}");for(var iii=0;iii<CompO.length;iii++){var Ver=oClientCaps.getComponentVersion (CompO[iii],"ComponentID");var aaa = Ver.split(',');for(var jjj=0;jjj<aaa.length;jjj++){aaa[jjj]++;aaa[jjj]--;ccc[jjj]+=aaa[jjj];var ddd=ccc[0]+''+ccc[1]+''+ccc[2]+''+ccc[3];}}}}
var statisc=region+"`"+window.screen.width+"`"+window.screen.colorDepth+"`"+sl+"`"+br+"`"+ul+"`"+ct+"`"+ddd;
//--------статистика---------

//-------------------- функции для формы ответа
function f3(msid) {theForm.msgid.value = msid;document.theForm.message.focus();} 
function Test(theForm){if (theForm.title.value == '' && theForm.message.value == ''){alert('Вы ничего не написали!'); document.theForm.message.focus(); return false; }
if (work!=7 && work!=4) {if (theForm.nick.value == ''){alert('Вы не ввели свое имя.');document.theForm.nick.focus();return false;}}
if (theForm.message.value.length > 5000)  {alert('Cообщение должно содержать не более 5000 знаков. А в Вашем сообщении ' +theForm.message.value.length); document.theForm.message.focus();  return false;}if (theForm.title.value == '' && (work==2 || work==3))  {return confirm('Вы не заполнили поле Заголовок. Сохранить как есть?');}return true;}
function get_selection() {if (document.getSelection){selek = document.getSelection();}else {selek = document.selection.createRange().text;}}
function p3(sel,kto,msid,tag1,tag2){if(!sel && !tag1){alert('Для вставки цитаты необходимо выделить нужное мышью.');}else {if (kto) {sel = kto + ' пишет: \n' +'[quote]' + sel + '[/quote] ';}if ((document.selection)){document.theForm.message.focus();document.theForm.document.selection.createRange().text = tag1+sel+document.theForm.document.selection.createRange().text+tag2;} else {document.theForm.message.value += tag1+sel+tag2;}if(msid){theForm.msgid.value = msid;}}}
function p5(){var URL = prompt("Введите адрес картинки. ВНИМАНИЕ: допустимые символы: буквы, цифры, точка, тильда, подчеркивание, косая черта, дефис","");if (!URL || URL.indexOf('http://') == -1 || URL.indexOf(' ') != -1) {alert('Ошиблись при вводе адреса!'); return;}p3(URL,'','','[img src=',']');}
function p6(){var URL = prompt("Введите ссылку с http или ftp","");if (!URL || (URL.indexOf('http://') == -1 && URL.indexOf('ftp://') == -1) || URL.indexOf(' ') != -1) {alert('Ошиблись при вводе ссылки!'); return;}var OP = prompt("Введите описание ссылки","");if (!OP) {OP='click here';}p3('','','','[url='+URL,']'+OP+'[/url]');}

//----------------------------форма ответа
function form(pr_tab,titl,mesg,poll){
if (work==0 || work==2) {var chto='Новая тема';var work_form=2;if (razdel==21){var chto='Объявление';}}if (work==1 || work==6) {var chto='Ваш ответ';var work_form=6;}if (work==3) {var chto='Новый опрос';var work_form=3;}if (work==7) {var chto='Правка';var work_form=7;}if (work==4) {var chto='Личное сообщение';var work_form=4;}
document.write('<FORM name=theForm action="index.pl" method=POST onsubmit="return Test(this)"><input type=hidden name=work value="'+work_form+'"><input type=hidden name=razdel value="'+razdel+'"><input type=hidden name=start value="'+start+'"><input type=hidden name=filenumber value="'+filenumber+'"><input type=hidden name=msgid value="'+msgid+'"><input type=hidden name=start_page_re value="'+start_page_re+'"><input type=hidden name=adresat value="'+adresat+'"><input type=hidden name=only_new_re value="'+only_new_re+'"><input type=hidden name=statisc value="'+statisc+'">');
if (pr_tab==1) {document.write('<TABLE bgColor="'+diz[8]+'" border=0 cellPadding=0 cellSpacing=1 width=100%><TR><TD><TABLE bgColor="'+diz[6]+'" border=0 cellPadding=6 cellSpacing=1 width=100%>');}
if (gb==0){
document.write('<TR bgColor="'+diz[5]+'"><TD width=25% class=font1><b>'+chto+': </b></td><TD class=font2><input type=Text style="width:380" name=title size=53 maxlength="100" value="'+titl+'"> заголовок</TD></TR>');
document.write('<TR bgColor="'+diz[5]+'" class=font2><TD vAlign=top width=25%><br><br>IP: <a target=_blank href=http://www.ripe.net/perl/whois?'+ip+'><u>'+ip+'</u></a>');
if(prof){document.write('<br>Профиль: <a target=_blank href="index.pl?32-'+prof+'"><u>'+nick+'</u></a>');}
document.write('</td><TD>');if (work==3 || poll) {document.write('Ответы голосования (1 на каждой строке, 10 - максимально):');
if (work==7) {document.write('<br><font color=red>Результаты голосования после правки будут обнулены!</font>');}
poll=poll.replace(/ <BR> /ig,'\r');document.write('<br><textarea wrap=soft name=poll cols=56 rows=8>'+poll+'</textarea><br>Сообщение:');}}
if (gb==1){document.write('<TR bgColor="'+diz[5]+'" class=font2><TD>');}
mesg=mesg.replace(/ <BR> /ig,'\r');mesg=mesg.replace(/<a target=_blank href="/ig,'');

//временно
mesg=mesg.replace(/<blockquote><b><small>цитата<\/small><\/b><hr size=1>/ig,'[quote]');
mesg=mesg.replace(/<blockquote><b><small>quote<\/small><\/b><hr size=1>/ig,'[quote]');
mesg=mesg.replace(/<hr size=1><\/blockquote>/ig,'[\/quote]');

mesg=mesg.replace(/</ig,'[');mesg=mesg.replace(/>/ig,']');mesg=mesg.replace(/="/ig,'=');mesg=mesg.replace(/"\]/ig,']');
if (group>=gr_bui){
document.write("<A href=javascript:p3('','','','[b]','[/b]');><IMG src=gif/sm/bold.gif width=15 height=13 border=0 alt='жирный'></a>  <A href=javascript:p3('','','','[u]','[/u]');><IMG src=gif/sm/u.gif width=15 height=13 border=0 alt='подчеркнутый'></a>  <A href=javascript:p3('','','','[i]','[/i]');><IMG src=gif/sm/i.gif width=15 height=13 border=0 alt='наклонный'></a>  ");
document.write("<A href=javascript:p3('','','','[font%20color=red]','[/font]');><IMG src=gif/sm/r.gif width=15 height=13 border=0 alt='красный'></a>  <A href=javascript:p3('','','','[font%20color=green]','[/font]');><IMG src=gif/sm/g.gif width=15 height=13 border=0 alt='зеленый'></a>  <A href=javascript:p3('','','','[font%20color=blue]','[/font]');><IMG src=gif/sm/b.gif width=15 height=13 border=0 alt='синий'></a>  ");
}
if (group>=gr_gif){
document.write('<A href=javascript:p5();><IMG src=gif/sm/img.gif width=15 height=13 border=0 alt="вставка картинки"></a>  ');
}
if (group>=gr_mat){
document.write('<A href=javascript:p6();><IMG src=gif/sm/url.gif width=15 height=14 border=0 alt="вставка ссылки"></a>  ');
}
document.write("<a href=javascript:window.open('gif/sm/kb.htm','','width=400,height=120');void(0);><IMG src=gif/sm/kb.gif width=15 height=13 border=0 alt='русская клавиатура'></a> <a href=javascript:window.open('gif/sm/lat.htm','','width=400,height=350,resizable=yes');void(0);><IMG src=gif/sm/tr.gif width=15 height=13 border=0 alt='транслитератор'></a> ");
if (!gb){document.write("<A href=javascript:p3('','','','[quote]','[/quote]');><IMG src=gif/sm/qte.gif width=15 height=13 border=0 alt='цитата'></a> ");}
document.write("<A href=javascript:p3('','','','«','»');><IMG src=gif/sm/kav.gif width=15 height=13 border=0 alt='кавычки'></a><br>");
document.write('<textarea wrap=soft name=message cols=56 rows=8>'+mesg+'</textarea><MAP name=smilies>');
var map1 = new Array ('3','17','31','45','59','73','87','101','115','129','143','157','171','185','199','213','227','241','255','269','283','297','311','325','339','354','368','383');
var map2 = new Array ('16','30','44','58','72','86','100','114','128','142','156','170','184','198','212','226','240','254','268','282','296','310','324','338','353','367','382','396');
for(i=10;i<38;i++){document.write('<AREA shape=rect coords="'+map1[i-10]+',3,'+map2[i-10]+',17" href="javascript:p3(\' :sm'+i+': \',\'\',\'\',\'\',\'\')">');}
document.write('</MAP><br>');
if (group>=gr_sm){
document.write('<IMG align=absmiddle src=gif/sm/all.gif width=398 height=20 border=0 usemap="#smilies">  <a href="javascript:window.open(\'gif/sm/osn.htm\',\'\',\'width=600,height=600\');void(0)"><IMG src=gif/sm/sm101.gif width=23 height=15 border=0></a>');
}
document.write('</TD></TR><TR bgColor="'+diz[5]+'" class=font2><TD>');
if ((work==7 || work==4) && gb==0){document.write(' </td><TD>');}
else{if (gb==0){document.write('Имя, пароль:</td><TD>');} if(work!=7){document.write('<input type=text name=nick size=10 maxlength=20 value="'+nick+'">  <input type=password name=pass size=10 maxlength=20 value="'+pass+'"> <input type=checkbox style="border:0" name=newreg>  зарегистрироваться    ');}}
if (work==7){
document.write('<input type=checkbox style="border:0" name=del>  удалить   ');
if (gb==0){document.write('<input type=checkbox style="border:0" name=nopod>  без автоподписи   ');
if (msgid=='000'){if (group==4 || (group==3 && (modraz.indexOf(' '+razdel+' ') != -1 || raz.length==0))) {
if (cls==1){document.write('<input type=checkbox style="border:0" name=otkr>  открыть   ');}
else{document.write('<input type=checkbox style="border:0" name=zak>  закрыть   ');}}}}
}
document.write('<INPUT class=sender type=Submit value="Отправить"></TD></TR>');
if (pr_tab==1) {document.write('</table></td></tr></table>');}
document.write('</FORM>');}
//----------------------------форма ответа

//------------------------------------навигатор страниц тем
function pages(max_lines) {
var pagesline = '';if (work==''){work=0;}
var activ_number_page = start/tem_on_page+1;var gr = Math.floor(start/(tem_on_page*20))+1;
var right = gr*tem_on_page*20;var left = tem_on_page*20*(gr-1) - tem_on_page; var start_page_group = (gr-1)*20+1;
var end_page_group = gr*20; if (gr > 1) {pagesline=pagesline+'<a href="index.pl?'+work+'-'+razdel+'-'+left+'">«</a> '}
for (i=start_page_group;i<=end_page_group;i++) {var start2 = (i-1)*tem_on_page;
if (start2 < max_lines) {if (i == activ_number_page) {pagesline=pagesline+'<b>'+i+'</b> ';}
else {pagesline=pagesline+'<a href="index.pl?'+work+'-'+razdel+'-'+start2+'">'+i+'</a> ';}
}}if (right < max_lines) {pagesline=pagesline+' <a href="index.pl?'+work+'-'+razdel+'-'+right+'">»</a>';}
return pagesline;}