function v3download() {
  var download = "https://gitee.com/Antecer/OsuKeyboard/raw/master/OsuKeyboard/bin/Release/OsuKeyboard.exe";
  window.open(download);
}

function prodownload() {
  var download = "https://github.com/Antecer/AmusingKeypad/releases/latest/download/AmusingKeypadWPF.exe";
  window.open(download, "_blank", 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=1,height=1');
  this.window.focus();
}

function sixkeydownload() {
  fetch('https://raw.githubusercontent.com/Antecer/antecer.github.io/master/drivers/app/AppVerList.txt')
    .then(res => res.text())
    .then(txt => {
      let versions = txt.split('\n');
      let lastVer = versions.length > 0 ? versions[0] : '0.0.0.0';
      console.log('LastAppVer:', lastVer)

      let downnode = document.createElement("a");
      downnode.download = 'AmusingDeviceApplication.exe';
      downnode.href = `https://antecer.github.io/drivers/app/app_${lastVer}.exe`;
      document.body.appendChild(downnode); // Fix for firefox, the anchor has to be appended to the DOM.
      downnode.click();
      document.body.removeChild(downnode);
    })
}