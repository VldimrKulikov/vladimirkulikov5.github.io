$(function(){

	$('.slid').slick({
			dots: true,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			speed: 100,
			responsive:[

					{
					breakpoint: 480,
					settings:{
							slidesToShow: 2,
							slidesToScroll: 1,
							arrows:false,
					}
					}
			]
	});
})