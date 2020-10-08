var arr = ['1', '3', 'aa'];
 var arry = [];

        for (var i = arr.length-1; i >= 0; i--) {
            arry[arr.length-i-1] = arr[i]
        }

        document.write(arry)