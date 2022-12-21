//---------------------------шапка форумов
function shapka(ban,pre,ls,linknews){
if (!prof) {document.write('<FORM action="index.pl" method=POST>');}
document.write('<TABLE bgColor="'+diz[8]+'" border=0 cellPadding=0 cellSpacing=1 width=100%><TR><TD><TABLE bgColor="'+diz[6]+'" border=0 cellPadding=6 cellSpacing=1 width=100%><TR><TD bgColor="'+diz[3]+'" class=font2 valign=top>');


document.write('<table width=100% border=0 cellPadding=0 cellSpacing=0><tr><td>'+reklama_verh+'</td><td align=right>');
if (!prof) {document.write('<table border=0 cellPadding=0 cellSpacing=0><tr class=font2><td> <input type=text name=nick size=10 maxlength=20 value="'+nick+'"> <input type=password name=pass size=10 maxlength=20> <INPUT class=sender type=Submit value="Вход"></td></tr><tr class=font2><td><input type=checkbox style="border:0" name=newreg> - зарегистрироваться</td></tr></table>');}
else {document.write('<FORM action="index.pl" method=POST><input type=text name=chto size=12 maxlength=100 value=""><input type=hidden name=work value=16> <INPUT class=sender type=Submit value="поиск">');}
document.write('</td></tr></table>');


document.write('</TD></TR><TR><TD class=font2 bgColor="'+diz[2]+'" align=center><br>');

document.write('<a href="index.pl"><u>Главная</u></a> • <a href="index.pl?13"><u>Участники</u></a> • ');
if (prof) {document.write('<a href="index.pl?32-'+prof+'"><u>Профиль '+nick+'</u></a> • ');
if (group==4) {document.write('<a href="index.pl?33"><u>Настройки</u></a> • ');}
if (group>2){if(ban){document.write('<a href="index.pl?14"><u>Банлист</u></a> • ');}
if(pre){document.write('<a href="index.pl?15"><u>Премодерация</u></a> • ');}}
document.write('<a href="index.pl?100"><u>Выход</u></a> • <a href="index.pl?99"><u>Все прочитано</u></a> • ');}
document.write('<a target=_blank href="gif/sm/instr.htm"><u>О форуме</u></a>');
if (group>2 && linknews) {document.write(' • <a target=_blank href="news.htm"><u><font color=red>Новости</font></u></a>');}


document.write('<br><br></TD></TR></TABLE></TD></TR></TABLE></FORM>');


document.write('<TABLE bgColor="'+diz[8]+'" border=0 cellPadding=0 cellSpacing=1 width=100%><TR><TD><TABLE bgColor="'+diz[6]+'" border=0 cellPadding=6 cellSpacing=1 width=100%><TR><TD bgColor="'+diz[4]+'" class=font2>На форуме: ');
var allus=users.length-1+guest;
for (i=0;i<users.length-1;i++) {if (prof && prof!=chknam[i]){
document.write('<a target=_blank href="index.pl?32-'+chknam[i]+'"><u>');}
document.write(users[i]);if (prof && prof!=chknam[i]){document.write('</u></a>');}document.write(', ');}
document.write(' гостей '+guest+'. Всего: '+allus);
document.write('</TD></TR></TABLE></TD></TR></TABLE><br>');


if (ls){document.write(' <a href="index.pl?34"><img src="'+diz[0]+'/privat.gif" border=0 alt="л.с"></a><br>');}
}
//---------------------------шапка форумов



//----------------------низ форумов 
function niz_forum(max_lines,ch_mail) {
if (noprintrazdel!=1 && (group==4 || (group==3 && (modraz.indexOf(' '+razdel+' ') != -1 || work==11 || work==16 || raz.length==0)))) {document.write('</form>');}
if (type==1 && (work==0 || work==11 || work==16)){document.write('</font>');}
else{if (work!=1) {document.write('</TABLE></TD></TR></TABLE>');}}
if (work!=1 && !noprintrazdel && work!=16) {
document.write('<table cellPadding=0 cellSpacing=0 width=100% height=28 border=0><tr><td class=font2><B>Страницы:</B> '+pages(max_lines)+'</td><td align=right><a href=javascript:window.scroll(0,0);><img src="gif/sm/up.gif" width=33 height=11 border=0 alt="вверх"></a></td></tr></table>');
if (form_new_off==0 && work!=11){form('1','','','');}}
if (!noprintrazdel){
document.write('<BR><TABLE align=center border=0 cellPadding=0 cellSpacing=1 width=100%>');
if (work==1 && razdel!=21 && !cls && group>0) {if(ch_mail){var chmail='checked';}document.write('<TR class=font2 valign=top><TD colspan=2><FORM action="index.pl" method=POST><input type=checkbox style="border:0" name=addmail '+chmail+'> - при поступлении ответов в тему известить меня по е-майл<input type=hidden name=work value="5"><input type=hidden name=razdel value="'+razdel+'"><input type=hidden name=start value="'+start+'"><input type=hidden name=filenumber value="'+filenumber+'"><input type=hidden name=msgid value="'+msgid+'"><input type=hidden name=start_page_re value="'+start_page_re+'"> <input type=hidden name=only_new_re value="'+only_new_re+'"><INPUT class=sender type=Submit value="ok"></FORM></TD></TR>');}
document.write('<TR class=font2 valign=top><TD>');
if (type==1) {document.write('(-) сообщения внутри нет<br><font color=red>(+)</font> новый ответ<br>(!) объявление администратора<br>(х) закрытая тема');}
else {if(work==1){document.write('<img src="gif/sm/pg1.gif" align=absmiddle width=15 height=15> - участник сейчас на форуме<br><img src="gif/sm/pg.gif" align=absmiddle width=15 height=15> - участник вне форума');}else{document.write('<IMG align=absmiddle src="'+diz[0]+'/l.gif"> - нет новых сообщений<BR><IMG align=absmiddle src="'+diz[0]+'/n.gif"> - в теме есть новые сообщения<BR><IMG align=absmiddle src="'+diz[0]+'/c.gif"> - обсуждение темы закончено<BR>');}}
document.write('</TD><TD align=right>Все даты в формате МСК ');var timezone_clock=(timezone-10800-leto)/3600;
if(timezone_clock>=0) {document.write('+');} document.write('<b>'+timezone_clock+'</b> час. Хитов сегодня: <B>'+count+'</B><BR>');
if (gr_sm>group) {var sm='<b>нет</b>';} else {var sm='<b>да</b>';} if (gr_gif>group) {var gif='<b>нет</b>';} else {var gif='<b>да</b>';}if (gr_bui>group) {var bui='<b>нет</b>';} else {var bui='<b>да</b>';}if (group<1) {var vote='<b>нет</b>';} else {var vote='<b>да</b>';}if (group >= gr_avr_send) {var avr_send='<b>да</b>';} else {var avr_send='<b>нет</b>';}if (gr_mat>group) {var mat='<b>откл</b>';} else {var mat='<b>вкл</b>';}if (protektion>2 && group==0) {var pre='<b>вкл</b>';} else {var pre='<b>откл</b>';}if (gr_edit>group) {var edit='<b>нет</b>';} else {var edit='<b>да</b>';}
document.write('Права: смайлы '+sm+', картинки '+gif+', шрифты  '+bui+', голосования '+vote+'<br>аватары '+avr_send+', автозамена ссылок '+mat+', премодерация '+pre+', правка '+edit);
document.write('</TD></TR></TABLE>');}}

