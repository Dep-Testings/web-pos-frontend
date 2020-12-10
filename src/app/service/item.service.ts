import { Item } from '../model/item';

//let customers: Customer[] = [];
let items: Array<Item> = [];

export function getAllItems(): Promise<Array<Item>>{
    //to-do: 

    return new Promise((resolve, reject)=>{


    // 1.Initiate a XMLHttpRequest
    let http = new XMLHttpRequest();

    // 2. setting up the call back function
    http.onreadystatechange = function (){
        if (http.readyState ===4){
            console.log("Items on fire");
            //console.log(http.responseText);
            let dom = $(http.responseText);
            $(dom).find("table tbody tr").each((index, elm)=>{
                let itemCode    = $(elm).find("td").first().text();
                let description = $(elm).find("td").eq(1).text();
                let qty         = $(elm).find("td").eq(2).text();
                let unitPrice   = $(elm).find("td").last().text();
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