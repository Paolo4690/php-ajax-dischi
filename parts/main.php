<main>
    <div class="container">

    <?php

        foreach ($arrdischi as $album) {?>

            <div class="card">
                <figure class="card-image">
                    <img src="<?php echo $album['poster']; ?>" alt="<?php echo $album['title']; ?>" />
                </figure>
                <h2><?php echo $album['title']; ?></h2>
                <p><?php echo $album['author']; ?></p>
                <p><?php echo $album['year']; ?></p>
            </div>

        <?php

        }?>

    </div>
</main>