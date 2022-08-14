/*
+--------------------------------------------------------------------+
                                                  
                                                  
/-`                                            `-/
dddhso/-`                                `-/oshddd
dddddddddhso/-`                    `-/oshddddddddd
dddddddddddddddhso++++++++++++++oshddddddddddddddd
dddddddddddddddddddddddddddddddddddddddddddddddddd
dddddddddddddddddddddddddddddddddddddddddddddddddd
dddddddddddddddddddddddddddddddddddddddddddddddddd
dddddddddddddddddddddddddddddddddddddddddddddddddd
dddddddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddds++sdddddddddddddddds++sddddddddddddd
dddddddddddd-    -dddddddddddddd-    -dddddddddddd
dddddddddddd-    -dddddddddddddd-    -dddddddddddd
ddddddddddddds++sdddddddddddddddds++sddddddddddddd
dddddddddddddddddddddddddddddddddddddddddddddddddd
dddddddddddddddddddddddddddddddddddddddddddddddddd
dddddddddddddddddddddddddddddddddddddddddddddddddd
dddddddddddddddddddddddddddddddddddddddddddddddddd
dddddddddddddddddddddddddddddddddddddddddddddddddd
dddddddddddddddddddddddddddddddddddddddddddddddddd


+--------------------------------------------------------------------+

    felixg.io - dateDropper jQuery

    Version: 3.1.1
    Released date: 2021-01-13
    Created by: Felice Gattuso
    Twitter: @felice_gattuso 
    Instagram: @felixg____
    Docs: https://felixg.io/docs/products/datedropper-jquery
    
+--------------------------------------------------------------------+

*/
$.dateDropperSetup = { languages: { en: { name: "English", months: { short: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"], full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, weekdays: { short: ["S", "M", "T", "W", "T", "F", "S"], full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] } }, ka: { name: "Georgian", months: { short: ["იან", "თებ", "მარტ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექტ", "ოქტ", "ნოემბ", "დეკ"], full: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"] }, weekdays: { short: ["კვ", "ორ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"], full: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"] } }, it: { name: "Italiano", months: { short: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"], full: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"] }, weekdays: { short: ["D", "L", "M", "M", "G", "V", "S"], full: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"] } }, fr: { name: "Français", months: { short: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"], full: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"] }, weekdays: { short: ["D", "L", "M", "M", "J", "V", "S"], full: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"] } }, zh: { name: "中文", months: { short: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], full: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, weekdays: { short: ["天", "一", "二", "三", "四", "五", "六"], full: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] } }, ar: { name: "العَرَبِيَّة", months: { short: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], full: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"] }, weekdays: { short: ["S", "M", "T", "W", "T", "F", "S"], full: ["الأحد", "الإثنين", "الثلثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"] } }, fa: { name: "فارسی", months: { short: ["ژانویه", "فووریه", "مارچ", "آپریل", "می", "جون", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"], full: ["ژانویه", "فووریه", "مارچ", "آپریل", "می", "جون", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"] }, weekdays: { short: ["S", "M", "T", "W", "T", "F", "S"], full: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه"] } }, hu: { name: "Hungarian", months: { short: ["jan", "feb", "már", "ápr", "máj", "jún", "júl", "aug", "sze", "okt", "nov", "dec"], full: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"] }, weekdays: { short: ["v", "h", "k", "s", "c", "p", "s"], full: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"] } }, gr: { name: "Ελληνικά", months: { short: ["Ιαν", "Φεβ", "Μάρ", "Απρ", "Μάι", "Ιούν", "Ιούλ", "Αύγ", "Σεπ", "Οκτ", "Νοέ", "Δεκ"], full: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"] }, weekdays: { short: ["Κ", "Δ", "Τ", "Τ", "Π", "Π", "Σ"], full: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"] } }, es: { name: "Español", months: { short: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"], full: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] }, weekdays: { short: ["D", "L", "M", "X", "J", "V", "S"], full: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] } }, da: { name: "Dansk", months: { short: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], full: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"] }, weekdays: { short: ["s", "m", "t", "o", "t", "f", "l"], full: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"] } }, de: { name: "Deutsch", months: { short: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], full: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, weekdays: { short: ["S", "M", "D", "M", "D", "F", "S"], full: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"] } }, nl: { name: "Nederlands", months: { short: ["jan", "feb", "maa", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], full: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"] }, weekdays: { short: ["z", "m", "d", "w", "d", "v", "z"], full: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"] } }, pl: { name: "język polski", months: { short: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"], full: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"] }, weekdays: { short: ["n", "p", "w", "ś", "c", "p", "s"], full: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"] } }, pt: { name: "Português", months: { short: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], full: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"] }, weekdays: { short: ["D", "S", "T", "Q", "Q", "S", "S"], full: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"] } }, si: { name: "Slovenščina", months: { short: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], full: ["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"] }, weekdays: { short: ["n", "p", "t", "s", "č", "p", "s"], full: ["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"] } }, uk: { name: "українська мова", months: { short: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"], full: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"] }, weekdays: { short: ["н", "п", "в", "с", "ч", "п", "с"], full: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"] } }, ru: { name: "русский язык", months: { short: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"], full: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"] }, weekdays: { short: ["в", "п", "в", "с", "ч", "п", "с"], full: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"] } }, tr: { name: "Türkçe", months: { short: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], full: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"] }, weekdays: { short: ["P", "P", "S", "Ç", "P", "C", "C"], full: ["Pazar", "Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"] } }, ko: { name: "조선말", months: { short: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], full: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"] }, weekdays: { short: ["일", "월", "화", "수", "목", "금", "토"], full: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"] } }, fi: { name: "suomen kieli", months: { short: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"], full: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"] }, weekdays: { short: ["S", "M", "T", "K", "T", "P", "L"], full: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"] } }, vi: { name: "Tiếng việt", gregorian: !1, months: { short: ["Th.01", "Th.02", "Th.03", "Th.04", "Th.05", "Th.06", "Th.07", "Th.08", "Th.09", "Th.10", "Th.11", "Th.12"], full: ["Tháng 01", "Tháng 02", "Tháng 03", "Tháng 04", "Tháng 05", "Tháng 06", "Tháng 07", "Tháng 08", "Tháng 09", "Tháng 10", "Tháng 11", "Tháng 12"] }, weekdays: { short: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"], full: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"] } } }, icons: { arrow: { l: '<svg viewBox="0 -1 6 16" height="14" width="8"><polyline points="6 0 0 6 6 12" stroke="currentColor" stroke-width="2" fill="none"></polyline></svg>', r: '<svg viewBox="6 -1 6 16" height="14" width="8"><polyline points="6 0 12 6 6 12" stroke="currentColor" stroke-width="2" fill="none"></polyline></svg>' }, checkmark: '<svg viewBox="0 0 22 18" height="18" width="32"><polyline points="0 8 8 16 22 1" stroke="currentColor" stroke-width="2" fill="none" ></polyline></svg>', expand: '<svg width="18" height="18" viewBox="0 -3 12 18" stroke="currentColor" stroke-width="1.5" fill="none"><polyline points="8 0 12 0 12 4" fill="none"></polyline><path d="M11.4444444,0.555555556 L6.97196343,5.02803657" stroke-linecap="square"></path><path d="M5.5,6.5 L0.555555556,11.4444444" stroke-linecap="square"></path><polyline points="0 8 0 12 4 12" fill="none"></polyline></svg>' }, autoInit: !0, inlineCSS: '.picker-input{cursor:text}.picker-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.8);z-index:2147483637;opacity:1;visibility:visible;transition:opacity 0.4s ease,visibility 0.4s ease}.picker-overlay.picker-overlay-hidden{opacity:0;visibility:hidden}div.datedropper{--dd-color1:#fd4741;--dd-color2:white;--dd-color3:#4D4D4D;--dd-color4:white;--dd-radius:6px;--dd-width:180px;--dd-shadow:0 0 32px 0 rgba(0,0,0,0.1);touch-action:none;position:absolute;top:0;left:0;z-index:2147483638;transform:translate3d(-50%,0,0);line-height:1;font-family:sans-serif;box-sizing:border-box;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;visibility:hidden;margin-top:-8px;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:6px!important;border-radius:var(--dd-radius)!important}div.datedropper.leaf{--dd-color1:#1ecd80;--dd-color2:#fefff2;--dd-color3:#528971;--dd-color4:#fefff2;--dd-radius:6px;--dd-width:180px;--dd-shadow:0 0 32px 0 rgba(0,0,0,0.1)}div.datedropper.vanilla{--dd-color1:#feac92;--dd-color2:#FFF;--dd-color3:#9ed7db;--dd-color4:#faf7f4;--dd-radius:6px;--dd-width:180px;--dd-shadow:0 0 32px 0 rgba(0,0,0,0.1)}div.datedropper.ryanair{--dd-color1:#7e57dc;--dd-color2:#50388a;--dd-color3:#ffffff;--dd-color4:#FFF;--dd-radius:6px;--dd-width:180px;--dd-shadow:0 0 32px 0 rgba(0,0,0,0.1)}@media only screen and (max-width:479px){div.datedropper{position:fixed;top:50%!important;left:50%!important;transform:translate3d(-50%,-50%,0);margin:0}div.datedropper:before{display:none}div.datedropper .picker{box-shadow:0 0 64px 32px rgba(0,0,0,0.06)!important}}div.datedropper *{box-sizing:border-box;width:auto;height:auto;margin:0;padding:0;border:0;font-size:100%}div.datedropper svg{fill:currentColor}div.datedropper:before{content:"";position:absolute;width:16px;height:16px;top:-8px;left:50%;transform:translateX(-50%) rotate(45deg);border-top-left-radius:4px;background-color:white;z-index:1}div.datedropper.picker-focused{opacity:1;visibility:visible;margin-top:8px}@media only screen and (max-width:479px){div.datedropper.picker-focused{margin-top:0}}div.datedropper .pick-submit{margin:0 auto;outline:0;width:56px;height:100%;line-height:64px;border-radius:56px;font-size:24px;cursor:pointer;border-bottom-left-radius:0;border-bottom-right-radius:0;text-align:center;position:relative;top:0}div.datedropper .pick-submit:focus,div.datedropper .pick-submit:hover{top:4px;box-shadow:0 0 0 16px rgba(0,0,0,0.04),0 0 0 8px rgba(0,0,0,0.04)}div.datedropper .pick-submit svg{position:relative;top:20px}div.datedropper .picker{position:relative;overflow:hidden}div.datedropper .picker+div{font-weight:bold;font-size:10px;text-transform:uppercase;padding:0.5rem;text-align:center}div.datedropper .picker+div a{text-decoration:none;color:currentColor}div.datedropper .picker+div a:hover{text-decoration:underline}div.datedropper .picker ul{margin:0;padding:0;list-style:none;cursor:pointer;position:relative;z-index:2}div.datedropper .picker ul.pick{position:relative;overflow:hidden;outline:0}div.datedropper .picker ul.pick:nth-of-type(2){box-shadow:0 1px rgba(0,0,0,0.06)}div.datedropper .picker ul.pick li{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;opacity:0.5;display:flex;align-items:center;justify-content:center;text-align:center;pointer-events:none}div.datedropper .picker ul.pick li span{font-size:16px;position:absolute;left:0;width:100%;line-height:0;bottom:24px}div.datedropper .picker ul.pick li.pick-afr{transform:translateY(100%)}div.datedropper .picker ul.pick li.pick-bfr{transform:translateY(-100%)}div.datedropper .picker ul.pick li.pick-sl{opacity:1;transform:translateY(0);z-index:1;pointer-events:auto}div.datedropper .picker ul.pick:focus .pick-arw-s1:not(.pick-arw-hidden),div.datedropper .picker ul.pick:hover .pick-arw-s1:not(.pick-arw-hidden){opacity:0.6}div.datedropper .picker ul.pick:focus.pick-jump .pick-arw-s2,div.datedropper .picker ul.pick:hover.pick-jump .pick-arw-s2{pointer-events:auto;opacity:0.6}div.datedropper .picker ul.pick:focus.pick-jump .pick-arw-s2.pick-arw-r,div.datedropper .picker ul.pick:hover.pick-jump .pick-arw-s2.pick-arw-r{transform:translateX(-8px)}div.datedropper .picker ul.pick:focus.pick-jump .pick-arw-s2.pick-arw-l,div.datedropper .picker ul.pick:hover.pick-jump .pick-arw-s2.pick-arw-l{transform:translateX(8px)}div.datedropper .picker ul.pick .pick-arw{position:absolute;top:0;height:100%;width:25%;font-size:10px;text-align:center;display:block;z-index:10;cursor:pointer;overflow:hidden;opacity:0}div.datedropper .picker ul.pick .pick-arw div{line-height:0;top:50%;left:50%;position:absolute;display:block;transform:translate(-50%,-50%)}div.datedropper .picker ul.pick .pick-arw svg{width:16px;height:16px}div.datedropper .picker ul.pick .pick-arw-hidden{opacity:0;pointer-events:none}div.datedropper .picker ul.pick .pick-arw.pick-arw:hover{opacity:1}div.datedropper .picker ul.pick .pick-arw.pick-arw-r{right:0}div.datedropper .picker ul.pick .pick-arw.pick-arw-l{left:0}div.datedropper .picker ul.pick .pick-arw.pick-arw-s2{pointer-events:none}div.datedropper .picker ul.pick .pick-arw.pick-arw-s2.pick-arw-r{transform:translateX(0)}div.datedropper .picker ul.pick .pick-arw.pick-arw-s2.pick-arw-l{transform:translateX(0)}div.datedropper .picker ul.pick.pick-m,div.datedropper .picker ul.pick.pick-y{height:60px}div.datedropper .picker ul.pick.pick-m{font-size:32px}div.datedropper .picker ul.pick.pick-y{font-size:24px}div.datedropper .picker ul.pick.pick-d{height:100px;font-size:64px;font-weight:bold}div.datedropper .picker ul.pick.pick-d li div{margin-top:-16px}div.datedropper .picker ul.pick:focus:after,div.datedropper .picker ul.pick:hover:after{content:"";pointer-events:none;position:absolute;top:6px;left:6px;bottom:6px;right:6px;background-color:rgba(0,0,0,0.04);border-radius:6px}div.datedropper .picker .pick-lg{z-index:1;margin:0 auto;height:0;overflow:hidden}div.datedropper .picker .pick-lg.pick-lg-focused{background-color:rgba(0,0,0,0.025)}div.datedropper .picker .pick-lg.down{animation:down 0.8s ease}div.datedropper .picker .pick-lg .pick-h:after,div.datedropper .picker .pick-lg .pick-h:before{opacity:0.32}div.datedropper .picker .pick-lg ul:after{content:"";display:table;clear:both}div.datedropper .picker .pick-lg ul li{float:left;text-align:center;width:14.285714286%;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px;position:relative}div.datedropper .picker .pick-lg ul li:after,div.datedropper .picker .pick-lg ul li:before{position:absolute;z-index:2;display:block;line-height:30px;height:30px;width:30px;top:50%;left:50%;transform:translate(-50%,-50%)}div.datedropper .picker .pick-lg ul li:after{content:attr(data-value);z-index:2}div.datedropper .picker .pick-lg ul li:before{content:""}div.datedropper .picker .pick-lg ul.pick-lg-h{height:16.6666666667%;padding:0 10px}div.datedropper .picker .pick-lg ul.pick-lg-h li{height:100%}div.datedropper .picker .pick-lg ul.pick-lg-b{height:83.3333333333%;padding:10px}div.datedropper .picker .pick-lg ul.pick-lg-b li{height:16.6666666667%;cursor:pointer;position:relative}div.datedropper .picker .pick-lg ul.pick-lg-b li div{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-lk{pointer-events:none;opacity:0.6}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-lk:after{text-decoration:line-through}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-dir div{opacity:0.25}div.datedropper .picker .pick-lg ul.pick-lg-b li:not(.pick-h):hover{z-index:2}div.datedropper .picker .pick-lg ul.pick-lg-b li:not(.pick-h):hover:before{border-radius:32px;box-shadow:0 0 32px rgba(0,0,0,0.1)}div.datedropper .picker .pick-lg ul.pick-lg-b li:not(.pick-h):hover:after,div.datedropper .picker .pick-lg ul.pick-lg-b li:not(.pick-h):hover:before{transform:translate(-50%,-50%) scale(1.5)}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-today:not(:hover):not(.pick-sl):before{z-index:2;border-radius:32px;opacity:0.15}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-sl:before{z-index:2;border-radius:32px;box-shadow:0 0 32px rgba(0,0,0,0.1)}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-sl:after,div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-sl:before{transform:translate(-50%,-50%) scale(1.5)}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-sl.pick-sl-a:not(.pick-sl-b):before{border-top-right-radius:8px;transform:translate(-50%,-50%) scale(1.5) rotate(45deg)!important}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-sl.pick-sl-b:not(.pick-sl-a):before{border-top-left-radius:8px;transform:translate(-50%,-50%) scale(1.5) rotate(-45deg)!important}div.datedropper .picker .pick-btns{margin:-1px;position:relative;z-index:11;height:56px}div.datedropper .picker .pick-btns div{cursor:pointer;line-height:0}div.datedropper .picker .pick-btns .pick-btn{position:absolute;width:36px;height:36px;bottom:0;text-align:center;line-height:38px;font-size:16px;margin:8px;outline:0;border-radius:4px;background:rgba(0,0,0,0.03);box-shadow:0 0 32px rgba(0,0,0,0.1);transform:scale(1)}div.datedropper .picker .pick-btns .pick-btn svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}div.datedropper .picker .pick-btns .pick-btn:focus,div.datedropper .picker .pick-btns .pick-btn:hover{box-shadow:0 0 24px rgba(0,0,0,0.1);transform:scale(0.95)}div.datedropper .picker .pick-btns .pick-btn.pick-btn-sz{right:0}div.datedropper .picker .pick-btns .pick-btn.pick-btn-lng{left:0;transform-origin:left bottom}div.datedropper.picker-clean .picker-jumped-years{display:none}div.datedropper .picker-jumped-years{position:absolute;z-index:10;top:60px;left:0;right:0;bottom:0;padding:4px;padding-bottom:56px;opacity:0;overflow:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;visibility:hidden;pointer-events:none;transform:translateY(16px);transform-origin:bottom center}div.datedropper .picker-jumped-years.picker-jumper-years-visible{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto}div.datedropper .picker-jumped-years>div{float:left;width:50%;padding:4px;position:relative;cursor:pointer}div.datedropper .picker-jumped-years>div:before{content:"";display:block;border-radius:6px;padding:16px;padding-bottom:50%;background-color:rgba(0,0,0,0.05)}div.datedropper .picker-jumped-years>div:after{text-align:center;font-size:20px;content:attr(data-id);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}div.datedropper .picker-jumped-years>div:hover:before{background-color:rgba(0,0,0,0.025)}div.datedropper.picker-lg{width:300px}div.datedropper.picker-lg ul.pick.pick-d{transform:scale(0);height:0!important}div.datedropper.picker-lg .pick-lg{height:256px}@media only screen and (max-width:479px){div.datedropper.picker-lg{width:auto!important;height:auto!important;top:1rem!important;left:1rem!important;right:1rem!important;bottom:1rem!important;transform:none}div.datedropper.picker-lg.picker-modal{width:100%!important;height:100%!important;padding:1rem!important}div.datedropper.picker-lg .picker{height:100%}div.datedropper.picker-lg .picker .pick{max-height:unset!important}div.datedropper.picker-lg .pick-lg{height:62%!important;max-height:unset!important}div.datedropper.picker-lg .pick-lg .pick-lg-h{height:16.6666666667%}div.datedropper.picker-lg .pick-lg .pick-lg-b{height:83.3333333333%}div.datedropper.picker-lg .pick-lg .pick-lg-b li{height:16.6666666667%}div.datedropper.picker-lg .picker-jumped-years{top:13%!important;padding-bottom:12%!important}div.datedropper.picker-lg .pick-l,div.datedropper.picker-lg .pick-m,div.datedropper.picker-lg .pick-y{height:13%!important}div.datedropper.picker-lg .pick-btns{height:12%!important}}@keyframes picker_rumble{0%,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(-2px,0,0)}20%,40%,60%,80%{transform:translate3d(2px,0,0)}}div.datedropper .picker-rumble{animation:picker_rumble 0.4s ease}div.datedropper.picker-locked .pick-submit{opacity:0.35}div.datedropper.picker-locked .pick-submit:hover{box-shadow:none!important}div.datedropper.picker-modal{top:50%!important;left:50%!important;transform:translate3d(-50%,-50%,0)!important;position:fixed!important;margin:0!important}div.datedropper.picker-modal:before{display:none}div.datedropper.picker-fxs{transition:opacity 0.2s ease,visibility 0.2s ease,margin 0.2s ease}@media only screen and (min-width:480px){div.datedropper.picker-fxs.picker-transit{transition:width 0.8s cubic-bezier(1,-0.55,0.2,1.37),opacity 0.2s ease,visibility 0.2s ease,margin 0.2s ease}div.datedropper.picker-fxs.picker-transit .pick-lg{transition:height 0.8s cubic-bezier(1,-0.55,0.2,1.37)}div.datedropper.picker-fxs.picker-transit .pick-d{transition:top 0.8s cubic-bezier(1,-0.55,0.2,1.37),transform 0.8s cubic-bezier(1,-0.55,0.2,1.37),height 0.8s cubic-bezier(1,-0.55,0.2,1.37),background-color 0.4s ease}}div.datedropper.picker-fxs ul.pick.pick-y{transition:background-color 0.4s ease}div.datedropper.picker-fxs ul.pick li{transition:transform 0.4s ease,opacity 0.4s ease}div.datedropper.picker-fxs ul.pick .pick-arw{transition:transform 0.2s ease,opacity 0.2s ease}div.datedropper.picker-fxs ul.pick .pick-arw i{transition:right 0.2s ease,left 0.2s ease}div.datedropper.picker-fxs .picker-jumped-years{transition:transform 0.2s ease,opacity 0.2s ease,visibility 0.2s ease}div.datedropper.picker-fxs .pick-lg .pick-lg-b li{transition:background-color 0.2s ease}div.datedropper.picker-fxs .pick-btns .pick-submit{transition:top 0.2s ease,box-shadow 0.4s ease,background-color 0.4s ease}div.datedropper.picker-fxs .pick-btns .pick-submit svg{height:18px}div.datedropper.picker-fxs .pick-btns .pick-btn{transition:all 0.2s ease}div.datedropper.picker-fxs .pick-btns .pick-btn svg{width:18px;height:18px}div.datedropper .null{transition:none}div.datedropper:not(.picker-lg){width:180px!important;width:var(--dd-width)!important}div.datedropper .picker{box-shadow:0 0 32px 0 rgba(0,0,0,0.1)!important;box-shadow:var(--dd-shadow)!important}div.datedropper .pick:focus:after,div.datedropper .pick:hover:after,div.datedropper .picker{border-radius:6px!important;border-radius:var(--dd-radius)!important}div.datedropper .picker-jumped-years{border-bottom-left-radius:6px!important;border-bottom-right-radius:var(--dd-radius)!important}div.datedropper .pick-dir div,div.datedropper .pick-lg-b .pick-sl:before,div.datedropper .pick-lg-h,div.datedropper .pick-submit,div.datedropper .pick-today:before,div.datedropper:not(.picker-clean) .pick:first-of-type,div.datedropper:not(.picker-clean):before{background-color:#fd4741!important;background-color:var(--dd-color1)!important}div.datedropper .pick-btn,div.datedropper .pick-lg-b .pick-wke,div.datedropper .pick-lg-b li:not(.pick-sl):not(.pick-h):hover:after,div.datedropper .pick-today:after,div.datedropper .pick-y.pick-jump,div.datedropper .picker+div,div.datedropper .pick li span{color:#fd4741!important;color:var(--dd-color1)!important}div.datedropper .pick-btn,div.datedropper .pick-btn:hover,div.datedropper .pick-l,div.datedropper .pick-lg-b li:not(.pick-sl):not(.pick-h):hover:before,div.datedropper .picker,div.datedropper .picker-jumped-years,div.datedropper:before{background-color:white!important;background-color:var(--dd-color2)!important}div.datedropper .pick-arw,div.datedropper .pick-l,div.datedropper .picker{color:#4D4D4D!important;color:var(--dd-color3)!important}div.datedropper .pick-lg-b .pick-sl:after,div.datedropper .pick-lg-h,div.datedropper .pick-submit,div.datedropper:not(.picker-clean) .pick:first-of-type,div.datedropper:not(.picker-clean) .pick:first-of-type *{color:white!important;color:var(--dd-color4)!important}' },
    function(e) {
        var r = {},
            a = null,
            o = null,
            d = null,
            p = null,
            n = null,
            l = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
            s = "webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend",
            u = {
                init: function(i) {
                    return e(this).each((function() { i && i.roundtrip && !e(this).attr("data-dd-roundtrip") && e(this).attr("data-dd-roundtrip", i.roundtrip) })), e(this).each((function() {
                        if (!e(this).hasClass("picker-trigger")) {
                            var t = e(this),
                                a = "datedropper-" + Object.keys(r).length;
                            t.attr("data-datedropper-id", a).addClass("picker-trigger");
                            var o = { identifier: a, selector: t, jump: 10, maxYear: !1, minYear: !1, format: "m/d/Y", lang: "en", lock: !1, theme: "primary", disabledDays: !1, large: !1, largeDefault: !1, fx: !0, fxMobile: !0, defaultDate: null, modal: !1, hideDay: !1, hideMonth: !1, hideYear: !1, enabledDays: !1, largeOnly: !1, roundtrip: !1, minRoundtripSelection: !1, eventListener: t.is("input") ? "focus" : "click", trigger: !1, minDate: !1, maxDate: !1, autofill: !0, autoIncrease: !0, showOnlyEnabledDays: !1, changeValueTo: !1, startFromMonday: !0, loopAll: !0, loopYears: !0, loopDays: !0, loopMonths: !0 };
                            r[a] = e.extend(!0, {}, o, i, y(t)), B(r[a])
                        }
                    }))
                },
                show: function() { return e(this).each((function() { K(e(this)) })) },
                hide: function() {
                    return e(this).each((function(i) {
                        var r = Y(e(this));
                        r && q(r)
                    }))
                },
                destroy: function(i) {
                    return e(this).each((function() {
                        var r = Y(e(this));
                        r && (a && r.identifier == a.identifier && q(a), e(this).removeAttr("data-datedropper-id").removeClass("picker-trigger").off(r.eventListener), delete r, i && i())
                    }))
                },
                set: function(i) {
                    return e(this).each((function() {
                        var r = Y(e(this));
                        r && (e.each(i, (function(e, i) { "true" == i && (i = !0), "false" == i && (i = !1), "roundtrip" != e ? r[e] = i : console.error("[DATEDROPPER] You can't set roundtrip after main initialization") })), r.selector.off(r.eventListener), r.trigger && e(r.trigger).off("click"), B(r), a && a.element == r.element && G(r))
                    }))
                },
                setDate: function(i) {
                    return e(this).each((function() {
                        var r = Y(e(this));
                        r && (e.each(i, (function(e, i) { "y" == e && r.key[e] && i > r.key[e].max && (r.key[e].max = i), r.key[e].current = i })), a && a.element == r.element && G(r))
                    }))
                },
                getDate: function(i) {
                    return e(this).each((function() {
                        var r = Y(e(this));
                        r && i && i(E(r))
                    }))
                }
            },
            k = !1,
            m = function() { var e = navigator.userAgent.toLowerCase(); return -1 != e.indexOf("msie") && parseInt(e.split("msie")[1]) },
            f = function() { return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) },
            v = function(i) { i.fx && !i.fxMobile && (e(window).width() < 480 ? i.element.removeClass("picker-fxs") : i.element.addClass("picker-fxs")) },
            h = function(e) { return e % 1 == 0 && e },
            g = function(e) { return !!/(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/.test(e) && e };
        if (f()) var b = { i: "touchstart", m: "touchmove", e: "touchend" };
        else b = { i: "mousedown", m: "mousemove", e: "mouseup" };
        var y = function(i) {
                var r = {},
                    t = /^data-dd\-(.+)$/;
                return e.each(i.get(0).attributes, (function(e, i) {
                    if (t.test(i.nodeName)) {
                        var a = (d = i.nodeName.match(t)[1], d.replace(/(?:^\w|[A-Z]|\b\w)/g, (function(e, i) { return 0 == i ? e.toLowerCase() : e.toUpperCase() })).replace(/\s+/g, "")).replace(new RegExp("-", "g"), ""),
                            o = !1;
                        switch (i.nodeValue) {
                            case "true":
                                o = !0;
                                break;
                            case "false":
                                o = !1;
                                break;
                            default:
                                o = i.nodeValue
                        }
                        r[a] = o
                    }
                    var d
                })), r
            },
            x = function(e) { return new Date(1e3 * e) },
            w = function(e, i) { return Math.round((x(i) - x(e)) / 864e5) + 1 },
            D = function(i, r) {
                var a, o = R(i),
                    d = !1,
                    p = !1,
                    n = !1,
                    l = !0;
                if (o && e.each(o, (function(e, r) {
                        var t = I(r.value);
                        t.m == C(i, "m") && t.y == C(i, "y") && F(i, ".pick-lg-b li.pick-v[data-value=" + t.d + "]").addClass("pick-sl pick-sl-" + e)
                    })), d = F(i, ".pick-lg-b li.pick-sl-a"), p = r || F(i, ".pick-lg-b li.pick-sl-b"), a = { a: d.length ? F(i, ".pick-lg-b li").index(d) + 1 : 0, b: p.length ? F(i, ".pick-lg-b li").index(p) - 1 : F(i, ".pick-lg-b li").last().index() }, o.a.value != o.b.value && r && (l = !1), r ? (t = N(C(i, "m") + "/" + r.attr("data-value") + "/" + C(i, "y")), o.a.value == o.b.value && t > o.a.value && (n = !0)) : (t = N(C(i)), (t >= o.a.value && t <= o.b.value || d.length) && (n = !0)), l && F(i, ".pick-lg-b li").removeClass("pick-dir pick-dir-sl pick-dir-first pick-dir-last"), n)
                    for (var c = a.a; c <= a.b; c++) F(i, ".pick-lg-b li").eq(c).addClass("pick-dir");
                d.next(".pick-dir").addClass("pick-dir-first"), p.prev(".pick-dir").addClass("pick-dir-last")
            },
            C = function(e, i) { return i ? parseInt(e.key[i].current) : C(e, "m") + "/" + C(e, "d") + "/" + C(e, "y") },
            T = function(e, i) { return i ? parseInt(e.key[i].today) : T(e, "m") + "/" + T(e, "d") + "/" + T(e, "y") },
            M = function(e, i, r) { var t = e.key[i]; return r > t.max ? M(e, i, r - t.max + (t.min - 1)) : r < t.min ? M(e, i, r + 1 + (t.max - t.min)) : r },
            j = function(e) { return !!e && { selector: e.selector, date: E(e) } },
            z = function(e, i) { return F(e, 'ul.pick[data-k="' + i + '"]') },
            S = function(i, r, t) { ul = z(i, r); var a = []; return ul.find("li").each((function() { a.push(e(this).attr("value")) })), "last" == t ? a[a.length - 1] : a[0] },
            A = function(i, r) {
                var t = !1;
                for (var o in "Y" != i.format && "m" != i.format || (i.hideDay = !0, "Y" == i.format && (i.hideMonth = !0), "m" == i.format && (i.hideYear = !0), t = !0), (i.hideDay || i.hideMonth || i.hideYear) && (t = !0), i.largeOnly && (i.large = !0, i.largeDefault = !0), (i.hideMonth || i.hideDay || i.hideYear || i.showOnlyEnabledDays) && (i.largeOnly = !1, i.large = !1, i.largeDefault = !1), i.element = e("<div>", { class: "datedropper " + (t ? "picker-clean" : "") + " " + (i.modal ? "picker-modal" : "") + " " + i.theme + " " + (i.fx ? "picker-fxs" : "") + " " + (i.large && i.largeDefault ? "picker-lg" : ""), id: i.identifier, html: e("<div>", { class: "picker" }) }).appendTo("body"), i.key) { var d = !0; "y" == o && i.hideYear && (d = !1), "d" == o && i.hideDay && (d = !1), "m" == o && i.hideMonth && (d = !1), d && (e("<ul>", { class: "pick pick-" + o, "data-k": o, tabindex: 0 }).appendTo(F(i, ".picker")), Q(i, o)) }
                i.large && e("<div>", { class: "pick-lg" }).insertBefore(F(i, ".pick-d")), e("<div>", { class: "pick-btns" }).appendTo(F(i, ".picker")), e("<div>", { tabindex: 0, class: "pick-submit", html: e(e.dateDropperSetup.icons.checkmark) }).appendTo(F(i, ".pick-btns")), i.large && !i.largeOnly && e("<div>", { class: "pick-btn pick-btn-sz", html: e(e.dateDropperSetup.icons.expand) }).appendTo(F(i, ".pick-btns")), setTimeout((function() { i.element.addClass("picker-focused"), f() || setTimeout((function() { F(i, ".pick:first-of-type").focus() }), 100), i.element.hasClass("picker-modal") && (i.overlay = e('<div class="picker-overlay"></div>').appendTo("body")), v(i), H(i), $(i), a = i, r && r() }), 100)
            },
            Y = function(e) { var i = e.attr("data-datedropper-id"); return r[i] || !1 },
            F = function(e, i) { if (e.element) return e.element.find(i) },
            J = function(i, r) { if ("string" == typeof r) { if (g(r)) { var t = r.match(/\d+/g); return e.each(t, (function(e, i) { t[e] = parseInt(i) })), { m: t[0] && t[0] <= 12 ? t[0] : i.key.m.today, d: t[1] && t[1] <= 31 ? t[1] : i.key.d.today, y: t[2] || i.key.y.today } } return !1 } return !1 },
            O = "div.datedropper.picker-focused",
            E = function(i, r) {
                r || (r = { d: C(i, "d"), m: C(i, "m"), y: C(i, "y") });
                var t = r.d,
                    a = r.m,
                    o = r.y,
                    d = new Date(a + "/" + t + "/" + o).getDay(),
                    p = { F: e.dateDropperSetup.languages[i.lang].months.full[a - 1], M: e.dateDropperSetup.languages[i.lang].months.short[a - 1], D: e.dateDropperSetup.languages[i.lang].weekdays.full[d].substr(0, 3), l: e.dateDropperSetup.languages[i.lang].weekdays.full[d], d: L(t), m: L(a), S: P(t), Y: o, U: N(C(i)), n: a, j: t },
                    n = i.format.replace(/\b(F)\b/g, p.F).replace(/\b(M)\b/g, p.M).replace(/\b(D)\b/g, p.D).replace(/\b(l)\b/g, p.l).replace(/\b(d)\b/g, p.d).replace(/\b(m)\b/g, p.m).replace(/\b(S)\b/g, p.S).replace(/\b(Y)\b/g, p.Y).replace(/\b(U)\b/g, p.U).replace(/\b(n)\b/g, p.n).replace(/\b(j)\b/g, p.j);
                return p.formatted = n, p
            },
            L = function(e) { return e < 10 ? "0" + e : e },
            P = function(e) {
                var i = ["th", "st", "nd", "rd"],
                    r = e % 100;
                return e + (i[(r - 20) % 10] || i[r] || i[0])
            },
            N = function(e) { return Date.parse(e) / 1e3 },
            I = function(e) { var i = new Date(1e3 * e); return { m: i.getMonth() + 1, y: i.getFullYear(), d: i.getDate() } },
            R = function(i) {
                var r = '[data-dd-roundtrip="' + i.roundtrip + '"]',
                    t = !1;
                if (e(r).length) {
                    t = {};
                    e.each(["a", "b"], (function(i, a) {
                        var o = e(r + "[data-dd-roundtrip-" + a + "]");
                        t[a] = { value: o.length && o.attr("data-dd-roundtrip-" + a) || !1, selector: !!o.length && o }
                    }))
                }
                return t
            },
            V = function(e) { e.large && (e.element.addClass("picker-transit").toggleClass("picker-lg"), e.element.hasClass("picker-lg") && W(e), setTimeout((function() { e.element.removeClass("picker-transit") }), 800)) },
            H = function(e) {
                if (!e.element.hasClass("picker-modal")) {
                    var i = e.selector,
                        r = i.offset().left + i.outerWidth() / 2,
                        t = i.offset().top + i.outerHeight();
                    e.element.css({ left: r, top: t })
                }
            },
            B = function(i) {
                i.jump = h(i.jump) || 10, i.maxYear = h(i.maxYear), i.minYear = h(i.minYear), i.lang in e.dateDropperSetup.languages || (i.lang = "en"), i.key = { m: { min: 1, max: 12, current: (new Date).getMonth() + 1, today: (new Date).getMonth() + 1 }, d: { min: 1, max: 31, current: (new Date).getDate(), today: (new Date).getDate() }, y: { min: i.minYear || (new Date).getFullYear() - 50, max: i.maxYear || (new Date).getFullYear() + 50, current: (new Date).getFullYear(), today: (new Date).getFullYear() } }, i.key.y.current > i.key.y.max && (i.key.y.current = i.key.y.max), i.key.y.current < i.key.y.min && (i.key.y.current = i.key.y.min), i.minYear && (i.minDate = "01/01/" + i.minYear), i.maxYear && (i.maxDate = "12/31/" + i.maxYear);
                var r = i.defaultDate ? N(i.defaultDate) : N(C(i));
                if (i.minDate) {
                    var t = !!i.minDate && N(i.minDate);
                    r && t & r < t && (i.defaultDate = i.minDate)
                }
                if (i.maxDate) {
                    var a = !!i.maxDate && N(i.maxDate);
                    r && a && r > a && (i.defaultDate = i.maxDate)
                }
                if (i.defaultDate && U(i, I(N(i.defaultDate))), i.disabledDays = i.disabledDays ? i.disabledDays.split(",") : null, i.enabledDays = i.enabledDays ? i.enabledDays.split(",") : null, i.disabledDays && e.each(i.disabledDays, (function(e, r) { r && g(r) && (i.disabledDays[e] = N(r)) })), i.enabledDays && e.each(i.enabledDays, (function(e, r) { r && g(r) && (i.enabledDays[e] = N(r)) })), i.showOnlyEnabledDays && i.enabledDays) {
                    var o = (r = !!i.defaultDate && N(i.defaultDate)) && i.enabledDays.includes(r) ? I(r) : I(i.enabledDays[0]);
                    e.each(o, (function(e, r) { i.key[e].current = r }))
                } else i.showOnlyEnabledDays = !1;
                if (i.roundtrip) {
                    N(C(i));
                    var d = e('[data-dd-roundtrip="' + i.roundtrip + '"]');
                    d.length > 1 ? d.each((function() {
                        var i = 0 == d.index(e(this)) ? "a" : "b";
                        e(this).attr("data-dd-roundtrip-" + i, 0), e(this).attr("data-dd-roundtrip-selector", "b")
                    })) : (e.each(["a", "b"], (function(e, r) { i.selector.attr("data-dd-roundtrip-" + r, 0) })), i.selector.attr("data-dd-roundtrip-selector", "b"));
                    var p = e('[data-dd-roundtrip="' + i.roundtrip + '"][data-dd-roundtrip-a]'),
                        n = e('[data-dd-roundtrip="' + i.roundtrip + '"][data-dd-roundtrip-b]');
                    if (p.attr("data-dd-default-date") && n.attr("data-dd-default-date")) {
                        var l = N(p.attr("data-dd-default-date")),
                            c = N(n.attr("data-dd-default-date"));
                        l && c && (p.attr("data-dd-roundtrip-a", l), n.attr("data-dd-roundtrip-b", c))
                    }
                    i.largeOnly = !0
                }
                if (i.selector.on(i.eventListener, (function(i) { i.preventDefault(), e(this).blur(), K(e(this)) })), i.trigger && e(i.trigger).on("click", (function(e) { i.selector.trigger(i.eventListener) })), i.onReady && i.onReady(j(i)), i.defaultDate) {
                    var s = J(i, i.defaultDate);
                    s && (e.each(s, (function(e, r) { i.key[e] && (i.key[e].current = r) })), i.key.y.current > i.key.y.max && (i.key.y.max = i.key.y.current), i.key.y.current < i.key.y.min && (i.key.y.min = i.key.y.current))
                }
            },
            G = function(e, i) { e.element && (e.element.remove(), e.overlay && e.overlay.remove(), A(e)) },
            K = function(e, i) {
                a && q(a);
                var r = Y(e);
                r && A(r)
            },
            q = function(e) {
                var i = { element: e.element, overlay: e.overlay };
                i.element && (i.element.removeClass("picker-focused"), setTimeout((function() { i.element.remove(), i.overlay && i.overlay.addClass("picker-overlay-hidden") }), 400)), a = null
            },
            X = function(e) { if (e) { var i, r, t = !1; return i = N(C(e)), r = N(T(e)), e.lock && ("from" == e.lock && (t = i < r), "to" == e.lock && (t = i > r)), (e.minDate || e.maxDate) && (i = N(C(e)), r = e.minDate ? N(e.minDate) : null, c = e.maxDate ? N(e.maxDate) : null, r && c ? t = i < r || i > c : r ? t = i < r : c && (t = i > c)), e.disabledDays && !e.enabledDays && (t = -1 != e.disabledDays.indexOf(i)), e.enabledDays && !e.disabledDays && (t = -1 == e.enabledDays.indexOf(i)), t ? (re(e), e.element.addClass("picker-locked"), !0) : (e.element.removeClass("picker-locked"), !1) } },
            Q = function(r, t) {
                var a = z(r, t),
                    o = r.key[t];
                for (a.empty(), i = o.min; i <= o.max; i++) { var d = i; "m" == t && (d = e.dateDropperSetup.languages[r.lang].months.short[i - 1]), d += "d" == t ? "<span></span>" : "", e("<li>", { value: i, html: "<div>" + d + "</div>" }).appendTo(a) }
                e.each(["l", "r"], (function(i, r) { e("<div>", { class: "pick-arw pick-arw-s1 pick-arw-" + r, html: e("<div>", { class: "pick-i-" + r, html: e(e.dateDropperSetup.icons.arrow[r]) }) }).appendTo(a) })), "y" == t && e.each(["l", "r"], (function(i, r) { e("<div>", { class: "pick-arw pick-arw-s2 pick-arw-" + r, html: e("<div>", { class: "pick-i-" + r, html: e(e.dateDropperSetup.icons.arrow[r]) }) }).appendTo(a) })), _(r, t, C(r, t))
            },
            W = function(i) {
                F(i, ".pick-lg").empty().append('<ul class="pick-lg-h"></ul><ul class="pick-lg-b"></ul>');
                for (var r = function(e) { return e.startFromMonday ? [1, 2, 3, 4, 5, 6, 0] : [0, 1, 2, 3, 4, 5, 6] }(i), t = 0; t < 7; t++) e("<li>", { html: "<div>" + e.dateDropperSetup.languages[i.lang].weekdays.short[r[t]] + "</div>" }).appendTo(F(i, ".pick-lg .pick-lg-h"));
                for (t = 0; t < 42; t++) e("<li>", { html: e("<div>") }).appendTo(F(i, ".pick-lg .pick-lg-b"));
                var a = 0,
                    o = F(i, ".pick-lg-b"),
                    d = (new Date(C(i)), new Date(C(i))),
                    p = new Date(C(i)),
                    n = function(e) {
                        var i = e.getMonth(),
                            r = e.getFullYear();
                        return [31, r % 4 == 0 && (r % 100 != 0 || r % 400 == 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][i]
                    };
                p.setMonth(p.getMonth() - 1), d.setDate(1);
                var l = d.getDay() - 1;
                l < 0 && (l = 6), i.startFromMonday && --l < 0 && (l = 6);
                for (t = n(p) - l; t <= n(p); t++) o.find("li").eq(a).addClass("pick-b pick-n pick-h").attr("data-value", t), a++;
                for (t = 1; t <= n(d); t++) o.find("li").eq(a).addClass("pick-n pick-v").attr("data-value", t), a++;
                if (o.find("li.pick-n").length < 42) { var c = 42 - o.find("li.pick-n").length; for (t = 1; t <= c; t++) o.find("li").eq(a).addClass("pick-a pick-n pick-h").attr("data-value", t), a++ }
                if (i.lock && ("from" === i.lock ? C(i, "y") <= T(i, "y") && (C(i, "m") == T(i, "m") ? F(i, '.pick-lg .pick-lg-b li.pick-v[data-value="' + T(i, "d") + '"]').prevAll("li").addClass("pick-lk") : (C(i, "m") < T(i, "m") || C(i, "m") > T(i, "m") && C(i, "y") < T(i, "y")) && F(i, ".pick-lg .pick-lg-b li").addClass("pick-lk")) : C(i, "y") >= T(i, "y") && (C(i, "m") == T(i, "m") ? F(i, '.pick-lg .pick-lg-b li.pick-v[data-value="' + T(i, "d") + '"]').nextAll("li").addClass("pick-lk") : (C(i, "m") > T(i, "m") || C(i, "m") < T(i, "m") && C(i, "y") > T(i, "y")) && F(i, ".pick-lg .pick-lg-b li").addClass("pick-lk"))), i.maxDate) {
                    var s = J(i, i.maxDate);
                    if (s)
                        if (C(i, "y") == s.y && C(i, "m") == s.m) F(i, '.pick-lg .pick-lg-b li.pick-v[data-value="' + s.d + '"]').nextAll("li").addClass("pick-lk");
                        else {
                            var u = N(i.maxDate);
                            N(C(i)) > u && F(i, ".pick-lg .pick-lg-b li.pick-v").addClass("pick-lk")
                        }
                }
                if (i.minDate) {
                    var k = J(i, i.minDate);
                    if (k)
                        if (C(i, "y") == k.y && C(i, "m") == k.m) F(i, '.pick-lg .pick-lg-b li.pick-v[data-value="' + k.d + '"]').prevAll("li").addClass("pick-lk");
                        else {
                            var m = N(i.minDate);
                            N(C(i)) < m && F(i, ".pick-lg .pick-lg-b li.pick-v").addClass("pick-lk")
                        }
                }
                i.disabledDays && !i.enabledDays && e.each(i.disabledDays, (function(e, r) {
                    if (r) {
                        var t = I(r);
                        t.m == C(i, "m") && t.y == C(i, "y") && F(i, '.pick-lg .pick-lg-b li.pick-v[data-value="' + t.d + '"]').addClass("pick-lk")
                    }
                })), i.enabledDays && !i.disabledDays && (F(i, ".pick-lg .pick-lg-b li").addClass("pick-lk"), e.each(i.enabledDays, (function(e, r) {
                    if (r) {
                        var t = I(r);
                        t.m == C(i, "m") && t.y == C(i, "y") && F(i, '.pick-lg .pick-lg-b li.pick-v[data-value="' + t.d + '"]').removeClass("pick-lk")
                    }
                }))), i.roundtrip ? D(i) : F(i, ".pick-lg-b li.pick-v[data-value=" + C(i, "d") + "]").addClass("pick-sl"), C(i, "m") == T(i, "m") && C(i, "y") == T(i, "y") && F(i, ".pick-lg-b li.pick-v[data-value=" + T(i, "d") + "]").addClass("pick-today")
            },
            U = function(i, r) { e.each(r, (function(e, r) { i.key[e].current = r })) },
            $ = function(i, r) {
                i.element.hasClass("picker-lg") && W(i),
                    function(i) {
                        var r = C(i, "m"),
                            t = C(i, "y"),
                            a = t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
                        i.key.d.max = [31, a ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1], C(i, "d") > i.key.d.max && (i.key.d.current = i.key.d.max, _(i, "d", C(i, "d"))), F(i, ".pick-d li").removeClass("pick-wke").each((function() {
                            var a = new Date(r + "/" + e(this).attr("value") + "/" + t).getDay();
                            e(this).find("span").html(e.dateDropperSetup.languages[i.lang].weekdays.full[a]), 0 != a && 6 != a || e(this).addClass("pick-wke")
                        })), i.element.hasClass("picker-lg") && (F(i, ".pick-lg-b li").removeClass("pick-wke"), F(i, ".pick-lg-b li.pick-v").each((function() {
                            var i = new Date(r + "/" + e(this).attr("data-value") + "/" + t).getDay();
                            0 != i && 6 != i || e(this).addClass("pick-wke")
                        })))
                    }(i), X(i) || (! function(e) {
                        clearInterval(p);
                        var i = e.minYear || e.key.y.current - 50,
                            r = e.maxYear || e.key.y.current + 50;
                        e.key.y.max = r, e.key.y.min = i, p = setTimeout((function() { Q(e, "y") }), 400)
                    }(i), te(i), r && r(i))
            },
            _ = function(e, i, r) {
                var t, a = z(e, i);
                (a.find("li").removeClass("pick-sl pick-bfr pick-afr"), r == S(e, i, "last")) && ((t = a.find('li[value="' + S(e, i, "first") + '"]')).clone().insertAfter(a.find("li[value=" + r + "]")), t.remove());
                r == S(e, i, "first") && ((t = a.find('li[value="' + S(e, i, "last") + '"]')).clone().insertBefore(a.find("li[value=" + r + "]")), t.remove());
                a.find("li[value=" + r + "]").addClass("pick-sl"), a.find("li.pick-sl").nextAll("li").addClass("pick-afr"), a.find("li.pick-sl").prevAll("li").addClass("pick-bfr"), Z(e)
            },
            Z = function(e) { e.loopAll && e.loopYears || (e.minYear && e.key.y.current == e.minYear ? F(e, ".pick-y .pick-arw-l").addClass("pick-arw-hidden") : F(e, ".pick-y .pick-arw-l").removeClass("pick-arw-hidden"), e.maxYear && e.key.y.current == e.maxYear ? F(e, ".pick-y .pick-arw-r").addClass("pick-arw-hidden") : F(e, ".pick-y .pick-arw-r").removeClass("pick-arw-hidden")), e.loopAll && e.loopMonths || (e.key.m.current == e.key.m.min ? F(e, ".pick-m .pick-arw-l").addClass("pick-arw-hidden") : F(e, ".pick-m .pick-arw-l").removeClass("pick-arw-hidden"), e.key.m.current == e.key.m.max ? F(e, ".pick-m .pick-arw-r").addClass("pick-arw-hidden") : F(e, ".pick-m .pick-arw-r").removeClass("pick-arw-hidden")), e.loopAll && e.loopDays || (e.key.d.current == e.key.d.min ? F(e, ".pick-d .pick-arw-l").addClass("pick-arw-hidden") : F(e, ".pick-d .pick-arw-l").removeClass("pick-arw-hidden"), e.key.d.current == e.key.d.max ? F(e, ".pick-d .pick-arw-r").addClass("pick-arw-hidden") : F(e, ".pick-d .pick-arw-r").removeClass("pick-arw-hidden")) },
            ee = function(e, i, r) {
                var t = e.key[i];
                r > t.max && ("d" == i && e.autoIncrease && ie(e, "m", "right"), "m" == i && e.autoIncrease && ie(e, "y", "right"), r = t.min), r < t.min && ("d" == i && e.autoIncrease && ie(e, "m", "left"), "m" == i && e.autoIncrease && ie(e, "y", "left"), r = t.max), e.key[i].current = r, _(e, i, r)
            },
            ie = function(i, r, t) {
                if (i.showOnlyEnabledDays && i.enabledDays) ! function(i, r) {
                    for (var t = N(C(i)), a = i.enabledDays, o = (a.length, null), d = 0; d < a.length; d++) a[d] === t && (o = d);
                    "right" == r ? o++ : o--;
                    var p = !!a[o] && I(a[o]);
                    p && e.each(p, (function(e, r) { i.key[e].current = r, ee(i, e, r) }))
                }(i, t);
                else { var a = C(i, r); "right" == t ? a++ : a--, ee(i, r, a) }
            },
            re = function(e) { e.element.find(".picker").addClass("picker-rumble") },
            te = function(i, t) {
                var a = !0;
                if (i.roundtrip) {
                    a = !1;
                    var o = R(i);
                    if ("0" != o.a.value && "0" != o.b.value) {
                        var d = w(o.a.value, o.b.value),
                            p = i.minRoundtripSelection;
                        if (p && d <= p) {
                            var n = 86400 * p;
                            o.b.value = parseInt(o.a.value) + n
                        }
                        var l = i.maxRoundtripSelection;
                        if (l && d >= l) {
                            n = 86400 * l;
                            o.b.value = parseInt(o.a.value) + n
                        }
                        if (e('.picker-trigger[data-dd-roundtrip="' + i.selector.data("dd-roundtrip") + '"]').length > 1) e.each(o, (function(e, t) {
                            var a = t.selector.attr("data-datedropper-id"),
                                o = I(t.value),
                                d = E(i, o);
                            i.identifier != a && r[a] && (r[a].key.m.current = o.m, r[a].key.d.current = o.d, r[a].key.y.current = o.y), t.selector.is("input") && t.selector.val(d.formatted).change()
                        }));
                        else {
                            var c = { a: E(i, I(o.a.value)), b: E(i, I(o.b.value)) };
                            i.selector.val(c.a.formatted + " - " + c.b.formatted)
                        }
                        i.onRoundTripChange && i.onRoundTripChange({ outward: I(o.a.value), return: I(o.b.value), days: w(o.a.value, o.b.value) }), i.onChange && i.onChange(j(i))
                    }
                } else a = !!t || i.autofill;
                if (a) {
                    var s = E(i);
                    i.selector.is("input") && i.selector.val(s.formatted).change(), i.changeValueTo && ae(i, s.formatted), i.onChange && i.onChange(j(i))
                }
            },
            ae = function(i, r) {
                var t = e(i.changeValueTo);
                t.length && t.is("input") && t.val(r).change()
            };
        e(document).on("keydown", (function(i) {
            var r = i.which;
            if (a && !f())
                if (32 == r) F(a, ":focus").click(), i.preventDefault();
                else if (9 == r && i.shiftKey) e(i.target).is(".pick-m") && (i.preventDefault(), e(".datedropper .pick-submit").focus());
            else if (9 == r) e(i.target).is(".pick-submit") && (i.preventDefault(), e(".datedropper .pick-m").focus());
            else if (27 == r) q(a);
            else if (13 == r) F(a, ".pick-submit").trigger(b.i);
            else if (37 == r || 39 == r) {
                var t = F(a, ".pick:focus");
                if (t.length && (37 == r || 39 == r)) {
                    if (37 == r) var o = "left";
                    if (39 == r) o = "right";
                    var d = t.attr("data-k");
                    ie(a, d, o), $(a)
                }
            }
        })).on("focus", ".pick-d", (function() {
            if (a) {
                var e = a.element.find(".pick-lg");
                e.length && !e.hasClass("pick-lg-focused") && e.addClass("pick-lg-focused")
            }
        })).on("blur", ".pick-d", (function() {
            if (a) {
                var e = a.element.find(".pick-lg");
                e.length && e.hasClass("pick-lg-focused") && e.removeClass("pick-lg-focused")
            }
        })).on("click", (function(e) { a && (a.selector.is(e.target) || a.element.is(e.target) || 0 !== a.element.has(e.target).length || (q(a), o = null)) })).on(s, O + " .picker-rumble", (function() { e(this).removeClass("picker-rumble") })).on(l, ".picker-overlay", (function() { e(this).remove() })).on(b.i, O + " .pick-lg li.pick-v", (function() {
            if (a) {
                if (F(a, ".pick-lg-b li").removeClass("pick-sl"), e(this).addClass("pick-sl"), a.key.d.current = e(this).attr("data-value"), _(a, "d", e(this).attr("data-value")), a.roundtrip) {
                    var i = R(a),
                        r = N(C(a));
                    if (i) { var t = i.a.value == i.b.value ? "b" : "a"; "b" == t && (r <= i.a.value || "0" == i.a.value) && (t = "a"), "a" == t ? e.each(i, (function(e) { i[e].selector.attr("data-dd-roundtrip-" + e, r).attr("data-dd-roundtrip-selector", t) })) : i[t].selector.attr("data-dd-roundtrip-" + t, r).attr("data-dd-roundtrip-selector", t) }
                }
                $(a)
            }
        })).on("mouseleave", O + " .pick-lg .pick-lg-b li", (function() { a && a.roundtrip && D(a) })).on("mouseenter", O + " .pick-lg .pick-lg-b li", (function() {
            if (a) {
                var i = R(a);
                a.roundtrip && "0" != i.a.value && D(a, e(this))
            }
        })).on("click", O + " .pick-btn-sz", (function() { a && V(a) })).on(b.i, O + " .pick-arw.pick-arw-s2", (function(i) {
            if (a) {
                var r;
                i.preventDefault(), o = null;
                e(this).closest("ul").data("k");
                var t = a.jump;
                r = e(this).hasClass("pick-arw-r") ? C(a, "y") + t : C(a, "y") - t;
                var d = function(e, i, r) { for (var t = [], a = e.key[i], o = a.min; o <= a.max; o++) o % r == 0 && t.push(o); return t }(a, "y", t);
                r > d[d.length - 1] && (r = d[0]), r < d[0] && (r = d[d.length - 1]), a.key.y.current = r, _(a, "y", C(a, "y"))
            }
        })).on(b.i, O, (function(e) { a && F(a, "*:focus").blur() })).on(b.i, O + " .pick-arw.pick-arw-s1", (function(i) {
            if (a) {
                i.preventDefault(), o = null;
                var r = e(this).closest("ul").data("k"),
                    t = e(this).hasClass("pick-arw-r") ? "right" : "left";
                ie(a, r, t)
            }
        })).on(b.i, O + " ul.pick.pick-y li", (function() { k = !0 })).on(b.e, O + " ul.pick.pick-y li", (function() {
            var i;
            a && (!k || (i = a).jump >= i.key.y.max - i.key.y.min || (! function(i) {
                var r = F(i, ".picker-jumped-years");
                r.length && r.remove();
                var t = e("<div>", { class: "picker-jumped-years" }).appendTo(F(i, ".picker"));
                setTimeout((function() { t.addClass("picker-jumper-years-visible") }), 100);
                for (var a = i.key.y.min; a <= i.key.y.max; a++) a % i.jump == 0 && e("<div>", { "data-id": a }).click((function(r) {
                    var a = e(this).data("id");
                    ee(i, "y", a), $(i), t.removeClass("picker-jumper-years-visible"), setTimeout((function() { t.remove() }), 300)
                })).appendTo(t)
            }(a), k = !1))
        })).on(b.i, O + " ul.pick.pick-d li", (function() { a && (k = !0) })).on(b.e, O + " ul.pick.pick-d li", (function() { a && k && (V(a), k = !1) })).on(b.i, O + " ul.pick", (function(i) {
            if (a && (o = e(this))) {
                var r = o.data("k");
                d = f() ? i.originalEvent.touches[0].pageY : i.pageY, n = C(a, r)
            }
        })).on(b.m, (function(e) {
            if (a && (k = !1, o)) {
                e.preventDefault();
                var i = o.data("k"),
                    r = f() ? e.originalEvent.touches[0].pageY : e.pageY;
                r = d - r, r = Math.round(.026 * r);
                var t = M(a, i, n + r);
                t != a.key[i].current && ee(a, i, t), a.onPickerDragging && a.onPickerDragging({ key: i, value: t })
            }
        })).on(b.e, (function(e) { o && (o = null, d = null, n = null, a && ($(a), a.onPickerRelease && a.onPickerRelease(E(a)))) })).on(b.i, O + " .pick-submit", (function() { a && (X(a) || (te(a, !0), q(a))) })), e(window).resize((function() { a && (H(a), v(a)) })), document.addEventListener("touchmove", (function(i) {
            var r = e(i.target).closest(".picker-jumped-years").length;
            a && !r ? (e("html,body").css("touch-action", "none"), i.preventDefault()) : e("html,body").css("touch-action", "unset")
        }), { passive: !1 }), e.fn.dateDropper = function(e) {
            if (m() && m() < 10) console.error("[DATEDROPPER] This browser is not supported");
            else {
                if ("object" == typeof e || !e) return u.init.apply(this, arguments);
                if ("string" == typeof e && u[e]) return u[e].apply(this, Array.prototype.slice.call(arguments, 1));
                console.error("[DATEDROPPER] This method not exist")
            }
        }, e("head").append("<style>" + e.dateDropperSetup.inlineCSS + "</style>"), e(document).ready((function() { e.dateDropperSetup.autoInit && e(".datedropper-init, [data-datedropper]").each((function() { e(this).dateDropper() })) }))
    }(jQuery);