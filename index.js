import { data } from "./data.js";

const tierOne = document.getElementById("tierone_table");
const tierTwo = document.getElementById("tiertwo_table");
const tierThree = document.getElementById("tierthree_table");

const renderItems = (item, insertionNode) => {
  for (let element of item) {
    insertionNode.innerHTML += `<tr>
            <td>${element.serviceName}</td>
            <td>$${element.monthlyPrice}</td>
            <td>
                <ul>
                ${element.features
                  .map((listItem) => `<li class="listitems">${listItem}</li>`)
                  .join(" ")}
                </ul>
            </td>
            <td><a href=#">Sign up!</a></td>
        </tr>`;
  }
};

renderItems(data[0], tierOne);
renderItems(data[1], tierTwo);
renderItems(data[2], tierThree);
