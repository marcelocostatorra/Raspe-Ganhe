$(document).ready(function () {
    $('.navbar-toggler, .overlay-background').click(function(){
        if ($(this).hasClass('collapsed')) {
            $('body').addClass('overflow-hidden');
        }else{
            $('body').removeClass('overflow-hidden');
        }
    });
    $('.filter-ticket button, .filter-ticket a').click(function(){
        $(".content-filter").children().children().removeClass("show");
        $('.filter-ticket button, .filter-ticket a').removeClass("active");
        $(this).addClass("active");
    });

    $('.content-filter .stacked-cards li div.info a').click(function(){
        alert("foi");
    });
    
    var url = location.href;
    var url_parts = url.replace(/\/\s*$/,'').split('/').pop(); 
    var links = "termos-privacidade.html#approved";
    var linksopen = "termos-privacidade.html";
    var links2 = "termos-privacidade#approved";
    var linksopen2 = "termos-privacidade";
    // console.log(url_parts)

    if (url_parts == links || url_parts == links2) {
        $('.termos .custom-switch, .termos .btn-primary, .termos .voltar-login').hide();
        $('button.navbar-toggler').show();
    }else if(url_parts == linksopen || url_parts == linksopen2){
        $('.termos .custom-switch, .termos .btn-primary, .termos .voltar-login').show();
        $('button.navbar-toggler').hide();
    }

    var linkperfil = "perfil.html#approved";
    var linkperfilopen = "perfil.html?";
    var linkperfil2 = "perfil#approved";
    var linkperfilopen2 = "perfil";

    if (url_parts == linkperfil || url_parts == linkperfil2) {
        $('button.navbar-toggler').show();
    }else if(url_parts == linkperfilopen || url_parts == linkperfilopen2){
        $('button.navbar-toggler').hide();
    }

    if (url_parts == "meus-bilhetes.html" || url_parts == "meus-bilhetes" || url_parts == "meus-bilhetes.html?") {
        $("header .navbar-collapse .navbar-nav .nav-item:nth-of-type(2) a").addClass("active");
    }else if(url_parts == "ganhadores.html" || url_parts == "ganhadores"){
        $("header .navbar-collapse .navbar-nav .nav-item:nth-of-type(3) a").addClass("active");
    }else if(url_parts == "como-aplicar.html" || url_parts == "como-aplicar"){
        $("header .navbar-collapse .navbar-nav .nav-item:nth-of-type(4) a").addClass("active");
    }else if(url_parts == "termos-privacidade.html#approved" || url_parts == "termos-privacidade#approved"){
        $("header .navbar-collapse .navbar-nav .nav-item:nth-of-type(5) a").addClass("active");
        $(".termos").addClass("vh-100");
        $(".termos .termo-privacidade").css({"height":"410px"});
    }

    setInterval(function()
	{
		$('.card-raspe .overlay-background').hide();
	}, 8000);

    $('.card-raspe .overlay-background').click(function(){
        $(this).hide();
    });

    document.addEventListener('touchmove', function(e) {
        $('.card-raspe .overlay-background').hide();
    }, false);
    
    // Máscara para campos de telefone
    $('.phones').mask('(00) 0000-00009');
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
    $('.cpf').mask('000.000.000-00');


    // Visualizar senhas
    $(this).attr('data-click-state', 1);
    $('.eye').on('click',function(){
        var input = $("#senha, #senhaRec");
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).attr("src", "https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/eye-hover.svg");
            $(this).parent(".has-float-label").children("input").attr("type", "text");
            $(input).value = $(input).value;
        }else {
            $(this).attr('data-click-state', 1);
            $(this).attr("src", "https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/eye.svg");
            $(this).parent(".has-float-label").children("input").attr("type", "password");
            $(input).value = $(input).value;
        }
    });

    // Tratamento de campos de entrada numérica com hífens
    $('.number').on('input', function (event) {
        var input = $(this);
        var myLength = input.val().trim().length;

        if (myLength === 1) {
            input.parent().parent().next('div.box-number').find('input').focus();
            input.next('.number').val('');
        }
    }).keydown(function (event) {
        if (event.key === "Backspace" || event.key === "Delete") {
            var input = $(this);
            input.val('');

            var myLength = input.val().trim().length;
            if (myLength === -1, 1) {
                input.parent().parent().prev('div.box-number').find('input').focus();
                input.next('.number').val('');
            }

            event.preventDefault();
        }
    });

    $('.mask-phone span').mask('(00) 00000-');
    $('.mask-phone span + span').text('-••••••');
    $('.mask-email span').mask('AAAA');
    $('.mask-email span + span').text('••••••@');
    $('.mask-email span + span + i').mask('AAAAAAAAAA');
    $('.mask-email span + span + i + i').text('••••••');

    $('.stap .form-check-input').change(function(){
        $('.stap .form-check-input').next(".custom-control-label").addClass("not-fill");
        $('.stap .form-check-input').next().next(".custom-control-label").addClass("not-fill");
        $(this).next(".custom-control-label").removeClass("not-fill");
        $(this).next().next(".custom-control-label").removeClass("not-fill");
    });

    // $(".email").emailautocomplete({
    //     domains: ["example.com"] //add your own domains
    // });

    $(".bt-step").click(function() {
        var cpfValue = $('.stap .cpf').val();
        var phonemailValue = $('.stap .form-check-input').is(':checked');
        var codeValue = $('.stap .box-number:last-child').children().children().val();
        var newsrc="https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/stap-01-start.svg";
        var newsrcte="https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/stap-02-start.svg";
        var newsrccd="https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/stap-03-start.svg";
        var form = $("#form_recuperar");
        form.validate({
            rules : {
                cpf:{
                    required:true,
                    minlength:14
                },
                customRadioInline:{
                    required:true
                },
                numbervalid1:{
                    required:true,
                    number:true,
                    minlength:1
                },
                numbervalid2:{
                    required:true,
                    number:true,
                    minlength:1
                } ,
                numbervalid3:{
                    required:true,
                    number:true,
                    minlength:1
                } ,
                numbervalid4:{
                    required:true,
                    number:true,
                    minlength:1
                } ,
                numbervalid5:{
                    required:true,
                    number:true,
                    minlength:1
                },
                numbervalid6:{
                    required:true,
                    number:true,
                    minlength:1
                }                          
            },
            messages:{
                cpf:{
                    required:"Informe seu cpf <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>",
                    minlength:"14 caracteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
                },
                customRadioInline:{
                    required:"<img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'> Selecione 1 opção"
                },
                numbervalid1:{
                    required:"<img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'> Selecione 1 opção",
                    minlength:"1 caracteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
                },
                numbervalid2:{
                    required:"<img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'> Selecione 1 opção",
                    minlength:"1 caracteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
                },
                numbervalid3:{
                    required:"<img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'> Selecione 1 opção",
                    minlength:"1 caracteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
                },
                numbervalid4:{
                    required:"<img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'> Selecione 1 opção",
                    minlength:"1 caracteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
                },
                numbervalid5:{
                    required:"<img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'> Selecione 1 opção",
                    minlength:"1 caracteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
                },
                numbervalid6:{
                    required:"<img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'> Selecione 1 opção",
                    minlength:"1 caracteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
                }     
            }
        });
        //validação do CPF
        if (cpfValue === "" || cpfValue.trim().length < 14){
            // $('.stap .cpf').addClass("not-fill");
            // $('.stap .cpf').prev().addClass("not-fill");
            // $('.stap .cpf').parent().addClass("not-fill");
        }else if (cpfValue.trim().length >= 14){
            // $('.stap .cpf').removeClass("not-fill");
            // $('.stap .cpf').prev().removeClass("not-fill");
            // $('.stap .cpf').parent().removeClass("not-fill");
            $('.stap .cpf').parent().parent().next().addClass("stap-next");
            $('.stap .cpf').parent().parent().children('button').hide();
            $('.stap .cpf').parent().parent().children().children('i').addClass("orange-bg");
            $('.stap .cpf').parent().parent().children().children('i').children('img').attr("src", newsrc);
        }
        //validação escolha de email e telefone
        if (! phonemailValue) {
            $('.stap.stap-next .form-check-input').next("label").addClass("not-fill");
            $('.stap.stap-next .form-check-input').next().next("label").addClass("not-fill");
        } else {
            $(".login").removeClass("vh-90");
            $('.stap.stap-next .form-check-input').next("label").removeClass("not-fill");
            $('.stap.stap-next .form-check-input').next().next("label").removeClass("not-fill");
            $('.stap .form-check-input').parent().parent().parent().next().addClass("stap-next");
            $('.stap .form-check-input').parent().parent().parent().children('button').hide();
            $('.stap .form-check-input').parent().parent().parent().children().children('i').addClass("orange-bg");
            $('.stap .form-check-input').parent().parent().parent().children().children('i').children('img').attr("src", newsrcte);
        }
        //validação do código
        if (codeValue === "") {
            $('.stap .number').parent().addClass("not-fill");
            $('.stap .number').prev().addClass("not-fill");
        } else if (codeValue.trim().length === 1){
            $('.stap .number').removeClass("not-fill");
            $('.stap .number').prev().removeClass("not-fill");
            $('.stap .number').parent().parent().parent().next().show();
            $('.stap .number').parent().parent().parent().parent().parent().parent().children().children('i').addClass("orange-bg");
            $('.stap .number').parent().parent().parent().parent().parent().parent().children().children('i').children('img').attr("src", newsrccd);
        }

    });

    $(".filtro-linha").css('opacity', '0.3');
    $('.filtro-box').click(function(){
        $(".ganhadores").removeClass("flex-column");
        $(".ganhadores").addClass("flex-row");
        $(".filtro-linha").css('opacity', '1');
        $(".filtro-box").css('opacity', '0.3');
    });
    $('.filtro-linha').click(function(){
        $(".ganhadores").removeClass("flex-row");
        $(".ganhadores").addClass("flex-column");
        $(".filtro-box").css('opacity', '1');
        $(".filtro-linha").css('opacity', '0.3');
    });

    $('.copy').click(function(){
        $('#secret-code').select();
        try {
            var ok = document.execCommand('copy');
            if (ok) { 
                $("#secret-code").addClass("copy-select");
                $(".card-raspe .premio i").css('opacity', '1');
            }
            } catch (e) {
            alert(e)
        }
    });

    $.validator.addMethod("alpha", function(value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
        // --                                    or leave a space here ^^
    });
    // $.validator.addMethod("email", function(value, element) {
    //     return this.optional(element) || value == value.match(/^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$/);
    // });

    //Cursor iniciar no final da imput
    $('input').click(function(){
        $(this).value = $(this).value;
    });

    $("#form_login").validate({
        rules : {
            cpf:{
                required:true,
                minlength:14
            },
            senha:{
                required:true,
                minlength:6
            }                          
        },
        messages:{
            cpf:{
                required:"Informe seu cpf <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>",
                minlength:"14 caracteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
            },
            senha:{
                required:"Informar a senha <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>",
                minlength:"6 catacteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
            }     
        }
    });
    $("#form_trocasenha").validate({
        rules : {
            senha:{
                required:true,
                minlength:6
            },
            senhaRec:{
                required:true,
                minlength:6,
                equalTo: "#senha"
            }                          
        },
        messages:{
            senha:{
                required:"Informar a senha <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>",
                minlength:"6 catacteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
            },
            senhaRec:{
                required:"Informar a senha <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>",
                minlength:"6 catacteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>",
                equalTo: "Mesma senha acima <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
            }     
        }
    });
    $("#primeiro_acesso").validate({
        rules : {
            cpf:{
                required:true,
                minlength:14
            }                        
        },
        messages:{
            cpf:{
                required:"Informe seu cpf <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>",
                minlength:"14 caracteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
            }    
        }
    });
    $("#resposta_valida").validate({
        rules : {
            customRadioInline:{
                required:true
            }                        
        },
        messages:{
            customRadioInline:{
                required:"<img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'> Selecione 1 opção"
            }    
        }
    });
    
    $("#valida-perfil").validate({
        rules : {
            nome:{
                required:true,
                alpha: true,
                minlength: 5
            },
            email:{
                required:true,
                email: true
            },
            phones:{
                required:true
            },
            senha:{
                required:true,
                minlength:6
            },
            senhaRec:{
                required:true,
                minlength:6,
                equalTo: "#senha"
            }                         
        },
        messages:{
            nome:{
                required:"Campo obrigatório <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>",
                alpha:"Apenas letras <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>",
                minlength: "5 caracteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
            },
            email:{
                required:"Campo obrigatório <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>",
                email: "E-mail inválido <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
            },
            phones:{
                required:"Campo obrigatório <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
            },
            senha:{
                required:"Informar a senha <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>",
                minlength:"6 catacteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
            },
            senhaRec:{
                required:"Informar a senha <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>",
                minlength:"6 catacteres <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>",
                equalTo: "Mesma senha acima <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
            }     
        }
    });
    $('.termo-privacidade').scrollTop($('.termo-privacidade')[0].scrollHeight);

    $("#termo-priva").validate({
        rules : {
            customSwitch:{
                required:true
            },                        
        },
        messages:{
            customSwitch:{
                required:"Clique no aceite <img src='https://servidorpitaia.com.br/clientes/lojastorra/Raspe_Ganhe/image/error.svg'>"
            }    
        }
    });
    
    var startF = $('.termo-privacidade p:last-child'); 
    $('.termo-privacidade').scrollTop($('#inicio').offset().top);


    $(window).on('touchmove', function() {
        $(".termo-privacidade").scroll(function() {
            var div_heigh = $(".termo-privacidade .envo").height(); // pega a altura da div
            var win_heigh = window.innerHeight; // pega a altura da janela
            var win_scrol = $(this).scrollTop(); // pega o valor da rolagem da janela
            var div_topo  = $(".termo-privacidade .envo").offset().top; // distância da div até o início do documento
            var distancia = div_topo - win_scrol - win_heigh; // distância da div até a borda inferior da janela
    
            if (distancia <= -div_heigh) {
                console.log("foi");
                $("#customSwitch").prop( "checked", true );
            }else{
                $("#customSwitch").prop( "checked", false );
            }
    
        });
    });


    

    // // Mobile 
    // var isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
    // if ($(window).width() < 680 || isMobile) {

        
    // }else{


    // }
});

 

// Mobile 
var isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
// Resize para Mobile
$(window).resize(function() {

});