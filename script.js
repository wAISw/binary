// Создание бинартного дерева


function pushToBTree(count, balance, row) {
    var bTree = [];

    count--;
    for (var j = 1; j < 3; j++) {
        // если число больше 0.2, то создаем ветку
        if (Math.random() > 0.2 || balance) {
            var id = (row || "") + "" + j;
            if (count > 0) {
                bTree.push({
                    id: id,
                    children: pushToBTree(count, balance, id)
                });
            }
        }
    }
    return bTree
}
bTree = pushToBTree(6, false);
console.log(bTree);


// обход бинарного дерева
var element = document.createElement('ul');
function walkWithView(tree, ul) {
    for (var j = 0; j < 2; j++) {
        if (tree[j]) {
            var element = document.createElement("li");
            element.innerHTML = "<div><span>" + tree[j].id + "</span><div class='arrows'></div></div>";
            var elementUl = document.createElement('ul');
            element.appendChild(walkWithView(tree[j].children, elementUl));
            ul.appendChild(element);
        }
    }
    return ul;
}

function walk(tree) {
    for (var j = 0; j < 2; j++) {
        if (tree[j]) {
            console.log(tree[j].id);
            walk(tree[j].children);
        }
    }
}
walk(bTree);
document.getElementById('main').appendChild(walkWithView(bTree, element));

