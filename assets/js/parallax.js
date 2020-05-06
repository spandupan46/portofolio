// Paralax Header 

$(window).scroll(() => {
    let wScroll = $(this).scrollTop();
    console.log(wScroll);

    if (wScroll <= 115) {
        $('.fixed-top').addClass('muncul');
    }


    // parallax skill 

    if (wScroll >= 1460) {
        $('.menu-skill1').each((i) => {
            setTimeout(() => {
                $('.menu-skill1').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        })
    }

    if (wScroll >= 1650) {
        $('.menu-skill2').each((i) => {
            setTimeout(() => {
                $('.menu-skill2').eq(i).addClass('muncul')
            }, 300 * (i + 1));
        })
    }
})
