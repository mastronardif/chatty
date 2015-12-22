// my.js 
/*!
 *  my.js 
 */
 
 var mycmd = (function() {
    // your module code goes here
    var sum = 0 ;

    return {
            my_test:function() {
            alert(' my_test:function()');
            //return sum;
        },
        add:function() {
            sum = sum + 1;
            return sum;
        },
        reset:function() {
            return sum = 0;    
        }  
    }   
}());
//alert(modularpattern.add());    // alerts: 1
//alert(modularpattern.add());    // alerts: 2
//alert(modularpattern.reset());  // alerts: 0