//----------------------голосования
function ch_golos(rnggol) {e=document.getElementsByTagName("TR");for(i=0;i<e.length;i++){if (e[i].id.indexOf('lay')!=-1){e[i].style.visibility="hidden";e[i].style.position="absolute";}for (w=0;w<3;w++) {var j=w+1;var lay='lay'+j;if (rnggol==w) {if(e[i].id == lay){e[i].style.visibility="visible";e[i].style.position="relative";}}}}}
function golos_verh(){document.write('<FORM action="index.pl" method=POST><input type=Hidden name=razdel value="'+razdel+'"><input type=Hidden name=filenumber value="'+filenumber+'"><input type=Hidden name=msgid value="000"><input type=Hidden name=work value=8><input type=Hidden name=start value="+start+"><INPUT type=Hidden name=start_page_re value="'+start_page_re+'"><INPUT type=Hidden name=only_new_re value="'+only_new_re+'"><TABLE bgColor="'+diz[8]+'" align=center border=0 cellPadding=0 cellSpacing=2 width=100%><TR><TD><TABLE align=center bgColor="'+diz[6]+'" border=0 cellPadding=6 cellSpacing=1 width=100%><TR class=font5 bgColor="'+diz[1]+'"><TD>Показать: <input type=radio style="border:0" name=ranggolos checked onclick="javascript:ch_golos(\'0\');"> все голоса <input type=radio style="border:0" name=ranggolos onclick="javascript:ch_golos(\'1\');"> без новичков <input type=radio style="border:0" name=ranggolos onclick="javascript:ch_golos(\'2\');"> ветераны </TD></TR><TR><TD bgColor="'+diz[4]+'"><br>');}
function golos_line(pollnum,vopros,rezultat1,rezultat2,rezultat3,allrezultat1,allrezultat2,allrezultat3){
var rez = new Array (rezultat1,rezultat2,rezultat3);
var allrez = new Array (allrezultat1,allrezultat2,allrezultat3);var viz='relative;visibility:visible';
for (i=0;i<3;i++) {var procent_a = 0;var procent_b = 0;var j=i+1;
if (allrez[i]>0) {procent_a = (rez[i]*100/allrez[i]);}procent_b = Math.floor(procent_a);var procent_c = procent_a - procent_b;procent_c = procent_c+'000';var procent = ' ('+procent_b+'.'+procent_c.substring(2,4)+'%)';
document.write('<TABLE border=0 cellPadding=0 cellSpacing=0 width=100%><TR valign=top id="lay'+j+'" style="position:'+viz+';" class=font2 bgColor="'+diz[4]+'"><TD width=33%><input type="radio" style="border:0" name="golos" value="'+pollnum+'"> '+vopros+'<br><br></TD><TD width=15% nowrap>     '+rez[i]+procent+'</TD><TD width=60%> <img src="'+diz[0]+'/pl1.gif" width=5 height=10><img src="'+diz[0]+'/pl.gif" width="'+procent_b+'" height=10><img src="'+diz[0]+'/pl2.gif" width=5 height=10></TD></TR></TABLE>');
viz='absolute;visibility:hidden';}}
function golos_niz(allrezultat1,allrezultat2,allrezultat3,povtor){
document.write('</TD></TR><TR><TD bgColor="'+diz[4]+'">');
var allrez = new Array (allrezultat1,allrezultat2,allrezultat3);var viz='relative;visibility:visible';
for (i=0;i<3;i++) {var j=i+1;document.write('<TABLE border=0 cellPadding=0 cellSpacing=0 width=100%><TR id="lay'+j+'" style="position:'+viz+';" class=font2 bgColor="'+diz[4]+'"><TD width=25%>');
if (group>0 && povtor!=1) {document.write('<INPUT class="golos" type="Submit" value="Голосовать">');}
document.write('</TD><TD align=right>Всего голосов: <B>'+allrez[i]+'</B></TD></TR></TABLE>');
viz='absolute;visibility:hidden';}document.write('</TD></TR></TABLE></TD></TR></TABLE></FORM><BR>');
}
//----------------------голосования

