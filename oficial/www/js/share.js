

function fbShare(){
      window.plugins.socialsharing.shareViaFacebook('Onde voc� mais gosta de comprar? Fazer uma make? Pedir uma comida ou hamburguer? agora ficou simples e f�cil comprar e ganhar pontos no *AzFidelizi*�

*Um Aplicativo onde voc� ganha pontos e troca em pr�mios* verifique onde voc� mais compra e exija seus pontos! baixe o app fa�a suas compras e veja seus pontos!!!', 
                                                 'www/css/images/promo.png', 
                                                 "*Confira em* http://app.azfidelizi.com", 
                                                 null, 
                                                 function(errormsg){alert("Facebook n�o est� instalado.")}
                                                 );
};
 
function whatsappShare(){
      window.plugins.socialsharing.shareViaWhatsApp('Onde voc� mais gosta de comprar? Fazer uma make? Pedir uma comida ou hamburguer? agora ficou simples e f�cil comprar e ganhar pontos no *AzFidelizi*�

*Um Aplicativo onde voc� ganha pontos e troca em pr�mios* verifique onde voc� mais compra e exija seus pontos! baixe o app fa�a suas compras e veja seus pontos!!!', 
                                                 'www/css/images/banner.png', 
                                                 "*Confira em* http://app.azfidelizi.com", 
                                                 null, 
                                                 function(errormsg){alert("WhatsApp n�o est� instalado.")}
                                                 );
};
 
function twitterShare(){
       window.plugins.socialsharing.shareViaTwitter('Onde voc� mais gosta de comprar? Fazer uma make? Pedir uma comida ou hamburguer? agora ficou simples e f�cil comprar e ganhar pontos no *AzFidelizi*�

*Um Aplicativo onde voc� ganha pontos e troca em pr�mios* verifique onde voc� mais compra e exija seus pontos! baixe o app fa�a suas compras e veja seus pontos!!! ', 
                                                 'www/css/images/promo.png', 
                                                 "*Confira em* http://app.azfidelizi.com", 
                                                 null, 
                                                 function(errormsg){alert("Twitter n�o est� instalado.")}
                                                 );
  };

function otherShare(){
       window.plugins.socialsharing.share('Onde voc� mais gosta de comprar? Fazer uma make? Pedir uma comida ou hamburguer? agora ficou simples e f�cil comprar e ganhar pontos no *AzFidelizi*�

*Um Aplicativo onde voc� ganha pontos e troca em pr�mios* verifique onde voc� mais compra e exija seus pontos! baixe o app fa�a suas compras e veja seus pontos!!! ', 
                                                 'www/css/images/promo.png', 
                                                 "Confira em* http://app.azfidelizi.com", 
                                                 null, 
                                                 );
  };

