<!DOCTYPE html>
<html lang="zh-cn">
  <head>
   <meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>首页 -- 化学e+</title>
<?php include 'head.php';?>
  </head>
  <body>
<?php include 'header.php';?>
    <section class="main-content">		
<?php
require 'load.php';
include 'title.php';
require 'doyouknow.php';
?>
<h2><img src="/ico/red_apple.png" width=30 height=30>你知道吗？</h2>
<p><?=$doyouknow?></p>
<?php
if ($currentUser != null) {
	$element=$currentUser->get("historyElementOutputHtml");
	$mass=$currentUser->get("historyMassOutput");
	$acid=$currentUser->get("historyAcidOutput");
	$correct=(int)($currentUser->get("examCorrectNumber"));
	$incorrect=(int)($currentUser->get("examIncorrectnumber"));
	$sum=$correct+$incorrect;
	$rate=(double)$correct/(double)$sum*100;
	$exam= '共回答'.$sum.'题，其中'.$correct.'题正确，正确率为'.sprintf("%.2f", $rate).'%';
?>
<h2><img src="/ico/blue_apple.png" width=30 height=30><a href="element.php">元素查询</a></h2>
<p><?=nl2br($element)?></p>
<h2><img src="/ico/lime_apple.png" width=30 height=30><a href="mass.php">质量计算</a></h2>
<p><?=nl2br($mass)?></p>
<h2><img src="/ico/gray_apple.png" width=30 height=30>酸碱计算</h2>
<p><?=nl2br($acid)?></p>
<h2><img src="/ico/orange_apple.png" width=30 height=30><a href="exam.php">元素记忆</a></h2>
<p><?=nl2br($exam)?></p>
<?php
}
include 'foot.php';?>
    </section>
  </body>
</html>