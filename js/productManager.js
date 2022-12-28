let shoppingcart = [];
let categories = [new Categories(1, "Điện thoại"),
                  new Categories(2, "Laptop"),
                  new Categories(3,"Tai nghe"),
                  new Categories(4,"Tablet")];

let products = [new Product(1, "Điện thoại Samsung Galaxy Z Flip4 128GB",
    20990000,"/images/img01.jpg",
     "Có lẽ điện thoại gập đã không còn là cái tên quá xa lạ bởi nhiều ông lớn trong ngành sản xuất thiết bị di động đã cho ra mắt khá nhiều sản phẩm có thiết kế tương tự, gần đây nhất thì có sự góp mặt của chiếc flagship đến từ nhà Samsung mang tên Galaxy Z Flip4",
      categories[0].getCategoriesId()),
      new Product(2,"Điện thoại Xiaomi Redmi Note 11S 5G",
          6090000,"/images/img02.jpg",
          "Điện thoại Redmi Note 11S 5G có ngoại hình bắt mắt với 3 màu sắc thời thượng gồm: Trắng, xám, xanh dương. Viền màn hình hai bên của máy khá mỏng cùng với đó là cạnh viền bo cong theo lòng bàn tay, tạo cảm giác cầm nắm thoải mái hơn.",
           categories[0].getCategoriesId()),
       new Product(3,"Điện thoại OPPO Reno8 Pro 5G",
           17990000,"/images/img03.jpg",
            "Lần này nhà OPPO mang đến cho chúng ta một chiếc điện thoại có thiết kế đặc biệt, máy sở hữu một diện mạo khác hẳn với những chiếc điện thoại OPPO Reno trước đây, cách thiết kế này đã làm mình liên tưởng đến chiếc OPPO Find X5 Pro được ra mắt trước đó.",
             categories[0].getCategoriesId()),
          new Product(4,"Điện thoại OPPO Find X5 Pro 5G ",
              29990000,"/images/img04.jpg",
              "Điều làm mình mê hoặc ngay từ cái nhìn đầu tiên là mặt lưng hết sức bóng bẩy, trên phiên bản màu đen thì mình hoàn toàn có thể sử dụng máy với công dụng tương tự như một chiếc gương soi tiện ích",
               categories[0].getCategoriesId()),
         new Product(5,"Laptop Lenovo Ideapad Gaming 3 15IAH7 i5 12500H",
             23190000,"/images/img05.jpg",
              "Lenovo IdeaPad Gaming 3 sở hữu một thiết kế góc cạnh cùng gam màu trắng pha lẫn các chi tiết xanh tạo nên một tổng thể vô cùng mạnh mẽ, hầm hố nhưng không kém phần sang trọng. Tuy có lớp vỏ từ nhựa nhưng cảm giác cầm nắm, xách lên di chuyển rất chắc chắn và không ọp ẹp",
               categories[1].getCategoriesId()),
         new Product(6, "Laptop Asus TUF Gaming FX517ZC i5",
             28990000,"/images/img06.jpg",
              " mang hiệu năng vượt trội cho khả năng giải quyết trơn tru các tác vụ phức tạp như thiết kế hình ảnh, render video,... trên các ứng dụng nhà Adobe hay thoả sức chiến các tựa game hot như CS:GO, GTA V",
                categories[1].getCategoriesId()),
          new Product(7, "Laptop Acer Nitro 5 Gaming AN515 57 553E i5",
              24990000,"/images/img07.jpg",
                   "Sở hữu hiệu năng mạnh mẽ của CPU Intel Core i5 11400H, đi kèm card màn hình rời RTX 3050 4 GB cung cấp khả năng chiến game mượt mà, các tác vụ hằng ngày như: Word, Excel, PowerPoint,... hay thiết kế đồ hoạ Premiere, After Effect, Photoshop,... sẽ không làm khó được chiếc laptop này.",
                    categories[1].getCategoriesId()),
          new Product(8,"Laptop Apple MacBook Air M2 2022 16GB",
              46990000,"/images/img08.jpg",
                 "Chip Apple M2 vẫn được sản xuất ở tiến trình 5 nm với 4 nhân hiệu năng cao và 4 nhân tiết kiệm kiệm như dòng M1 nhưng tốc độ băng thông đã được cải tiến vượt trội lên đến 100GB/s, cùng với đó là sự trợ giúp của 20 nghìn tỷ bóng bán dẫn giúp hiệu suất hoạt động được nâng cao hơn 18% so với phiên bản tiền nhiệm, đảm bảo vận hành trơn tru mọi tác vụ học tập, làm việc từ cơ bản đến nâng cao",
                   categories[1].getCategoriesId())];

function productListDisplay()
{
    let content = "";
    for (let i = 0; i < products.length;i++)
    {
        content += `<tr>
                         <td>${products[i].getProductId()}</td>
                          <td>${products[i].getProductName()}</td>
                          <td>${products[i].getProductPrice()}</td>
                          <td><img src= "${products[i].getProductImage()}" width="100" height="100"></td>
                          <td>${products[i].getProductDescribe()}</td>
                          <td><button type="button" onclick="addtoCart('${i}')"><a href="../shoppingCart.html">Thêm giỏ hàng</a> </button> </td>>
                     </tr>`;
    }
    document.getElementById("productData").innerHTML = content;
}
productListDisplay();


function shoppingCartExits(index)
{
    for (let i = 0; i < shoppingcart.length;i++)
    {
        if (shoppingcart[i].getCategoriesId() === products[index].getCategoriesId()) {
            return i;
        }
    }
    return -1;
}

function addtoCart(index)
{
    let position = shoppingCartExits(index);
    let cartInfo;

    if (position === -1)
    {
        cartInfo = new CartInfo();
        cartInfo.setQuantity(1);
        cartInfo.setProduct(products[index]);
        shoppingcart.push(cartInfo);
    }
    else
    {
        cartInfo = shoppingcart[position];
        cartInfo.setQuantity(cartInfo.getQuantity()+1);
    }
    sessionStorage.setItem("shoppingCart", shoppingcart.join(""));

    let content = "";

    for(let i = 0; i < shoppingcart.length;i++)
    {
        content+= `<tr class="alert" role="alert">
              <td>
                <div class="img" style="background-image: url(${shoppingcart[i].getProduct().getProductImage()});"></div>
              </td>
              <td>
                <div class="email">
                  <span>${shoppingcart[i].getProduct().getProductName()} </span>
                </div>
              </td>
              <td>$44.99</td>
              <td class="quantity">
                <div class="input-group">
                  <input type="text" name="quantity" class="quantity form-control input-number" value="${shoppingcart[i].getQuantity()}" min="1" max="100">
                </div>
              </td>
              <td>${shoppingcart[i].getTotal()}</td>
              <td>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true"><i class="fa fa-close"></i></span>
                </button>
              </td>
            </tr>`;
    }
    document.getElementById("shoppingData").innerHTML = content;
}