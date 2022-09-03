document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

document.getElementById('abrirP').addEventListener('click',function () {
    window.PreviewAnyFile.previewPath(
        win => console.log("open status",win),
        error => console.error("open failed", error),
        "http://192.168.1.7/despEsquivel/api/documents/archivosEmpleados/62b4c8c869e1c.pdf",{}
    );
});