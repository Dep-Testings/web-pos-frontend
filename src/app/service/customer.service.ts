import { Customer} from '../model/customer';

//let customers: Customer[] = [];
let customers: Array<Customer> = [];
let loaded = false;

export function getAllCustomers(): Promise<Array<Customer>>{
    //to-do: 

    return new Promise((resolve, reject)=>{

        if (!loaded){

           /*  // 1.Initiate a XMLHttpRequest
            let http = new XMLHttpRequest();

            // 2. setting up the call back function
            http.onreadystatechange = function (){
                if (http.readyState ===4){
                    console.log("Customers la awaa");
                    // console.log(http.responseXML);
                    customers = JSON.parse(http.responseText);
                    resolve(customers);
                    // if(http.responseXML){
                    //     let dom  = $(http.responseXML);
                    //     console.log(dom.find("table").html()); 
                    //     dom.find("customer").each((index, elm)=>{
                    //         let id = $(elm).find("id").text();
                    //         let name = $(elm).find("name").text();
                    //         let address = $(elm).find("address").text();
                    //         let salary = $(elm).find("salary").text();
                    //         customers.push(new Customer(id, name, address));
                    //     });
                    //     resolve(customers);
                    // }
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

            $.ajax({
                method: "GET",
                url: `http://localhost:8080/pos/customers`
            }).then((data)=>{
                customers = data;
                loaded = true;
                resolve(customers);
            }).fail(()=>{
                reject();
            })

        }else {
            resolve(customers);
        }
    });
    
}

export function saveCustomer(customer: Customer): Promise<void>{

    return new Promise((resolve, reject)=>{
        
       /*  let http  = new XMLHttpRequest();

        http.onreadystatechange = ()=>{
            if (http.readyState == 4){
                if(http.status == 201){
                    customers.push(customer);
                    resolve
                }else{
                    reject("Something went wrong");
                }
            }
        };

        http.open('POST', 'http://localhost:8080/pos/customers', true);

        http.setRequestHeader('Content-Type', 'application/json');

        http.send(JSON.stringify(customer)); */

        $.ajax({
            method: 'POST',
            url: 'http://localhost:8080/pos/customers',
            contentType: 'application/json',
            data: JSON.stringify(customer)
        }).then(()=>{
            customers.push(customer);
            resolve();
        }).fail(()=>{
            reject();
        })
     });

}

export function deleteCustomer(id: string): Promise<void>{ 
    return new Promise((resolve, reject)=>{

        /* let http  = new XMLHttpRequest();

        http.onreadystatechange = ()=>{
            if (http.readyState == 4){
                if(http.status == 204){
                    customers.splice(customers.findIndex((elm)=>elm.id===id),1);
                    resolve();
                }else{
                    reject();
                }
            }
        };

        http.open('DELETE', `http://localhost:8080/pos/customers?ID=${id}`, true);

        http.send(); */

        $.ajax({
            method: "DELETE",
            url: `http://localhost:8080/pos/customers?ID=${id}`
        }).then(()=>{
            customers.splice(customers.findIndex((elm)=>elm.id===id),1); //to work for success category
            resolve();
        }).catch(()=>{
            reject();       // to work for fail category
        })
    });
}