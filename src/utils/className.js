/**
 * 判断样式是否存在
 * @param {*} elm element
 * @param {*} clsn className
 */
function isHasClass(elm, clsn) {
  let reg = new RegExp('(\\s|^)' + clsn + '(\\s|$)');
  return elm.className.match(reg);
}

/**
 * 为元素添加样式
 * @param {*} elm element
 * @param {*} clsn className
 */
function addClass(elm, clsn) {
  if (!isHasClass(elm, clsn)) {
    elm.className += ' ' + clsn;
  }
}

/**
 * 为元素删除样式
 * @param {*} elm element
 * @param {*} clsn className
 *
 * str.replace(/(^\s*)|(\s*$)/g, '')  删除首尾空格
 */
function removeClass(elm, clsn) {
  if (isHasClass(elm, clsn)) {
    let reg = new RegExp('(\\s|^)' + clsn + '(\\s|$)');
    elm.className = elm.className
      .replace(reg, ' ')
      .replace(/(^\s*)|(\s*$)/g, '');
  }
}

/**
 * 切换class，类jQuery中的toggleClass
 * @param {*} elm element
 * @param {*} clsn
 */
function toggleClass(elm, clsn) {
  if (isHasClass(elm, clsn)) {
    removeClass(elm, clsn);
  } else {
    addClass(elm, clsn);
  }
}

/**
 * 替换元素中指定的类名
 * @param {*} elm  element
 * @param {*} oldClsn oldClassName
 * @param {*} newClsn newClassName
 */
function replaceClass(elm, oldClsn, newClsn) {
  if (isHasClass(elm, oldClsn)) {
    let temp = elm.className.indexOf(oldClsn);
    elm.className =
      elm.className.substring(0, temp) +
      newClsn +
      elm.className.substring(temp + oldClsn.length - 1);
  }
}

export default {
  isHasClass,
  addClass,
  removeClass,
  toggleClass,
  replaceClass
};
