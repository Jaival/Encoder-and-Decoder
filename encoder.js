 var Base64=                                                                     /*Object */
      {
		_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		encode:function(e)
      {
          var t="";
		  var n,r,i,s,o,u,a;
          var f=0;
		  e=Base64._utf8_encode(e);
          while(f<e.length)
      {
          n=e.charCodeAt(f++);
		  console.log(n);
          r=e.charCodeAt(f++);
		  console.log(r);
          i=e.charCodeAt(f++);
		  console.log(i);
          s=n>>2;
		  console.log(s);
          o=(n&3)<<4|r>>4;
		  console.log(o);
		  u=(r&15)<<2|i>>6;
		  console.log(u);
          a=i&63;
		  console.log(a);
          if(isNaN(r))
          {
              u=a=64
			  console.log(u);
          }
          else if(isNaN(i))
          {
              a=64
			  console.log(a);
          }
          t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+
              this._keyStr.charAt(a)
			  console.log(t);
      }
          return t;
      },
      _utf8_encode:function(e)
          {
              e=e.replace(/rn/g,"n");
			  console.log(e);
              var t="";
              for(var n=0;n<e.length;n++)
      {
          var r=e.charCodeAt(n);
		  console.log(r);
          if(r<128)
          {
              t+=String.fromCharCode(r)
			  console.log(t);
          }
          else if(r>127&&r<2048)
          {
              t+=String.fromCharCode(r>>6|192);
			  console.log(t);
              t+=String.fromCharCode(r&63|128);
			  console.log(t);
          }
       else
        {
            t+=String.fromCharCode(r>>12|224);
			console.log(t);
            t+=String.fromCharCode(r>>6&63|128);
			console.log(t);
            t+=String.fromCharCode(r&63|128);
			console.log(t);
        }
      }
         return t;
        }	
      }
     function myFun()
      {
         //var string = document.form.Name.value;
        //window.prompt("Enter your messege you want to encript") /*Define the string */
      //'Hello World!'//;
      var encodedString = Base64.encode(document.form.Name.value);
      /*Encode the String */
		document.form.encodedS.value = encodedString;
	  alert(encodedString);
      // Outputs: "SGVsbG8gV29ybGQh" //
    // var q=document.write(encodedString);
	  }
      function myFun1()
      {
          location="index.html"
	  }
	  function myFun2()
	  {
		location="decoderlogin.html"
	  }
