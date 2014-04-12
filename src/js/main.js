$(document).ready(function() {
  $('#play').magnificPopup({type:'iframe'});

  jQuery(function($) {
    $('.open-popup-link').magnificPopup({
      items: {
          src: '<div id="mc_embed_signup"><form action="http://emagcollab.us8.list-manage.com/subscribe/post?u=76b4f86a0e901db11dac3080c&amp;id=66552b283f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><label for="mce-EMAIL">We&apos;re not ready yet! Sign up and we&apos;ll be in touch.</label><input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required><div style="position: absolute; left: -5000px;"><input type="text" name="b_76b4f86a0e901db11dac3080c_66552b283f" value=""></div><div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div></form></div>',
          type: 'inline'
      }
    });
  });
});

