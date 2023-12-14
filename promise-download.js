const download = () => {
    return new Promise((resolve, reject ) => {
        const status = true;

        setTimeout(() => {
            if (status) {
                resolve("Dwonload Selesai");
            } else {
                reject("Download Gagal");
            }
        }, 5000);
    }) ;
};

console.log(download());