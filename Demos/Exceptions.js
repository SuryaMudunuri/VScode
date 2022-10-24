function exp()
let x=1;
let y = 0;
{
   try
   {
     if(y==0)
     {
        let result = x/y;
     }
   }
   catch (e){
      console.log("Error:" + e);
   }
   finally{
       console.log("erroe occured")
   }

}