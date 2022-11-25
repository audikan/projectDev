const items= [{
        name: 'Pizza 001',
        price: 6.9,
        quantity: 2
    },
    {
        name: 'Pizza 002',
        price: 5.9,
        quantity: 3
    },
    {
        name: 'Pizza 003',
        price: 7.9,
        quantity: 1
    }
]

const shipping = 2;
function render(){
    let subTotal = 0;
    items.forEach(item => {        
        subTotal += item.quantity * item.price
    })
    const total = subTotal + shipping;

    const html = items.map(item =>`
    <li class="order__item">
    <span class="item-name">${item.name}</span>

    <span class="item-quantity">
        <button class='dec'>-</button>
        <input type="number" value="${item.quantity}">
        <button class='inc'>+</button>
    </span>
    <span class="item-price">
        <span>$${(item.quantity * item.price).toFixed(2)}</span>
        <button class='delete btn-delete'>X</button>
    </span>
</li>`).join('')

    var web = document.getElementById("web")
    var stt = document.getElementById("sub-total")
    var sp = document.getElementById("shipping")
    var tt = document.getElementById("total")

    web.innerHTML = html
    
    const deleteButtons = [...document.getElementsByClassName('delete')]
    const decButtons = [...document.getElementsByClassName('dec')]
    const incButtons = [...document.getElementsByClassName('inc')]
    for (let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click',() =>remove(i))
    decButtons[i].addEventListener('click',() =>updatequantity(i, items[i].quantity-1))
    incButtons[i].addEventListener('click',() =>updatequantity(i, items[i].quantity+1))
    } 

    stt.innerHTML = subTotal.toFixed(2);
    sp.innerHTML = shipping.toFixed(2);
    tt.innerHTML = total.toFixed(2);
}

function add(){
    items.push({
            name: 'Pizzz 00' + (items.length+1),
            quantity: (Math.random()*10).toFixed(0),
            price: (Math.random()*10).toFixed(2) 
    })
    render();
}

function remove(index){
    items.splice(index, 1)
    render();
}

function updatequantity(index, quantity){
    if(quantity < 1){
        return
    }
    items[index].quantity = quantity
    render(); 
}
let a = document.getElementById('btn-add')

a.addEventListener('click',() => add())



render();
