prompt=require(`prompt-sync`)();
//reverse triangle
rows=+prompt("enter number of rows:")
for(i=1;i<=rows;i++){
    s=''
    for(j=1;j<=rows-i;j++){
        s=s+' ' 
    }
    for(k=1;k<=rows;k++){
        if(k==rows || i==1 || k==i){
            s+="* "
        }
        else s=s+'  '
    }
    console.log(s)
}
//1 * 2 * 3* pattern
rows=+prompt("enter:") // row=5
for(i=1;i<=rows;i++){
    s=''
    for(j=1;j<=i;j++){
        if(j==1 ||  j<=rows-i+1){
            s+='* '
        }
        else {
            s+='  '
        }
    }
    console.log(s)
}
// 3)
rows=+prompt("enter rows:")
value=1
for(i=1;i<=rows;i++){
    s=''
    for(k=1;k<=rows-i;k++){
    s+=' '
    }
    for(j=1;j<=i;j++){
        if(j==1 || i==rows || i==j)
            s+=value+' '
        
        else
            s=s+'  '
        value++
    }
    console.log(s)
}