//------------------------------------------- main.pl
function main(newmess){
document.write('<TABLE border=0 cellPadding=0 cellSpacing=0 width=100% height=35><TR class=font2><TD>Текущее время: '+data(servertime,timezone,1)+'</TD><TD align=right>');
if (newmess==1){document.write('[<a href="index.pl?11"><u>выбрать темы с новыми ответами</u></a>] ');}
document.write('</TD></TR></TABLE><TABLE bgColor="'+diz[8]+'" border=0 cellPadding=0 cellSpacing=2 width=100%><TR><TD><TABLE bgColor="'+diz[6]+'" border=0 cellPadding=6 cellSpacing=1 width=100%><TR bgColor="'+diz[1]+'" class=font5 align=center><TD width=66% colspan=2>Форум</TD><TD width=10%>Темы</TD><TD width=24%>Последняя тема</TD></TR>');}
function st(razdel,line1,line2,privat,lastdata,tem,dopusk) {
var newmess=0;document.write('<TR valign=top><TD bgcolor="'+diz[4]+'" width=1%>');
if (privat==1) {var but1_s='cn';var but2_s='co';}else{var but1_s='nb';var but2_s='lb';}
if ((lastdata > lasttime) && lasttime) {document.write('<IMG src="'+diz[0]+'/'+but1_s+'.gif" alt="+">');newmess=1;}
else{document.write('<IMG src="'+diz[0]+'/'+but2_s+'.gif" alt="-">');newmess=0;}
document.write('</TD><TD class=font3 bgcolor="'+diz[4]+'"><a href="index.pl?0-'+razdel+'">'+line1+'</a><BR><div class=font2>'+line2+'</font></TD><TD class=font2 bgcolor="'+diz[2]+'" align=center valign=center>'+tem+'</TD><TD class=font2 bgcolor="'+diz[2]+'" align=center valign=center>');
if (tem==0 || dopusk==0) {if (dopusk==1){document.write('тем нет');}else{document.write('нет доступа');}} 
else {document.write(data(lastdata,timezone));}
document.write('</TD></TR>');}
function st2(razdel2){document.write('<TR class=font6><TD bgcolor="'+diz[3]+'" colspan=4>'+razdel2+'</TD></TR>');}
function main2(vsegouser,alltem) {
document.write('</TABLE></TD></TR></TABLE><div class=font2 align=right><BR>Часовой пояс МСК ');
var timezone_clock=(timezone-10800-leto)/3600;
if(timezone_clock>=0) {document.write('+');}
document.write(timezone_clock+' час.<BR></div><TABLE bgColor="'+diz[8]+'" border=0 cellPadding=0 cellSpacing=2 width=100%><TR><TD><TABLE bgColor="'+diz[6]+'" border=0 cellPadding=6 cellSpacing=1 width=100%><TR bgColor="'+diz[3]+'" class=font3><TD colspan=2>Статистика:</TD></TR><TR bgcolor="'+diz[4]+'"><TD width=1%><IMG src="'+diz[0]+'/o.gif" alt=""></TD><TD><div class=font2>Всего тем в форуме: <B>'+alltem+'</B><BR>Зарегистрированных участников: <B>'+vsegouser+'</B><BR>Хитов сегодня: <B>'+count+'</B><BR>');
if(lasttime) {document.write('Последний раз Вы заходили: '+data(lasttime,timezone,1)+'<BR>');}
if(prof){document.write('Вы зашли как: '+nick+'<BR>');}
document.write('Ваш статус: ');var gr = new Array ('гость','участник','постоянный участник','модератор','администратор');document.write(gr[group]);
document.write('</div></TD></TR></TABLE></TD></TR></TABLE><br><div class=font2 align=center><IMG align=absmiddle src="'+diz[0]+'/n.gif"> - есть новые сообщения     <IMG align=absmiddle src="'+diz[0]+'/l.gif"> - нет новых сообщений    <IMG align=absmiddle src="'+diz[0]+'/c.gif"> - приватный раздел</div>');
}
//------------------------------------------- main.pl

