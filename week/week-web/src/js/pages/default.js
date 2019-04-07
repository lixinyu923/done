define([], function() {
  function init(){
    params()
  }

  //解析地址栏参数
  function params(){
    var params=location.search.slice(1);
    var obj=JSON.parse('{"'+params.replace(/=/g,'":"').replace(/&/g,'","')+'"}');
    console.log(obj);
    rander(obj.id);
  }

  function rander(id){
    axios.get("/api/getlist",{
        params:{
            id:id
        }
    }).then(function(data){
        document.body.innerHTML=data.data.result[0].msg;
    })
  }

  init();

});