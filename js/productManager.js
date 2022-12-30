let storage = sessionStorage.getItem("cartResult");
let shoppingcart = [];
if (storage)
{
    shoppingcart = JSON.parse(storage);
}

let categories = [new Categories(1, "Điện thoại"),
                  new Categories(2, "Laptop"),
                  new Categories(3,"Tai nghe"),
                  new Categories(4,"Đồng hồ"),
                  new Categories(5,"Loa")];

let products = [new Product(1,"Điện thoại Samsung Galaxy Z Flip4 128GB",
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
         new Product(6,"Laptop Asus TUF Gaming FX517ZC i5",
             28990000,"/images/img06.jpg",
              " mang hiệu năng vượt trội cho khả năng giải quyết trơn tru các tác vụ phức tạp như thiết kế hình ảnh, render video,... trên các ứng dụng nhà Adobe hay thoả sức chiến các tựa game hot như CS:GO, GTA V",
                categories[1].getCategoriesId()),
          new Product(8, "Laptop Acer Nitro 5 Gaming AN515 57 553E i5",
              24990000,"/images/img07.jpg",
                   "Sở hữu hiệu năng mạnh mẽ của CPU Intel Core i5 11400H, đi kèm card màn hình rời RTX 3050 4 GB cung cấp khả năng chiến game mượt mà, các tác vụ hằng ngày như: Word, Excel, PowerPoint,... hay thiết kế đồ hoạ Premiere, After Effect, Photoshop,... sẽ không làm khó được chiếc laptop này.",
                    categories[1].getCategoriesId()),
          new Product(9,"Laptop Apple MacBook Air M2 2022 16GB",
              46990000,"/images/img08.jpg",
                 "Chip Apple M2 vẫn được sản xuất ở tiến trình 5 nm với 4 nhân hiệu năng cao và 4 nhân tiết kiệm kiệm như dòng M1 nhưng tốc độ băng thông đã được cải tiến vượt trội lên đến 100GB/s, cùng với đó là sự trợ giúp của 20 nghìn tỷ bóng bán dẫn giúp hiệu suất hoạt động được nâng cao hơn 18% so với phiên bản tiền nhiệm, đảm bảo vận hành trơn tru mọi tác vụ học tập, làm việc từ cơ bản đến nâng cao",
                   categories[1].getCategoriesId()),
              new Product(10,"Tai nghe Bluetooth AirPods Pro (2nd Gen)",
                  6290000,"/images/img09.jpg",
                    "Về phần thiết kế, nhà Apple vẫn giữ nguyên kiểu dáng quen thuộc của những phiên bản tiền nhiệm trước đó như: Thiết kế gọn nhẹ, đường bo góc tinh tế, gam màu trắng trang nhã bao bọc trọn vẹn tai nghe và hộp sạc",
                     categories[2].getCategoriesId()),
             new Product(11,"Tai nghe Bluetooth True Wireless Rezo F15",
                 395000,"/images/img10.jpeg",
                   "Thiết kế housing tinh xảo, đồng màu với hộp sạc trong 2 phiên bản là màu hồng ngọt ngào và màu trắng trang nhã, phù hợp với cả phái mạnh và phái đẹp. Housing được chế tác với tay cầm dài cho bạn dễ cầm và đeo vào tai, hạn chế trượt tay, rơi rớt khi thao tác.",
                    categories[2].getCategoriesId()),
            new Product(12,"Tai nghe Bluetooth True Wireless AVA+ DS201A",
                345000,"/images/img11.jpg",
                "Housing (phần tai nghe) được chế tác với kiểu dáng nhỏ nhắn, gọn đẹp, cầm nắm và đeo tháo linh hoạt chỉ bằng 2 đầu ngón tay, nút tai mềm nhẹ, đeo vừa vặn và thoải mái, không tạo cảm giác cấn, đau trong suốt quá trình sử dụng.",
                categories[2].getCategoriesId()),
            new Product(13,"Tai nghe Bluetooth True Wireless Gaming Asus Rog",
                2060000,"/images/img12.jpg",
                 "Công nghệ chống ồn chủ động ANC cũng được trang bị trên tai nghe nhét tai ASUS này, thiết bị có khả năng lọc các tạp âm xung quanh, mang đến cho bạn những trải nghiệm âm thanh hoàn hảo.",
                categories[2].getCategoriesId()),
            new Product(14,"Đồng hồ CASIO 39.7 mm Nam AE-1200WHD-1AVDF ",
                1098000,"/images/img13.jpg",
                "Thương hiệu đồng hồ nổi tiếng đến từ Nhật Bản không ngừng cải tiến và cho ra mắt những dòng sản phẩm chất lượng phù hợp với nhiều đối tượng khách hàng",
                 categories[3].getCategoriesId()),
            new Product(15,"Đồng hồ G-SHOCK 45.4 mm Nam GM-2100-1ADR",
                6165000,"/images/img15.jpg",
                "Vừa bóng bẩy, sắc nét lại vừa táo bạo với chiếc đồng hồ G-Shock tiêu chuẩn, của thương hiệu Casio nổi tiếng và uy tín Nhật Bản. Chiếc đồng hồ này thực sự được xem như là một món thời trang thực thụ vì vẻ ngoài được thiết kế cực kì và ấn tượng",
                 categories[3].getCategoriesId()),
            new Product(16,"Đồng hồ EDIFICE 46 mm Nam ECB-S100HG-1ADF",
                8982000,"/images/img16.jpg",
                  " Đồng hồ EDIFICE 46 mm Nam ECB-S100HG-1ADF là chiếc đồng hồ nam thuộc dòng Edifice Casio đến từ thương hiệu Casio uy tín và lâu đời của Nhật Bản",
                  categories[3].getCategoriesId()),
            new Product(17, "Đồng hồ CITIZEN 40 mm Nam NH8391-51L",
                6856000,"/images/img17.jpg"),
           new Product(18,"Loa Bluetooth JBL Partybox Encore Essential",
               8990000,"/images/img18.jpg",
                 " Kiểu dáng đơn giản, thiết kế tiện dụng với phần tay cầm ở mặt trên loa. Chân đế bọc cao su giúp loa đứng vững và bám chắc vào mặt phẳng.",
                 categories[4].getCategoriesId()),
            new Product(19,"Loa Bluetooth JBL Pulse 5",
                6690000,"/images/img19.jpg",
                 "Loa Bluetooth JBL Pulse 5 không chỉ dừng lại ở âm thanh sống động mà còn đem đến cho người dùng trải nghiệm thị giác ấn tượng",
                   categories[4].getCategoriesId()),
             new Product(20, "Loa Bluetooth Fenda W5 Plus",
                 245000,"/images/img20.jpeg",
                  "Chiếc loa Bluetooth Fenda này có 2 màu sắc trẻ trung năng động là màu xám và xanh navy, loa có kích thước nhỏ gọn dễ dàng mang theo trong những chuyến dã ngoại ngoài trời, góp phần tăng thêm bầu không khí cho chuyến đi",
                    categories[4].getCategoriesId()),
             new Product(21,"Loa Bluetooth Sony Extra Bass SRS-XB33",
                 3690000,"/images/img21.jpg",
                 "Thiết kế cầm vừa tay, có thể trực tiếp cầm loa nghe nhạc hoặc cho vào túi xách, balo khi đi chơi, du lịch, đi làm,... Với 3 gam màu nổi bật là đen, đỏ và xanh dương, bạn nam và nữ có thể tiện chọn mua theo sở thích của mình",
                   categories[4].getCategoriesId())];

function categoriresOfProductList(categoriesName)
{
    if (categoriesName === "Tất cả")
    {
        productListDisplay();
        return;
    }
    let categoriesId, content = `<h2 class="section-title">Danh sách sản phẩm</h2>`;
    for (let i = 0; i < categories.length;i++)
    {
        if (categories[i].getCategoriesName() == categoriesName)
        {
               categoriesId = categories[i].getCategoriesId();
               break;
        }
    }
    for (let i = 0; i < products.length;i++)
    {
        if (products[i].getCategoriesId() ==  categoriesId)
        {
            content += `
             <div class="shop-content">
             <div class="product-box">
              <a href = "#"><img src="${products[i].getProductImage()}" onclick="productDetail('${i}')" alt=""  class="product-img"></a>
              <h2 class="product-title" onclick="productDetail('${i}')" ><a href = "#">${products[i].getProductName()}</a></h2>
              <span class="price">${new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(products[i].getProductPrice())}</span>
              <button type="button" class="btn-buy" onclick="addtoCart('${i}')">Thêm giỏ hàng</button>`;
        }
    }
    document.getElementById("shop_product").innerHTML = content;
}
function productListDisplay()
{
    let content = `<h2 class="section-title">Danh sách sản phẩm</h2>`;
    for (let i = 0; i < products.length;i++)
    {
        content += `
             <div class="shop-content">
             <div class="product-box">
              <a href = "#"><img src="${products[i].getProductImage()}" onclick="productDetail('${i}')" alt=""  class="product-img"></a>
              <h2 class="product-title" onclick="productDetail('${i}')" ><a href = "#">${products[i].getProductName()}</a></h2>
              <span class="price">${new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(products[i].getProductPrice())}</span>
              <button type="button" class="btn-buy" onclick="addtoCart('${i}')">Thêm giỏ hàng</button>
    </div>
  </div>`;
    }
    document.getElementById("shop_product").innerHTML = content;
}
productListDisplay();


function productDetail(index)
{
    let item = products[index];

    let content = `<h2 class="section-title">Thông tin sản phẩm</h2>`;
    content += `
             <div class="shop-content">
             <div class="product-box">
             <img src="${item.getProductImage()}"  alt=""  class="product-img">
              <h2 class="product-title">${item.getProductName()}</h2>
              <span class="price">${new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(item.getProductPrice())}</span>
               <h2 class="product-title">${item.getProductDescribe()}</h2>
              <button type="button" class="btn-buy" onclick="addtoCart('${index}')">Thêm giỏ hàng</button>`

    document.getElementById("shop_product").innerHTML = content;
}




function quantityUpdate(id)
{
    shoppingcart.map(item => {
        if (item.product.productId == id)
        {
            let itemIndex = shoppingcart.indexOf(item);

            let updateQuantity = document.getElementsByClassName("cart-quantity")[itemIndex].value;

            if (updateQuantity <= 0)
            {
                updateQuantity = 1;
            }
            item.quantity =  updateQuantity;
        }
    });
    sessionStorage.setItem("cartResult", JSON.stringify(shoppingcart));
    shoppingCartDisplay();
}
function shoppingCartDisplay()
{
    let content =``;
    if (shoppingcart.length === 0)
    {
        document.getElementById("content").innerHTML = "Giỏ hàng của bạn đang trống  "
    }
    else
    {
        shoppingcart.map(item => {
            content += `
            <div class="cart-box">
              <img src="${item.product.productImage}" alt="" class="cart-img">
              <div class="detail-box">
                <div class="cart-product-title">${item.product.productName}</div>
                <div class="cart-price">${new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(item.product.productPrice)}</div>
                <input type="number"  onchange="quantityUpdate('${item.product.productId}')" value="${item.quantity}" min = 1 class="cart-quantity">
              </div>
              <i class='bx bxs-trash-alt cart-remove' onclick="removeShoppingCart('${item.product.productId}')"></i>
            </div>`;
            })
        content += `<div class="total">
            <div class="total-title">Tổng tiền</div>
            <div class="total-price" >${new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(total())}  </div>
          </div>
          <button type="button" class="btn-buy">Mua ngay</button>
          <i class='bx bx-x' id="close-cart" onclick="shoppingCartItemsClear()"></i>`;
        document.getElementById("content").innerHTML =content;
    }
}
shoppingCartDisplay();

function addtoCart(index)
{
    let item = shoppingcart.find(value => value.product.productId === products[index].getProductId())

    if (item)
    {
        item.quantity++;
    }
    else
    {
        shoppingcart.push(new CartInfo( products[index],1));
    }
    sessionStorage.setItem("cartResult", JSON.stringify(shoppingcart));
    shoppingCartDisplay();
}

function removeShoppingCart(id)
{
    shoppingcart.map(item => {
         if (item.product.productId == id)
         {
            shoppingcart.splice(shoppingcart.indexOf(item),1);
         }
    });

    sessionStorage.setItem("cartResult", JSON.stringify(shoppingcart));
    shoppingCartDisplay();
}
function shoppingCartItemsClear()
{
    shoppingcart = [];
    sessionStorage.clear();
    shoppingCartDisplay();
}

function total()
{
    let sum = 0;
    shoppingcart.map(item => {
        sum = sum + (item.quantity * item.product.productPrice);
    });
    return sum;
}


























