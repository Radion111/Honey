


let myslider1 = new Swiper('.myslider', 
{ 

pagination: {
el:'.swiper-pagination',
clickable: true,
}, 

observer: true,

observeParent: true,

observeSlideChildren: true,



autoHeight: true,

slidesPerView: 3,
slidesPerGroup:3,
spaceBetween: 120,



breakpoints: {
"320": {
   slidesPerView:1, 
   slidesPerGroup:1,
},
"522": {
   slidesPerView:2, 
   slidesPerGroup:2,
   spaceBetween: 100,
},
"986": {
slidesPerView:3, 
},
}

 });

$(document).ready(function () {
   $(".compoundandcost__dopelement").click(function (e) { 
      e.preventDefault();
      $(".compoundandcost__dopelement").remove();
      $(".compoundandcost__hidenelement").slideToggle(400);
     
   });
});
 $(document).ready(function () {

   $(".header-top__a").click(function (e) { 
     e.preventDefault();
     $("html,body").animate({
      scrollTop: $($(this).attr("href")).offset().top+"px"
     }, {
       duration:1000,
       easing:"linear",
     });
     return false;
   });
 });


$(document).ready(function() {
   $('.burger-menu').click(function(event) {
      $('.burger-menu,.header-top__ulmainrow').toggleClass('active');
      $('body').toggleClass('lock');
   });
   });


function ibg(){

   $.each($('.ibg'), function(index, val) {
   if($(this).find('img').length>0){
   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
   }
   });
   }
   
   ibg();

   

   
