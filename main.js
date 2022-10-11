var participants= [];
const getWinner = (data) => {
    const aleat=Math.floor(Math.random()* data.length);
    $("#selected").html("<strong>Seleccionado </strong>" + data[aleat].name)
};
const showParticipants=(data) => {//recibe participants (que es data)
    let arrayAuxiliar = [];//let y var es lo mismo
    data.forEach(element =>{
        arrayAuxiliar.push(element.name);
    });

    //$("#users").text("Participants: " + arrayAuxiliar);
    $("#users").text("Participants: </strong>" + arrayAuxiliar);
};
$(document).ready(function(){
    $.ajax({
        Type: "GET",
        url:"https://jsonplaceholder.typicode.com/users",
        contentType:"application/json",
        success: function (response){
            participants=response;
            showParticipants(participants);
        },
        error:function(error){
            console.log(error);
            alert(error);
        }
    })

$(".btn").click(function (){
    getWinner(participants);
});
});