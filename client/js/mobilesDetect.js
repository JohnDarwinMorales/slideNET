var md = new MobileDetect(window.navigator.userAgent);

console.log( md.mobile() );
console.log( md.phone() );
console.log( md.tablet() );

function load(){
    var idMob= document.getElementById('mob');
    idMob.innerText="phone:"+md.phone()+"tablet:"+md.tablet();
   // alert("sadadasdas");
}

//idMobile.innerText= "phone:"+md.phone()+"tablet:"+md.tablet();

/*
 console.log( md.mobile() );          // 'Sony'
 console.log( md.phone() );           // 'Sony'
 console.log( md.tablet() );          // null
 console.log( md.userAgent() );       // 'Safari'
 console.log( md.os() );              // 'AndroidOS'
 console.log( md.is('iPhone') );      // false
 console.log( md.is('bot') );         // false
 console.log( md.version('Webkit') );         // 534.3
 console.log( md.versionStr('Build') );       // '4.1.A.0.562'
 console.log( md.match('playstation|xbox') ); // false
 */