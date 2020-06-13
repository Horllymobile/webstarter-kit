import $ from "jquery";


let request = $.get("https://5ee41f145dd8b80016082ba9.mockapi.io/api/user", data => {
    console.log(data);
});