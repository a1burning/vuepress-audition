// IE不支持
// new URL方法如果给定的基本 URL 或生成的 URL 不是有效的 URL 链接，则会抛出一个TypeError。
const isUrl = urlStr => {
    try {
        const { href, origin, host, hostname, pathname, protocol } = new URL(urlStr)
        return /^(http|https|ftp):$/.test(protocol) && href && origin && host && hostname && pathname && true
    } catch (e) {
        return false
    }
}