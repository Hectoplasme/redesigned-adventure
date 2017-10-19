<footer class="footer u-b-black section section--dark" id="contact">
  <div class="container footer__inner">
    <h2 class="section__title heading-1"><?php the_field('contact_title', false, false);?></h2>
    <div class="row">
      <div class="column is-one-third-desktop">
        <p class="section__teasing teasing-1"><?php the_field('contact_text', false, false);?></p>
      </div>
    </div>
    <nav class="footer__nav">
      <ul class="menu">
          <?php $links = get_field('contact_links');
          foreach($links as $link_item): ?>
                    <li><a href="<?php echo $link_item['link']['url']; ?>" target="_blank"><?php echo $link_item['link']['title']; ?></a></li>
      <?php endforeach; ?>
      </ul>
      <p class="footer__bottom u-c-grey-dark copyright">©2017 Laurianne Terrier, All Rights Reserved | <a href="#">Mentions légales</a></p>
    </nav>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
