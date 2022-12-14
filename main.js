fetch('https://isro.vercel.app/api/customer_satellites')
.then(res=> res.json())
.then(data=> {
    console.log(data);
    data.forEach(element => {
        document.getElementById('data').innerHTML +=`
        <tr>
            <td>${element.customer_satellites.id}</td>
            <td>${element.customer_satellites.country}</td>
            <td>${element.customer_satellites.launch_date}</td>
            <td>${element.customer_satellites.mass}</td>
            <td>${element.customer_satellites.launcher}</td>
           
        </tr>`
        
    });})
.catch(e=> console.log(e))