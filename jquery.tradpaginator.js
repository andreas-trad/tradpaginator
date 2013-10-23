/*global jQuery */
/*!	
* tradpaginator.js 0.7
*
* Copyright 2012, Andreas Trantidis 
* atrantidis@gmail.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
*/


(function( $, _ ){
	var selectedpage;
	var m_templateloaded = false;
	var m_templatefunct = [];
	_.templateSettings.variable = "pages";
	var aa = 1;
	
	var getbaseurlforlayoutload = function(){
		var fullsrc = $('script[src*="jquery.tradpaginator.js"]').attr('src');
		var urlarray = fullsrc.split('/'); console.log(urlarray);
		urlarray.pop();
		return urlarray.join('/')
	}
	
	var dotheordering = function(that, settings){
		if(settings.orderinginfo.enable){
			if($('.tradpaginatororder[data-col="' + settings.orderinginfo.currentorderbycol + '"]').length == 0 && settings.devmode){
				alert('!!!tradpaginator alert!!!\nThe current orderby column span does not exist in the DOM');
			}
			else{
				$(".tradpaginatororder").removeClass('tradpaginatordesc').removeClass('tradpaginatorasc');
				var touse = '';
				if(settings.orderinginfo.currentascdesc == settings.orderinginfo.ascendingvalue)
					touse = 'asc';
				else if(settings.orderinginfo.currentascdesc == settings.orderinginfo.descendingvalue)
					touse = 'desc';
				//alert($(".tradpaginatororder").find("[data-col='" + settings.orderinginfo.currentorderbycol + "']").attr('data-col'));
				//alert($('.tradpaginatororder[data-col="' + settings.orderinginfo.currentorderbycol + '"]').attr('data-col'));
				$('.tradpaginatororder[data-col="' + settings.orderinginfo.currentorderbycol + '"]').addClass('tradpaginator' + touse);	
			}
			$(".tradpaginatororder").click(function(){
				var ascdesc = settings.orderinginfo.ascendingvalue;
				var orderbytopass = $(this).attr('data-col');
				if(settings.orderinginfo.currentorderbycol == $(this).attr('data-col')){
					if(settings.orderinginfo.currentascdesc == settings.orderinginfo.ascendingvalue)
						ascdesc = settings.orderinginfo.descendingvalue;
					else
						ascdesc = settings.orderinginfo.ascendingvalue;
				}
				if(settings.submitionmethod == 'form'){
					if(($("#" + settings.postMethodOptions.alignbyinputid).length == 0 || $("#" + settings.postMethodOptions.formid).length == 0 || $("#" + settings.postMethodOptions.ascdescinputid).length == 0) && settings.devmode)
					{
						alert('!!!tradpaginator alert!!!\nThe form id or the hidden align by or the hidden ascdesc input id does not exist in the DOM');	
					}
					else{
						$("#" + settings.postMethodOptions.alignbyinputid).val(orderbytopass);
						$("#" + settings.postMethodOptions.ascdescinputid).val(ascdesc);
						$("#" + settings.postMethodOptions.formid).submit();
					}
				}
				else if(settings.submitionmethod == 'url'){
					var url =  window.location.toString();
					var urlarray = url.split("?");
					var query = '';
					if(urlarray.length > 1)
					{
						query = urlarray[1];
					}
					var queryarray = query.split("&");
					var newqueryarray = [];
					var orderbykeyfound = false;
					var ascdesckeyfound = false;
					if(queryarray.length > 1)
					{
						for(var i=0; i<queryarray.length; i++)
						{
							if(queryarray[i].split('=')[0] == settings.getMethodOptions.orderbyinputvarname)
							{
								orderbykeyfound = true;
								newqueryarray.push(queryarray[i].split('=')[0] + '=' + orderbytopass);
							}
							else if(queryarray[i].split('=')[0] == settings.getMethodOptions.ascdescinputvarname)
							{
								ascdesckeyfound = true;
								newqueryarray.push(queryarray[i].split('=')[0] + '=' + ascdesc);
							}
							else
							{
								newqueryarray.push(queryarray[i]);
							}
						}
					}
					if(!orderbykeyfound)
					{
						newqueryarray.push(settings.getMethodOptions.orderbyinputvarname + '=' + orderbytopass);
					}
					if(!ascdesckeyfound)
					{
						newqueryarray.push(settings.getMethodOptions.ascdescinputvarname + '=' + ascdesc);
					}
					console.log(newqueryarray);
					window.location = urlarray[0] + '?' + newqueryarray.join("&");
				}
			});
		}
	}
	
	var dodisplay = function(that, settings){
		//console.log(getPagesRange(curpage, totalpagesonresultset));
		that.each(function(){
			$(that).html(m_templatefunct[settings.style](
				{
					pagebutts:getPagesRange(settings.curpage, settings.totalpagesonresultset, settings),
					includeprevnext:settings.include_previousnextbuttons,
					previous:settings.previous,
					next:settings.next,
					includefirstlast:settings.include_fistlastbuttons,
					first:settings.first,
					last:settings.last,
					lastpage:settings.totalpagesonresultset,
					runningpage:settings.curpage,
					include_jumpmenu:settings.include_jumpmenu,
					jumpmenu_caption:settings.jumpmenu_caption,
					aa:aa
				}
			));
		});
		
		var clickmethodfunct = function(pageno){
			if(settings.submitionmethod == 'form')
			{
				if($("#" + settings.postMethodOptions.pageinputid).length == 0 || $("#" + settings.postMethodOptions.formid).length == 0 && settings.devmode)
				{
					alert('!!!tradpaginator alert!!!\nThe form id or the hidden page number input id does not exist in the DOM');	
				}
				else
				{
					$("#" + settings.postMethodOptions.pageinputid).val(pageno);
					$("#" + settings.postMethodOptions.formid).submit();
				}
			}
			else if(settings.submitionmethod == 'url')
			{
				var url =  window.location.toString();
				var urlarray = url.split("?");
				var query = '';
				if(urlarray.length > 1)
				{
					query = urlarray[1];
				}
				var queryarray = query.split("&");
				var newqueryarray = [];
				var pagekeyfound = false;
				if(queryarray.length > 0)
				{
					for(var i=0; i<queryarray.length; i++)
					{
						if(queryarray[i].split('=')[0] == settings.getMethodOptions.pageinputvarname)
						{
							pagekeyfound = true;
							newqueryarray.push(queryarray[i].split('=')[0] + '=' + pageno);
						}
						else
						{
							newqueryarray.push(queryarray[i]);
						}
					}
				}
				if(!pagekeyfound)
				{
					newqueryarray.push(settings.getMethodOptions.pageinputvarname + '=' + pageno);
				}
				console.log(newqueryarray);
				window.location = urlarray[0] + '?' + newqueryarray.join("&");
			}
		}
			
		$("[data-aa=" + aa + "] .tradpaginator_activebut").click(function(){settings.onPageButtonClick($(this), $(this).attr('data-pageno')); clickmethodfunct($(this).attr('data-pageno'));});
		$("[data-aa=" + aa + "] .tradpaginator_activebut").hover(function(){settings.onPageButtonHover($(this), $(this).attr('data-pageno'))});
		
		if(settings.include_jumpmenu)
		{
			$("[data-aa=" + aa + "] .tradpaginatorjumpmenu").change(function(){settings.onPageButtonClick($(this), $(this).val()); clickmethodfunct($(this).val());});
		}
		
		aa++;
	} // end of dodisplay
	
	var getPagesRange = function(curpage, totalPagesOnResultSet, settings){
		pageRange = [{pageno:curpage, runningpage:true}];
		var hasnextonright = true;
		var hasnextonleft = true;
		var i = 1;
		while(pageRange.length < settings.totalPageButtonsNumber && (hasnextonright || hasnextonleft))
		{
			if(hasnextonleft)
			{
				if(curpage - i > 0)
				{
					pageRange.push({pageno:curpage - i, runningpage:false});
				}
				else
				{
					hasnextonleft = false;
				}
			}
			if(hasnextonright)
			{
				if(curpage + i < totalPagesOnResultSet)
				{
					pageRange.push({pageno:curpage + i, runningpage:false});
				}
				else
				{
					hasnextonright = false;
				}
			}
			i++;
		}
		return _.sortBy(pageRange, function(item){return item.pageno});
	}
	
	var methods = {
		init : function( options ) { 
			var settings = $.extend( {
				curpage:'auto', 
				totalpagesonresultset:null,
				devmode:false,
				style: 'default',
				totalPageButtonsNumber:11,
				include_jumpmenu : true,
				jumpmenu_caption:'jump to page',
				include_previousnextbuttons: true,
				previous:'previous',
				next:'next',
				include_fistlastbuttons: true,
				first:'first',
				last:'last',
				centered:true,
				submitionmethod:'none', // either 'form', 'url' or 'none'
				postMethodOptions:{
					pageinputid: '',
					numberofrowsperpageinputid:'',
					formid: '',
					imeddiatellysubmit: true,
					alignbyinputid:'',
					ascdescinputid:''
				},
				getMethodOptions:{
					pageinputvarname: 'page',
					numberofrowsperpagevarname:'',
					alignbyvarname:'',
					orderbyinputvarname:'orderby',
					ascdescinputvarname:'ascdesc'
				},
				orderinginfo:{
					enable:false,
					currentorderbycol:'auto',
					defaultordercol: 'id',
					defaultascdesc:'asc',
					currentascdesc:'auto',
					ascendingvalue:'asc',
					descendingvalue:'desc'	
				},
				onPageButtonClick:function(el, pageno){},
				onPageButtonHover:function(el, pageno){},
				onAlignByChange:function(){},
				onNumberOfRowsPerPageChange:function(){}
			}, options);
			
			if(settings.curpage == 'auto'){
				if(settings.submitionmethod == 'form'){
					settings.curpage = $("#" + settings.postMethodOptions.pageinputid).val();
				}
				else if(settings.submitionmethod == 'url'){
					var url =  window.location.toString();
					var urlarray = url.split("?");
					var query = '';
					if(urlarray.length > 1)
					{
						query = urlarray[1];
					}
					var queryarray = query.split("&");
					var pagekeyfound = false;
					if(queryarray.length > 1)
					{
						for(var i=0; i<queryarray.length; i++)
						{
							if(queryarray[i].split('=')[0] == settings.getMethodOptions.pageinputvarname)
							{
								pagekeyfound = true;
								settings.curpage = queryarray[i].split('=')[1];
							}
						}
					}
					if(!pagekeyfound)
					{
						settings.curpage = 1;
					}
				}
			}
			
			if(settings.orderinginfo.enable){
				if(settings.orderinginfo.currentorderbycol == 'auto'){
					if(settings.submitionmethod == 'form'){
						settings.orderinginfo.currentorderbycol = $("#" + settings.postMethodOptions.alignbyinputid).val();
						if(settings.orderinginfo.currentorderbycol == ''){
							settings.orderinginfo.currentorderbycol = settings.orderinginfo.defaultordercol;
						}
					}
					else if(settings.submitionmethod == 'url'){
						var url =  window.location.toString();
						var urlarray = url.split("?");
						var query = '';
						if(urlarray.length > 1)
						{
							query = urlarray[1];
						}
						var queryarray = query.split("&");
						var keyfound = false;
						if(queryarray.length > 1)
						{
							for(var i=0; i<queryarray.length; i++)
							{
								if(queryarray[i].split('=')[0] == settings.getMethodOptions.orderbyinputvarname)
								{
									keyfound = true;
									settings.orderinginfo.currentorderbycol = queryarray[i].split('=')[1];
								}
							}
						}
						if(!keyfound)
						{
							settings.orderinginfo.currentorderbycol = settings.orderinginfo.defaultordercol;
						}
					}
				}
				if(settings.orderinginfo.currentascdesc == 'auto'){
					if(settings.submitionmethod == 'form'){
						settings.orderinginfo.currentascdesc = $("#" + settings.postMethodOptions.ascdescinputid).val();
						if(settings.orderinginfo.currentascdesc == ''){
							settings.orderinginfo.currentascdesc = settings.orderinginfo.defaultascdesc;
						}
					}
					else if(settings.submitionmethod == 'url'){
						var url =  window.location.toString();
						var urlarray = url.split("?");
						var query = '';
						if(urlarray.length > 1)
						{
							query = urlarray[1];
						}
						var queryarray = query.split("&");
						var keyfound = false;
						if(queryarray.length > 1)
						{
							for(var i=0; i<queryarray.length; i++)
							{
								if(queryarray[i].split('=')[0] == settings.getMethodOptions.ascdescinputvarname)
								{
									keyfound = true;
									settings.orderinginfo.currentascdesc = queryarray[i].split('=')[1];
								}
							}
						}
						if(!keyfound)
						{
							settings.orderinginfo.currentascdesc = settings.orderinginfo.defaultascdesc;
						}
					}
				}
			}
			
			
			// display process
			if(!m_templatefunct.hasOwnProperty(settings.style))
			{
				//console.log('has not funct ' + settings.style);
				var that = this;
				var baseurl = getbaseurlforlayoutload();
				$("head").append('<link rel="stylesheet" type="text/css" href="' + baseurl + "/layouts/" + settings.style + '/layout.css" />');
				$.get(baseurl + "/layouts/" + settings.style + "/layout.html", function(loaded_template) {
					m_templatefunct[settings.style] = _.template(loaded_template);
					dotheordering(that, settings);
					dodisplay(that, settings);
				});
			}
			else
			{
				dotheordering(that, settings);
				dodisplay(that, settings);
			}
		},
		hide:function(){
			
		},
		update: function(newcurpage, settings){
			var newrange = getPagesRange(newcurpage, settings.totalpagesonresultset, settings);
		}
	};

	$.fn.tradpaginator = function( method ) {

		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}    

	};

})( jQuery,  _.noConflict() );
