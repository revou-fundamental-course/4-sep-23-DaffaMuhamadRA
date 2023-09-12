let lastCalculatedValue = null;

function hitung() {
    // Ambil nilai dari input
    let sisiInput = document.getElementById('inputsisi');
    let luasInput = document.getElementById('inputluas');
    let kelilingInput = document.getElementById('inputKeliling');

    let sisi = parseFloat(sisiInput.value);
    let luas = parseFloat(luasInput.value);
    let keliling = parseFloat(kelilingInput.value);

    // Cek apakah nilai sama dengan yang terakhir dihitung
    if (sisi === lastCalculatedValue || luas === lastCalculatedValue || keliling === lastCalculatedValue) {
        alert("Nilai yang sama telah dihitung sebelumnya.");
        return;
    }

    // Cek input yang diisi

    if (!isNaN(sisi)) {
        // Hitung luas dan keliling berdasarkan sisi
        let hasilLuas = sisi * sisi;
        let hasilKeliling = 4 * sisi;
        sisiInput.value = sisi;
        luasInput.value = hasilLuas;
        kelilingInput.value = hasilKeliling;
    } else if (!isNaN(luas)) {
        // Hitung sisi dan keliling berdasarkan luas
        let hasilSisi = Math.sqrt(luas);
        let hasilKeliling = 4 * hasilSisi;
        sisiInput.value = hasilSisi;
        kelilingInput.value = hasilKeliling;
    } else if (!isNaN(keliling)) {
        // Hitung sisi dan luas berdasarkan keliling
        let hasilSisi = keliling / 4;
        let hasilLuas = hasilSisi * hasilSisi;
        sisiInput.value = hasilSisi;
        luasInput.value = hasilLuas;
    } else {
        sisiInput.value = "";
        luasInput.value = "";
        kelilingInput.value = "";
    }

}

function reset() {

    document.getElementById('inputsisi').value = "";
    document.getElementById('inputluas').value = "";
    document.getElementById('inputKeliling').value = "";



}