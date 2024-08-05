const inputVal= document.querySelector(".url");
const downloadBtn=document.querySelector(".downloadBtn");

downloadBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        downloadBtn.innerText="Dowloading file..."
        fetchFile(inputVal.value);
})

function fetchFile(url){
    fetch(url)
    .then(res=>{
        return res.blob();
    })
    .then(file=>{
        let tempUrl=URL.createObjectURL(file);
        let aTag= document.createElement("a");
        aTag.href=tempUrl;
        aTag.download= url.replace(/^.*[\\\/]/,"");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText="Download File";
    }).catch(()=>{
        downloadBtn.innerText="Download File";
        alert("Failed to access!")
    })
}