//-----------------------навигатор разделов
function chmove(){if(document.forms[1].movebox.checked){return '-0-'+filenumber+'-'+razdel}else{return ''}}
function navigator_forum(max_lines,titletema,cls,niz) {
if (titletema){titletema=titletema.replace(/Vote: /g,'Голосование: ');}
var txt='';var no_buton=0;
if (work==11) {txt='темы с новыми ответами';}if (work==16) {txt='результаты поиска';}if (work==2) {txt='новая тема';} if (razdel==21) {txt='объявление администратора';} if (work==3) {txt='новый опрос';}if (work==6) {txt='ответ';} if (work==7) {txt='правка';} if (work==4) {txt='личное сообщение';}if (only_new_re==1) {txt='только новые';}
if (niz==1) {if (form_re_off==0 && razdel !=21 && cls != 1 && work!=11 && work!=16){form('','','','');}document.write('</TABLE></TD></TR></TABLE>');}
if (niz==1 || work==11 || work==16 || razdel==21 || work==2 || work==3 || work==4 || noprintrazdel==1) {no_buton=1;}
document.write('<TABLE cellPadding=0 cellSpacing=0 border=0 width=100%><TR><TD class=font2 valign=top');
if (no_buton==0 && work!=0) {document.write(' rowspan=2');}
document.write('><br>');
if (work!=0 || raz.length !=0) {document.write('<A href="index.pl"><u>'+bl+'</u></A>');}
if (raz.length !=0 && work!=11 && work!=16 && razdel<21){document.write(' » <a href="index.pl?0-'+raz[raz.length-1]+'-0"><u>'+raz[raz.length-2]+'</u></a>');}
if ((work==1 || work==4 || work==6 || work==7) && razdel<21) {
if (!titletema){document.write(' » <A href="index.pl?1-'+razdel+'-'+start+'-'+filenumber+'-000-'+start_page_re+'-'+only_new_re+'"><u>Сообщение</u></a>');}
else {document.write(' » <A href="index.pl?1-'+razdel+'-'+start+'-'+filenumber+'-'+msgid+'-'+start_page_re+'-'+only_new_re+'"><u>'+titletema+'</u></a>');}
} if (txt) {document.write(' » '+txt);}
document.write('<BR><BR>');
if (work == 11){document.write('<BR><B>Страницы:</B> '+pages(max_lines)+'<BR><BR><BR>');}
if (work == 16 && max_lines>50){document.write('<BR>Найдено более 50 совпадений. Выведено первые 50.<BR><BR><BR>');}
document.write('</TD><TD nowrap class=font4 align=right width=40%>');
if (no_buton==0) { if (form_new_off == 1 || work==1 || work==7) { 
if (graf_but_off == 1) {if (work==1 && (cls!=1)){if (form_re_off == 1) {document.write('<A href="index.pl?6-'+razdel+'-'+start+'-'+filenumber+'-'+msgid+'-'+start_page_re+'-'+only_new_re+'"><u>Ответить</u></A> ');}else {document.write('<A nomouseover="window.status=\'Ответить\';return true;" onMouseOut="window.status=\'\';return true;" href="javascript:f3(\''+msgid+'\');"><u>Ответить</u></A> ');}}document.write('<A href="index.pl?2-'+razdel+'"><u>Новая тема</u></A> <A href="index.pl?3-'+razdel+'"><u>Новый опрос</u></A>');if (group==4) {document.write(' <A href="index.pl?2-21"><u>Объявление</u></A>');}} 
else {if (work==1 && (cls!=1)) {if (form_re_off == 1) {document.write('<A href="index.pl?6-'+razdel+'-'+start+'-'+filenumber+'-'+msgid+'-'+start_page_re+'-'+only_new_re+'"><IMG src="'+diz[0]+'/rt.gif" border=0 alt="Ответить"></A> ');}else {document.write('<A nomouseover="window.status=\'Ответить\';return true;" onMouseOut="window.status=\'\';return true;" href="javascript:f3(\''+msgid+'\');"><IMG src="'+diz[0]+'/rt.gif" border=0 alt="Ответить"></A> ');}}document.write('<A href="index.pl?2-'+razdel+'"><IMG src="'+diz[0]+'/nt.gif" border=0 alt="Новая тема"></A> <A href="index.pl?3-'+razdel+'"><IMG src="'+diz[0]+'/pt.gif" border=0 alt="Новый опрос"></A>');if (group==4) {document.write(' <A href="index.pl?2-21"><IMG src="'+diz[0]+'/shp.gif" border=0 alt="Объявление"></A>');}} 
}else {if (graf_but_off == 1) {document.write('<A href="javascript:document.theForm.message.focus();"><u>Новая тема</u></A> <A href="index.pl?3-'+razdel+'"><u>Новый опрос</u></A>');if (group==4) {document.write(' <A href="index.pl?2-21"><u>Объявление</u></A>');}} 
else {document.write('<A href="javascript:document.theForm.message.focus();"><IMG src="'+diz[0]+'/nt.gif" border=0 alt="Новая тема"></A> <A href="index.pl?3-'+razdel+'"><IMG src="'+diz[0]+'/pt.gif" border=0 alt="Новый опрос"></A>');if (group==4) {document.write(' <A href="index.pl?2-21"><IMG src="'+diz[0]+'/shp.gif" border=0 alt="Объявление"></A>');}}
}document.write('</TD></TR><TR>');
if (work == 0){document.write('<TD class=font2><B>Страницы:</B> '+pages(max_lines)+'</TD>');}
document.write('<TD class=font2 align=right>');} 
if (raz.length !=0) {
document.write('<br><form><select name=sel OnChange="top.location.href = this.options[this.selectedIndex].value');
if (niz != 1 && work==1 && (group==4 || (group==3 && (modraz.indexOf(' '+razdel+' ') != -1)))) {document.write('+chmove()');}
document.write('"><option selected value="#">Переход по разделам форума</option>');
for(i=1;i<raz.length;i++){document.write('<option value="?0-'+raz[i]+'">'+raz[i-1]+'</option>');i++;}
document.write('</select>');
if (niz != 1 && work==1 && (group==4 || (group==3 && (modraz.indexOf(' '+razdel+' ') != -1)))) {
document.write('<br>перенести тему<input type=checkbox style="border:0" name=movebox>');}
document.write('</form>');
} else {document.write('<BR><BR><BR>');}
document.write('</TD></TR></TABLE>'); 
if (work==0 || work==11 || work==16) {if (type==1) {document.write(diz[10]+'<font class=font1>'); 
if (group==4 || (group==3 && (modraz.indexOf(' '+razdel+' ') != -1 || work==11 || work==16 || raz.length ==0))) {document.write('<ul><form method="post" action="index.pl"><INPUT type=Hidden name=work value=10>'); if (work==11){document.write('<input type=hidden name=see_new value=1>');} if (work==16){document.write('<input type=hidden name=search value=1>');}document.write('<INPUT type=Hidden name=razdel value="'+razdel+'"><INPUT type=Hidden name=start value="'+start+'"><INPUT class=sender type=Submit value="x"></ul>');}
if (noprintrazdel==1) {document.write('<ul><li><div class=font2>У Вас нет доступа в этот раздел. Для получения доступа свяжитесь с администратором.</div></li></ul>'+diz[10]);}
}else {document.write('<TABLE bgColor="'+diz[8]+'" border=0 cellPadding=0 cellSpacing=2 width=100%><TR><TD><TABLE bgColor="'+diz[6]+'" border=0 cellPadding=6 cellSpacing=1 width=100%><TR bgColor="'+diz[1]+'" class=font5><TD width=1%>&nbsp;</TD><TD width=60%>Тема</TD><TD width=5%>Ответов</TD><TD width=5%>Просм.</TD><TD width=5% align=middle>Рейтинг</TD><TD width=10% align=middle>Тема открыта</TD><TD width=14% align=middle>Последний ответ</TD>');
if (group==4 || (group==3 && (modraz.indexOf(' '+razdel+' ') != -1 || work==11 || work==16 || raz.length ==0))) {document.write('<td align=center><form method="post" action="index.pl"><INPUT type=Hidden name=work value=10>'); if (work==11){document.write('<input type=hidden name=see_new value=1>');} if (work==16){document.write('<input type=hidden name=search value=1>');}document.write('<INPUT type=Hidden name=razdel value="'+razdel+'"><INPUT type=Hidden name=start value="'+start+'"><INPUT class=sender type=Submit value="x"></td>');}
document.write('</TR>');
if (noprintrazdel==1) {document.write('<TR bgcolor="'+diz[4]+'" valign=top><TD><IMG src="'+diz[0]+'/c.gif" alt=""></TD><TD class=font2 colspan=6>У Вас нет доступа в этот раздел. Для получения доступа свяжитесь с администратором.</TD></TR>');}}}} 

