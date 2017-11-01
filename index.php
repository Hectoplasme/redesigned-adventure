<?php get_header(); ?>

<main class="main" role="main">
  <section class="banner" id="accueil">
    <div class="banner__bg u-b-pattern"></div>
    <div class="container banner__inner">
      <div class="banner__title rte">
        <h1><?php the_field('baseline', get_option( 'page_on_front' ), false);?></h1>
      </div>
    </div>
  </section>
  <?php
  $projects = get_posts(
      array(
          'posts_per_page'    => 4,
          'orderby' => 'menu_order',
          'order' => 'ASC'
      )
  );

  if( $projects ):
      foreach ($projects as $i => $project):
          $post = $project;
          setup_postdata($post);
          if ($i === 0): ?>
            <section class="section project section--dark" id="projets">
          <?php elseif ($i%2 === 0) : ?>
            <section class="section project section--dark">
          <?php  else :?>
            <section class="section project">
          <?php endif;?>
          <?php get_template_part('partials/project-item'); ?>
            </section>
          <?php wp_reset_postdata();
      endforeach;
  endif; ?>
  <section class="section u-b-grey" id="a-propos">
    <div class="container">
      <h2 class="section__title heading-1"><?php the_field('about_title', get_option( 'page_on_front' ), false);?></h2>
      <div class="row">
        <div class="section__left column is-one-third-desktop">
            <?php $text = get_field('about_text', get_option( 'page_on_front' ));?>
            <div class="section__teasing teasing-1 rte">
                <?php echo $text['about_heading']; ?>
            </div>
        </div>
        <div class="section__right column is-two-third">
          <article class="section__content rte">
              <?php echo $text['about_content']; ?>
          </article>
          <a href="<?php echo get_field('about_cv')['url']; ?>" target="_blank" class="btn">Voir mon CV</a>
        </div>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
