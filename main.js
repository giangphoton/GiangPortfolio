// HEADER NAV 
$('.open-mobile-menu').on('click', function() {
    $('.top-menu-wrapper').toggleClass('show-offcanvas');
});

// Animated scroll to #anchor / id
// $(document).ready(function() {
//   $('.top-menu_scrolllink').click(function() {
//     let $this = $(this);
//     event.preventDefault();
//     $('html, body').animate({ scrollTop: $($this.attr('href')).offset().top }, 500);
//   });
// })

// ScrollSpy - active links
// Cache selectors
let lastId,
    topMenu = $(".top-menu"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a.top-menu_scrolllink"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// Animated scroll to #anchor / id
menuItems.click(function(e){
  let href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1-50;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});    

// Bind to scroll
$(window).scroll(function(){
  // Get container scroll position
  let fromTop = $(this).scrollTop()+topMenuHeight;
  
  // Get id of current scroll item
  let cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length-1];
  let id = cur && cur.length ? cur[0].id : "";
  
  // console.log(cur, id);

  // only toggle class if scroll to other section
  if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#"+id+"']").parent().addClass("active");
  }                   
});

const personalBoxes = document.querySelectorAll('.personal-box');
// ABOUT-PERSONAL ANIMATION - MOBILE
personalBoxes.forEach(selectedBox => {
  selectedBox.addEventListener('touchstart', function() {
    personalBoxes.forEach(box => box.classList.remove('touch'));
    this.classList.add('touch');
  });
});


// SKILLS BARS ANIMATION
$('.skill-per').each(function(){
    let $this = $(this);
    let per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 1000,
      step: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
});

// BLOG ANIMATION
$('.post__link').mouseenter(function() {
  let $this = $(this);
  $('.post__link').addClass('faded');
  $this.removeClass('faded');
});

$('.post__link').mouseleave(function() {
  $('.post__link').removeClass('faded');
});

const projects = document.querySelectorAll('#portfolio_section .project');
// PORTFOLIO PROJECT ANIMATION - MOBILE
projects.forEach(selectedProject => {
  selectedProject.addEventListener('touchmove', function() {
    projects.forEach(project => project.classList.remove('touch'));
    this.classList.add('touch');
  });
});



// FOOTER GO-TOP BTN
// Show or hide the sticky footer btn
$(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
        $('.go-top').fadeIn(200);
    } else {
        $('.go-top').fadeOut(200);
    }
});

// Animate the scroll to top 
$('.go-top').click(function() {
    // prevent the a link to go #
    event.preventDefault();

    $('html, body').animate({scrollTop: 0}, 300);
});

