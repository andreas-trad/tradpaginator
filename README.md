<h1>tradpaginator</h1>

<h2>Description</h2>
<p>With this jQuery plugin you can easily generate active pagination controllers for your pages as easy as this: </p>
<p>
<pre lang="javascript"><code>
$(&quot;.testdivs&quot;).tradpaginator('init', {<br />
  curpage:4,<br />
  totalpagesonresultset:18,
  
  submitionmethod:'url',<br />
  getMethodOptions:{<br />
    pageinputvarname: 'page'<br />
  }<br />
});
</code></pre>
and you get something like this:<br />
<img src="http://trad.webfactional.com/elabs/paginator/screenshot.png" />
</p>
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
