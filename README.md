<h1>tradpaginator</h1>

<h2>Description</h2>
<p>With this jQuery plugin you can easily generate active pagination controllers for your pages as easy as this: </p>
<p>
<pre lang="javascript"><code>
$(&quot;#mypaginationdiv&quot;).tradpaginator('init', {<br />
  curpage:4,<br />
  totalpagesonresultset:18,
  
  submitionmethod:'url',<br />
  getMethodOptions:{<br />
    pageinputvarname: 'page'<br />
  }<br />
});
</code></pre>
and you get something like this appended on the selected div (mypaginationdiv):<br />
<img src="http://trad.webfactional.com/elabs/paginator/screenshot.png" />
</p>
<h2>License</h2>
Released under the <a href="http://sam.zoy.org/wtfpl/">WTFPL</a> license
<h2>Compatibility and Dependencies</h2>
<h3>Browser support</h3>
<ul>
  <li>Internet Explorer 6+</li>
  <li>Mozilla Firefox 1.5+</li>
  <li>Safari 3+</li>
  <li>Opera 9.5+ (9.01+ as of 1.10)</li>
  <li>Google Chrome 1.0+</li>
  <li>iOS 2.0+</li>
  <li>Opera Mini (to a certain degree)</li>
</ul>
<h3>Dependencies</h3>
<ul>
	<li>underscore.js</li>
    <li>jQuery</li>
