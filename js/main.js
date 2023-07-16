$(".header__burgir").click(function() {
    if($(".header__burgir").hasClass("active")) {
        $(".header").removeClass("open");
        $(".header__burgir").removeClass("rotate");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
        }, 300);
    } else {
        $(".header").addClass("open");
        $(".header__burgir").addClass("active");
        setTimeout(function() {
            $(".header__burgir").addClass("rotate");
        }, 300);
    }
});
if($(".product__tabBtn")) {
    // if (window.innerWidth < 1024) {
    //     $(".product__tabBtn .btn").click(function() {
    //         if($(this).hasClass("active")) {
    //             $(".product__tabBtn").addClass("open");
    //         } else {
    //             $(".product__tabBtn").removeClass("open");
    //         }
    //     });
    // };
    function TabClick(num) {
        $("#tabBtn-"+num).click(function() {
            $(".product__tabBtn .btn").removeClass("active");
            $(".product__tabBlock").removeClass("active");
            $(this).addClass("active");
            $("#tabBlock-"+num).addClass("active");
        });
    };
    TabClick("1");
    TabClick("2");
};
if($(".aside__block")) {
    $(".aside__block h6").click(function() {
        $(this).toggleClass("active");
    });
};
if($(".filter_open")) {
    $(".filter_open").click(function() {
        $(".aside").toggleClass("open");
        $(".filter_open").toggleClass("close");
    });
};
if($(".counter")) {
    var quantity = $(".counter");
    quantity.children(".plus").click(function() {
        $(this).prev(".num").val( function(i, oldval) {
            return ++oldval;
        });
    });
    quantity.children(".minus").click(function() {
        if($(this).next(".num").val() != 1) {
            $(this).next(".num").val( function(i, oldval) {
                return --oldval;
            });
        };
    });
};