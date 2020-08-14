/*Function to replace vowel with another char*/

function replaceVowel(str)
{
	var vowel={ a:'1',e:'2',i:'3',o:'4',u:'5'};
	var arr=Array.from(str);
	for(var i=0;i<str.length;i++)
	{
		if(arr[i]==='a')
			{
				arr[i]=vowel.a;
			
			}
			if(arr[i]==='e')
			{
				arr[i]=vowel.e;
			
			}
			if(arr[i]==='i')
			{
				arr[i]=vowel.i;
			
			}
			if(arr[i]==='o')
			{
				arr[i]=vowel.o;
			
			}
			if(arr[i]==='u')
			{
				arr[i]=vowel.u;
			
			}
	}
	for(var i=0;i<str.length;i++)
	{
		console.log(arr[i]);
	}
}
replaceVowel('Karachi');
// replaceVowel('chembur');
// replaceVowel('Khandbari');