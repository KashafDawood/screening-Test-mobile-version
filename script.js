var answer = [];
function startScreen() {
    jQuery(".question .row").removeClass("active");
    jQuery('.p-b').css("width","10%");
    jQuery('.q-1').addClass("active");
    jQuery('.p-b').removeClass("bg-success");
    jQuery('.p-b').removeClass("bg-warning");
    jQuery('.p-b').removeClass("bg-danger");
}
function recordAnswers(qno, ans, nqno) {

    if (nqno > 0) {
        answer[qno] = ans;
        jQuery(".question .row").removeClass("active");
        jQuery('.q-' + nqno).addClass("active");
        jQuery('.p-b').css("width",(qno*10)+"%");
    }
    else {
        if ((answer[1], answer[2], answer[4], answer[8], answer[9], answer[6] == 1) && (answer[3], answer[5], answer[7], answer[10] == 1 || 2)) {
            jQuery(".question .row").removeClass("active");
            jQuery('.p-b').css("width", "100%");
            jQuery('.result1').addClass("active");
            jQuery('.p-b').addClass("bg-danger");
        }
        else if ((answer[1], answer[2], answer[4] == 1) && (answer[3], answer[6], answer[5], answer[7], answer[10] == 1 || 2) && (answer[8], answer[9] == 1 || 2)) {
            jQuery(".question .row").removeClass("active");
            jQuery('.p-b').css("width", "100%");
            jQuery('.result2').addClass("active");
            jQuery('.p-b').addClass("bg-warning");
        }
        else {
            jQuery(".question .row").removeClass("active");
            jQuery('.result3').addClass("active");
            jQuery('.p-b').css("width", "100%");
            jQuery('.p-b').addClass("bg-success");
        }
    }

}