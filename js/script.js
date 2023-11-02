var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

let order=document.querySelector(".ss")
let order1=document.querySelector(".ss1")

let navv=document.getElementById("navbarNavDropdown")
// const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})


function selectcard() {
			
	order.classList.add("collapsed")			
	order1.classList.add("collapsed")			
	
	order.setAttribute("aria-expanded", false)
	order1.setAttribute("aria-expanded", false)
	
	// navv.classList.add("collapse")	
	// navv.classList.remove("collapsing")	
	navv.classList.remove("show")	

}