</ul>
<h2>What the plugin does</h2>
How many times have you found yourself coding again and again a pagination controls section for a project of yours? <br />
Decide which is the page range that should be illustrated, center the current page within this range, include a jump menu, bind a click action to each button in order to actually do something and many more are aspects that we face again and again when building custom web pages including pagination logic.<br />
tradpaginator plugin provides an easy and rapid way to append pagination buttons and controls letting you to state the parameters and taking care of all the rest.<br />
tradpaginator illustrates the page buttons and  controls and it lets you chain their functionality with the logic and structure of your application.
<h2>Installation</h2>
In order for the plugin to operate you need to include the following lines to the head of the page:
<pre lang="html"><code>
&lt;!-- having the dependencies loaded: --&gt; 
&lt;script src=&quot;./path/to/jquery.js&quot;&gt;&lt;/script&gt;
&lt;scirpt src=&quot;./path/to/underscore.js&quot;&gt;&lt;/script&gt;
&lt;!-- load the plugin --&gt;
&lt;script src=&quot;./path/to/jquery.tradpaginator.js&quot;&gt;&lt;/script&gt;
</code></pre>
<h2>Basic usage</h2>
In order to display the pagination buttons within a selected div just call the tradpaginator method, passing your settings:
<pre lang="javascript"><code>
$(&quot;#mypaginationdiv&quot;).tradpaginator('init', {<br />
  curpage:4,<br />
  totalpagesonresultset:18,
  
  submitionmethod:'url',<br />
  getMethodOptions:{<br />
    pageinputvarname: 'page'<br />
  }<br />
});
</code></pre>
<h2>Settings</h2>
<table width="100%" cellspacing="0" cellpadding="0">
  <tr>
    <td><b>PARAMETER NAME</b></td>
    <td><b>TYPE - DESCRIPTION</b></td>
    <td><b>DEFAULT VALUE</b></td>
  </tr>
  <tr>
    <td width="29%">curpage </td>
    <td width="47%">(int) the number of the current page OR 'auto'. Use 'auto' if you want the plugin to auto detect the current page either from the url (with submitionmethod = 'url') or from the corresponding input field (with submitionmethod = 'form'). If the plugin does not auto-detect the value it will set the page = 1</td>
    <td width="24%">'auto'</td>
  </tr>
  <tr>
    <td>totalpagesonresultset</td>
    <td>(int) the total number of pages </td>
    <td>-</td>
  </tr>
  <tr>
    <td>totalPageButtonsNumber</td>
    <td>(int) the number of page buttons to display</td>
    <td>11</td>
  </tr>
  <tr>
    <td>devmode</td>
    <td>(bool) set it to true in order to get warning and error alerts and messages</td>
    <td>false</td>
  </tr>
  <tr>
    <td>style</td>
    <td>(string) style name</td>
    <td>'default'</td>
  </tr>
  <tr>
    <td>include_previousnextbuttons</td>
    <td>(bool) include previous and next page buttons</td>
    <td>true</td>
  </tr>
  <tr>
    <td>previous</td>
    <td>(string) the text to be illustrated on the previous page button</td>
    <td>'previous'</td>
  </tr>
  <tr>
    <td>next</td>
    <td>(string) the text to be illustrated on the next page button</td>
    <td>'next'</td>
  </tr>
  <tr>
    <td>include_fistlastbuttons</td>
    <td>(bool) include first and last page buttons</td>
    <td>true</td>
  </tr>
  <tr>
    <td>first</td>
    <td>(string) the text to be illustrated on the first page button</td>
    <td>'first'</td>
  </tr>
  <tr>
    <td>last</td>
    <td>(string) the text to be illustrated on the last page button</td>
    <td>'last'</td>
  </tr>
  <tr>
    <td>include_jumpmenu</td>
    <td>(bool) include page jump menu</td>
    <td>true</td>
  </tr>
  <tr>
    <td>jumpmenu_caption</td>
    <td>(string) the jump menu label</td>
    <td>'jump to page'</td>
  </tr>
  <tr>
    <td>submitionmethod</td>
    <td>(string) one of the following:<br />
      - form (change the input of a form and submit the form)<br />
      - url (change page by passing a certain url variable)<br />
      - none (none of the above)</td>
    <td>'none'</td>
  </tr>
  <tr>
    <td>postMethodOptions</td>
    <td><p>(Object): <i>should be filled when 'form' submittionmethod is selected</i><br />
      {<br />
       pageinputid (the id of the form input that holds the page to go when form is submitted)<br />
       formid (the form id)<br />
alignbyinputid (the id of the form input that holds the the name of the column that the results are ordered by)<br />
ascdescinputid (the id of the form input that holds the ordering direction)<br />
      }</p></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>getMethodOptions</td>
    <td>(Object):<i> should be filled when url submittionmethod is selected</i><br />
      {<br />
      pageinputvarname (the name of the url parameter that defines the page number)<br />
      orderbyinputvarname (the name of the url parameter that defines the column by which the results are ordered by)<br />
ascdescinputvarname (the name of the url parameter that defines the ordering direction)<br />
      }</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>orderinginfo</td>
    <td>{<br />
    enable (default: false. Set this value to true if you want to enable the ordering functionality of the plugin)<br />
currentorderbycol (either specify the current column name by which the results are ordered by or set it to auto and let the plugin auto-detect it either from the url or from the corresponding form input)<br />
defaultordercol (if you set the currentorderbycol to auto and the plugin does not succeed finding the value it will set the currentorderbycol to the value of this attribute)<br />
currentascdesc (either specify the current ordering direction by which the results are ordered by or set it to auto and let the plugin auto-detect it either from the url or from the corresponding form input)<br />
defaultascdesc (if you set the currentascdesc to auto and the plugin does not succeed finding the value it will set the currentascdesc to the value of this attribute)<br />
ascendingvalue (this is the value that the plugin will set to url or the corresponding input field in the case that ascending order should be implied. The default value of this variable is 'asc')<br />
descendingvalue (this is the value that the plugin will set to url or the corresponding input field in the case that descending order should be implied. The default value of this variable is desc)<br />
    }</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>onPageButtonClick</td>
    <td><p>(function(el, pageno)<br />
      - el: the jQuery element that represents the button clicked<br />
      - pageno: the page number of the button clicked
      <br />
    ) <br />
    define a function to be called when a page button is clicked. The function runs before the action taken if you state a submition method other than none. </p></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>onPageButtonHover</td>
    <td>(function(el, pageno)<br />
- el: the jQuery element that represents the button hovered<br />
- pageno: the page number of the button hoverd <br />
) <br />
define a function to be called when a page button is hoverd. </td>
    <td>&nbsp;</td>
  </tr>
