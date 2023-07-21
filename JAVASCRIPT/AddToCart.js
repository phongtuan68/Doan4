var cart = []; // Mảng chứa thông tin giỏ hàng

    function addToCart(button) {
        var productName = button.parentNode.querySelector(".medicine_item_title").textContent;

        // Thêm thông tin sản phẩm vào giỏ hàng
        cart.push(productName);

        // Cập nhật giao diện hiển thị giỏ hàng
        updateCartUI();
    }

    function updateCartUI() {
        var cartElement = document.getElementById("cart");
        // Xóa nội dung cũ của giỏ hàng
        cartElement.innerHTML = "";

        // Lặp qua danh sách sản phẩm trong giỏ hàng và thêm HTML cho từng sản phẩm vào giỏ hàng
        for (var i = 0; i < cart.length; i++) {
            var product = cart[i];
            var productHTML = "<p>" + product + "</p>";
            // Thêm HTML cho sản phẩm vào giỏ hàng
            cartElement.innerHTML += productHTML;
        }
    }

    var cartCount = 0; // Số lượng sản phẩm trong giỏ hàng

    function addToCart() {
        cartCount++; // Tăng số lượng sản phẩm
        updateCartCount(); // Cập nhật số lượng sản phẩm trong giỏ hàng
    }

    function updateCartCount() {
        var cartCountElement = document.getElementById("cartCount");
        cartCountElement.innerText = cartCount;
    }
    