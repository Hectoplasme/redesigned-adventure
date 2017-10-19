<?php get_header(); ?>

<main class="main" role="main">
  <section class="banner" id="accueil">
    <div class="banner__bg u-b-pattern"></div>
    <div class="container banner__inner">
      <div class="banner__title rte">
        <h1><?php the_field('baseline', false, false);?></h1>
      </div>
    </div>
  </section>
  <section class="section project section--dark" id="projets">
    <div class="container project__inner">
      <h2 class="project__title heading-2">Luditales</h2>
      <p class="project__subtitle teasing-2">Identité graphique & développement</p>
      <article class="project__content rte">
        <p>Cat ipsum dolor sit amet, hack up furballs, sit on human and chase dog then run away, or run in circles. Lick arm hair chirp at birds. Scratch the postman wake up lick paw wake up owner meow meow spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce and hide from vacuum cleaner intrigued by the shower.</p>
        <p><strong>Inspect anything brought</strong> into the house find empty spot in cupboard and <a href="#">sleep all day</a> so sit on the laptop, intently sniff hand thinking longingly about tuna brine spend all night ensuring people don't sleep sleep all day.</p>
      </article>
      <button class="btn">Voir le projet</button>
    </div>
  </section>
  <section class="section project">
    <div class="container project__inner">
      <h2 class="project__title heading-2">Luditales</h2>
      <p class="project__subtitle teasing-2">Identité graphique & développement</p>
      <article class="project__content rte">
        <p>Cat ipsum dolor sit amet, hack up furballs, sit on human and chase dog then run away, or run in circles. Lick arm hair chirp at birds. Scratch the postman wake up lick paw wake up owner meow meow spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce and hide from vacuum cleaner intrigued by the shower.</p>
        <p><strong>Inspect anything brought</strong> into the house find empty spot in cupboard and <a href="#">sleep all day</a> so sit on the laptop, intently sniff hand thinking longingly about tuna brine spend all night ensuring people don't sleep sleep all day.</p>
      </article>
      <a href="" rel="external" class="btn">Voir le projet</a>
    </div>
  </section>
  <section class="section u-b-grey" id="a-propos">
    <div class="container">
      <h2 class="section__title heading-1"><?php the_field('about_title', false, false);?></h2>
      <div class="row">
        <div class="section__left column is-one-third-desktop">
            <?php $text = get_field('about_text');?>
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
