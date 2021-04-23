jQuery(document).ready(function() {
  var valueNow,
      highlighter,
      tickSound = new buzz.sound( "seif", {
          formats: [ "ogg", "mp3", "wav" ]
      });
  $("#handle1").roundSlider({
    min: 0,
    max: 12000,
    step: 1000,
    value: 0,
    radius: 200,
    sliderType: "min-range",
    editableTooltip: false,
    handleSize: 0,
    tooltipFormat: "changeTooltip"
  });
  highlighter = function(){
    tickSound.play();
    jQuery('.elem_pos').each(function(index, el) {
      jQuery(this).removeClass('elem_pos_active')
    });
    if (valueNow == 0 || valueNow == 4000 || valueNow == 8000 || valueNow == 12000) {
      jQuery('.elem_pos_d').each(function(index, el) {
        jQuery(this).addClass('elem_pos_active');
      });
    } else if (valueNow == 1000 || valueNow == 5000 || valueNow == 9000) {
      jQuery('.elem_pos_t').each(function(index, el) {
        jQuery(this).addClass('elem_pos_active');
      });
    }  else if (valueNow == 2000 || valueNow == 6000 || valueNow == 10000) {
      jQuery('.elem_pos_r').each(function(index, el) {
        jQuery(this).addClass('elem_pos_active');
      });
    }   else if (valueNow == 3000 || valueNow == 7000 || valueNow == 11000) {
      jQuery('.elem_pos_s').each(function(index, el) {
        jQuery(this).addClass('elem_pos_active');
      });
    }
  }
  $("#handle1").on("drag", function (e) {
      valueNow = jQuery('.rs-handle').attr('aria-valuenow');
      highlighter();
  })
});
