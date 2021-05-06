
// Open or close chat box, text input in chat
jQuery(document).ready(function($) {
    $(".submit_chat_form").on("submit", function(e) {
        e.preventDefault();
    });
    $(".ui-chat-container .btn_chat_lancher,.ui-chat-container .step1_wrapper .close").click(function(event) {
        event.preventDefault();
        $(".ui-chat-container .step1_wrapper").toggleClass("active");
        if ($(this).hasClass("close")) {
            $(".ui-chat-container .btn_chat_lancher .close_me").removeClass("active");
            $(".ui-chat-container .btn_chat_lancher .open_me").addClass("active");
        } else {
            $(".ui-chat-container .btn_chat_lancher .close_me").toggleClass("active");
            $(".ui-chat-container .btn_chat_lancher .open_me").toggleClass("active");
        }
    });
});
