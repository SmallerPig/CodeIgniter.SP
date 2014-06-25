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