</table>
<h2>Pagination Examples</h2>
<h3>1. Change page through url parameter</h3>
<p>Let's suppose that you have:<br />
  - 150 total pages on your illustrating results<br />
  
  - You want ot illustrate 7 page buttons on the pagination control<br />
  - You want ot include a page jump menu, the previous and next buttons and the last and first page buttons<br />
- The page is built so that it takes the page number from the url from the parameter page<br />
- The div that you want to append the pagination controls has the id &quot;mypaginationdiv&quot;
<br />
- The current page is 9
</p>
<p>
<b>Code</b>
<pre lang="javascript"><code>
$(&quot;#mypaginationdiv&quot;).tradpaginator('init', {<br />
  curpage:9,<br />
  totalpagesonresultset:150,<br />
  totalPageButtonsNumber: 7,<br/>
  submitionmethod:'url',<br />
  getMethodOptions:{<br />
    pageinputvarname: 'page'<br />
  }<br />
});
</code></pre>
<b>Result</b><br />
<img src="http://trad.webfactional.com/elabs/paginator/example1.png" /><br />
By clicking to any of the page buttons or using the jump menu the page will be refreshed passing the proper value on the page parameter
</p>
<br />
<h3>2. Change page by submitting a form</h3>
<p>Let's suppose that you have:<br />
  - 150 total pages on your illustrating results<br />
  
  - You want ot illustrate 7 page buttons on the pagination control<br />
  - You want ot include a page jump menu, the previous and next buttons and the last and first page buttons<br />
- The page is built so that it takes the page number (among others) through a form<br />
- The div that you want to append the pagination controls has the id &quot;mypaginationdiv&quot;
<br />
- The current page is 9
</p>
<p>
<pre lang="html"><code>
&lt;form id=&quot;myform&quot; method=&quot;post&quot; action=&quot;./&quot; /&gt;
  &lt;input type=&quot;hidden&quot; id=&quot;pageno&quot; name=&quot;pageno&quot; /&gt;
  &lt;div id=&quot;mypaginationdiv&quot;&gt;&lt;/div&gt;
&lt;/form&gt;
</code></pre>
</p>
<p>
<b>Code</b>
<pre lang="javascript"><code>
$(&quot;#mypaginationdiv&quot;).tradpaginator('init', {<br />
  curpage:9,<br />
  totalpagesonresultset:150,<br />
  totalPageButtonsNumber: 7,<br/>
  submitionmethod:'form',<br />
  postMethodOptions:{<br />
    pageinputid: 'pageno',
    formid: 'myform'<br />
  }<br />
});
</code></pre>
<b>Result</b><br />
<img src="http://trad.webfactional.com/elabs/paginator/example1.png" /><br />
By clicking to any of the page buttons or using the jump menu the form will be submitted passing the selected page number
</p>
<h3>3. Asynchronous page change</h3>
<p>Let's suppose that you have:<br />
  - 9 total pages on your illustrating results<br />
  - You want ot illustrate 7 page buttons on the pagination control<br />
  - You don't want ot include a page jump menu, the previous and next buttons and the last and first page buttons<br />
- The page is built so that it aqcuires the next page through an asynchronous method (ajax, websockets etc)<br />
- The div that you want to append the pagination controls has the id &quot;mypaginationdiv&quot;
<br />
- The current page is 9
</p>
<p>
<pre lang="html"><code>
&lt;form id=&quot;myform&quot; method=&quot;post&quot; action=&quot;./&quot; /&gt;
  &lt;input type=&quot;hidden&quot; id=&quot;pageno&quot; name=&quot;pageno&quot; /&gt;
  &lt;div id=&quot;mypaginationdiv&quot;&gt;&lt;/div&gt;
