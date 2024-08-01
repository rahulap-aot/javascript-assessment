document.addEventListener('DOMContentLoaded',()=>{
    const p=document.getElementById('para')
    const inInput=document.getElementById('input').value
    p.innerText=inInput
    
    const data11=document.getElementById('data11')
    const data22=document.getElementById('data22')

    document.getElementById('button').addEventListener('click',()=>{
        const input=document.getElementById('input').value
        p.innerText=input;

        
        let data1=inInput.split(' ')
        let data2=input.split(' ')
        data11.innerHTML=data1.join(' ')
        data22.innerHTML=data2.join(' ')

        let result=''

        data1.forEach((x,i)=>{
            if(data2.includes(x)){
                result=result+`${x} `
            }
            else{
                result=result+ `<span style="color:red;text-decoration:line-through;">${x}</span> `;
                result += `<span style="color:green">${data2[i]}</span> `;
            }
        });

        p.innerHTML=result.trim();
    })
    
})