//-----------хинты
document.write(" <div id='hint' style='position:absolute;visibility:hidden;z-index:200;'></div>");
Xoffset=10;Yoffset=30;var hinttab;
var NS4=document.layers;var NS6=document.getElementById&&!document.all;var IE=document.all;
if (NS4){hinttab=document.hint;}
else if (NS6){hinttab=document.getElementById("hint").style;}
else if (IE){hinttab=document.all.hint.style;}
if(NS4){document.captureEvents(Event.MOUSEMOVE);}
else{hinttab.visibility="visible";hinttab.display="none"}
document.onmousemove=get_mouse;
function on(txx) {
var tx="<TABLE bgColor=#000000 border=0 cellPadding=6 cellSpacing=1 width=300><tr bgColor=#ffffe1><td style='font:11px Verdana;COLOR:#000000;'>" + txx + "</td></tr></table>";
if(NS4){hinttab.document.write(tx);hinttab.document.close();hinttab.visibility="visible";}
if(NS6){document.getElementById("hint").innerHTML=tx;hinttab.display='';}
if(IE) {document.all("hint").innerHTML=tx;hinttab.display='';}}
function get_mouse(e) {var x=((NS4||NS6) ? e.pageX : event.x+document.body.scrollLeft);hinttab.left=x+Xoffset;var y=((NS4||NS6)? e.pageY : event.y+document.body.scrollTop);hinttab.top=y+Yoffset;}
function off() {if (NS4){hinttab.visibility="hidden";}else if (NS6||IE){hinttab.display="none";}}


