let money = 0;
let moneyToPay = 0;
$(document).ready(function() {
    $(".product").each(function() {
        $(this).find(".product_price").text($(this).data("product-price"))
    });
    $("#save-money").click(function(event) {
        event.preventDefault();

        money = $("#money-in-wallet-input").val();
        $("#money-text").text(money);
    });
    $(".product").click(function() {

        if (money === 0) {
            alert("pul bo'lmasa mahsulot ololmaysiz");
            return;
        }

        let productPrice = $(this).data("product-price");
        if ($(this).hasClass("selected")) {
            moneyToPay -= productPrice;
        } else {
            moneyToPay += productPrice;
        }

        $("#money-harajat").text(moneyToPay);

        if (!$(this).hasClass("selected") && money < moneyToPay) {
            alert("Tanlangan tovar jami summasi hamyon summasidan ortiq");
            moneyToPay -= productPrice;
            // console.log(moneyToPay);
            $("#money-harajat").text(moneyToPay);
            checkvalid()
            return;
        }
        // console.log(moneyToPay);


        $(this).toggleClass("selected");
    });
    $("#buy").click(function(e) {
        e.preventDefault();
        if (moneyToPay < 1) {
            alert('iltimos hamyon maydonga mos emas');
            return;
        }
        money -= moneyToPay;
        moneyToPay = 0;

        function col() {
            $("#money-text").text(money);
            $("#money-harajat").text("0");
            $(".selected").removeClass("selected");
        }
        col()
    });

    function checkvalid() {
        if ($("#money-in-wallet-input").val() === "") {
            alert("maydon bo'sh");
            return;
        };
        if ($("#money-in-wallet-input").val() < 1) {
            alert("maydondagi summa 0 dan katta emas");
            return;
        };
    }
});