&lt;/form&gt;
</code></pre>
</p>
<p>
<b>Code</b>
<pre lang="javascript"><code>
$(&quot;#mypaginationdiv&quot;).tradpaginator('init', {<br />
  curpage:9,<br />
  totalpagesonresultset:9,<br />
  totalPageButtonsNumber: 7,<br/>
  submitionmethod:'none',
  include_jumpmenu:false,
  include_previousnextbuttons:false,
  include_fistlastbuttons:false,<br />
  onPageButtonClick:function(el, pageno){
    // do your magic stuff here
  }<br />
});
</code></pre>
<b>Result</b><br />
<img src="http://trad.webfactional.com/elabs/paginator/asynch.png" /><br />
By clicking to any of the page buttons the onPageButtonClick function declared will be called
</p>
<h2>Ordering functionality</h2>
<p>From version 0.8 tradpaginator provides ordering capabilities too. The most often way that users change the ordering of a list (either by specifying the column by which the list should be ordered or by changing the ordering direction from to asc to desc to asc) is by clicking to the columns titles of a table that contains the results.<br />
Each of the column titles (most often) represents a database column. In order to activate and use the new auto ordering functionality of the plugin you should follow these easy steps:</p>
<p>To explain better the way the tradpaginator ordering capabilites works let's take the followng example. Let's assume that we have the following table within which we illustrate our results:</p>
<pre lang="html"><code>
&lt;table&gt;
&lt;thead&gt;
  &lt;tr&gt;
    &lt;th&gt;ID&lt;/th&gt;
    &lt;th&gt;Surname&lt;/th&gt;
    &lt;th&gt;Name&lt;/th&gt;    
  &lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
.........
&lt;/table&gt;
</code></pre>
</p>
Let's now assume that we want to enable ordering capabilities to all the three of the columns (ID, Surname, Name). The first thing we have to do is the follow is to wrap each of the column title to a span with class tradpaginatororder:<br />
<pre lang="html"><code>
&lt;table&gt;
&lt;thead&gt;
  &lt;tr&gt;
    &lt;th&gt;&lt;span class=&quot;tradpaginatororder&quot; data-col=&quot;id&quot;&gt;ID&lt;span&gt;&lt;/th&gt;
    &lt;th&gt;&lt;span class=&quot;tradpaginatororder&quot; data-col=&quot;surname&quot;&gt;Surname&lt;/span&gt;&lt;/th&gt;
    &lt;th&gt;&lt;span class=&quot;tradpaginatororder&quot; data-col=&quot;name&quot;&gt;Name&lt;/span&gt;&lt;/th&gt;    
  &lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
.........
&lt;/table&gt;
</code></pre>
As you may noticed in each of the spans we added a data-col attribute. This attribute should be added and defined in all of the tradpaginatororder spans. It defines the value that will passed to the server as the ordering column.<br />
The next thing that you should do is to enable the ordering capabilities of the plugin by 
setting the orderinginfo.enable to true and then set up the rest of the details through orderinginfo, postMethodOptions and getMethodOptions variables. <br />
<h2>Multiple instances</h2>
tradpaginator plugin can be used for multiple instances on the same page without a problem
<h2>Style and layout</h2>
For now there is only the default style included. New styles will be added during the upcoming releases.<br />
If you want to customize the look and style of the buttons and controls you can copy the files "layout.html" and "layout.css" from the ./layouts/default/ folder to ./layouts/custom/.<br />
You can edit the layout.css and - or the layout.html file. In order to edit the layout.html file you need to have basic knowledge on underscore templating engine.<br />
Having the new custom layout ready you can load it by passing the "custom" value on the style property of setting during execution.