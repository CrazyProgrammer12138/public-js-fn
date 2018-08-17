/**
 * 数组去重的三种办法
 * 思路1、将数字存在一个obj对象中，再去判断，不重复的值存在新数组中
 * 思路2、是indexOf 方法，查询新建数组中是否存在（小于0），在添加到新数组中
 * 思路3（推荐）、是filter方法
 */
function arrayToheaderThree(arr) {
    let newArr = arr.filter(function (element, index, self) {
        return self.indexOf(element) === index
    })
}

/**
 * 循环遍历查找每个字母的个数并计算值
 */
function MostChara(strs) {
    let o = {}, maxIndex = 0, maxStr ="";
    // 循环遍历查找每个字母的个数并计算值
    for (let i = 0; i < str.length; i++) {
        if (!o[str.charAt(i)]) {
            o[str.charAt(i)] = 1;
        } else {
            o[str.charAt(i)]++;
        }
    }
    // 比较
    for (let i in o) {
        if (o[i]>maxIndex) {
            maxIndex = o[i]
            maxStr = i
        }
    }
    console.log("the is mast chart -- " + maxStr + "--and number ---" + maxIndex)
    return maxIndex, maxStr;
}