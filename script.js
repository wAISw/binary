// Создание бинартного дерева


function pushToBTree(count, row) {
    var bTree = [];
    for (var j = 1; j < 3; j++) {
        // если число больше 0.5, то создаем ветку
        if (Math.random() > 0) {
            var id = (row || "") + "" + j;
            count--;
            if (count > 0) {
                bTree.push({
                    id: id,
                    children: pushToBTree(count, id)
                });
            }
        }
    }
    return bTree
}
bTree = pushToBTree(7);
console.log(bTree);


// обход бинарного дерева
var element = document.createElement('ul');
function walk(tree, ul) {
    for (var j = 0; j < 2; j++) {
        if (tree[j]) {
            var element = document.createElement("li");
            console.log(element);
            element.innerHTML = "<div><span>" + tree[j].id + "</span><div class='arrows'></div></div>";
            var elementUl = document.createElement('ul');
            element.appendChild(walk(tree[j].children, elementUl));
            ul.appendChild(element);
            console.log(tree[j].id);
        }
    }
    return ul;
}
document.getElementById('main').appendChild(walk(bTree, element));
