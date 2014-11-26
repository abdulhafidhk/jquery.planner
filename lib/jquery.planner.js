/*!
 * jQuery Planner V.1.4.0
 * @name jPlanner
 * @version 1.4.0
 * @requires jQuery v1.2.3+
 * @author Abdul Hafizdh K
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 * Copyright (c) 2014
 */
(function( $ ) {
 
    $.fn.jPlanner = function( data , option ) {
		var now = new Date();
		var def_val = {
			name: 'Plan',
			showEventDate: true,
			showDesc: true,
			showTooltipName: true,
			dataClass: '',
			color: '#ffffff',
			bgcolor: '#73B85E',
			startDate : now,
			endDate : new Date(now.getFullYear(),now.getMonth()+1,now.getDate())
		};
		var setting = $.extend({},def_val,option);
		var n_month = new Array(
			"January", 
			"February", 
			"March", 
			"April", 
			"May", 
			"June", 
			"July", 
			"August", 
			"September", 
			"October", 
			"November", 
			"December");
		var n_weeks = new Array(
			"Sunday", 
			"Monday", 
			"Tuesday", 
			"Wednesday", 
			"Thursday", 
			"Friday", 
			"Saturday");
		var today = new Date();
		var a_date = datepls(setting.startDate,setting.endDate);
		var str = "<div class='jplanner-container'><table class='jplanner-table' border='0' >";
			str += "<tr>";
			for(a=0;a<a_date.length;a++){
				le = a_date[a].length;
				if(a==0)le++;
				str += "<th colspan="+le+">"
				str += n_month[a_date[a][0].month];
				str += "</th>"
			}
			
			str += "</tr>";
			str += "<tr>";
			str += "<th class='jplanner-plan'>"+setting.name+"</th>";
			for(a=0;a<a_date.length;a++){
				for(b=0;b<a_date[a].length;b++){
					if(
						a_date[a][b].date == today.getDate() && 
						a_date[a][b].month == today.getMonth() &&
						a_date[a][b].year == today.getFullYear()
					){
						str += "<td class='jplanner-today' style='background-color:#ff0000;color:#fff;'>"
					}else{
						str += "<td>"
					}
					str += a_date[a][b].date;
					str += "</td>"
				}
			}
			str += "</tr>";
			/*
			data{id,name,start,end,color,bgcolor,desc}
			*/
			for(a=0;a<data.length;a++){
				a_sd = new Date(data[a].start);
				sd = new Date(a_sd.getFullYear(),a_sd.getMonth(),a_sd.getDate()).getTime();
				ed = new Date(data[a].end).getTime();
				str += "<tr>";
				str += "<td class='jplanner-plan'>"+data[a].name+"</td>";
				for(c=0;c<a_date.length;c++){
					for(b=0;b<a_date[c].length;b++){
						/* check if date is today */
						var add_today = "";
						if(
							a_date[c][b].date == today.getDate() && 
							a_date[c][b].month == today.getMonth() &&
							a_date[c][b].year == today.getFullYear()
						){
							add_today = "jplanner-today";
						}
						if(a_date[c][b].fullDate.getTime() >= sd && a_date[c][b].fullDate.getTime() <= ed){
							color = (typeof data[a].color != "undefined")?"color:"+data[a].color+";":"color:"+setting.color+";";
							bgcolor = (typeof data[a].bgcolor != "undefined")?"background-color:"+data[a].bgcolor+";":"background-color:"+setting.bgcolor+";";
							str += "<td class='jplanner-event "+add_today+" jp-event-"+data[a].id+"' style='"+color+""+bgcolor+" '>"
							str += "<span class='"+setting.dataClass+"'>";
							str += (setting.showEventDate)?a_date[c][b].date:'&nbsp;';
							str	+= "</span>";
							if(setting.showDesc){
								ttlp_add = (setting.showTooltipName)?data[a].name:"";
								str += (typeof data[a].desc != "undefined")?"<span class='j-event-tooltip'><b></b>"+ttlp_add+" : "+data[a].desc+"</span>":"";
							}
							str += "</td>"
						}else{
							str += "<td class='"+add_today+"'>&nbsp;</td>"
						}
					}
				}
				
				str += "</tr>";
			}
		str += "</table></div>";
		$(this).append(str);
		$(this).css("position","relative");
        return this;
    };
	
	function datepls(start,end){
		str_d = new Date(start);
		end_d = new Date(end);
		var i = (str_d.getTime()/1000/3600/24);
		var i_max = (end_d.getTime()/1000/3600/24);
		
		var array_d = new Array();
		var array_date = new Array();
		
		count_month = 0;
		last_month = str_d.getMonth();
		a = 0;
		
		for(i;i<=i_max;i++){
			var d = new Date(i*24*3600*1000);
			var the_date = {
				fullDate: d,
				date: d.getDate(),
				month: d.getMonth(),
				year: d.getFullYear(),
				week: d.getUTCDay(),
				dateNumber: d.getUTCDate(),
				time: d.getTime()
			};
			if(last_month != the_date.month){
				array_date[count_month++] = array_d;
				array_d = [];
				last_month = the_date.month;
			}
			array_d.push(the_date);
		}
		array_date[count_month] = array_d;
		
		return array_date;
	};
}( jQuery ));
