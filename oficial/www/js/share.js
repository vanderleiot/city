

function fbShare(){
      window.plugins.socialsharing.shareViaFacebook('Onde você mais gosta de comprar? Fazer uma make? Pedir uma comida ou hamburguer? agora ficou simples e fácil comprar e ganhar pontos no *AzFidelizi* 

*Um Aplicativo onde você ganha pontos e troca em prêmios* verifique onde você mais compra e exija seus pontos! baixe o app faça suas compras e veja seus pontos!!!', 
                                                 'www/css/images/promo.png', 
                                                 "*Confira em* http://app.azfidelizi.com", 
                                                 null, 
                                                 function(errormsg){alert("Facebook não está instalado.")}
                                                 );
};
 
function whatsappShare(){
      window.plugins.socialsharing.shareViaWhatsApp('Onde você mais gosta de comprar? Fazer uma make? Pedir uma comida ou hamburguer? agora ficou simples e fácil comprar e ganhar pontos no *AzFidelizi* 

*Um Aplicativo onde você ganha pontos e troca em prêmios* verifique onde você mais compra e exija seus pontos! baixe o app faça suas compras e veja seus pontos!!!', 
                                                 'www/css/images/banner.png', 
                                                 "*Confira em* http://app.azfidelizi.com", 
                                                 null, 
                                                 function(errormsg){alert("WhatsApp não está instalado.")}
                                                 );
};
 
function twitterShare(){
       window.plugins.socialsharing.shareViaTwitter('Onde você mais gosta de comprar? Fazer uma make? Pedir uma comida ou hamburguer? agora ficou simples e fácil comprar e ganhar pontos no *AzFidelizi* 

*Um Aplicativo onde você ganha pontos e troca em prêmios* verifique onde você mais compra e exija seus pontos! baixe o app faça suas compras e veja seus pontos!!! ', 
                                                 'www/css/images/promo.png', 
                                                 "*Confira em* http://app.azfidelizi.com", 
                                                 null, 
                                                 function(errormsg){alert("Twitter não está instalado.")}
                                                 );
  };

function otherShare(){
       window.plugins.socialsharing.share('Onde você mais gosta de comprar? Fazer uma make? Pedir uma comida ou hamburguer? agora ficou simples e fácil comprar e ganhar pontos no *AzFidelizi* 

*Um Aplicativo onde você ganha pontos e troca em prêmios* verifique onde você mais compra e exija seus pontos! baixe o app faça suas compras e veja seus pontos!!! ', 
                                                 'www/css/images/promo.png', 
                                                 "Confira em* http://app.azfidelizi.com", 
                                                 null, 
                                                 );
  };

