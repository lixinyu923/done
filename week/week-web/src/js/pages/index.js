define([], function() {
    var btn=document.querySelector(".login");
    var inp=document.querySelectorAll("input");
    btn.onclick=function(){
        
        let user=inp[0].value.trim();
        let psw=inp[1].value;

        if(!user || !psw){
            return alert("用户名或者密码不能为空")
        }
        axios.post("/api/getuser",{
            user:user,
            psw:psw
        }).then(function(data){
            if(data.data.code===1){
                console.log("成功")
                location.href="default.html?id="+data.data.result[0]._id;
            }else{
                alert("用户不存在")
            }
        })
    }
});