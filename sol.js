const calculateAnswer = (email)=>{
    const[localPart,domain] = email.split("@");
    const[hostname,...country] = domain.split(".");
    return `${localPart.length}${hostname.length}${countryCodes.reduce((a,acc)=>a+cc.lebgth,0)}`;
};
