<div class="container project__inner">
    <h2 class="project__title heading-2"><?php the_title(); ?></h2>
    <p class="project__subtitle teasing-2"><?php $categories = get_the_category();
    for ($i = 0; $i < count($categories); $i ++):
        if ($i < count($categories) - 2):
            echo $categories[$i]->name . ', ';
        elseif ($i === count($categories) - 2):
            echo $categories[$i]->name . ' & ';
        else :
            echo $categories[$i]->name;
        endif;
    endfor; ?></p>
    <article class="project__content rte">
     <?php the_content(); ?>
    </article>
    <a href="<?php the_field('project_url'); ?>" class="btn" target="_blank">Voir le projet</a>
</div>
