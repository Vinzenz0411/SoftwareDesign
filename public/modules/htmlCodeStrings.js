export let loggedInPage = ` 

<h1 id="userName">Welcome</h1>
<!-- Add Username above -->

<h3>What do you want to do?</h3>

<nav id ="navigation">

    <button class="buttonStyle" id="addUser">Add new User (Admin)</button>
    <!-- Disable If not Admin -->

    <button class="buttonStyle" id="changeAdmin">Change Admin Privileges (Admin)</button>
    <!-- Disable If not Admin -->

    <button class="buttonStyle" id="addProduct">Add new Product (Admin)</button>
    <!-- Disable If not Admin -->

    <button class="buttonStyle" id="searchProduct">Search for Product</button>
    <!-- And change Product if needed -->

    <button class="buttonStyle" id="searchCustomer">Search for Customer</button>
    <!-- And change Customer if needed -->

    <button class="buttonStyle" id="addCustomer">Add new Customer</button>

    <button class="buttonStyle" id="searchOrder">Search for Order</button>
    <!-- And change Order if needed -->

    <button class="buttonStyle" id="addOrder">Add new Order</button>

</nav>

<div id="changeSite"></div>
`;
export let addUserPage = `

<h1>Enter the Username and Password for the new User</h1>

<form id="form" onsubmit="return false">

    <label for="Username">Username:</label><br>
    <input type="text" name="Username" required /><br/><br>

    <label for="Password">Password:</label><br>
    <input autocomplete="on" type="password" name="Password" required /><br/><br>

    <label for="Admin">Admin ("true" or "false"):</label><br>
    <input type="text" name="Admin" required /><br/><br>

    <button id="submit">Create</button>
    <br/><br>
    <div id="response"></div>
</form>
`;
export let tableHeader = `
<br>
<br>
<table id="table">

<tr>
<th>Username</th>
<th>Privileges</th>
<th>Change</th>
</tr>

</table>
`;
export let tableBody = `

<tr>
<td class=\"username\"></td>
<td class=\"privileges\"></td>
<td> <button class=\"changeButton\"> Change Admin Privileges </button> </td>
</tr>
`;
export let product = `

<form id="form" onsubmit="return false">

    <label for="ID">ID:</label><br>
    <input type="text" name="ID" required /><br/><br>

    <label for="Description">Description:</label><br>
    <input type="text" name="Description" required /><br/><br>
    
    <label for="MEDate">MEDate:</label><br>
    <input type="text" name="MEDate" required /><br/><br>

    <label for="Price">Price:</label><br>
    <input type="text" name="Price" required /><br/><br>

    <label for="StandardDeliveryTime">StandardDeliveryTime:</label><br>
    <input type="text" name="StandardDeliveryTime" required /><br/><br>

    <label for="MinBG">MinBG:</label><br>
    <input type="text" name="MinBG" required /><br/><br>

    <label for="MaxBG">MaxBG:</label><br>
    <input type="text" name="MaxBG" required /><br/><br>

    <label for="DiscountBG">DiscountBG:</label><br>
    <input type="text" name="DiscountBG" required /><br/><br>

    <label for="Discount">Discount:</label><br>
    <input type="text" name="Discount" required /><br/><br>

    <button id="submit">Create</button>

    <br/><br>

    <div id="response"></div>

</form>
`;
//# sourceMappingURL=htmlCodeStrings.js.map