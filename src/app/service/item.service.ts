import { Item } from '../model/item';

//let customers: Customer[] = [];
let items: Array<Item> = [];

export function getAllItems(): Promise<Array<Item>>{
    //to-do: 

    return new Promise((resolve, reject)=>{


    // 1.Initiate a XMLHttpRequest  //sometimes may have two steps
    let http = new XMLHttpRequest();

    // 2. setting up the call back function
    http.onreadystatechange = function (){
        if (http.readyState ===4){
            //console.log(http.responseText);
            let dom = $(http.responseXML as any);
            $(dom).find("item").each((index, elm)=>{
                let itemCode    = $(elm).find("code").text();
                let description = $(elm).find("description").text();
                let qty         = $(elm).find("qty-on-hand").text();
                let unitPrice   = $(elm).find("unit-price").text();
                items.push(new Item(itemCode, description, qty, unitPrice));
            });
            resolve(items);
        }
    }

    // 3. open the request
    http.open('GET', 'http://localhost:8080/pos/items', true);

    // 4. if we have to set headers


    // 5. 
    http.send();


    /* for (let i = 0; i < 50; i++) {
        // new Customer('C'+i, 'Kasun', 'Galle')
        customers.push(new Customer(`C${i}`, 'Kasun', 'Galle'));
        
    } */

    });
    
}