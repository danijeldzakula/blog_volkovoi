(function($, document) {

	var pluses = /\+/g;
	function raw(s) {
		return s;
	}
	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	$.cookie = function(key, value, options) {

		// key and at least value given, set cookie...
		if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value == null)) {
			options = $.extend({}, $.cookie.defaults, options);

			if (value == null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// key and possibly options given, get cookie...
		options = value || $.cookie.defaults || {};
		var decode = options.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
			if (decode(parts.shift()) === key) {
				return decode(parts.join('='));
			}
		}
		return null;
	};

	$.cookie.defaults = {};

})(jQuery, document);

$(document).ready(function(){
    var nowDateyp = new Date();
    var nowYear = nowDateyp.getFullYear();
    $('.nowyear').text(nowYear);
    
    if($.cookie('ypdates')){
        var datesArr = $.cookie('ypdates').split(',');
        for(var x=0; x<=$('.ypdate').length; x++){
            var nextdate = new Date(datesArr[x]);
            ndate = nextdate.getDate();
            nmonth = nextdate.getMonth() + 1;
            nyear = nextdate.getFullYear();
            nhour = nextdate.getHours();
            if(ndate < 10) ndate = '0'+ndate;
            if(nmonth < 10) nmonth = '0'+nmonth;
            if(nhour < 10) nhour = '0'+nhour;
            nminutes = nextdate.getMinutes();
            if(nminutes < 10) nminutes = '0'+nminutes;
            nsec = nextdate.getSeconds();
            if(nsec < 10) nsec = '0'+nsec;
            
            $('.ypdate:eq('+x+')').text(ndate +'.'+ nmonth +'.'+ nyear +' - ' + nhour +':'+ nminutes/* +':'+ nsec*/);
        }
        
        var startdatecook = new Date(datesArr[0]);
        
        var startday = startdatecook.getDate();
        var startmonth = startdatecook.getMonth() + 1;
        var startyear = startdatecook.getFullYear();        
        var ypm;
        switch (startmonth) {
            case 1: ypm='января'; break;
            case 2: ypm='февраля'; break;
            case 3: ypm='марта'; break;
            case 4: ypm='апреля'; break;
            case 5: ypm='мая'; break;
            case 6: ypm='июня'; break;
            case 7: ypm='июля'; break;
            case 8: ypm='августа'; break;
            case 9: ypm='сентября'; break;
            case 10: ypm='октября'; break;
            case 11: ypm='ноября'; break;
            case 12: ypm='декабря'; break;
        }
        var startDate = startday + ' ' + ypm + ' ' + startyear;
        $('.startdate').text(startDate);
    }
    else{        
        var beforeFirst = new Date( nowDateyp.getTime() - (23 * 10 * 60 * 60 * 1000));
        var nextDates = [];
        for (var i=0;i<=35;i++){
            var z = i;
            if(i >= 16) z = 16;
            nextDates.push(new Date( beforeFirst.getTime() + (z * (20 + z) * (60 + i) * 60 * (1000 + i))));        
        }
        
        for(var x=0; x<=$('.ypdate').length; x++){
            var ndate = nextDates[x].getDate();
            var nmonth = nextDates[x].getMonth() + 1;
            var nyear = nextDates[x].getFullYear();
            var nhour = nextDates[x].getHours();
            if(ndate < 10) ndate = '0'+ndate;
            if(nmonth < 10) nmonth = '0'+nmonth;
            if(nhour < 10) nhour = '0'+nhour;
            var nminutes = nextDates[x].getMinutes();
            if(nminutes < 10) nminutes = '0'+nminutes;
            var nsec = nextDates[x].getSeconds();
            if(nsec < 10) nsec = '0'+nsec;
            
            $('.ypdate:eq('+x+')').text(ndate +'.'+ nmonth +'.'+ nyear +' - ' + nhour +':'+ nminutes/* +':'+ nsec*/);
        }
                
        $.cookie('ypdates', nextDates, { expires: 1 });
        
        var startday = beforeFirst.getDate();
        var startmonth = beforeFirst.getMonth() + 1;
        var startyear = beforeFirst.getFullYear();        
        var ypm;
        switch (startmonth) {
            case 1: ypm='января'; break;
            case 2: ypm='февраля'; break;
            case 3: ypm='марта'; break;
            case 4: ypm='апреля'; break;
            case 5: ypm='мая'; break;
            case 6: ypm='июня'; break;
            case 7: ypm='июля'; break;
            case 8: ypm='августа'; break;
            case 9: ypm='сентября'; break;
            case 10: ypm='октября'; break;
            case 11: ypm='ноября'; break;
            case 12: ypm='декабря'; break;
        }
        var startDate = startday + ' ' + ypm + ' ' + startyear;
        $('.startdate').text(startDate);
    }    
});