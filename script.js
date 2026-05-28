let buttons = document.querySelectorAll("button");

buttons.forEach(function(btn){

    btn.addEventListener("click", function(){

        if(btn.innerText === "Beli"){
            alert("Produk berhasil ditambahkan ke keranjang!");
        }

    });

});