<div id="header" style="top:0px">

	<h1><a href="#" class="btn_naver" target="_blank">홈으로 바로가기</a></h1>
	
    <div class="gnb">
    	<a href="#" class="btn gnb_on">메뉴 열기</a>
    	<a href="#" class="btn gnb_off">메뉴 닫기</a>
		<ul id="gnblist">
			<li class="on"><a href="/index.php"><span class="home">Home</span></a></li>
            <li><a href="http://tbelle.dothome.co.kr/mobileweb_new.php" class="v7"><span>mobile web/app</span></a></li>
            <li><a href="http://tbelle.dothome.co.kr/wheelmove/index.html" class="v2"><span>concept 1</span></a></li>
			<li><a href="http://tbelle.dothome.co.kr/sports/index.html" class="v3"><span>concept 2</span></a></li>
			<li><a href="#" class="v4"><span>준비중</span></a></li>
			<li><a href="http://tbelle.dothome.co.kr/etc/etcmain_new.php" class="v5"><span>design 시안</span></a></li>
			<li><a href="#" class="v6" title="준비중입니다." ><span>about me</span></a></li>
		</ul>
	</div>
</div>
<script type="text/javascript">
    jQuery(document).ready(function($){            
        var url = window.location.href;// Get current url
        $('.gnb ul a[href="'+url+'"]').parent().addClass('on');
    });
</script>
