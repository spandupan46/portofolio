// Paralax Header 

$(window).scroll(() => {
    let wScroll = $(this).scrollTop();
    console.log(wScroll);




    // PARALLAX JUMBOTRON

    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 3.5 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + wScroll / 1.5 + '%)'
    })
    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 1 + '%)'
    })

    if (wScroll >= 75) {
        $('.fixed-top').addClass('muncul');
    }
    if (wScroll <= 75) {
        $('.fixed-top').removeClass('muncul')
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

