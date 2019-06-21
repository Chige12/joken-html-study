
var url = location.href;
var baseurl = url.split('/').slice(0,-1).join('/');
var sampleNum = Number(url.split('/').slice(-1)[0].replace(/[^0-9]/g, ''));
var sampleLen = 4

//押したkeyを取得
window.document.onkeydown = function(event){
  console.log(event.key)
  if (event.key === 'Enter'){
    window.location.href = url
  }
  if (event.key === 'ArrowRight') {
    if(sampleNum < sampleLen){
      window.location.href = `${baseurl}/sample${sampleNum+1}.html`
    }else{
      window.location.href = `${baseurl}/sample1.html`
    }
  }
  if (event.key === 'ArrowLeft') {
    if(sampleNum > 1){
      window.location.href = `${baseurl}/sample${sampleNum-1}.html`
    }else{
      window.location.href = `${baseurl}/sample${sampleLen}.html`
    }
    
  }
}

