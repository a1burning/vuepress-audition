function deepTraversal(node) {
    let nodes = []
    if (node != null) {
        // 同来存放将来要访问的节点
        let stack = []
        stack.push(node)
        while (stack.length != 0) {
            //正在访问的节点
            let item = stack.pop()
            nodes.push(item)
            let childrens = item.children
            for ( let i = childrens.length - 1; i >= 0; i--)
            // 将现在访问点的节点的子节点存入 stack，供将来访问 )
            stack.push(childrens[i])
        }
    }
    return nodes
} 