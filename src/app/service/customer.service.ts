import { Customer} from '../model/customer';

//let customers: Customer[] = [];
let customers: Array<Customer> = [];

export function getAllCustomers(): Promise<Array<Customer>>{
    //to-do: 

    return new Promise((resolve, reject)=>{


    // 1.Initiate a XMLHttpRequest
    let http = new XMLHttpRequest();

    // 2. setting up the call back function
    http.onreadystatechange = function (){
        if (http.readyState ===4){
            console.log("Customers la awaa");
            //console.log(http.responseText);
            let dom = $(http.responseText);
            $(dom).find("table tbody tr").each((index, elm)=>{
                let id = $(elm).find("td").first().text();
                let name = $(elm).find("td").eq(1).text();
                let address = $(elm).find("td").eq(2).text();
                let salary = $(elm).find("td").last().text();
                customers.push(new Customer(id, name, address));
            });
            resolve(customers);
        }
    }

    // 3. open the request
    http.open('GET', 'http://localhost:8080/pos/customers', true);

    // 4. if we have to set headers


    // 5. 
    http.send();


    /* for (let i = 0; i < 50; i++) {
        // new Customer('C'+i, 'Kasun', 'Galle')
        customers.push(new Customer(`C${i}`, 'Kasun', 'Galle'));
        
    } */

    });
    
}