(function( $, _ ){
	var settings;
	var selectedpage;
	var m_templateloaded = false;
	var m_templatefunct = '';
	_.templateSettings.variable = "pages";
	
	var getbaseurlforlayoutload = function(){
		var fullsrc = $('script[src*="jquery.tradpaginator.js"]').attr('src');
		var urlarray = fullsrc.split('/'); console.log(urlarray);
		urlarray.pop();
		return urlarray.join('/')
	}
	
	var dodisplay = function(curpage, totalpagesonresultset, that){
		//console.log(getPagesRange(curpage, totalpagesonresultset));
		that.each(function(){
			$(that).html(m_templatefunct(
				{
					pagebutts:getPagesRange(curpage, totalpagesonresultset),
					includeprevnext:settings.include_previousnextbuttons,
					previous:settings.previous,
					next:settings.next,
					includefirstlast:settings.include_fistlastbuttons,
					first:settings.first,
					last:settings.last,
					lastpage:totalpagesonresultset,
					runningpage:curpage
				}
			));
		});	
		$(".tradpaginator_activebut").click(function(){settings.onPageButtonClick($(this), $(this).attr('data-pageno'))});
		$(".tradpaginator_activebut").hover(function(){settings.onPageButtonHover($(this), $(this).attr('data-pageno'))});
	}
	
	var getPagesRange = function(curpage, totalPagesOnResultSet){
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
			settings = $.extend( {
				style: 'default',
				totalPageButtonsNumber:11,
				'include_jumpmenu' : true,
				include_previousnextbuttons: true,
				previous:'previous',
				next:'next',
				include_fistlastbuttons: true,
				first:'first',
				last:'last',
				'include_firstlastbuttons': true,
				'enable_numberofrowsperpage':false,
				'enable_alignby':false,
				centered:true,
				submitionmethod:'none', // either 'post', 'get' or 'none'
				postMethodOptions:{
					pageinputid: '',
					numberofrowsperpageinputid:'',
					alignbyinputid:'',
					formid: '',
					imeddiatellysubmit: true
				},
				getMethodOptions:{
					pageinputvarname: 'page',
					numberofrowsperpagevarname:'',
					alignbyvarname:''
				},
				alignbyoptions:[
					{name:'Please select', value:'-1'}
				],
				onPageButtonClick:function(el, pageno){},
				onPageButtonHover:function(el, pageno){},
				onAlignByChange:function(){},
				onNumberOfRowsPerPageChange:function(){}
			}, options);
		},
		display : function(curpage, totalpagesonresultset ) {
			if(!m_templateloaded)
			{
				var that = this;
				var baseurl = getbaseurlforlayoutload();
				$("head").append('<link rel="stylesheet" type="text/css" href="' + baseurl + "/layouts/" + settings.style + '/layout.css" />');
				$.get(baseurl + "/layouts/" + settings.style + "/layout.html", function(loaded_template) {
					m_templatefunct = _.template(loaded_template);
					m_templateloaded = true;
					dodisplay(curpage, totalpagesonresultset, that);
				});
			}
			else
				dodisplay(curpage, totalpagesonresultset, that);
		
		},
		hide:function(){
			
		},
		update: function(){
			
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
