exports.default = function (element, animation, duration, delay) {
    return new Promise(function (resolve, reject) {

        if (duration === Infinity) {
            exports.addClass(element, "infinite");
        } else {
            duration = duration || 0;
            delay = delay || 0;

            if (duration) {
                element.style.animationDuration = duration + "s";
            }

            if (delay) {
                element.style.animationDelay = delay + "s";
            }

            setTimeout(function () {

                if (exports.hasClass(element, "animated") && exports.hasClass(element, animation)) {
                    resolve(exports.clean(element, animation));
                } else {
                    reject();
                }

            }, ((duration || 1) + delay) * 1000);
        }

        exports.addClass(element, "animated");
        exports.addClass(element, animation);
    });
}

exports.addClass = function(element, className) {
    element.classList.add(className);
}

exports.removeClass = function(element, className) {
    element.classList.remove(className);
}

exports.hasClass = function(element, className) {
    return element.classList.contains(className);
}

exports.clean = function(element, animation) {
    exports.removeClass(element, "animated");
    exports.removeClass(element, animation);

    return element;
}