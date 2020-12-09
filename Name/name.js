fetchUsers = () => {
    try {
        let select=document.getElementById("Name");
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((res) => {
          res.forEach((element) => {
            let opt=element.name
            console.log(opt);
            let e1=document.createElement("option");
            e1.text=opt;
            e1.value=opt;
            select.add(e1);            
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  
  
  fetchUsers();
   
  searchUser = () => {
    try {
      var value = document.getElementById("Name").value;
      console.log(value);
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((res) => {
          var user = res.filter((element) => element.name == value);
          console.log(user);
          document.getElementById(
            "user"
          ).innerHTML = `<div class="card border-primary mb-3" style="max-width: 25rem;">
          <div class="card-body">
            <h5 class="card-title">${user[0].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${user[0].website}</h6>
            <p class="card-text">
            <b>Suite:</b>     ${user[0].address.suite}<br>
            <b>Street:</b>    ${user[0].address.street}<br>
            <b>City:</b>      ${user[0].address.city}<br>
            <b>Zip Code:</b>  ${user[0].address.zipcode}<br>
            <b>E-mail:</b>    ${user[0].email}<br>
            <b>Phone:</b>     ${user[0].phone}<br>
            <b>Company Name: </b>${user[0].company.name}</p>
            
         </div>
        </div>`;
        });
    } catch (error) {
      console.log(error);
    }
  };
  
  