var b50=0;
var b20=0;
var b10=0;
var b5=0;
var b1=0;
var h=0;
var q=0;
var d=0;
var n=0;
var p=0;

function setVars(){

}

var changeSum=0;
var changeArr=[h,q,d,n,p];
var changeVal=[50,25,10,5,1];
for(int i=0;i<5;i++){
	changeSum+=changeArr*changeVal;
}

var dpc=[[],[],[],[],[],[]];
for(int i=0;i<6;i++){
	for(int j=0;j<changeSum+1;j++){
		dpc.push(0);
	}
}
dpc[0][0]=1;

for(int i=0;i<6;i++){
	for(int j=0;j<changeSum+1;j++){
		for(int k=1;k<=changeArr[i];k++){
			
		}
	}
}