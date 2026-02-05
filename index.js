function validateForm(){
if(name.value=="" || email.value=="" || msg.value==""){
alert("Please fill all fields");
return false;
}
alert("Message Sent Successfully");
return true;
}