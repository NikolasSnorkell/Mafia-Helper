

for(let i=1;i<26;i++){
    $("#players_amount").html($("#players_amount").html()+ ' <option value="'+i+'">'+i+'</option>')
}

let amount = 0, roles = [];
let txt = $(".slide2_input").val();
roles = txt.split(" ");

$(".slide1_btn").click(function(){
    amount = $("#players_amount option:selected").val();
   
    console.log(amount); 
})

$(".slide2_btn").click(function(){
    txt = $(".slide2_input").val();
    roles.length = 0;

    roles = txt.split(" ");
    
})
$(".slide3_btn").click(function(){
        $(".slide3_output").html("");
       
                
                for(let k = (amount-roles.length);k>0;k--){
                    roles.push(" ");
                }            
               
                let temp = "",n1,n2;

                for(let i = 0;i<100;i++){
                    n1 = Math.floor(Math.random()*(amount));
                    n2 = Math.floor(Math.random()*(amount));

                    temp = roles[n1];
                    roles[n1] = roles[n2];
                    roles[n2] = temp;

                }
               
     
            for(let i = 0;i<roles.length;i++){
                $(".slide3_output").html($(".slide3_output").html()+(i+1)+'. '+roles[i] + '<br>');
            }
          
               
   
 
})