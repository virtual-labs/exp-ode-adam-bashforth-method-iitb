//for activity 1
function f1(x, y) {
    return x + y;
}
//for activity 2
function f2(x, y) {
    return -0.2 * (y - 20);
}
function get_yp(x, y, h, f) {
    return (y[3] +
        (h / 24) *
            (55 * f(x[3], y[3]) -
                59 * f(x[2], y[2]) +
                37 * f(x[1], y[1]) -
                9 * f(x[0], y[0])));
}
function get_yc(x, y, x4, h, yp, f) {
    return (y[3] +
        (h / 24) *
            (9 * f(x4, yp) +
                19 * f(x[3], y[3]) -
                5 * f(x[2], y[2]) +
                f(x[1], y[1])));
}
//# sourceMappingURL=bashforth.js.map