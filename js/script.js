

for(let i=1;i<26;i++){
    $("#players_amount").html($("#players_amount").html()+ ' <option value="'+i+'">'+i+'</option>')
}

let amount = 0, roles = [];
let txt = $(".slide2_input").val();
roles = txt.split(" ");

$(".note").fadeOut(0);

// $(".slide1_btn").click(function(){
//     amount = $("#players_amount option:selected").val();
   
//     console.log(amount); 
// })

// $(".slide2_btn").click(function(){
//     txt = $(".slide2_input").val();
//     roles.length = 0;

//     roles = txt.split(" ");
    
// })

let flag = 0;

$(".slide3_btn").click(function(){

    $(".slide3_output").html('<p class="lineRoles"><span class="checkVote">Голос.</span><span>Роль</span><span>Умер</span></p>');
       
        amount = $("#players_amount option:selected").val();

        txt = $(".slide2_input").val();
        roles.length = 0;
    
        roles = txt.split(" ");


                
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
             

                $(".slide3_output").html($(".slide3_output").html()+'<p class="lineRoles"><input type="checkbox" class="vote"><span>'+(i+1)+'. '+roles[i] + '</span><input type="checkbox" class="live"></p>');
                if(flag==0){
                    $(".lineRoles").eq(i).slideToggle(0);
                    setTimeout(function(){
                        $(".lineRoles").eq(i).slideToggle(300);
                       },i+"00"); 

                    } else  if(flag==1){

                        $(".lineRoles").not(":first-child").last().css({opacity:"0"});
                        setTimeout(function(){
                            $(".lineRoles").eq(i+1).css({opacity:"1"});
                           },i+"00"); 
                    }

            //     if(flag==0){
               
            //   } else {
               
            //   }
              
             
            }



            // if(flag!=0){
            //     $(".lineRoles").not(":first-child").fadeIn(500);
            // }
            
            flag=1;
               
            $(".live").prop("checked",true);


            $(".note").fadeIn(1000);

            $(".checkVote").click(function(){

                $(".vote").prop("checked",false);
            })

            
})




