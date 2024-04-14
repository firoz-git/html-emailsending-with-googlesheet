$("#submitForm").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"",
        data:$("#submitForm").serialize(),
        method:"post",
        success:function (response){
            if(response.result=='success'){
                console.log(response,'iam resposnse')
                alert("Form submitted successfully")
                window.location.reload()
                document.getElementById('submitForm').reset();
            }else{
                console.log(response,'iam resposnse')
                alert("got some error")
                window.location.reload()
                // document.getElementById('submitForm').reset();
            }
 
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

// sheet is in the drive with script
//change the script email address to concerend address
//click the deploy give permission 
// copy script url after deployment