window.onload = function () {
    $(".form__link").click(function (e) {
        e.preventDefault();
        $(".instructions").slideToggle();
        $(this).toggleClass("is--active");
    });

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        console.log({ email });
    }
    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
};
