var lagi = true;
while(lagi){
// menangkap pilihan player
let player = prompt('pilih angka 1 - 10');

// menangkap pilihan komputer
let comp = Math.floor(Math.random() * 10) + 1;

let hasil;
    // menentukkan rules
        // benar
        if (player == comp){
            hasil = 'BENAR!';
        } 
        // terlalu rendah
        else if (player < comp){
            hasil= 'terlalu rendah';
        } 
        // terlalu tinggi
        else if (player > comp){
            hasil = 'terlalu tinggi';
        } 

// menentukan hasil 
alert('kamu memilih angka ' + player + ' dan komputer memilih angka ' + comp + ' pilihan kamu ' + hasil);

// menanyakan main lagi atau tidak
lagi = confirm('main lagi?');
};
