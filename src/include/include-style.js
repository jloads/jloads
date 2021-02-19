// include-style.js
jlogs('exist?', 'includeStyle');
/**
 *
 * @param url
 * @param target
 * @param replace
 * @param success
 * @param error
 * @returns {HTMLLinkElement}
 */
function includeStyle(url, target, replace, success, error) {
    var f = 'includeStyle';
    if (typeof replace === 'number' && replace === 1) {
        replace = true;
    }

    var link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.media = 'all';

    link.onerror = error;
    link.onload = success;
    link.onreadystatechange = success;

    if (replace) {
        jlogs(f, ' replace getTarget(target): ', getTarget(target));
        jlogs(f, ' replace getTarget(target) firstChild: ', getTarget(target).firstChild);
        // getTarget(target).removeChild(getTarget(target).firstChild);


        onSelector(target, function (selector, element) {
            jlogs('onSelector includeStyle target, getTarget(target), selector, element ',  selector, element);
            // getTarget(selector).appendChild(link);
            getTarget(selector).removeChild(getTarget(selector).firstChild);
            getTarget(selector).appendChild(link);
        });
        return success(this);
    }

    onSelector(target, function (selector, element) {
        jlogs('onSelector includeStyle target, getTarget(target), selector, element ',  selector, element);
        getTarget(selector).appendChild(link);
    });
    // return getTarget(target).appendChild(link);
}
// TODO: replce path to id name and check if ID exist
// FASTEST loading:
// https://www.oreilly.com/library/view/even-faster-web/9780596803773/ch04.html
