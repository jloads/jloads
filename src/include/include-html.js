// include-html.js
jlogs('exist?', 'includeHtml');

/**
 *
 * @param url
 * @param target
 * @param replace
 * @param success
 * @param error
 * @returns {includeHtml|boolean}
 */
//includeHtml(self.getEnvUrl(url), self.cfg.target, self.cfg.replace, self.success, self.error);
function includeHtml(url, target, replace, success, error) {
    var f = 'includeHtml';

    if (typeof replace === 'number' && replace === 1) {
        replace = true;
    }
    jlogs(f, ' replace ', replace);

    if (typeof success !== 'function') {
        success = function () {
            jlogs(f, ' success ', "included");
        }
    }

    if (typeof error !== 'function') {
        error = function () {
            jlogs(f, ' error ', "Page not found.");
        }
    }
    jlogs(f, ' url ', url);
    // if html content, NOT URL
    jlogs(f, ' includeHtml HTML target : ', target, getTarget(target));

    if (url.length > 100) {
        getTarget(target).insertAdjacentHTML('beforeend', url);
        return success(this);
    } else if (url) {
        /* Make an HTTP request using the attribute value as the url name: */
        var xhrObj = getXHRObject();
        // xhrObj.setRequestHeader("Content-Type","text/html; charset=UTF-8");
        // xhrObj.setRequestHeader("Content-Type","multipart/form-data; boundary=something");
        xhrObj.onreadystatechange = function () {

            jlogs(f, ' getXHRObject target: ', target);

            if (this.readyState === 4) {
                // document.onload =
                loadHtmlByStatus(this.status, this.responseText, target, replace, success, error, url);

                /* Remove the attribute, and call this function once more: */
                // includeHtml(url, success, error);
            }
        }
        xhrObj.open("GET", url, true);
        // xhrObj.responseType = 'text';
        xhrObj.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        xhrObj.send();
        /* Exit the function: */
        return this;
    }
    return false;

}

