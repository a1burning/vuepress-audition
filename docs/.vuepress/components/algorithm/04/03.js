function wideTraversal(node) {
    let nodes = [], i = 0
    if (node != null) {
        nodes.push(node)
        wideTraversal(node.nextElementSibling)
        node = nodes[i++]
        wideTraversal(node.firstElementChild)
    }
    return nodes
}