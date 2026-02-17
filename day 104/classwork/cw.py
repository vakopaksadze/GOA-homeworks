


def array_to_tree(arr):
    if not arr:
        return None

    nodes = [Node(x) for x in arr]

    for i in range(len(arr)):
        if 2 * i + 1 < len(arr):
            nodes[i].left = nodes[2 * i + 1]
        if 2 * i + 2 < len(arr):
            nodes[i].right = nodes[2 * i + 2]

    return nodes[0]