//----------------------------- печать ответа в re.pl
function mo(nick_t,title_t,message_t,pod_t,rang_t,data_t,vsegomess_t,chkname_t,komu_t,cls_t,msgid_t,numcolor,ip_t){
title_t=title_t.replace(/Vote: /g,'Голосование: ');
message_t=message_t.replace(/\[\/quote\]/g,"`");message_t=message_t.replace(/\[quote\]([^`]+)`/g, "<br><table align=center border=0 width=90%><tr><td class=font2> <small><b>цитата:</b></small></td></tr><tr><td><TABLE align=center bgColor=\"#seriycvet\" border=0 cellPadding=6 cellSpacing=1 width=100%><TR bgColor=\"#beliycvet\"><TD vAlign=top class=font2>$1</TD></TR></TABLE></td></tr></table><br>");
message_t=message_t.replace(/#seriycvet/g,diz[6]);
message_t=message_t.replace(/#beliycvet/g,diz[4]);
var allstat = ip_t;allstat=allstat.replace(/^[^`]*/ig,'');allstat=allstat.replace(/`/ig,' ');ip_t=ip_t.replace(/`\S*/ig,'');
var nick_kav=nick_t.replace(/&#39;/ig,'\\&#39;');
var zvanie='';for (i=0;i<zv.length;i++) {if (zv[i] == chkname_t) {zvanie = zv[i+1];
if (zvanie=='administrator') {zvanie='администратор';}
if (zvanie=='moderator') {zvanie='модератор';}
if (zvanie=='advanced member') {zvanie='постоянный участник';}
}} if (zvanie=='') {zvanie = diz[20];for (i=10;i>0;i--) {if (vsegomess_t <= i*i*i) {zvanie = diz[i+10];}}}
if (!msgid_t){msgid_t = msgid;document.write('<TABLE bgColor="'+diz[8]+'" align=center border=0 cellPadding=0 cellSpacing=2 width=100%><TR><TD><TABLE align=center bgColor="'+diz[6]+'" border=0 cellPadding=6 cellSpacing=1 width=100%><TR align=center class=font5 bgColor="'+diz[1]+'"><TD width=25%>Автор</TD><TD width=75%>Сообщение</TD></TR>');}
var online=''; for (i=0;i<users.length-1;i++) {if (users[i] == nick_t) {online = 1;break;}}
document.write('<TR bgColor="'+diz[numcolor]+'"><TD vAlign=top>');
if (cls_t != 1 && form_re_off != 1) {document.write('<A nomouseover="window.status=\''+nick_kav+'\';return true;" onMouseOut="window.status=\'\';return true;" href="javascript:p3(\''+nick_kav+'\',\'\',\''+msgid_t+'\',\'[b]\',\'[/b]\\n\');">');} document.write('<div class=font3><b>'+nick_t+'</b></div>');if (cls_t != 1 && form_re_off != 1) {document.write('</A>');}
document.write('<div class=font2>'+zvanie+'<br> '+ran(rang_t)+'<br>');
if (avr_off != 1) {for (i=0;i<avr.length;i++) {var avrname = chkname_t+'.gif';if (avr[i] == avrname) {var ras='gif'; break;}else {var avrname = chkname_t+'.jpg';if (avr[i] == avrname) {var ras='jpg'; break;}}avrname='';} if(avrname){var lat = forum.substring(0,1);document.write('<br><img src="'+avrd+'/avr/'+lat+'/'+forum+'/avatar/'+avrname+'"><br><br>');}}
document.write('<br>');
if (vsegomess_t) {document.write('Сообщение: #'+vsegomess_t);}
else {document.write('не зарегистрирован');}
var aname1='';var aname2='';if (!only_new_re){var aname1='<a href="index.pl?1-'+razdel+'-'+start+'-'+filenumber+'-000-'+start_page_re+'-0#'+msgid_t+'" name="'+msgid_t+'">';var aname2='</a>';}
document.write('</div></TD><TD vAlign=top><div class=font2>'+aname1+'<IMG src="gif/sm/p.gif" border=0 width=12 height=9>'+aname2+' Отправлено: '+data(data_t,timezone)+'. Заголовок: '+title_t);
if (komu_t) {allfilenum = filenumber+'-'+msgid_t;allfilenum=allfilenum.replace(/\S{4}$/,'');document.write('    [<A target=_blank href="index.pl?9-'+razdel+'-'+start+'-'+allfilenum+'"><u>Re:'+komu_t+'</u></a>]');}
if (data_t > lasttime && lasttime){document.write('<font color=red> - новое!</font>');}
document.write('</div><hr size=1 color="'+diz[9]+'"><div class=font1><BR>'+message_t+'<BR><BR></div>');
if (pod_t) {document.write('<br><div class=font2><i>'+pod_t+'</i></div>')}
document.write('</td></tr><tr bgColor="'+diz[numcolor]+'"><td><TABLE border=0 cellPadding=0 cellSpacing=0 width=100%><TR><TD><a href=javascript:window.scroll(0,0);><img src="gif/sm/up.gif" width=33 height=11 border=0 alt="вверх"></a></TD><TD align=right><IMG src="gif/sm/pg'+online+'.gif" width=15 height=15></TD></TR></TABLE></td><td><TABLE border=0 cellPadding=0 cellSpacing=0 width=100%><TR><TD class=font1>');
if (graf_but_off == 1) {if (((group>2 && (modraz.indexOf(' '+razdel+' ') != -1 || group==4 || raz.length ==0) || ((prof == chkname_t) && prof))) && (servertime-data_t<3600 || group>=gr_edit)) {document.write('<A href="index.pl?7-'+razdel+'-'+start+'-'+filenumber+'-'+msgid_t+'-'+start_page_re+'-'+only_new_re+'"><u>Правка</u></A>  ');}
if (chkname_t) {document.write('<a target=_blank href="index.pl?32-'+chkname_t+'"><u>Профиль</u></a> ');}
if (chkname_t && chkname_t != prof && prof) {document.write('<A href="index.pl?4-'+razdel+'-'+start+'-'+filenumber+'-'+msgid_t+'-'+start_page_re+'-'+only_new_re+'-'+chkname_t+'"><u>Л.C</u></A> ');}
if (cls_t != 1 && form_re_off != 1) {document.write('<A nomouseover="get_selection();window.status=\'Цитировать '+nick_kav+'\';return true;" onMouseOut="window.status=\'\';return true;" href="javascript:p3(selek,\''+nick_kav+'\',\''+msgid_t+'\',\'\',\'\');"><u>Цитата</u></A> ');}
if (cls_t != 1 && razdel != 21) {if (form_re_off == 1) {document.write('<A href="index.pl?6-'+razdel+'-'+start+'-'+filenumber+'-'+msgid_t+'-'+start_page_re+'-'+only_new_re+'"><u>Ответить</u></A>');} else {document.write('<A nomouseover="window.status=\'Ответить '+nick_kav+'\';return true;" onMouseOut="window.status=\'\';return true;" href="javascript:f3(\''+msgid_t+'\');"><u>Ответить</u></A>');}}
}else{if (((group>2 && (modraz.indexOf(' '+razdel+' ') != -1 || group==4 || raz.length==0) || ((prof == chkname_t) && prof))) && (servertime-data_t<3600 || group>=gr_edit)) {document.write('<A href="index.pl?7-'+razdel+'-'+start+'-'+filenumber+'-'+msgid_t+'-'+start_page_re+'-'+only_new_re+'"><IMG src="'+diz[0]+'/p.gif" border=0 alt="Правка"></A> ');}
if (chkname_t) {document.write('<A target=_blank href="index.pl?32-'+chkname_t+'"><IMG src="'+diz[0]+'/pr.gif" border=0 alt="Профиль"></A> ');}
if (chkname_t && chkname_t != prof && prof) {document.write('<A href="index.pl?4-'+razdel+'-'+start+'-'+filenumber+'-'+msgid_t+'-'+start_page_re+'-'+only_new_re+'-'+chkname_t+'"><IMG src="'+diz[0]+'/ls.gif" border=0 alt="Личное сообщение"></A> ');}
if (cls_t != 1 && form_re_off != 1 && razdel != 21) {document.write('<A nomouseover="get_selection();window.status=\'Цитировать '+nick_kav+'\';return true;" onMouseOut="window.status=\'\';return true;" href="javascript:p3(selek,\''+nick_kav+'\',\''+msgid_t+'\',\'\',\'\');"><IMG src="'+diz[0]+'/q.gif" border=0 alt="Цитата"></A> ');}
if (cls_t != 1 && razdel != 21) {if (form_re_off == 1) {document.write('<A href="index.pl?6-'+razdel+'-'+start+'-'+filenumber+'-'+msgid_t+'-'+start_page_re+'-'+only_new_re+'"><IMG src="'+diz[0]+'/r.gif" border=0 alt="Ответить"></A>');} else {document.write('<A nomouseover="window.status=\'Ответить '+nick_kav+'\';return true;" onMouseOut="window.status=\'\';return true;" href="javascript:f3(\''+msgid_t+'\');"><IMG src="'+diz[0]+'/r.gif" border=0 alt="Ответить"></A>');}}
}document.write('</TD><TD align=right>');
if (group==4 || (group==3 && (modraz.indexOf(' '+razdel+' ') != -1 || raz.length==0))) {
var no_ban='';for (i=0;i<zv.length;i++) {if (zv[i] == chkname_t) {var no_ban=1;break;}} 
document.write('<form method="post" action="index.pl" ');
if (no_ban) {document.write('onsubmit="javascript:alert(\'Пока Администратор не понизит группу и звание этого участника - банить нельзя.\');return false;"');}
else {if (chkname_t) {document.write('onsubmit="return confirm(\'Регистрация пользователя '+nick_kav+' будет удалена. Вы уверены?\');"');}}
document.write('><INPUT type=Hidden name=work value=12><INPUT type=Hidden name=razdel value="'+razdel+'"><INPUT type=Hidden name=start value="'+start+'"><INPUT type=Hidden name=filenumber value="'+filenumber+'"><INPUT type=Hidden name=msgid value="'+msgid+'"><INPUT type=Hidden name=start_page_re value="'+start_page_re+'"><INPUT type=Hidden name=only_new_re value="'+only_new_re+'">');
document.write('<INPUT type=Hidden name=ban_chkname value="'+chkname_t+'"><INPUT type=Hidden name=ban_nick value="'+nick_t+'"><INPUT type=Hidden name=ban_ip value="'+ip_t+'"><INPUT type=image src="'+diz[0]+'/ban.gif" border=0 style="cursor: hand;border:0;" alt="Бан"> <a target=_blank href="http://www.ripe.net/perl/whois?'+ip_t+'"><img src="'+diz[0]+'/ip.gif" border=0 alt="ip"></a> </TD></TR><TR><TD colspan=2 align=right class=font2>'+allstat);
}
document.write('</TD></TR></TABLE></TD></TR>');
if (group==4 || (group==3 && (modraz.indexOf(' '+razdel+' ') != -1 || raz.length==0))) {document.write('</FORM>');}}

//-----------------------------навигатор страниц ответов
function page_re(otv){
document.write('<TR class=font1><TD colspan=2 bgcolor="'+diz[2]+'" align=center>');
if (only_new_re==1 && otv==0) {document.write('Новых ответов нет ');}
else {document.write('Ответов - '+otv); if (only_new_re==1) {document.write(' новых');}}
if (otv > re_on_page) {document.write(', стр: ');
if ((otv/re_on_page - Math.floor(otv/re_on_page)) > 0) {var vsego_pages = Math.floor(otv/re_on_page) + 1;}
else {var vsego_pages = Math.floor(otv/re_on_page);}
for (i=0;i<vsego_pages;i++) {var start_page_re_lines = re_on_page*i;var j=i+1;
if (start_page_re_lines == start_page_re){document.write('<B>'+j+'</B> ');}
else {document.write('<A HREF="index.pl?'+work+'-'+razdel+'-'+start+'-'+filenumber+'-000-'+start_page_re_lines+'-'+only_new_re+'">'+j+'</A> ');}
}if (start_page_re == 10001){document.write('<B>All</B> ');}
else{document.write(' <a href="index.pl?1-'+razdel+'-'+start+'-'+filenumber+'-000-10001-'+only_new_re+'">All</A> ');}
}if (only_new_re==1) {document.write(' [<a href="index.pl?1-'+razdel+'-'+start+'-'+filenumber+'-000-0-0">см. все</A>]');}
else {if (otv>0) {document.write(' [<a href="index.pl?1-'+razdel+'-'+start+'-'+filenumber+'-000-0-1">только новые</a>]');}}
document.write('</TD></TR>');}

//-------------------------------------------строка таблица
function ubb(cls,data_t,razd,filenumber,message,title,otvetov,prosmotrov,avtor,lastavtor,data_o) {
title=title.replace(/Vote: /g,'Голосование: ');
prosmotrov++;prosmotrov--;
document.write('<TR valign=top><TD bgcolor="'+diz[4]+'">');
if (((data_o > lasttime) || razd==21) && lasttime) {var add_new_link=1;} else {var add_new_link=0;}
if (work==11 || work==16) {var newonly='target=_blank ';} else {var newonly='';}
if (cls==1){document.write('<IMG src="'+diz[0]+'/c.gif" alt="">');}
else {if (data_o > lasttime && lasttime) {document.write('<IMG src="'+diz[0]+'/n.gif" alt="">');}else {document.write('<IMG src="'+diz[0]+'/l.gif" alt="">');}}
document.write('</TD><TD bgcolor="'+diz[4]+'"><font class=font3>');
document.write('<A '+newonly+'HREF="index.pl?1-'+razd+'-'+start+'-'+filenumber+'-000-0-0-'+data_o+'"');
if (message) {message=message.replace(/&#39;/g,'\\&#39;');document.write(' OnMouseOver="return on(\''+message+'\')" OnMouseOut="return off()"');}
document.write('>'+title+'</A></font>');
if (otvetov > re_on_page && type!=3) {
document.write(' <font class=font2>[стр: ');
if ((otvetov/re_on_page - Math.floor(otvetov/re_on_page)) > 0) {vsego_pages = Math.floor(otvetov/re_on_page) + 1;}
else {vsego_pages = Math.floor(otvetov/re_on_page);}
for (i=0;i<vsego_pages;i++) {var start_page_re_lines = re_on_page*i;var j=i+1;document.write('<A '+newonly+'HREF="index.pl?1-'+razd+'-'+start+'-'+filenumber+'-000-'+start_page_re_lines+'-0-'+data_o+'"><u>'+j+'</u></A> ');}
document.write(' <a href="index.pl?1-'+razd+'-'+start+'-'+filenumber+'-000-10001-0-'+data_o+'"><u>All</u></A>');
document.write(']</font>');}
if (work==11 || work==16){var textraz='';for (i=0;i<raz.length;i++) {if (raz[i] == razd) {textraz = raz[i-1];}}document.write('<br><font class=font2>['+textraz+']</font>');}
document.write('</TD><TD class=font2 align=center bgcolor="'+diz[3]+'">'+otvetov);
if (add_new_link==1 && type!=3) {document.write('<BR>[<A '+newonly+'HREF="index.pl?1-'+razd+'-'+start+'-'+filenumber+'-000-0-1-'+data_o+'"><u>новые</u></A>]');}  
document.write('</TD><TD class=font2 align=center bgcolor="'+diz[2]+'">'+prosmotrov+'</TD><TD align=center bgcolor="'+diz[3]+'"> ');
j=160;for (i=5;i>0;i--) {if (otvetov >j+5 || prosmotrov >j*20) {document.write('<img src="'+diz[0]+'/rt'+i+'.gif" border=0>');i=0;}j=j/2;}
document.write(' </TD><TD class=font2 align=center bgcolor="'+diz[2]+'">'+data(data_t,timezone,3)+'<BR>'+avtor+'</TD><TD nowrap class=font2 align=center bgcolor="'+diz[3]+'">'+data(data_o,timezone)+'<BR>'+lastavtor+'</TD>');
if (group==4 || (group==3 && (modraz.indexOf(' '+razdel+' ') != -1 || work==11 || work==16 || raz.length==0))) {
document.write('<td bgcolor="'+diz[2]+'">');
if (group==4 || (group==3 && (modraz.indexOf(' '+razd+' ') != -1 || raz.length==0))){document.write('<input type=checkbox style="border:0" name="'+filenumber+'" value="'+razd+'">');}
document.write('</td>');}
document.write('</TR>');}

//-------------------------------------------строка дерево
function tree(li,data_o,razd,filenumber,message_t,title_t,msgid_o,nick_o,minus,cls_ob,no_link) {
title_t=title_t.replace(/Vote: /g,'Голосование: ');
if(minus==1){minus = ' (-)';}else {minus='';} var obnov='';
if (cls_ob==1){cls_ob = '(x) ';} else {if (cls_ob==2){cls_ob = '(!) ';} else {cls_ob='';}}
if (msgid_o != '000'){if (data_o > lasttime && lasttime) {obnov = '<font color=red>+</font>';} 
for(i=li;i>0;i--){document.write('</LI></UL>');}}
document.write('<UL><LI>');
if (msgid_o == '000' && (work==0 || work==11 || work==16) && (group==4 || (group==3 && (modraz.indexOf(' '+razd+' ') != -1 || raz.length==0)))){
document.write('<input type=checkbox style="border:0" name="'+filenumber+'" value="'+razd+'">');}
document.write(cls_ob);
if (no_link!=1) {document.write('<A HREF="index.pl?1-'+razd+'-'+start+'-'+filenumber+'-'+msgid_o+'"');
if (message_t) {
message_t=message_t.replace(/&#39;/ig,'\\&#39;');
document.write(' OnMouseOver="return on(\''+message_t+'\')" OnMouseOut="return off()"');}
document.write('>');}
document.write(title_t+minus); if (no_link!=1) {document.write('</A>');}
document.write(' <b>'+nick_o+'</b> (<small>'+data(data_o,timezone)+''+obnov+')</small>');}


//------печать исходящей темы
function inf(titl,mesg){mesg=mesg.replace(/\[\/quote\]/g,"`");mesg=mesg.replace(/\[quote\]([^`]+)`/g, "<br><table align=center border=0 width=90%><tr><td class=font2> <small><b>цитата:</b></small></td></tr><tr><td><TABLE align=center bgColor=\"#seriycvet\" border=0 cellPadding=6 cellSpacing=1 width=100%><TR bgColor=\"#beliycvet\"><TD vAlign=top class=font2>$1</TD></TR></TABLE></td></tr></table><br>");mesg=mesg.replace(/#seriycvet/g,diz[6]);mesg=mesg.replace(/#beliycvet/g,diz[4]);document.write('<TABLE bgColor="'+diz[8]+'" align=center border=0 cellPadding=0 cellSpacing=2 width=100%><TR><TD><TABLE align=center bgColor="'+diz[6]+'" border=0 cellPadding=6 cellSpacing=1 width=100%><TR align=center class=font5 bgColor="'+diz[1]+'"><TD>Исходное сообщение:</TD></TR><TR bgColor="'+diz[2]+'"><TD vAlign=top class=font1><div class=font2>'+titl+'</div><br>'+mesg+'<br><br></TD></TR></TABLE></TD></TR></TABLE><BR><BR><center><form action="javascript:this.close()"><input type=submit class=sender value="Закрыть окно"></form></center><BR>');}
