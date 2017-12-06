var Base64={
      _keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    decode:function(e)
    {
        var t="";
        var n,r,i;
        var s,o,u,a;
        var f=0;
        e=e.replace(/[^A-Za-z0-9+/=]/g,"");
        while(f<e.length)
     {
         s=this._keyStr.indexOf(e.charAt(f++));
         console.log(a);
         o=this._keyStr.indexOf(e.charAt(f++));
         console.log(o);
         u=this._keyStr.indexOf(e.charAt(f++));
         console.log(u);
         a=this._keyStr.indexOf(e.charAt(f++));
         console.log(a);
         n=s<<2|o>>4;
         console.log(n);
         r=(o&15)<<4|u>>2;
         console.log(r);
         i=(u&3)<<6|a;
         console.log(i);
         t=t+String.fromCharCode(n);
         console.log(t);
         if(u!=64)
      {
          t=t+String.fromCharCode(r)
          console.log(t);
      }
         if(a!=64)
      {
          t=t+String.fromCharCode(i)
          console.log(t);
      }
     }
        t=Base64._utf8_decode(t);
        console.log(t);
        return t
    },
    _utf8_decode:function(e)
    {
        var t="";
        console.log(t);
         var n=0;
        console.log(n);
         var r=c1=c2=0;
        console.log(r);
         while(n<e.length)
             
    {
         r=e.charCodeAt(n);
        console.log(r);
         if(r<128)
    {
        t+=String.fromCharCode(r);
        console.log(t);
        n++;
        console.log(n);
    }
         else if(r>191&&r<224)
    {
             c2=e.charCodeAt(n+1);
        console.log(c2);
             t+=String.fromCharCode((r&31)<<6|c2&63);
        console.log(t);
             n+=2;
        console.log(n);
    }
         else
         {
             c2=e.charCodeAt(n+1);
             console.log(c2);
             c3=e.charCodeAt(n+2);
             console.log(c3);
             t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);
             console.log(t);
             n+=3
             console.log(n);
         }
     }
     return t;
    }
}
    function myFun(){
   // var string = window.prompt("enter a messege you want to decode") /*Define the string */
    var decodedString = Base64.decode(document.form.Name.value);/*Decode the String*/ 
	alert(decodedString);
	document.form.decodedS.value = decodedString;
    
        }
    function myFun1()
      {
          location="index.html"
	  }
	 function myFun2()
	  {
		location="encoderlogin.html"
	  }
