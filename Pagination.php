<?php
class Pagination
{	
	/*
	Input:
	* (int) $curpage: the current page
	* (int) $totalpages: total number of pages
	* (int) $numberofpagestoillustrate: the number of pages that you want to illustrate
	Output:
	* (array) a one dimension numbered array containing the page numbers of the pagination 
	*/
	public function getPageRange($curpage, $totalpages, $numberofpagestoillustrate)
	{
		$pageRange = array($curpage);
		$hasnextonright = true;
		$hasnextonleft = true;
		$i = 1;
		while(count($pageRange) < $numberofpagestoillustrate && ($hasnextonright || $hasnextonleft))
		{
			if($hasnextonleft)
			{
				if($curpage - $i > 0)
				{
					$pageRange[] = $curpage - $i;
				}
				else
				{
					$hasnextonleft = false;
				}
			}
			if($hasnextonright)
			{
				if($curpage + $i < $totalpages)
				{
					$pageRange[] = $curpage + $i;
				}
				else
				{
					$hasnextonright = false;
				}
			}
			$i++;
		}
		sort($pageRange, SORT_NUMERIC);
		return $pageRange;
	}
}
?>
