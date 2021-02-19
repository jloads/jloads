// get-function-name.js
jlogs('exist?', 'getFunctionName');

/**
 *
 * @param url
 * @param map
 * @param parent
 * @returns {*}
 */
function getFunctionName(url, map, parent) {
    var f = 'getFunctionName / ' + parent;

    if (isEmpty(url) || url.length < 2) {
        throw new Error('url not exits');
    }

    if (isEmpty(map) || map.length < 2) {
        throw new Error('map not exits');
    }

    var ext = getFileExtension(url);
    // jlogs(f, ' map ', map);
    jlogs(f, ' url ', url);
    jlogs(f, ' ext ', ext);
    var result = map[ext];
    jlogs(f, ' result ', result);

    if (isEmpty(result)) {
        throw new Error('key or Value Is Empty or Key not exits in Map');
    }

    return result;
}
