var tanya;
 do{
// menangkap pilihan player
var p = prompt("pilih : 1 s.d. 10");

// menangkap pilihan komputer
// membangkitkan bilangan random
var comp = Math.floor(Math.random() * (10 - 1)) + 1;
var hasil = '';
var nyawa = 3;
// menentukan rules
        while(p != comp && nyawa != 0){
            switch(p){
                case "1" :
                case "2" :
                case "3" :
                case "4" :
                case "5" :
                case "6" :
                case "7" :
                case "8" :
                case "9" :
                case "10" :
                    hasil = (p > comp) ? "Angka kurang rendah" : "Angka kurang tinggi";
                    break;
                default :
                    hasil = "Pilihan yang kamu masukkan SALAH";
                    break;
            }
        nyawa--;
            if(p != comp && nyawa != 0){
                alert(hasil + " sisa tebakan tinggal " + nyawa);
                p = prompt("Masukkan Tebakan");
            } else{
                alert("Sisa tebakan telah habis, angka yang dicari adalah " + comp);
            }
        }
        if(p == comp)
            alert("Tebakan Benar, angka yang dicari adalah " + p);

// menanyakan main lagi atau tidak
tanya = confirm("Apakah kamu mau main lagi...?")
 }while(tanya)

alert("Terima kasih telah bermain");