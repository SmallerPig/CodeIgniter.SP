<div class="contentRow">
    <div id="pictureSearchArea">
        <div id="pictureSearchAreaTitle">图片搜索</div>
        <div id="pictureSearchAreaContentWrapper">
            <input id="pictureSearchInput" onkeydown="if (event.keyCode == 13) { doSubmit() }" class="inputText" placeholder="输入关键词或图片编号" />
            <a id="pictureSearchSubmit" href="javascript:"></a>
            <a id="pictureSearchLink" href="/Pics/Search">高级搜索</a>
        </div>
    </div>
</div>
<link rel="stylesheet" type="text/css" href="/content/src/css/home.css">
<?php foreach ($news as $news_item): ?>

    <h2><?php echo $news_item['title'] ?></h2>
    <div class="main">
        <?php echo $news_item['text'] ?>
    </div>
    <p><a href="http://localhost:42366/index.php/news/<?php echo $news_item['slug'] ?>">View article</a></p>

<?php endforeach ?>
<script src="/content/src/js/home.js"></script>
<script src="/Scripts/jquery-1.8.2.min.js"></script>

