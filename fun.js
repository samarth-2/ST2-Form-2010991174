console.log("hello world its working")
window.addEventListener('load',()=>{
    
    const li=document.querySelector("#date");
    for(var i=1;i<=31;i++)
    {
        var ele=document.createElement("option");
        ele.value=i;
        ele.innerHTML=i;
        li.appendChild(ele);
    }

    const month=["January","Feburary","March","April","May","June","July","August","September","October","November","Decemeber"]
    const el=document.querySelector("#month");
    for(var j=0;j<12;j++){
        var a=document.createElement("option");
        a.value=month[j];
        a.innerHTML=month[j];
        el.appendChild(a);

    }
    const yr=document.querySelector("#year");
    for(var k=1990;k<2013;k++){
        var b=document.createElement("option");
        b.value=k;
        b.innerHTML=k;
        yr.appendChild(b);
    }
    
    
})
function display(){
    

    const fname=document.querySelector("#fname").value;
    const lname=document.querySelector("#lname").value;
    console.log(fname)
    console.log(lname)
    let FnameLen=fname.length;
    let flagname=/^[A-Za-z]+$/;
    if(flagname.test(fname)===false)
    {
        alert("FirstName Not filled correctly");
        return;
    }
    if(FnameLen===0 || FnameLen>30)
    {
        alert("FirstName Not filled correctly");
        return;
    }

    
    let LnameLen=lname.length;
    if(flagname.test(lname)===false)
    {
        alert("LastName Not filled correctly");
        return;
    }
    if(LnameLen===0 || LnameLen>30)
    {
        alert("LastName Not filled correctly");
        return;
    }




    const date=document.querySelector("#date").value;
    console.log(date)
    const email=document.querySelector("#email").value;
    console.log(email)
    const month = document.querySelector("#month").value;
    console.log(month)
    const year= document.querySelector("#year").value;
    console.log(year)
    const mno=document.querySelector("#mno").value;
    console.log(mno)
    
    var emailCheck=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(emailCheck.test(email)===false)
    {
        alert("Email is incorrect");
        return;
    }
    
    
    if(mno.length<10 || mno.length>10)
    {
        alert("Add correct Phone Number");
        return;
    }


    var genderValM=document.getElementById("gen1").checked;
    var genderValF=document.getElementById("gen2").checked;
    var gender;
    if(genderValF)
    {
        gender="F";
    }
    if(genderValM)
    {
        gender="M";
    }
    if(genderValF===false && genderValM==false)
    {
        alert("Fill Gender");
        return;
    }

    const address=document.querySelector("#adr").value;
    console.log(address)
    const city=document.querySelector("#city").value;
    console.log(city)
    const pin=document.querySelector("#pin").value;
    console.log(pin)
    const state=document.querySelector("#state").value;
    console.log(state)
    const country =document.querySelector("#cunt").value;
    console.log(country)
    

    var check=/^[#.0-9a-zA-Z\s,-]+$/;
    if(check.test(address)===false)
    {
        alert("fill address field");
        return;
    }

    
    let flagCity=/^[A-Za-z]+$/;
    if(flagCity.test(city)===false)
    {
        alert("fill city field correctly");
        return;
    }
    else
    {
        if(city.length===0 || city.length>30)
        {
            
            alert("fill city field correctly");
            return;
        }
    }


    
    if(pin.length!=6)
    {
        alert("fill pincode correctly");
        return;
    }


    
    let flagstate=/^[A-Za-z]+$/;
    if(flagstate.test(state)===false)
    {
        alert("fill state field correctly");
        return;
    }
    else
    {
        if(state.length===0 || state.length>30)
        {
            
            alert("fill state field correctly");
            return;
        }
    }
    var hobbielis=[];
    var flagHobb=0;
    for(var i=1;i<=5;i++)
    {
        var ss=i.toString();
        var s="hob"+ss;
        if(document.getElementById(s).checked===true)
        {
            flagHobb=1;
            hobbielis.push(document.getElementById(s).value);
        }
        
    }
    if(flagHobb===0)
    {
        alert("fill Hobbies correctly");
        return;
    }
    var hobbiefield=document.getElementById("hobbie_field").value;


    console.log(hobbielis);

    var boardlis=[];
    for(var i=1;i<=3;i++)
    {
        var sss=i.toString();
        var q="X"+sss;
        if(document.getElementById(q).value=="")
        {
            alert("fill Board details correctly");
            return;
        }
        else
        {
            if(i==1)
            {
                if(document.getElementById(q).value.length>10)
                {
                    alert("fill Board name length correctly");
                    return;
                }
            }
            if(i==2)
            {
                var ha=document.getElementById(q).value
                var haa=parseFloat(ha).toFixed(2);
                boardlis.push(haa);
            }
            else{
                boardlis.push(document.getElementById(q).value)
            }
            
        }
    }


    

    var twlis=[];
    for(var i=1;i<=3;i++)
    {
        let sss=i.toString();
        let q="XII"+sss;
        if(document.getElementById(q).value=="")
        {
            alert("fill XII details correctly");
            return;
        }
        else
        {
            if(i==1)
            {
                if(document.getElementById(q).value.length>10)
                {
                    alert("fill XII name length correctly");
                    return;
                }
            }
            if(i==2)
            {
                var ha=document.getElementById(q).value
                var haa=parseFloat(ha).toFixed(2);
                twlis.push(haa);
            }
            else{
                twlis.push(document.getElementById(q).value)
            }
            
        }
    }

    var gralis=[];
    for(var i=1;i<=3;i++)
    {
        let sss=i.toString();
        let q="gra"+sss;
        if(document.getElementById(q).value=="")
        {
            alert("fill gra details correctly");
            return;
        }
        else
        {
            if(i==1)
            {
                if(document.getElementById(q).value.length>10)
                {
                    alert("fill gra name length correctly");
                    return;
                }
            }
            if(i==2)
            {
                var ha=document.getElementById(q).value
                var haa=parseFloat(ha).toFixed(2);
                gralis.push(haa);
            }
            else{
                gralis.push(document.getElementById(q).value)
            }
            
        }
    }


    var maslis=[];
    for(var i=1;i<=3;i++)
    {
        let sss=i.toString();
        let q="mas"+sss;
        if(document.getElementById(q).value=="")
        {
            alert("fill mas details correctly");
            return;
        }
        else
        {
            if(i==1)
            {
                if(document.getElementById(q).value.length>10)
                {
                    alert("fill mas name length correctly");
                    return;
                }
            }
            if(i==2)
            {
                var ha=document.getElementById(q).value
                var haa=parseFloat(ha).toFixed(2);
                maslis.push(haa);
            }
            else{
                maslis.push(document.getElementById(q).value)
            }
            
        }
    }
    console.log(gralis)
    console.log(maslis)

    var appliedBca=document.getElementById("c1").checked;
    var appliedBcom=document.getElementById("c2").checked;
    var appliedBsc=document.getElementById("c3").checked;
    var appliedBa=document.getElementById("c4").checked;
    var applied;
    if(appliedBca)
    {
        applied="BCA";
    }
    if(appliedBcom)
    {
        applied="BCOM";
    }
    if(appliedBsc)
    {
        applied="BSE";
    }
    if(appliedBa)
    {
        applied="BA";
    }
    if(appliedBca===false && appliedBcom==false && appliedBsc==false && appliedBa==false)
    {
        alert("Fill Applied for");
        return;
    }


    var fullDetails={
        "name":{"firstName":fname,"lastname":lname},
        "dob":{"day":date,"month":month,"year":year},
        "email":email,
        "phone":mno,
        "gender":gender,
        "address":address,
        "city":city,
        "pincode":pin,
        "state":state,
        "country":country,
        "hobbies":hobbielis,
        "hobbie_field":hobbiefield,
        "qualifications":{"classX":boardlis,"classXII":twlis,"graduation":gralis,"masters":maslis},
        "applied":applied
    }

    console.log(fullDetails);

    localStorage.setItem("data", JSON.stringify(fullDetails));
    location.href = "pg.html";


    



   
}