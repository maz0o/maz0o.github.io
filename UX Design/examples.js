// Animation Circles
(function($) {

    $('.third.circle').circleProgress({
      value: 0.75, 
      fill: {gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4}
    }).on('circle-animation-progress', function(event, progress, stepValue) {
      $(this).find('strong').text(stepValue.toFixed(2).substr(1));
    });
  
    /*
     * Example 4:
     *
     * - solid color fill
     * - custom start angle
     * - custom line cap
     * - dynamic value set
     */
    var c4 = $('.forth.circle');
  
    c4.circleProgress({
      startAngle: -Math.PI / 4 * 3,
      value: 0.4,
      lineCap: 'round',
      fill: {color: '#ff99cc'}
    });
    // Let's emulate dynamic value update
    setTimeout(function() { c4.circleProgress('value', 0.7); }, 1000);
    setTimeout(function() { c4.circleProgress('value', 0.5); }, 1100);
    setTimeout(function() { c4.circleProgress('value', 0.8); }, 2100);
  })(jQuery);
  