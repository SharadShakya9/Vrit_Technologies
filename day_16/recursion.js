/*const menus = [{
    name: 'day-1',
    children:  [{
        name: 'day-2',
        children: [{
            name: 'day-3',
            children: null
        }]
    }]
}]

sidebarMenus = (menulist) => {
    menulist.forEach(element => {
        console.log(element.name)
        if(element.children) {
            sidebarMenus(element.children)
        }
    });
}


sidebarMenus(menus)*/

/*const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]] //convert to [1,2,3,4,5,6,7,8,9]
var list = []

rec = (array) => {
    array.forEach(element => {
        if (Array.isArray(element)) {
            rec(element)
            return
        }
        list.push(element)
    });
}

rec(arr)
console.log(list)*/


fibo = (num) => {
    if (num == 1) {
        return 0
    }
    if (num == 2) {
        return 1
    }

    return fibo(num-1) + fibo(num-2)
}

var list = []
let  n = 10
for(let i = 1; i <= n; i++) {
    list.push(fibo(i))
}
console.log(list)

